const cardArtFolder = "https://geimon-app-833627ba44e0.herokuapp.com/Public/Images/Card Assets";

export const cards = [
  {
    id: "1",
    name: "Skeleton Guard",
    image: `${cardArtFolder}/Champions/SkeletonGuard.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound", "Undead"],
    damage: 2,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <br><br> Crypt Recovery: If Sent to Tomb: Retrieve 1 other Undead Champion.`
      }
    ]
  },
  {
    id: "2",
    name: "Fresh Undead",
    image: `${cardArtFolder}/Champions/FreshUndead.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound", "Undead"],
    damage: 1,
    life: 6,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bloodrage, Deathward <br><br> Undead Fortitude: If Sent to Tomb: Resurrect this card, but Obliterate it when it leaves the Zone.`
      }
    ]
  },
  {
    id: "3",
    name: "Markerion, Necromancy Master",
    image: `${cardArtFolder}/Champions/MarkerionSupreme.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Offer 5 Life, Mill 5, and Sacrifice 1",
    tags: ["Cryptbound", "Necromancy", "Mage"],
    damage: 5,
    life: 10,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward, Warded <span class="line-gap"></span> Ponder the Orb: On Rally: Excavate 3; Add 1 revealed, Obliterate the other 2. <span class="line-gap"></span> You Don't Need That (Exhaustion): Excavate 3 from your Opponent's Deck; Obliterate 1, Return the rest in the same order. <span class="line-gap"></span> You Die First!: If this card would be Destroyed (Reflex): Sacrifice 1; It is not Destroyed.`
      }
    ]
  },
  {
    id: "4",
    name: "Syamir, Lord of Bones",
    image: `${cardArtFolder}/Champions/SyamirLordBones.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Offer 9 Life",
    tags: ["Hellfire","Cryptbound","Undead","Megalith"],
    damage: 1,
    life: 10,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bloodrage, Deathward <span class="line-gap"></span> Soulburn (Exhaustion): Offer up to a total of 9 Life from Champions you control (in increments of 3); Destroy 1 card on the Zone per 3 Life offered.`
      }
    ]
  },
  {
    id: "5",
    name: "Navariel, Lord of Oblivion",
    image: `${cardArtFolder}/Champions/NavarielLordOblivion.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Mill 6",
    tags: ["Hellfire","Cryptbound","Undead","Megalith"],
    damage: 20,
    life: 7,
    damageThreshold: "2",
    abilities: [
      {
        text: `Deathpower <span class="line-gap"></span> Death is Forever: On Rally (Mandatory): Obliterate all cards in both Players' Tombs. <span class="line-gap"></span> Mostly Dead is Not Fully Dead: Target 1 Undead in your Tomb; Resurrect Target, but reduce it to 1 Life and negate its Passives and Effects. Destroy all Champions Resurrected this way if this card leaves the Zone.`
      }
    ]
  },
  {
    id: "6",
    name: "Reshamel, Guide to the Dead",
    image: `${cardArtFolder}/Champions/ReshamelGuide.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Obliterate 2 cards you control",
    tags: ["Hellfire","Cryptbound","Undead","Megalith"],
    damage: 4,
    life: 5,
    damageThreshold: 3,
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Ferried Beyond: On Rally (Exhaustion): Bury 1. <span class="line-gap"></span> Rend Soul (Exhaustion): Obliterate 1 card you control; Obliterate 1 card on the Zone. <span class="line-gap"></span> Hell's Closed: If Sent to Void: During the next Intermission Phase: Unleash 1 Undead.`
      }
    ]
  },
  {
    id: "7",
    name: "Bone Construct",
    image: `${cardArtFolder}/Champions/BoneConstruct.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Offer 4 Life",
    tags: ["Cryptbound", "Undead", "Construct"],
    damage: 0,
    life: 7,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward, Necrocharge <br><br> Skeletons for the Skeleton Pile: On Rally (Mandatory): Mill 3.`
      }
    ]
  },
  {
    id: "8",
    name: "Necro Neko",
    image: `${cardArtFolder}/Champions/NecroNeko.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound", "Undead", "Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Library Assistant: Excavate 3; Add 1 revealed Undead or Helper, or a card that mentions an Undead or Helper. <span class="line-gap"></span> Powerful Core: Sacrifice this card and Target 1 other Undead in your Tomb; Resurrect Target. The resurrected Champion gains Warded. <span class="line-gap"></span> Helping Hand: If card is in your Tomb: Obliterate this card and Target 1 Undead or Helper in your Tomb; Resurrect Target.`
      }
    ]
  },
  {
    id: "9",
    name: "Rise Again!",
    image: `${cardArtFolder}/Actions/RiseAgain.png`,
    rarity: "Legendary",
    type: "Action",
    condition: "",
    cost: "Offer half your Life (rounded down)",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Resurrect or Unleash up to 2 Undead, or 1 Basic.`
      }
    ]
  },
  {
    id: "10",
    name: "From Death, Life",
    image: `${cardArtFolder}/Equipments/FromDeathLife.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "Offer 4 Life and Target 1 Undead in either Tomb",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Resurrect Target and attach this card to it. <span class="line-gap"></span> If this card leaves the Zone: Destroy the attached Champion.`
      }
    ]
  },
  {
    id: "11",
    name: "Necromancer’s Tome",
    image: `${cardArtFolder}/Obelisks/NecromancerTome.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Offer 3 Life; then Excavate 3, and if you do, Add 1 revealed. <span class="line-gap"></span> If this card is in your Tomb: Obliterate this card and Target 1 Undead in either Tomb; Resurrect Target.`
      }
    ]
  },
  {
    id: "12",
    name: "Boom!",
    image: `${cardArtFolder}/Rush/Boom.png`,
    rarity: "Common",
    type: "Rush",
    condition: "During Damage Calculation when a Champion you control battles another",
    cost: "Destroy your Champion",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy the other battling Champion.`
      }
    ]
  },
  {
    id: "13",
    name: "Plaguetouch",
    image: `${cardArtFolder}/Reflex/Plaguetouch.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "An Opponent’s Champion declares an attack",
    cost: "Obliterate Mill 4 and Target the attacking Champion",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Negate Target's Attack, and if you do, deal Damage to your Opponent equal to Target’s Damage.`
      }
    ]
  },
  {
    id: "14",
    name: "Soul Absorption",
    image: `${cardArtFolder}/Actions/SoulAbsorption.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Sacrifice any number of Champions you control",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Gain Life equal to those Champions’ remaining Life. <span class="line-gap"></span> If this card is in your Tomb (Reflex): Obliterate this card and Sacrifice 1 Champion you control; Gain double that Champion's remaining Life.`
      }
    ]
  },
  {
    id: "15",
    name: "Forbidden Rebirth",
    image: `${cardArtFolder}/Actions/ForbiddenRebirth.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Offer 4 Life and Target 1 Champion in your Opponent's Tomb",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Resurrect Target to your Zone, it gains the Undead Tag.`
      }
    ]
  },
  {
    id: "16",
    name: "Flash Forward",
    image: `${cardArtFolder}/Actions/FlashForward.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Both Players draw 1 and reveal them",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If the revealed card is a Champion, that Player can immediately Rally it (ignoring its cost).`
      }
    ]
  },
  {
    id: "17",
    name: "March of the Dead",
    image: `${cardArtFolder}/Actions/MarchoftheDead.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Your Opponent Retrieves 1",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mill cards equal to the number of cards in your Opponent's Tomb.`
      }
    ]
  },
  {
    id: "18",
    name: "Corrupted Rebirth",
    image: `${cardArtFolder}/Equipments/CorruptedRebirth.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "Target 1 Champion in either Tomb and 3 other Champions in your Tomb",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Resurrect the first Target and attach this card to it, and if you do, Obliterate the other 3 Targets. <span class="line-gap"></span> If this card leaves the Zone: Obliterate the attached Champion.`
      }
    ]
  },
  {
    id: "19",
    name: "Oppressive Ward",
    image: `${cardArtFolder}/Obelisks/OppressiveWard.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Sacrifice 1",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Each Player must offer 1 Life to declare an attack.`
      }
    ]
  },
  {
    id: "20",
    name: "There's Two?!",
    image: `${cardArtFolder}/Rush/TheresTwo.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Target 1 Champion you control with a Damage of 1 or higher and take Damage equal to its Damage",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Rally 1 Echo Token.`
      }
    ]
  },
  {
    id: "21",
    name: "Unyielding Soldier",
    image: `${cardArtFolder}/Champions/UnyieldingSoldier.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Mill 6",
    tags: ["Cryptbound", "Undead", "Knight"],
    damage: 4,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward, Priority <span class="line-gap"></span> Continue the Fight: If this card is in your Tomb: Mill 6; Resurrect this card.`
      }
    ]
  },
  {
    id: "22",
    name: "Painful Sacrifice",
    image: `${cardArtFolder}/Actions/PainfulSacrifice.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Reveal 5 cards from your Deck. Your Opponent chooses 1 of them to add to your Hand. Obliterate the rest.`
      }
    ]
  },
  {
    id: "23",
    name: "Tricksy Kitty",
    image: `${cardArtFolder}/Reflex/TricksyKitty.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "An Opponent activates a card or effect while they control more cards than you",
    cost: "Sacrifice 1 Champion with 1 or less Damage",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the triggering card or effect, and if you do, it becomes the End Phase. Other cards and effects cannot be activated in response to this card.`
      }
    ]
  },
  {
    id: "24",
    name: "Rat King",
    image: `${cardArtFolder}/Champions/RatKing.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1",
    tags: ["Cryptbound", "Undead", "Construct"],
    damage: 4,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Twitchy <br><br> Frantic Hoarding: Sacrifice 1; Bury up to 2 Reflex.`
      }
    ]
  },
  {
    id: "25",
    name: "What's Yours Is Mine",
    image: `${cardArtFolder}/Reflex/YoursIsMine.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "Your Opponent Draws, Adds, or Retrieves a card(s)",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Draw, Add, or Retrieve the same type and number of card(s).`
      }
    ]
  },
  {
    id: "26",
    name: "Binding Cryptbound Tether",
    image: `${cardArtFolder}/Actions/BindingCryptboundTether.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Offer 4 Life",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Add 1 Cryptbound. <span class="line-gap"></span> If you have no Cryptbounds in your Deck: Add 1 Basic.`
      }
    ]
  },
  {
    id: "27",
    name: "Queen Mother Maybelline",
    image: `${cardArtFolder}/Champions/LadyMaybellineRisenBride.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound", "Undead", "Royal"],
    damage: 2,
    life: 7,
    damageThreshold: "2",
    abilities: [
      {
        text: `Bloodrage, Deathward, Lifesteal, Undertaker <span class="line-gap"></span> Behold my Subjects: Offer 4 Life and Target 1 Undead in either Tomb; Resurrect Target. <span class="line-gap"></span> Rise Again!: If this card is in your Tomb while you control \"Markerion, Necromancy Master\" (Reflex): Resurrect this card.`
      }
    ]
  },
  {
    id: "28",
    name: "Malformed Undead",
    image: `${cardArtFolder}/Champions/MalformedUndead.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound", "Undead"],
    damage: 3,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Pop Goes the Zombie: If Destroyed: Both Players take 2 Damage.`
      }
    ]
  },
  {
    id: "29",
    name: "Creeping Crawler",
    image: `${cardArtFolder}/Champions/CreepingCrawler.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound", "Undead"],
    damage: 1,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Gentle Caress (Flip): If flipped face-up by battle: Move this card to your Arsenal and attach it to the attacking Champion. The attached Champion can no longer declare attacks, and is dealt 1 Damage during each End Phase.`
      }
    ]
  },
  {
    id: "30",
    name: "Sister of the Black Vow",
    image: `${cardArtFolder}/Champions/SisterOfTheBlackVow.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound","Necromancy","Mage","Specialist"],
    damage: 1,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <br><br> Curse of the Black Vow: On Rally (Mandatory): Target 1 face-up Champion on the Zone; Deal 2 Damage to Target.`
      }
    ]
  },
  {
    id: "31",
    name: "Spirit Whisperer",
    image: `${cardArtFolder}/Champions/SpiritWhisperer.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "There are 10 or more Champions total between both Tombs",
    cost: "Basic",
    tags: ["Cryptbound","Necromancy","Mage","Specialist"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Seance: Target 1 Champion in either Tomb; Rally 1 Ghost Token of Target. Destroy all Tokens Rallied this way if this card leaves the Zone.`
      }
    ]
  },
  {
    id: "32",
    name: "Elthira, Palefire Witch",
    image: `${cardArtFolder}/Champions/ElthiraPalefireWitch.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "Reflex: If you take Damage",
    cost: "Offer Life equal to the Damage you took",
    tags: ["Cryptbound", "Necromancy","Mage"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Lifecharge: On Rally: This card's Damage and Life increase by the amount of Life Offered to Rally it. <span class="line-gap"></span> Thrice-Burned (Exhaustion): Offer Life equal to this card's Damage; Draw 3, then Discard 2.`
      }
    ]
  },
  {
    id: "33",
    name: "Styx Dredger",
    image: `${cardArtFolder}/Champions/StyxDredger.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Mill 9",
    tags: ["Hellfire","Cryptbound","Specialist"],
    damage: 0,
    life: 1,
    damageThreshold: "6",
    abilities: [
      {
        text: `Dredgin' Time (Exhaustion): Target 1 card in your Void; Reclaim Target.`
      }
    ]
  },
  {
    id: "34",
    name: "Kaemorak, Lord of Pacts",
    image: `${cardArtFolder}/Champions/KaemorakLordOfPacts.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "You are at 6 or less Life",
    cost: "Obliterate 6 cards you control",
    tags: ["Hellfire","Cryptbound","Megalith","Royal"],
    damage: 6,
    life: 6,
    damageThreshold: "6",
    abilities: [
      {
        text: `Deathpower, Warded <span class="line-gap"></span> Unlimited Power: Offer Life in increments of 3, up to 9; This card can make 1 additional attack per 3 Life offered during your next Battle Phase. <span class="line-gap"></span> Everlasting Life: Mill 12; Gain 6 Life. <span class="line-gap"></span> Riches Beyond Your Imagination (Exhaustion): Offer 6; Draw 2.`
      }
    ]
  },
  {
    id: "35",
    name: "Ancient Crypt Guardian",
    image: `${cardArtFolder}/Champions/AncientCryptGuardian.png`,
    rarity: "Common",
    type: "Champion",
    condition: "Can only be Rallied during your Main Phase 2",
    cost: "Basic",
    tags: ["Cryptbound", "Protector","Construct"],
    damage: 0,
    life: 11,
    damageThreshold: "2",
    abilities: [
      {
        text: `Defender, Fortified`
      }
    ]
  },
  {
    id: "36",
    name: "Wailing Matron",
    image: `${cardArtFolder}/Champions/WailingMatron.png`,
    rarity: "Common",
    type: "Champion",
    condition: "Your Life is lower than your Opponent's",
    cost: "Offer 4 Life",
    tags: ["Cryptbound","Royal"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Inconsolable Screaming: If your Opponent Rallies a Champion(s) while your Life is lower than theirs: Reduce the Damage of the Rallied Champion(s) by 2. If this effect reduces a Champion's Damage to 0, they are Destroyed.`
      }
    ]
  },
  {
    id: "37",
    name: "Blood Sacrifice",
    image: `${cardArtFolder}/Actions/BloodSacrifice.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Target 1 face-up Champion you control",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Deal 3 Damage to Target, then Draw 1.`
      }
    ]
  },
  {
    id: "38",
    name: "Plague... Of the Plague!",
    image: `${cardArtFolder}/Actions/PlagueOfThePlague.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Offer 2 Life",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `All face-up Champions take 2 Damage.`
      }
    ]
  },
  {
    id: "39",
    name: "Fine Print Contract",
    image: `${cardArtFolder}/Actions/FinePrintContract.png`,
    rarity: "Legendary",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit, Resurrect, or Unleash 1 Hellfire (ignoring its conditions). <span class="line-gap"></span> Obliterate it at the end of the 6th turn after activating this card. <span class="line-gap"></span> When it leaves the Zone, you lose the game. <span class="line-gap"></span> Discard this card and 1 other: Move 1 Basic from your Tomb to your Reserve.`
      }
    ]
  },
  {
    id: "40",
    name: "Regenerating Mana",
    image: `${cardArtFolder}/Actions/RegeneratingMana.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Until your End Phase: Offer costs and effects instead give you that amount of Life.`
      }
    ]
  },
  {
    id: "41",
    name: "Malicious Pondering",
    image: `${cardArtFolder}/Actions/MaliciousPondering.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Excavate 3 from your Opponent's Deck, return them in an order of your choice.`
      }
    ]
  },
  {
    id: "42",
    name: "Imprecise Reanimation",
    image: `${cardArtFolder}/Actions/ImpreciseReanimation.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "Offer Life equal to the Life of a Champion in either Tomb",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Resurrect 1 Champion from either Tomb whose Life equals what you Offered, and if you do, Destroy it during the End Phase.`
      }
    ]
  },
  {
    id: "43",
    name: "Exquisite Rot",
    image: `${cardArtFolder}/Actions/ExquisiteRot.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Your Opponent Obliterates 1 card from your Tomb",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Retrieve 2.`
      }
    ]
  },
  {
    id: "44",
    name: "Tragedy Loop",
    image: `${cardArtFolder}/Actions/TragedyLoop.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Discard 1",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Excavate cards one at a time. <span class="line-gap"></span> If the excavated card is an Action: You can activate it (ignoring its cost). Otherwise, Obliterate it and excavate again until the revealed card is an Action.`
      }
    ]
  },
  {
    id: "45",
    name: "Cursed Amulet",
    image: `${cardArtFolder}/Equipments/CursedAmulet.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Champion you control",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion cannot attack or activate its effects. <span class="line-gap"></span> So long as this card and its attached Champion remain face-up on the Zone, your Life cannot be reduced. Your Offer effects are always counted as fulfilled.`
      }
    ]
  },
  {
    id: "46",
    name: "Markerion's Pondering Orb",
    image: `${cardArtFolder}/Equipments/MarkerionsPonderingOrb.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Exhaustion: Excavate 3, add 1 revealed.`
      }
    ]
  },
  {
    id: "47",
    name: "The Hollow Altar",
    image: `${cardArtFolder}/Obelisks/TheHollowAltar.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Offer 3 Life",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If you take 3 or more Damage by an Opponent's card effect or their Champion's attack: Draw 1 for every 3 Damage you took.`
      }
    ]
  },
  {
    id: "48",
    name: "Ghastly Graveyard",
    image: `${cardArtFolder}/Obelisks/GhastlyGraveyard.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Offer 3 Life",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `All Champions on the Zone and in the Tomb gain the Undead Tag.`
      }
    ]
  },
  {
    id: "49",
    name: "Graverobbing",
    image: `${cardArtFolder}/Obelisks/Graverobbing.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Either Player can Offer 4 Life and Target 1 card in either Tomb; Retrieve Target.`
      }
    ]
  },
  {
    id: "50",
    name: "Immortal Blood",
    image: `${cardArtFolder}/Obelisks/ImmortalBlood.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `While you are at 5 or less Life: You cannot be Damaged.`
      }
    ]
  },
  {
    id: "51",
    name: "Blinding Blast",
    image: `${cardArtFolder}/Rush/BlindingBlast.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Offer X and Target 1 Champion you control",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase Target's Damage by the amount Offered until the end of the next turn.`
      }
    ]
  },
  {
    id: "52",
    name: "Blinding Ward",
    image: `${cardArtFolder}/Rush/BlindingWard.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Target 1 face-up Champion on the Zone",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Decrease Target's Damage by 3, then it gains Non-Believer until the end of the turn.`
      }
    ]
  },
  {
    id: "53",
    name: "Soul Ignition",
    image: `${cardArtFolder}/Rush/SoulIgnition.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Target 3 face-up Champions on the Zone",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Targets take 1 Damage.`
      }
    ]
  },
  {
    id: "54",
    name: "Undebt Collector",
    image: `${cardArtFolder}/Reflex/UndebtCollector.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "",
    cost: "Target 1 Champion in your Tomb",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Resurrect Target, and if you do, it gains the Undead Tag. <span class="line-gap"></span> During your End Phase (Mandatory): Discard 1, or if you are unable to, Destroy Target.`
      }
    ]
  },
  {
    id: "55",
    name: "Protection Rune",
    image: `${cardArtFolder}/Reflex/ProtectionRune.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "Your Opponent Rallies a Champion(s)",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `All Champion(s) Rallied take 5 Damage. <span class="line-gap"></span> You cannot Rally during your next turn.`
      }
    ]
  },
  {
    id: "56",
    name: "Spirit Capture Jar",
    image: `${cardArtFolder}/Reflex/SpiritCaptureJar.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "You take Damage",
    cost: "Target 1 Undead in either Tomb",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Retrieve Target.`
      }
    ]
  },
  {
    id: "57",
    name: "Rapid Recast",
    image: `${cardArtFolder}/Reflex/RapidRecast.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "",
    cost: "Obliterate 1 Action from your Tomb",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Activate that card (ignoring its cost).`
      }
    ]
  },
  {
    id: "58",
    name: "Beartrap Cradle",
    image: `${cardArtFolder}/Reflex/BeartrapCradle.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "A Champion(s) are Rallied",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Those Rallied Champion(s) become Exhausted.`
      }
    ]
  },
  {
    id: "59",
    name: "Dramatic Revival",
    image: `${cardArtFolder}/Reflex/DramaticRevival.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "",
    cost: "Target 1 Champion in your Tomb that was Destroyed by battle this turn",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Resurrect Target during the next Intermission Phase.`
      }
    ]
  },
  {
    id: "60",
    name: "Blinding Weakness",
    image: `${cardArtFolder}/Reflex/BlindingWeakness.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent declares an attack",
    cost: "Discard 2",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Flip all face-up non-Token Champions your Opponent controls face-down.`
      }
    ]
  },
  {
    id: "61",
    name: "Areza, Town Harlot",
    image: `${cardArtFolder}/Champions/ArezaHarlot.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier", "Citizen"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bulletproof, Deathcurse, Lifetouch, Priority`
      }
    ]
  },
  {
    id: "62",
    name: "Cyrus, the Dustwalker",
    image: `${cardArtFolder}/Champions/CyrusDustwalker.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Discard 2",
    tags: ["Frontier", "Outlaw", "Marksman"],
    damage: 6,
    life: 6,
    damageThreshold: "1",
    abilities: [
      {
        text: `Heavy Hands <span class="line-gap"></span> Outlaws Don't Pay Costs: On Rally: Draw 2. <span class="line-gap"></span> Deadeye (Exhaustion): Discard 1 and Target 1 face-up card on the Zone; Destroy Target.`
      }
    ]
  },
  {
    id: "63",
    name: "Sheriff Jane, Perfect Shot",
    image: `${cardArtFolder}/Champions/PerfectJane.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Reveal this card, then your Opponent randomly chooses 1 card from your Hand which you discard. If the discarded card was not this card, it will be Rallied.",
    tags: ["Frontier","Marshall","Marksman","Protector"],
    damage: 5,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Priority <span class="line-gap"></span> A Li'l Pick Me Up: On Rally: Draw 1. <span class="line-gap"></span> Take My Gun!: If Discarded: Add 1 Equipment or Rush.`
      }
    ]
  },
  {
    id: "64",
    name: "Lady Jane's Ladykiller",
    image: `${cardArtFolder}/Equipments/LadyJaneLadykiller.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The turn this card is activated: Only the attached Champion can attack (this effect remains even if this card leaves the zone). <span class="line-gap"></span> If attached to a Marksman: The attached Champion gains Unstoppable. <span class="line-gap"></span> If this card is in your Tomb: Obliterate this card and Target 1 Marksman in your Tomb; Resurrect Target.`
      }
    ]
  },
  {
    id: "65",
    name: "Ol' Reliable",
    image: `${cardArtFolder}/Equipments/OlReliable.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `So long as this card remains face-up in your Arsenal: Reveal your Hand. <span class="line-gap"></span> If attached to a Marksman: This card gains 6 Bullet Counters. Increase the attached Champion's Damage by 1 per Bullet Counter this card has. After each time the attached Champion battles: Remove 1 Bullet Counter from this card. <span class="line-gap"></span> If this card has no Bullet Counters (Reflex): Destroy this card; Deal 3 Damage to 1 face-up Champion or Player.`
      }
    ]
  },
  {
    id: "66",
    name: "Lucky Shot",
    image: `${cardArtFolder}/Equipments/LuckyShot.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Declare 1 card type. <span class="line-gap"></span> Excavate 1, and if its card type matches what you declared you can Destroy 1 Champion on the Zone. Otherwise, Destroy the attached Champion. <span class="line-gap"></span> If attached to a Marksman: You can excavate 3 when you use this card's effect, and if any of the revealed cards match the declared type, you can Destroy 1 Champion on the zone.`
      }
    ]
  },
  {
    id: "67",
    name: "Rusty",
    image: `${cardArtFolder}/Champions/Rusty.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Protector","Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Sniffer Sense: Target 1 face-down Champion; Flip the Target face-up (negate its Flip effects). <span class="line-gap"></span> Take the Bullet: If your Opponent declares an attack or activates an effect that Destroys a card (Reflex): Sacrifice this card; Negate the attack or effect, and if you do, destroy the triggering card. <span class="line-gap"></span> Helping Hand: If this card is in your Tomb: Obliterate this card and Target 1 Frontier or Helper in your Tomb; Resurrect Target.`
      }
    ]
  },
  {
    id: "68",
    name: "Chinchilla's Ambush Squad",
    image: `${cardArtFolder}/Champions/ChinchillaSquad.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Outlaw","Marksman"],
    damage: 1,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Gotcha! (Flip): If flipped face-up by battle: Increase this Champion's Damage by half the Damage of the Champion that it is battling (rounded up). <span class="line-gap"></span> Shot in the Back: If Discarded: Deal 3 Damage to 1 face-up Champion or Player.`
      }
    ]
  },
  {
    id: "69",
    name: "Blaze, Undercover Deputy",
    image: `${cardArtFolder}/Champions/BlazeUndercoverDeputy.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Marshall","Marksman"],
    damage: 3,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Surrender Now! (Flip): If flipped face-up by battle: Reduce the attacking Champion's Damage to 0.`
      }
    ]
  },
  {
    id: "70",
    name: "Highwayman Joe",
    image: `${cardArtFolder}/Champions/HighwaymanJoe.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Discard 2",
    tags: ["Frontier","Outlaw","Marksman"],
    damage: 3,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Raider, Reach <span class="line-gap"></span> Train Sniffer (Exhaustion): Your Opponent can activate 1 Commander Obelisk from their Deck (ignoring its cost); Then, if they did, your Opponent chooses whether: You Draw 2 for every Commander Obelisk your Opponent controls, or Your Opponent discards 1 for every Commander Obelisk they control.`
      }
    ]
  },
  {
    id: "71",
    name: "Grimlo, Opportunistic Looter",
    image: `${cardArtFolder}/Champions/LooterGrimlo.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Outlaw"],
    damage: 1,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `I Found It! (Flip): Target 1 card in either Tomb; Retrieve Target.`
      }
    ]
  },
  {
    id: "72",
    name: "Farfield, Speaker for the Winds",
    image: `${cardArtFolder}/Champions/SpeakerFarfield.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "You cannot deal Damage the turn you Rally this Champion",
    cost: "Basic",
    tags: ["Frontier","Marshall","Protector"],
    damage: 4,
    life: 6,
    damageThreshold: "3",
    abilities: [
      {
        text: `Defender, Duelist, Priority, Warded <span class="line-gap"></span> Foretell my Fate: Excavate 2; return the cards in an order of your choice. <span class="line-gap"></span> Decisive Plan (Exhaustion): Mill 1; Draw 1.`
      }
    ]
  },
  {
    id: "73",
    name: "Barney, Town Drunk",
    image: `${cardArtFolder}/Champions/DrunkBarney.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Citizen"],
    damage: 0,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bulletproof <span class="line-gap"></span> Good Morning (Flip): If flipped face-up by battle: Flip the attacking Champion face-down. <span class="line-gap"></span> Goodnight: Flip this card face-down. <span class="line-gap"></span> Barney's Prized Bottle: If Destroyed: Draw 1.`
      }
    ]
  },
  {
    id: "74",
    name: "Wanderer",
    image: `${cardArtFolder}/Champions/Wanderer.png`,
    rarity: "Common",
    type: "Champion",
    condition: "You control no Champions",
    cost: "Basic",
    tags: ["Frontier","Marksman"],
    damage: 4,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Priority, Smallfry, Solitary <span class="line-gap"></span> Roam Around: If there are at least 1 Champion and 1 Equipment in your Tomb: Retrieve 1 Equipment. <span class="line-gap"></span> Distress Flare: If Destroyed: Recruit 1 Frontier Marksman.`
      }
    ]
  },
  {
    id: "75",
    name: "Determined Prospector",
    image: `${cardArtFolder}/Champions/DeterminedProspector.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Citizen"],
    damage: 1,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Let's Go Digging: On Rally (Mandatory): Declare 1 card type; Excavate cards until you reveal a card of the declared type, add that card and Obliterate the rest.`
      }
    ]
  },
  {
    id: "76",
    name: "Zealous Bartender",
    image: `${cardArtFolder}/Champions/ZealousBartender.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Citizen"],
    damage: 1,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bottoms Up!: Target 1 face-up Champion on the Zone with a Damage of 1 or Higher; Target's Damage is reduced by 1 and their Damage Threshold is increased by 1.`
      }
    ]
  },
  {
    id: "77",
    name: "See What Sticks",
    image: `${cardArtFolder}/Actions/SeeWhatSticks.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Target 1 face-up Champion you control and Excavate 3, send all revealed Champions to the Tomb",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Target Champion can make an additional number of attacks during your next Battle Phase equal to the number of revealed non-Champions.`
      }
    ]
  },
  {
    id: "78",
    name: "Draw!",
    image: `${cardArtFolder}/Actions/Draw.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Both players Mill 1. <span class="line-gap"></span> If only one player mills a Champion, the opposing player is dealt that Champion's Damage. If both players mill Champions, the player whose Champion has a lower Damage is dealt the opposing player's Champion's Damage.`
      }
    ]
  },
  {
    id: "79",
    name: "Mesmerizing Tumbleweed",
    image: `${cardArtFolder}/Actions/MesmerizingTumbleweed.png`,
    rarity: "Common",
    type: "Action",
    condition: "You cannot declare attacks the turn you activate this card",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Rally 1 Tumbleweed Token to your Zone. <span class="line-gap"></span> During each End Phase, switch control of the Token.`
      }
    ]
  },
  {
    id: "80",
    name: "Well-Stocked Arms Dealer",
    image: `${cardArtFolder}/Champions/WellStockedArmsDealer.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "There are at least 3 Equipments in your Tomb",
    cost: "Basic",
    tags: ["Frontier","Marksman","Specialist"],
    damage: 0,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Hostile Negotiations: If this card is Targeted (Mandatory, Reflex): Destroy this card and the card that Targeted it, and if you do, the Player who Targeted this card draws 2. <span class="line-gap"></span> Loot-Filled Wagon: If Destroyed: Target 1 Equipment in your Tomb; Retrieve Target.`
      }
    ]
  },
  {
    id: "81",
    name: "Calamity Boone",
    image: `${cardArtFolder}/Champions/CalamityBoone.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Citizen"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Rakestepping (Reflex): This card is dealt its own Damage; Your Opponent cannot declare attacks this turn.`
      }
    ]
  },
  {
    id: "82",
    name: "Cattle Rancher",
    image: `${cardArtFolder}/Champions/CattleRancher.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Citizen"],
    damage: 0,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Herd the Herd: Rally 1 Cow Token to your Zone.`
      }
    ]
  },
  {
    id: "83",
    name: "Rowdy Bull",
    image: `${cardArtFolder}/Champions/RowdyBull.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock"],
    damage: 2,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `First Impressions: Increase this card's Damage by 1 for every Cow Token on the Zone.`
      }
    ]
  },
  {
    id: "84",
    name: "Boasting Buffalo",
    image: `${cardArtFolder}/Champions/BoastingBuffalo.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock"],
    damage: 0,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Timid Showoff: Increase this card's Damage by 2 for every Cow Token on the Zone. Decrease this card's Damage by 1 for every Champion your Opponent controls.`
      }
    ]
  },
  {
    id: "85",
    name: "Bootsnake",
    image: `${cardArtFolder}/Champions/Bootsnake.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Outlaw","Helper"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bootlicking (Flip): If flipped face-up by battle: Move this card to your Arsenal and attach it to the attacking Champion. If the attached Champion attempts to declare an attack or activate an effect, negate that attack or effect, and if you do, send it to the Tomb.`
      }
    ]
  },
  {
    id: "86",
    name: "Howling Coyote",
    image: `${cardArtFolder}/Champions/HowlingCoyote.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1 Token",
    tags: ["Frontier","Outlaw","Helper"],
    damage: 3,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Hungry Dog: Either Player Sacrifices 1 Token; Take control of this card, and if you do, increase its Damage by 1, and its Life by 2.`
      }
    ]
  },
  {
    id: "87",
    name: "Is It Loaded?",
    image: `${cardArtFolder}/Actions/IsItLoaded.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Excavate 6. <span class="line-gap"></span> If any of the revealed cards are a Champion: You take 2 Damage. <span class="line-gap"></span> Return the revealed cards in the same order they were in.`
      }
    ]
  },
  {
    id: "88",
    name: "I Think It Was Loaded",
    image: `${cardArtFolder}/Reflex/IThinkItWasLoaded.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "You take Damage from a card effect",
    cost: "",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Deal the same amount of Damage to your opponent.`
      }
    ]
  },
  {
    id: "89",
    name: "Kick the Can",
    image: `${cardArtFolder}/Actions/KickTheCan.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Rally 1 Grenade Token to your Zone.`
      }
    ]
  },
  {
    id: "90",
    name: "Frackin' Time",
    image: `${cardArtFolder}/Actions/FrackinTime.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Reveal the bottom 3 cards of your Deck. Add 1 of them, and Obliterate the other 2.`
      }
    ]
  },
  {
    id: "91",
    name: "Royal Flush",
    image: `${cardArtFolder}/Actions/RoyalFlush.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Obliterate 3 cards with different types from your Hand",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Draw 3.`
      }
    ]
  },
  {
    id: "92",
    name: "Panning for Gold",
    image: `${cardArtFolder}/Actions/PanningForGold.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Declare 1 card type",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Excavate 1. <span class="line-gap"></span> If the revealed card's type matches the type you declared: Add the excavated card. Otherwise, Obliterate it.`
      }
    ]
  },
  {
    id: "93",
    name: "Howdy There!",
    image: `${cardArtFolder}/Actions/HowdyThere.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Reveal all face-down cards you control (minimum of 1)",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Your Opponent reveals all face-down cards they control.`
      }
    ]
  },
  {
    id: "94",
    name: "Best Foot Forward",
    image: `${cardArtFolder}/Actions/BestFootForward.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "Your Opponent randomly chooses 1 card in your Hand to discard, depending on the type of card discarded, activate the following effect:",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `<span class="line-gap"></span> Champion: Destroy 1 card on the Zone. <span class="line-gap"></span> Action: Draw 1. <span class="line-gap"></span> Equipment: Retrieve 1. <span class="line-gap"></span> Obelisk: Activate 1 card from your Reserve (ignoring its, and its attached cards', costs). <span class="line-gap"></span> Rush: Draw 3, then discard 2. <span class="line-gap"></span> Reflex: Destroy 1 card in either Player's Arsenal.`
      }
    ]
  },
  {
    id: "95",
    name: "Giddy Up",
    image: `${cardArtFolder}/Equipments/GiddyUp.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "Attach only to a Champion you control",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Exhaust the attached Champion and Target 1 of your Opponent's Champions; Take control of the Target until the End Phase.`
      }
    ]
  },
  {
    id: "96",
    name: "Double-Barrel Blaster",
    image: `${cardArtFolder}/Equipments/DoubleBarrelBlaster.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "Discard 2",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Second Strike. <span class="line-gap"></span> If Destroyed: Offer 2 Life; Stack this card.`
      }
    ]
  },
  {
    id: "97",
    name: "Grandad's Rifle",
    image: `${cardArtFolder}/Equipments/GrandadsRifle.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the attached Champion's Damage by 2. <span class="line-gap"></span> If attached to a Citizen: The attached Champion gains Menace.`
      }
    ]
  },
  {
    id: "98",
    name: "Antique Blunderbuss",
    image: `${cardArtFolder}/Equipments/AntiqueBlunderbuss.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `In order to attack with the attached Champion: You must discard 1. <span class="line-gap"></span> The attached Champion's Damage is increased by 2.`
      }
    ]
  },
  {
    id: "99",
    name: "Short Fuse",
    image: `${cardArtFolder}/Equipments/ShortFuse.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Champion you control",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Deathtouch. <span class="line-gap"></span> During your End Phase, if the attached Champion did not attack this turn: Destroy both this card and its attached Champion. <span class="line-gap"></span><span class="line-gap"></span> If Destroyed: You take 4 Damage.`
      }
    ]
  },
  {
    id: "100",
    name: "Gunfight Knife",
    image: `${cardArtFolder}/Equipments/GunfightKnife.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `If an Opponent declares an attack with a Champion that has at least 1 attached Equipment: After that attack resolves, the attacking Champion is dealt this card's attached Champion's Damage plus 2.`
      }
    ]
  },
  {
    id: "101",
    name: "High Noon",
    image: `${cardArtFolder}/Obelisks/HighNoon.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `All Champions on the Zone gain Priority. <br><br> Champions cannot declare a direct attack against a Player unless that Player controls no Champions.`
      }
    ]
  },
  {
    id: "102",
    name: "Black Beauty",
    image: `${cardArtFolder}/Obelisks/BlackBeauty.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: If this card's Commander is an Outlaw: They gain Greedy and Reach. <span class="line-gap"></span> If this card is in your Tomb while you control an Outlaw (Reflex): Discard 2; Activate this card.`
      }
    ]
  },
  {
    id: "103",
    name: "White Mustang",
    image: `${cardArtFolder}/Obelisks/WhiteMustang.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: Obliterate Mill 2; Draw 2.`
      }
    ]
  },
  {
    id: "104",
    name: "Pony Express",
    image: `${cardArtFolder}/Obelisks/PonyExpress.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Either Player can Discard 1; that Player then Draws an extra card during their next Draw Phase.`
      }
    ]
  },
  {
    id: "105",
    name: "Dysentery Trail",
    image: `${cardArtFolder}/Obelisks/DysenteryTrail.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Sacrifice 1",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `During each Player's End Phase: That Player's face-up Champions each take 2 Damage.`
      }
    ]
  },
  {
    id: "106",
    name: "Covered Wagon",
    image: `${cardArtFolder}/Obelisks/CoveredWagon.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "You control at least 1 other Obelisk",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Stack 1 card from your Deck. <span class="line-gap"></span> During your Draw Phase, after you conduct your normal draw (Mandatory): Obliterate Mill 15.`
      }
    ]
  },
  {
    id: "107",
    name: "Hunting Train",
    image: `${cardArtFolder}/Obelisks/HuntingTrain.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Priority, also increase their Damage by 1.`
      }
    ]
  },
  {
    id: "108",
    name: "The Cavalry Has Arrived",
    image: `${cardArtFolder}/Rush/TheCavalryHasArrived.png`,
    rarity: "Superior",
    type: "Rush",
    condition: "",
    cost: "Reveal your entire Hand",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit 1 Frontier or Helper, it cannot attack. <span class="line-gap"></span> Destroy it during the End Phase of this turn.`
      }
    ]
  },
  {
    id: "109",
    name: "Hit the Deck!",
    image: `${cardArtFolder}/Rush/HitTheDeck.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Destroy all face-up Equipments in your Arsenal (minimum of 1)",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Flip all face-up non-Token Champions face-down.`
      }
    ]
  },
  {
    id: "110",
    name: "Stylish Reload",
    image: `${cardArtFolder}/Rush/StylishReload.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "It is your Battle Phase",
    cost: "Discard 1 and Target 1 Champion you control that attacked this turn",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Target can attack an additional time. <span class="line-gap"></span> Target cannot declare an attack during your next Battle Phase.`
      }
    ]
  },
  {
    id: "111",
    name: "Guns to a Gunfight",
    image: `${cardArtFolder}/Rush/GunsToAGunfight.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "Both Players control at least 1 face-up Champion",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Both Players attach 1 Equipment to a face-up Champion they control from their Hand, Deck, or Tomb (ignoring its cost).`
      }
    ]
  },
  {
    id: "112",
    name: "Traditional Painkiller",
    image: `${cardArtFolder}/Rush/TraditionalPainkiller.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "A Champion you control would take Damage or be Destroyed",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Reduce the triggering Damage to 0. <span class="line-gap"></span> The protected Champion cannot attack, or use its effects, for the remainder of the turn.`
      }
    ]
  },
  {
    id: "113",
    name: "Plan of Action",
    image: `${cardArtFolder}/Rush/PlanOfAction.png`,
    rarity: "Common",
    type: "Rush",
    condition: "Must be Path Step 2 or greater",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Deal 2 Damage to your Opponent per this card's Step Number on the Path.`
      }
    ]
  },
  {
    id: "114",
    name: "Massive Backfire!",
    image: `${cardArtFolder}/Reflex/MassiveBackfire.png`,
    rarity: "Superior",
    type: "Reflex",
    condition: "You control at least 1 face-up Champion whose current Damage is higher than their Life",
    cost: "Discard 1",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `All face-up Champions take Damage equal to their Damage.`
      }
    ]
  },
  {
    id: "115",
    name: "False Alarm",
    image: `${cardArtFolder}/Reflex/FalseAlarm.png`,
    rarity: "Legendary",
    type: "Reflex",
    condition: "",
    cost: "",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Draw cards equal to the number of cards your Opponent controls, and if you do, shuffle the same number of cards from your Hand into your Deck.`
      }
    ]
  },
  {
    id: "116",
    name: "Line 'em Up!",
    image: `${cardArtFolder}/Reflex/LineEmUp.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent declares an attack",
    cost: "All face-up Champions your Opponent currently controls gain Priority until the end of this turn",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `You choose your Opponent's attack Targets.`
      }
    ]
  },
  {
    id: "117",
    name: "Good Dog!",
    image: `${cardArtFolder}/Reflex/GoodDog.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "Your Opponent Rallies a Champion with 3 or more Damage",
    cost: "",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit 1 Helper. <span class="line-gap"></span> If you have no Helpers in your Deck: Recruit 1 with 0 Damage.`
      }
    ]
  },
  {
    id: "118",
    name: "Picnic in the Minefield",
    image: `${cardArtFolder}/Reflex/PicnicInTheMinefield.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "Your Opponent Rallies a Champion with 3 or more Damage",
    cost: "Destroy 1 Champion you control",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy the Rallied Champion, and if you do, Obliterate it. <span class="line-gap"></span> If Discarded: Set this card face-down in your Arsenal.`
      }
    ]
  },
  {
    id: "119",
    name: "Stalemate",
    image: `${cardArtFolder}/Reflex/Stalemate.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "An attack is declared",
    cost: "",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Negate that attack, and if you do, end the Battle Phase, then both Players can activate 1 Obelisk from their Deck (ignoring its cost).`
      }
    ]
  },
  {
    id: "120",
    name: "Instinctive Quickdraw",
    image: `${cardArtFolder}/Reflex/InstinctiveQuickdraw.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent activates a Champion's effect",
    cost: "Target 1 face-up Champion you control",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Deal Damage to your Opponent equal to the Target's Damage.`
      }
    ]
  },
  {
    id: "121",
    name: "Carly, Best and Brightest",
    image: `${cardArtFolder}/Champions/CarlyBestBrightest.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Rally 2 Scrap Token to your Opponent's Zone",
    tags: ["Clockwork", "Inventor", "Student"],
    damage: 3,
    life: 5,
    damageThreshold: "1",
    abilities: [
      {
        text: `Repair Specialist <span class="line-gap"></span> What's a Test Run?: On Rally: Activate 1 Commander Obelisk from your Hand, Deck, or Tomb (ignoring its cost). <span class="line-gap"></span> Upgrade (Exhaustion): Rally 1 Blocker Token to your Opponent's Zone; Add 1 Equipment. <span class="line-gap"></span> Emergency Transport: If this card isn't a Commander (Reflex): Obliterate Mill 6; Activate 1 Commander Obelisk from your Hand, Deck, or Tomb (ignoring its cost).`
      }
    ]
  },
  {
    id: "122",
    name: "Squeaks Lightning",
    image: `${cardArtFolder}/Champions/SqueaksLightning.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Clockwork", "Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Lightbulb: Excavate 1; Return it to either the top or the bottom of your Deck. <span class="line-gap"></span> Wake-Up Jolt: Sacrifice this card and Activate 1 Champion or Obelisk from your Reserve (ignoring its cost). <span class="line-gap"></span> Helping Hand: If this card is in your Tomb: Obliterate this card and Target 1 Clockwork or Helper in your Tomb; Resurrect Target, it gains Deathtouch but its Life is reduced to 1.`
      }
    ]
  },
  {
    id: "123",
    name: "Genevieve, Mechanic Extraordinaire",
    image: `${cardArtFolder}/Champions/GenevieveMechanicExtraordinaire.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Rally 1 Scrap Token to your Opponent's Zone",
    tags: ["Clockwork", "Mechanic", "Specialist"],
    damage: 3,
    life: 5,
    damageThreshold: 2,
    abilities: [
      {
        text: `Repair Specialist <span class="line-gap"></span> In The Shop: On Rally: Move 1 Obelisk from your Deck into your Reserve. That Obelisk gains \"Reserve (Reflex): Discard 1; Activate this card (ignoring its cost)\". <span class="line-gap"></span> Garage Baby: Attach 1 appropriate Equipment from your Hand or Deck to an Obelisk in your Reserve. <span class="line-gap"></span> Secret Weapon (Exhaustion): Destroy 1 Obelisk you control; Destroy 1 card on the Zone.`
      }
    ]
  },
  {
    id: "124",
    name: "Angel, Motor Whisperer",
    image: `${cardArtFolder}/Champions/AngelMotorWhisperer.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Clockwork", "Mechanic", "Specialist"],
    damage: 2,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Ignition Start (Exhaustion): Discard 1; Activate 1 Obelisk from your Reserve (ignoring its cost).`
      }
    ]
  },
  {
    id: "125",
    name: "Harlan, Ride or Die",
    image: `${cardArtFolder}/Champions/HarlanRideorDie.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Mill 2",
    tags: ["Clockwork", "Outlaw"],
    damage: 3,
    life: 7,
    damageThreshold: "2",
    abilities: [
      {
        text: `Bloodrage, Priority <span class="line-gap"></span> Ride: On Rally: Target 1 Equipment or Obelisk in your Tomb; Retrieve Target. <span class="line-gap"></span> Or Die: If it is your End Phase and this Champion is not a Commander (Mandatory): Destroy this card.`
      }
    ]
  },
  {
    id: "126",
    name: "Jimmy, King of Junk",
    image: `${cardArtFolder}/Champions/JimmyJunkKing.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "You have 5 or more cards in your Tomb",
    cost: "Basic",
    tags: ["Clockwork","Royal","Citizen"],
    damage: 1,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Smallfry <span class="line-gap"></span> Garbage Lord: Bury 1. <span class="line-gap"></span> Trash Picker: Retrieve 1, and if you do, Obliterate the rest of the cards in your Tomb. <span class="line-gap"></span> Tried to Kill the Metal: On Resurrection: Target 1 Champion in your Tomb; Resurrect Target, but reduce its Life to 1, also it is Obliterated when it leaves the Zone.`
      }
    ]
  },
  {
    id: "127",
    name: "Start Your Engines",
    image: `${cardArtFolder}/Actions/StartYourEngines.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Mill 4",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Move 1 Commander Obelisk from your Deck to your Reserve, and if you do, you can attach to it 1 Equipment from your Deck.`
      }
    ]
  },
  {
    id: "128",
    name: "Engine Boosters",
    image: `${cardArtFolder}/Equipments/EngineBoosters.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains the effect: \"This card's Commander gains Second Strike.\"`
      }
    ]
  },
  {
    id: "129",
    name: "Armor Plating",
    image: `${cardArtFolder}/Equipments/ArmorPlating.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains the effect: \"This card's Commander's Damage Threshold increases by 2.\"`
      }
    ]
  },
  {
    id: "130",
    name: "Test Drive",
    image: `${cardArtFolder}/Rush/TestDrive.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Target 1 face-up Champion you control",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Increase Target's Damage by 5. <br><br> Destroy Target during the End Phase.`
      }
    ]
  },
  {
    id: "131",
    name: "Hunter Rider",
    image: `${cardArtFolder}/Obelisks/HunterRider.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Jumper Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: Destroy 1 card in your Arsenal; Destroy up to 2 cards in either Arsenal. <span class="line-gap"></span> Mounted (Reflex): Increase this card's Commander's Damage by 5 until the End Phase.`
      }
    ]
  },
  {
    id: "132",
    name: "Monkey Barrel Blaster",
    image: `${cardArtFolder}/Obelisks/MonkeyBarrelBlaster.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Hunky Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: Rally 1 Greed Token, Rage Token, or Sloth Token to your Opponent's Zone, but Destroy it during their next End Phase. <span class="line-gap"></span> Mounted: If your Opponent controls 5 or more Tokens: Sacrifice 1 of your Opponent's Champions; Destroy 1 card on the Zone.`
      }
    ]
  },
  {
    id: "133",
    name: "Wheeliegeddon",
    image: `${cardArtFolder}/Obelisks/Wheeliegeddon.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Macho Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: Destroy this card and Target 1 face-up Champion you control; Target gains Unstoppable until the end of this turn.`
      }
    ]
  },
  {
    id: "134",
    name: "Creepy Crawlie",
    image: `${cardArtFolder}/Obelisks/CreepyCrawlie.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Fear Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted (Reflex): Give control of 1 face-up Champion to your Opponent; Take control of 1 face-up Champion from your Opponent. Return control of the affected Champions during the End Phase. <span class="line-gap"></span><span class="line-gap"></span> If this card is in your Reserve while you control at least 1 face-up Clockwork: You can activate this card (ignoring its cost).`
      }
    ]
  },
  {
    id: "135",
    name: "Zippy",
    image: `${cardArtFolder}/Obelisks/Zippy.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Care Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: Target 1 card in your Opponent's Arsenal; Your Opponent then chooses: send the Targeted card to the Tomb, or to send 2 other cards of their choice from their Arsenal to the Tomb.`
      }
    ]
  },
  {
    id: "136",
    name: "Hot-Shot Scott",
    image: `${cardArtFolder}/Champions/HotShotScott.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Clockwork", "Citizen"],
    damage: 3,
    life: 1,
    damageThreshold: "2",
    abilities: [
      {
        text: `Finger Guns (Exhaustion): Target 1 Champion on the Zone; Target cannot declare an attack, block, or use its effects until the start of your next turn.`
      }
    ]
  },
  {
    id: "137",
    name: "Plans within Plans",
    image: `${cardArtFolder}/Actions/PlansWithinPlans.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Both Players set face-down 1 Reflex card from their Deck (without revealing what they are).`
      }
    ]
  },
  {
    id: "138",
    name: "Crimson Courier",
    image: `${cardArtFolder}/Obelisks/CrimsonCourier.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Care Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander cannot attack. <span class="line-gap"></span> Mounted: Draw 1 for every Obelisk you control, then discard the same number of cards.`
      }
    ]
  },
  {
    id: "139",
    name: "Velocity",
    image: `${cardArtFolder}/Obelisks/Velocity.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Jumper Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `If this card does not have a Commander (Reflex): Discard your entire Hand (minimum of 1 card) and Target 1 Champion in your Tomb; Resurrect Target, and if you do, it becomes this card's Commander. Obliterate Target when it leaves the Zone. <span class="line-gap"></span> Mount <span class="line-gap"></span> Mounted: Sacrifice this card and Target 1 face-up Champion on the Zone; Restore the use of 1 of Target's non-Exhaustion effects.`
      }
    ]
  },
  {
    id: "140",
    name: "Aethergill",
    image: `${cardArtFolder}/Obelisks/Aethergill.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Wake Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: Add 1 Equipment, but you cannot activate it this turn. <span class="line-gap"></span><span class="line-gap"></span> If this card is in your Reserve: Obliterate Mill 5; Activate this card (ignoring its cost).`
      }
    ]
  },
  {
    id: "141",
    name: "Cloudpiercer",
    image: `${cardArtFolder}/Obelisks/Cloudpiercer.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Rally 2 Dust Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Mount <span class="line-gap"></span> Mounted: Excavate 5; Return the cards in an order of your choice.`
      }
    ]
  },
  {
    id: "142",
    name: "Gearhawk",
    image: `${cardArtFolder}/Obelisks/Gearhawk.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Jumper Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Unstoppable. <span class="line-gap"></span> Mounted: If this card's Commander is Targeted (Reflex): Sacrifice this card; Move this card's Commander into the Reserve, and if you do, draw 1. The moved Commander gains the effect: \"Reserve: Discard 2; Activate this card (ignoring its, and its attached cards' costs).\"`
      }
    ]
  },
  {
    id: "143",
    name: "Brass Monarch",
    image: `${cardArtFolder}/Obelisks/BrassMonarch.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "Rally 2 Fuel Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: This card's Commander gains Priority. <span class="line-gap"></span> Mounted: Discard 1 and Target 1 face-up card on the Zone; Destroy Target.`
      }
    ]
  },
  {
    id: "144",
    name: "Mr Giddy-Up",
    image: `${cardArtFolder}/Obelisks/MrGiddyUp.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "Rally 1 Dust Token to your Opponent's Zone",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: If this card's Commander battles (Reflex): Sacrifice this card; This card's Commander takes no Damage from that battle, also deal 5 Damage to the Champion that they battled.`
      }
    ]
  },
  {
    id: "145",
    name: "Emergency Reset!",
    image: `${cardArtFolder}/Rush/EmergencyReset.png`,
    rarity: "Superior",
    type: "Rush",
    condition: "Both Players' Life must be 10 or Higher",
    cost: "Obliterate all cards from your Hand, Zone, and Tomb (minimum 1 from each)",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Obliterate all cards from your Opponent's Hand, Zone, and Tomb, then both players draw 6.`
      }
    ]
  },
  {
    id: "146",
    name: "I'm Walking Here!",
    image: `${cardArtFolder}/Reflex/WalkingHere.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "If you declare an attack and your Opponent blocks",
    cost: "Discard 1",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Move the blocking Champion to the Reserve. <span class="line-gap"></span> If this card is in your Tomb and an Opponent declares an attack: Obliterate this card; Move 1 Champion or Obelisk from your Tomb to your Reserve.`
      }
    ]
  },
  {
    id: "147",
    name: "Topiary Tom",
    image: `${cardArtFolder}/Champions/TopiaryTom.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Flip 1 Champion you control face-down",
    tags: ["Clockwork", "Construct","Helper"],
    damage: 2,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathtouch <span class="line-gap"></span> Mulching Overdrive: If this card Destroys a Champion with its passive (Mandatory): Rally 1 Mulch Token to the controller of that Champion's Zone.`
      }
    ]
  },
  {
    id: "148",
    name: "Twitchy Tina, First Time Driver",
    image: `${cardArtFolder}/Champions/TwitchyTina.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Flip 1 Champion you control face-down",
    tags: ["Clockwork", "Citizen"],
    damage: 3,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Brake Slam: If this card declares an attack (Reflex): Negate that attack; Draw 1. <span class="line-gap"></span> Insurance Nightmare: If Destroyed: Add 1 Commander Obelisk.`
      }
    ]
  },
  {
    id: "149",
    name: "Rush Hour Traffic",
    image: `${cardArtFolder}/Actions/RushHourTraffic.png`,
    rarity: "Rare",
    type: "Action",
    condition: "Your Opponent used a Champion's effect during either of your Main Phases this turn",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Choose 1 of the following effects to activate: <span class="line-gap"></span> • Draw 2. <span class="line-gap"></span> • Take control of 1 of your Opponent's Champions until the End Phase of this turn. <span class="line-gap"></span> • Look at your Opponent's Hand, and if you do, shuffle 1 card of your choice from their Hand back into their Deck.`
      }
    ]
  },
  {
    id: "150",
    name: "Grandpa's Jackstand",
    image: `${cardArtFolder}/Equipments/GrandpasJackstand.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains the effect: \"This card's Commander gains Menace.\"`
      }
    ]
  },
  {
    id: "151",
    name: "Two's Better Than One",
    image: `${cardArtFolder}/Equipments/TwoBetterThanOne.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "Discard 1",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Decrease the attached Champion's Damage by 2. The attached Champion gains Second Strike.`
      }
    ]
  },
  {
    id: "152",
    name: "City Planner",
    image: `${cardArtFolder}/Champions/CityPlanner.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Clockwork", "Citizen","Specialist"],
    damage: 1,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Fortified <span class="line-gap"></span> Raise the Gates (Exhaustion): Rally 1 Blocker Token to your Opponent's Zone; Activate 1 Obelisk from your Hand, Deck, or Reserve (ignoring its cost).`
      }
    ]
  },
  {
    id: "153",
    name: "Garrett, Arm of the Law",
    image: `${cardArtFolder}/Champions/GarrettArmOfTheLaw.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Bury 2 Equipments",
    tags: ["Clockwork","Marshall","Protector","Marksman"],
    damage: 5,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bloodrage, Duelist, Priority <span class="line-gap"></span> Fan the Hammer (Exhaustion): Discard any number of cards, and send the same number of cards from your Zone to the Tomb, then Target that many cards on the Zone; Destroy Targets.`
      }
    ]
  },
  {
    id: "154",
    name: "Archibald, Business Mogul",
    image: `${cardArtFolder}/Champions/ArchibaldBusinessMogul.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 3, including (optionally) 1 your Opponent controls",
    tags: ["Clockwork", "Royal","Citizen"],
    damage: 6,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Greedy, Lifesteal, Reach <span class="line-gap"></span> Rich Get Richer: Sacrifice 1; Add 1 Commander Obelisk, and if you do, this card gains 3 Life.`
      }
    ]
  },
  {
    id: "155",
    name: "Accelerated Pit Stop",
    image: `${cardArtFolder}/Rush/AcceleratedPitStop.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Obliterate 1 Helper or Obelisk from your Hand, Reserve, or face-up Zone",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Retrieve 1 Helper or Obelisk, and if you do, you can move 1 Helper or Obelisk from your Deck to your Reserve.`
      }
    ]
  },
  {
    id: "156",
    name: "Street Dealer",
    image: `${cardArtFolder}/Champions/StreetDealer.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Offer 2 Life",
    tags: ["Clockwork", "Outlaw","Specialist"],
    damage: 0,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Acquired Product: Either Player can Offer 2 Life from a Champion they control: Until the End Phase, that Champion gains Priority.`
      }
    ]
  },
  {
    id: "157",
    name: "Guildmaster Theo Videl",
    image: `${cardArtFolder}/Champions/GuildmasterTheoVidel.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Rally 1 Scrap Token to your Opponent's Zone",
    tags: ["Clockwork", "Inventor","Specialist"],
    damage: 4,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Gadget Man: On Rally (Exhaustion): Attach 1 Equipment to this card from your Hand, Deck, or Tomb (ignoring its cost). <span class="line-gap"></span> Contingency Plan: If this card would be Destroyed (Reflex): Rally 1 Dust Token to your Opponent's Zone; Move this card to your Reserve. <span class="line-gap"></span> Triumphant Return: If this card is in your Reserve: Sacrifice 1 Token; Rally this card (ignoring its cost).`
      }
    ]
  },
  {
    id: "158",
    name: "Ironweld Sentinel",
    image: `${cardArtFolder}/Champions/IronweldSentinel.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Rally 5 Scrap Token to your Opponent's Zone",
    tags: ["Clockwork", "Megalith","Construct"],
    damage: 6,
    life: 9,
    damageThreshold: "4",
    abilities: [
      {
        text: `Bloodrage, Defender, Forged, Fortified, Menace`
      }
    ]
  },
  {
    id: "159",
    name: "Emergency Activation",
    image: `${cardArtFolder}/Actions/EmergencyActivation.png`,
    rarity: "Rare",
    type: "Action",
    condition: "You are at 10 or less Life",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit or Resurrect 1 Construct.`
      }
    ]
  },
  {
    id: "160",
    name: "EMP Blast",
    image: `${cardArtFolder}/Actions/EmpBlast.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Destroy all face-up Equipments and Obelisks you control (minimum of 1 card)",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy all Constructs on the Zone.`
      }
    ]
  },
  {
    id: "161",
    name: "Supplier's Demands",
    image: `${cardArtFolder}/Actions/SuppliersDemands.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Rally 2 Fuel Token to your Opponent's Zone",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Retrieve 1 Clockwork or Helper, and if you do, you can also Add 1 Equipment or 1 Obelisk.`
      }
    ]
  },
  {
    id: "162",
    name: "Reverse-Engineered Formula",
    image: `${cardArtFolder}/Actions/ReverseEngineeredFormula.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Offer 2 Life per card in your Opponent's Hand",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Retrieve 1 Action or Rush, and if you do, you cannot activate Action or Rush cards for the remainder of this turn.`
      }
    ]
  },
  {
    id: "163",
    name: "Compelling Pitch",
    image: `${cardArtFolder}/Actions/CompellingPitch.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Until the end of this turn, each time a Token(s) is Rallied to your Opponent's Zone: They must Discard 1.`
      }
    ]
  },
  {
    id: "164",
    name: "You Stole My Idea!",
    image: `${cardArtFolder}/Actions/YouStoleMyIdea.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Obliterate your hand (minimum of 1 card)",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Draw 1 for every Token your Opponent controls.`
      }
    ]
  },
  {
    id: "165",
    name: "Blazebolt 9000",
    image: `${cardArtFolder}/Equipments/Blazebolt9000.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains the effect: \"Increase this card's Commander's Damage by 4, but they cannot declare more than one attack per Battle Phase.\"`
      }
    ]
  },
  {
    id: "166",
    name: "Trusty Goggles",
    image: `${cardArtFolder}/Equipments/TrustyGoggles.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Excavate 2, add 1 revealed Equipment or Obelisk. <span class="line-gap"></span> If attached to a Clockwork or Helper: You can instead excavate 3.`
      }
    ]
  },
  {
    id: "167",
    name: "Self-Defense Plasma Cannon",
    image: `${cardArtFolder}/Equipments/SelfDefensePlasmaCannon.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `If attached to a Commander: Increase their Damage by 5. <span class="line-gap"></span> If Destroyed: Deal 3 Damage to both Players.`
      }
    ]
  },
  {
    id: "168",
    name: "Indestructible Lab Coat",
    image: `${cardArtFolder}/Equipments/IndestructibleLabCoat.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Champion with a Damage Threshold of 1",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion's Damage Threshold increases by 3.`
      }
    ]
  },
  {
    id: "169",
    name: "Squeaks’ Belt",
    image: `${cardArtFolder}/Equipments/SqueaksBelt.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Exhaustion: Target 1 Equipment in your Tomb; Retrieve Target. <span class="line-gap"></span> If attached to a non-Helper: This is the only Equipment the attached Champion can have attached.`
      }
    ]
  },
  {
    id: "170",
    name: "Anti-Magic Shield",
    image: `${cardArtFolder}/Equipments/AntiMagicShield.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Duelist and Warded. <span class="line-gap"></span> If attached to a Clockwork or Helper: The attached Champion loses Warded and gains Non-Believer.`
      }
    ]
  },
  {
    id: "171",
    name: "Bustermech MK3 - Blitzpeed",
    image: `${cardArtFolder}/Obelisks/BustermechMK3Blitzpeed.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "Can only be activated if your Opponent controls 2 or more Champions",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted (Reflex): Discard 1; Move this card, and its Commander, to your Reserve. Return both to your Zone during the next Intermission Phase.`
      }
    ]
  },
  {
    id: "172",
    name: "Bustermech MK7 - ZeroBlast",
    image: `${cardArtFolder}/Obelisks/BustermechMK7ZeroBlast.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "Can only be activated if your Opponent controls a collective of 10+ Damage amongst their Champions",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Upon Activation: Recruit 1 Clockwork, that Champion becomes this card's Commander. <span class="line-gap"></span> Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: This card's Commander cannot attack. <span class="line-gap"></span> Mounted: Target 1 face-up Champion on the Zone; Deal 5 Damage to Target.`
      }
    ]
  },
  {
    id: "173",
    name: "Scholarship Dinner Interrupted",
    image: `${cardArtFolder}/Rush/ScholarshipDinnerInterrupted.png`,
    rarity: "Common",
    type: "Rush",
    condition: "You control at least 2 face-up Champions",
    cost: "Rally 2 Jumper Token to your Opponent's Zone",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Obliterate all Champions you control, and if you do, Unleash all Champions Obliterated by this effect.`
      }
    ]
  },
  {
    id: "174",
    name: "Mainframe Rework",
    image: `${cardArtFolder}/Rush/MainframeRework.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Target 1 Token your Opponent controls",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Take control of Target until the End Phase. It is Destroyed during the next turn's End Phase.`
      }
    ]
  },
  {
    id: "175",
    name: "System Breach",
    image: `${cardArtFolder}/Rush/SystemBreach.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Obliterate 1 Champion you control of your Opponent's choice",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy all Tokens, and if you do, deal 1 Damage per Token Destroyed to the Player that controlled it.`
      }
    ]
  },
  {
    id: "176",
    name: "Self-Sustaining Noisemaker",
    image: `${cardArtFolder}/Reflex/SelfSustainingNoisemaker.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "Your opponent would activate a card or effect",
    cost: "Rally 2 Hunky Token to your Opponent's Zone",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the activation, and if you do, destroy the card. <span class="line-gap"></span> If this card is in your Tomb, and a Reflex card is activated: Rally 1 Jumper Token to your Opponent's Zone; Set this card face-down in your Arsenal.`
      }
    ]
  },
  {
    id: "177",
    name: "Off and On Again",
    image: `${cardArtFolder}/Reflex/OffOnAgain.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "A card or effect is activated that would negate a card or effect",
    cost: "",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the negating effect, and if you do, Destroy that card.`
      }
    ]
  },
  {
    id: "178",
    name: "Trojan Token",
    image: `${cardArtFolder}/Reflex/TrojanToken.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent controls at least 1 Token",
    cost: "",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy up to 3 cards your Opponent controls, including at least 1 Token.`
      }
    ]
  },
  {
    id: "179",
    name: "Magnetized Defense Field",
    image: `${cardArtFolder}/Reflex/MagnetizedDefenseField.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "An Opponent declares an attack with a Champion that has at least 1 attached Equipment",
    cost: "",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Flip face-down all Equipments your Opponent controls.`
      }
    ]
  },
  {
    id: "180",
    name: "Quick! Do Math!",
    image: `${cardArtFolder}/Reflex/QuickDoMath.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent attempts to activate a Champion's effect, and that Champion has 3 or more Damage",
    cost: "",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Negate that Champion's effect, and if you do, flip that Champion face-down.`
      }
    ]
  },
  {
    id: "181",
    name: "Dame Aldred, Oathbound",
    image: `${cardArtFolder}/Champions/AldredOathbound.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Your Opponent draws 2",
    tags: ["Noble", "Protector","Knight"],
    damage: 5,
    life: 5,
    damageThreshold: "2",
    abilities: [
      {
        text: `Priority, Veilbind <span class="line-gap"></span> To Arms!: On Rally (Exhaustion): Attach 1 Equipment to this Champion from your Hand, Deck, or Tomb (ignoring its cost). <span class="line-gap"></span> Sacrificial Smite (Exhaustion): Destroy 1 Equipment attached to this card and Target 1 Champion on the Zone; Destroy Target. <span class="line-gap"></span> Reforged: If this card has no attached Equipments (Exhaustion): Attach 1 Equipment to this card from your Tomb (ignoring its cost).`
      }
    ]
  },
  {
    id: "182",
    name: "Sir Pecks a Lot",
    image: `${cardArtFolder}/Champions/PecksALot.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Protector","Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Arm Thy Knight: If you control a Knight: Activate 1 Equipment from your Hand, Deck, or Tomb (ignoring its cost), attaching the card to a Knight you control. <span class="line-gap"></span> Awaken Ally: If this is the only Champion you control (not counting Tokens): Sacrifice this card; Recruit 1 Noble. <span class="line-gap"></span> Helping Hand: If this card is in your Tomb: Obliterate this card and Target 1 Noble or Helper in your Tomb; Resurrect Target.`
      }
    ]
  },
  {
    id: "183",
    name: "Gerald, the Turncoat",
    image: `${cardArtFolder}/Champions/TurncoatGerald.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Knight"],
    damage: 5,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Conscript, Deathward <br><br> Winning-Team Enthusiast: On Resurrection (Mandatory): Your Opponent draws 1.`
      }
    ]
  },
  {
    id: "184",
    name: "Indebted Undertaker",
    image: `${cardArtFolder}/Champions/IndebtedUndertaker.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Citizen"],
    damage: 2,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Undertaker`
      }
    ]
  },
  {
    id: "185",
    name: "Belligerent Noble",
    image: `${cardArtFolder}/Champions/BelligerentNoble.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Royal", "Citizen"],
    damage: 1,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Greedy, Reach`
      }
    ]
  },
  {
    id: "186",
    name: "Eager Young Guardsman",
    image: `${cardArtFolder}/Champions/EagerYoungGuardsman.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Knight"],
    damage: 3,
    life: 9,
    damageThreshold: "1",
    abilities: [
      {
        text: `Defender, Naive <span class="line-gap"></span> Security Blanket: While Equipped: This Champion is unaffected by its default Passives. <span class="line-gap"></span> Hail Mary: Destroy 1 Equipment attached to this card and Target 1 face-up Champion on the Zone; Deal 3 Damage to Target.`
      }
    ]
  },
  {
    id: "187",
    name: "Darkest Knightmare",
    image: `${cardArtFolder}/Champions/DarkestKnightmare.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "There is at least 1 Blademaster or Knight in either Players' Tomb",
    cost: "Basic",
    tags: ["Noble", "Undead","Knight"],
    damage: 3,
    life: 6,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bulletproof <span class="line-gap"></span> Grave Goods: On Rally: Attach up to 2 Equipments from your Tomb to this card (ignoring their costs). <span class="line-gap"></span> Rotting Flesh: During your End Phase (Mandatory): Deal 3 Damage to this card. <span class="line-gap"></span> Miraculous Recovery: If Destroyed: Obliterate this card and Target 1 Knight in your Tomb; Resurrect Target, and if you do, attach to it 1 Equipment from your Hand, Deck, or Tomb (ignoring its cost).`
      }
    ]
  },
  {
    id: "188",
    name: "Mark, the Non-Believer",
    image: `${cardArtFolder}/Champions/MarkNonBeliever.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Helper"],
    damage: 1,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Non-Believer <span class="line-gap"></span> You're Not Real!: Undead deal no Battle Damage to this card, and you take no Battle Damage from battles involving this card and an Undead. <span class="line-gap"></span> Eat That Rock! (Exhaustion): Discard 1 and Target 1 Obelisk; Destroy Target.`
      }
    ]
  },
  {
    id: "189",
    name: "Castle Forge",
    image: `${cardArtFolder}/Obelisks/CastleForge.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "This card must be set for a turn before you can activate it, this card can be flipped or activated by another card's effect",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Mill 1; Move 1 \"Castle\" Obelisk from your Deck or Tomb to your Reserve. <span class="line-gap"></span> If you control at least 1 other face-up \"Castle\" Obelisk: Discard 2; Add 1 \"Castle\" Obelisk. <span class="line-gap"></span> If Destroyed: Activate up to 3 \"Castle\" Obelisks from your Reserve.`
      }
    ]
  },
  {
    id: "190",
    name: "Castle Garrison",
    image: `${cardArtFolder}/Obelisks/CastleGarrison.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "This card must be set for a turn before you can activate it, this card can be flipped or activated by another card's effect",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <br> Target 1 face-up Champion you control; Attach 1 Equipment to Target from your Hand or Deck (ignoring its cost). <br> While you control at least 1 face-up \"Castle\" Obelisk and this card is in you Reserve: Destroy 1 face-up card you control; Activate this card (ignoring its cost). <br> While you control at least 2 other face-up \"Castle\" Obelisks: Increase the Damage Threshold of your Champions by 1 for every face-up \"Castle\" Obelisk you control.`
      }
    ]
  },
  {
    id: "191",
    name: "Castle Walls",
    image: `${cardArtFolder}/Obelisks/CastleWalls.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "This card must be set for a turn before you can activate it, this card can be flipped or activated by another card's effect",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Increase the Damage Threshold of your Champions by 1 for every face-up \"Castle\" Obelisk you control. <span class="line-gap"></span> If an Opponent declares an attack while you control at least 1 other face-up \"Castle\" Obelisk (Reflex): Negate that attack, and if you do, deal 1 Damage to the attacking Champion. <span class="line-gap"></span> While you control at least 2 other face-up \"Castle\" Obelisks: Your Champions gain Warded.`
      }
    ]
  },
  {
    id: "192",
    name: "Castle Moat",
    image: `${cardArtFolder}/Obelisks/CastleMoat.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "This card must be set for a turn before you can activate it, this card can be flipped or activated by another card's effect",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Your Champions gain Invisible and Veilbind. <span class="line-gap"></span> If an Opponent declares an attack while you control at least 1 other face-up \"Castle\" Obelisk (Reflex): Destroy this card; Destroy all of that Opponent's face-up Champions. <span class="line-gap"></span> While you control at least 3 other face-up \"Castle\" Obelisks: Your Champions gain Unstoppable.`
      }
    ]
  },
  {
    id: "193",
    name: "Castle Tower",
    image: `${cardArtFolder}/Obelisks/CastleTower.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "This card must be set for a turn before you can activate it, this card can be flipped or activated by another card's effect",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Your Champions gain Reach. <span class="line-gap"></span> While you control at least 1 other face-up \"Castle\" Obelisk: \"Castle\" Obelisks no longer need to be set face-down before they can be activated. <span class="line-gap"></span> While you control at least 3 other face-up \"Castle\" Obelisks (Reflex): Target 1 card on the Zone; Destroy Target.`
      }
    ]
  },
  {
    id: "194",
    name: "Castle Kitchen",
    image: `${cardArtFolder}/Obelisks/CastleKitchen.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "This card must be set for a turn before you can activate it, this card can be flipped or activated by another card's effect",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Offer 1 Life and Target 1 face-up Champion you control; Target gains 3 Life. <span class="line-gap"></span> If a Champion(s) you control is Destroyed while you control at least 1 other face-up \"Castle\" Obelisk (Reflex): Flip this card face-down; Resurrect 1 of the Destroyed Champions. <span class="line-gap"></span> While you control at least 2 other face-up \"Castle\" Obelisks: Your Champions gain Greedy.`
      }
    ]
  },
  {
    id: "195",
    name: "Castle Dungeon",
    image: `${cardArtFolder}/Obelisks/CastleDungeon.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "This card must be set for a turn before you can activate it, this card can be flipped or activated by another card's effect",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Champions you Destroy by battle are sent to your Opponent's Reserve, instead of their Tomb. <span class="line-gap"></span> While you control at least 2 other face-up \"Castle\" Obelisks: Target 1 Champion in your Opponent's Reserve; Rally Target to your Zone. <span class="line-gap"></span> While you control at least 4 other face-up \"Castle\" Obelisks: Target 1 Obelisk in your Tomb; Activate Target (ignoring its cost).`
      }
    ]
  },
  {
    id: "196",
    name: "Sir Erik, Vanguard",
    image: `${cardArtFolder}/Champions/SirErikVanguard.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Your Opponent draws 2",
    tags: ["Noble", "Protector","Knight"],
    damage: 4,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Deathward, Defender, Menace <span class="line-gap"></span> Second-Hand Arms: On Rally (Exhaustion): Attach 1 Equipment to this card from your Hand, Reserve, or Tomb (ignoring its cost). <span class="line-gap"></span> Call to Arms: If Destroyed: Add 1 Knight, and if you do, you can retrieve 1 Equipment.`
      }
    ]
  },
  {
    id: "197",
    name: "Castle Architect",
    image: `${cardArtFolder}/Champions/CastleArchitect.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Mill 1",
    tags: ["Noble", "Helper","Specialist"],
    damage: 0,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Honest Work: Mill 4; Activate from your Hand, Deck, Reserve, or face-down Arsenal, 1 \"Castle\" Obelisk.`
      }
    ]
  },
  {
    id: "198",
    name: "Cowardly Knight",
    image: `${cardArtFolder}/Champions/CowardlyKnight.png`,
    rarity: "Common",
    type: "Champion",
    condition: "You control at least 1 Obelisk",
    cost: "Basic",
    tags: ["Noble", "Knight"],
    damage: 1,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Fortified <br><br> Free Real Estate: If Sent to Tomb: Add 1 Obelisk.`
      }
    ]
  },
  {
    id: "199",
    name: "Princess Cindy",
    image: `${cardArtFolder}/Champions/PrincessCindy.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Mill 10 and your Opponent draws 2",
    tags: ["Noble", "Royal","Citizen"],
    damage: 0,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Fortified <span class="line-gap"></span> Call the Guard!: On Rally: Recruit 1 Knight. <span class="line-gap"></span> Royal Support: Your Knight's Damage Thresholds increase by 1. <span class="line-gap"></span> Royal Guard: This card gains Invisible and Non-Believer while you control a Knight.`
      }
    ]
  },
  {
    id: "200",
    name: "Eripimone, the Unfurling Fury",
    image: `${cardArtFolder}/Champions/EripimoneUnfurlingFury.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1 Champion your Opponent controls, Rally this card under their control",
    tags: ["Noble", "Megalith","Dragon"],
    damage: 9,
    life: 15,
    damageThreshold: "3",
    abilities: [
      {
        text: `Greedy <span class="line-gap"></span> Knightsbane: Knights, and their controllers, take no Battle Damage from this card. Knights deal double Battle Damage to this card. <span class="line-gap"></span> Furious Fire Breath (Exhaustion): Offer 4 Life and Target up to 2 Champions your Opponent controls; Destroy Targets, and if you do, draw 1 for each Champion destroyed. <span class="line-gap"></span> Save the Princess: If Destroyed by Battle: Recruit 1 Royal.`
      }
    ]
  },
  {
    id: "201",
    name: "Portable Prairie Dog",
    image: `${cardArtFolder}/Champions/PortablePrarieDog.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Emergency Tunnel: If your Opponent declares an attack (Reflex): Flip this card face-down, and if you do, Rally 2 Burrow Token.`
      }
    ]
  },
  {
    id: "202",
    name: "Little King",
    image: `${cardArtFolder}/Champions/LittleKing.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Royal","Citizen"],
    damage: 3,
    life: 1,
    damageThreshold: "2",
    abilities: [
      {
        text: `I'm In Charge!: On Rally: If this card has the highest Damage on the Zone: Draw 1.`
      }
    ]
  },
  {
    id: "203",
    name: "Blacksmith Addict",
    image: `${cardArtFolder}/Champions/BlacksmithAddict.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Protector","Knight"],
    damage: 0,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Forged <span class="line-gap"></span> Feed the Addiction: Depending on the number of attached Equipments this card has, it gains the following passives: <span class="line-gap"></span> 1 • Warded <span class="line-gap"></span> 2 • Priority <span class="line-gap"></span> 3 • Bulletproof and Duelist`
      }
    ]
  },
  {
    id: "204",
    name: "Young Draconid Spawn",
    image: `${cardArtFolder}/Champions/YoungDraconidSpawn.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble", "Dragon"],
    damage: 0,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Mommy!: If Sent to Tomb: Add or Retrieve 1 Dragon.`
      }
    ]
  },
  {
    id: "205",
    name: "Switch Stance",
    image: `${cardArtFolder}/Actions/SwitchStance.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Draw 2. <br><br> During your Opponent's next Draw Phase: Your Opponent draws 2 additional cards.`
      }
    ]
  },
  {
    id: "206",
    name: "Swift Pegasus",
    image: `${cardArtFolder}/Obelisks/SwiftPegasus.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Mount <span class="line-gap"></span> Mounted: This card's Commander gains Priority and Reach.`
      }
    ]
  },
  {
    id: "207",
    name: "Gleam",
    image: `${cardArtFolder}/Equipments/Gleam.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "",
    cost: "Your Opponent Retrieves 1",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If attached to a Blademaster or Knight: Increase the attached Champion's Damage by 5. <span class="line-gap"></span> Exhaustion: Destroy this card and Target 1 face-up Champion on the Zone; Deal 2 Damage to Target. <span class="line-gap"></span> If Sent to Tomb: Discard 1; Stack this card.`
      }
    ]
  },
  {
    id: "208",
    name: "Heroic Flank",
    image: `${cardArtFolder}/Rush/HeroicFlank.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Your Opponent looks at your Hand and selects 1 card to shuffle back into your Deck",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit 1 Knight with 4 or less Damage. <span class="line-gap"></span> If you have no Knights in your Deck: Draw 1.`
      }
    ]
  },
  {
    id: "209",
    name: "Twice-Slain",
    image: `${cardArtFolder}/Reflex/TwiceSlain.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "A Champion you control is Destroyed by battle",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Resurrect that Champion, and if you do, your Opponent draws 2.`
      }
    ]
  },
  {
    id: "210",
    name: "Parry!",
    image: `${cardArtFolder}/Reflex/Parry.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "A card or effect is activated",
    cost: "Your opponent draws 1",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the activation, and if you do, Destroy it.`
      }
    ]
  },
  {
    id: "211",
    name: "Fair Fight",
    image: `${cardArtFolder}/Reflex/FairFight.png`,
    rarity: "Superior",
    type: "Reflex",
    condition: "It is the end of the Battle Phase and your Opponent controls more cards than you",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Your opponent Obliterates cards from their Zone so they control the same number of cards as you do. <span class="line-gap"></span> If you control no cards: You can activate this card from your Hand.`
      }
    ]
  },
  {
    id: "212",
    name: "Fake-Out",
    image: `${cardArtFolder}/Reflex/FakeOut.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "A Champion you control is Targeted",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Bounce Target.`
      }
    ]
  },
  {
    id: "213",
    name: "Hedge Maze",
    image: `${cardArtFolder}/Reflex/HedgeMaze.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent declares an attack",
    cost: "Your Opponent draws 1",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the attack, and if you do, you can Rally 1 Champion from your Hand (ignoring its cost).`
      }
    ]
  },
  {
    id: "214",
    name: "Acid Rain",
    image: `${cardArtFolder}/Actions/AcidRain.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "Destroy all cards in your Arsenal (minimum of 1)",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy all cards in your Opponent's Arsenal, then both players draw cards equal to the number of their cards that were destroyed.`
      }
    ]
  },
  {
    id: "215",
    name: "Thread of Fate",
    image: `${cardArtFolder}/Actions/ThreadOfFate.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Target 2 Champions on the Zone",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `If either of the Targeted Champions leaves the Zone, the other is sent to the same location.`
      }
    ]
  },
  {
    id: "216",
    name: "Arm The Peasants",
    image: `${cardArtFolder}/Actions/ArmThePeasants.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Attach 1 Equipment from your Hand, Deck, or Tomb to each Champion you control with a Damage of 1 or less (ignoring their costs). <span class="line-gap"></span> Destroy all Equipments attached this way during the End Phase.`
      }
    ]
  },
  {
    id: "217",
    name: "Long Live The King",
    image: `${cardArtFolder}/Actions/LongLiveTheKing.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Target 1 Champion your Opponent controls",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy Target, and if you do, your Opponent can Recruit 1 that shares a tag with the Destroyed Champion, and has equal or less Damage than it does in the Tomb.`
      }
    ]
  },
  {
    id: "218",
    name: "Royal Gift",
    image: `${cardArtFolder}/Actions/RoyalGift.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Your Opponent draws 1",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Ignore the cost of the next Action you activate this turn.`
      }
    ]
  },
  {
    id: "219",
    name: "Council of Two",
    image: `${cardArtFolder}/Actions/CouncilOfTwo.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Both Players reveal their Hands and each Player chooses 1 card from their Opponent's Hand to discard.`
      }
    ]
  },
  {
    id: "220",
    name: "Shared Burden",
    image: `${cardArtFolder}/Actions/SharedBurden.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Both Players draw 1, then discard 1.`
      }
    ]
  },
  {
    id: "221",
    name: "Giantslayer",
    image: `${cardArtFolder}/Rush/Giantslayer.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Target 1 face-up Megalith, or a Champion with 10 or more Damage, on the Zone",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy Target, and if you do, both Players draw 1.`
      }
    ]
  },
  {
    id: "222",
    name: "Fair Warning",
    image: `${cardArtFolder}/Rush/FairWarning.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Your Opponent draws 1",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Look at your Opponent's Hand and select 1 card from it to Oblierate until the End Phase.`
      }
    ]
  },
  {
    id: "223",
    name: "Vow of the Vanguard",
    image: `${cardArtFolder}/Rush/VowOfTheVanguard.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Target 1 Champion you control and your Opponent draws 1",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Target takes no Damage, and cannot be Destroyed, until the end of this turn.`
      }
    ]
  },
  {
    id: "224",
    name: "Noble Decree",
    image: `${cardArtFolder}/Rush/NobleDecree.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Your Opponent sets face-down 1 Rush or Reflex card from their Tomb to their Arsenal",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Set face-down 1 Rush or Reflex card from your Deck to your Arsenal (without revealing what it is).`
      }
    ]
  },
  {
    id: "225",
    name: "Charge!",
    image: `${cardArtFolder}/Rush/Charge.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Obliterate all cards from your Tomb (minimum of 1)",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Double the Damage of all Knights you currently control. <span class="line-gap"></span> If you control no Knights: Then, increase the Damage of all non-Knights by 1. <span class="line-gap"></span> Destroy all affected Champions during the End Phase.`
      }
    ]
  },
  {
    id: "226",
    name: "Too-Heavy Armor",
    image: `${cardArtFolder}/Equipments/TooHeavyArmor.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the attached Champion’s Damage Threshold by 2, but it can no longer attack.`
      }
    ]
  },
  {
    id: "227",
    name: "Nobleman's Bribe",
    image: `${cardArtFolder}/Equipments/NoblemansBribe.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to an opponent's Champion",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Contained. <span class="line-gap"></span> During the Intermission Phase of the attached Champion's controller: The Champion’s controller draws 1.`
      }
    ]
  },
  {
    id: "228",
    name: "Steel-Stilted Stallion",
    image: `${cardArtFolder}/Equipments/SteelStiltedStallion.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Priority, Reach, and Taunt. <span class="line-gap"></span> The attached Champion's Damage Threshold is also reduced to 1.`
      }
    ]
  },
  {
    id: "229",
    name: "Tempered Steel",
    image: `${cardArtFolder}/Equipments/TemperedSteel.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the attached Champion's Damage by 1. <span class="line-gap"></span> If attached to a Blademaster or Knight: Instead, increase the attached Champion's Damage by 4. <span class="line-gap"></span> Each time the attached Champion declares an attack (Mandatory): Your Opponent draws 1.`
      }
    ]
  },
  {
    id: "230",
    name: "Princess's Ribbon",
    image: `${cardArtFolder}/Equipments/PrincessRibbon.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Warded. <span class="line-gap"></span> If Destroyed: Your Opponent can Recruit 1 with Damage 1 or less.`
      }
    ]
  },
  {
    id: "231",
    name: "Plate of the Duskbringer",
    image: `${cardArtFolder}/Equipments/PlateOfTheDuskbringer.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "",
    cost: "Your Opponent draws 3",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Durable. <span class="line-gap"></span> If attached to a Knight: The attached Champion loses Durable and gains Bulletproof. <span class="line-gap"></span> If Destroyed (Mandatory): Retrieve this card, and if you do, you must Discard 2.`
      }
    ]
  },
  {
    id: "232",
    name: "Obsidian Gauntlet",
    image: `${cardArtFolder}/Equipments/ObsidianGauntlet.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Non-Believer. <span class="line-gap"></span> During your End Phase (Mandatory): Offer 4 Life.`
      }
    ]
  },
  {
    id: "233",
    name: "Cursed Basilisk-Hide Cloak",
    image: `${cardArtFolder}/Equipments/CursedBasiliskHideCloak.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Champion you control",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Invisible. <span class="line-gap"></span> During your End Phase (Mandatory): Discard 1 or, if you are unable to, Destroy this card. <span class="line-gap"></span> If Destroyed: Flip the attached Champion face-down, it cannot be Flip Rallied.`
      }
    ]
  },
  {
    id: "234",
    name: "Guardsman's Pike",
    image: `${cardArtFolder}/Equipments/GuardsmansPike.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If the attached Champion deals Battle Damage: Target 1 face-up Champion on the Zone; Deal 2 Damage to Target.`
      }
    ]
  },
  {
    id: "235",
    name: "Pixiedust Pauldrons",
    image: `${cardArtFolder}/Equipments/PixiedustPauldrons.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion's Damage Threshold is increased by 2. <span class="line-gap"></span> Each time the attached Champion battles (Mandatory): Your Opponent draws 1.`
      }
    ]
  },
  {
    id: "236",
    name: "Dragonslayer Spear",
    image: `${cardArtFolder}/Equipments/DragonslayerSpear.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion deals double Battle Damage to Constructs, Dragons, Kaiju, and Megaliths.`
      }
    ]
  },
  {
    id: "237",
    name: "Gabberon's Grating Greataxe",
    image: `${cardArtFolder}/Equipments/GabberonsGratingGreataxe.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Deathcurse.`
      }
    ]
  },
  {
    id: "238",
    name: "Helmsmasher Morningstar",
    image: `${cardArtFolder}/Equipments/HelmsmasherMorningstar.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `At the end of a battle in which the attached Champion dealt Damage: Target 1 face-up Equipment on the Zone; Destroy Target.`
      }
    ]
  },
  {
    id: "239",
    name: "Grit Helm",
    image: `${cardArtFolder}/Equipments/GritHelm.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The first time each turn the attached Champion would be Damaged or Destroyed (Mandatory): Your Opponent draws 2; The attached Champion is not Damaged or Destroyed.`
      }
    ]
  },
  {
    id: "240",
    name: "Boots of Same-Size",
    image: `${cardArtFolder}/Equipments/BootsOfSameSize.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Champion with 1 or less Damage",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `During Damage Calculation: Increase the attached Champion's Damage to match the Champion it battles.`
      }
    ]
  },
  {
    id: "241",
    name: "Professor Jeremiah Grayborn, MD",
    image: `${cardArtFolder}/Champions/DrJeremiah.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Your Opponent gains 10 Life",
    tags: ["Vivisect","Lifebinder","Specialist"],
    damage: 0,
    life: 10,
    damageThreshold: "1",
    abilities: [
      {
        text: `Lifebalance <span class="line-gap"></span> Healing Hands (Exhaustion): Your Opponent gains 5 Life; Obliterate Mill 8 from your Opponent's Deck. <span class="line-gap"></span> Bestow Life (Exhaustion): Target 1 Construct or Helper in your Tomb; Resurrect Target. Destroy all Champions Resurrected this way if this card leaves the Zone.`
      }
    ]
  },
  {
    id: "242",
    name: "Bitey McChomperson, BS",
    image: `${cardArtFolder}/Champions/Bitey.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Vivisect", "Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Rescind Anasthesia: Target 1 other Champion you control; Target can use all of its non-Exhaustion abilities an additional time this turn. <span class="line-gap"></span> Defibrillate: Sacrifice this card and Target 1 other Champion in your Tomb; Resurrect Target, but reduce its Life to 1. <span class="line-gap"></span> Helping Hand: If this card is in your Tomb: Obliterate this card and Target up to 2 cards in your Tomb; Retrieve Targets.`
      }
    ]
  },
  {
    id: "243",
    name: "Accelerated Response",
    image: `${cardArtFolder}/Rush/AcceleratedResponse.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Obliterate 1 Action or Rush from your Tomb that you did not activate this turn",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Activate the Obliterated card.`
      }
    ]
  },
  {
    id: "244",
    name: "Doctor Faekgei Realman",
    image: `${cardArtFolder}/Champions/DrFaekgeiRealman.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Offer 2 Life",
    tags: ["Vivisect", "Lifebinder","Specialist"],
    damage: 4,
    life: 6,
    damageThreshold: "1",
    abilities: [
      {
        text: `Back Alley Doctor: Reduce 1 Champion you control's Life by any amount (to a minimum of 0); Increase 1 Champion you control's Life, other than this one or the one reduced, by the amount reduced.`
      }
    ]
  },
  {
    id: "245",
    name: "Tzokruzka, Creator's Nightmare",
    image: `${cardArtFolder}/Champions/TzokruzkaCreatorsNightmare.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 4",
    tags: ["Vivisect", "Construct","Megalith"],
    damage: 9,
    life: 8,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bloodrage, Duelist <span class="line-gap"></span> Construct Fodder: Sacrifice 1; Destroy 1 card on the Zone.`
      }
    ]
  },
  {
    id: "246",
    name: "Surgical Slayer",
    image: `${cardArtFolder}/Champions/SurgicalSlayer.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Your opponent gains 5 Life",
    tags: ["Vivisect", "Construct"],
    damage: 4,
    life: 5,
    damageThreshold: "1",
    abilities: [
      {
        text: `Smallfry <span class="line-gap"></span> Precise Strike: This card gains Unstoppable. It is Destroyed during the End Phase.`
      }
    ]
  },
  {
    id: "247",
    name: "Groundskeeper Charles",
    image: `${cardArtFolder}/Champions/GroundskeeperCharles.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Shuffle your Tomb into your deck (minimum of 1 card)",
    tags: ["Vivisect", "Assistant","Citizen"],
    damage: 1,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Gravekeeper`
      }
    ]
  },
  {
    id: "248",
    name: "Imposter",
    image: `${cardArtFolder}/Champions/Imposter.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "Your opponent controls at least 1 face-up Champion that can be Targeted by effects",
    cost: "Basic",
    tags: ["Vivisect", "Construct"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Take Your Face: On Rally (Mandatory): Target 1 of your Opponent's face-up Champions; This card's Damage and Life become equal to that Champion's current Damage and Life.`
      }
    ]
  },
  {
    id: "249",
    name: "Mutated Leech",
    image: `${cardArtFolder}/Champions/MutatedLeech.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Vivisect", "Construct"],
    damage: 3,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Lifesteal <br> Bloodsucker: Offer 1 Life; This Champion gains 2 Life.`
      }
    ]
  },
  {
    id: "250",
    name: "Sloughing-Skin Mutate",
    image: `${cardArtFolder}/Champions/SloughingSkinMutate.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "You cannot declare attacks the turn you Rally this Champion",
    cost: "Your Opponent Gains 5 Life",
    tags: ["Vivisect", "Construct"],
    damage: 0,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Split: Offer 1 Life from this card; Rally 1 Meat Token to your Zone.`
      }
    ]
  },
  {
    id: "251",
    name: "Doctor Melinda Livingston, MD",
    image: `${cardArtFolder}/Champions/DrMelindaLivingston.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "All Damaged Champions your Opponent controls regain their missing Life (minimum of 1)",
    tags: ["Vivisect", "Lifebinder","Specialist"],
    damage: 2,
    life: 9,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bloodrage, Taskmaster <span class="line-gap"></span> Miraculous Revival: Both Players Target 1 Champion in their respective Tombs; Resurrect Targets.`
      }
    ]
  },
  {
    id: "252",
    name: "Friend Ball",
    image: `${cardArtFolder}/Champions/FriendBall.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Sacrifice all Champions you control (minimum of 2)",
    tags: ["Vivisect", "Construct","Megalith"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `What Fun We're Having: On Rally: Increase this card's Damage and Life by the remaining Damage and Life of all Champions sacrificed for its Rally.`
      }
    ]
  },
  {
    id: "253",
    name: "Explosive Homonculus",
    image: `${cardArtFolder}/Champions/ExplosiveHomonculus.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Vivisect", "Construct"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> You've Fallen for My Trap: If Destroyed By Battle: Your Opponent gains 4 Life; Add 1 Reflex.`
      }
    ]
  },
  {
    id: "254",
    name: "Nurse Hottie",
    image: `${cardArtFolder}/Champions/NurseHottie.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Vivisect", "Lifebinder"],
    damage: 3,
    life: 5,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority <span class="line-gap"></span> Steroids Save Lives: If this Champion battles (Reflex): Your Opponent gains X Life; Increase this card's Damage by X until the end of Damage Calculation.`
      }
    ]
  },
  {
    id: "255",
    name: "Behavior-Corrected Grad Student",
    image: `${cardArtFolder}/Champions/BehaviorCorrectedGradStudent.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Obliterate 1 Champion from your Tomb",
    tags: ["Vivisect", "Student","Construct"],
    damage: 2,
    life: 4,
    damageThreshold: "3",
    abilities: [
      {
        text: `Forged`
      }
    ]
  },
  {
    id: "256",
    name: "Suspicious Mortician",
    image: `${cardArtFolder}/Champions/SuspiciousMortician.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "A Champion you controlled entered the Tomb this turn",
    cost: "Basic",
    tags: ["Vivisect", "Undead","Specialist"],
    damage: 0,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Where's The Body? (Exhaustion): Target 1 Champion in your Tomb; Resurrect Target, and if you do, it becomes an Undead and is reduced to 1 Life.`
      }
    ]
  },
  {
    id: "257",
    name: "Blood Draw",
    image: `${cardArtFolder}/Actions/BloodDraw.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Your Opponent gains 5 Life",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Draw 1 for every 5 Life difference between you and your Opponent.`
      }
    ]
  },
  {
    id: "258",
    name: "Exploratory Surgery",
    image: `${cardArtFolder}/Actions/ExploratorySurgery.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Mill 6",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Add 1 Vivisect. <span class="line-gap"></span> If you have no Vivisects in your Deck: Add 1 Basic.`
      }
    ]
  },
  {
    id: "259",
    name: "Prognosis: Fatal",
    image: `${cardArtFolder}/Actions/PrognosisFatal.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Offer 4 Life",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Deal 4 Damage to 1 face-up Champion or Player of your choice.`
      }
    ]
  },
  {
    id: "260",
    name: "Perfect Poison",
    image: `${cardArtFolder}/Actions/PerfectPoison.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "Target 1 face-up Champion on the Zone, its controller gains 4 Life",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Target is reduced to 1 Life and can no longer attack.`
      }
    ]
  },
  {
    id: "261",
    name: "Emergency Transfusion",
    image: `${cardArtFolder}/Actions/EmergencyTransfusion.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Draw 3, and if you do, Obliterate 2 cards from your Hand.`
      }
    ]
  },
  {
    id: "262",
    name: "My Perfect Creations",
    image: `${cardArtFolder}/Actions/MyPerfectCreations.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Your Opponent gains 2 Life for every face-up Champion you control",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `All face-up Champions you control gain 4 Life.`
      }
    ]
  },
  {
    id: "263",
    name: "Listen Up!",
    image: `${cardArtFolder}/Actions/ListenUp.png`,
    rarity: "Common",
    type: "Action",
    condition: "You cannot activate other cards or effects the turn you activate this card",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Your Opponent cannot activate any cards or effects until the end of this turn.`
      }
    ]
  },
  {
    id: "264",
    name: "Weeder Class",
    image: `${cardArtFolder}/Actions/WeederClass.png`,
    rarity: "Rare",
    type: "Action",
    condition: "Can only be activated during your Main Phase 1",
    cost: "It becomes your End Phase",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy all face-up Champions with 2 or less Damage.`
      }
    ]
  },
  {
    id: "265",
    name: "Pop Quiz: Anatomy",
    image: `${cardArtFolder}/Actions/PopQuizAnatomy.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "Your Opponent gained Life this turn",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Excavate 3 from your Opponent's Deck, and if you do, Obliterate 1. Return the remaining cards in the order they were in.`
      }
    ]
  },
  {
    id: "266",
    name: "Assigned Lab Partners",
    image: `${cardArtFolder}/Actions/AssignedLabPartner.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Target 2 Champions on the Zone that both have attached Equipments",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Swap their attached Equipments.`
      }
    ]
  },
  {
    id: "267",
    name: "Engineered Pathogen",
    image: `${cardArtFolder}/Actions/EngineeredPathogen.png`,
    rarity: "Rare",
    type: "Action",
    condition: "Can only be activated at the start of your Main Phase 1",
    cost: "Declare 1 Champion Tag from the Tags currently on the Zone",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy all face-up Champions on the Zone with that Tag, then it becomes the End Phase.`
      }
    ]
  },
  {
    id: "268",
    name: "Ethics Violation",
    image: `${cardArtFolder}/Actions/EthicsViolation.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Discard 1",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Your Opponent discards 1. <span class="line-gap"></span> Then, if you have no cards in your Hand: Draw 1.`
      }
    ]
  },
  {
    id: "269",
    name: "Extensive Modifications",
    image: `${cardArtFolder}/Equipments/ExtensiveModifications.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "The attached Champion can no longer activate its effects, even after this card leaves the Zone",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `While this card is attached: Increase the attached Champion's Damage by 4.`
      }
    ]
  },
  {
    id: "270",
    name: "Protective Mask",
    image: `${cardArtFolder}/Equipments/ProtectiveMask.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Endurance. <span class="line-gap"></span> If Sent to Tomb: Retrieve 1 Action.`
      }
    ]
  },
  {
    id: "271",
    name: "Surgeon's Blade",
    image: `${cardArtFolder}/Equipments/SurgeonsBlade.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Lifebinder",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Duelist and Priority. Any Battle Damage they would have done you gain in Life.`
      }
    ]
  },
  {
    id: "272",
    name: "Plagiarized Thesis",
    image: `${cardArtFolder}/Equipments/PlagiarizedThesis.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If Destroyed: Set 1 Reflex face-down into your Arsenal from your Deck (without revealing what it is).`
      }
    ]
  },
  {
    id: "273",
    name: "Beginner Course",
    image: `${cardArtFolder}/Actions/Biology101.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Target 1 face-up Champion your Opponent controls with 3 or more Damage",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Flip Target face-down.`
      }
    ]
  },
  {
    id: "274",
    name: "Operating Theater",
    image: `${cardArtFolder}/Obelisks/OperatingTable.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "Your Opponent gains 4 Life",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Negate your Opponent's first block during each of your Battle Phases.`
      }
    ]
  },
  {
    id: "275",
    name: "Advantageous Knowledge",
    image: `${cardArtFolder}/Obelisks/AdvantageousKnowledge.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "There are at least 2 face-up Champions on the Zone, and your Opponent controls at least 1 face-up Champion",
    cost: "Declare 2 Champion Tags",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Champions with the first declared tag deal double Battle Damage against the second, and Champions with the second tag deal half Battle Damage (rounded down) against the first. <br><br> Champions with both declared tags are unaffected by this card's effects.`
      }
    ]
  },
  {
    id: "276",
    name: "Lecture Hall",
    image: `${cardArtFolder}/Obelisks/LectureHall.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "You cannot Basic Rally the turn you activate this card",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If your Opponent activates a Champion effect (Reflex): Your Opponent gains 3 Life; Negate the effect, and if you do, stack the triggering Champion.`
      }
    ]
  },
  {
    id: "277",
    name: "Cadaver Lab",
    image: `${cardArtFolder}/Obelisks/CadaverLab.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If a Champion(s) is Destroyed (Reflex): Mill 1, if it is a Rush or Reflex, you can set it face-down in your Arsenal.`
      }
    ]
  },
  {
    id: "278",
    name: "Runaway Gurney",
    image: `${cardArtFolder}/Obelisks/RunawayGurney.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: If this card, or its Commander, moves Zones (Mandatory): Move this card, or its Commander, to the same location. <span class="line-gap"></span> Mounted: If this card's Commander Destroys a Champion by Battle: This card's Commander gains 5 Life.`
      }
    ]
  },
  {
    id: "279",
    name: "Emergency Surgery",
    image: `${cardArtFolder}/Rush/EmergencySurgery.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Both Players gain 10 Life.`
      }
    ]
  },
  {
    id: "280",
    name: "Secondary Operation",
    image: `${cardArtFolder}/Rush/SecondaryOperation.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Your Opponent gains 2 Life",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Draw 1. <br><br> If you have at least 3 Reflex in your Tomb: Draw 1 more.`
      }
    ]
  },
  {
    id: "281",
    name: "Preserved Tissue Sample",
    image: `${cardArtFolder}/Rush/PreservedTissueSample.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Target 1 Champion in your Tomb with a Damage of 1 or higher",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Retrieve Target, and if you do, you take Damage equal to its Damage.`
      }
    ]
  },
  {
    id: "282",
    name: "Free Healthcare",
    image: `${cardArtFolder}/Rush/FreeHealthcare.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "You and your Opponent control the name number of face-up Champions",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `All face-up Champions gain 10 Life.`
      }
    ]
  },
  {
    id: "283",
    name: "Final Lecture",
    image: `${cardArtFolder}/Rush/FinalLecture.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Your Opponent controls 3 or more Champions while you control none",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Rally 1 Champion from your Hand or Reserve (ignoring its cost).`
      }
    ]
  },
  {
    id: "284",
    name: "Recovered Personal Effects",
    image: `${cardArtFolder}/Rush/RecoveredPersonalEffects.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Your Opponent can Retrieve up to 2",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Draw the same number of cards that they Retrieved.`
      }
    ]
  },
  {
    id: "285",
    name: "Adrenaline Overdrive",
    image: `${cardArtFolder}/Rush/AdrenalineOverdrive.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Target 1 face-up Champion you control",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Increase Target's Damage by 4, and it gains Menace. <br><br> Destroy Target during the End Phase.`
      }
    ]
  },
  {
    id: "286",
    name: "Cryostasis Chamber",
    image: `${cardArtFolder}/Rush/CryostasisChamber.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Target 1 Champion on the Zone",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Oblierate Target until the end of this turn.`
      }
    ]
  },
  {
    id: "287",
    name: "Implant Activation",
    image: `${cardArtFolder}/Rush/ImplantActivation.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `All face-up Champions currently on the Zone gain Forged until the end of this turn.`
      }
    ]
  },
  {
    id: "288",
    name: "Mad Tinkering",
    image: `${cardArtFolder}/Rush/MadTinkering.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Sacrifice 2",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit 1 Construct, but negate its effects.`
      }
    ]
  },
  {
    id: "289",
    name: "Patient Mix-Up",
    image: `${cardArtFolder}/Reflex/PatientMixUp.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "An effect that Targets a card was activated",
    cost: "Your Opponent Chooses, Either: Your Opponent draws 2 or Discard 1 random card",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Change the Target to a different appropriate Target of your choice.`
      }
    ]
  },
  {
    id: "290",
    name: "Reimburse Tuition",
    image: `${cardArtFolder}/Reflex/ReimburseTuition.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "Your Opponent declares an attack",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy the attacking Champion, and if you do, your Opponent gains 4 Life.`
      }
    ]
  },
  {
    id: "291",
    name: "Cardiac Reset",
    image: `${cardArtFolder}/Reflex/CardiacReset.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent would Rally a Champion(s)",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the Rally, and if you do, Destroy those Champions. <span class="line-gap"></span> If this card resolves successfully: Set this card face-down in your Opponent's Arsenal.`
      }
    ]
  },
  {
    id: "292",
    name: "Dirty Needle",
    image: `${cardArtFolder}/Reflex/DirtyNeedle.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent declares an attack",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attacking Champion's passives and effects are negated until the end of the turn.`
      }
    ]
  },
  {
    id: "293",
    name: "Backroom Brain Swap",
    image: `${cardArtFolder}/Reflex/BackroomBrainSwap.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "",
    cost: "Target 2 Champions on the Zone controlled by different Players",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Switch control of Targets until the End Phase, and if you do, both Targets become Exhausted.`
      }
    ]
  },
  {
    id: "294",
    name: "Catastrophic Liposuction Reversal",
    image: `${cardArtFolder}/Reflex/CatastrophicLiposuctionReversal.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent controls more Champions than you",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy all Champions your Opponent controls with 8 or more Life.`
      }
    ]
  },
  {
    id: "295",
    name: "Overprescribed Stimulants",
    image: `${cardArtFolder}/Reflex/OverprescribedStimulants.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "",
    cost: "Target 1 face-up Champion you control",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Target can attack an additional time this turn. Target cannot attack or block until the end of your next turn.`
      }
    ]
  },
  {
    id: "296",
    name: "Fresh Supplies",
    image: `${cardArtFolder}/Reflex/FreshSupplies.png`,
    rarity: "Superior",
    type: "Reflex",
    condition: "",
    cost: "Oblierate X Rush and X Reflex cards from your Tomb",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Draw X.`
      }
    ]
  },
  {
    id: "297",
    name: "Temporal Anasthesia",
    image: `${cardArtFolder}/Reflex/TemporalAnasthesia.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "Your Opponent would activate a card or effect in their Arsenal",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the activation, and if you do, set the triggering card face-down in their Arsenal. It cannot be flipped face-up until the end of this turn.`
      }
    ]
  },
  {
    id: "298",
    name: "Grading Curve Dropoff",
    image: `${cardArtFolder}/Reflex/Grading Curve Dropoff.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "",
    cost: "Your Opponent draws 2",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Look at your Opponent's Hand and choose 1 card from it to shuffle back into their Deck.`
      }
    ]
  },
  {
    id: "299",
    name: "Fake Medicine",
    image: `${cardArtFolder}/Reflex/FakeMedicine.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "Your Opponent gains Life",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Deal twice that in Damage back to your Opponent.`
      }
    ]
  },
  {
    id: "300",
    name: "Caught Sleeping Again",
    image: `${cardArtFolder}/Reflex/CaughtSleepingAgain.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "",
    cost: "Target 1 face-down Champion your Opponent controls",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Flip Target face-up (negate its Flip effects).`
      }
    ]
  },
  {
    id: "301",
    name: "Kaido, Darkblade",
    image: `${cardArtFolder}/Champions/KaidoDarkblade.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1 face-down Champion you control",
    tags: ["Nightveil","Blademaster","Ninja"],
    damage: 7,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority, Solitary <span class="line-gap"></span> Deadly Strike (Flip): Target 1 card on the Zone; Destroy Target. <span class="line-gap"></span> Smoke Bomb (Reflex): Flip this card face-down. <span class="line-gap"></span> Slumber No More: If this card is in your Tomb: Discard 1 Champion with a Flip effect; Retrieve this card.`
      }
    ]
  },
  {
    id: "302",
    name: "Yume, Lightblade",
    image: `${cardArtFolder}/Champions/YumeLightblade.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Obliterate 1 Champion with a Flip effect from either Tomb",
    tags: ["Nightveil","Blademaster","Ninja"],
    damage: 5,
    life: 6,
    damageThreshold: "4",
    abilities: [
      {
        text: `Lifetouch, Priority <span class="line-gap"></span> Lifeburst: If a Champion increases to 10 or more Life by the effect of this card's passive: Destroy it. <span class="line-gap"></span> Flash Bang (Reflex): Move this card to your Reserve. <span class="line-gap"></span> Return to Base: If this card is in your Reserve: Obliterate 1 Champion with a Flip effect from either your Hand or face-up Zone; Bounce this card.`
      }
    ]
  },
  {
    id: "303",
    name: "Stealth Infiltration",
    image: `${cardArtFolder}/Actions/StealthInfiltration.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Rally 1 Basic Champion from your Hand face-down.`
      }
    ]
  },
  {
    id: "304",
    name: "Green Ninja",
    image: `${cardArtFolder}/Champions/GreenNinja.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward, Invisible <span class="line-gap"></span> From The Bushes (Flip): Target 1 card in either Player's Arsenal; Destroy Target. <span class="line-gap"></span> Smoke Bomb: Flip this card face-down.`
      }
    ]
  },
  {
    id: "305",
    name: "Blue Ninja",
    image: `${cardArtFolder}/Champions/BlueNinja.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward, Warded <span class="line-gap"></span> From The Docks (Flip): Target 1 face-down Champion; Destroy Target. <span class="line-gap"></span> Smoke Bomb: Flip this card face-down.`
      }
    ]
  },
  {
    id: "306",
    name: "Red Ninja",
    image: `${cardArtFolder}/Champions/RedNinja.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward, Unstoppable <span class="line-gap"></span> From The Rooftop (Flip): Target 1 face-up card on the Zone; Destroy Target. <span class="line-gap"></span> Smoke Bomb: Flip this card face-down.`
      }
    ]
  },
  {
    id: "307",
    name: "Naptime!",
    image: `${cardArtFolder}/Obelisks/Naptime.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Champions that declare attacks are flipped face-down after Damage Calculation.`
      }
    ]
  },
  {
    id: "308",
    name: "Six-Season Coma",
    image: `${cardArtFolder}/Obelisks/SixSeasonComa.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "Flip 2 face-up Champions you control face-down",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Face-down Champions cannot be flipped face-up or used to block.`
      }
    ]
  },
  {
    id: "309",
    name: "Earthquake!",
    image: `${cardArtFolder}/Actions/Earthquake.png`,
    rarity: "Rare",
    type: "Action",
    condition: "You control at least 2 face-down Champions",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Flip all face-down Champions face-up, and if you do, deal 3 Damage to each Champion flipped face-up by this effect.`
      }
    ]
  },
  {
    id: "310",
    name: "Mall Ninja",
    image: `${cardArtFolder}/Champions/MallNinja.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja","Citizen"],
    damage: 0,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Repair Specialist <span class="line-gap"></span> Kiosk Katana: Once while face-up on the Zone: Deal 1 Damage to your Opponent.`
      }
    ]
  },
  {
    id: "311",
    name: "Super-Cool Nunchucks",
    image: `${cardArtFolder}/Equipments/SuperCoolNunchucks.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the attached Champion's Damage by 2. <span class="line-gap"></span> After resolving a battle involving the attached Champion: You take 2 Damage.`
      }
    ]
  },
  {
    id: "312",
    name: "Salaryman Ninja",
    image: `${cardArtFolder}/Champions/SalarymanNinja.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja","Citizen"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Slashing Wages (Flip): Both Players Discard their Hands and Draw 5.`
      }
    ]
  },
  {
    id: "313",
    name: "Ninja's Shadow",
    image: `${cardArtFolder}/Champions/NinjaShadow.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Oldblood","Ninja"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Take My Hand!: If Sent to Tomb or Void: Retrieve 1 Champion with a Flip effect.`
      }
    ]
  },
  {
    id: "314",
    name: "Cutpurse Ninja",
    image: `${cardArtFolder}/Champions/CutpurseNinja.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja","Outlaw"],
    damage: 3,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Won't Miss This (Flip): Mill 10 from your Opponent's Deck.`
      }
    ]
  },
  {
    id: "315",
    name: "Nesting Ninja Dolls",
    image: `${cardArtFolder}/Champions/NestingNinjaDolls.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja"],
    damage: 0,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `The Ninja Inside Us All (Flip): Recruit 1 Basic Ninja face-down.`
      }
    ]
  },
  {
    id: "316",
    name: "Nurse Ninja",
    image: `${cardArtFolder}/Champions/NurseNinja.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja","Lifebinder"],
    damage: 0,
    life: 2,
    damageThreshold: "3",
    abilities: [
      {
        text: `Back Into The Fight (Flip): Target 1 Basic Ninja in your Tomb; Resurrect Target face-down.`
      }
    ]
  },
  {
    id: "317",
    name: "DJ Ninja",
    image: `${cardArtFolder}/Champions/DJNinja.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Crescendo","Ninja"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `In Da House! (Flip): Increase the Damage of all Ninjas you control by 2 while this card remains face-up on the Zone.`
      }
    ]
  },
  {
    id: "318",
    name: "Ninja Blender",
    image: `${cardArtFolder}/Champions/NinjaBlender.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja","Blademaster"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Caution! Sharp Blades! (Flip): Deal 2 Damage to your Opponent.`
      }
    ]
  },
  {
    id: "319",
    name: "Magicianinja",
    image: `${cardArtFolder}/Champions/Magicianinja.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Nightveil","Ninja","Mage"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `From a Hat (Flip): Target 1 non-Champion in your Tomb; Retrieve Target.`
      }
    ]
  },
  {
    id: "361",
    name: "Silveredge, Envoy of the Moon",
    image: `${cardArtFolder}/Champions/Silveredge.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "Reflex: This card is in your Hand, Reserve, or Tomb and a Champion you control is Destroyed",
    cost: "Your Opponent Gains 4 Life",
    tags: ["Valiant","Protector","Centurion","Hero"],
    damage: 2,
    life: 8,
    damageThreshold: "2",
    abilities: [
      {
        text: `Defender <span class="line-gap"></span> Moonlight Barrier: The first time each turn a card(s) on your Zone would be Destroyed (Mandatory, Reflex): Offer 4 Life from this card; They are not Destroyed. <span class="line-gap"></span> Cosmic Crashdown: On Resurrection (Exhaustion): Deal 2 Damage to all face-up Champions your Opponent controls.`
      }
    ]
  },
  {
    id: "362",
    name: "Solar, Envoy of the Sun",
    image: `${cardArtFolder}/Champions/Solar.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "Reflex: An attack is declared against you",
    cost: "All face-up Champions you control (minimum of 1) take 2 Damage",
    tags: ["Valiant","Protector","Centurion","Hero"],
    damage: 8,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Defender, Duelist, Priority <span class="line-gap"></span> Fight's Not Over Yet: On Rally (Exhaustion): Retrieve 1 Hero. <span class="line-gap"></span> Sunlight Blast: If a card on the Zone is Targeted by an Opponent's card effect (Mandatory, Reflex): Target 1 face-up Champion on the Zone; Destroy Target. <span class="line-gap"></span> Solar Blitz (Exhaustion): Deal 2 Damage to all face-up Champions your Opponent controls.`
      }
    ]
  },
  {
    id: "363",
    name: "Dawnbreak, of the Sun and Moon",
    image: `${cardArtFolder}/Champions/DawnbreakOfTheSunAndMoon.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "You have at least 2 Champions in your Tomb",
    cost: "Discard 1",
    tags: ["Valiant","Protector","Hero"],
    damage: 3,
    life: 5,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Naive, Necrocharge, Priority <span class="line-gap"></span> Next Generation Inspiration: On Rally (Exhaustion): Add 1 Hero. <span class="line-gap"></span> Sunshine Sparkles: Once while face-up on the Zone, if an attack is declared (Reflex): Negate that attack.`
      }
    ]
  },
  {
    id: "364",
    name: "Team Up Move",
    image: `${cardArtFolder}/Rush/TeamUpMove.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "You control 3 or more Champions with a shared Tag",
    cost: "Declare the shared Tag and Target 1 Champion you control with that Tag",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Target is the only Champion you can attack with this turn. Also, increase Target's Damage to be the sum of all Champions you control with the shared Tag.`
      }
    ]
  },
  {
    id: "365",
    name: "Mastermind, Envoy of Ingenuity",
    image: `${cardArtFolder}/Champions/Mastermind.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "Reflex: A Champion effect is activated",
    cost: "Discard 2",
    tags: ["Valiant","Protector","Centurion","Hero"],
    damage: 2,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Forged, Taskmaster <span class="line-gap"></span> Two Steps Ahead: On Rally: Excavate 2, add 1 revealed and obliterate the other. <span class="line-gap"></span> Rapid Creation: If this card is Targeted (Reflex): Excavate 5, activate 1 revealed Equipment or Obelisk (ignoring its cost). <span class="line-gap"></span> Toys for Everyone! (Exhaustion): Attach 1 Equipment to another Champion you control from your Hand or Deck (ignoring its cost).`
      }
    ]
  },
  {
    id: "366",
    name: "Stand of the Centurions",
    image: `${cardArtFolder}/Actions/Centurions.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Add 1 Centurion. <span class="line-gap"></span> If you have no Centurions in your Deck: Add 1 Basic. <span class="line-gap"></span> If this card is in your Tomb: Obliterate this card and Discard 1 Centurion; Rally 1 Centurion from your Hand (ignoring its cost and conditions).`
      }
    ]
  },
  {
    id: "367",
    name: "Gaia, Envoy of Plantlife",
    image: `${cardArtFolder}/Champions/Gaia.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "Reflex: A card in your Arsenal is Destroyed",
    cost: "Offer 4 Life",
    tags: ["Valiant","Protector","Centurion","Hero"],
    damage: 2,
    life: 6,
    damageThreshold: "3",
    abilities: [
      {
        text: `Lifesteal, Menace <span class="line-gap"></span> It Worked Once: On Rally: Retrieve 1 Action or Rush. <span class="line-gap"></span> Ensnaring Strike: Target 1 Champion on the Zone; Target cannot declare attacks or block until the end of your next turn.`
      }
    ]
  },
  {
    id: "368",
    name: "Hunter, Envoy of Wildlife",
    image: `${cardArtFolder}/Champions/Hunter.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "Reflex: This card is in your Hand or Tomb and a card is retrieved or resurrected",
    cost: "Sacrifice 1",
    tags: ["Valiant","Protector","Centurion","Hero"],
    damage: 2,
    life: 11,
    damageThreshold: "2",
    abilities: [
      {
        text: `Bloodrage, Duelist, Priority <span class="line-gap"></span> Predator's Pounce: On Rally (Exhaustion): Target 1 face-up Champion on the Zone; Deal 3 Damage to Target. <span class="line-gap"></span> Weakening Strike: Champions Damaged by this card in battle can no longer block.`
      }
    ]
  },
  {
    id: "369",
    name: "Tempest, Envoy of Storms",
    image: `${cardArtFolder}/Champions/Tempest.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "Reflex: A Champion or Player takes Damage from an effect",
    cost: "Obliterate Mill 10",
    tags: ["Valiant","Protector","Centurion","Hero"],
    damage: 6,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority, Taunt <span class="line-gap"></span> Obscuring Mists: On Rally (Exhaustion): Target 1 face-up Champion you control; Target gains Invisible until the start of your next turn. <span class="line-gap"></span> Thunderstruck (Exhaustion): Target 1 face-up Champion on the Zone; Destroy Target.`
      }
    ]
  },
  {
    id: "370",
    name: "Riptide, Envoy of the Sea",
    image: `${cardArtFolder}/Champions/Riptide.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "Reflex: An attack is declared",
    cost: "Obliterate 2 cards of different types from your Tomb",
    tags: ["Valiant","Protector","Centurion","Hero"],
    damage: 3,
    life: 6,
    damageThreshold: "2",
    abilities: [
      {
        text: `Defender, Duelist, Priority <span class="line-gap"></span> Wavecrash: On Rally (Exhaustion): Target 1 face-up Champion on the Zone; Flip Target face-down. <span class="line-gap"></span> Aqua Armor: Decrease the Damage this card takes by its Damage Threshold.`
      }
    ]
  },
  {
    id: "371",
    name: "Apex, Superhuman Copycat",
    image: `${cardArtFolder}/Champions/ApexSuperhumanCopycat.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Valiant","Protector","Hero"],
    damage: 1,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Duelist, Priority <span class="line-gap"></span> Copycat (Reflex): Target 1 face-up Champion on the Zone; Until that Champion leaves the Zone, or this ability is used again, this card's Damage, Life, and Damage Threshold become equal to the Target's at the time of activation. <span class="line-gap"></span> That's Life: If this card leaves the Zone: Recruit 1 "Apex" Champion.`
      }
    ]
  },
  {
    id: "372",
    name: "Apex, Herald of Madrog",
    image: `${cardArtFolder}/Champions/ApexHeraldOfMadrog.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 2",
    tags: ["Valiant","Betrayer","Villain"],
    damage: 3,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Parasitic Drain (Reflex): Target 1 face-up Champion on the Zone; Until that Champion leaves the Zone, or this ability is used again, this card's passives and effects become those of the Target's at the time of activation. <span class="line-gap"></span> That's Life: If this card leaves the Zone: Recruit 1 "Apex" Champion.`
      }
    ]
  },
  {
    id: "373",
    name: "Apex, Fallen Hero",
    image: `${cardArtFolder}/Champions/ApexFallenHero.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Valiant","Outlaw","Villain"],
    damage: 1,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Soul Eater (Reflex): Target 1 face-up Champion you control; Destroy Target, and if you do, this card's Damage, Life, and Damage Threshold become equal to the Target's at the time of activation, also it gains the Target's passives and effects until the end of the next turn. <span class="line-gap"></span> That's Life: If this card leaves the Zone: Recruit 1 "Apex" Champion.`
      }
    ]
  },
  {
    id: "374",
    name: "Summoning Spotlight",
    image: `${cardArtFolder}/Reflex/SummoningSpotlight.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "A Champion you control is Destroyed by battle",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit 1 from your Deck with a matching Tag to, and equal or less Damage than, the Destroyed Champion in the Tomb.`
      }
    ]
  },
  {
    id: "375",
    name: "Veilwalker, Fallen And Returned",
    image: `${cardArtFolder}/Champions/Veilwalker.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Valiant","Undead","Hero"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathtouch <span class="line-gap"></span> Tentative Connection: If this card battles: Destroy this card after Damage Calculation. <span class="line-gap"></span> Severed Connection: If Sent to Tomb: Obliterate this card. <span class="line-gap"></span> Reaching Out: If Sent to Void: Target 1 other card in your Void; Reclaim Target.`
      }
    ]
  },
  {
    id: "376",
    name: "Lady Dawn, the Platinum Maiden",
    image: `${cardArtFolder}/Champions/LadyDawn.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Valiant","Dealt","Trickster","Specialist"],
    damage: 1,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Fortified, Twitchy <span class="line-gap"></span> Immortality: During each End Phase: This card gains 1 Life. <span class="line-gap"></span> Killed? Walk it Off: If Destroyed: Offer 3 Life; Resurrect this card.`
      }
    ]
  },
  {
    id: "377",
    name: "Magma Mauler",
    image: `${cardArtFolder}/Champions/MagmaBurst.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Valiant","Hellfire","Outlaw","Villain"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Big Inflate Charge: Obliterate Mill 60; Increase this card's Damage by 20 until the End Phase.`
      }
    ]
  },
  {
    id: "378",
    name: "Heroic Emergence",
    image: `${cardArtFolder}/Actions/HeroicFusion.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Obliterate 2 Champions with a Damage of 2 or Higher from your Tomb",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit 1 Hero. <span class="line-gap"></span> If you have no Heroes in your Deck: Recruit 1 Basic with a Life higher than its Damage.`
      }
    ]
  },
  {
    id: "379",
    name: "Beaten Not Broken",
    image: `${cardArtFolder}/Reflex/BeatenNotBroken.png`,
    rarity: "Superior",
    type: "Reflex",
    condition: "A Champion you control is Damaged by battle, but not Destroyed",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the Damaged Champion's Damage, Life, and Damage Threshold by 2.`
      }
    ]
  },
  {
    id: "380",
    name: "Good Gone Bad",
    image: `${cardArtFolder}/Equipments/GoodGoneBad.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "",
    cost: "Obliterate all other Champions you control (minimum of 1), apart from the attached Champion",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `On Activation: Deal 1 Damage to all face-up Champions your Opponent controls. <span class="line-gap"></span> If attached to a Hero or Villain: The attached Champion loses Duelist, and if they do, increase their Damage by 1. If they are the only Hero or Villain that you control: Increase their Damage by 2.`
      }
    ]
  },
  {
    id: "381",
    name: "Reboot",
    image: `${cardArtFolder}/Reflex/Reboot.png`,
    rarity: "Legendary",
    type: "Reflex",
    condition: "",
    cost: "Obliterate your Tomb and Spin your Hand, Zone, and Reserve (minimum of 1 card from each)",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Draw 3.`
      }
    ]
  },
  {
    id: "382",
    name: "Canon Event",
    image: `${cardArtFolder}/Rush/CanonEvent.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "Sacrifice 1",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Deal 2 Damage to your Opponent.`
      }
    ]
  },
  {
    id: "383",
    name: "Orbital TKO",
    image: `${cardArtFolder}/Rush/OrbitalTKO.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Send 1 face-up Hero, Villain, or Champion with 5 or more Damage, you control to the Tomb and Target 1 face-up Champion on the Zone",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy Target, and if you do, Obliterate it.`
      }
    ]
  },
  {
    id: "384",
    name: "Shipping",
    image: `${cardArtFolder}/Actions/Shipping.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Target 1 face-up Champion you control and 1 your Opponent controls",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `While both Targets remain face-up on the Zone: Increase their Damages by 2.`
      }
    ]
  },
  {
    id: "385",
    name: "Splash Page",
    image: `${cardArtFolder}/Actions/SplashPage.png`,
    rarity: "Rare",
    type: "Action",
    condition: "Can only be activated during your Main Phase 1",
    cost: "Target 1 face-up Champion on the Zone",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Deal Damage to Target equal to the total Damage of all face-up Heroes you control, and if you do, it becomes your End Phase. <span class="line-gap"></span> If you control no Heroes: Deal Damage to Target equal to the Damage of 1 face-up Champion you control, and if you do, it becomes your End Phase.`
      }
    ]
  },
  {
    id: "386",
    name: "External Monologue",
    image: `${cardArtFolder}/Actions/ExternalMonologue.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Declare the name of the top card of your Deck",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Excavate 1, and if the name you declared matches the name of the revealed card: Add or Activate (ignoring its cost) the revealed card. Otherwise, Obliterate the revealed card.`
      }
    ]
  },
  {
    id: "387",
    name: "Onomatopoeia",
    image: `${cardArtFolder}/Actions/Onomatopoeia.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Each time a Champion you control is Destroyed by Battle: Place 1 Kablam Counter on this card. <span class="line-gap"></span> Remove 4 Kablam Counters from this card and Target 1 face-up Champion you control; Increase Target's Damage by 2.`
      }
    ]
  },
  {
    id: "388",
    name: "Surrogate Butler",
    image: `${cardArtFolder}/Champions/SurrogateButler.png`,
    rarity: "Common",
    type: "Champion",
    condition: "Reflex: A Champion you control is Destroyed",
    cost: "",
    tags: ["Valiant","Citizen"],
    damage: 0,
    life: 1,
    damageThreshold: "3",
    abilities: [
      {
        text: `Deathward, Taunt`
      }
    ]
  },
  {
    id: "389",
    name: "Orphan's Parents",
    image: `${cardArtFolder}/Champions/OrphansParents.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Valiant","Citizen"],
    damage: 0,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Encouraging Words: Increase the Damage and Damage Thresholds of all Heroes you control by 1. <span class="line-gap"></span> Inevitable End: If Destroyed: Move 1 Hero from your Deck to your Reserve.`
      }
    ]
  },
  {
    id: "421",
    name: "Gimme That!",
    image: `${cardArtFolder}/Actions/GimmeThat.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Add the top card of your Opponent's Deck to your Hand. <span class="line-gap"></span> If you activate it, you can do so without paying its cost.`
      }
    ]
  },
  {
    id: "422",
    name: "Full House, Looks Like I Win",
    image: `${cardArtFolder}/Actions/FullHouseLooksLikeIWin.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Reveal your entire Hand",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Depending on the number of unique card types revealed, you gain the following effects: <span class="line-gap"></span> 1 • Draw 1. <span class="line-gap"></span> 2 • Retrieve 1 non-Champion. <span class="line-gap"></span> 3 • Look at your Opponent's Hand. <span class="line-gap"></span> 4 • Destroy up to 2 cards from your Opponent's Arsenal. <span class="line-gap"></span> 5 • Take control of 1 of your Opponent's Champions. </span><span class="line-gap"></span> 6 • Skip your Opponent's next turn.`
      }
    ]
  },
  {
    id: "423",
    name: "Lucky Spin",
    image: `${cardArtFolder}/Actions/LuckySpin.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `During your Intermission Phase (Mandatory): Roll a six-sided die, and apply the following effect: <span class="line-gap"></span> 1 • Discard 1. <span class="line-gap"></span> 2 • Draw 1. <span class="line-gap"></span> 3 • Double the Damage of 1 Champion you control until the end of this turn. <span class="line-gap"></span> 4 • Obliterate Mill 5. <span class="line-gap"></span> 5 • Set 1 non-Champion from your Tomb face-down into your Arsenal. <span class="line-gap"></span> 6 • Change control of this card to your Opponent.`
      }
    ]
  },
  {
    id: "424",
    name: "Desperate Gambler",
    image: `${cardArtFolder}/Champions/DesperateGambler.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Dealt","Citizen"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Buy-In: On Rally (Mandatory): Flip a coin until you get Tails. Discard cards equal to the number of Heads flipped, then increase this card's Damage by 2 for each card you discarded. <span class="line-gap"></span> Just One More Spin: If this card is sent from the Zone to the Tomb: Flip a coin and call the result. If you guessed correctly: Obliterate Mill 15, and if you do, Resurrect this card.`
      }
    ]
  },
  {
    id: "425",
    name: "Rock",
    image: `${cardArtFolder}/Champions/Rock.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Dealt","Construct"],
    damage: 0,
    life: 1,
    damageThreshold: "8",
    abilities: [
      {
        text: `It's a Really Big Rock: While you control this Champion: The number of Champions you control cannot be increased, only decreased.`
      }
    ]
  },
  {
    id: "426",
    name: "Paper",
    image: `${cardArtFolder}/Equipments/Paper.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Contained, and their Damage Threshold is reduced to 1.`
      }
    ]
  },
  {
    id: "427",
    name: "Scissors",
    image: `${cardArtFolder}/Actions/Scissors.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Target 1 face-up Equipment on the Zone",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy Target.`
      }
    ]
  },
  {
    id: "428",
    name: "King of the Highway",
    image: `${cardArtFolder}/Obelisks/KingOfTheHighway.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Only an Opponent's existing Commander can be designated as this card's Commander. <span class="line-gap"></span> Mount <span class="line-gap"></span> Upon Being Mounted: Send the existing Commander Obelisk controlled by your Opponent to the Tomb, and if you do, transfer control of this card to your Opponent. <span class="line-gap"></span> Mounted: This card's Commander gains Menace.`
      }
    ]
  },
  {
    id: "429",
    name: "Get This Man a Cigarette",
    image: `${cardArtFolder}/Equipments/GetThisManACigarette.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Second Strike. <span class="line-gap"></span> During the End Phase of the attached Champion's controller (Mandatory): Offer 2 Life from the attached Champion.`
      }
    ]
  },
  {
    id: "430",
    name: "And They're Off!",
    image: `${cardArtFolder}/Rush/AndTheyreOff.png`,
    rarity: "Superior",
    type: "Rush",
    condition: "",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Each Player chooses 1 Champion they control and then rolls a die, then the Player who rolled lower sends their Champion to the Tomb.`
      }
    ]
  },
  {
    id: "431",
    name: "Wife Swap",
    image: `${cardArtFolder}/Actions/WifeSwap.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Each Player chooses 1 Champion they control and switches control of those Champions with each other.`
      }
    ]
  },
  {
    id: "432",
    name: "Bet of a Lifetime",
    image: `${cardArtFolder}/Actions/BetOfALifetime.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Declare an amount of Life (Up to your current Life), then your Opponent declares if they are Matching or Declining",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If your Opponent Declines: Draw 2. <span class="line-gap"></span> If your Opponent Matches: Then both Players mill cards until they mill a Champion. Whichever Player's Champion has the lower Damage in the Tomb loses the amount of Life declared. Whichever Player's Champion has the higher Damage in the Tomb gains the amount of Life declared.`
      }
    ]
  },
  {
    id: "433",
    name: "The House",
    image: `${cardArtFolder}/Champions/TheHouse.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Dealt","Construct"],
    damage: 0,
    life: 1,
    damageThreshold: "4",
    abilities: [
      {
        text: `The House Always Wins: If a die would be rolled or a coin would be flipped (Reflex): You choose the result instead. This effect can be declared, activated, and resolved mid-Path.`
      }
    ]
  },
  {
    id: "434",
    name: "Stack the Deck",
    image: `${cardArtFolder}/Actions/StackTheDeck.png`,
    rarity: "Legendary",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Stack 1 card from your Deck. <span class="line-gap"></span> After you conduct your normal draw during your next Draw Phase: Obliterate Mill all but 1 card.`
      }
    ]
  },
  {
    id: "435",
    name: "Shop Till You Drop",
    image: `${cardArtFolder}/Obelisks/ShopTillYouDrop.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Either Player can, at the start of their Main Phase 1: Move directly to their End Phase; Draw 2.`
      }
    ]
  },
  {
    id: "436",
    name: "Stand and Salute",
    image: `${cardArtFolder}/Actions/StandAndSalute.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Flip all face-down Champions face-up, and if you do, deal 1 Damage to each Champion flipped face-up by this effect.`
      }
    ]
  },
  {
    id: "437",
    name: "Turk, Used Car Salesman",
    image: `${cardArtFolder}/Champions/TurkCarSalesman.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Dealt","Citizen"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Let's Make a Deal: Give control of 1 of your face-up Obelisks to your Opponent; Then, your Opponent chooses whether you: Draw 2, or Add the top 2 cards of your Opponent's Deck to your Hand.`
      }
    ]
  },
  {
    id: "438",
    name: "Cash, Now!",
    image: `${cardArtFolder}/Obelisks/CashNow.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `On Activation: Draw 2. <span class="line-gap"></span> While this card remains face-up on the Zone: You can no longer Draw or Add cards.`
      }
    ]
  },
  {
    id: "439",
    name: "Buy One, Get One",
    image: `${cardArtFolder}/Obelisks/BuyOneGetOne.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Cards you Sacrifice count twice towards the total number.`
      }
    ]
  },
  {
    id: "440",
    name: "My Company, My Money",
    image: `${cardArtFolder}/Obelisks/MyCompanyMyMoney.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Draw 1, and if you do, during the End Phase of this turn you must Discard 1, or if you are unable to, send every card from your Zone and Reserve to the Tomb.`
      }
    ]
  },
  {
    id: "441",
    name: "Pocket Change!",
    image: `${cardArtFolder}/Reflex/PocketChange.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "Your Opponent enters their Battle Phase",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `It becomes your Opponent's Main Phase 2, and if it does, increase the Damage of all face-up Champions your Opponent controls by 1.`
      }
    ]
  },
  {
    id: "442",
    name: "Hit On 20",
    image: `${cardArtFolder}/Actions/HitOn20.png`,
    rarity: "Common",
    type: "Action",
    condition: "Your Opponent has 1 Life",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Excavate 1. <span class="line-gap"></span> If the revealed card is a Champion with 1 or more Damage: Deal 1 Damage to your Opponent. Otherwise, Destroy all Champions you control.`
      }
    ]
  },
  {
    id: "443",
    name: "Aces Up My Sleeve",
    image: `${cardArtFolder}/Reflex/AcesUpMySleeve.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Activate 1 Action from your Hand.`
      }
    ]
  },
  {
    id: "444",
    name: "Jackpot Jones",
    image: `${cardArtFolder}/Champions/JackpotJones.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Discard X (minimum of 1)",
    tags: ["Dealt","Citizen"],
    damage: 2,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Double Down: On Rally: Discard the same number of cards used to pay this card's Rally cost; Flip a coin and call the result, if you call the result correctly, draw twice the number of cards discarded for this effect's cost. <span class="line-gap"></span> Triple Down: Discard X; Increase this card's Damage by 2 per card discarded until the end of this turn.`
      }
    ]
  },
  {
    id: "481",
    name: "Honeda, Silver-Suited Samurai",
    image: `${cardArtFolder}/Champions/HonedaSilverSuitedSamurai.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Rally 1 Bamboo Token to your Opponent's Zone",
    tags: ["Honed","Protector","Blademaster","Samurai"],
    damage: 5,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Duelist, Forged, Priority <span class="line-gap"></span> Like Cutting Bamboo: If this Champion Destroys another by Battle: Deal 3 Damage to your Opponent.`
      }
    ]
  },
  {
    id: "482",
    name: "Achoo!",
    image: `${cardArtFolder}/Reflex/Achoo.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Bounce all other cards you control, and if you do, you must offer 1 Life for each card bounced this way.`
      }
    ]
  },
  {
    id: "541",
    name: "Xina, Forest Guardian",
    image: `${cardArtFolder}/Champions/XinaForestGuardian.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "Your Opponent controls more Champions than you",
    cost: "Basic",
    tags: ["Gallant","Protector","Blademaster","Ranger"],
    damage: 4,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Ancestral Armory: If this card has at least 1 attached Equipment: This card gains Priority.`
      }
    ]
  },
  {
    id: "601",
    name: "Laira, Meadow Frolicker",
    image: `${cardArtFolder}/Champions/LairaMeadowFrolicker.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Verdant","Druid","Mage"],
    damage: 0,
    life: 5,
    damageThreshold: "2",
    abilities: [
      {
        text: `Oooh Pretty!: Reveal your Hand; Your Opponent then reveals their Hand, and if they do, both Players select 1 card in their Opponent's Hand to take for themselves.`
      }
    ]
  },
  {
    id: "602",
    name: "Fear Not",
    image: `${cardArtFolder}/Rush/FearNot.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "A card(s) you control is Targeted",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Move the Targeted card(s) to your Reserve. <span class="line-gap"></span> Then, if you control a face-up Protector: Draw 1 for each card moved.`
      }
    ]
  },
  {
    id: "661",
    name: "Carly, Brightest Burnout",
    image: `${cardArtFolder}/Champions/CarlyBrightestBurnout.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Rally 1 Grenade Token to your Zone",
    tags: ["Chrome","Inventor","Specialist"],
    damage: 5,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Repair Specialist, Solitary <span class="line-gap"></span> Meet My Friend: On Rally: Activate 1 Commander Obelisk from your Hand, Deck, or Reserve (ignoring its cost). <span class="line-gap"></span> Mine Now: Target 1 Equipment in either Tomb; Activate Target (ignoring its cost) and attach it to this card. <span class="line-gap"></span> Let's Bounce: If this card is Targeted (Reflex): Destroy 1 card in your Arsenal; Bounce this card.`
      }
    ]
  },
  {
    id: "662",
    name: "Cyber Angel, Silicon Soul",
    image: `${cardArtFolder}/Champions/CyberAngelSiliconSoul.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Chrome", "Mechanic", "Specialist","Outlaw"],
    damage: 3,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Repair Specialist <span class="line-gap"></span> Rev It Up: On Rally: Activate 1 Obelisk from your Reserve (ignoring its cost).`
      }
    ]
  },
  {
    id: "663",
    name: "Vulture Bot",
    image: `${cardArtFolder}/Champions/VultureBot.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Discard 1",
    tags: ["Chrome","Construct"],
    damage: 2,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Pick It Clean: On Rally: Target 1 Construct with 1 or less Damage in your Tomb; Resurrect Target, but negate its effects. <span class="line-gap"></span> Combination Transformation: Sacrifice this card and 1 other Construct you control; Activate 1 Commander Obelisk from your Hand, Deck, Reserve, or Tomb (ignoring its cost).`
      }
    ]
  },
  {
    id: "664",
    name: "Pinchy",
    image: `${cardArtFolder}/Champions/Pinchy.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Chrome","Construct"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Pinchy Jr: If Sent from the Zone to the Tomb (Mandatory): Rally 1 Scrap Token to your Zone.`
      }
    ]
  },
  {
    id: "665",
    name: "Harlan, Dead on Arrival",
    image: `${cardArtFolder}/Champions/HarlanDOA.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Obliterate Mill 2",
    tags: ["Chrome","Outlaw","Construct"],
    damage: 7,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Maintenance, Priority <span class="line-gap"></span> High-Octane Heart: On Rally (Mandatory): Target 1 Commander Obelisk in your Tomb; Activate Target (ignoring its cost) and declare this card as its Commander. If you are unable to Target, or Activate, a card, then Destroy this card. <span class="line-gap"></span> Critical Malfunction: If This card is not a Commander (Mandatory): Destroy this card.`
      }
    ]
  },
  {
    id: "666",
    name: "Spitfire, Hellbent Assassin",
    image: `${cardArtFolder}/Champions/SpitfireHellbentAssassin.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Discard 2",
    tags: ["Chrome","Outlaw","Marksman","Specialist"],
    damage: 6,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Board Breaker, Deathward, Duelist, Priority`
      }
    ]
  },
  {
    id: "667",
    name: "Sidecar",
    image: `${cardArtFolder}/Equipments/Sidecar.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk can now have up to 2 Commanders at a time. <span class="line-gap"></span> Only 1 of the attached Obelisk's Commanders can declare an attack during each Battle Phase. <span class="line-gap"></span> When a Commander of the attached Obelisk leaves the Zone: Destroy this card.`
      }
    ]
  },
  {
    id: "668",
    name: "Cybernetic Revolution",
    image: `${cardArtFolder}/Reflex/CyberneticRevolution.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "",
    cost: "Target 1 face-up Champion on the Zone",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Activate 1 Equipment from your Hand (ignoring its cost), and if you do, attach it to the Target. You cannot Target a face-up Champion with this card that you cannot attach an Equipment from your Hand to. <span class="line-gap"></span> If the attached Champion or Equipment leaves the Zone: Obliterate the other.`
      }
    ]
  },
  {
    id: "669",
    name: "I Have No Idea What's Going On...",
    image: `${cardArtFolder}/Reflex/NoIdeaWhatsHappening.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "Must be Path Step 4 or greater",
    cost: "Discard 1",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Negate all effects resolving after this card on the current Path.`
      }
    ]
  },
  {
    id: "670",
    name: "Multiversal Tiring Cliche",
    image: `${cardArtFolder}/Reflex/MultiversalTiringCliche.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "A card would be reclaimed, resurrected, retrieved, or unleashed",
    cost: "Send 3 cards from your Reserve to the Tomb",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the triggering effect.`
      }
    ]
  },
  {
    id: "671",
    name: "Multiversal Lens",
    image: `${cardArtFolder}/Actions/MultiversalLens.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Excavate 3. Obliterate your choice of the revealed cards, and return any remaining in the same order they were in.`
      }
    ]
  },
  {
    id: "672",
    name: "Multiversal Life Path",
    image: `${cardArtFolder}/Rush/MultiversalLifePath.png`,
    rarity: "Superior",
    type: "Rush",
    condition: "",
    cost: "Obliterate 1 face-up Champion you control",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit 1 with the same combined total of Damage and Life it had on the Zone.`
      }
    ]
  },
  {
    id: "673",
    name: "Archibald, Megacorp Boss",
    image: `${cardArtFolder}/Champions/ArchibaldMegacorpBoss.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 3 with 3 or more Life, including (optionally) 1 your Opponent controls",
    tags: ["Chrome","Royal","Citizen"],
    damage: 3,
    life: 6,
    damageThreshold: "2",
    abilities: [
      {
        text: `Greedy, Reach <span class="line-gap"></span> Revoked License: This card cannot be a Commander. <span class="line-gap"></span> Midlife Crisis: Discard 2; Move 1 Commander Obelisk from your Deck to your Reserve, and if you do, you can attach to it 1 Equipment from your Deck.`
      }
    ]
  },
  {
    id: "674",
    name: "Sergeant Garrett, Cybercop",
    image: `${cardArtFolder}/Champions/SergeantGarrettCybercop.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Send 2 Equipments from your Reserve to your Tomb",
    tags: ["Chrome","Construct","Marksman","Specialist"],
    damage: 7,
    life: 1,
    damageThreshold: "3",
    abilities: [
      {
        text: `Duelist, Priority <span class="line-gap"></span> More Cop than Machine: After resolving a battle involving a different Champion you control: Target the Opponent's Champion that was involved in that battle; Destroy Target.`
      }
    ]
  },
  {
    id: "675",
    name: "Jimmy, King of the Wastes",
    image: `${cardArtFolder}/Champions/JimmyWastesKing.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Chrome","Royal"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Solitary <span class="line-gap"></span> Last Survivor (Exhaustion): Retrieve 1.`
      }
    ]
  },
  {
    id: "676",
    name: "Genevieve, Over-Leveraged Gearhead",
    image: `${cardArtFolder}/Champions/GenevieveOverLeveragedGearhead.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Rally 1 Dust Token to your Opponent's Zone",
    tags: ["Chrome","Mechanic","Specialist"],
    damage: 4,
    life: 4,
    damageThreshold: 1,
    abilities: [
      {
        text: `Repair Specialist <br> Work To Do: If this card is in your Reserve (Exhaustion): Move 1 Commander Obelisk from your Deck to your Reserve. <span class="line-gap"></span> Ceaseless Upgrades: If this card is in your Reserve (Exhaustion): Attach 1 Equipment from your Hand or Deck to a Commander Obelisk in your Reserve. <span class="line-gap"></span> Break Free: If this card would be Rallied from your Reserve (Exhaustion): Ignore the costs of all attached cards.`
      }
    ]
  },
  {
    id: "677",
    name: "Guild Overlord Videl",
    image: `${cardArtFolder}/Champions/GuildOverlordVidel.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Rally 2 Scrap Token to your Opponent's Zone",
    tags: ["Chrome","Inventor","Specialist"],
    damage: 2,
    life: 5,
    damageThreshold: "4",
    abilities: [
      {
        text: `Solitary <span class="line-gap"></span> Projects Funded: If this card is in your Reserve: All Obelisks in your Reserve can be activated ignoring their costs. <span class="line-gap"></span> Declining Health: If this card is in your Reserve during your End Phase (Mandatory): Discard 2, or if you are unable to, Obliterate this card.`
      }
    ]
  },
  {
    id: "678",
    name: "Last-Shot Scott",
    image: `${cardArtFolder}/Champions/LastShotScott.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Chrome","Citizen"],
    damage: 2,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Please Say Yes (Exhaustion): Target 1 Champion your Opponent controls; Take control of Target until the End Phase, and if you do, it cannot attack this turn.`
      }
    ]
  },
  {
    id: "679",
    name: "Clicks Current",
    image: `${cardArtFolder}/Champions/Clicks.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Chrome","Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Click and Drag: Sacrifice this card and Target 1 Champion on the Zone; Move Target to the Reserve. <span class="line-gap"></span> Recycle Restoration: If this card is in your Tomb: Obliterate this card; Spin all Obelisks from your Tomb.`
      }
    ]
  },
  {
    id: "680",
    name: "Twitchless Tina, Stunt Driver Supreme",
    image: `${cardArtFolder}/Champions/TwitchlessTina.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Obliterate 1 Commander Obelisk from your Tomb",
    tags: ["Chrome","Citizen"],
    damage: 2,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Bail-Out: All Commander Obelisks this card Mounts gain Shielded if they did not already have it. <span class="line-gap"></span> Kit Car: If the Commander Obelisk this card was Mounted to is Destroyed (Reflex): Move 1 Commander Obelisk from your Deck to your Reserve.`
      }
    ]
  },
  {
    id: "681",
    name: "Bustermech MK5 - Mjolnir",
    image: `${cardArtFolder}/Obelisks/BustermechMK5Mjolnir.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "Reflex: An attack is declared against you while you control no Commanders",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: While mounted this card's Commander's Damage is increased by 1, and it gains Menace, but, even if it becomes unmounted, this card's Commander's Life and Damage Threshold are both reduced to 1.`
      }
    ]
  },
  {
    id: "682",
    name: "Bustermech MK10 - Jurmangandir",
    image: `${cardArtFolder}/Obelisks/BustermechMK10Jurmangandir.png`,
    rarity: "Legendary",
    type: "Obelisk",
    condition: "",
    cost: "Obliterate your Hand (minimum of 1 card)",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> On Activation: Remove all counters from the Zone, and if you do, this card gains Horizon Counters equal to the number of counters removed. <span class="line-gap"></span> Mounted (Reflex): Remove 1 Horizon Counter from this card; Place 1 Horizon Counter on a face-up card on the Zone. <span class="line-gap"></span> If another card increases to have 3, or more, Horizon Counters on it while this card is face-up on the Zone: Obliterate that card.`
      }
    ]
  },
  {
    id: "683",
    name: "Slipstream",
    image: `${cardArtFolder}/Obelisks/Slipstream.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "Discard 2",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Unstoppable. <span class="line-gap"></span> During your End Phase: Move this card, and its Commander, to your Reserve.`
      }
    ]
  },
  {
    id: "684",
    name: "A.P.C. - Adaptive Pursuit Convoy",
    image: `${cardArtFolder}/Obelisks/APC.png`,
    rarity: "Legendary",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: This card's Commander's Damage Threshold increases by 2. <span class="line-gap"></span> Mounted: This card, and its Commander, are unaffected by, and do not trigger, the effects of your Opponent's Obelisks.`
      }
    ]
  },
  {
    id: "685",
    name: "Overwatch",
    image: `${cardArtFolder}/Obelisks/Overwatch.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: Place 1 Tracker Counter on all face-up cards that do not currently have counters. <span class="line-gap"></span> Mounted: Remove 6 Tracker Counters from the Zone and Target 1 face-up Champion; Reduce Target to a Life and Damage Threshold of 1.`
      }
    ]
  },
  {
    id: "686",
    name: "Zephyr",
    image: `${cardArtFolder}/Obelisks/Zephyr.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander is unaffected by your Opponent's effects that do not Target it.`
      }
    ]
  },
  {
    id: "687",
    name: "Bytekite",
    image: `${cardArtFolder}/Obelisks/Bytekite.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: Target 1 face-down Champion on the Zone; Flip Target face-up (negate its flip effects), and if you do, flip it back face-down.`
      }
    ]
  },
  {
    id: "688",
    name: "Town Bicycle",
    image: `${cardArtFolder}/Obelisks/TownBicycle.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: The first time each turn this card's Commander would be Exhausted by an effect, they are not.`
      }
    ]
  },
  {
    id: "689",
    name: "Circuitwing",
    image: `${cardArtFolder}/Obelisks/Circuitwing.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted (Reflex): Move this card, and its Commander, to your Reserve until your next Intermission Phase.`
      }
    ]
  },
  {
    id: "690",
    name: "The Baron",
    image: `${cardArtFolder}/Obelisks/Baron.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: Discard 1; Rally 1 Basic Champion from your Reserve.`
      }
    ]
  },
  {
    id: "691",
    name: "Training Wheels",
    image: `${cardArtFolder}/Equipments/TrainingWheels.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains the effect: \"This card's Commander gains Taunt.\"`
      }
    ]
  },
  {
    id: "692",
    name: "Custom Paint Job",
    image: `${cardArtFolder}/Equipments/PaintJob.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains the effect: \"This card's Commander gains Speed.\"`
      }
    ]
  },
  {
    id: "693",
    name: "Lift Kit",
    image: `${cardArtFolder}/Equipments/LiftKit.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `On Activation: The attached Obelisk gains one of the following effects. Either: \"This card's Commander gains Reach and Taunt.\" or \"This card's Commander gains Defender and Invisible.\"`
      }
    ]
  },
  {
    id: "694",
    name: "Ejection Seat",
    image: `${cardArtFolder}/Equipments/EjectionSeat.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Reflex: Bounce the attached Obelisk's Commander, then Destroy this card.`
      }
    ]
  },
  {
    id: "695",
    name: "Self-Destruct Button",
    image: `${cardArtFolder}/Equipments/SelfDestructButton.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Reflex: Destroy the attached Obelisk and Commander (if it has one). Then, if this effect was activated during a battle involving the Obelisk's Commander: Destroy the other battling Champion.`
      }
    ]
  },
  {
    id: "696",
    name: "Nitrous Pedal",
    image: `${cardArtFolder}/Equipments/NitrousPedal.png`,
    rarity: "Legendary",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains the effect: \"This card's Commander gains Triple Strike.\" <span class="line-gap"></span> At the end of a Battle Phase in which the Obelisk's Commander declared an attack: Obliterate the attached Obelisk.`
      }
    ]
  },
  {
    id: "697",
    name: "Cut the Brakes",
    image: `${cardArtFolder}/Equipments/CutTheBrakes.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains the effect: \"This card's Commander must attack when able.\"`
      }
    ]
  },
  {
    id: "698",
    name: "Block It",
    image: `${cardArtFolder}/Equipments/BlockIt.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains the effect: \"This card's Commander gains Contained.\"`
      }
    ]
  },
  {
    id: "699",
    name: "Aftermarket Parts",
    image: `${cardArtFolder}/Equipments/AftermarketParts.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Commander Obelisk",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Obelisk gains Maintenance, and the effect: \"This card's Commander gains Second Strike.\" <span class="line-gap"></span> The attached Obelisk can not grant any other Passives to its Commander.`
      }
    ]
  },
  {
    id: "721",
    name: "Alice Kazimir, Chronurgy Master",
    image: `${cardArtFolder}/Champions/AliceKazimirChronurgistExtraordinaire.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Discard 1 non-Champion",
    tags: ["Arcanum","Chronurgy","Mage"],
    damage: 1,
    life: 5,
    damageThreshold: "2",
    abilities: [
      {
        text: `Second Strike, Twitchy <span class="line-gap"></span> Rewind Time: On Rally (Exhaustion): Target 1 non-Champion in your Tomb; Retrieve Target. <span class="line-gap"></span> Alternate-Timeline Alice (Exhaustion): Rally 1 Echo Token to your Zone of this card, and if you do, increase its Damage by 1. <span class="line-gap"></span> Temporal Reversal: If Sent to Tomb: Oblierate Mill 10; Resurrect this card during the next Intermission Phase.`
      }
    ]
  },
  {
    id: "722",
    name: "Westra Abernathy, Evocation Master",
    image: `${cardArtFolder}/Champions/WestraAbernathyEvocationMaster.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "All face-up Champions you control (minimum of 1) take 3 Damage",
    tags: ["Arcanum","Evocation","Mage"],
    damage: 5,
    life: 1,
    damageThreshold: "2",
    abilities: [
      {
        text: `Warded <span class="line-gap"></span> Lemme Look That Up: On Rally (Exhaustion): Add 1 Action. <span class="line-gap"></span> Fireball! (Exhaustion): Deal 3 Damage to all face-up Champions your Opponent controls. <span class="line-gap"></span> Burn With Me: If Destroyed by Battle: Destroy the other battling Champion.`
      }
    ]
  },
  {
    id: "723",
    name: "Masterful Battle",
    image: `${cardArtFolder}/Reflex/MasterfulBattle.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Deal 3 Damage to all face-up Champions your Opponent controls. <span class="line-gap"></span> If you do not control a face-up Mage: All face-up Champions you control also take 3 Damage.`
      }
    ]
  },
  {
    id: "724",
    name: "Ouroboros, Divination Master",
    image: `${cardArtFolder}/Champions/OuroborosDivinationMaster.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Arcanum","Divination","Mage"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Non-Believer, Taunt <span class="line-gap"></span> Portent the Future: Choose 1 Player; Excavate 3 from Player's Deck, and if you do, return the cards in an order of your choice. <span class="line-gap"></span> Saw That Coming (Reflex): Move this card to the Reserve.`
      }
    ]
  },
  {
    id: "725",
    name: "Antwon, Conjuration Master",
    image: `${cardArtFolder}/Champions/AntwonConjurationMaster.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Arcanum","Conjuration","Mage"],
    damage: 1,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Menace <span class="line-gap"></span> Behold My Minions!: Rally 1 Frog Token to your Zone.`
      }
    ]
  },
  {
    id: "726",
    name: "Elluin, Enchantress",
    image: `${cardArtFolder}/Champions/ElluinEnchantress.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Arcanum","Enchantment","Mage"],
    damage: 3,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Reach <span class="line-gap"></span> Yoo Hoo!: Target 1 face-up Champion on the Zone; Target cannot attack or activate its effects until the start of your next turn.`
      }
    ]
  },
  {
    id: "727",
    name: "Phaustus, Enchantment Master",
    image: `${cardArtFolder}/Champions/PhaustusEnchantmentMaster.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Sacrifice all face-up Champions you control (minimum of 1)",
    tags: ["Arcanum","Enchantment","Mage"],
    damage: 1,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Warded <span class="line-gap"></span> Alluring Gaze: Target 1 face-up Champion your Opponent controls; Take control of Target until the End Phase.`
      }
    ]
  },
  {
    id: "728",
    name: "Arineia, Graviturgy Master",
    image: `${cardArtFolder}/Champions/ArineiaGraviturgyMaster.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Flip all face-down Champions you control face-up (minimum of 1, negate their flip effects)",
    tags: ["Arcanum","Graviturgy","Mage"],
    damage: 4,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Gravekeeper, Menace, Taunt <span class="line-gap"></span> Singularity (Exhaustion): Target 1 face-up Champion your Opponent controls; Obliterate Target until the End Phase.`
      }
    ]
  },
  {
    id: "729",
    name: "Galandrel, Abjuration Master",
    image: `${cardArtFolder}/Champions/GalandrelAbjurationMaster.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "Reflex: A Champion you control is Damaged or Destroyed",
    cost: "Basic",
    tags: ["Arcanum","Abjuration","Mage"],
    damage: 0,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Warded <span class="line-gap"></span> Force Bubble (Reflex): Target 1 other face-up non-Token Champion you control; Increase Target's Damage Threshold by 3 until the End Phase.`
      }
    ]
  },
  {
    id: "730",
    name: "Beltair, Illusion Master",
    image: `${cardArtFolder}/Champions/BeltairIllusionMaster.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Arcanum","Illusion","Mage","Trickster"],
    damage: 1,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Me, Myself, and I (Exhaustion): Rally 1 Echo Token to your Zone of this card. <span class="line-gap"></span> Syke!: While you control a linked Token of this card on your Zone: This card gains Invisible and Unstoppable.`
      }
    ]
  },
  {
    id: "731",
    name: "Kelfir, Transmutation Master",
    image: `${cardArtFolder}/Champions/KelfirTransmutationMaster.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Arcanum","Transmutation","Mage"],
    damage: 0,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Lead to Gold (Exhaustion): Obliterate 1 other face-up card you control; Activate 1 card of the same type from your Hand (ignoring its cost).`
      }
    ]
  },
  {
    id: "732",
    name: "Power Swap",
    image: `${cardArtFolder}/Actions/PowerSwap.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Obliterate 1 face-up Champion you control",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit 1 Mage. <span class="line-gap"></span> If you have no Mages in your Deck: Draw 1.`
      }
    ]
  },
  {
    id: "733",
    name: "Master-Level Spell",
    image: `${cardArtFolder}/Rush/MasterLevelSpell.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Target 1 face-up Mage you control",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Exhaust the Target, and if you do, activate 1 of the following effects: <span class="line-gap"></span> • Deal 1 Damage to all face-up Champions your Opponent controls. <span class="line-gap"></span> • Excavate 2. Add 1 Revealed, and Obliterate the other. <span class="line-gap"></span> • Activate 1 of Target's non-Exhaustion effects. <span class="line-gap"></span> If you control no face-up Mages: Discard this card; Destroy 1 Champion you control.`
      }
    ]
  },
  {
    id: "734",
    name: "Ferg, The Frog",
    image: `${cardArtFolder}/Champions/FergTheFrog.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Arcanum","Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Ribbit: If a Champion effect is activated (Reflex): Sacrifice this card; Negate that effect's activation. <span class="line-gap"></span> Hardly Ordinary: If this is the only Champion you control: Sacrifice this card; Recruit 1 Mage. <span class="line-gap"></span> Helping Hand: If this card is in your Tomb (Reflex): Obliterate this card and Target 1 face-up Mage on the Zone; Move Target to the Reserve.`
      }
    ]
  },
  {
    id: "781",
    name: "Skaridrex, the Mighty",
    image: `${cardArtFolder}/Champions/Skaridrex.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1 Champion your Opponent controls, Rally this card under their control",
    tags: ["Cinemonster","Megalith","Kaiju"],
    damage: 7,
    life: 9,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bloodrage, Menace <span class="line-gap"></span> Initial Attack Jitters: On Rally (Mandatory): Your Opponent draws 1. <span class="line-gap"></span> City Breaker: If this card successfully attacks: Remove 1 K-Cell Counter from anywhere on the Zone and Target 1 card on the Zone; Destroy Target. <span class="line-gap"></span> Dead King Signal: If Destroyed by Battle: Add 1 Kaiju.`
      }
    ]
  },
  {
    id: "782",
    name: "Nyrieux, the Inevitable End",
    image: `${cardArtFolder}/Champions/Nyrieux.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 2 Champions your Opponent controls, Rally this card under their control",
    tags: ["Cinemonster","Megalith","Kaiju"],
    damage: 13,
    life: 7,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bloodrage, Deathcurse <span class="line-gap"></span> The End of All Things: Remove 3 K-Cell Counters from anywhere on the Zone and Discard your entire Hand (Minimum of 1 card); Destroy all cards on the Zone. <span class="line-gap"></span> Fickle Beast: During your End Phase (Mandatory): Switch control of this card to your Opponent, and if you do, destroy it during the next End Phase.`
      }
    ]
  },
  {
    id: "783",
    name: "Arena: Graystone",
    image: `${cardArtFolder}/Obelisks/ArenaGraystone.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Each time a card(s) is sent from the Zone to the Tomb: Place 1 K-Cell Counter on this card for each sent card (max. 5 per instance). <br><br> Remove 5 K-Cell Counters from this card; Add 1 Clockwork. If you have no Clockworks in your Deck: Add 1 Basic.`
      }
    ]
  },
  {
    id: "784",
    name: "Arena: Redemption",
    image: `${cardArtFolder}/Obelisks/ArenaRedemption.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Each time a card(s) is added: Place 1 K-Cell Counter on this card for each added card (max. 5 per instance). <br><br> Remove 2 K-Cell Counters from this card and Target 1 Champion you control; Increase Target's Damage by 2.`
      }
    ]
  },
  {
    id: "785",
    name: "Arena: Vaelwind",
    image: `${cardArtFolder}/Obelisks/ArenaVaelwind.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Each time an Equipment card(s) is activated: Place 1 K-Cell Counter on this card for each card activated (max. 5 per instance). <br><br> Remove 3 K-Cell Counters from this card and Target 1 Noble in either Tomb; Resurrect Target. If there are no Nobles in either Tomb: You can Target, and Resurrect, a Champion with 0 Damage instead.`
      }
    ]
  },
  {
    id: "786",
    name: "Arena: Oakwood Harbor",
    image: `${cardArtFolder}/Obelisks/ArenaOakwoodHarbor.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Each time an attack is declared: Place 1 K-Cell Counter on this card. <br><br> Remove 5 K-Cell Counters from this card and Target 1 Champion on the Zone; Destroy Target. <br><br> If Destroyed: Recruit 1 Hero.`
      }
    ]
  },
  {
    id: "787",
    name: "Arena: Moonridge",
    image: `${cardArtFolder}/Obelisks/ArenaMoonridge.png`,
    rarity: "Legendary",
    type: "Obelisk",
    condition: "This card must be set for a turn before you can activate it, this card can be flipped or activated by another card's effect",
    cost: "Offer 1 Life",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Remove X Counters from any one card on the Zone and Target 1 Champion you control; Increase Target's Damage by X.`
      }
    ]
  },
  {
    id: "788",
    name: "Akrobell, the Stormrider",
    image: `${cardArtFolder}/Champions/AkrobellTheStormrider.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1 Champion your Opponent controls, Rally this card under their control",
    tags: ["Cinemonster","Megalith","Kaiju"],
    damage: 4,
    life: 6,
    damageThreshold: "2",
    abilities: [
      {
        text: `Reach, Taunt <span class="line-gap"></span> Shocking Arrival: On Rally (Mandatory): Obliterate Mill 2. <span class="line-gap"></span> Lightning Rider: If this card is Targeted: Remove 1 K-Cell Counter from anywhere on the Zone; Negate the triggering attack or effect, and if you do, Obliterate that triggering card and this card.`
      }
    ]
  },
  {
    id: "789",
    name: "Movie Monster Rampage",
    image: `${cardArtFolder}/Actions/MovieMonsterRampage.png`,
    rarity: "Superior",
    type: "Action",
    condition: "Both Players control at least 1 Champion",
    cost: "Obliterate your Hand (minimum of 1 card)",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy all Champions on the Zone, and if you do, Recruit 1 Kaiju to each Player's Zone. The recruited Champions must always attack if able. <span class="line-gap"></span> If you do not have at least 2 Kaiju in your Deck: No Kaiju are recruited.`
      }
    ]
  },
  {
    id: "790",
    name: "Arena: Monster Island",
    image: `${cardArtFolder}/Obelisks/ArenaMonsterIsland.png`,
    rarity: "Legendary",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Upon Activation: Destroy all other face-up "Arena" Obelisks on the Zone. <span class="line-gap"></span> Each time a card(s) is drawn: Place 1 K-Cell Counter on this card for each card drawn (max. 5 per instance). <span class="line-gap"></span> Remove 2 K-Cell Counters from this card; Destroy all face-up "Arena" Obelisks on the Zone, then activate 1 "Arena" Obelisk from your Hand or Deck (ignoring its cost), and if you do, place 1 K-Cell Counter on that card. If you have no "Arena" Obelisks in your Hand or Deck, then you can instead move 1 Obelisk from your Deck to your Reserve, but it cannot be activated this turn.`
      }
    ]
  },
  {
    id: "791",
    name: "Mechadrex, Kaiju-Crusher",
    image: `${cardArtFolder}/Champions/Mechadrex.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "Your Opponent controls a Kaiju, or a Champion with 7 or more Damage",
    cost: "Basic",
    tags: ["Cinemonster","Megalith","Kaiju","Construct"],
    damage: 5,
    life: 7,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority <span class="line-gap"></span> Kaiju-Crusher: Kaiju deal no Battle Damage to this card, and you take no Battle Damage from battles involving this card and an Kaiju. Additionally, this card deals double Battle Damage to Kaiju. <span class="line-gap"></span> Overloading Power Core: Each time this card Destroys a Kaiju by battle (Mandatory): Add 1 K-Cell Counter to this card.`
      }
    ]
  },
  {
    id: "792",
    name: "Jiunkyu, Rebuilt Terror",
    image: `${cardArtFolder}/Champions/JiunkyuRebuiltTerror.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1 Champion your Opponent controls, Rally this card under their control",
    tags: ["Cinemonster","Megalith","Kaiju","Construct"],
    damage: 10,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority <span class="line-gap"></span> Knives for Hands: On Rally (Mandatory): All other face-up Champions you control take 1 Damage. <span class="line-gap"></span> Slice and Dice (Reflex): Remove 1 K-Cell Counter from anywhere on the Zone and Target 1 face-up Champion on the Zone; Deal 3 Damage to Target.`
      }
    ]
  },
  {
    id: "793",
    name: "Kubringi, Venosect Monger",
    image: `${cardArtFolder}/Champions/KubringiVenosectMonger.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1 Champion your Opponent controls, Rally this card under their control",
    tags: ["Cinemonster","Megalith","Kaiju"],
    damage: 4,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Duelist, Priority, Second Strike <span class="line-gap"></span> Venom-Coated Fangs: Remove 1 K-Cell Counter from anywhere on the Zone and Target 1 face-up Champion on the Zone; Deal 1 Damage to Target.`
      }
    ]
  },
  {
    id: "794",
    name: "Subject: Alpha - Rogue Experiment",
    image: `${cardArtFolder}/Champions/SubjectAlphaEscapedExperiment.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1",
    tags: ["Cinemonster","Construct","Slasher","Villain"],
    damage: 6,
    life: 1,
    damageThreshold: "3",
    abilities: [
      {
        text: `Contained, Taunt`
      }
    ]
  },
  {
    id: "795",
    name: "Jeff, Well-Versed Cinephile",
    image: `${cardArtFolder}/Champions/JeffWellVersedCinephile.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cinemonster","Protector","Blademaster","Hero"],
    damage: 3,
    life: 1,
    damageThreshold: "2",
    abilities: [
      {
        text: `Raider <span class="line-gap"></span> Seen This One Before: Cinemonsters deal no Battle Damage to this card, and you take no Battle Damage from battles involving this card and a Cinemonster.`
      }
    ]
  },
  {
    id: "796",
    name: "Edgar, Misunderstood Monster",
    image: `${cardArtFolder}/Champions/EdgarMisunderstoodMonster.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cinemonster","Undead","Slasher","Protector"],
    damage: 4,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Conscript, Taunt <span class="line-gap"></span> Rise!: On Resurrection (Mandatory): Both Players draw 1, then both Players discard 1.`
      }
    ]
  },
  {
    id: "797",
    name: "Heather, Willing Werewolf",
    image: `${cardArtFolder}/Champions/HeatherWillingWerewolf.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Sacrifice all Champions you control (minimum of 1)",
    tags: ["Cinemonster","Slasher","Villain"],
    damage: 6,
    life: 2,
    damageThreshold: "3",
    abilities: [
      {
        text: `Solitary <span class="line-gap"></span> Revenge Arc (Exhaustion): Target 1 face-up Champion on the Zone; Destroy Target. <span class="line-gap"></span> You're Coming With Me!: If Sent from the Zone to the Tomb: You take 2 Damage.`
      }
    ]
  },
  {
    id: "798",
    name: "Tryzten, Vampire Lord",
    image: `${cardArtFolder}/Champions/TryztenVampireLord.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Offer 5 Life",
    tags: ["Cinemonster","Royal","Undead","Slasher","Villain"],
    damage: 5,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Menace <span class="line-gap"></span> King of the Night: If your Life is lower than your Opponent's: This card gains Lifesteal. Otherwise, if your Life is higher, this card gains Naive.`
      }
    ]
  },
  {
    id: "799",
    name: "Rhafir, Mummy King",
    image: `${cardArtFolder}/Champions/RhafirMummyKing.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Mill 6",
    tags: ["Cinemonster","Cryptbound","Royal","Undead","Slasher","Villain"],
    damage: 0,
    life: 1,
    damageThreshold: "2",
    abilities: [
      {
        text: `Fortified, Necrocharge <span class="line-gap"></span> Ancient Ruler (Reflex, Exhaustion): Obliterate 3 Undead from your Tomb and Target 1 card on the Zone; Destroy Target.`
      }
    ]
  },
  {
    id: "800",
    name: "Rick, Creature From The Bog",
    image: `${cardArtFolder}/Champions/RickCreatureOfTheBog.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cinemonster","Slasher","Villain"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Bog Dweller: Until this Champion declares an attack: It gains Invisible and Warded. <span class="line-gap"></span> Initial Attack: If Destroyed by Battle: Add 1 Slasher.`
      }
    ]
  },
  {
    id: "801",
    name: "Skeleton Horse",
    image: `${cardArtFolder}/Obelisks/SkeletonHorse.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "There is at least 1 Champion in your Tomb",
    cost: "Obliterate 1 Commander Obelisk from your Tomb",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `On Activation (Mandatory): Target 1 Champion in your Tomb; Resurrect Target, and if you do, it becomes this card's Commander. <span class="line-gap"></span> Mount <span class="line-gap"></span> Mounted: Negate this card's Commander's passives and effects, and if you do, it gains Duelist. <span class="line-gap"></span> Mounted: If this card's Commander declares an attack (Mandatory): Both Players take 1 Damage. <span class="line-gap"></span> If this card, or its Commander, leaves the Zone: Obliterate both this card and its Commander.`
      }
    ]
  },
  {
    id: "802",
    name: "Go For The Head!",
    image: `${cardArtFolder}/Obelisks/GoForTheHead.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `All Champions Destroyed by battle are sent to the Void instead of the Tomb.`
      }
    ]
  },
  {
    id: "841",
    name: "Vice, Agent of Deception",
    image: `${cardArtFolder}/Champions/ViceAgentOfDeception.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Hellfire","Trickster","Mage"],
    damage: 3,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Menace <span class="line-gap"></span> False Face (Reflex): Offer 1 Life from this card and Target 1 face-up Champion on the Zone; Activate 1 of Target's effects.`
      }
    ]
  },
  {
    id: "842",
    name: "Fie, Horseman of Death",
    image: `${cardArtFolder}/Champions/FieHorsemanOfDeath.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Hellfire","Nightveil","Trickster","Blademaster"],
    damage: 4,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Invisible, Solitary, Unstoppable <span class="line-gap"></span> Perchance to Dream: On Rally: Target 1 face-down Champion on the Zone; Destroy Target. <span class="line-gap"></span> Blend into the Crowd: If this card is Targeted (Reflex): Bounce this card, and if you do, you must Discard 1.`
      }
    ]
  },
  {
    id: "843",
    name: "Desperate Deal",
    image: `${cardArtFolder}/Obelisks/DesperateDeal.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `During either Player's Turn (Reflex): Either Player can Obliterate Mill 15; Then activate 1 of the following effects: <span class="line-gap"></span> • Draw 2. <span class="line-gap"></span> • Rally 1 Blocker Token to your Zone. <span class="line-gap"></span> • Target 1 face-up Champion on the Zone; Negate Target's passives and effects until the end of this turn.`
      }
    ]
  },
  {
    id: "844",
    name: "Pactless Imp",
    image: `${cardArtFolder}/Champions/PactlessImp.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Hellfire","Trickster"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Desperate for a Deal: Either Player can Offer 2 Life from a Champion they control; then that Champion gains 1 of the following Passives until the End Phase: <span class="line-gap"></span> • Greedy <span class="line-gap"></span> • Lifesteal <span class="line-gap"></span> • Warded`
      }
    ]
  },
  {
    id: "845",
    name: "Ashes, Wasteland Maiden",
    image: `${cardArtFolder}/Champions/AshesWastelandMaiden.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Offer 2 Life",
    tags: ["Hellfire","Trickster","Mage"],
    damage: 1,
    life: 7,
    damageThreshold: "1",
    abilities: [
      {
        text: `It's Me or Him: Swap this card's current Damage and Life. <span class="line-gap"></span> Dark Deal: If this card's Life is currently higher than its Damage: Offer 2 Life; Draw 1. <span class="line-gap"></span> Burning Rage: If this card's Damage is currently higher than its Life: Offer 2 Life; Deal 1 Damage to all face-up Champions your Opponent controls.`
      }
    ]
  },
  {
    id: "846",
    name: "Rahzeel, Forever-Indebted Bus Driver",
    image: `${cardArtFolder}/Champions/RahzeelForeverIndebtedBusDriver.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Discard 1",
    tags: ["Hellfire","Citizen"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `All Aboard!: On Rally: Recruit 1 Basic Hellfire with 1 or less Damage.`
      }
    ]
  },
  {
    id: "847",
    name: "Ieza, Chatty Passenger",
    image: `${cardArtFolder}/Champions/IezaChattyPassenger.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Hellfire","Citizen"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bus Fare: If Recruited: Draw 1. <span class="line-gap"></span> End of the Line: Sacrifice this card and 1 other face-up Hellfire you control; Recruit 1 Hellfire (ignoring its cost and conditions), and if you do, you lose the game during your next End Phase.`
      }
    ]
  },
  {
    id: "848",
    name: "Glory, Demon Slayer",
    image: `${cardArtFolder}/Champions/GloryDemonSlayer.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Offer 4 Life",
    tags: ["Hellfire","Frenzied","Blademaster"],
    damage: 1,
    life: 4,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bloodrage, Necrocharge <span class="line-gap"></span> Legendary Slayer: If this Champion Destroys a Hellfire by Battle: Increase this card's Damage by 2.`
      }
    ]
  },
  {
    id: "849",
    name: "Whisper, Devil's Demise",
    image: `${cardArtFolder}/Champions/WhisperDevilsDemise.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Destroy 1 Champion you control",
    tags: ["Hellfire","Protector","Monk"],
    damage: 3,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `One-Woman Army: If this is the only Champion you control: This card gains Taskmaster and Unstoppable. <span class="line-gap"></span> Broken Soul: Hellfire deal no Battle Damage to this card, and you take no Battle Damage from battles involving this card and a Hellfire.`
      }
    ]
  },
  {
    id: "901",
    name: "Get Your Game On!",
    image: `${cardArtFolder}/Rush/GameOn.png`,
    rarity: "Superior",
    type: "Rush",
    condition: "A Cryptbound, Vivisect, Clockwork, Noble, or Frontier Champion leaves your Zone",
    cost: "Discard your entire Hand (minimum of 1 card)",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Recruit 1 Cryptbound, Vivisect, Clockwork, Noble, or Frontier Champion.`
      }
    ]
  },
  {
    id: "902",
    name: "Legendary Battle",
    image: `${cardArtFolder}/Actions/LegendaryBattle.png`,
    rarity: "Legendary",
    type: "Action",
    condition: "Your Life must be 1",
    cost: "Obliterate your Hand, Deck, Tomb, Reserve, and all other cards you control",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Obliterate your Opponent’s Hand, Deck, Tomb, Reserve, and all cards your Opponent controls, and if you do, both Players Unleash 1 (ignoring their conditions). <span class="line-gap"></span><span class="line-gap"></span> If either Champion leaves the Zone, that player loses. If both leave the Zone at the same time, it is a draw. Players cannot lose by failing to draw a card at the start of their turn.`
      }
    ]
  },
  {
    id: "903",
    name: "Look At This Cat",
    image: `${cardArtFolder}/Reflex/LookAtThisCat.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "It is your Opponent's turn",
    cost: "Target 1 face-up Champion you control with 1 or Less Damage",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Target gains Bulletproof, Defender, Non-Believer, and Taunt until the end of this turn.`
      }
    ]
  },
  {
    id: "904",
    name: "Alena, Monster Hunter",
    image: `${cardArtFolder}/Champions/AlenaMonsterHunter.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "Your Opponent controls at least 1 Champion",
    cost: "Basic",
    tags: ["Oldblood","Blademaster","Specialist"],
    damage: 4,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority <span class="line-gap"></span> That's My Speciality: On Rally: Declare 1 Champion Tag. This card deals double Battle Damage against Champions with that Tag. <span class="line-gap"></span> Right Tool for the Task: If this Champion has at least l attached Equipment: This card loses Duelist and gains Menace.`
      }
    ]
  },
  {
    id: "905",
    name: "Dinah, Battlerager",
    image: `${cardArtFolder}/Champions/DinahBattlerager.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 2",
    tags: ["Frenzied","Blademaster","Protector"],
    damage: 3,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bloodrage, Board Breaker, Bulletproof, Priority <span class="line-gap"></span> Front and Center: This is the only Champion you can attack with during your Battle Phase. <span class="line-gap"></span> Frenzied Rage: If this card Destroys an Opponent's Champion by battle (Mandatory): It must make another attack against a Champion they control. If there are no remaining Champions on your Opponent's side, deal 2 Damage to this card.`
      }
    ]
  },
  {
    id: "906",
    name: "Hearth, Paladin of Lathander",
    image: `${cardArtFolder}/Champions/HearthPaladinOfLathander.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "Your Opponent controls more Champions than you",
    cost: "Basic",
    tags: ["Righteous","Paladin","Protector","Blademaster","Mage"],
    damage: 2,
    life: 4,
    damageThreshold: "3",
    abilities: [
      {
        text: `Priority, Warded <span class="line-gap"></span> Divine Smite: During Damage Calculation between this card and another Champion (Reflex): Discard any number of cards; Increase this card's Damage by 2 per card discarded until the end of Damage Calculation. If it is battling a Hellfire, then increase the Damage by 3 per discarded card instead.`
      }
    ]
  },
  {
    id: "907",
    name: "Shelby",
    image: `${cardArtFolder}/Obelisks/Shelby.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: Increase this card's Commander's Damage and Damage Threshold by 2. <span class="line-gap"></span> Mounted: If this card's Commander's attack is not blocked: After Damage Calculation, move this card, and its Commander, to your Reserve. <span class="line-gap"></span> If Destroyed: Deal 1 Damage to all face-up Champions on the Zone.`
      }
    ]
  },
  {
    id: "908",
    name: "Tall Horse",
    image: `${cardArtFolder}/Obelisks/TallHorse.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Reach and Taunt.`
      }
    ]
  },
  {
    id: "909",
    name: "Taller Horse",
    image: `${cardArtFolder}/Obelisks/TallerHorse.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander's Damage increases by 5 when battling a Champion who is also a Commander.`
      }
    ]
  },
  {
    id: "910",
    name: "Tallest Horse",
    image: `${cardArtFolder}/Obelisks/TallestHorse.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Duelist and Non-Believer.`
      }
    ]
  },
  {
    id: "911",
    name: "Small Horse",
    image: `${cardArtFolder}/Obelisks/SmallHorse.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Invisible, also reduce this card's Commander's Damage by 2.`
      }
    ]
  },
  {
    id: "912",
    name: "Jousting Lance",
    image: `${cardArtFolder}/Equipments/JoustingLance.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion cannot declare attacks unless they are a Commander. <span class="line-gap"></span> The attached Champion gains Duelist and Priority. <span class="line-gap"></span> If the attached Champion battles another with a lower Damage (not including Tokens): Instead of conducting Damage Calculation, move the other Champion to the Reserve.`
      }
    ]
  },
  {
    id: "913",
    name: "Tilted Windmill",
    image: `${cardArtFolder}/Obelisks/TiltedWindmill.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `On Activation: Rally 1 Windmill Token to your Zone. <span class="line-gap"></span> During your Intermission Phase (Mandatory): Destroy all Windmill Tokens you control, then Rally 1 Windmill Token to your Zone.`
      }
    ]
  },
  {
    id: "914",
    name: "Oinkers",
    image: `${cardArtFolder}/Champions/Oinkers.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1",
    tags: ["Frontier","Livestock"],
    damage: 2,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Devourer of Oats: Discard 1; Increase this card's Damage by 2.`
      }
    ]
  },
  {
    id: "915",
    name: "99 Cows, 1 Bull",
    image: `${cardArtFolder}/Actions/99Cows1Bull.png`,
    rarity: "Rare",
    type: "Action",
    condition: "You control a face-up Champion with 0 Damage",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Add 1 Citizen or Livestock. <span class="line-gap"></span> If you have no Citizens or Livestock in your Deck: Add 1 Basic.`
      }
    ]
  },
  {
    id: "916",
    name: "Bull Rush",
    image: `${cardArtFolder}/Rush/RideTheBull.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Target 1 face-up Champion on the Zone",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Target is dealt 1 Damage for every face-up Livestock and Token you control. <span class="line-gap"></span> If you control no face-up Livestock or Tokens: You take 1 Damage, and if you do, Deal 1 Damage to Target.`
      }
    ]
  },
  {
    id: "917",
    name: "Barbed Wire",
    image: `${cardArtFolder}/Obelisks/BarbedWire.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Face-Up Helpers and Livestock that you control gain Endurance and Invisible.`
      }
    ]
  },
  {
    id: "918",
    name: "Dust-Up Diner",
    image: `${cardArtFolder}/Obelisks/DustUpDiner.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The turn Player must enter their Battle Phase on their turn (if possible), and if they do, every face-up Champion they control that can attack must declare an attack.`
      }
    ]
  },
  {
    id: "919",
    name: "Hen Rietta",
    image: `${cardArtFolder}/Champions/HenRietta.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Prize Layer: Rally 1 Egg Token to your Zone.`
      }
    ]
  },
  {
    id: "920",
    name: "Cocky Rooster",
    image: `${cardArtFolder}/Champions/CockyRooster.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock"],
    damage: 1,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Alarm O'Clock: Target 1 face-down Champion on the Zone; Flip Target face-up (negate its Flip effects).`
      }
    ]
  },
  {
    id: "921",
    name: "Goaten Ramsey",
    image: `${cardArtFolder}/Champions/GoatenRamsey.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock"],
    damage: 3,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Headbutt!: After Damage Calculation if this card battled another Champion: Target 1 face-up Equipment or Obelisk on the Zone; Destroy Target.`
      }
    ]
  },
  {
    id: "922",
    name: "Bessy",
    image: `${cardArtFolder}/Champions/Bessy.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock"],
    damage: 0,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Milk the Cow... Now: Target 1 Champion on the Zone; Target cannot block this turn.`
      }
    ]
  },
  {
    id: "923",
    name: "Animal Magnetism",
    image: `${cardArtFolder}/Actions/AnimalMagnetism.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Target 1 face-up Livestock on the Zone; Rally 1 Echo Token of Target to your Zone. <span class="line-gap"></span> If there are no face-up Livestock on the Zone: Rally 1 Grenade Token.`
      }
    ]
  },
  {
    id: "924",
    name: "Processing Facility",
    image: `${cardArtFolder}/Obelisks/ProcessingFacility.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Obliterate either 1 Livestock or 5 Champions from your Tomb; Draw 1.`
      }
    ]
  },
  {
    id: "925",
    name: "Plowey McPlowerson",
    image: `${cardArtFolder}/Equipments/PloweyMcPlowerson.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Forged. <span class="line-gap"></span> If attached to a Livestock: Exhaust the attached Champion and Target 1 card in your Arsenal; Destroy Target, and if you do, set face-down into your Arsenal another of card of the same type from your Deck.`
      }
    ]
  },
  {
    id: "926",
    name: "Barnaby Barn Cat",
    image: `${cardArtFolder}/Champions/BarnabyBarnCat.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1",
    tags: ["Frontier","Livestock","Protector"],
    damage: 3,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Bloodrage, Taskmaster <span class="line-gap"></span> Pest Control (Exhaustion): Target 1 face-up Champion on the Zone with 1 or less Damage; Destroy Target.`
      }
    ]
  },
  {
    id: "927",
    name: "Get Off Your High Horse",
    image: `${cardArtFolder}/Rush/GetOffYourHighHorse.png`,
    rarity: "Common",
    type: "Rush",
    condition: "",
    cost: "",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `All Champions who are currently Commanders of Obelisks become dismounted from their Obelisks.`
      }
    ]
  },
  {
    id: "928",
    name: "Scales of Judgement",
    image: `${cardArtFolder}/Reflex/ScalesOfJudgement.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "You control no Champions (not counting Tokens)",
    cost: "Declare 1 Champion Tag from those that are currently face-up on the Zone",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If your Opponent controls 7 or more face-up Champions with the declared Tag: Destroy all face-up Champions with that tag.`
      }
    ]
  },
  {
    id: "929",
    name: "Red Light, Green Light",
    image: `${cardArtFolder}/Obelisks/RedLightGreenLight.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If you control at least 1 Champion: Champions your Opponent controls no longer gain the benefits of Priority. <span class="line-gap"></span><span class="line-gap"></span> If your Opponent declares an attack while you control at least 1 Champion: You must block that attack (if you are able to).`
      }
    ]
  },
  {
    id: "930",
    name: "The City's Bear Cage",
    image: `${cardArtFolder}/Equipments/CityBearCage.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Contained, Invisible, and Warded.`
      }
    ]
  },
  {
    id: "931",
    name: "Throw the Sword",
    image: `${cardArtFolder}/Rush/ThrowTheSword.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Destroy 1 face-up Equipment you control and Target 1 face-up Champion on the Zone",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Deal 3 Damage to Target.`
      }
    ]
  },
  {
    id: "932",
    name: "Dark / Light - Fight!",
    image: `${cardArtFolder}/Rush/DarkLightFight.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Target 1 face-up Champion you control and 1 face-up Champion your Opponent controls",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Targets immediately battle, with you deciding who is attacking and who is blocking.`
      }
    ]
  },
  {
    id: "933",
    name: "Hafira, the Stoneblade Slayer",
    image: `${cardArtFolder}/Champions/HafiraStonebladeSlayer.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1",
    tags: ["Frenzied","Blademaster"],
    damage: 3,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Bloodrage <span class="line-gap"></span> Small in Stature: During your End Phase: If this card did not declare an attack this turn: This card gains Invisible until the start of your next turn.`
      }
    ]
  },
  {
    id: "934",
    name: "Reth, Shadow Dweller",
    image: `${cardArtFolder}/Champions/RethShadowDweller.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Oldblood","Mage"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Abyssal Collector: If this card is in your Tomb: Obliterate this card and Target 1 card in your Tomb; Retrieve Target.`
      }
    ]
  },
  {
    id: "935",
    name: "Bryce, Midnight Fang",
    image: `${cardArtFolder}/Champions/BryceMidnightFang.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Offer 4 Life",
    tags: ["Oldblood","Outlaw","Blademaster","Mage"],
    damage: 4,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward, Reach <span class="line-gap"></span> Shadow Slice (Exhaustion): Deal 2 Damage to your Opponent.`
      }
    ]
  },
  {
    id: "936",
    name: "Mara, Cleric of Ilmater",
    image: `${cardArtFolder}/Champions/MaraClericOfIlmater.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Righteous","Cleric","Protector","Blademaster","Mage"],
    damage: 2,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Lifesteal, Menace <span class="line-gap"></span> Channel Divinity (Exhaustion): Target 1 face-up Champion on the Zone; Target Gains 3 Life.`
      }
    ]
  },
  {
    id: "937",
    name: "Good Boy Guard Dog",
    image: `${cardArtFolder}/Champions/GoodBoyGuardDog.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock","Protector","Helper"],
    damage: 1,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Taskmaster <span class="line-gap"></span> Big Boy Bark: If an attack is declared (Reflex): Negate that attack, and if you do, reduce the attacking Champion's Damage by 1.`
      }
    ]
  },
  {
    id: "938",
    name: "Cottonball",
    image: `${cardArtFolder}/Champions/Cottonball.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock"],
    damage: 0,
    life: 1,
    damageThreshold: "4",
    abilities: [
      {
        text: `Sweaters for All: If Destroyed: Increase the Damage Threshold of all face-up non-Token Champions you control by 1.`
      }
    ]
  },
  {
    id: "939",
    name: "Big Ol' Barn",
    image: `${cardArtFolder}/Obelisks/BigOlBarn.png`,
    rarity: "Legendary",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Each time a Livestock is rallied to your Zone: Place 1 Produce Counter on this card for every card rallied (max. 5 per instance). <span class="line-gap"></span> Remove 5 Produce Counters from this card; Draw 2. <span class="line-gap"></span> Reflex: Obliterate this face-up card that you control; All face-up non-Token Champions you currently control have their Damage Thresholds increased by 1 until the end of this turn.`
      }
    ]
  },
  {
    id: "940",
    name: "Stampede!",
    image: `${cardArtFolder}/Reflex/Stampede.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "An Opponent’s Champion declares an attack while you control 2 or more Livestock",
    cost: "Sacrifice 1",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy the attacking Champion, and if you do, you cannot Rally during your next turn.`
      }
    ]
  },
  {
    id: "941",
    name: "Elise, Flourish Knight",
    image: `${cardArtFolder}/Champions/EliseFlourishKnight.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Noble","Oldblood","Knight","Blademaster","Specialist"],
    damage: 3,
    life: 1,
    damageThreshold: "3",
    abilities: [
      {
        text: `Reach, Warded <span class="line-gap"></span> Contingency Expert: This card gains Priority to attack Champions you are the original owner of, it also deals double Battle Damage against such Champions. You, and this card, take no Battle Damage from battles involving Champions you are the original owner of.`
      }
    ]
  },
  {
    id: "942",
    name: "Pollonius, Blissful Slayer",
    image: `${cardArtFolder}/Champions/PollonusBlissfulSlayer.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Sacrifice 1 with at least 1 attached Equipment",
    tags: ["Oldblood","Blademaster","Specialist"],
    damage: 5,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Board Breaker, Duelist, Priority, Second Strike <span class="line-gap"></span> Big Ass Sword: If this Champion Destroys another by Battle (Mandatory): Deal 1 Damage to your Opponent.`
      }
    ]
  },
  {
    id: "943",
    name: "Radkiel, Paladin of Tyr",
    image: `${cardArtFolder}/Champions/RadkielPaladinOfTyr.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Discard 2 Equipments",
    tags: ["Righteous","Radiant","Paladin","Blademaster","Protector"],
    damage: 4,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority <span class="line-gap"></span> Recall the Hammer: On Rally: Activate 1 Equipment from your Tomb (ignoring its cost). <span class="line-gap"></span> Final Verdict: If this card battles another Champion (Reflex): Offer 10 Life; Obliterate the other Champion.`
      }
    ]
  },
  {
    id: "944",
    name: "Aronan, Dungeon Delver",
    image: `${cardArtFolder}/Champions/AronanDungeonDelver.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Righteous","Paladin","Protector","Knight"],
    damage: 2,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Deathward, Defender <span class="line-gap"></span> Guarded Charge: If this card declares an attack: It gains Warded until the end of Damage Calculation.`
      }
    ]
  },
  {
    id: "945",
    name: "Zee, The Sheepdog",
    image: `${cardArtFolder}/Champions/ZeeTheSheepdog.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock","Protector","Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Heavy Hands <span class="line-gap"></span> Guard the Herd: Increase this card's Damage by 1 for every Token you control. If this card's Damage is 8 or Higher, this is the only card you can declare an attack with during your Battle Phase.`
      }
    ]
  },
  {
    id: "946",
    name: "Diabetes",
    image: `${cardArtFolder}/Equipments/Diabetes.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "Rally 1 Lollipop Token to your Opponent's Zone",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `During the End Phase of the attached Champion's controller (Mandatory): The controller of the attached Champion must Sacrifice 1 Token, or if they are unable to, Destroy the attached Champion.`
      }
    ]
  },
  {
    id: "947",
    name: "Back Pocket Dimension",
    image: `${cardArtFolder}/Rush/BackPocketDimension.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Obliterate Mill 20",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Activate 1 Equipment or Obelisk from your Deck (ignoring its cost). <br><br> Obliterate it when it leaves the Zone.`
      }
    ]
  },
  {
    id: "948",
    name: "Towering Tower Shield",
    image: `${cardArtFolder}/Equipments/ToweringTowerShield.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If attached to a Protector: Increase the attached Champion's Damage Threshold by 2, and if you do, decrease its Damage by 3. <span class="line-gap"></span> If a card(s) you control would be Destroyed (Reflex): Obliterate this card; Those cards are not Destroyed.`
      }
    ]
  },
  {
    id: "949",
    name: "Sorrow, Gloomstalker",
    image: `${cardArtFolder}/Champions/SorrowGloomstalker.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Oldblood","Protector","Blademaster","Specialist","Ranger"],
    damage: 2,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Priority <span class="line-gap"></span> Pick Through Loot: If this Champion Destroys another by Battle: Excavate 3; Add 1 revealed Equipment, and if you do, Obliterate the others.`
      }
    ]
  },
  {
    id: "950",
    name: "Tree-Chucking Woodchuck",
    image: `${cardArtFolder}/Champions/TreeChuckingWoodchuck.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Protector","Helper"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Woodchuck Chucking Wood: Destroy 1 face-up Obelisk you control and Target 1 face-up card on the Zone; Destroy Target.`
      }
    ]
  },
  {
    id: "951",
    name: "Caution! Wet Paint!",
    image: `${cardArtFolder}/Equipments/WatchingPaintDry.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Contained. <span class="line-gap"></span> If the attached Champion battles another (after Damage Calculation): Attach this card to the other battling Champion.`
      }
    ]
  },
  {
    id: "952",
    name: "No, It's My Birthday!",
    image: `${cardArtFolder}/Rush/NoMyBirthday.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "2 or more Champions have been Rallied this Phase",
    cost: "Target 2 Champions Rallied this Phase",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Targets immediately battle, with you deciding who is attacking and who is blocking.`
      }
    ]
  },
  {
    id: "953",
    name: "Gobbler",
    image: `${cardArtFolder}/Champions/Gobbler.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock"],
    damage: 0,
    life: 1,
    damageThreshold: "4",
    abilities: [
      {
        text: `Taunt <span class="line-gap"></span> Distractingly Lovely Plumage: If this card is attacked by a Commander: Destroy this card (before Damage Calculation).`
      }
    ]
  },
  {
    id: "954",
    name: "El Bambo",
    image: `${cardArtFolder}/Champions/ElBambo.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Livestock","Protector"],
    damage: 5,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Taunt <span class="line-gap"></span> Headlights: If there is a Commander on the Zone: This card cannot attack. <span class="line-gap"></span> If Destroyed: Target 1 face-up Commander Obelisk on the Zone; Destroy Target. This effect bypasses Repair Specialist.`
      }
    ]
  },
  {
    id: "955",
    name: "Maize Maze",
    image: `${cardArtFolder}/Obelisks/MaizeMaze.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Champions cannot declare attacks. <span class="line-gap"></span> Starting the turn after you activate this card, During your End Phase (Mandatory): Sacrifice 2 Livestock, or if you are unable to, Destroy this card.`
      }
    ]
  },
  {
    id: "956",
    name: "Cure for Anxiety... And Consciousness.",
    image: `${cardArtFolder}/Equipments/OneWeirdTrick.png`,
    rarity: "Legendary",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Non-Believer, but reduce its Damage to 0 and it can no longer declare attacks, or activate any of its effects.`
      }
    ]
  },
  {
    id: "957",
    name: "Ambulance for Hire",
    image: `${cardArtFolder}/Obelisks/AmbulanceForHire.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Maintenance <span class="line-gap"></span> Either Player can, when a Champion they control would be Destroyed (Reflex): Discard 2; Their Champion is not Destroyed, and if it was face-up, it is instead reduced to 1 Life. Then, they gain control of this card (if they did not already control it).`
      }
    ]
  },
  {
    id: "958",
    name: "Lobter",
    image: `${cardArtFolder}/Champions/Lobter.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Driftmarked","Protector","Blademaster"],
    damage: 1,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Snip Snip (Exhaustion): Declare 1 Champion effect name; Effects with that name are negated while this card remains face-up on the Zone.`
      }
    ]
  },
  {
    id: "959",
    name: "Wide-Stance Stan",
    image: `${cardArtFolder}/Champions/WideStan.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Citizen"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Manspreading Master: This card can be the Commander of up to 2 Obelisks at a time.`
      }
    ]
  },
  {
    id: "960",
    name: "Hundred-Gallon Hat",
    image: `${cardArtFolder}/Equipments/HundredGallonHat.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Taunt. <span class="line-gap"></span> When a non-Champion effect Targets this card, or the Champion it's attached to, add 1 20-Gallon Counter to this card. <span class="line-gap"></span> While this card has 5, or more, 20-Gallon Counters on it: The attached Champion gains Bulletproof and Warded.`
      }
    ]
  },
  {
    id: "961",
    name: "Cinder, Heavy Metal Bard",
    image: `${cardArtFolder}/Champions/CinderHeavyMetalBard.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Discard 1 Champion",
    tags: ["Crescendo","Blademaster","Mage"],
    damage: 7,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bloodrage, Heavy Hands, Necrocharge <span class="line-gap"></span> Deafening Performance: On Rally (Mandatory): Target 1 face-up Champion on the Zone; Reduce Target to 1 Life. <span class="line-gap"></span> Live to Rock: If this card is in your Tomb: Obliterate 7 other Champions from your Tomb; Resurrect this card.`
      }
    ]
  },
  {
    id: "1021",
    name: "Guardian Angel",
    image: `${cardArtFolder}/Champions/GuardianAngel.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Radiant","Protector"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Holy Barrier: If this card is in your Tomb (Reflex): Obliterate this card; Negate your Opponent's next attack.`
      }
    ]
  },
  {
    id: "1081",
    name: "Bri, Elemental Master",
    image: `${cardArtFolder}/Champions/BriElementalMaster.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "Reflex: A Champion you control left the Zone",
    cost: "Offer 2 Life",
    tags: ["Enlightened","Protector","Monk"],
    damage: 5,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Taunt, Unstoppable <span class="line-gap"></span> Deflect Weapons: If this Champion battles another that has attached Equipments: Reduce the Battle Damage this card takes by its Damage Threshold.`
      }
    ]
  },
  {
    id: "1082",
    name: "Ahm, High-Kick Legend",
    image: `${cardArtFolder}/Champions/AhmHighKickLegend.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Bounce 1 Champion you control",
    tags: ["Enlightened","Monk"],
    damage: 1,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Taskmaster <span class="line-gap"></span> Jump! (Reflex): Bounce this card.`
      }
    ]
  },
  {
    id: "1083",
    name: "Elemental Infusion: Fire",
    image: `${cardArtFolder}/Equipments/ElementalInfusionFire.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Monk, or a Champion with at least 1 other attached Equuipment",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the attached Champion's Damage by 1. <span class="line-gap"></span> At the end of a battle in which the attached Champion dealt Damage: Target 1 face-up Equipment or Obelisk on the Zone; Destroy Target.`
      }
    ]
  },
  {
    id: "1084",
    name: "Elemental Infusion: Earth",
    image: `${cardArtFolder}/Equipments/ElementalInfusionEarth.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Monk, or a Champion with at least 1 other attached Equuipment",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the attached Champion's Damage Threshold by 1. <span class="line-gap"></span> At the end of a battle involving the attached Champion: Target 1 face-up Champion on the Zone; Deal 1 Damage to Target.`
      }
    ]
  },
  {
    id: "1085",
    name: "Elemental Infusion: Water",
    image: `${cardArtFolder}/Equipments/ElementalInfusionWater.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Monk, or a Champion with at least 1 other attached Equuipment",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Reduce the Damage the attached Champion takes by 1. <span class="line-gap"></span> At the end of a battle involving the attached Champion: Target 1 face-up card on the Zone; Flip Target face-down.`
      }
    ]
  },
  {
    id: "1086",
    name: "Elemental Infusion: Air",
    image: `${cardArtFolder}/Equipments/ElementalInfusionAir.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Monk, or a Champion with at least 1 other attached Equuipment",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Until the attached Champion declares an attack: The attached Champion gains Veilbind and Warded. <span class="line-gap"></span> At the end of a battle in which the attached Champion dealt Damage: Target 1 face-up card on the Zone; Spin Target.`
      }
    ]
  },
  {
    id: "1087",
    name: "Kaya, The Rose",
    image: `${cardArtFolder}/Champions/KayaTheRose.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Spin 2 cards you control of different types",
    tags: ["Enlightened","Monk"],
    damage: 3,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Deathcurse, Lifetouch, Priority <span class="line-gap"></span> Rose's Thorns: If Destroyed by Battle: Destroy the other battling Champion.`
      }
    ]
  },
  {
    id: "1088",
    name: "Hyup, Palm-Strike Striker",
    image: `${cardArtFolder}/Champions/HyupPalmStrikeStriker.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Bounce 1 card you control",
    tags: ["Enlightened","Monk"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Taunt <span class="line-gap"></span> Knock Back: If this card is Targeted for an attack (Reflex): Negate that attack.`
      }
    ]
  },
  {
    id: "1141",
    name: "Voyage, Pactbound Pirate",
    image: `${cardArtFolder}/Champions/Voyage.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Driftmarked","Hellfire","Mage","Blademaster","Outlaw"],
    damage: 4,
    life: 4,
    damageThreshold: "1",
    abilities: [
      {
        text: `Priority, Veilbind <span class="line-gap"></span> Deepen the Pact: On Rally: Offer up to 3 Life from this card; Increase this card's Damage by the amount offered. <span class="line-gap"></span> Pactbound: The first time each turn this card would be Destroyed (Mandatory, Reflex): Offer 4 Life; It is not Destroyed.`
      }
    ]
  },
  {
    id: "1142",
    name: "Sharkuterie",
    image: `${cardArtFolder}/Champions/Sharkuterie.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Driftmarked","Trickster","Shark"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Chomp (Flip): Move this card to your Arsenal and Target 1 card on the Zone; Target's effects are negated, and Target cannot attack, block, be activated, or activate any of its effects, so long as this card remains face-up in your Arsenal.`
      }
    ]
  },
  {
    id: "1143",
    name: "Card Shark",
    image: `${cardArtFolder}/Champions/CardShark.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Discard 1",
    tags: ["Driftmarked","Outlaw","Shark"],
    damage: 1,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Blood in the Water: Increase this card's Damage by 1 for every face-up Champion on the Zone whose current Life is lower than their starting Life.`
      }
    ]
  },
  {
    id: "1144",
    name: "Pool Shark",
    image: `${cardArtFolder}/Champions/PoolShark.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Driftmarked","Megalith","Shark"],
    damage: 7,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Contained`
      }
    ]
  },
  {
    id: "1145",
    name: "Melody, Pactbroken Bard",
    image: `${cardArtFolder}/Champions/MelodyPactbrokenBard.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Obliterate Mill 6",
    tags: ["Driftmarked","Crescendo","Blademaster","Trickster","Mage"],
    damage: 0,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Taunt <span class="line-gap"></span> Song of Power: Increase the Damage of all other face-up Champions you control by 1. <span class="line-gap"></span> Pactbroken: If this card is Targeted (Reflex): Bounce this card, and if you do, Obliterate Mill 6.`
      }
    ]
  },
  {
    id: "1146",
    name: "Lootin' Pirate Gary",
    image: `${cardArtFolder}/Champions/LootinPirateGary.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Driftmarked","Outlaw"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Offload the Looter: Discard 1; Transfer control of this card to your Opponent. <span class="line-gap"></span> Pass It Back: During the End Phase (Mandatory): Add the top card of your Deck to your Opponent's Hand.`
      }
    ]
  },
  {
    id: "1147",
    name: "Loan Shark",
    image: `${cardArtFolder}/Champions/LoanShark.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Driftmarked","Outlaw","Shark"],
    damage: 1,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `High-Interest Loan: Either Player can Offer 3 Life; Then Rally 1 Shark Token to their Zone, it is Destroyed during the End Phase.`
      }
    ]
  },
  {
    id: "1148",
    name: "Bull Shark",
    image: `${cardArtFolder}/Champions/BullShark.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Driftmarked","Royal","Shark"],
    damage: 2,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Market Opening: During your Intermission Phase (Mandatory): Declare 1 card type; Excavate 1. If the revealed card's type matches what you declared, add it. Otherwise, obliterate it.`
      }
    ]
  },
  {
    id: "1201",
    name: "The Fool",
    image: `${cardArtFolder}/Champions/TheFool.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Foretold","Citizen"],
    damage: 0,
    life: 1,
    damageThreshold: "3",
    abilities: [
      {
        text: `A New Beginning: On Rally: Your Opponent Chooses, Either: Draw 2, or Increase this card's Damage Threshold by 1. If you have no cards in your Tomb: You can choose the effect instead.`
      }
    ]
  },
  {
    id: "1202",
    name: "The High Priestess",
    image: `${cardArtFolder}/Champions/TheHighPriestess.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Foretold","Mage"],
    damage: 1,
    life: 1,
    damageThreshold: "2",
    abilities: [
      {
        text: `I Call Upon the Gods: On Rally: Your Opponent Chooses, Either: This card's Damage becomes 6, or its Life becomes 9. <span class="line-gap"></span> Final Reading: If Sent to Tomb: Excavate 3, and if you do, your Opponent chooses 1 revealed card for you to add.`
      }
    ]
  },
  {
    id: "1203",
    name: "The Empress",
    image: `${cardArtFolder}/Champions/TheEmpress.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Discard 2",
    tags: ["Foretold","Royal"],
    damage: 2,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `One or All: On Rally: Your Opponent Chooses, Either: Other Champions you control cannot be Damaged while this card remains face-up on the Zone, or this card's Damage becomes 7 and all other Champions you control cannot deal Battle Damage while this card remains face-up on the Zone.`
      }
    ]
  },
  {
    id: "1204",
    name: "The Emperor",
    image: `${cardArtFolder}/Champions/TheEmperor.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Discard 1",
    tags: ["Foretold","Royal"],
    damage: 3,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Kingdom Come: On Rally: Your Opponent Chooses, Either: This card's Damage becomes 7, or this card gains Greedy and Menace.`
      }
    ]
  },
  {
    id: "1205",
    name: "Strength",
    image: `${cardArtFolder}/Champions/Strength.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Foretold","Protector"],
    damage: 2,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Unbreaking Force: Discard 1; Your Opponent Chooses, Either: Increase this card's Damage and Damage Threshold by 1, or increase this card's Life by 3.`
      }
    ]
  },
  {
    id: "1206",
    name: "Death",
    image: `${cardArtFolder}/Champions/Death.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Obliterate 5 Champions from your Tomb",
    tags: ["Foretold","Undead"],
    damage: 2,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `It Comes For You: Sacrifice 1; Your Opponent Chooses, Either: Increase this card's Damage and Life by 2, or reduce a Champion they control's Damage and Life by 2.`
      }
    ]
  },
  {
    id: "1207",
    name: "The Hanged Man",
    image: `${cardArtFolder}/Champions/TheHangedMan.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Foretold","Outlaw"],
    damage: 2,
    life: 1,
    damageThreshold: "3",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Eternal Suffering: If Destroyed: Your Opponent Chooses, Either: Draw 2, or retrieve this card.`
      }
    ]
  },
  {
    id: "1208",
    name: "Temperance",
    image: `${cardArtFolder}/Champions/Temperance.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Foretold","Protector"],
    damage: 3,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Stalwart: On Rally: Your Opponent Chooses, Either: This card is unaffected by the effects of non-Champion cards, or this card gains Bulletproof.`
      }
    ]
  },
  {
    id: "1209",
    name: "The Devil",
    image: `${cardArtFolder}/Champions/TheDevil.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "",
    cost: "Obliterate Mill 30",
    tags: ["Foretold","Hellfire"],
    damage: 20,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Deathpower, Taunt <span class="line-gap"></span> We Meet on the Roadside: On Rally: Your Opponent Chooses, Either: Deal 3 Damage to your Opponent, or you Offer X Life.`
      }
    ]
  },
  {
    id: "1210",
    name: "The Magician",
    image: `${cardArtFolder}/Actions/TheMagician.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Your Opponent Chooses, Either: Add 1 Action, or Your Opponent selects 1 Action from either their Hand, face-down Arsenal, Reserve, or Tomb for you to obtain.`
      }
    ]
  },
  {
    id: "1211",
    name: "The Lovers",
    image: `${cardArtFolder}/Actions/TheLovers.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Your Opponent Chooses, Either: Both Players Draw 1, or Both Players Discard 1.`
      }
    ]
  },
  {
    id: "1212",
    name: "The Moon",
    image: `${cardArtFolder}/Equipments/TheMoon.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Decrease the attached Champion's Damage by 2, and it gains Invisible and Unstoppable. <span class="line-gap"></span> If the attached Champion declares an attack: Your Opponent Chooses, Either: Your Opponent Draws 1, or Destroy this card.`
      }
    ]
  },
  {
    id: "1213",
    name: "The Sun",
    image: `${cardArtFolder}/Equipments/TheSun.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the attached Champion's Damage by 3, and it gains Taunt. <span class="line-gap"></span> If the attached Champion declares an attack: Your Opponent Chooses, Either: Your Opponent can activate 1 Reflex with the partial condition \"When your Opponent declares an attack.\" from their Deck, or flip this card face-down.`
      }
    ]
  },
  {
    id: "1214",
    name: "The Hierophant",
    image: `${cardArtFolder}/Obelisks/TheHierophant.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Bounce 1 face-up Basic you control, and if you do, you can Rally 1 Basic from your Hand (ignoring its cost). <span class="line-gap"></span> If you Rally a Basic Foretold with this effect, and it has an \"On Rally\" effect, then your Opponent Chooses, Either: You get to choose which \"On Rally\" effect is activated, or your Opponent discards 1.`
      }
    ]
  },
  {
    id: "1215",
    name: "The Chariot",
    image: `${cardArtFolder}/Obelisks/TheChariot.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `When the controller of this card activates its effect their Opponent Chooses, Either: Draw 2, then Discard 1, or Retrieve 1 Obelisk from either Tomb.`
      }
    ]
  },
  {
    id: "1216",
    name: "The Hermit",
    image: `${cardArtFolder}/Obelisks/TheHermit.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `When the controller of this card activates its effect their Opponent Chooses, Either: Obliterate 1 Champion you control, and if you do, Obliterate 1 Champion your Opponent controls, or Obliterate your Hand (minimum of 1 card), and if you do, draw the same number of cards plus 1. <span class="line-gap"></span> If you control exactly 1 Champion: You can choose this card's effect.`
      }
    ]
  },
  {
    id: "1217",
    name: "Wheel of Fortune",
    image: `${cardArtFolder}/Obelisks/WheelOfFortune.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `During your End Phase (Mandatory): Roll a six-sided die, and apply the following effect: <span class="line-gap"></span> 1 • Draw 1. <span class="line-gap"></span> 2 • Discard 1. <span class="line-gap"></span> 3 • Obliterate 1 Champion on the Zone. <span class="line-gap"></span> 4 • Obliterate 1 Champion you control. <span class="line-gap"></span> 5 • Increase the Damage of all Champions you control by 2 until the end of your next turn. <span class="line-gap"></span> 6 • Offer 4 Life. <span class="line-gap"></span> Before rolling, Your Opponent Chooses, Either: You receive the effect of this card, or they receive the effect of this card.`
      }
    ]
  },
  {
    id: "1218",
    name: "Justice",
    image: `${cardArtFolder}/Obelisks/Justice.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `If a die would be rolled or a coin would be flipped (Reflex): You choose the result instead. This effect can be declared, activated, and resolved mid-Path. <span class="line-gap"></span> During your End Phase: Your Opponent Chooses, Either: Offer 1 Life, or Your Opponent Draws 1.`
      }
    ]
  },
  {
    id: "1219",
    name: "The Tower",
    image: `${cardArtFolder}/Obelisks/TheTower.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `When the controller of this card activates its effect their Opponent Chooses, Either: Destroy all Champions both Players control, or Destroy all other cards in both Players' Arsenals.`
      }
    ]
  },
  {
    id: "1220",
    name: "The World",
    image: `${cardArtFolder}/Obelisks/TheWorld.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The number of Champions your Opponent controls cannot be increased above the number that you control. <span class="line-gap"></span> During your End Phase (Mandatory): Your Opponent Chooses, Either: Your Opponent Draws 2, or Discard 2.`
      }
    ]
  },
  {
    id: "1221",
    name: "The Star",
    image: `${cardArtFolder}/Rush/TheStar.png`,
    rarity: "Legendary",
    type: "Rush",
    condition: "",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Your Opponent Chooses, Either: Draw an extra card during your next Draw Phase, or your Opponent does not conduct their normal draw during their next Draw Phase. <span class="line-gap"></span> If your Life is lower than your Opponent's: You choose which effect to activate.`
      }
    ]
  },
  {
    id: "1222",
    name: "Judgement",
    image: `${cardArtFolder}/Reflex/Judgement.png`,
    rarity: "Superior",
    type: "Reflex",
    condition: "A card or effect is activated",
    cost: "Discard 1",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Your Opponent Chooses, Either: Negate the activation, and if you do, Destroy it, or Draw 2.`
      }
    ]
  },
  {
    id: "1223",
    name: "Matching Uniform",
    image: `${cardArtFolder}/Equipments/MatchingUniform.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "Target 1 face-up Champion on the Zone",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion's Damage and Life become equal to the Target's at the time of activation.`
      }
    ]
  },
  {
    id: "1224",
    name: "Trophy Case",
    image: `${cardArtFolder}/Obelisks/TrophyCase.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The first time each turn a Champion you control Destroys another by battle (Mandatory): Rally 1 Trophy Token to your Zone. <br><br> When this card leaves the Zone: Destroy all Tokens rallied by this card.`
      }
    ]
  },
  {
    id: "1225",
    name: "Super-Effective Hit!",
    image: `${cardArtFolder}/Rush/CriticalHit.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Target 1 face-up Champion you control and 1 your Opponent controls",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Your Opponent's Champion is dealt double your Champion's Damage, and if they do, Destroy your Champion.`
      }
    ]
  },
  {
    id: "1226",
    name: "Let's Fight God!",
    image: `${cardArtFolder}/Obelisks/LetsFightGod.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `When a Champion with 1 Damage that you control battles a Champion with 5 or more Damage: Your Champion deals triple Battle Damage, and ignores Damage Thresholds. Additionally, you, and your Champion, take no Damage from that battle.`
      }
    ]
  },
  {
    id: "1227",
    name: "Let Me Re-Introduce Myself...",
    image: `${cardArtFolder}/Equipments/ReIntroducing.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Upon Activation: Declare 1 Tag from the attached Champion. That Tag no longer applies while this card is attached.`
      }
    ]
  },
  {
    id: "1228",
    name: "Mortal Enemy",
    image: `${cardArtFolder}/Equipments/MortalEnemy.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Upon Activation: Declare 1 Champion Tag. The attached Champion deals double Battle Damage against Champions with that Tag.`
      }
    ]
  },
  {
    id: "1229",
    name: "Hazardous Terrain",
    image: `${cardArtFolder}/Equipments/HazardousTerrain.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion cannot declare attacks. While this card is attached, each time your Opponent rallies a face-up Champion, those Champion(s) take 1 Damage.`
      }
    ]
  },
  {
    id: "1230",
    name: "Side Strike",
    image: `${cardArtFolder}/Actions/SideStrike.png`,
    rarity: "Rare",
    type: "Action",
    condition: "",
    cost: "Exhaust 1 face-up Champion you control and Target 1 face-up card in your Opponent's Arsenal",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy Target.`
      }
    ]
  },
  {
    id: "1231",
    name: "Switch In",
    image: `${cardArtFolder}/Actions/SwitchIn.png`,
    rarity: "Common",
    type: "Action",
    condition: "You do not control any face-up Champions",
    cost: "Discard 2",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Rally 1 Champion from your Reserve face-up (ignoring its cost).`
      }
    ]
  },
  {
    id: "1232",
    name: "Headlong Rush",
    image: `${cardArtFolder}/Actions/HeadlongRush.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Target 1 face-up Champion you control and 1 other face-up Champion on the Zone",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Exhaust your Champion, and if you do, both Targets take your Champion's Damage.`
      }
    ]
  },
  {
    id: "1233",
    name: "Potion of Healing",
    image: `${cardArtFolder}/Actions/PotionOfHealing.png`,
    rarity: "Rare",
    type: "Action",
    condition: "You cannot declare an attack this turn",
    cost: "Target 1 face-up Champion you control that is below its starting Life",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Restore Target to its starting Life.`
      }
    ]
  },
  {
    id: "1234",
    name: "Hit It With A Rake!",
    image: `${cardArtFolder}/Actions/HitItWithARake.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Target 1 card in your Opponent's Tomb",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Obliterate Target.`
      }
    ]
  },
  {
    id: "1235",
    name: "A Groundhog and a Dream",
    image: `${cardArtFolder}/Actions/GroundhogAndADream.png`,
    rarity: "Rare",
    type: "Action",
    condition: "You control a face-up Champion with 1 or less Damage",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `All Champions you currently control gain Unstoppable until the End Phase. Regardless of an affected Champion's Damage value, when it attacks this turn, it always deals 1 Damage. After attacking with an affected Champion, flip it face-down.`
      }
    ]
  },
  {
    id: "1236",
    name: "Defense Drop",
    image: `${cardArtFolder}/Actions/DefenseDrop.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Target 1 face-up Champion you control and 1 your Opponent controls",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Exhaust your Champion, and if you do, reduce your Opponent's Champion's Damage Threshold by 2 (to a minimum of 1).`
      }
    ]
  },
  {
    id: "1237",
    name: "Rules Violation",
    image: `${cardArtFolder}/Actions/RulesViolation.png`,
    rarity: "Common",
    type: "Action",
    condition: "",
    cost: "Exhaust 1 face-up Champion you control",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Move 1 face-up Champion on the Zone to the Reserve.`
      }
    ]
  },
  {
    id: "1238",
    name: "Protect!",
    image: `${cardArtFolder}/Reflex/Protect.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "An Opponent’s Champion declares an attack while the only face-up Champions you control have 1 or less Damage",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the attack, and if you do, end the Battle Phase.`
      }
    ]
  },
  {
    id: "1239",
    name: "Withdraw",
    image: `${cardArtFolder}/Reflex/Withdraw.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Move 1 face-up Champion you control to the Reserve. It cannot be Rallied until after the end of the next turn.`
      }
    ]
  },
  {
    id: "1240",
    name: "Slapback",
    image: `${cardArtFolder}/Reflex/Slapback.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "A Champion you control was Destroyed by battle",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy the other battling Champion.`
      }
    ]
  },
  {
    id: "1241",
    name: "Go to Sleep! Go to Sleep! Go to-",
    image: `${cardArtFolder}/Reflex/GoToSleep.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "",
    cost: "Target 1 face-up Champion on the Zone and reduce all face-up Champions you control to 1 Life (minimum of 1)",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Flip Target face-down.`
      }
    ]
  },
  {
    id: "1242",
    name: "Herding Cats",
    image: `${cardArtFolder}/Rush/HerdingCats.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "Target 1 Champion your Opponent controls",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `All face-up Champions you currently control gain Priority until the end of this turn, only if they did not already have it, and only against the Target. Also, all of your Champions affected by this card cannot attack your Opponent directly this turn.`
      }
    ]
  },
  {
    id: "1243",
    name: "Sustainable Practices",
    image: `${cardArtFolder}/Obelisks/SustainablePractices.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `During your End Phase (Mandatory): Sacrifice 1, and if you do, all face-up Champions you control gain 1 Life. <span class="line-gap"></span> If you are unable to Sacrifice 1: You take 1 Damage.`
      }
    ]
  },
  {
    id: "1244",
    name: "Plot Armor",
    image: `${cardArtFolder}/Equipments/PlotArmor.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "",
    cost: "Sacrifice 2",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Reflex: If the attached Champion would be Destroyed: Sacrifice 1; It is not Destroyed.`
      }
    ]
  },
  {
    id: "1245",
    name: "Cuteness Aggression",
    image: `${cardArtFolder}/Equipments/CutenessAggression.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Deathtouch, but it only applies against Champions with 0 Damage.`
      }
    ]
  },
  {
    id: "1246",
    name: "It Was Me All Along",
    image: `${cardArtFolder}/Reflex/ItWasMeAllAlong.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "A face-up Champion you control is Targeted while you control a face-down Champion",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Flip Target face-down, and if you do, flip 1 other face-down Champion you control face-up, and if you do, it becomes the new Target.`
      }
    ]
  },
  {
    id: "1247",
    name: "Wicked Pipe Shredder",
    image: `${cardArtFolder}/Equipments/WickedPipeShredder.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Each time in a turn you activate a card(s): Place 1 Combo Counter on this card for card activated (max. 5 per instance). <span class="line-gap"></span> During the End Phase, if this card has any Combo Counters on it: Remove all Combo Counters from this card, and if you do, increase the Damage of the attached Champion by the number of counters removed.`
      }
    ]
  },
  {
    id: "1248",
    name: "Boom! Crab Hands!",
    image: `${cardArtFolder}/Equipments/BoomCrabHands.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy all other Equipments this Champion has attached. This is the only Equipment this Champion can have attached. <span class="line-gap"></span> Increase the attached Champion's Damage by 3.`
      }
    ]
  },
  {
    id: "1249",
    name: "Total Tubular Wave Crester",
    image: `${cardArtFolder}/Equipments/TotalTubularWaveCrester.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Effects that would Destroy multiple cards you control do not Destroy any cards.`
      }
    ]
  },
  {
    id: "1250",
    name: "Irrational Exuberance",
    image: `${cardArtFolder}/Equipments/IrrationalExuberance.png`,
    rarity: "Legendary",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `After a battle resolves involving the attached Champion: Increase the attached Champion's Damage by 1. <span class="line-gap"></span> If this face-up card leaves your Zone: Discard your entire Hand.`
      }
    ]
  },
  {
    id: "1251",
    name: "Why Won't You Die?!",
    image: `${cardArtFolder}/Rush/WhyWontYouDie.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "Can only be activated during the Battle Phase",
    cost: "Destroy all face-up Equipments you control (minimum of 1) and Target 1 face-up Champion that blocked or was attacked this Phase",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy Target.`
      }
    ]
  },
  {
    id: "1252",
    name: "Self-Destruct",
    image: `${cardArtFolder}/Reflex/SelfDestruct.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "A card you control is Targeted",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy Target.`
      }
    ]
  },
  {
    id: "1253",
    name: "Landmine Sally",
    image: `${cardArtFolder}/Champions/LandmineSally.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Frontier","Citizen"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Can't Stop Me! I Can't Read!: If this card is face-up: Destroy it. <span class="line-gap"></span> Right Where I Left It (Flip): If flipped face-up by battle: Destroy this card, and the other battling Champion.`
      }
    ]
  },
  {
    id: "1254",
    name: "Bones Malone",
    image: `${cardArtFolder}/Champions/BonesMalone.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound","Undead","Outlaw"],
    damage: 1,
    life: 9,
    damageThreshold: "1",
    abilities: [
      {
        text: `No Regrets: If Life is offered from this card (Reflex): Target 1 Equipment in either Tomb; Retrieve Target.`
      }
    ]
  },
  {
    id: "1255",
    name: "Zombitten Hyperchondriac",
    image: `${cardArtFolder}/Champions/ZombittenHyperchondriac.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound","Undead","Citizen"],
    damage: 1,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> Totally Not Infected: Non-Undead Champions Damaged in battle by this card are Destroyed during the End Phase. <span class="line-gap"></span> I'm Fine Guys: During your End Phase (Mandatory): Deal 1 Damage to this card.`
      }
    ]
  },
  {
    id: "1256",
    name: "Reanimated Amputee",
    image: `${cardArtFolder}/Champions/ReanimatedAmputee.png`,
    rarity: "Common",
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Cryptbound","Undead"],
    damage: 0,
    life: 1,
    damageThreshold: "2",
    abilities: [
      {
        text: `Preferred Parking: Neither Player can Mount cards while this card is not a Commander. This card can be mounted by your Opponent's standard Mount effects to a Commander Obelisk they control. You gain the benefits of that Commander Obelisk, and can declare its effects, despite not directly controlling it.`
      }
    ]
  },
  {
    id: "1257",
    name: "Send Us Your Bones",
    image: `${cardArtFolder}/Actions/SendUsYourBones.png`,
    rarity: "Superior",
    type: "Action",
    condition: "",
    cost: "Target 1 face-up Champion you control",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Increase Target's Life by 1 per Champion in your Opponent's Tomb.`
      }
    ]
  },
  {
    id: "1258",
    name: "Bag o' Bones",
    image: `${cardArtFolder}/Equipments/BagOBones.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains the Undead Tag. <span class="line-gap"></span> If the Opponent of the attached Champion's controller controls any Knights: Those Champions gain Priority only to Target the attached Champion with attacks, and they must, if able, attack the attached Champion.`
      }
    ]
  },
  {
    id: "1259",
    name: "Bernard's Posthumous Weekend",
    image: `${cardArtFolder}/Equipments/BernardsPosthumousWeekend.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "",
    cost: "Target 2 face-up Champions you control and 1 Champion in your Tomb",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Resurrect Target, and if you do, attach this card to it, also the 2 Targets on your Zone cannot attack, or activate any effects, while this card remains face-up on the Zone. <span class="line-gap"></span> The attached Champion gains the Undead Tag and Bulletproof, but it cannot attack, or activate any of its effects. If this card, or either of the 2 Targets, leaves the Zone: Obliterate the attached Champion.`
      }
    ]
  },
  {
    id: "1260",
    name: "Souls for Gold!",
    image: `${cardArtFolder}/Obelisks/SoulsForGold.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "",
    cost: "Reduce your Life to 1",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the Damage of all face-up Champions you control by 3. All face-up Champions you control gain Deathward. <span class="line-gap"></span> If this face-up card leaves the Zone: You lose the game.`
      }
    ]
  },
  {
    id: "1261",
    name: "Throne of Bones",
    image: `${cardArtFolder}/Obelisks/ThroneOfBones.png`,
    rarity: "Common",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Obliterate 3 Champions from your Tomb; Reduce the Damage Thresholds of all face-up Champions your Opponent currently controls by 1 (to a minimum of 1).`
      }
    ]
  },
  {
    id: "1262",
    name: "Mr Bones' Wild Ride",
    image: `${cardArtFolder}/Obelisks/MrBonesWildRide.png`,
    rarity: "Legendary",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Must first be mounted by a Champion you control. You can also designate your Opponent's Champions as this card's Commander. If this card would have a Commander mounted to it, Obliterate its Commander Obelisk. <span class="line-gap"></span> Mounted: This card's Commander gains Contained. <span class="line-gap"></span> If this card's Commander leaves the Zone: This card is not Destroyed, and a new Commander must be designated. If you are unable to, Obliterate this card. <span class="line-gap"></span> If this card would be Destroyed: Destroy its Commander instead.`
      }
    ]
  },
  {
    id: "1263",
    name: "Zombonie",
    image: `${cardArtFolder}/Obelisks/Zombonie.png`,
    rarity: "Rare",
    type: "Obelisk",
    condition: "",
    cost: "",
    tags: ["Commander","Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Mount <span class="line-gap"></span> Mounted: Increase this card's Commander's Damage Threshold by 1. <span class="line-gap"></span> Mounted: Sacrifice 1 Undead; Increase this card's Commander's Life by 2. <span class="line-gap"></span> Mounted: Target 1 Undead your Opponent controls; Destroy Target, and if you do, Rally 1 Mulch Token to your Opponent's Zone.`
      }
    ]
  },
  {
    id: "1264",
    name: "Rattle 'em Boys!",
    image: `${cardArtFolder}/Rush/RattleEmBoys.png`,
    rarity: "Superior",
    type: "Rush",
    condition: "",
    cost: "",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Halve the Life of every face-up non-Undead Champion on the Zone (rounded down, to a minimum of 1).`
      }
    ]
  },
  {
    id: "1265",
    name: "Another for the Fire",
    image: `${cardArtFolder}/Reflex/AnotherForTheFire.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "An Undead was Destroyed and sent from the Zone to the Tomb or Void",
    cost: "Target 1 Champion on the Zone",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Destroy Target.`
      }
    ]
  }
];