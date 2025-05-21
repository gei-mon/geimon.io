const cardArtFolder = "https://geimon-app-833627ba44e0.herokuapp.com/Public/Images/Card Assets";

export const cards = [
  {
    id: "1",
    name: "Skeleton Guard",
    image: `${cardArtFolder}/Champions/SkeletonGuard.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tag1: "Cryptbound",
    tag2: "Undead",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 2,
    life: 3,
    damageThreshold: "",
    abilities: [
      {
        text: "Deathward <br> If Sent to Tomb: Retrieve 1 other Undead Champion.",
        keywords: ["Deathward"],
        effect1: "retrieve_1_undead"
      }
    ]
  },
  {
    id: "2",
    name: "Fresh Undead",
    image: `${cardArtFolder}/Champions/FreshUndead.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tag1: "Cryptbound",
    tag2: "Undead",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 1,
    life: 6,
    damageThreshold: "",
    abilities: [
      {
        text: "Bloodrage, Deathward <br> If Sent to Tomb: Resurrect this card, but Obliterate it when it leaves the Zone.",
        keywords: ["Deathward", "Bloodrage"],
        effect1: "res_self_w_obl"
      }
    ]
  },
  {
    id: "3",
    name: "Markerion, Magus Supreme",
    image: `${cardArtFolder}/Champions/MarkerionSupreme.png`,
    type: "Champion",
    condition: "",
    cost: "Offer 5 Life, Mill 5, and Sacrifice 1",
    tag1: "Cryptbound",
    tag2: "Necromancer",
    tag3: "Mage",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 5,
    life: 20,
    damageThreshold: "",
    abilities: [
      {
        text: "Deathward, Warded <br> On Rally: Excavate 3; Add 1 revealed, Obliterate the other 2. <br> Mind Augus (Exhaustion): Excavate 5 from your opponent&apos;s deck; Obliterate 1, return the rest in the same order. <br> Shattered Connection (Reflex): If this card would be destroyed: Send 1 other card from your hand or Zone to the Tomb; it is not destroyed.",
        keywords: ["Deathward", "Warded"],
        effect1: "MindAugus",
        effect2: "ShatteredConnection"
      }
    ]
  },
  {
    id: "4",
    name: "Syamir, Lord of Bones",
    image: `${cardArtFolder}/Champions/SyamirLordBones.png`,
    type: "Champion",
    condition: "",
    cost: "Offer 10 Life",
    tag1: "Cryptbound",
    tag2: "Undead",
    tag3: "Lord",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 10,
    life: 10,
    damageThreshold: "",
    abilities: [
      {
        text: "Bloodrage, Deathward <br> Soulburn (Exhaustion): Offer up to a total of 3 Life from Champions you control; Destroy cards on the Zone up to the Life offered.",
        keywords: ["Bloodrage", "Deathward"],
        effect1: "Soulburn"
      }
    ]
  },
  {
    id: "5",
    name: "Navariel, Lord of Oblivion",
    image: `${cardArtFolder}/Champions/NavarielLordOblivion.png`,
    type: "Champion",
    condition: "",
    cost: "Mill 10",
    tag1: "Cryptbound",
    tag2: "Undead",
    tag3: "Lord",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 20,
    life: 10,
    damageThreshold: "2",
    abilities: [
      {
        text: "Deathpower, Deathtouch <br> On Rally: Obliterate all cards in both players' Tombs. <br> Break the Seal: Resurrect or Unleash 1 Undead, but Destroy all Champions rallied this way if this card leaves the Zone. <br> Fateseal (Reflex, Exhaustion): Obliterate the top 10 cards of your deck; Reduce the Life of all other Champions to 1.",
        keywords: ["Deathpower", "Deathtouch"],
        effect1: "oblTombs",
        effect2: "resUnl_1Undead",
        effect3: "Fateseal"
      }
    ]
  },
  {
    id: "6",
    name: "Reshamel, Guide to the Dead",
    image: `${cardArtFolder}/Champions/ReshamelGuide.png`,
    type: "Champion",
    condition: "",
    cost: "Obliterate 2 cards you control",
    tag1: "Cryptbound",
    tag2: "Undead",
    tag3: "Lord",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 5,
    life: 5,
    damageThreshold: 4,
    abilities: [
      {
        text: "Deathtouch, Deathward <br> On Rally: Bury 1. <br> Rend Soul (Exhaustion): Obliterate 1 card you control; Obliterate 1 card on the Zone. <br> If Obliterated: During the next Intermission phase, Unleash 1 Undead.",
        keywords: ["Deathtouch","Deathward"],
        effect1: "Bury",
        effect2: "RendSoul",
        effect3: "unleashUndead"
      }
    ]
  },
  {
    id: "7",
    name: "Bone Construct",
    image: `${cardArtFolder}/Champions/BoneConstruct.png`,
    type: "Champion",
    condition: "",
    cost: "Offer 5 Life",
    tag1: "Cryptbound",
    tag2: "Undead",
    tag3: "Construct",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 0,
    life: 7,
    damageThreshold: "",
    abilities: [
      {
        text: "Deathward, Necrocharge <br> On Rally: Mill 3.",
        keywords: ["Deathward","Necrocharge"],
        effect1: "mill3"
      }
    ]
  },
  {
    id: "8",
    name: "Necro Neko",
    image: `${cardArtFolder}/Champions/NecroNeko.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tag1: "Cryptbound",
    tag2: "Undead",
    tag3: "Helper",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 0,
    life: 1,
    damageThreshold: "",
    abilities: [
      {
        text: "Library Assistant: Excavate 3; Add 1 revealed Undead or Helper, or a card that mentions an Undead or Helper. <br> Powerful Core: Sacrifice this card and target 1 other Undead in your Tomb; Resurrect target. The resurrected Champion gains Warded. <br> Helping Hand: If card is in your Tomb: Obliterate this card and target 1 Undead or Helper in your Tomb; Resurrect target.",
        keywords: ["blank"],
        effect1: "LibAss",
        effect2: "PowerfulCore",
        effect3: "NecroHelpingHand"
      }
    ]
  },
  {
    id: "9",
    name: "Rise Again!",
    image: `${cardArtFolder}/Actions/RiseAgain.png`,
    type: "Action",
    condition: "",
    cost: "",
    tag1: "Action",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Offer half your Life; Resurrect or Unleash up to a total of 3 Undead.",
        keywords: ["blank"],
        effect1: "resUnl3Undead"
      }
    ]
  },
  {
    id: "10",
    name: "From Death, Life",
    image: `${cardArtFolder}/Equipments/FromDeathLife.png`,
    type: "Equipment",
    condition: "",
    cost: "",
    tag1: "Equipment",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Target 1 Undead in either Tomb and Offer 3 Life; Resurrect target Champion and attach this card to it. If this card leaves the zone, destroy the equipped Champion.",
        keywords: ["blank"],
        effect1: "resEit1UndEquip"
      }
    ]
  },
  {
    id: "11",
    name: "Necromancer’s Tome",
    image: `${cardArtFolder}/Obelisks/NecromancerTome.png`,
    type: "Obelisk",
    condition: "",
    cost: "",
    tag1: "Obelisk",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Offer 3 Life; Excavate 3, add 1 revealed. <br> If this card is in your Tomb: Obliterate this card; Resurrect 1 Undead from either Tomb.",
        keywords: ["blank"],
        effect1: "ex3add1",
        effect2: "resEit1Und"
      }
    ]
  },
  {
    id: "12",
    name: "Boom!",
    image: `${cardArtFolder}/Rush/Boom.png`,
    type: "Rush",
    condition: "",
    cost: "",
    tag1: "Rush",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "When an Undead you control battles another Champion: Destroy your Undead; Destroy the other Champion.",
        keywords: ["blank"],
        effect1: "undPopBattlers"
      }
    ]
  },
  {
    id: "13",
    name: "Plaguetouch",
    image: `${cardArtFolder}/Reflex/Plaguetouch.png`,
    type: "Reflex",
    condition: "",
    cost: "",
    tag1: "Reflex",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "When an opponent’s Champion declares an attack: Mill 4 and target the attacking Champion; Negate the Attack, and if you do, deal Damage to your opponent equal to that Champion’s Damage.",
        keywords: ["blank"],
        effect1: "magCyl"
      }
    ]
  },
  {
    id: "14",
    name: "Soul Absorption",
    image: `${cardArtFolder}/Reflex/SoulAbsorption.png`,
    type: "Action",
    condition: "",
    cost: "",
    tag1: "Action",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Sacrifice any number of Champions you control; Gain Life equal to those Champions’ remaining Life. <br> If this card is in your Tomb (Reflex): Obliterate this card and Sacrifice 1 Champion you control; Gain double that Champion's remaining Life.",
        keywords: ["blank"],
        effect1: "gainCurrentLife",
        effect2: "gainDoubleLife"
      }
    ]
  },
  {
    id: "15",
    name: "Forbidden Rebirth",
    image: `${cardArtFolder}/Reflex/ForbiddenRebirth.png`,
    type: "Action",
    condition: "",
    cost: "",
    tag1: "Action",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Target 1 Champion in your opponent's Tomb and Offer 6 Life; Resurrect target Champion to your zone, it is now also considered an Undead.",
        keywords: ["blank"],
        effect1: "gainCurrentLife"
      }
    ]
  },
  {
    id: "16",
    name: "Flash Forward",
    image: `${cardArtFolder}/Reflex/FlashForward.png`,
    type: "Action",
    condition: "",
    cost: "",
    tag1: "Action",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "All players draw 1 and reveal them; If the revealed card is a Champion, that player can immediately Rally it (ignoring its cost).",
        keywords: ["blank"],
        effect1: "rallyDrawnChampion"
      }
    ]
  },
  {
    id: "17",
    name: "March of the Dead",
    image: `${cardArtFolder}/Reflex/MarchoftheDead.png`,
    type: "Action",
    condition: "",
    cost: "",
    tag1: "Action",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Your opponent can Retrieve up to 2; Mill cards equal to the number of cards in your opponent's Tomb.",
        keywords: ["blank"],
        effect1: "millTombCount"
      }
    ]
  },
  {
    id: "18",
    name: "Corrupted Rebirth",
    image: `${cardArtFolder}/Reflex/CorruptedRebirth.png`,
    type: "Equipment",
    condition: "",
    cost: "",
    tag1: "Equipment",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Target 1 Champion in either Tomb and 3 other Champions in your Tomb; Resurrect the first target and attach this card to it, and if you do, Obliterate the other 3 targets. If this card leaves the zone, destroy the equipped Champion.",
        keywords: ["blank"],
        effect1: "resEit1Equip"
      }
    ]
  },
  {
    id: "19",
    name: "Oppressive Ward",
    image: `${cardArtFolder}/Reflex/OppressiveWard.png`,
    type: "Obelisk",
    condition: "",
    cost: "",
    tag1: "Obelisk",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: "",
    life: "",
    damageThreshold: "",
    abilities: [
      {
        text: "Sacrifice 1 Champion; For every attack a player makes, they must Offer 1 Life.",
        keywords: ["blank"],
        effect1: "toll1"
      }
    ]
  },
  {
    id: "61",
    name: "Areza, Town Harlot",
    image: `${cardArtFolder}/Champions/ArezaHarlot.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tag1: "Frontier",
    tag2: "Citizen",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 2,
    life: 3,
    damageThreshold: "",
    abilities: [
      {
        text: "Deathcurse, Lifetouch, Priority",
        keywords: ["Deathcurse","Lifetouch","Priority"]
      }
    ]
  },
  {
    id: "62",
    name: "Cyrus, the Dustwalker",
    image: `${cardArtFolder}/Champions/CyrusDustwalker.png`,
    type: "Champion",
    condition: "",
    cost: "Discard 2 other cards.",
    tag1: "Frontier",
    tag2: "Outlaw",
    tag3: "Marksman",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 10,
    life: 8,
    damageThreshold: "",
    abilities: [
      {
        text: "Heavy Hands <br> On Rally: Draw 2. <br> Deadeye (Reflex): Discard 1 and target 1 card on the Zone; Destroy target.",
        keywords: ["Heavy Hands"],
        effect1: "draw2",
        effect2: "deadeye"
      }
    ]
  },
  {
    id: "63",
    name: "Jane, Perfect Shot",
    image: `${cardArtFolder}/Champions/PerfectJane.png`,
    type: "Champion",
    condition: "",
    cost: "Reveal this card, then your opponent randomly chooses 1 card from your hand which you discard. If the discarded card was not this card, it will be Rallied.",
    tag1: "Frontier",
    tag2: "Marshall",
    tag3: "Marksman",
    tag4: "",
    tag5: "",
    tag6: "",
    damage: 8,
    life: 8,
    damageThreshold: "",
    abilities: [
      {
        text: "Priority <br> On Rally: Draw 1. <br> If Discarded: Add 1 Equipment or Rush.",
        keywords: ["Priority"],
        effect1: "draw1",
        effect2: "add1EqORrush"
      }
    ]
  }
];
