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
        text: `Deathward <br><br> If Sent to Tomb: Retrieve 1 other Undead Champion.`,
        keywords: ["Deathward"],
        effect1name: "If Sent to Tomb",
        effect2name: "",
        effect3name: "",
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
        text: `Bloodrage, Deathward <br><br> If Sent to Tomb: Resurrect this card, but Obliterate it when it leaves the Zone.`,
        keywords: ["Deathward", "Bloodrage"],
        effect1name: "If Sent to Tomb",
        effect2name: "",
        effect3name: "",
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
    tags: ["Cryptbound", "Necromancer", "Mage"],
    damage: 5,
    life: 10,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward, Warded <br><span class="line-gap"></span> On Rally: Excavate 3; Add 1 revealed, Obliterate the other 2. <span class="line-gap"></span> Mind Augus (Exhaustion): Excavate 5 from your Opponent&apos;s Deck; Obliterate 1, return the rest in the same order. <span class="line-gap"></span> Shattered Connection (Reflex): If this card would be destroyed: Discard 1 or Sacrifice 1; it is not destroyed.`,
        keywords: ["Deathward", "Warded"],
        effect1name: "On Rally",
        effect2name: "Mind Augus",
        effect3name: "Shattered Connection",
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
    tags: ["Cryptbound", "Hellfire", "Undead", "Megalith"],
    damage: 1,
    life: 10,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bloodrage, Deathward <br><span class="line-gap"></span> Soulburn (Exhaustion): Offer up to a total of 9 Life from Champions you control (in increments of 3); Destroy 1 card on the Zone per 3 Life offered.`,
        keywords: ["Bloodrage", "Deathward"],
        effect1name: "Soulburn",
        effect2name: "",
        effect3name: "",
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
    tags: ["Cryptbound", "Hellfire", "Undead", "Megalith"],
    damage: 20,
    life: 7,
    damageThreshold: "2",
    abilities: [
      {
        text: `Deathpower <br><span class="line-gap"></span> On Rally (Mandatory): Obliterate all cards in both Players' Tombs. <span class="line-gap"></span> Break the Seal: Resurrect or Unleash 1 Undead. Destroy all Champions Resurrected this way if this card leaves the Zone. <span class="line-gap"></span> Fateseal (Reflex, Exhaustion): Obliterate Mill 10; Reduce the Life of all other Champions to 1.`,
        keywords: ["Deathpower"],
        effect1name: "On Rally",
        effect2name: "Break the Seal",
        effect3name: "Fateseal",
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
    tags: ["Cryptbound", "Hellfire", "Undead", "Megalith"],
    damage: 5,
    life: 5,
    damageThreshold: 4,
    abilities: [
      {
        text: `Deathward <br><span class="line-gap"></span> On Rally: Bury 1. <span class="line-gap"></span> Rend Soul (Exhaustion): Obliterate 1 card you control; Obliterate 1 card on the Zone. <span class="line-gap"></span> If Obliterated: During the next Intermission Phase, Unleash 1 Undead.`,
        keywords: ["Deathward"],
        effect1name: "On Rally",
        effect2name: "Rend Soul",
        effect3name: "If Obliterated",
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
        text: "Deathward, Necrocharge <br><br> On Rally (Mandatory): Mill 3.",
        keywords: ["Deathward","Necrocharge"],
        effect1name: "On Rally",
        effect2name: "",
        effect3name: "",
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
        text: `Library Assistant: Excavate 3; Add 1 revealed Undead or Helper, or a card that mentions an Undead or Helper. <span class="line-gap"></span> Powerful Core: Sacrifice this card and Target 1 other Undead in your Tomb; Resurrect Target. The resurrected Champion gains Warded. <span class="line-gap"></span> Helping Hand: If card is in your Tomb: Obliterate this card and Target 1 Undead or Helper in your Tomb; Resurrect Target.`,
        keywords: ["Warded"],
        effect1name: "Library Assistant",
        effect2name: "Powerful Core",
        effect3name: "Helping Hand",
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
    cost: "Offer half your Life",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Resurrect or Unleash up to a total of 3 Undead.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Target 1 Undead in either Tomb and Offer 4 Life",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Resurrect Target Champion and attach this card to it. If this card leaves the Zone, Destroy the attached Champion.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Offer 3 Life; then Excavate 3, and add 1 revealed. <br><span class="line-gap"></span> If this card is in your Tomb: Obliterate this card; Resurrect 1 Undead from either Tomb.`,
        keywords: ["blank"],
        effect1name: "If this card is in your Tomb",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "12",
    name: "Boom!",
    image: `${cardArtFolder}/Rush/Boom.png`,
    rarity: "Common",
    type: "Rush",
    condition: "An Undead you control battles another Champion",
    cost: "Destroy your Undead",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Destroy the other Champion.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Mill 4 and Target the attacking Champion",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Negate the Attack, and if you do, deal Damage to your Opponent equal to that Champion’s Damage.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Gain Life equal to those Champions’ remaining Life. <br><span class="line-gap"></span> If this card is in your Tomb (Reflex): Obliterate this card and Sacrifice 1 Champion you control; Gain double that Champion's remaining Life.`,
        keywords: ["blank"],
        effect1name: "If this card is in your Tomb",
        effect2name: "",
        effect3name: "",
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
    cost: "Target 1 Champion in your Opponent's Tomb and Offer 4 Life",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Resurrect Target Champion to your Zone, it becomes an Undead.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "If the revealed card is a Champion, that Player can immediately Rally it (ignoring its cost).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Your Opponent can Retrieve up to 2",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Mill cards equal to the number of cards in your Opponent's Tomb.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Resurrect the first Target and attach this card to it, and if you do, Obliterate the other 3 Targets. If this card leaves the Zone, Obliterate the attached Champion.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Each Player must offer 1 Life to declare an attack.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Target 1 Construct or Helper you control with a Damage of 1 or higher and take Damage equal to its Damage",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Rally 1 Echo Token.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    damage: 5,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Priority <br><span class="line-gap"></span> Continue the Fight: If this card is in your Tomb: Mill 6; Resurrect this card.`,
        keywords: ["Priority"],
        effect1name: "Continue the Fight",
        effect2name: "",
        effect3name: "",
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
        text: "Reveal 5 cards from your Deck. Your Opponent chooses 1 of them to add to your Hand. Obliterate the rest.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Negate the triggering card or effect, and if you do, it becomes the End Phase. Other cards and effects cannot be activated in response to this card.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Twitchy <br><br> Frantic Hoarding: Sacrifice 1; Bury up to 2 Reflex.",
        keywords: ["Twitchy"],
        effect1name: "Frantic Hoarding",
        effect2name: "",
        effect3name: "",
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
        text: "Draw, Add, or Retrieve the same type and number of card(s).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Add 1 Cryptbound.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Bloodrage, Deathward, Lifesteal, Undertaker <br><span class="line-gap"></span> Behold my Subjects: Offer 5 Life and Target 1 Undead in either Tomb; Resurrect Target. <span class="line-gap"></span> Crafted Brilliance (Exhaustion): Sacrifice 1; Destroy 1 Champion your Opponent controls. <span class="line-gap"></span> Rise Again!: If this card is in your Tomb while you control \"Markerion, Necromancy Master\" (Reflex): Resurrect this card.`,
        keywords: ["Bloodrage","Deathward","Lifesteal","Undertaker"],
        effect1name: "Behold my Subjects",
        effect2name: "Crafted Brilliance",
        effect3name: "Rise Again",
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
        text: "If Destroyed: Both Players take 2 Damage.",
        keywords: ["blank"],
        effect1name: "If Destroyed",
        effect2name: "",
        effect3name: "",
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
        text: `Deathward <span class="line-gap"></span> Gentle Caress (Flip): If flipped face-up by battle: Instead of being Destroyed, move this card to your Arsenal and attach it to the attacking Champion. The attached Champion can no longer declare attacks, and takes 1 Damage during each End Phase.`,
        keywords: ["Deathward"],
        effect1name: "Gentle Caress",
        effect2name: "",
        effect3name: "",
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
    tags: ["Cryptbound", "Necromancer","Specialist"],
    damage: 1,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: "Deathward <br><br> On Rally (Mandatory): Target 1 face-up Champion; Target takes 2 Damage.",
        keywords: ["Deathward"],
        effect1name: "On Rally",
        effect2name: "",
        effect3name: "",
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
    tags: ["Cryptbound", "Necromancer","Specialist"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Seance: Target 1 Champion in either Tomb; Rally 1 Ghost Token of Target. Destroy all Tokens Rallied this way if this card leaves the Zone.",
        keywords: ["blank"],
        effect1name: "Seance",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "32",
    name: "Elthira, Palefire Witch",
    image: `${cardArtFolder}/Champions/ElthiraPalefireWitch.png`,
    rarity: "Rare",
    type: "Champion",
    condition: "Reflex: When you take Damage",
    cost: "Offer Life equal to the Damage you took",
    tags: ["Cryptbound", "Necromancer","Mage"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `
        On Rally: This card's Damage and Life become equal to the amount of Life Offered to Rally it.
        <span class="line-gap"></span>
        Thrice-Burned (Exhaustion): Offer Life equal to this card's Damage; Draw 3, then discard 2.`,
        keywords: ["blank"],
        effect1name: "On Rally",
        effect2name: "Thrice-Burned",
        effect3name: "",
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
    tags: ["Cryptbound", "Hellfire","Specialist"],
    damage: 0,
    life: 1,
    damageThreshold: "6",
    abilities: [
      {
        text: "Dredgin' Time (Exhaustion): Target 1 card in your Void; Reclaim Target.",
        keywords: ["blank"],
        effect1name: "Dredgin' Time",
        effect2name: "",
        effect3name: "",
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
    tags: ["Cryptbound", "Hellfire","Megalith","Royal"],
    damage: 6,
    life: 6,
    damageThreshold: "6",
    abilities: [
      {
        text: `Deathpower, Warded <br><span class="line-gap"></span> Unlimited Power: Offer Life in increments of 3, up to 9; This card can make 1 additional attack per 3 Life offered during your next Battle Phase. <span class="line-gap"></span> Everlasting life: Mill 12; Gain 6 Life. <span class="line-gap"></span> Riches Beyond Your Imagination (Exhaustion): Offer 6; Draw 2.`,
        keywords: ["Warded","Deathpower"],
        effect1name: "Unlimited Power",
        effect2name: "Everlasting Life",
        effect3name: "Riches Beyond Your Imagination",
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
    damageThreshold: "3",
    abilities: [
      {
        text: "Defender, Fortified",
        keywords: ["Defender","Fortified"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Siren's Shriek: If your Opponent Rallies a Champion(s) while your Life is lower than theirs: Reduce the Damage of the Rallied Champion(s) by 2. If this effect reduces a Champion's Damage to 0, they are Destroyed.`,
        keywords: ["blank"],
        effect1name: "Siren's Shriek",
        effect2name: "",
        effect3name: "",
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
    cost: "Target 1 Champion you control",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Target takes 3 Damage, and if it does, draw 1.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "All face-up Champions take 2 Damage.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Recruit, Resurrect, or Unleash 1 Hellfire (ignoring their conditions). <br><span class="line-gap"></span> Obliterate it at the end of the 6th turn after activating this card. <span class="line-gap"></span><span class="line-gap"></span> When it leaves the Zone, you lose the game.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Until your End Phase, your Offer effects instead heal you by that amount.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Excavate 3 from your Opponent's Deck, return them in an order of your choice.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Resurrect 1 Champion from either Tomb whose Life equals what you Offered, and if you do, destroy it during the End Phase.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Your Opponent Obliterates 2 cards from your Tomb",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Retrieve 2.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Excavate 1, if it's an Action you can activate it (ignoring its cost), otherwise Obliterate it.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion cannot attack or activate its effects. <br><span class="line-gap"></span> So long as this card and its attached Champion remain face-up on the Zone, your Life cannot be reduced. Your Offer effects are always counted as fulfilled.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Exhaustion: Excavate 3, add 1 revealed.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Offer 5 Life",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "If you take 5 or more Damage by an Opponent's card effect or their Champion's attack: Draw 1 for every 5 Damage you took.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "All Champions on the Zone and in the Tomb are also now considered Undead.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Either Player can Offer 4 Life and Target 1 card in either Tomb; Retrieve Target.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "While you are at 5 or less Life: You cannot be Damaged.",
        keywords: ["blank"],
        effect1name: "While you are at 5 or less Life",
        effect2name: "",
        effect3name: "",
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
        text: "Increase Target's Damage by the amount Offered.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Target 1 Champion on the Zone",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Decrease Target's Damage by 3, and if you do, it gains Non-Believer until the end of the turn.",
        keywords: ["Non-Believer"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Targets take 1 Damage.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Resurrect Target. <br><span class="line-gap"></span> During each End Phase that the Target remains on the Zone: Discard 1 or Destroy the Target.`,
        keywords: ["blank"],
        effect1name: "During each End Phase that the Target remains on the Zone",
        effect2name: "",
        effect3name: "",
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
        text: `All Champion(s) Rallied take 5 Damage. <br><span class="line-gap"></span> You cannot Rally during your next turn.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Target 1 Undead in your Tomb",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Retrieve Target.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Activate that card (ignoring its cost).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Those Rallied Champion(s) become Exhausted.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Resurrect Target during the next Intermission.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Flip all Champions your Opponent controls face-down.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Bulletproof, Deathcurse, Lifetouch, Priority",
        keywords: ["Bulletproof","Deathcurse","Lifetouch","Priority"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Heavy Hands <span class="line-gap"></span> On Rally: Draw 2. <span class="line-gap"></span> Deadeye (Exhaustion, Reflex): Discard 1 and Target 1 card on the Zone; Destroy Target.`,
        keywords: ["Heavy Hands"],
        effect1name: "On Rally",
        effect2name: "Deadeye",
        effect3name: "",
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
    tags: ["Frontier", "Marshall", "Marksman"],
    damage: 7,
    life: 5,
    damageThreshold: "3",
    abilities: [
      {
        text: `Priority <br> On Rally: Draw 1. <span class="line-gap"></span> If Discarded: Add 1 Equipment or Rush.`,
        keywords: ["Priority"],
        effect1name: "On Rally",
        effect2name: "If Discarded",
        effect3name: "",
      }
    ]
  },
  {
    id: "64",
    name: "Lady Jane's Ladykiller",
    image: `${cardArtFolder}/Equipments/LadyJaneLadykiller.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Marksman",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `The turn this card is activated: Only the attached Champion can attack (this effect remains even if this card leaves the zone). <br> The attached Champion gains Unstoppable. <span class="line-gap"></span> If this card is in your Tomb: Obliterate this card and Target 1 Marksman in your Tomb; Resurrect Target.`,
        keywords: ["Unstoppable"],
        effect1name: "The turn this card is activated",
        effect2name: "If this card is in your Tomb",
        effect3name: "",
      }
    ]
  },
  {
    id: "65",
    name: "Ol' Reliable",
    image: `${cardArtFolder}/Equipments/OlReliable.png`,
    rarity: "Rare",
    type: "Equipment",
    condition: "Attach only to a Marksman",
    cost: "Reveal 1 other random card from your Hand",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `<span class="line-gap"></span> This card gains 6 Bullet Counters. Increase the attached Champion's Damage by 1 per Bullet Counter this card has. <span class="line-gap"></span> After each time the attached Champion battles: Remove 1 Bullet Counter from this card. <span class="line-gap"></span> If this card has no Bullet Counters (Reflex): Destroy this card; Deal 6 Damage to 1 Champion or Player of your choice.`,
        keywords: ["blank"],
        effect1name: "If this card has no Bullet Counters",
        effect2name: "After each time the attached Champion battles",
        effect3name: "",
      }
    ]
  },
  {
    id: "66",
    name: "Lucky Shot",
    image: `${cardArtFolder}/Equipments/LuckyShot.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Marksman",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Call the type of card on top of your Deck. Excavate 1, and if its card type matches what you called you can Destroy 1 Champion on the Zone. Otherwise, Destroy the attached Champion.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Sniffer Sense: Target 1 face-down Champion; Flip the Target face-up (negate its Flip effects). <span class="line-gap"></span> Take the Bullet (Reflex): If your Opponent declares an attack or activates an effect that Destroys a card: Sacrifice this card; Negate the attack or effect, and if you do, destroy the triggering card. <span class="line-gap"></span> Helping Hand: If this card is in your Tomb: Obliterate this card and Target 1 Frontier or Helper in your Tomb; Resurrect Target.`,
        keywords: ["blank"],
        effect1name: "Sniffer Sense",
        effect2name: "Take the Bullet",
        effect3name: "Helping Hand",
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
        text: `Deathward <br> Gotcha! (Flip): If flipped face-up by battle: Increase this Champion's Damage by half the Damage of the Champion that it is battling (rounded up). <span class="line-gap"></span> If Discarded: Deal 3 Damage to 1 Champion or Player.`,
        keywords: ["Deathward"],
        effect1name: "Gotcha",
        effect2name: "If Discarded",
        effect3name: "",
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
        text: "Deathward <br> Surrender Now! (Flip): If flipped face-up by battle: Reduce the attacking Champion's Damage to 0.",
        keywords: ["Deathward"],
        effect1name: "Surrender Now",
        effect2name: "",
        effect3name: "",
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
        text: `Raider, Reach <br> Train Sniffer (Exhaustion): Your Opponent can activate 1 Commander Obelisk from their Deck (ignoring its cost); Then, if they did, your Opponent chooses whether: You Draw 2 for every Commander Obelisk your Opponent controls, or Your Opponent discards 1 for every Commander Obelisk they control.`,
        keywords: ["Raider","Reach"],
        effect1name: "Train Sniffer",
        effect2name: "",
        effect3name: "",
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
        text: "I Found It! (Flip): Target 1 card in either Tomb; Retrieve Target.",
        keywords: ["blank"],
        effect1name: "I Found It",
        effect2name: "",
        effect3name: "",
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
        text: `Defender, Lifebalance, Priority, Warded <br> Foretell my Fate: Excavate 2; return the cards in an order of your choice. <span class="line-gap"></span> Decisive Plan (Exhaustion): Mill 1; Draw 1.`,
        keywords: ["Defender","Lifebalance","Priority","Warded"],
        effect1name: "Foretell my Fate",
        effect2name: "Decisive Plan",
        effect3name: "",
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
        text: `Bulletproof <br> Good Morning (Flip): If flipped face-up by battle: Flip face-down the attacking Champion. <span class="line-gap"></span> Goodnight: Flip this card face-down. <span class="line-gap"></span> If Destroyed: Draw 1.`,
        keywords: ["Bulletproof"],
        effect1name: "Good Morning",
        effect2name: "Goodnight",
        effect3name: "If Destroyed",
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
        text: `Might of the Small, Priority, Solitary <br> Roam Around: If there are at least 1 Champion and 1 Equipment in your Tomb: Retrieve 1 Equipment. <span class="line-gap"></span> If Destroyed: Recruit 1 Frontier Marksman.`,
        keywords: ["Might of the Small","Priority","Solitary"],
        effect1name: "Roam Around",
        effect2name: "If Destroyed",
        effect3name: "",
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
        text: "On Rally (Mandatory): Declare 1 card type; Excavate cards until you reveal a card of the declared type, add that card and Obliterate the rest.",
        keywords: ["blank"],
        effect1name: "On Rally",
        effect2name: "",
        effect3name: "",
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
        text: "Bottoms Up!: Target 1 face-up Champion on the Zone; Target Champion's Damage Threshold increases by 1, but their Damage is reduced by 1.",
        keywords: ["blank"],
        effect1name: "Bottoms Up",
        effect2name: "",
        effect3name: "",
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
    cost: "Target 1 Champion you control and Excavate 3, send all revealed Champions to the Tomb",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Target Champion can make an additional number of attacks this Battle Phase equal to the number of revealed non-Champions.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Both players Mill 1. If only one player mills a Champion, the opposing player takes that Champion's Damage. If both players mill Champions, the player whose Champion has a lower Damage takes the opposing player's Champion's Damage",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Rally 1 Tumbleweed Token to your Zone. <br><span class="line-gap"></span> During each End Phase, switch control of the Token.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Hostile Negotiations (Reflex): If this card is Targeted by an attack or effect (Mandatory): Destroy this card and the card that Targeted it, and if you do, the Player who Targeted this card draws 2. <br><span class="line-gap"></span> If Destroyed: Target 1 Equipment in your Tomb; Retrieve Target.`,
        keywords: ["blank"],
        effect1name: "Hostile Negotiations",
        effect2name: "If Destroyed",
        effect3name: "",
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
        text: "Rakestepping (Reflex): This card takes its own Damage; Your Opponent cannot declare an attack this turn.",
        keywords: ["blank"],
        effect1name: "Rakestepping",
        effect2name: "",
        effect3name: "",
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
        text: "Herd the Herd: Rally 1 Cow Token to your Zone.",
        keywords: ["blank"],
        effect1name: "Herd the Herd",
        effect2name: "",
        effect3name: "",
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
        text: "First Impressions: Increase this card's Damage by 1 for every Cow Token on the Zone.",
        keywords: ["blank"],
        effect1name: "First Impressions",
        effect2name: "",
        effect3name: "",
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
        text: "Timid Showoff: Increase this card's Damage by 2 for every Cow Token on the Zone. Decrease this card's Damage by 1 for every Champion your Opponent controls.",
        keywords: ["blank"],
        effect1name: "Timid Showoff",
        effect2name: "",
        effect3name: "",
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
        text: "Bootlicking (Flip): If flipped face-up by battle: Instead of being Destroyed, move this card to your Arsenal and attach it to the attacking Champion. If the attached Champion attempts to declare an attack or activate an effect, negate that attack or effect, and if you do, send it to the Tomb.",
        keywords: ["blank"],
        effect1name: "Bootlicking",
        effect2name: "",
        effect3name: "",
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
        text: "Hungry Dog: Either Player Sacrifices 1 Token; Take control of this card, and if you do, increase its Damage by 1, and its Life by 2.",
        keywords: ["blank"],
        effect1name: "Hungry Dog",
        effect2name: "",
        effect3name: "",
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
        text: "Excavate 6. If any of the revealed cards are a Champion, take 2 Damage. Return the revealed cards in the same order they were in.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "88",
    name: "I Think It Was Loaded",
    image: `${cardArtFolder}/Reflex/IThinkItWasLoaded.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "You take Damage from one of your own effects",
    cost: "",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Deal the same amount of Damage to your opponent.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Rally 1 Grenade Token to your Zone.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Reveal the bottom 3 cards of your Deck. Add 1 of them, and Obliterate the other 2.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Draw 3.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Excavate 1. <br> If the revealed card's type matches the type you declared: Add the excavated card; Otherwise, Obliterate it.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Your Opponent reveals all face-down cards they control.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Your Opponent randomly chooses 1 card in your Hand to discard, depending on the type of card discarded, activate the following effect",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `<span class="line-gap"></span> Champion: Destroy 1 card on the Zone. <span class="line-gap"></span> Action: Draw 1. <span class="line-gap"></span> Equipment: Retrieve 1. <span class="line-gap"></span> Obelisk: Activate 1 card from your Reserve (ignoring its cost). <span class="line-gap"></span> Rush: Draw 3, then discard 2. <span class="line-gap"></span> Reflex: Destroy 1 card in either Player's Arsenal.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Target 1 of your Opponent's Champions, and if you do, this card's attached Champion cannot attack this turn; Take control of the Target until the End Phase.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion gains Second Strike. <br><span class="line-gap"></span> If Destroyed: Offer 2 Life; Stack this card.`,
        keywords: ["Second Strike"],
        effect1name: "If Destroyed",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "97",
    name: "Grandad's Rifle",
    image: `${cardArtFolder}/Equipments/GrandadsRifle.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Citizen",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Increase the attached Champion's Damage by 3.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `In order to attack with the attached Champion, you must discard 1. <br><span class="line-gap"></span> The attached Champion's Damage is increased by 2.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion gains Deathtouch. <br><span class="line-gap"></span> During your End Phase, if the attached Champion did not attack this turn: Destroy both this card and its attached Champion. <span class="line-gap"></span><span class="line-gap"></span> If Destroyed: The controller of this card takes 4 Damage.`,
        keywords: ["Deathtouch"],
        effect1name: "During your End Phase, if the attached Champion did not attack this turn",
        effect2name: "If Destroyed",
        effect3name: "",
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
        text: "If an Opponent declares an attack with a Champion that has at least 1 attached Equipment: After that attack resolves, the attacking Champion takes this card's attached Champion's Damage plus 2.",
        keywords: ["blank"],
        effect1name: "If an Opponent declares an attack with a Champion that has at least 1 attached Equipment",
        effect2name: "",
        effect3name: "",
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
        text: "All Champions on the Zone gain Priority. <br><br> Champions cannot declare a direct attack against a Player unless that Player controls no Champions.",
        keywords: ["Priority"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Only an Outlaw can be designated as this card's Commander. <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: This card's Commander gains Greedy and Reach. <span class="line-gap"></span> If this card is in your Tomb while you control an Outlaw (Reflex): Discard 2; Activate this card.`,
        keywords: ["Greedy","Reach","Mount","Shielded"],
        effect1name: "Mounted",
        effect2name: "If this card is in your Tomb",
        effect3name: "while you control an Outlaw",
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
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: Obliterate Mill 2; Draw 2.`,
        keywords: ["Mount","Shielded"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: "Either Player can Discard 1; that Player then Draws an extra card during their next Draw Phase.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "During each Player's End Phase: That Player's face-up Champions each take 2 Damage.",
        keywords: ["blank"],
        effect1name: "During each Player's End Phase",
        effect2name: "",
        effect3name: "",
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
        text: `Stack 1 card from your Deck. <br><span class="line-gap"></span> During each Draw Phase, after you draw: Mill 10.`,
        keywords: ["blank"],
        effect1name: "During each Draw Phase, after you draw",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Priority, also increase their Damage by 1.`,
        keywords: ["Mount","Priority"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: `Recruit 1 Frontier, it cannot attack. <br><span class="line-gap"></span> Destroy it during the End Phase of this turn.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Flip all Champions face-down.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Target can attack an additional time. <br><span class="line-gap"></span> That Champion cannot attack during your next Battle Phase.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "111",
    name: "Guns to a Gunfight",
    image: `${cardArtFolder}/Rush/GunsToAGunfight.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "",
    cost: "",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Both Players attach 1 Equipment to a Champion they control from their Hand, Deck, or Tomb (ignoring its cost).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Reduce the triggering Damage to 0. <br><span class="line-gap"></span> The protected Champion cannot attack, or use its effects, for the remainder of the turn.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Deal 2 Damage to your Opponent equal to this card's Step Number on the Path.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "All face-up Champions take Damage equal to their Damage.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Draw cards equal to the number of cards your Opponent controls, and if you do, shuffle the same number of cards from your Hand into your Deck.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "You choose your Opponent's attack targets.",
        keywords: ["Priority"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Recruit 1 Helper.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Destroy the Rallied Champion, and if you do, Obliterate it. <br><span class="line-gap"></span> If Discarded: Set this card face-down in your Arsenal.`,
        keywords: ["blank"],
        effect1name: "If Discarded",
        effect2name: "",
        effect3name: "",
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
        text: "Negate that attack, and if you do, end the Battle Phase, then both Players can activate 1 Obelisk from their Deck (ignoring its cost).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Your Opponent takes Damage equal to the Target's Damage.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    damage: 5,
    life: 5,
    damageThreshold: "1",
    abilities: [
      {
        text: `Repair Specialist <span class="line-gap"></span> On Rally: Activate 1 Equipment or Obelisk from your Hand, Deck, or Tomb (ignoring its cost). <span class="line-gap"></span> Upgrade: Rally 1 Blocker Token to your Opponent's Zone; Add 1 Equipment. <span class="line-gap"></span> Emergency Transport (Reflex): If this card isn't a Commander: Obliterate Mill 6; Activate 1 Commander Obelisk from your Hand, Deck, or Tomb (ignoring its cost).`,
        keywords: ["Repair Specialist"],
        effect1name: "On Rally",
        effect2name: "Upgrade",
        effect3name: "Emergency Transport",
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
        text: `Lightbulb: Excavate 1; Return it to either the top or the bottom of your Deck. <span class="line-gap"></span> Wake-Up Jolt: Sacrifice this card and Target 1 Champion or Obelisk in your Reserve; Activate Target (ignoring its cost). <span class="line-gap"></span> Helping Hand: If this card is in your Tomb: Obliterate this card and Target 1 Clockwork or Helper in your Tomb; Resurrect Target, it gains Deathtouch but its Life is reduced to 1.`,
        keywords: ["Deathtouch"],
        effect1name: "Lightbulb",
        effect2name: "Wake-Up Jolt",
        effect3name: "Helping Hand",
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
        text: `Repair Specialist <span class="line-gap"></span> On Rally: Place 1 Obelisk from your Deck into your Reserve. That Obelisk gains \"Reserve (Reflex): Discard 1; Activate this card\". <span class="line-gap"></span> Garage Baby: Attach 1 appropriate Equipment from your Hand or Deck to an Obelisk in your Reserve (ignoring its cost). <span class="line-gap"></span> Secret Weapon (Exhaustion): Destroy 1 Obelisk you control; Destroy up to 2 cards on the Zone.`,
        keywords: ["Repair Specialist"],
        effect1name: "On Rally",
        effect2name: "Garage Baby",
        effect3name: "Secret Weapon",
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
        text: "Wake the Beast (Exhaustion): Discard 1; Activate 1 Obelisk from your Reserve (ignoring its cost).",
        keywords: ["blank"],
        effect1name: "Wake The Beast",
        effect2name: "",
        effect3name: "",
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
        text: `Bloodrage, Priority <br><span class="line-gap"></span> Ride: Target 1 Equipment or Obelisk in your Tomb; Retrieve Target. <span class="line-gap"></span> Or Die (Mandatory): If it is your End Phase and this Champion is not designated as a Commander: Destroy this card.`,
        keywords: ["Bloodrage","Priority"],
        effect1name: "Ride",
        effect2name: "Or Die",
        effect3name: "",
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
    tags: ["Clockwork", "Citizen"],
    damage: 1,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Might of the Small <br><span class="line-gap"></span> Garbage Lord: Bury 1. <span class="line-gap"></span> Trash Picker: Retrieve 1, and if you do, Obliterate the rest of the cards in your Tomb. <span class="line-gap"></span> On Resurrection: Target 1 Champion in your Tomb; Resurrect Target, but reduce its Life to 1, also it is Obliterated when it leaves the Zone.`,
        keywords: ["Might of the Small"],
        effect1name: "Garbage Lord",
        effect2name: "Trash Picker",
        effect3name: "On Resurrection",
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
        text: "Place 1 Commander Obelisk from your Deck into your Reserve, and attach to it 1 appropriate Equipment from your Deck (ignoring its cost).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "The attached Obelisk gains the effect: \"This card's Commander can make an additional attack during each of your Battle Phases.\"",
        keywords: ["blank"],
        effect1name: "The attached Obelisk gains the effect",
        effect2name: "",
        effect3name: "",
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
        text: "The attached Obelisk gains the effect: \"This card's Commander's Damage Threshold increases by 2.\"",
        keywords: ["blank"],
        effect1name: "The attached Obelisk gains the effect",
        effect2name: "",
        effect3name: "",
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
        text: "Increase Target's Damage by 5. <br><br> Destroy Target during the End Phase.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: Destroy 1 card in your Arsenal; Destroy up to 2 cards in either Arsenal. <span class="line-gap"></span> Mounted (Reflex): Increase this card's Commander's Damage by 5 until the End Phase.`,
        keywords: ["Shielded","Mount"],
        effect1name: "",
        effect2name: "Mounted",
        effect3name: "Mounted",
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
        text: `Mount <span class="line-gap"></span> Mounted: Rally 1 Greed Token, Rage Token, or Sloth Token to your Opponent's Zone, but Destroy it during their next End Phase. <span class="line-gap"></span> Mounted: If your Opponent controls 5 or more Tokens: Sacrifice 1 of your Opponent's Champions; Destroy 1 card on the Zone.`,
        keywords: ["Mount"],
        effect1name: "",
        effect2name: "Mounted",
        effect3name: "Mounted",
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
        text: `Mount <span class="line-gap"></span> Mounted: Destroy this card and Target 1 face-up Champion you control; Target gains Unstoppable until the end of this turn.`,
        keywords: ["Mount","Unstoppable"],
        effect1name: "",
        effect2name: "Mounted",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted (Reflex): Give control of 1 face-up Champion to your Opponent; take control of 1 face-up Champion from your Opponent. Return control of the affected Champions during the End Phase. <span class="line-gap"></span><span class="line-gap"></span> If this card is in your Reserve while you control at least 1 Champion: You can activate this card.`,
        keywords: ["Mount"],
        effect1name: "",
        effect2name: "Mounted",
        effect3name: "If this card is in your Reserve while you control at least 1 Champion",
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
        text: `Mount <span class="line-gap"></span> Mounted: Target 1 card in your Opponent's Arsenal; Your Opponent then chooses: send the Targeted card to the Tomb, or to send 2 other cards of their choice from their Arsenal to the Tomb.`,
        keywords: ["Mount"],
        effect1name: "",
        effect2name: "Mounted",
        effect3name: "",
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
        text: "Finger Guns (Exhaustion): Target 1 Champion on the Zone; Target cannot declare an attack, block, or use its effects until the start of your next turn.",
        keywords: ["blank"],
        effect1name: "Finger Guns",
        effect2name: "",
        effect3name: "",
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
        text: "Both Players set face-down 1 Reflex card from their Deck (without revealing what they are).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander cannot attack. <span class="line-gap"></span> Mounted: Draw 1 for every Obelisk you control, then discard the same number of cards.`,
        keywords: ["Mount"],
        effect1name: "",
        effect2name: "Mounted",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> If this card does not have a Commander (Reflex): Discard your entire Hand (minimum of 1 card); Resurrect 1 Champion, it becomes this card's commander. Obliterate that Champion when it leaves the Zone. <span class="line-gap"></span> Mounted: Sacrifice this card; Restore the use of 1 non-Exhaustion effect that a Champion used this turn.`,
        keywords: ["Mount"],
        effect1name: "If this card does not have a Commander",
        effect2name: "Mounted",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted: Add 1 Equipment, but you cannot activate it this turn. <span class="line-gap"></span><span class="line-gap"></span> If this card is in your Reserve: Obliterate Mill 5; Activate this card.`,
        keywords: ["Mount"],
        effect1name: "Mounted",
        effect2name: "If this card is in your Reserve",
        effect3name: "",
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
        text: `Maintenance <span class="line-gap"></span> Mount <span class="line-gap"></span> Mounted: Excavate 5; Return the cards in an order of your choice.`,
        keywords: ["Maintenance","Mount"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Unstoppable. <span class="line-gap"></span> Mounted: If this card's Commander is Targeted by an attack or effect (Reflex): Sacrifice this card; Move this card's Commander into the Reserve, and if you do, draw 1. The moved Commander gains the effect: Reserve: Discard 2; activate this card.`,
        keywords: ["Mount","Unstoppable"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: `Maintenance <span class="line-gap"></span> Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: This card's Commander gains Priority. <span class="line-gap"></span> Mounted: Discard 1 and Target 1 face-up card on the Zone; Destroy Target.`,
        keywords: ["Mount","Maintenance","Shielded","Priority"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted: If this card's Commander battles (Reflex): Sacrifice this card; This card's Commander takes no Damage from that battle, also deal 5 Damage to the Champion that they battled.`,
        keywords: ["Mount"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "145",
    name: "Emergency Reset!",
    image: `${cardArtFolder}/Rush/EmergencyReset.png`,
    rarity: "Superior",
    type: "Rush",
    condition: "",
    cost: "Obliterate all cards from your Hand, Zone, and Tomb (minimum 1 from each)",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Obliterate all cards from your Opponent's Hand, Zone, and Tomb, then both players draw 6.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Move the blocking Champion into the Reserve. <br><span class="line-gap"></span> If this card is in your Tomb and an Opponent declares an attack: Obliterate this card; Move 1 Champion or Obelisk from your Tomb into your Reserve.`,
        keywords: ["blank"],
        effect1name: "If this card is in your Tomb and an Opponent declares an attack",
        effect2name: "",
        effect3name: "",
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
    damage: 3,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathtouch <br><span class="line-gap"></span> Mulching Overdrive (Mandatory): If this card Destroys a Champion with its Deathtouch: Rally 1 Mulch Token to the controller of that Champion's Zone.`,
        keywords: ["Deathtouch"],
        effect1name: "Mulching Overdrive",
        effect2name: "",
        effect3name: "",
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
        text: `Brake Slam (Reflex): If this card declares an attack: Negate that attack; Draw 1. <br><span class="line-gap"></span> If Destroyed: Add 1 Commander Obelisk.`,
        keywords: ["blank"],
        effect1name: "Brake Slam",
        effect2name: "If Destroyed",
        effect3name: "",
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
        text: `Choose 1 of the following effects to activate: <span class="line-gap"></span> • Draw 2. <span class="line-gap"></span> • Take control of 1 of your Opponent's Champions until the End Phase of this turn. <span class="line-gap"></span> • Look at your Opponent's Hand, and if you do, shuffle 1 card of your choice from their Hand back into their Deck.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "The attached Obelisk gains the effect: \"This card's Commander gains Menace.\"",
        keywords: ["Menace"],
        effect1name: "The attached Obelisk gains the effect",
        effect2name: "",
        effect3name: "",
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
        text: "Decrease the attached Champion's Damage by 2. This card's attached Champion gains Second Strike.",
        keywords: ["Second Strike"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Fortified <br><span class="line-gap"></span> Raise the Gates (Exhaustion): Rally 1 Blocker Token to your Opponent's Zone; Activate 1 Obelisk from your Hand, Deck, Reserve, or Tomb (Ignoring its cost).`,
        keywords: ["Fortified"],
        effect1name: "Raise the Gates",
        effect2name: "",
        effect3name: "",
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
    tags: ["Clockwork", "Marshall","Protector","Marksman"],
    damage: 5,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bloodrage, Duelist, Priority <br><span class="line-gap"></span> Fan the Hammer (Exhaustion): Discard any number of cards, and send the same number of cards from your Zone to the Tomb, then Target that many cards on the Zone; Destroy Targets.`,
        keywords: ["Bloodrage","Duelist","Priority"],
        effect1name: "Fan the Hammer",
        effect2name: "",
        effect3name: "",
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
        text: `Greedy, Lifesteal, Reach <br><span class="line-gap"></span> Rich Get Richer: Sacrifice 1; Add 1 Commander Obelisk, and if you do, this card gains 3 Life.`,
        keywords: ["Greedy","Lifesteal","Reach"],
        effect1name: "Rich Get Richer",
        effect2name: "",
        effect3name: "",
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
    cost: "Send 1 Helper or Obelisk from your Hand, Zone, or Reserve to the Tomb",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Retrieve 1 Helper or Obelisk, and if you do, you can place 1 Helper or Obelisk from your Deck into your Reserve.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Acquired Product: Either Player can Offer 2 Life from a Champion they control: Until the End Phase, that Champion gains Priority.",
        keywords: ["Priority"],
        effect1name: "Acquired Product",
        effect2name: "",
        effect3name: "",
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
    life: 6,
    damageThreshold: "2",
    abilities: [
      {
        text: `On Rally: Attach 1 Equipment to this card from your Hand, Deck, or Tomb (ignoring its cost). <br><span class="line-gap"></span> Backup Contingent (Reflex): If this card would be reduced to 0 Life: Rally 1 Dust Token to your Opponent's Zone; Move this card to your Reserve. <span class="line-gap"></span> Triumphant Return: If this card is in your Reserve: Sacrifice 1 Token controlled by either Player; Rally this card (ignoring its cost).`,
        keywords: ["blank"],
        effect1name: "On Rally",
        effect2name: "Backup Contingent",
        effect3name: "Triumphant Return",
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
        text: "Bloodrage, Defender, Forged, Fortified, Menace",
        keywords: ["Bloodrage", "Defender", "Forged", "Fortified", "Menace"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Recruit or Resurrect 1 Construct.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Destroy all Constructs on the Zone.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Rally 3 Fuel Token to your Opponent's Zone",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Retrieve 1 Clockwork or Helper, and if you do, also Add or Retrieve 1 of the following: 1 Equipment, 1 Obelisk, or 1 Reflex.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Offer 2 Life for every card in your Opponent's Hand",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Retrieve 1 Action or Rush. You cannot activate Action or Rush cards for the remainder of this turn.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Until the end of this turn, each time a Token(s) is Rallied to your Opponent's Zone, they must discard 1.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Draw 1 for every Token your Opponent controls.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "The attached Obelisk gains the effect: \"Increase this card's Commander's Damage by 4, but they cannot declare more than one attack per Battle Phase.\"",
        keywords: ["blank"],
        effect1name: "The attached Obelisk gains the effect",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "166",
    name: "Trusty Goggles",
    image: `${cardArtFolder}/Equipments/TrustyGoggles.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Helper, Inventor, or Specialist",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Excavate 3, add 1 revealed Equipment or Obelisk.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `If the attached Champion is the Commander of an Obelisk: Increase their Damage by 5. <br><span class="line-gap"></span> If Destroyed: Deal 3 Damage to both Players.`,
        keywords: ["blank"],
        effect1name: "If the attached Champion is the Commander of an Obelisk",
        effect2name: "",
        effect3name: "",
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
        text: "The attached Champion's Damage Threshold increases by 3.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "169",
    name: "Squeaks’ Belt",
    image: `${cardArtFolder}/Equipments/SqueaksBelt.png`,
    rarity: "Common",
    type: "Equipment",
    condition: "Attach only to a Helper, Inventor, or Specialist. This is the only Equipment that Champion can have attached",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Target 1 Equipment in your Tomb; Retrieve Target.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "170",
    name: "Anti-Magic Shield",
    image: `${cardArtFolder}/Equipments/AntiMagicShield.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "Attach only to a Clockwork or Helper",
    cost: "",
    tags: ["Equipment"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Attached Champion gains Duelist and Non-Believer.",
        keywords: ["Duelist","Non-Believer"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted (Reflex): Discard 1; Move this card and its Commander to your Reserve. Return both to your Zone during the next Intermission.`,
        keywords: ["Shielded","Mount"],
        effect1name: "",
        effect2name: "Mounted",
        effect3name: "",
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
        text: `On Activation: Recruit 1 Clockwork, that Champion becomes this card's Commander. <span class="line-gap"></span> Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: This card's Commander cannot attack. <span class="line-gap"></span> Mounted: Target 1 face-up Champion on the Zone; Target takes 5 Damage.`,
        keywords: ["Shielded","Mount"],
        effect1name: "On Activation",
        effect2name: "Mounted",
        effect3name: "",
      }
    ]
  },
  {
    id: "173",
    name: "Scholarship Dinner Interrupted",
    image: `${cardArtFolder}/Rush/ScholarshipDinnerInterrupted.png`,
    rarity: "Common",
    type: "Rush",
    condition: "You control at least 1 Clockwork and 1 Specialist",
    cost: "Rally 2 Jumper Token to your Opponent's Zone",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Obliterate all Champions you control, and if you do, Unleash all Champions Obliterated by this effect",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Take control of Target until the End Phase. It is Destroyed during the next turn's End Phase.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Destroy all Tokens, and if you do, deal 1 Damage per Token Destroyed to the Player that controlled it.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Rally 3 Hunky Token to your Opponent's Zone",
    tags: ["Reflex"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: `Negate the activation, and if you do, destroy the card. <br><span class="line-gap"></span> If this card is in your Tomb, and a Reflex card is activated: Rally 1 Jumper Token to your Opponent's Zone; Set this card to your Zone.`,
        keywords: ["blank"],
        effect1name: "If this card is in your Tomb, and a Reflex card is activated",
        effect2name: "",
        effect3name: "",
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
        text: "Negate the negating effect, and if you do, destroy that card.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Destroy up to 3 cards your Opponent controls, including at least 1 Token.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Flip face-down all Equipments your Opponent controls.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Negate that Champion's effect, and if you do, flip that Champion face-down.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Priority, Veilbind <span class="line-gap"></span> On Rally: Attach 1 Equipment to this Champion from your Hand, Deck, or Tomb (ignoring its cost). <span class="line-gap"></span> Sacrificial Blade: Bury 1 Equipment and Target 1 card on the Zone; Destroy Target. <span class="line-gap"></span> Reforged: If this card has no attached Equipments: Attach 1 Equipment to this card from your Tomb or Void (ignoring its cost).`,
        keywords: ["Priority","Veilbind"],
        effect1name: "On Rally",
        effect2name: "Sacrificial Blade",
        effect3name: "Reforged",
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
        text: `Arm Thy Knight: If you control a Knight: Activate 1 Equipment from your Hand, Deck, or Tomb (ignoring its cost), attaching the card to a Knight you control. <span class="line-gap"></span> Awaken Allies: If this is the only Champion you control: Sacrifice this card; Recruit 2 Nobles. <span class="line-gap"></span> Helping Hand: If this card is in your Tomb: Obliterate this card and Target 1 Noble or Helper in your Tomb; Resurrect Target.`,
        keywords: ["blank"],
        effect1name: "Arm Thy Knight",
        effect2name: "Awaken Allies",
        effect3name: "Helping Hand",
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
        text: "Conscript, Deathward <br><br> On Resurrection (Mandatory): Your Opponent draws 1.",
        keywords: ["Conscript","Deathward"],
        effect1name: "On Resurrection",
        effect2name: "",
        effect3name: "",
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
        text: "Undertaker",
        keywords: ["Undertaker"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Greedy, Reach",
        keywords: ["Greedy","Reach"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Defender, Naive <span class="line-gap"></span> While Equipped: This Champion is unaffected by its Passives. <span class="line-gap"></span> Hail Mary: Destroy 1 of this Champion's attached Equipments and Target 1 face-up Champion on the Zone; Target takes 3 Damage.`,
        keywords: ["Defender","Naive"],
        effect1name: "While Equipped",
        effect2name: "Hail Mary",
        effect3name: "",
      }
    ]
  },
  {
    id: "187",
    name: "Darkest Knightmare",
    image: `${cardArtFolder}/Champions/DarkestKnightmare.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "You have at least 1 Knight in your Tomb",
    cost: "Basic",
    tags: ["Noble", "Undead","Knight"],
    damage: 3,
    life: 6,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bulletproof <span class="line-gap"></span> On Rally: Attach up to 2 Equipments from your Tomb to this card (ignoring their costs). <span class="line-gap"></span> Rotting Flesh (Mandatory): During your End Phase: This card takes 3 Damage. <span class="line-gap"></span> If Destroyed: Obliterate this card and Target 1 Knight in your Tomb; Resurrect Target, and if you do, you can attach to it 1 Equipment from your Hand, Deck, or Tomb (ignoring its cost).`,
        keywords: ["Bulletproof"],
        effect1name: "On Rally",
        effect2name: "Rotting Flesh",
        effect3name: "If Destroyed",
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
        text: `Non-Believer <span class="line-gap"></span> You're Not Real!: Undead deal no battle Damage to this card, and you take no battle Damage from battles involving this card and an Undead. <span class="line-gap"></span> Eat That Rock! (Exhaustion): Discard 1 and Target 1 Obelisk; Destroy Target.`,
        keywords: ["Non-Believer"],
        effect1name: "You're Not Real",
        effect2name: "Eat That Rock",
        effect3name: "",
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
        text: `Maintenance <span class="line-gap"></span> Mill 1; Place 1 \"Castle\" Obelisk from your Deck or Tomb into your Reserve. <span class="line-gap"></span> If you control at least 1 other face-up \"Castle\" Obelisk: Discard 2; Add 1 \"Castle\" Obelisk. <span class="line-gap"></span> If Destroyed: Activate up to 3 \"Castle\" Obelisks in your Reserve.`,
        keywords: ["Maintenance"],
        effect1name: "If you control at least 1 other face-up \"Castle\" Obelisk",
        effect2name: "If Destroyed",
        effect3name: "",
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
        text: `Maintenance <br> Target 1 face-up Champion you control; Attach 1 Equipment to Target from your Hand or Deck (ignoring its cost). <br> While you control at least 1 face-up \"Castle\" Obelisk and this card is in you Reserve: Destroy 1 face-up card you control; Activate this card (ignoring its cost). <br> While you control at least 2 other face-up \"Castle\" Obelisks: Increase the Damage Threshold of your Champions by 1 for every face-up \"Castle\" Obelisk you control.`,
        keywords: ["Maintenance"],
        effect1name: "While you control at least 1 face-up \"Castle\" Obelisk and this card is in you Reserve",
        effect2name: "While you control at least 2 other face-up \"Castle\" Obelisks",
        effect3name: "",
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
        text: `Maintenance <span class="line-gap"></span> Increase the Damage Threshold of your Champions by 1 for every face-up \"Castle\" Obelisk you control. <span class="line-gap"></span> If an Opponent declares an attack while you control at least 1 other face-up \"Castle\" Obelisk (Reflex): Negate that attack, and if you do, deal 1 Damage to the attacking Champion. <span class="line-gap"></span> While you control at least 2 other face-up \"Castle\" Obelisks: Your Champions gain Warded.`,
        keywords: ["Maintenance","Warded"],
        effect1name: "If an Opponent declares an attack while you control at least 1 other face-up \"Castle\" Obelisk",
        effect2name: "While you control at least 2 other face-up \"Castle\" Obelisks",
        effect3name: "",
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
        text: `Maintenance <span class="line-gap"></span> Your Champions gain Invisible and Veilbind. <span class="line-gap"></span> If an Opponent declares an attack while you control at least 1 other face-up \"Castle\" Obelisk (Reflex): Destroy this card; Destroy all of that Opponent's face-up Champions. <span class="line-gap"></span> While you control at least 3 other face-up \"Castle\" Obelisks: Your Champions gain Unstoppable.`,
        keywords: ["Maintenance","Invisible","Veilbind","Unstoppable"],
        effect1name: "If an Opponent declares an attack while you control at least 1 other face-up \"Castle\" Obelisk",
        effect2name: "While you control at least 3 other face-up \"Castle\" Obelisks",
        effect3name: "",
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
        text: `Maintenance <span class="line-gap"></span> Your Champions gain Reach. <span class="line-gap"></span> While you control at least 1 other face-up \"Castle\" Obelisk: \"Castle\" Obelisks no longer need to be placed face-down before they can be activated. <span class="line-gap"></span> While you control at least 3 other face-up \"Castle\" Obelisks (Reflex): Target 1 card on the Zone; Destroy Target.`,
        keywords: ["Maintenance","Reach"],
        effect1name: "While you control at least 1 other face-up \"Castle\" Obelisk",
        effect2name: "While you control at least 3 other face-up \"Castle\" Obelisks",
        effect3name: "",
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
        text: `Maintenance <span class="line-gap"></span> Offer 1 Life and Target 1 face-up Champion you control; Target gains 3 Life. <span class="line-gap"></span> If a Champion(s) you control is Destroyed while you control at least 1 other face-up \"Castle\" Obelisk (Reflex): Flip this card face-down; Resurrect 1 of the Destroyed Champions. <span class="line-gap"></span> While you control at least 2 other face-up \"Castle\" Obelisks: Your Champions gain Greedy.`,
        keywords: ["Maintenance","Greedy"],
        effect1name: "While you control at least 1 other face-up \"Castle\" Obelisk",
        effect2name: "While you control at least 2 other face-up \"Castle\" Obelisks",
        effect3name: "If a Champion(s) you control is Destroyed",
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
        text: `Maintenance <span class="line-gap"></span> Champions you Destroy by battle are sent to your Opponent's Reserve, instead of their Tomb. <span class="line-gap"></span> While you control at least 2 other face-up \"Castle\" Obelisks: Target 1 Champion in your Opponent's Reserve; Rally Target to your Zone. <span class="line-gap"></span> While you control at least 4 other face-up \"Castle\" Obelisks: Target 1 Obelisk in your Tomb; Activate Target (ignoring its cost).`,
        keywords: ["Maintenance"],
        effect1name: "While you control at least 2 other face-up \"Castle\" Obelisks",
        effect2name: "While you control at least 4 other face-up \"Castle\" Obelisks",
        effect3name: "",
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
        text: `Deathward, Defender, Menace <span class="line-gap"></span> On Rally: Attach 1 Equipment to this card from your Hand, Reserve, or Tomb (ignoring its cost). <span class="line-gap"></span> If Destroyed: Add 1 Knight, and if you do, Add or Retrieve 1 Equipment.`,
        keywords: ["Deathward","Defender","Menace"],
        effect1name: "On Rally",
        effect2name: "If Destroyed",
        effect3name: "",
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
        text: `Maintenance <br><span class="line-gap"></span> Honest Work: Mill 4; Activate from your Deck, Reserve, or face-down Arsenal, 1 \"Castle\" Obelisk.`,
        keywords: ["Maintenance"],
        effect1name: "Honest Work",
        effect2name: "",
        effect3name: "",
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
        text: "Fortified <br><br> If Sent to Tomb: Add 1 Obelisk.",
        keywords: ["Fortified"],
        effect1name: "If Sent to Tomb",
        effect2name: "",
        effect3name: "",
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
        text: `Fortified <span class="line-gap"></span> On Rally: Recruit or Resurrect 1 Knight. <span class="line-gap"></span> Royal Guard: This card gains Invisible and Non-Believer while you control a Knight. <span class="line-gap"></span> Royal Support: Your Knight's Damage Thresholds increase by 2, and the first time they would be Destroyed each turn, they are not Destroyed.`,
        keywords: ["Fortified","Non-Believer","Invisible"],
        effect1name: "On Rally",
        effect2name: "Royal Guard",
        effect3name: "Royal Support",
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
        text: `Greedy <span class="line-gap"></span> Knightsbane: Knights, and their controllers, take no Damage from battles with this card. Knights deal double battle Damage to this card. <span class="line-gap"></span> Furious Fire Breath (Exhaustion): Offer 4 Life and Target up to 2 Champions your Opponent controls; Destroy Targets, and if you do, draw 1 for each Champion destroyed by this effect. <span class="line-gap"></span> If Destroyed by Battle: Recruit 1 Royal.`,
        keywords: ["Greedy"],
        effect1name: "Knightsbane",
        effect2name: "Furious Fire Breath",
        effect3name: "If Destroyed by Battle",
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
        text: `Deathward <span class="line-gap"></span> Emergency Tunnel (Reflex): If your Opponent declares an attack: Flip this card face-down, and if you do, Rally 2 Burrow Token.`,
        keywords: ["Deathward"],
        effect1name: "Emergency Tunnel",
        effect2name: "",
        effect3name: "",
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
        text: "On Rally: If this card has the highest Damage on the Zone: Draw 1.",
        keywords: ["blank"],
        effect1name: "On Rally",
        effect2name: "",
        effect3name: "",
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
        text: `Forged <br><span class="line-gap"></span> If this card has at least 1 attached Equipment: This card gains Warded. <span class="line-gap"></span> If this card has at least 2 attached Equipments: This card gains Priority. <span class="line-gap"></span> If this card has at least 3 attached Equipments: This card gains Bulletproof and Duelist.`,
        keywords: ["Forged","Warded","Priority","Bulletproof","Duelist"],
        effect1name: "If this card has at least 1 attached Equipment",
        effect2name: "If this card has at least 2 attached Equipments",
        effect3name: "If this card has at least 3 attached Equipments",
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
        text: "If Sent to Tomb: Add or Retrieve 1 Dragon.",
        keywords: ["blank"],
        effect1name: "If Sent to Tomb",
        effect2name: "",
        effect3name: "",
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
        text: "Draw 2. <br><br> During your Opponent's next Draw Phase: Your Opponent draws 2 additional cards.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Maintenance <span class="line-gap"></span> Mount <span class="line-gap"></span> Mounted: This card's Commander gains Priority and Reach.`,
        keywords: ["Maintenance","Mount","Priority","Reach"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "207",
    name: "Gleam",
    image: `${cardArtFolder}/Equipments/Gleam.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "Attach only to a Blademaster or Knight",
    cost: "Your Opponent can Retrieve 1",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Increase the attached Champion's Damage by 5. <br><span class="line-gap"></span> If Sent to Tomb: You can stack this card.`,
        keywords: ["blank"],
        effect1name: "If Sent to Tomb",
        effect2name: "",
        effect3name: "",
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
        text: "Recruit 1 Knight with 4 or less Damage.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Resurrect that Champion, and if you do, your opponent draws 2.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Negate the activation, and if you do, Destroy it.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Your opponent Obliterates cards from their Zone so they control the same number of cards as you do. <br><span class="line-gap"></span> If you control no cards: You can activate this card from your Hand.`,
        keywords: ["blank"],
        effect1name: "If you control no cards",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "212",
    name: "Fake-Out",
    image: `${cardArtFolder}/Reflex/FakeOut.png`,
    rarity: "Common",
    type: "Reflex",
    condition: "A Champion you control is Targeted for an attack or effect",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Bounce Target.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Negate the attack, and if you do, you can Rally 1 Champion from your Hand (ignoring its cost).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Destroy all cards in your Opponent's Arsenal, then both players draw cards equal to the number of their cards that were destroyed.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "If 1 of the targeted Champions leaves the Zone, the other is sent to the same location.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Attach 1 Equipment from your Hand, Deck, or Tomb to each Champion you control with a Damage of 2 or less (ignoring their costs). <br><span class="line-gap"></span> Destroy all Equipments attached this way during the End Phase.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Destroy Target, and if you do, your Opponent can Recruit 1 that shares a tag with the Destroyed Champion, and has equal or less Damage than it does in the Tomb.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Your opponent draws 2, and you draw 1",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Ignore the cost of the next Action you activate this turn.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Both Players reveal their Hands and each Player chooses 1 card from their Opponent's Hand to discard.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Both Players draw 1, then discard 1.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Target 1 face-up Megalith on the Zone",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Destroy Target, and if you do, both Players draw 1.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Look at your Opponent's Hand and select 1 card from it to Oblierate until the End Phase.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Target Champion takes no Damage, and cannot be Destroyed, until the end of this turn.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Set face-down 1 Rush or Reflex card from your Deck to your Arsenal.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Double the Damage of all Knights you currently control. <br><span class="line-gap"></span> Destroy all affected Champions during the End Phase.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Increase the attached Champion’s Damage Threshold by 2, but it can no longer attack.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion can no longer declare attacks. <br><span class="line-gap"></span> During each of their Intermissions while this card is attached: The Champion’s controller draws 1.`,
        keywords: ["blank"],
        effect1name: "During each of their Intermissions while this card is attached",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion gains Priority. <br><span class="line-gap"></span> The attached Champion's Damage Threshold is also reduced to 1.`,
        keywords: ["Priority"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Increase the attached Champion's Damage by 5. <br><span class="line-gap"></span> Each time the attached Champion declares an attack: Your Opponent draws 1.`,
        keywords: ["Priority"],
        effect1name: "Each time the attached Champion declares an attack",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion gains Warded. <br><span class="line-gap"></span> If Destroyed: Your Opponent can Recruit 1 with Damage 1 or less.`,
        keywords: ["Warded"],
        effect1name: "If Destroyed",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "231",
    name: "Plate of the Duskbringer",
    image: `${cardArtFolder}/Equipments/PlateOfTheDuskbringer.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "Attach only to a Knight",
    cost: "Your Opponent draws 3",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `The attached Champion gains Bulletproof. <br><span class="line-gap"></span> If Destroyed: Retrieve this card, and if you do, discard 1.`,
        keywords: ["Bulletproof"],
        effect1name: "If Destroyed",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion gains Non-Believer. <br><span class="line-gap"></span> During each of your End Phases: You take 4 Damage.`,
        keywords: ["Non-Believer"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion gains Invisible. <span class="line-gap"></span> During each of your End Phases (Mandatory): Discard 1 or, if you are unable to, Destroy this card. <span class="line-gap"></span> If Destroyed While Attached: Destroy the attached Champion.`,
        keywords: ["Invisible"],
        effect1name: "During each of your End Phases",
        effect2name: "While Attached",
        effect3name: "",
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
        text: "If the attached Champion deals battle Damage: Target 1 face-up Champion on the Zone; Deal 2 Damage to Target.",
        keywords: ["blank"],
        effect1name: "If the attached Champion deals battle Damage",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion's Damage Threshold is increased by 2. <br><span class="line-gap"></span> Each time the attached Champion battles: Your Opponent draws 1.`,
        keywords: ["blank"],
        effect1name: "Each time the attached Champion battles",
        effect2name: "",
        effect3name: "",
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
        text: "The attached Champion deals double battle Damage to Constructs, Dragons, Kaiju, and Megaliths.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "The attached Champion gains Deathcurse.",
        keywords: ["Deathcurse"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "At the end of a battle in which the attached Champion dealt damage: Target 1 face-up Equipment on the Zone; Destroy Target.",
        keywords: ["blank"],
        effect1name: "At the end of a battle in which the attached Champion dealt damage",
        effect2name: "",
        effect3name: "",
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
        text: "Once per turn when the attached Champion would be Damaged or Destroyed (Mandatory): Your Opponent draws 2; The attached Champion is not Damaged or Destroyed.",
        keywords: ["blank"],
        effect1name: "Once per turn when the attached Champion would be Damaged or Destroyed",
        effect2name: "",
        effect3name: "",
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
        text: "During Damage Calculation, increase the attached Champion's Damage to match the Champion it battles.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    tags: ["Vivisect", "Lifebinder","Professor"],
    damage: 0,
    life: 10,
    damageThreshold: "1",
    abilities: [
      {
        text: `Lifebalance <span class="line-gap"></span> Healing Hands (Exhaustion): Your Opponent gains 5 Life; Obliterate Mill 8 from your Opponent's Deck. <span class="line-gap"></span> Bestow Life (Exhaustion): Target 1 Construct or Helper in your Tomb; Resurrect Target Champion, but Destroy all Champions Resurrected this way if this card leaves the Zone.`,
        keywords: ["Lifebalance"],
        effect1name: "Healing Hands",
        effect2name: "Bestow Life",
        effect3name: "",
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
        text: `Rescind Anasthesia: Target 1 other Champion you control; Target can use its non-Exhaustion abilities an additional time this turn. <span class="line-gap"></span> Defibrillate: Sacrifice this card and Target 1 other Champion in your Tomb; Resurrect Target, but reduce its Life to 1. <span class="line-gap"></span> Helping Hand: If this card is in your Tomb: Obliterate this card and Target up to 2 cards in your Tomb; Retrieve Targets.`,
        keywords: ["blank"],
        effect1name: "Rescind Anasthesia",
        effect2name: "Defibrillate",
        effect3name: "Helping Hand",
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
    cost: "Obliterate 1 Action or Reflex from your Tomb that you did not activate this turn",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Activate the Obliterated card.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Back Alley Doctor: Reduce 1 Champion you control's Life by any amount (to a minimum of 0); Increase 1 Champion you control's Life, other than this one or the one reduced, by the amount reduced.",
        keywords: ["blank"],
        effect1name: "Back Alley Doctor",
        effect2name: "",
        effect3name: "",
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
        text: `Bloodrage, Duelist <span class="line-gap"></span> Construct Fodder: Sacrifice 1; Destroy 1 card on the Zone.`,
        keywords: ["Bloodrage","Duelist"],
        effect1name: "Construct Fodder",
        effect2name: "",
        effect3name: "",
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
        text: `Might of the Small <span class="line-gap"></span> Precise Strike: This card cannot be blocked this turn. It is Destroyed during the End Phase.`,
        keywords: ["Might of the Small"],
        effect1name: "Precise Strike",
        effect2name: "",
        effect3name: "",
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
        text: "Gravekeeper",
        keywords: ["Gravekeeper"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "248",
    name: "Imposter",
    image: `${cardArtFolder}/Champions/Imposter.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "Your opponent controls at least 1 Champion",
    cost: "Basic",
    tags: ["Vivisect", "Construct"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Deathward <span class="line-gap"></span> On Rally: Target 1 of your Opponent's Champions; This card's Damage and Life become equal to that Champion's current Damage and Life.`,
        keywords: ["Deathward"],
        effect1name: "On Rally",
        effect2name: "",
        effect3name: "",
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
        text: "Lifesteal <br> Bloodsucker: Offer 1 Life; This Champion gains 2 Life.",
        keywords: ["Lifesteal"],
        effect1name: "Bloodsucker",
        effect2name: "",
        effect3name: "",
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
        text: "Split: This Champion takes 1 Damage; Rally 1 Meat Token to your Zone.",
        keywords: ["blank"],
        effect1name: "Split",
        effect2name: "",
        effect3name: "",
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
        text: `Bloodrage, Taskmaster <span class="line-gap"></span> Miraculous Revival: Both Players Target 1 Champion in their respective Tombs; Resurrect Targets.`,
        keywords: ["Bloodrage","Taskmaster"],
        effect1name: "Miraculous Revival",
        effect2name: "",
        effect3name: "",
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
        text: "On Rally: Increase this card's Damage and Life by the remaining Damage and Life of all Champions sacrificed for its Rally.",
        keywords: ["blank"],
        effect1name: "On Rally",
        effect2name: "",
        effect3name: "",
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
        text: "If Destroyed By Battle: You can choose any multiple (X) of 5 Life for your Opponent to gain; Add X Reflex.",
        keywords: ["blank"],
        effect1name: "If Destroyed By Battle",
        effect2name: "",
        effect3name: "",
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
        text: "Duelist, Priority <br> If this Champion battles (Reflex): Your Opponent gains X Life; Increase this card's Damage by X until the end of Damage Calculation.",
        keywords: ["Duelist","Priority"],
        effect1name: "If this Champion battles",
        effect2name: "",
        effect3name: "",
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
        text: "Forged",
        keywords: ["Forged"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Touch of Undeath (Exhaustion): Target 1 Champion in your Tomb; Resurrect Target, and if you do, it becomes an Undead and is reduced to 1 Life.",
        keywords: ["blank"],
        effect1name: "Touch of Undeath",
        effect2name: "",
        effect3name: "",
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
        text: "Draw 1 for every 5 Life difference between you and your Opponent.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Mill 5",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Add 1 Vivisect.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Offer 6 Life",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Deal 6 Damage to 1 Champion or Player of your choice.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Target 1 face-up Champion on the Zone, its controller gains 6 Life",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Target is reduced to 1 Life and can no longer attack.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Draw 3, and if you do, Obliterate 2 cards from your Hand.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Your Opponent gains 2 Life for every Champion you control",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "All Champions you control gain 4 Life.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Your Opponent cannot activate any cards or effects until the end of this turn.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "264",
    name: "Weeder Class",
    image: `${cardArtFolder}/Actions/WeederClass.png`,
    rarity: "Rare",
    type: "Action",
    condition: "This card can only be activated during your Main Phase 1",
    cost: "It becomes your End Phase",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Destroy all Champions with 2 or less Damage.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "265",
    name: "Pop Quiz: Anatomy",
    image: `${cardArtFolder}/Actions/PopQuizAnatomy.png`,
    rarity: "Rare",
    type: "Action",
    condition: "Your Opponent gained Life this turn",
    cost: "",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Excavate 3 from your Opponent's Deck, and if you do, Obliterate 1. Return the remaining cards in the order they were in.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Swap their attached Equipments.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "267",
    name: "Engineered Pathogen",
    image: `${cardArtFolder}/Actions/EngineeredPathogen.png`,
    rarity: "Rare",
    type: "Action",
    condition: "This card can only be activated during your Main Phase 1",
    cost: "Declare 1 Champion tag from the tags currently on the Zone",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Destroy all Champions with that tag, and if you do, it becomes the End Phase.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Your Opponent discards 1, and if they do, you draw 1.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "The attached Champion can no longer use its effects, even if this card leaves the Zone",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "While this card is attached, increase the attached Champion's Damage by 4.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion cannot be Destroyed by card effects. <br><span class="line-gap"></span> If Sent to Tomb: Retrieve 1 Action.`,
        keywords: ["blank"],
        effect1name: "If Sent to Tomb",
        effect2name: "",
        effect3name: "",
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
        text: "The attached Champion gains Priority. The attached Champion cannot Damage Players, they gain Life equal to the Damage amount instead.",
        keywords: ["Priority"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "If Destroyed: Set 1 Reflex face-down into your Arsenal from your Deck.",
        keywords: ["blank"],
        effect1name: "If Destroyed",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "273",
    name: "Biology 101",
    image: `${cardArtFolder}/Actions/Biology101.png`,
    rarity: "Common",
    type: "Action",
    condition: "Your Opponent controls a Specialist that is not also a Lifebinder",
    cost: "Target 1 face-up Champion your Opponent controls",
    tags: ["Action"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "Flip Target face-down.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Negate your Opponent's first block during each of your Battle Phases.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "275",
    name: "Advantageous Knowledge",
    image: `${cardArtFolder}/Obelisks/AdvantageousKnowledge.png`,
    rarity: "Superior",
    type: "Obelisk",
    condition: "There are at least 2 Champions on the Zone, and your Opponent controls at least 1 Champion",
    cost: "Declare 2 Champion Tags",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Champions with the first declared tag deal double battle Damage against the second, and Champions with the second tag deal half battle Damage (rounded down) against the first. <br><br> Champions with both declared tags are unaffected by this card.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "You cannot perform your Basic Rally the turn you activate this card",
    tags: ["Obelisk"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "If your Opponent activates a Champion effect: Your Opponent gains 3 Life; Negate the effect, and if you do, stack the triggering Champion.",
        keywords: ["blank"],
        effect1name: "If your Opponent activates a Champion effect",
        effect2name: "",
        effect3name: "",
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
        text: "If a Champion(s) is Destroyed: Mill 1, if it is a Rush or Reflex, you can set it face-down in your Arsenal.",
        keywords: ["blank"],
        effect1name: "If a Champion(s) is Destroyed",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted (Mandatory): If this card, or its Commander, moves Zones: Move this card, or its Commander, to the same location. <span class="line-gap"></span> Mounted: If this card's Commander Destroys a Champion by Battle: This card's Commander gains 5 Life.`,
        keywords: ["Mount"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: "Both Players gain 10 Life.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Draw 1. If you have at least 3 Reflex in your Tomb, draw 1 more.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Retrieve Target, and if you do, you take Damage equal to its Damage.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "You and your Opponent control the name number of Champions, and your Opponent controls at least 3 Champions",
    tags: ["Rush"],
    damage: 0,
    life: 0,
    damageThreshold: "",
    abilities: [
      {
        text: "All Champions gain 10 Life.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Rally 1 Champion from your Hand (ignoring its cost).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Draw the same number of cards that they Retrieved.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Increase Target's Damage by 4, and it gains Menace. <br><br> Destroy Target during the End Phase.",
        keywords: ["Menace"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Oblierate Target until the end of this turn.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "All Champions gain Forged until the end of this turn.",
        keywords: ["Forged"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Recruit 1 Construct, but negate its effects.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    cost: "Your opponent chooses to either: Draw 2 or Discard 1 random card from your hand",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Change the Target to a different appropriate Target of your choice.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Destroy the attacking Champion, and if you do, your Opponent gains 4 Life.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Negate the Rally, and if you do, Destroy those Champions. <br><span class="line-gap"></span> After resolving successfully, set this card face-down to your Opponent's Arsenal.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "The attacking Champion's effects are negated until the end of the turn.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Switch control of Targets until the End Phase, and if you do, both Targets become Exhausted.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Destroy all Champions your Opponent controls with 10 or more Life.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Target can attack an additional time this turn. Target cannot block until the end of the next turn.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Draw X.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Negate the activation, and if you do, set the card face-down in their Arsenal. It cannot be flipped face-up until the end of this turn.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Look at your Opponent's Hand and choose 1 card from it to shuffle back into their Deck.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Deal twice that in Damage back to your Opponent.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Flip Target face-up (negate its Flip effects).",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Duelist, Priority, Solitary <span class="line-gap"></span> Deadly Strike (Flip): Target 1 card on the Zone; Destroy Target. <span class="line-gap"></span> Smoke Bomb (Reflex): Flip this card face-down. <span class="line-gap"></span> If this card is in your Tomb: Discard 1 Champion with a Flip effect; Retrieve this card.`,
        keywords: ["Duelist","Priority","Solitary"],
        effect1name: "Deadly Strike",
        effect2name: "Smoke Bomb",
        effect3name: "If this card is in your Tomb",
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
        text: `Lifetouch, Priority <span class="line-gap"></span> If a Champion increases to 10 or more Life by the effect of this card's Lifetouch: Destroy it. <span class="line-gap"></span> Radiant Burst (Reflex): Move this card to your Reserve. <span class="line-gap"></span> If this card is in your Reserve: Obliterate 1 Champion with a Flip effect from either your Hand or face-up Zone; Bounce this card.`,
        keywords: ["Lifetouch","Priority"],
        effect1name: "If a Champion increases to 10 or more Life by the effect of this card's",
        effect2name: "Radiant Burst",
        effect3name: "If this card is in your Reserve",
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
        text: `Rally face-down from your Hand 1 Basic Champion.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Deathward, Invisible <span class="line-gap"></span> From The Bushes (Flip): Target 1 card in either Player's Arsenal; Destroy Target. <span class="line-gap"></span> Smoke Bomb: Flip this card face-down.`,
        keywords: ["Deathward","Invisible"],
        effect1name: "From The Bushes",
        effect2name: "Smoke Bomb",
        effect3name: "",
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
        text: `Deathward, Warded <span class="line-gap"></span> From The Docks (Flip): Target 1 face-down Champion; Destroy Target. <span class="line-gap"></span> Smoke Bomb: Flip this card face-down.`,
        keywords: ["Deathward","Warded"],
        effect1name: "From The Docks",
        effect2name: "Smoke Bomb",
        effect3name: "",
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
        text: `Deathward, Unstoppable <span class="line-gap"></span> From The Rooftop (Flip): Target 1 face-up card on the Zone; Destroy Target. <span class="line-gap"></span> Smoke Bomb: Flip this card face-down.`,
        keywords: ["Deathward","Unstoppable"],
        effect1name: "From The Rooftop",
        effect2name: "Smoke Bomb",
        effect3name: "",
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
        text: `Defender <span class="line-gap"></span> Moonlight Barrier (Reflex): If a card(s) on the Zone that you control would be Destroyed (Mandatory): Offer 2 Life from this card; They are not Destroyed. <span class="line-gap"></span> Cosmic Crashdown: If this card is Resurrected or Unleashed: Deal 2 Damage to all face-up Champions your Opponent controls.`,
        keywords: ["Defender"],
        effect1name: "Moonlight Barrier",
        effect2name: "",
        effect3name: "Cosmic Crashdown",
      }
    ]
  },
  {
    id: "362",
    name: "Solar, Envoy of the Sun",
    image: `${cardArtFolder}/Champions/Solar.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "Reflex: This card is in your Hand or Reserve and an attack is declared against you",
    cost: "All face-up Champions take 2 Damage",
    tags: ["Valiant","Protector","Centurion","Hero"],
    damage: 8,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: `Defender, Duelist, Priority <span class="line-gap"></span> On Rally: Retrieve 1 Hero. <span class="line-gap"></span> Sunlight Blast (Reflex): If a card is Targeted by an Opponent's card effect: Target 1 face-up Champion; Destroy Target. <span class="line-gap"></span> Solar Blitz (Exhaustion): Deal 2 Damage to all face-up Champions your Opponent controls.`,
        keywords: ["Defender","Duelist","Priority"],
        effect1name: "Sunlight Blast",
        effect2name: "Solar Blitz",
        effect3name: "On Rally",
      }
    ]
  },
  {
    id: "363",
    name: "Dawnbreak, of the Sun and Moon",
    image: `${cardArtFolder}/Champions/DawnbreakOfTheSunAndMoon.png`,
    rarity: "Superior",
    type: "Champion",
    condition: "You have at least 1 Hero in your Tomb",
    cost: "Discard 1",
    tags: ["Valiant","Protector","Hero"],
    damage: 3,
    life: 5,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Naive, Necrocharge, Priority <span class="line-gap"></span> On Rally: Add 1 Hero. <span class="line-gap"></span> Sunshine Sparkles (Reflex): If an attack is declared: Negate that attack.`,
        keywords: ["Naive","Necrocharge","Duelist","Priority"],
        effect1name: "Sunshine Sparkles",
        effect2name: "",
        effect3name: "On Rally",
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
        text: "Target is the only Champion you can attack with this turn. Also, increase Target's Damage to be the sum of all Champions you control with the shared Tag.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Forged, Taskmaster <span class="line-gap"></span> On Rally: Excavate 2, add 1 revealed and obliterate the other. <span class="line-gap"></span> Rapid Creation (Reflex): If this card is Targeted: Excavate 5, activate 1 revealed Equipment or Obelisk (ignoring its cost). <span class="line-gap"></span> Toys for Everyone! (Exhaustion): Attach 1 Equipment to another Champion you control from your Hand or Deck (ignoring its cost).`,
        keywords: ["Taskmaster","Forged"],
        effect1name: "Rapid Creation",
        effect2name: "Toys for Everyone",
        effect3name: "On Rally",
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
        text: "Add 1 Centurion. <br><br> If this card is in your Tomb: Obliterate this card and 1 Centurion from your Tomb; Rally 1 Centurion from your Hand (ignoring its cost and conditions).",
        keywords: ["blank"],
        effect1name: "If this card is in your Tomb",
        effect2name: "",
        effect3name: "",
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
    damageThreshold: "4",
    abilities: [
      {
        text: `Lifesteal, Menace <span class="line-gap"></span> On Rally: Retrieve 1 Action or Rush. <span class="line-gap"></span> Ensnaring Strike: Target 1 Champion on the Zone; Target cannot declare attacks or block until the end of your next turn.`,
        keywords: ["Lifesteal","Menace"],
        effect1name: "On Rally",
        effect2name: "Ensnaring Strike",
        effect3name: "",
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
        text: `Bloodrage, Duelist, Priority <span class="line-gap"></span> On Rally: Target 1 face-up Champion on the Zone; Target takes 3 Damage. <span class="line-gap"></span> Weakening Strike: Champions Damaged by this card in battle can no longer block.`,
        keywords: ["Bloodrage","Priority","Duelist"],
        effect1name: "On Rally",
        effect2name: "Weakening Strike",
        effect3name: "",
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
    damage: 9,
    life: 3,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority, Taunt <span class="line-gap"></span> On Rally: Target 1 Champion you control; Target gains Invisible until the start of your next turn. <span class="line-gap"></span> Thunderstruck (Exhaustion): Target 1 Champion on the Zone; Destroy Target.`,
        keywords: ["Taunt","Priority","Duelist","Invisible"],
        effect1name: "On Rally",
        effect2name: "Thunderstruck",
        effect3name: "",
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
    damage: 4,
    life: 7,
    damageThreshold: "3",
    abilities: [
      {
        text: `Defender, Duelist, Priority <span class="line-gap"></span> On Rally: Target 1 face-up Champion on the Zone; Flip Target face-down. <span class="line-gap"></span> Aqua Armor: Decrease the Damage this card takes by its Damage Threshold.`,
        keywords: ["Defender","Priority","Duelist"],
        effect1name: "On Rally",
        effect2name: "Aqua Armor",
        effect3name: "",
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
        text: `Duelist, Priority <span class="line-gap"></span> Copycat (Reflex): Target 1 face-up Champion on the Zone: Until that Champion leaves the Zone, or this ability is used again, this card's Damage, Life, and Damage Threshold become equal to the Target's at the time of activation. <span class="line-gap"></span> If this card leaves the Zone: Recruit 1 "Apex" Champion.`,
        keywords: ["Duelist","Priority"],
        effect1name: "Copycat",
        effect2name: "If this card leaves the Zone",
        effect3name: "",
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
        text: `Parasite (Reflex): Target 1 face-up Champion on the Zone: Until that Champion leaves the Zone, or this ability is used again, this card's passives and effects become those of the Target's at the time of activation. <span class="line-gap"></span> If this card leaves the Zone: Recruit 1 "Apex" Champion.`,
        keywords: ["blank"],
        effect1name: "Parasite",
        effect2name: "If this card leaves the Zone",
        effect3name: "",
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
        text: `Soul Eater (Reflex): Target 1 face-up Champion you control; Destroy Target, and if you do, this card's Damage, Life, and Damage Threshold become equal to the Target's at the time of activation, also it gains the Target's passives and effects until the end of the next turn. <span class="line-gap"></span> If this card leaves the Zone: Recruit 1 "Apex" Champion.`,
        keywords: ["blank"],
        effect1name: "Soul Eater",
        effect2name: "If this card leaves the Zone",
        effect3name: "",
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
        text: `Recruit 1 from your Deck with a matching Tag to, and equal or less Damage than, the Destroyed Champion in the Tomb.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Deathtouch <span class="line-gap"></span> If this card battles: Destroy this card after Damage Calculation. <span class="line-gap"></span> If this card is sent to the Tomb: Obliterate this card. <span class="line-gap"></span> If this card is Obliterated: Target 1 other card in your Void; Reclaim Target.`,
        keywords: ["Deathtouch"],
        effect1name: "If this card is Obliterated",
        effect2name: "If this card battles",
        effect3name: "If this card is sent to the Tomb",
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
        text: `Fortified, Twitchy <span class="line-gap"></span> Immortality: During each End Phase: This card gains 1 Life. <span class="line-gap"></span> If Destroyed: Offer 5 Life; Resurrect this card.`,
        keywords: ["Fortified","Twitchy"],
        effect1name: "Immortality",
        effect2name: "During each End Phase",
        effect3name: "If Destroyed",
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
        text: `Add the top card of your Opponent's Deck to your Hand. <span class="line-gap"></span> If you activate it, you can do so without paying its cost.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Depending on the number of unique card types revealed, you gain the following effects: <span class="line-gap"></span> 1 • Draw 1. <span class="line-gap"></span> 2 • Retrieve 1 non-Champion. <span class="line-gap"></span> 3 • Look at your Opponent's Hand. <span class="line-gap"></span> 4 • Destroy up to 2 cards from your Opponent's Arsenal. <span class="line-gap"></span> 5 • Take control of 1 of your Opponent's Champions. </span><span class="line-gap"></span> 6 • Skip your Opponent's next turn.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `During each of your Intermissions, roll a six-sided die, and apply the following effect: <span class="line-gap"></span> 1 • Discard 1. <span class="line-gap"></span> 2 • Draw 1. <span class="line-gap"></span> 3 • Double the Damage of 1 Champion you control until the end of this turn. <span class="line-gap"></span> 4 • Obliterate Mill 5. <span class="line-gap"></span> 5 • Set 1 non-Champion from your Tomb face-down into your Arsenal. </span><span class="line-gap"></span> 6 • Change control of this card to your Opponent.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `On Rally (Mandatory): Flip a coin until you get Tails. Discard cards equal to the number of Heads flipped, then increase this card's Damage by the number of cards you discarded. <span class="line-gap"></span> Just One More Spin: If this card is sent from the Zone to the Tomb: Flip a coin and call the result. If you guessed correctly, Obliterate Mill 15 and Resurrect this card.`,
        keywords: ["blank"],
        effect1name: "Just One More Spin",
        effect2name: "If this card is sent from the Zone to the Tomb",
        effect3name: "",
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
        text: `Repair Specialist, Solitary <span class="line-gap"></span> On Rally: Activate 1 Obelisk from your Hand, Deck, or Reserve (ignoring its cost). <span class="line-gap"></span> Mine Now: Target 1 Equipment in either Tomb; Attach Target to this card (ignoring its cost). <span class="line-gap"></span> Let's Bounce (Reflex): If this card is Targeted for an attack or effect: Destroy 1 card in your Arsenal; Bounce this card.`,
        keywords: ["Repair Specialist","Solitary"],
        effect1name: "On Rally",
        effect2name: "Mine Now",
        effect3name: "Let's Bounce",
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
        text: `Repair Specialist <span class="line-gap"></span> On Rally: Activate 1 Obelisk from your Reserve (ignoring its cost).`,
        keywords: ["Repair Specialist"],
        effect1name: "On Rally",
        effect2name: "",
        effect3name: "",
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
        text: `On Rally: Target 1 Construct with 1 or less Damage in your Tomb; Resurrect Target, but negate its effects. <span class="line-gap"></span> Combination Transformation: Sacrifice this card and 1 other Construct you control; Activate 1 Commander Obelisk from your Hand, Deck, Reserve, or Tomb (ignoring its cost).`,
        keywords: ["blank"],
        effect1name: "On Rally",
        effect2name: "Combination Transformation",
        effect3name: "",
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
        text: `If Sent from the Zone to the Tomb (Mandatory): Rally 1 Scrap Token to your Zone.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "If Sent from the Zone to the Tomb",
        effect3name: "",
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
    tags: ["Arcanum","Chronurgist","Mage"],
    damage: 1,
    life: 5,
    damageThreshold: "2",
    abilities: [
      {
        text: `Second Strike, Twitchy <span class="line-gap"></span> On Rally: Target 1 non-Champion in your Tomb; retrieve Target. <span class="line-gap"></span> Temporal Twin: Rally 1 Echo Token of this card. <span class="line-gap"></span> Temporal Reversal: If this card is sent to the Tomb: Oblierate Mill 10; Resurrect this card during the next Intermission.`,
        keywords: ["Second Strike","Twitchy"],
        effect1name: "On Rally",
        effect2name: "Temporal Twin",
        effect3name: "Temporal Reversal",
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
    cost: "All face-up Champions you control take 3 Damage (minimum of 1 Champion)",
    tags: ["Arcanum","Evocation","Mage"],
    damage: 5,
    life: 1,
    damageThreshold: "2",
    abilities: [
      {
        text: `Warded <span class="line-gap"></span> On Rally: Add 1 Action. <span class="line-gap"></span> Fireball (Exhaustion): Deal 3 Damage to all face-up Champions your Opponent controls. <span class="line-gap"></span> Incendiary Demise: If this card is Destroyed by battle: Destroy the battling Champion.`,
        keywords: ["Warded"],
        effect1name: "On Rally",
        effect2name: "Fireball",
        effect3name: "Incendiary Demise",
      }
    ]
  },
  {
    id: "723",
    name: "Masterful Battle",
    image: `${cardArtFolder}/Reflex/MasterfulBattle.png`,
    rarity: "Rare",
    type: "Reflex",
    condition: "You control a \"Master\" Mage",
    cost: "",
    tags: ["Reflex"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Deal 3 Damage to all face-up Champions your Opponent controls.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Non-Believer, Taunt <span class="line-gap"></span> Portent: Choose 1 Player; Excavate 3 from Player's Deck, and if you do, return the cards in an order of your choice. <span class="line-gap"></span> Almost Had Me! (Reflex): Move this card to the Reserve.`,
        keywords: ["Taunt","Non-Believer"],
        effect1name: "Portent",
        effect2name: "Almost Had Me",
        effect3name: "",
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
        text: `Menace <span class="line-gap"></span> Behold My Minions!: Rally 1 Frog Token to your Zone.`,
        keywords: ["Menace"],
        effect1name: "Behold My Minions",
        effect2name: "",
        effect3name: "",
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
        text: `Reach <span class="line-gap"></span> Yoo Hoo!: Target 1 face-up Champion on the Zone; Target cannot declare an attack or use its effects until the start of your next turn.`,
        keywords: ["Reach"],
        effect1name: "Yoo Hoo",
        effect2name: "",
        effect3name: "",
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
        text: `Warded <span class="line-gap"></span> Alluring Gaze: Target 1 face-up Champion your Opponent controls; Take control of Target until the End Phase.`,
        keywords: ["Warded"],
        effect1name: "Alluring Gaze",
        effect2name: "",
        effect3name: "",
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
        text: `Gravekeeper, Menace, Taunt <span class="line-gap"></span> Singularity (Exhaustion): Target 1 face-up Champion your Opponent controls; Obliterate Target until the End Phase.`,
        keywords: ["Gravekeeper","Menace","Taunt"],
        effect1name: "Singularity",
        effect2name: "",
        effect3name: "",
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
        text: `Warded <span class="line-gap"></span> Force Field (Reflex): Target 1 other face-up Champion you control; Increase Target's Damage Threshold by 3 until the End Phase.`,
        keywords: ["Warded"],
        effect1name: "Force Field",
        effect2name: "",
        effect3name: "",
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
        text: `Me, Myself, and I: Rally 1 Echo Token to your Zone of this card. <span class="line-gap"></span> Syke!: This card gains Invisible, Unstoppable, and Warded so long as there is a linked Echo Token of this card on your side of the Zone.`,
        keywords: ["Invisible","Warded","Unstoppable"],
        effect1name: "Me, Myself, and I",
        effect2name: "Syke",
        effect3name: "",
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
        text: `Lead to Gold (Exhaustion): Obliterate 1 card from your Hand; Add 1 card of the same type.`,
        keywords: ["blank"],
        effect1name: "Lead to Gold",
        effect2name: "",
        effect3name: "",
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
    tags: ["Primordial","Megalith","Kaiju"],
    damage: 7,
    life: 9,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bloodrage, Menace <span class="line-gap"></span> On Rally (Mandatory): Your Opponent draws 1. <span class="line-gap"></span> City Breaker: If this card successfully attacks: You can remove 1 K-Cell Counter from anywhere on the Zone and Target 1 card on the Zone; Destroy Target. <span class="line-gap"></span> If Destroyed by Battle: Add 1 Kaiju.`,
        keywords: ["Bloodrage","Menace"],
        effect1name: "On Rally",
        effect2name: "City Breaker",
        effect3name: "If Destroyed by Battle",
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
    tags: ["Primordial","Megalith","Kaiju"],
    damage: 13,
    life: 7,
    damageThreshold: "3",
    abilities: [
      {
        text: `Bloodrage, Deathcurse <span class="line-gap"></span> The End of All Things: Remove 3 K-Cell Counters from anywhere on the Zone and Discard your entire Hand (Minimum of 1 card); Destroy all cards on the Zone. <span class="line-gap"></span> During your End Phase (Mandatory): Switch control of this card to your Opponent, and if you do, destroy it during the next End Phase.`,
        keywords: ["Bloodrage","Deathcurse"],
        effect1name: "",
        effect2name: "The End of All Things",
        effect3name: "During your End Phase",
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
        text: `Each time a card(s) is sent from the Zone to the Tomb: Place 1 K-Cell Counter on this card for each sent card (max. 5 per instance). <br><br> You can remove 3 K-Cell Counters from this card: Add 1 Clockwork.`,
        keywords: ["blank"],
        effect1name: "Each time a card(s) is sent from the Zone to the Tomb",
        effect2name: "You can remove 3 K-Cell Counters from this card",
        effect3name: "",
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
        text: `Each time a card(s) is added: Place 1 K-Cell Counter on this card for each added card (max. 5 per instance). <br><br> You can remove 2 K-Cell Counters from this card and Target 1 Champion you control: Increase Target's Damage by 2.`,
        keywords: ["blank"],
        effect1name: "Each time a card(s) is added",
        effect2name: "You can remove 2 K-Cell Counters from this card and Target 1 Champion you control",
        effect3name: "",
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
        text: `Each time an Equipment card(s) is activated: Place 1 K-Cell Counter on this card for each card activated (max. 5 per instance). <br><br> You can remove 3 K-Cell Counters from this card and Target 1 Noble in either Tomb: Resurrect Target.`,
        keywords: ["blank"],
        effect1name: "Each time an Equipment card(s) is activated",
        effect2name: "and Target 1 Noble in either Tomb",
        effect3name: "",
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
        text: `Each time an attack is declared: Place 1 K-Cell Counter on this card. <br><br> You can remove 5 K-Cell Counters from this card and Target 1 Champion on the Zone: Destroy Target. <br><br> If Destroyed: Recruit 1 Hero.`,
        keywords: ["blank"],
        effect1name: "Each time an attack is declared",
        effect2name: "You can remove 5 K-Cell Counters from this card and Target 1 Champion on the Zone",
        effect3name: "If Destroyed",
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
        text: `You can remove X K-Cell Counters from any one location on the Zone and Target 1 Champion you control; Increase Target's Damage by X.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
    tags: ["Primordial","Megalith","Kaiju"],
    damage: 4,
    life: 6,
    damageThreshold: "2",
    abilities: [
      {
        text: `Reach, Taunt <span class="line-gap"></span> On Rally (Mandatory): Obliterate Mill 2. <span class="line-gap"></span> Lightning Rider: If this card is Targeted by an attack or effect: You can remove 1 K-Cell Counter from anywhere on the Zone; Negate the triggering attack or effect, and if you do, Obliterate that triggering card and this card.`,
        keywords: ["Reach","Taunt"],
        effect1name: "On Rally",
        effect2name: "Lightning Rider",
        effect3name: "",
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
        text: `Destroy all Champions on the Zone, and if you do, Recruit 1 Kaiju to each Player's Zone. The recruited Champions must always attack if able.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `On Activation: Destroy all other face-up "Arena" Obelisks on the Zone. <span class="line-gap"></span> Each time a card(s) is drawn: Place 1 K-Cell Counter on this card for each card drawn (max. 5 per instance). <span class="line-gap"></span> You can remove 2 K-Cell Counters from this card: Destroy all face-up "Arena" Obelisks on the Zone, then activate 1 "Arena" Obelisk from your Hand or Deck (ignoring its cost), and if you do, place 1 K-Cell Counter on that card.`,
        keywords: ["blank"],
        effect1name: "On Activation",
        effect2name: "You can remove 2 K-Cell Counters from this card",
        effect3name: "Each time a card(s) is drawn",
      }
    ]
  },
  {
    id: "791",
    name: "Mechadrex, Kaiju-Crusher",
    image: `${cardArtFolder}/Champions/Mechadrex.png`,
    rarity: "Legendary",
    type: "Champion",
    condition: "Your Opponent controls a Kaiju",
    cost: "Basic",
    tags: ["Primordial","Chrome","Megalith","Kaiju","Construct"],
    damage: 5,
    life: 7,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority <span class="line-gap"></span> Kaiju-Crusher: Kaiju deal no battle Damage to this card, and you take no battle Damage from battles involving this card and an Kaiju. Additionally, this card deals double battle Damage to Kaiju. <span class="line-gap"></span> Each time this card Destroys a Kaiju by battle: Add 1 K-Cell Counter to this card.`,
        keywords: ["Duelist","Priority"],
        effect1name: "Kaiju-Crusher",
        effect2name: "",
        effect3name: "Each time this card Destroys a Kaiju by battle",
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
    tags: ["Primordial","Megalith","Kaiju"],
    damage: 10,
    life: 4,
    damageThreshold: "2",
    abilities: [
      {
        text: `Duelist, Priority <span class="line-gap"></span> On Rally (Mandatory): All other face-up Champions you control take 1 Damage. <span class="line-gap"></span> Slice and Dice (Reflex): You can remove 1 K-Cell Counter from anywhere on the Zone and Target 1 face-up Champion on the Zone; Target takes 3 Damage.`,
        keywords: ["Duelist","Priority"],
        effect1name: "On Rally",
        effect2name: "Slice and Dice",
        effect3name: "",
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
        text: `Menace <span class="line-gap"></span> False Face (Reflex): Offer 1 Life from this card and Target 1 face-up Champion on the Zone; Activate 1 of Target's effects.`,
        keywords: ["Menace"],
        effect1name: "False Face",
        effect2name: "",
        effect3name: "",
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
        text: `Invisible, Solitary, Unstoppable <span class="line-gap"></span> On Rally: Target 1 face-down Champion on the Zone; Destroy Target. <span class="line-gap"></span> Blend into the Crowd (Reflex): If this card is Targeted: Bounce this card, and if you do, discard 1.`,
        keywords: ["Invisible","Solitary","Unstoppable"],
        effect1name: "On Rally",
        effect2name: "Blend into the Crowd",
        effect3name: "",
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
        text: `Reflex: Either Player can Obliterate Mill 15; Then activate 1 of the following effects: <span class="line-gap"></span> • Draw 2. <span class="line-gap"></span> • Rally 1 Blocker Token to your Zone. <span class="line-gap"></span> • Target 1 face-up Champion on the Zone; Negate Target's passives and effects until the end of this turn.`,
        keywords: ["blank"],
        effect1name: "Reflex",
        effect2name: "",
        effect3name: "",
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
        text: "Recruit 1 Cryptbound, Vivisect, Clockwork, Noble, or Frontier Champion.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Obliterate your Opponent’s Hand, Deck, Tomb, Reserve, and all cards your Opponent controls, and if you do, both Players Unleash 1 (ignoring their conditions). <span class="line-gap"></span><span class="line-gap"></span> If either Champion leaves the Zone, that player loses. If both leave the Zone at the same time, it is a draw. Players cannot lose by failing to draw a card at the start of their turn.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Target gains Bulletproof, Defender, Non-Believer, and Taunt until the end of this turn.`,
        keywords: ["Bulletproof","Defender","Non-Believer","Taunt"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Duelist, Priority <span class="line-gap"></span> On Rally: Declare 1 Champion Tag; This card deals double battle Damage against Champions with that Tag. <span class="line-gap"></span> If this Champion has at least l attached Equipment: This card loses Duelist and gains Menace.`,
        keywords: ["Duelist","Priority","Menace"],
        effect1name: "On Rally",
        effect2name: "If this Champion has at least l attached Equipment",
        effect3name: "",
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
    damage: 4,
    life: 5,
    damageThreshold: "1",
    abilities: [
      {
        text: `Bloodrage, Board Breaker, Bulletproof, Priority <span class="line-gap"></span> Frenzied Rage (Mandatory): If this card Destroys an Opponent's Champion by battle: It must make another attack against a Champion they control. If there are no remaining Champions on your Opponent's side, this card takes 3 Damage.`,
        keywords: ["Bloodrage","Bulletproof","Priority","Board Breaker"],
        effect1name: "Frenzied Rage",
        effect2name: "",
        effect3name: "",
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
    tags: ["Righteous","Protector","Blademaster","Mage"],
    damage: 5,
    life: 5,
    damageThreshold: "3",
    abilities: [
      {
        text: `Priority, Warded <span class="line-gap"></span> Divine Smite (Reflex): During damage calculation between this card and another Champion: Discard any number of cards; Increase this card's Damage by 2 per card discarded. If it is battling a Hellfire, then increase the Damage by 3 per discarded card instead.`,
        keywords: ["Priority","Warded"],
        effect1name: "Divine Smite",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Shielded <span class="line-gap"></span> Mounted: Increase this card's Commander's Damage and Damage Threshold by 2. <span class="line-gap"></span> If Destroyed: Deal 1 Damage to all face-up Champions on the Zone.`,
        keywords: ["Mount","Shielded"],
        effect1name: "Mounted",
        effect2name: "If Destroyed",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Reach and Taunt.`,
        keywords: ["Mount","Reach","Taunt"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander's Damage increases by 5 when battling a Champion who is also a Commander.`,
        keywords: ["Mount"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Duelist and Non-Believer.`,
        keywords: ["Mount","Duelist","Non-Believer"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: `Mount <span class="line-gap"></span> Mounted: This card's Commander gains Invisible, also reduce this card's Commander's Damage by 2.`,
        keywords: ["Mount","Invisible"],
        effect1name: "Mounted",
        effect2name: "",
        effect3name: "",
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
        text: `The attached Champion cannot declare an attack unless they are the Commander of an Obelisk. <span class="line-gap"></span> The attached Champion gains Duelist and Priority. <span class="line-gap"></span> If the attached Champion battles another with a lower Damage (not including Tokens): Instead of conducting Damage Calculation, move the other Champion to the Reserve.`,
        keywords: ["Duelist","Priority"],
        effect1name: "If the attached Champion battles another with a lower Damage",
        effect2name: "not including tokens",
        effect3name: "",
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
        text: `On Activation: Rally 1 Windmill Token to your Zone. <span class="line-gap"></span> During each of your Intermissions: Destroy all Windmill Tokens you control, then Rally 1 Windmill Token to your Zone.`,
        keywords: ["blank"],
        effect1name: "During each of your Intermissions",
        effect2name: "",
        effect3name: "",
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
        text: "Devourer of Oats: Discard 1; Increase this card's Damage by 2.",
        keywords: ["blank"],
        effect1name: "Devourer of Oats",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "915",
    name: "99 Cows, 1 Bull",
    image: `${cardArtFolder}/Actions/99Cows1Bull.png`,
    rarity: "Rare",
    type: "Action",
    condition: "You control a Citizen, Livestock, or Token",
    cost: "",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Add 1 Citizen or Livestock.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "916",
    name: "Bull Rush",
    image: `${cardArtFolder}/Rush/RideTheBull.png`,
    rarity: "Rare",
    type: "Rush",
    condition: "You control at least 1 Livestock or Token",
    cost: "Target 1 face-up Champion on the Zone",
    tags: ["Rush"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Target takes 1 Damage for every Livestock and Token you control.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Livestock you control cannot be Targeted for attacks or Destroyed by effects.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `The turn Player must enter their Battle Phase on their turn (if possible), and if they do, every face-up Champion they control that can attack must declare an attack.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: "Prize Layer: Rally 1 Egg Token to your Zone.",
        keywords: ["blank"],
        effect1name: "Prize Layer",
        effect2name: "",
        effect3name: "",
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
        text: "Alarm O'Clock: Target 1 face-down Champion on the Zone; Flip Target face-up (negate its Flip effects).",
        keywords: ["blank"],
        effect1name: "Alarm O'Clock",
        effect2name: "",
        effect3name: "",
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
        text: "Headbutt!: If this card battles another Champion (after Damage Calculation): Target 1 face-up Equipment or Obelisk on the Zone; Destroy Target.",
        keywords: ["blank"],
        effect1name: "Headbutt",
        effect2name: "",
        effect3name: "",
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
        text: "Milk the Cow... Now: Target 1 Champion on the Zone; Target cannot block this turn.",
        keywords: ["blank"],
        effect1name: "Milk the Cow",
        effect2name: "Now",
        effect3name: "",
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
    cost: "Target 1 Livestock you control",
    tags: ["Action"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: `Rally 1 Echo Token of Target to your Zone.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Obliterate 1 Livestock from your Tomb; Draw 1.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  },
  {
    id: "925",
    name: "Plowey McPlowerson",
    image: `${cardArtFolder}/Equipments/PloweyMcPlowerson.png`,
    rarity: "Superior",
    type: "Equipment",
    condition: "Attach only to a Livestock",
    cost: "",
    tags: ["Equipment"],
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Target 1 card in your Arsenal; Destroy Target, and if you do, set face-down into your Arsenal another of card of the same type from your Deck.",
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `Bloodrage, Taskmaster <span class="line-gap"></span> Pest Control (Exhaustion): Target 1 face-up Champion on the Zone with 1 or less Damage; Destroy Target.`,
        keywords: ["Bloodrage","Taskmaster"],
        effect1name: "Pest Control",
        effect2name: "",
        effect3name: "",
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
        text: `All Champions who are currently Commanders of Obelisks become dismounted from their Obelisks.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `If your Opponent controls 7 or more face-up Champions with the declared Tag: Destroy all face-up Champions with that tag.`,
        keywords: ["blank"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
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
        text: `If you control at least 1 Champion: Champions your Opponent controls no longer gain the benefits of Priority. <span class="line-gap"></span><span class="line-gap"></span> If your Opponent declares an attack while you control at least 1 Champion: You must block all of their attacks (if you are able to).`,
        keywords: ["Priority"],
        effect1name: "If you control at least 1 Champion",
        effect2name: "If your Opponent declares an attack while you control at least 1 Champion",
        effect3name: "",
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
        text: `Bloodrage, Heavy Hands, Necrocharge <span class="line-gap"></span> On Rally (Mandatory): Target 1 face-up Champion on the Zone; Reduce Target to 1 Life. <span class="line-gap"></span> Live To Rock: If this card is in your Tomb: Obliterate 7 other Champions from your Tomb; Resurrect this card. <br><br>&nbsp;`,
        keywords: ["Bloodrage","Heavy Hands","Necrocharge"],
        effect1name: "On Rally",
        effect2name: "Live to Rock",
        effect3name: "",
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
        text: `Priority, Veilbind <span class="line-gap"></span> On Rally: Offer up to 3 Life from this card; Increase this card's Damage by the amount offered. <span class="line-gap"></span> Pactbound (Reflex): If this card would be Destroyed (Mandatory): Offer 4 Life; It is not Destroyed.`,
        keywords: ["Priority","Veilbind"],
        effect1name: "On Rally",
        effect2name: "Pactbound",
        effect3name: "",
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
    tags: ["Driftmarked","Trickster"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: `Chomp (Flip): Move this card to your Arsenal and Target 1 card on the Zone; Target's effects are negated, and Target cannot attack, block, be activated, or activate any of its effects, so long as this card remains face-up in your Arsenal. If flipped face-up by battle: Instead of being Destroyed, move this card to your Arsenal.`,
        keywords: ["blank"],
        effect1name: "Chomp",
        effect2name: "",
        effect3name: "",
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
    tags: ["Driftmarked","Outlaw"],
    damage: 1,
    life: 3,
    damageThreshold: "3",
    abilities: [
      {
        text: `Blood in the Water: Increase this card's Damage by 1 for every face-up Champion on the Zone whose current Life is lower than their starting Life.`,
        keywords: ["blank"],
        effect1name: "Blood in the Water",
        effect2name: "",
        effect3name: "",
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
    tags: ["Driftmarked","Megalith"],
    damage: 7,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: `Contained`,
        keywords: ["Contained"],
        effect1name: "",
        effect2name: "",
        effect3name: "",
      }
    ]
  }
];