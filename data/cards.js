const cardArtFolder = "https://geimon-app-833627ba44e0.herokuapp.com/Public/Images/Card Assets";

export const cards = [
  {
    id: "1",
    name: "Skeleton Guard",
    image: `${cardArtFolder}/SkeletonGuard.png`,
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
    image: `${cardArtFolder}/FreshUndead.png`,
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
    image: `${cardArtFolder}/MarkerionSupreme.png`,
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
    image: `${cardArtFolder}/SyamirLordBones.png`,
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
    image: `${cardArtFolder}/NavarielLordOblivion.png`,
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
    image: `${cardArtFolder}/ReshamelGuide.png`,
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
    image: `${cardArtFolder}/BoneConstruct.png`,
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
  }
];
