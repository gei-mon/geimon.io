const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const formidable = require('formidable');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./db');
const { createClient } = require('@supabase/supabase-js');
const bodyParser = require('body-parser');
require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');
const { TotemExecutor } = require('./utils/totemExecutor.cjs');
const { cards } = require('./data/cards.js');

// In-memory storage
let sessions = {};

const SUPABASE_URL = 'https://hptpfajsevuezirmdmrp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwdHBmYWpzZXZ1ZXppcm1kbXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNzY4MzQsImV4cCI6MjA2MjY1MjgzNH0.iyytlalrzZ3YGAZbf9i5TZnPaDlh-XiP0RWJKdLCKC4';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const app = express();
const PUBLIC_DIR = path.join(__dirname, 'Public');
app.use('/Public', express.static(path.join(__dirname, 'Public')));
app.use('/data', express.static(path.join(__dirname, 'data'), {
  setHeaders: (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
}));
app.use('/utils', express.static(path.join(__dirname, 'utils'), {
  setHeaders: (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
}));

// CORS setup
const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  'https://gei-mon.github.io',
  'https://geimon-app-833627ba44e0.herokuapp.com',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

const herokuBaseUrl = process.env.HEROKU_BASE_URL || 'https://geimon-app-833627ba44e0.herokuapp.com';

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true
  }
});

// Middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(PUBLIC_DIR));

app.set('view engine', 'ejs');

const openRooms = new Map(); // roomId -> [socketIds]
const userMap = new Map();

const defaultZones = () => ({
  Deck: [],
  Hand: [],
  Tomb: [],
  Void: [],
  "Zone (Champion)": [],
  "Zone (Arsenal)": [],
  "FaceDownZone": [],
  "FaceDownArsenalZone": [],
  Reserve: []
});

function generateRoomId() {
  return Math.random().toString(36).substring(2, 8);
}

const totemFadeStatus = new Map();
const totemFadeWaited = new Set();

io.on('connection', (socket) => {
  socket.on('init', ({ username, roomId }) => {
    let joinedRoom = roomId;

    if (joinedRoom && openRooms.has(joinedRoom) && openRooms.get(joinedRoom).length < 2) {
      openRooms.get(joinedRoom).push(socket.id);
    } else {
      // Find available or create new
      joinedRoom = null;
      for (const [rId, sockets] of openRooms.entries()) {
        if (sockets.length === 1) {
          sockets.push(socket.id);
          joinedRoom = rId;
          break;
        }
      }

      if (!joinedRoom) {
        joinedRoom = generateRoomId();
        openRooms.set(joinedRoom, [socket.id]);
      }
    }

    socket.join(joinedRoom);
    userMap.set(socket.id, { username, roomId: joinedRoom });
    socket.emit('room_joined', { roomId: joinedRoom });

      const roomSockets = openRooms.get(joinedRoom);

      if (roomSockets.length === 2) {
        const [socketId1, socketId2] = roomSockets;
        const user1 = userMap.get(socketId1);
        const user2 = userMap.get(socketId2);

        io.to(socketId1).emit('user_joined', { otherUser: user2.username });
        io.to(socketId2).emit('user_joined', { otherUser: user1.username });
      }
  });

  socket.on('message', (text) => {
    const user = userMap.get(socket.id);
    if (!user) return;
    const { roomId, username } = user;
    io.to(roomId).emit('message', { username, text });
  });

  socket.on('typing', (isTyping) => {
    const user = userMap.get(socket.id);
    if (!user) return;
    socket.to(user.roomId).emit('typing', { username: user.username, isTyping });
  });

  socket.on('disconnect', () => {
    const user = userMap.get(socket.id);
    if (!user) return;

    const { roomId, username } = user;
    const updated = (openRooms.get(roomId) || []).filter(id => id !== socket.id);
    if (updated.length === 0) openRooms.delete(roomId);
    else openRooms.set(roomId, updated);

    const roomSockets = openRooms.get(roomId);
    if (roomSockets && roomSockets.length === 1) {
      const remainingSocketId = roomSockets[0];
      const remainingUser = userMap.get(remainingSocketId);
      io.to(remainingSocketId).emit('user_left', { otherUser: username });
    }

    userMap.delete(socket.id);
  });
  socket.on("join_game_room", ({ gameId }) => {
    socket.join(gameId);
  });
  socket.on("totem_fade_done", ({ gameId }) => {
    totemFadeStatus.set(gameId, true);
  });
});

