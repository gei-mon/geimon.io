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
const { totems } = require('./data/totems.js');
const nodemailer = require('nodemailer');

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

const APP_BASE_URL = process.env.APP_BASE_URL || 'http://localhost:3000';

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

// GET /collection/count?name=<collection_name>
app.get('/collection/count', async (req, res) => {
  const sessionId = req.cookies.session;
  const username  = sessions[sessionId];
  const collection = req.query.name;
  if (!username) {
    return res.status(401).json({ success: false, message: 'Not authenticated' });
  }
  if (!collection) {
    return res.status(400).json({ success: false, message: 'Missing collection name' });
  }
  try {
    const { data, error } = await supabase
      .from('collections')
      .select('card_ids')
      .eq('user_name', username)
      .eq('collection_name', collection)
      .single();
    if (error || !data) {
      return res.status(404).json({ success: false, message: 'Collection not found' });
    }
    const count = Array.isArray(data.card_ids) ? data.card_ids.length : 0;
    return res.json({ success: true, count });
  } catch (err) {
    console.error('Error in /collection/count:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});


// GET a Saga collection by name
app.get('/collection/get', async (req, res) => {
  const sessionId      = req.cookies.session;
  const user_name      = sessions[sessionId];
  const collectionName = req.query.name;
  if (!user_name) {
    return res.status(401).json({ success:false, message:'Not authenticated' });
  }
  if (!collectionName) {
    return res.status(400).json({ success:false, message:'Missing name' });
  }

  try {
    const { data, error } = await supabase
      .from('collections')
      .select('card_ids')
      .eq('user_name',    user_name)
      .eq('collection_name', collectionName)
      .single();

    if (error || !data) {
      return res.status(404).json({ success:false, message:'Not found' });
    }

    return res.json({ success: true, card_ids: data.card_ids });
  } catch (err) {
    console.error('GET /collection/get error:', err);
    return res.status(500).json({ success:false, message:'Server error' });
  }
});

// POST /collection/create
app.post('/collection/create', async (req, res) => {
  const { collection_name, card_ids } = req.body;
  const sessionId = req.cookies.session;
  const user_name = sessions[sessionId];
  if (!user_name) return res.status(401).json({ success:false });
  // Upsert the entire collection
  const { data, error } = await supabase
    .from('collections')
    .upsert([{ user_name, collection_name, card_ids }]);
  if (error) return res.status(500).json({ success:false, message:error.message });
  res.json({ success:true });
});

// POST /collection/add
app.post('/collection/add', async (req, res) => {
  const { collection_name, card_ids } = req.body;
  const sessionId = req.cookies.session;
  const user_name = sessions[sessionId];
  if (!user_name) return res.status(401).json({ success:false });
  // Pull existing
  const { data: existing } = await supabase
    .from('collections')
    .select('card_ids')
    .eq('user_name', user_name)
    .eq('collection_name', collection_name)
    .single();
  if (!existing) return res.status(404).json({ success:false });
  // Merge & dedupe
  const merged = Array.from(new Set([ ...existing.card_ids, ...card_ids ]));
  const { error } = await supabase
    .from('collections')
    .update({ card_ids: merged })
    .eq('user_name', user_name)
    .eq('collection_name', collection_name);
  if (error) return res.status(500).json({ success:false, message:error.message });
  res.json({ success:true });
});

// GET /collection/list
app.get('/collection/list', async (req, res) => {
  const sessionId = req.cookies.session;
  const user = sessions[sessionId];
  if (!user) return res.status(401).json({ success:false });

  const { data: cols, error } = await supabase
    .from('collections')
    .select('collection_name')
    .eq('user_name', user);

  if (error) return res.status(500).json({ success:false });
  res.json({ success:true, collections: cols.map(c=>c.collection_name) });
});

// POST /collection/delete
app.post('/collection/delete', async (req, res) => {
  const sessionId      = req.cookies.session;
  const user_name      = sessions[sessionId];
  const { collection_name } = req.body;

  if (!user_name) {
    return res.status(401).json({ success: false, message: 'Not authenticated' });
  }
  if (!collection_name) {
    return res.status(400).json({ success: false, message: 'Missing collection_name' });
  }

  try {
    // Delete the collection row
    const { error } = await supabase
      .from('collections')
      .delete()
      .eq('user_name', user_name)
      .eq('collection_name', collection_name);

    if (error) {
      throw error;
    }

    return res.json({
      success: true,
      message: `Collection "${collection_name}" deleted successfully`
    });
  } catch (err) {
    console.error('Error in /collection/delete:', err);
    return res.status(500).json({
      success: false,
      message: 'Error deleting collection',
      error: err.message
    });
  }
});

app.post('/saveDeck', async (req, res) => {
  const sessionId = req.cookies.session;
  const username  = sessions[sessionId];
  const { deck_name, card_ids } = req.body;

  if (!username) {
    return res.status(401).json({ success: false, message: 'User not authenticated' });
  }
  if (!deck_name || !Array.isArray(card_ids)) {
    return res.status(400).json({ success: false, message: 'Invalid data' });
  }

  try {
    const { error } = await supabase
      .from('decks')
      .upsert([
        { user_name: username, deck_name, card_ids }
      ], { onConflict: ['user_name','deck_name'] });

    if (error) throw error;

    res.status(200).json({ success: true, message: 'Deck saved' });
  } catch (err) {
    console.error('Error saving deck:', err);
    res.status(500).json({ success: false, message: 'Error saving deck', error: err.message });
  }
});

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

const effectsDir = path.join(PUBLIC_DIR, 'Sounds', 'Effects');
const effectMap  = {};

const attachmentsByGame = {};

if (fs.existsSync(effectsDir)) {
  fs.readdirSync(effectsDir).forEach(file => {
    const name = path.basename(file, path.extname(file));
    effectMap[name] = `https://geimon-app-833627ba44e0.herokuapp.com/Public/Sounds/Effects/${file}`;
  });
} else {
  console.warn(`[sound] Effects directory not found at ${effectsDir}, skipping load.`);
}

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

  socket.on('play_sound', ({ effect, gameId }) => {
    if (!gameId) {
        console.warn("[play_sound] Missing gameId");
        return;
    }

    const url = effectMap[effect];
    if (!url) {
        console.warn(`[play_sound] Unknown effect: ${effect}`);
        return;
    }

    io.to(gameId).emit('play_sound', { effect, url });

    io.in(gameId).fetchSockets().then(sockets => {
      console.log(`[play_sound] Game ${gameId} has ${sockets.length} sockets:`, sockets.map(s => s.id));
    });
  });

  socket.on("match_next_game", (settings) => {
    const { prevGameId } = settings;
    // send to everyone still in the old game room (including the loser if needed)
    io.in(prevGameId).emit("match_next_game", settings);
  });

  socket.on('signal_icon', ({ gameId, icon }) => {
    io.to(gameId).emit('signal_icon', { icon });
  });

  socket.on('toggle_target', ({ gameId, cardId }) => {
    // simply rebroadcast to everyone in the same game room
    io.to(gameId).emit('card_targeted', { cardId });
  });

  socket.on('draw_offer',   ({ gameId, from }) =>
    io.to(gameId).emit('draw_offer',   { from }) );

  socket.on('draw_response',({ gameId, from, response }) =>
    io.to(gameId).emit('draw_result',  { from, response }) );

  socket.on('hand_reveal', ({ gameId, from, reveal }) => {
    const state = gameStates.get(gameId);
    if (!state) {
      console.warn("No game state found for", gameId);
      return;
    }

    if (!state[from]) {
      console.warn("Player", from, "not found in game state keys:", Object.keys(state));
      return;
    }

    state[from].handRevealed = reveal;
    gameStates.set(gameId, state);

    io.to(gameId).emit('hand_reveal', { from, reveal });
  });

  socket.on('temp_reveal_card', ({ gameId, from, cardId }) =>
    io.to(gameId).emit('temp_reveal_card', { from, cardId }) );

  socket.on('declare_event', ({ gameId, cardId }) => {
    io.to(gameId).emit('declare_event', { cardId });
  });

  socket.on('attack_event', ({ gameId, cardId }) => {
    socket.to(gameId).emit('attack_event', { cardId });
  });

  socket.on('coin_flip', ({ gameId, result }) => {
    socket.to(gameId).emit('coin_flip', { result });
  });

  socket.on('dice_roll', ({ gameId, roll }) => {
    socket.to(gameId).emit('dice_roll', { roll });
  });

  socket.on('block_event', ({ gameId, cardId, isFaceDown }) => {
    socket.to(gameId).emit('block_event', { cardId, isFaceDown });
  });

  socket.on('change_control', ({ gameId, cardId, from, to, zone }) => {
    const gs = gameStates.get(gameId);
    if (!gs) return;

    // remove from old owner
    const src = gs[from][zone];
    const idx = src.findIndex(c => String(c.id) === String(cardId));
    if (idx === -1) return;
    const [card] = src.splice(idx, 1);

    // add to new owner (same zone name)
    gs[to][zone].push(card);

    io.to(gameId).emit('sync_zone', { owner: from, zone, cards: gs[from][zone] });
    io.to(gameId).emit('sync_zone', { owner: to,   zone, cards: gs[to][zone]   });
  });

  socket.on(
    "phase_change_request",
    ({ gameId, username: actor, phase }, ack) => {
    const state = gameStates.get(gameId);
    if (!state) {
      return ack({ error: "Game not found" });
    }
    if (state.turn.currentPlayer !== actor) {
      return ack({ error: "Not your turn" });
    }

    // commit phase change
    state.turn.currentPhase = phase;

    // broadcast to all players
    io.to(gameId).emit("phase_change", { phase, username: actor });

    // immediate client ack
    ack({ currentPhase: phase });
    }
  );

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

  socket.on('game_log', ({ gameId, username, message }) => {
    if (!gameId || !message) return;                 // basic sanity check
    io.to(gameId).emit('game_log', { username, message });
  });

  socket.on('life_change', ({ gameId, player, life, delta, from }) => {
    const game = gameStates.get(gameId);
    if (!game || !game[player]) return;
    game[player].life = life;
    io.to(gameId).emit('life_change', { player, life, from });
    io.to(gameId).emit('lifeFlash', { player, life, delta, from });
  });

  socket.on('playerReady', ({ username, ready, deck }) => {
    const user = userMap.get(socket.id);
    if (!user) return;
    io.to(user.roomId).emit('playerReady', { username, ready, deck });
  });

  socket.on('rpsChoice', ({ username, choice }) => {
    const user = userMap.get(socket.id);
    if (!user) return;
    io.to(user.roomId).emit('rpsChoice', { username, choice });
  });

  socket.on('rpsResult', ({ winner, choices }) => {
    const user = userMap.get(socket.id);
    if (!user) return;
    io.to(user.roomId).emit('rpsResult', { winner, choices });
  });

  socket.on('turnOrderChoice', ({ chooser, turn }) => {
    const user = userMap.get(socket.id);
    if (!user) return;

    const allTotems = Object.assign({}, ...totems);
    const names     = Object.keys(allTotems);
    const idx       = Math.floor(Math.random() * names.length);
    const totem     = names[idx];
    const totemText = allTotems[totem];

    io.to(user.roomId).emit('turnOrderChoice', {
      chooser,
      turn,
      totem,
      totemText
    });
  });

  // Handler: attach a card to another
  socket.on('attach_card', ({ gameId, sourceId, targetId, color }) => {
    // Ensure array exists
    if (!attachmentsByGame[gameId]) attachmentsByGame[gameId] = [];
    // Enforce one attachment per source card
    attachmentsByGame[gameId] = attachmentsByGame[gameId]
      .filter(att => att.sourceId !== sourceId);
    // Add the new link
    const attachment = { sourceId, targetId, color };
    attachmentsByGame[gameId].push(attachment);
    // Broadcast to all clients in the game
    io.in(gameId).emit('attach_card', attachment);
  });

  // Handler: remove an existing attachment
  socket.on('remove_attachment', ({ gameId, sourceId, targetId, color }) => {
    const list = attachmentsByGame[gameId];
    if (!list) return;
    // Remove the specific link
    attachmentsByGame[gameId] = list.filter(att =>
      !(att.sourceId === sourceId && att.targetId === targetId && att.color === color)
    );
    // Broadcast removal
    io.in(gameId).emit('remove_attachment', { sourceId, targetId, color });
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

    if (gameStates.has(gameId)) {
      return res.status(200).json({ success: true });  // idempotent – do nothing
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
      drawnStartingHand: false,
      handRevealed: false
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
      io.to(gameId).emit('sync_zone', {
        owner,
        zone,
        cards: gameState[owner][zone]
      });
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

// GET /users (Login)
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
  const { username, email, password } = req.body;

  // 1) Make sure nobody’s already using that username/email in your profile table
  const { data: existingProfile, error: profileCheckError } = await supabase
    .from('users')
    .select('id')
    .or(`username.eq.${username},email.eq.${email}`)
    .single();

  if (profileCheckError && profileCheckError.code !== 'PGRST116') {
    // some DB error other than “no rows found”
    return res.status(500).json({ message: 'Database error', details: profileCheckError.message });
  }
  if (existingProfile) {
    return res.status(409).json({ message: 'Username or email already in use' });
  }

  // 2) Create the Auth user
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password
  });
  if (authError) {
    return res.status(400).json({ message: authError.message });
  }
  const authUser = authData.user;

  // 3) Insert your profile row with a reference to authUser.id
  const { error: insertError } = await supabase
    .from('users')
    .insert([{
      username,
      email,
      auth_id:     authUser.id,
      profile_pic: 'Sharpshooter-Square.png',
      deck_sleeve:'Rusty.png',
      zone_art:    'CyrusDustwalker.png'
    }]);

  if (insertError) {
    // rollback the Auth user so you don't leak
    await supabase.auth.admin.deleteUser(authUser.id).catch(() => {});
    return res.status(500).json({ message: 'Database error', details: insertError.message });
  }

  // 4) All done!
  res.status(200).json({ message: 'User registered successfully' });
});

// POST /login
app.post('/login', async (req, res) => {
  const { identifier, password } = req.body;

  // 1) Determine the email to authenticate with
  let emailToAuth = identifier;
  if (!identifier.includes('@')) {
    // treat identifier as username, look up email in your users table
    const { data: profile, error: profileErr } = await supabase
      .from('users')
      .select('email')
      .eq('username', identifier)
      .single();
    if (profileErr || !profile) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    emailToAuth = profile.email;
  }

  // 2) Authenticate via Supabase Auth
  const {
    data: { user: authUser, session },
    error: authError
  } = await supabase.auth.signInWithPassword({
    email: emailToAuth,
    password
  });
  if (authError || !authUser) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // 3) Fetch the corresponding profile row to get username
  const { data: profile, error: profErr } = await supabase
    .from('users')
    .select('*')
    .eq('auth_id', authUser.id)
    .single();
  if (profErr || !profile) {
    return res.status(500).json({ message: 'User profile not found' });
  }

  // 4) Create your session cookie as before
  const sessionId = generateSessionId();
  sessions[sessionId] = profile.username;

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
  try {
    //const sessionId    = req.cookies.session;
    //const sessionUser  = sessions[sessionId];
    const { deck_name, owner } = req.body;
    const lookupUser = owner;

    // if no explicit owner is given, fall back to the logged-in user
    //const lookupUser = owner || sessionUser;

    // fetch the deck for whichever user we’re looking up
    const { data: deck, error } = await supabase
      .from('decks')
      .select('card_ids')
      .eq('user_name', lookupUser)
      .eq('deck_name', deck_name)
      .maybeSingle();

    if (error) {
      console.error('Error fetching deck cards:', error);
      return res
        .status(500)
        .json({ success: false, message: 'Error fetching deck cards', error: error.message });
    }
    if (!deck) {
      return res.status(404).json({ success: false, message: 'Deck not found' });
    }

    return res.json({ success: true, card_ids: deck.card_ids });
  } catch (err) {
    console.error('Error fetching deck cards:', err);
    return res
      .status(500)
      .json({ success: false, message: 'Error fetching deck cards', error: err.message });
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
    const { gameId, loser, reason, draw = false } = req.body;

    const game = gameStates.get(gameId);
    if (!game) {
        return res.status(404).json({ success: false, message: "Game not found" });
    }

    const winner = draw ? null : [game.player1, game.player2].find(name => name !== loser);
    //console.log(`Game ${gameId} ended. Loser: ${loser}. Winner: ${winner}. Reason: ${reason}`);

    // Emit to clients
    io.to(gameId).emit("game_over", { winner, loser, draw, reason });

    // Cleanup
    gameStates.delete(gameId);
    return res.json({ success: true, winner, loser, draw, reason });
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
    //console.log(`🤖 Bot now in phase: ${phase}`);
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
        //console.log("📦 Discarding card:", discardedCard);

        if (!discardedCard.name) {
          console.warn("🔍 Discarded card missing name, trying to enrich with ID:", discardedCard.id);
          const fullData = cards.find(c => c.id === String(discardedCard.id));
          if (fullData) {
            discardedCard = { ...fullData, ...discardedCard };
            //console.log("✅ Enriched discarded card:", discardedCard);
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
    //console.log(`🤖 Bot ended turn. Next player: ${game.turn.currentPlayer}`);
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
    //If totem is Countdown Clocktower
    if (game.turnLimit && game.turn.count >= 12) {
      const opponentName = (game.player1 === username) ? game.player2 : game.player1;
      const playerLife = game[username].life;
      const opponentLife = game[opponentName].life;

      let loser, reason;

      if (playerLife > opponentLife) {
        loser = opponentName;
        reason = "You had more Life at the end of the 12th turn";
      } else if (opponentLife > playerLife) {
        loser = username;
        reason = "Your Opponent had more Life at the end of the 12th turn";
      } else {
        // Optional: record draw in logs
        //console.log("Game ended in a draw.");
        return res.json({ success: true, draw: true, reason: "Both Players had the same Life at the end of the 12th turn" });
      }

      //console.log(`Game ${gameId} ended. Loser: ${loser}. Reason: ${reason}`);

      gameStates.delete(gameId);
      return res.json({ success: true, loser, reason });
    }
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
  //console.log('Session ID:', sessionId);  // Log the session ID

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

    //console.log('Username from session:', username);
    //console.log('User from Supabase:', user);

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

app.get('/user-cosmetics/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('profile_pic, deck_sleeve, zone_art')
      .eq('username', username)
      .single();

    if (error || !user) return res.status(404).json({ error: 'User not found' });

    res.json({
      profilePic : user.profile_pic,
      deckSleeve : user.deck_sleeve,
      zoneArt    : user.zone_art
    });
  } catch (err) {
    console.error('Error fetching cosmetics:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/addCardsToDeck', async (req, res) => {
  const sessionId = req.cookies.session;
  const username  = sessions[sessionId];
  const { deck_name, card_ids } = req.body;

  /* ── basic validation ─────────────────────────────── */
  if (!username) {
    return res.status(401).json({ success:false, message:'User not authenticated' });
  }
  if (!deck_name || !Array.isArray(card_ids) || card_ids.length === 0) {
    return res.status(400).json({ success:false, message:'deck_name and card_ids required' });
  }

  try {
    /* 1) fetch the deck that belongs to this user */
    const { data: deck, error: fetchErr } = await supabase
      .from('decks')
      .select('card_ids')
      .eq('user_name', username)
      .eq('deck_name', deck_name)
      .single();

    if (fetchErr) throw fetchErr;
    if (!deck)   return res.status(404).json({ success:false, message:'Deck not found' });

    /* 2) merge & de-dupe card IDs */
    const current = deck.card_ids || [];
    const merged  = Array.from(new Set([...current, ...card_ids.map(String)]));

    /* 3) update the deck */
    const { error: updateErr } = await supabase
      .from('decks')
      .update({ card_ids: merged })
      .eq('user_name', username)
      .eq('deck_name', deck_name);

    if (updateErr) throw updateErr;

    return res.json({
      success : true,
      message : `Added ${card_ids.length} card(s) to "${deck_name}".`,
      total   : merged.length
    });

  } catch (err) {
    console.error('Error in /addCardsToDeck:', err);
    return res.status(500).json({ success:false, message:'Server error', error:err.message });
  }
});

app.post('/password-reset', async (req, res) => {
  const { email } = req.body;
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${APP_BASE_URL}/reset_password.html`
  });
  // Always return success so we don’t leak which emails exist
  return res.json({ message: 'If that email exists, you’ll receive a reset link.' });
});


app.post('/password-reset/confirm', async (req, res) => {
  const { access_token, newPassword } = req.body;
  // initialize a Supabase client _with_ that token
  const authClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
    global: { headers: { Authorization: `Bearer ${access_token}` } }
  });
  const { error } = await authClient.auth.updateUser({ password: newPassword });
  if (error) return res.status(400).json({ message: error.message });
  return res.json({ message: 'Password has been reset successfully.' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  //console.log(`Server is running on http://localhost:${PORT}`);
});