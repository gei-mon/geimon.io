export const cards = [
  {
    id: "1",
    name: "Skeleton Guard",
    type: "Champion",
    tag1: "Cryptbound",
    tag2: "Undead",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    cost: "Offer 1 Life.",
    damage: 2,
    life: 3,
    abilities: [
      {
        text: "Deathward <br> If Sent to Tomb: Retrieve 1 other Undead Champion.",
        keywords: ["Deathward", "Retrieve"],
        effect: "retrieve_1_undead"
      }
    ]
  },
  {
    id: "2",
    name: "Fresh Undead",
    type: "Champion",
    tag1: "Cryptbound",
    tag2: "Undead",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    cost: "Offer 1 Life.",
    damage: 1,
    life: 6,
    abilities: [
      {
        text: "Bloodrage, Deathward <br> If Sent to Tomb: Resurrect this card, but Obliterate it when it leaves the Zone.",
        keywords: ["Deathward", "Bloodrage", "Resurrect", "Obliterate"]
      }
    ]
  },
  {
    id: "3",
    name: "Markerion, Magus Supreme",
    type: "Champion",
    tag1: "Cryptbound",
    tag2: "Necromancer",
    tag3: "Mage",
    tag4: "",
    tag5: "",
    tag6: "",
    cost: "Offer 5 Life, Mill 5, and Sacrifice 1.",
    damage: 5,
    life: 20,
    abilities: [
      {
        text: "Deathward, Warded <br> On Rally: Excavate 3; Add 1 revealed and Obliterate the other 2. <br> Mind Augus (Exhaustion): Excavate 6 from your opponent&apos;s deck; Obliterate 1 card, return the rest in the order they were in. <br> Shattered Connection (Reflex): If this card would be destroyed: Send 1 card from your hand or Zone to the Tomb; this card is not destroyed.",
        keywords: ["Deathward", "Warded", "Excavate", "Add", "Obliterate", "Exhaustion", "Reflex"],
        effect1: "Mind Augus",
        effect2: "Shattered Connection"
      }
    ]
  }
];