const gameStates = new Map();
function createInitialGameState() {
  return {
    player: {
      Deck: [],
      Hand: [],
      Tomb: [],
      Void: [],
      "Zone (Champion)": [],
      "Zone (Arsenal)": [],
      Reserve: []
    },
    opponent: {
      Deck: [],
      Hand: [],
      Tomb: [],
      Void: [],
      "Zone (Champion)": [],
      "Zone (Arsenal)": [],
      Reserve: []
    }
  };
}

app.post('/startGame', async (req, res) => {
  try {
    const {
      gameId,
      playerUsername,
      opponentUsername,
      playerDeck,
      opponentDeck,
      isSinglePlayer,
      goesFirst,
      totem // ✅ new field
    } = req.body;

    if (!playerUsername || !playerDeck) {
      return res.status(400).json({ error: "Missing player or deck" });
    }

    if (!goesFirst) {
      return res.status(400).json({ error: "Missing 'goesFirst' in request body" });
    }

    const opponent = isSinglePlayer ? "Bot" : opponentUsername;

    const initialPlayerState = (deck) => ({
      ...defaultZones(),
      life: 40,
      Deck: deck.map(id => ({
        id,
        boardState: "Deck",
        lastBoardState: null
      })),
      Hand: [],
      drawnStartingHand: false
    });

    const gameState = {
      [playerUsername]: initialPlayerState(playerDeck),
      [opponent]: initialPlayerState(opponentDeck),
      turn: {
        count: 1,
        currentPlayer: goesFirst,
        currentPhase: "Intermission"
      },
      player1: goesFirst,
      player2: goesFirst === playerUsername ? opponent : playerUsername,
      totem: totem || null // ✅ store selected totem
    };

    // ✅ Apply totem rules using TotemExecutor
    if (totem) {
      const totemExecutor = new TotemExecutor(totem, gameState);
      totemExecutor.applyRules();

      // Optional: if startingLife is modified, apply to each player
      if (typeof gameState.startingLife === "number") {
        gameState[playerUsername].life = gameState.startingLife;
        gameState[opponent].life = gameState.startingLife;
      }
    }

    // Draw 5 for each player before game starts
    [playerUsername, opponent].forEach(user => {
      const deck = gameState[user].Deck;
      const drawn = deck.splice(0, 5);
      drawn.forEach(card => {
        card.lastBoardState = "Deck";
        card.boardState = "Hand";
      });
      gameState[user].Hand.push(...drawn);
      gameState[user].drawnStartingHand = true;
    });

    gameStates.set(gameId, gameState);

    if (goesFirst === "Bot") {
      setTimeout(() => {
        performBotTurn(gameState, gameId);
      }, 3500);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error in /startGame:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/updateGameState', (req, res) => {
  const { gameId, owner, updatedZones, updatedValues } = req.body;

  const gameState = gameStates.get(gameId);
  if (!gameState || !gameState[owner]) {
    return res.status(400).json({ error: "Invalid game or player" });
  }

  // ✅ Apply zone updates
  if (updatedZones) {
    for (const zone in updatedZones) {
      gameState[owner][zone] = updatedZones[zone];
    }
  }

  // ✅ Apply non-zone field updates like playerAttackCount
  if (updatedValues) {
    Object.assign(gameState[owner], updatedValues);
  }

  // ✅ Save updated state
  gameStates.set(gameId, gameState);

  // ✅ Send back updated player zone for confirmation
  res.status(200).json({
    success: true,
    updatedPlayerZone: gameState[owner]
  });
});

app.get('/getGameState/:gameId', (req, res) => {
  const gameId = req.params.gameId;
  const state = gameStates.get(gameId);

  if (!state) return res.status(404).json({ error: "Game not found" });
  res.json(state);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '/profile.html'));
});

function generateSessionId() {
  return crypto.randomBytes(16).toString('hex');
}

// GET /users
app.get('/users', async (req, res) => {
  const { data: users, error } = await supabase
    .from('users')
    .select('username, profile_pic');

  if (error) {
    return res.status(500).json({ message: 'Error fetching users' });
  }

  res.json(users);
});

// POST /users (Register)
app.post('/users', async (req, res) => {
  const { username, password } = req.body;

  const { data: existingUser, error: findError } = await supabase
    .from('users')
    .select('id')
    .eq('username', username)
    .single();

  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const { error: insertError } = await supabase.from('users').insert([
    { username, password, profile_pic: 'Sharpshooter-Square.png', deck_sleeve: 'Rusty.png', zone_art: 'CyrusDustwalker.png' }
  ]);

  if (insertError) {
    return res.status(500).json({ message: 'Database error', details: insertError.message });
  }

  res.status(200).json({ message: 'User added successfully' });
});

// POST /login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Retrieve user from database
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single();

  if (error || !user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create session
  const sessionId = generateSessionId();
  sessions[sessionId] = user.username;

  res.cookie('session', sessionId, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    path: '/',
  });

  res.status(200).json({ message: 'Login successful' });
});

app.get('/profile-images', (req, res) => {
  const dirPath = path.join(__dirname, 'Public', 'Images', 'Profile Pictures');

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Error reading profile pictures directory:', err);
      return res.status(500).json({ error: 'Could not read image directory' });
    }

    // Only send .png/.jpg/etc. files
    const imageFiles = files.filter(file =>
      /\.(png|jpg|jpeg|gif)$/i.test(file)
    );

    res.json(imageFiles);
  });
});

app.post('/select-profile-image', async (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];
  const selectedImage = req.body.selectedImage;

  try {
    const { error } = await supabase
      .from('users')
      .update({ profile_pic: selectedImage })
      .eq('username', username);

    if (error) {
      throw error;
    }

    res.status(200).json({ message: 'Profile picture updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update profile picture', error: err.message });
  }
});

function listImages(dirPath) {
  const fullPath = path.join(__dirname, 'Public', 'Images', dirPath);
  return fs.readdirSync(fullPath).filter(file =>
    /\.(jpg|jpeg|png|gif)$/i.test(file)
  );
}

// API route: return list of sleeve images
app.get('/sleeve-images', (req, res) => {
  try {
    const sleeves = listImages('Sleeves');
    res.json(sleeves);
  } catch (err) {
    console.error('Error reading sleeve images:', err);
    res.status(500).json({ error: 'Failed to load sleeve images' });
  }
});

// API route: return list of zone images
app.get('/zone-images', (req, res) => {
  try {
    const zones = listImages('Zones');
    res.json(zones);
  } catch (err) {
    console.error('Error reading zone images:', err);
    res.status(500).json({ error: 'Failed to load zone images' });
  }
});

app.post('/select-sleeve-image', async (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];
  const selectedSleeve = req.body.selectedSleeve;

  try {
    const { error } = await supabase
      .from('users')
      .update({ deck_sleeve: selectedSleeve })
      .eq('username', username);

    if (error) throw error;

    res.status(200).json({ message: 'Sleeve updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update sleeve', error: err.message });
  }
});

app.post('/select-zone-image', async (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];
  const selectedZone = req.body.selectedZone;

  try {
    const { error } = await supabase
      .from('users')
      .update({ zone_art: selectedZone })
      .eq('username', username);

    if (error) throw error;

    res.status(200).json({ message: 'Zone updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update zone', error: err.message });
  }
});

const { v4: uuidv4 } = require('uuid');
app.post('/createDeck', async (req, res) => {
    const sessionId = req.cookies.session;
    const username = sessions[sessionId];
    const deckName = req.body.deck_name;
    const cardIds = req.body.card_ids || []; // 👈 NEW: Accept optional card_ids

    if (!deckName) return res.status(400).json({ success: false, error: "Deck name required" });

    if (!username) {
        return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    try {
        // Check for duplicate deck name
        const { data: existingDecks, error: fetchError } = await supabase
            .from('decks')
            .select('deck_name')
            .eq('user_name', username)
            .eq('deck_name', deckName);

        if (fetchError) throw fetchError;
        if (existingDecks.length > 0) {
            return res.status(200).json({ success: false, message: 'Deck name already exists' });
        }

        const deckId = uuidv4();

        // 👇 NEW: Insert the new deck, with card_ids (empty array or copied cards)
        const { error: insertError } = await supabase
            .from('decks')
            .insert([{ 
                deck_id: deckId, 
                user_name: username, 
                deck_name: deckName, 
                card_ids: cardIds,     // 👈 NEW: Use incoming card_ids if provided
                legal: false 
            }]);

        if (insertError) throw insertError;

        res.status(200).json({ success: true, message: 'Deck created successfully', deckId });
    } catch (err) {
        console.error('Error creating deck:', err);
        res.status(500).json({ success: false, message: 'Error creating deck', error: err.message });
    }
});

// Endpoint to get decks by user
app.get('/getUserDecks', async (req, res) => {
    const sessionId = req.cookies.session;
    const username = sessions[sessionId];

    try {
        const { data, error } = await supabase
            .from('decks')
            .select('deck_name, legal')
            .eq('user_name', username);

        if (error) throw error;

        res.json({ success: true, decks: data });
    } catch (err) {
        console.error("Error fetching decks:", err);
        res.status(500).json({ success: false, message: "Error fetching decks" });
    }
});

app.get("/getDeck", async (req, res) => {
    try {
        const { deck_name } = req.query;

        if (!deck_name) {
            return res.status(400).json({ error: "Missing deck_name parameter" });
        }

        const { data, error } = await supabaseClient
            .from("decks")
            .select("card_ids")
            .eq("deck_name", deck_name)
            .single();

        if (error) {
            console.error("Error fetching deck:", error);
            return res.status(500).json({ error: "Error fetching deck data" });
        }

        const cardIds = data ? data.card_ids : [];

        res.json({ card_ids: cardIds });

    } catch (err) {
        console.error("Error in /getDeck:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/getDeckCards', async (req, res) => {
    const sessionId = req.cookies.session;
    const username = sessions[sessionId];
    const { deck_name } = req.body;

    if (!username) {
        return res.status(401).json({ success: false, message: 'User not authenticated' });
    }

    if (!deck_name) {
        return res.status(400).json({ success: false, message: 'Deck name is required' });
    }

    try {
        const { data: deck, error } = await supabase
            .from('decks')
            .select('card_ids')
            .eq('user_name', username)
            .eq('deck_name', deck_name)
            .single();

        if (error) throw error;

        if (!deck) {
            return res.status(404).json({ success: false, message: 'Deck not found' });
        }

        res.status(200).json({ success: true, card_ids: deck.card_ids });
    } catch (err) {
        console.error('Error fetching deck cards:', err);
        res.status(500).json({ success: false, message: 'Error fetching deck cards', error: err.message });
    }
});

app.post('/renameDeck', async (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];
  const { old_deck_name, new_deck_name } = req.body;

  if (!username) {
    return res.status(401).json({ success: false, message: 'User not authenticated' });
  }
  if (!old_deck_name || !new_deck_name) {
    return res.status(400).json({ success: false, message: 'Old and new deck names are required' });
  }

  try {
    // Check if new deck name already exists for the user
    const { data: existingDecks, error: fetchError } = await supabase
      .from('decks')
      .select('deck_name')
      .eq('user_name', username)
      .eq('deck_name', new_deck_name);

    if (fetchError) throw fetchError;
    if (existingDecks.length > 0) {
      return res.status(400).json({ success: false, message: 'New deck name already exists' });
    }

    // Update the deck name
    const { error: updateError } = await supabase
      .from('decks')
      .update({ deck_name: new_deck_name })
      .eq('user_name', username)
      .eq('deck_name', old_deck_name);

    if (updateError) throw updateError;

    res.status(200).json({ success: true, message: 'Deck renamed successfully' });
  } catch (err) {
    console.error('Error renaming deck:', err);
    res.status(500).json({ success: false, message: 'Error renaming deck', error: err.message });
  }
});

app.get('/isLegal', async (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];
  const { deck_name } = req.query;

  if (!username) {
    return res.status(401).json({ success: false, message: 'User not authenticated' });
  }
  if (!deck_name) {
    return res.status(400).json({ success: false, message: 'Deck name is required' });
  }

  try {
    const { data: deck, error } = await supabase
      .from('decks')
      .select('legal')
      .eq('user_name', username)
      .eq('deck_name', deck_name)
      .single();

    if (error) throw error;

    if (!deck) {
      return res.status(404).json({ success: false, message: 'Deck not found' });
    }

    res.status(200).json({ success: true, legal: deck.legal });
  } catch (err) {
    console.error('Error checking deck legality:', err);
    res.status(500).json({ success: false, message: 'Error checking deck legality', error: err.message });
  }
});

app.post('/saveDeck', async (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];
  const { deck_name, card_ids } = req.body;

  if (!username) {
    return res.status(401).json({ success: false, message: 'User not authenticated' });
  }

  if (!deck_name || !Array.isArray(card_ids)) {
    return res.status(400).json({ success: false, message: 'Invalid data' });
  }

  try {
    // Update the deck with new card IDs
    const { error } = await supabase
      .from('decks')
      .update({ card_ids: card_ids })
      .eq('user_name', username)
      .eq('deck_name', deck_name);

    if (error) throw error;

    res.status(200).json({ success: true, message: 'Deck saved' });
  } catch (err) {
    console.error('Error saving deck:', err);
    res.status(500).json({ success: false, message: 'Error saving deck', error: err.message });
  }
});

app.post('/deleteDeck', async (req, res) => {
  const sessionId = req.cookies.session;
  const username = sessions[sessionId];
  const { deck_name } = req.body;

  if (!username) {
    return res.status(401).json({ success: false, message: 'User not authenticated' });
  }
  if (!deck_name) {
    return res.status(400).json({ success: false, message: 'Deck name required' });
  }

  try {
    // Delete deck owned by the logged-in user
    const { error } = await supabase
      .from('decks')
      .delete()
      .eq('user_name', username)
      .eq('deck_name', deck_name);

    if (error) {
      throw error;
    }

    res.status(200).json({ success: true, message: 'Deck deleted successfully' });
  } catch (err) {
    console.error('Error deleting deck:', err);
    res.status(500).json({ success: false, message: 'Failed to delete deck', error: err.message });
  }
});

app.post('/endGame', (req, res) => {
    const { gameId, loser, reason } = req.body;

    const game = gameStates.get(gameId);
    if (!game) {
        return res.status(404).json({ success: false, message: "Game not found" });
    }

    const winner = [game.player1, game.player2].find(name => name !== loser);
    console.log(`Game ${gameId} ended. Loser: ${loser}. Winner: ${winner}. Reason: ${reason}`);

    // Emit to clients
    io.to(gameId).emit("game_over", { loser, winner, reason });

    // Cleanup
    gameStates.delete(gameId);
    return res.json({ success: true, loser, winner, reason });
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForTotemFadeServer(gameId, timeout = 15000) {
  // If we've already waited for this game's totem fade, skip waiting
  if (totemFadeWaited.has(gameId)) return;

  const start = Date.now();
  while (!totemFadeStatus.get(gameId)) {
    if (Date.now() - start > timeout) {
      console.warn(`Timeout waiting for totem fade on game ${gameId}`);
      break;
    }
    await delay(100);
  }

  // Mark that we've waited for this game's totem fade so we don't wait again
  totemFadeWaited.add(gameId);
}

async function performBotTurn(game, gameId) {
  await waitForTotemFadeServer(gameId);
  const phases = ["Intermission", "Draw", "Main 1", "Battle", "Main 2", "End"];

  io.to(gameId).emit("game_log", {
    username: "Bot",
    message: `Bot's turn. Turn #${game.turn.count}`
  });

  for (const phase of phases) {
    if (game.turn.currentPlayer !== "Bot") break;
    if (game.turn.count === 1 && (phase === "Battle" || phase === "Main 2")) continue;

    game.turn.currentPhase = phase;
    console.log(`🤖 Bot now in phase: ${phase}`);
    io.to(gameId).emit("phase_change", {
      phase,
      username: "Bot"
    });
    io.to(gameId).emit("game_log", {
      username: "Bot",
      message: `Bot changed phase to ${phase}`
    });

    if (phase === "Draw") {
      const bot = game["Bot"];
      let cardsToDraw = 1;
      if (game.drawExtraCard) {
        cardsToDraw = 2;
      }

      if (bot.Deck.length < cardsToDraw) {
        const loser = "Bot";
        const winner = (game.player1 === "Bot") ? game.player2 : game.player1;
        const reason = `Bot decked out trying to draw ${cardsToDraw} card(s).`;

        gameStates.delete(gameId);
        io.to(gameId).emit("game_over", { loser, winner, reason });
        return;
      }
      io.to(gameId).emit("opponent_draw_card", {
        username: "Bot",
        count: cardsToDraw
      });

      const drawn = bot.Deck.splice(0, cardsToDraw);
      drawn.forEach(card => {
        card.lastBoardState = "Deck";
        card.boardState = "Hand";
      });
      bot.Hand.push(...drawn);

      const message = cardsToDraw === 1
        ? "Bot drew 1 card"
        : `Bot drew ${cardsToDraw} cards`;

      io.to(gameId).emit("game_log", {
        username: "Bot",
        message
      });
    }

    if (phase === "End") {
      const bot = game["Bot"];
      while (bot.Hand.length > 6) {
        const discardIndex = Math.floor(Math.random() * bot.Hand.length);
        io.to(gameId).emit("opponent_discard_card", {
          username: "Bot",
          count: 1
        });
        let discardedCard = bot.Hand.splice(discardIndex, 1)[0];
        console.log("📦 Discarding card:", discardedCard);

        if (!discardedCard.name) {
          console.warn("🔍 Discarded card missing name, trying to enrich with ID:", discardedCard.id);
          const fullData = cards.find(c => c.id === String(discardedCard.id));
          if (fullData) {
            discardedCard = { ...fullData, ...discardedCard };
            console.log("✅ Enriched discarded card:", discardedCard);
          } else {
            console.error("❌ No matching full card data found for ID:", discardedCard.id);
          }
        }

        discardedCard.lastBoardState = "Hand";
        discardedCard.boardState = "Tomb";
        bot.Tomb.push(discardedCard);

        io.to(gameId).emit("game_log", {
          username: "Bot",
          message: `Bot discarded ${discardedCard.name ?? "[unknown card]"} for hand size limit`,
        });

        const updateLocalFromGameState = () => {};

        io.to(gameId).emit("update_zones", {
          player: "Bot",
          zones: {
            Hand: bot.Hand,
            Tomb: bot.Tomb,
          },
        });

        await delay(500);
      }
    }

    await delay(1500);
  }

  if (game.turn.currentPlayer === "Bot") {
    game.turn.count++;
    game.turn.currentPlayer = (game.turn.currentPlayer === game.player1)
      ? game.player2
      : game.player1;
    game.turn.currentPhase = "Intermission";
    console.log(`🤖 Bot ended turn. Next player: ${game.turn.currentPlayer}`);
  }

  if (game.turn.currentPlayer === "Bot") {
    setTimeout(() => performBotTurn(game, gameId), 300);
  }
}

app.post('/setPhase', (req, res) => {
  const { gameId, username, phase } = req.body;
  const game = gameStates.get(gameId);
  if (!game || game.turn.currentPlayer !== username) {
    return res.status(403).json({ message: "Not your turn" });
  }

  // Block turn 1 Battle and Main 2
  if (game.turn.count === 1 && (phase === "Battle" || phase === "Main 2")) {
    return res.status(400).json({ message: "Phase not allowed on turn 1" });
  }

  // Enforce phase order
  const currentPhase = game.turn.currentPhase;
  const allowedTransitions = {
    "Intermission": ["Draw"],
    "Draw": ["Main 1"],
    "Main 1": ["Battle", "End"],
    "Battle": ["Main 2"],
    "Main 2": ["End"]
  };
  const validNextPhases = allowedTransitions[currentPhase] || [];

  if (!validNextPhases.includes(phase)) {
    // Special case: allow re-entering End to complete post-discard retry
    if (!(currentPhase === "End" && phase === "End")) {
      return res.status(400).json({ message: "Invalid phase transition" });
    }
  }

  game.turn.currentPhase = phase;

  if (phase === "End") {
    return res.json({ success: true, currentPhase: phase, showEndTurnButton: true });
  }
  return res.json({ success: true, currentPhase: phase });
});

app.post('/endTurn', (req, res) => {
  const { gameId, username } = req.body;
  const game = gameStates.get(gameId);

  if (!game || game.turn.currentPlayer !== username) {
    return res.status(403).json({ message: "Not your turn" });
  }

  game.turn.count++;
  game.turn.currentPlayer = (game.turn.currentPlayer === game.player1)
    ? game.player2
    : game.player1;
  game.turn.currentPhase = "Intermission";

  // ✅ Trigger bot if needed
  if (game.turn.currentPlayer === "Bot") {
    setTimeout(() => performBotTurn(game, gameId), 300);
  }

  return res.json({ success: true });
});


// GET /logout
app.get('/logout', (req, res) => {
  const sessionId = req.cookies.session;
  if (sessionId && sessions[sessionId]) {
    delete sessions[sessionId];

    res.cookie('session', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      expires: new Date(0),
    });

    return res.status(200).json({ message: 'Logout successful' });
  }

  res.status(400).json({ message: 'No session found' });
});

// GET /me
app.get('/me', async (req, res) => {
  const sessionId = req.cookies.session;
  console.log('Session ID:', sessionId);  // Log the session ID

  if (!sessionId || !sessions[sessionId]) {
    return res.status(401).json({ loggedIn: false });
  }
  const username = sessions[sessionId];

  if (username) {
    const { data: user } = await supabase
      .from('users')
      .select('username, profile_pic, deck_sleeve, zone_art')
      .eq('username', username)
      .single();

    console.log('Username from session:', username);
    console.log('User from Supabase:', user);

    if (user) {
      const profilePic = user.profile_pic || 'https://geimon-app-833627ba44e0.herokuapp.com/Public/Images/Profile Pictures/Sharpshooter-Square.png';
      const deckSleeve = user.deck_sleeve || 'https://geimon-app-833627ba44e0.herokuapp.com/Public/Images/Sleeves/Rusty.png';
      const zoneArt = user.zone_art || 'https://geimon-app-833627ba44e0.herokuapp.com/Public/Images/Zones/CyrusDustwalker.png';
      return res.json({ loggedIn: true, username: user.username, profilePic, deckSleeve, zoneArt });
    } else {
      res.status(401).json({ loggedIn: false });
    }
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
