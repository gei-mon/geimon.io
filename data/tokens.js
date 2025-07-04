const tokenArtFolder = "https://geimon-app-833627ba44e0.herokuapp.com/Public/Images/Card Assets/Tokens";

export const tokens = [
{
    id: "9001",
    name: "Blocker Token",
    image: `${tokenArtFolder}/Blocker.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 0,
    life: 7,
    damageThreshold: "1",
    abilities: [
      {
        text: "",
        keywords: ["blank"],
        effect1name: "",
      }
    ]
},
{
    id: "9002",
    name: "Care Token",
    image: `${tokenArtFolder}/Care.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You draw 1 additional card during each of your Draw Phases.",
        keywords: ["blank"],
        effect1name: "While you control this Token",
      }
    ]
},
{
    id: "9003",
    name: "Fear Token",
    image: `${tokenArtFolder}/Fear.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 7,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You cannot activate Champion effects.",
        keywords: ["blank"],
        effect1name: "While you control this Token",
      }
    ]
},
{
    id: "9004",
    name: "Greed Token",
    image: `${tokenArtFolder}/Greed.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 3,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You cannot Bury, Discard, Sacrifice, or Obliterate cards.",
        keywords: ["blank"],
        effect1name: "While you control this Token",
      }
    ]
},
{
    id: "9005",
    name: "Grenade Token",
    image: `${tokenArtFolder}/Grenade.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Offer 1 Life; transfer control of this Token to your opponent. <br><br> If it becomes your End Phase while you control this Token (Mandatory): Destroy this Token; you take 10 Damage.",
        keywords: ["blank"],
        effect1name: "If it becomes your End Phase while you control this Token",
      }
    ]
},
{
    id: "9006",
    name: "Hunky Token",
    image: `${tokenArtFolder}/Hunky.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 5,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: "",
        keywords: ["blank"],
        effect1name: "",
      }
    ]
},
{
    id: "9007",
    name: "Jumper Token",
    image: `${tokenArtFolder}/Jumper.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 0,
    life: 20,
    damageThreshold: "1",
    abilities: [
      {
        text: "Sacrifice this Token; Rally 1 Champion from your hand (ignoring its cost).",
        keywords: ["blank"],
        effect1name: "",
      }
    ]
},
{
    id: "9008",
    name: "Macho Token",
    image: `${tokenArtFolder}/Macho.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 5,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: This is the only Champion you can attack with during your Battle Phase.",
        keywords: ["blank"],
        effect1name: "While you control this Token",
      }
    ]
},
{
    id: "9009",
    name: "Rage Token",
    image: `${tokenArtFolder}/Rage.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 7,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You skip your Main Phase 1 and immediately enter your Battle Phase.",
        keywords: ["blank"],
        effect1name: "While you control this Token",
      }
    ]
},
{
    id: "9010",
    name: "Scrap Token",
    image: `${tokenArtFolder}/Scrap.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Sacrifice this Token; Draw 1.",
        keywords: ["blank"],
        effect1name: "",
      }
    ]
},
{
    id: "9011",
    name: "Sloth Token",
    image: `${tokenArtFolder}/Sloth.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 1,
    life: 10,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You cannot declare attacks.",
        keywords: ["blank"],
        effect1name: "While you control this Token",
      }
    ]
},
{
    id: "9012",
    name: "Stasis Token",
    image: `${tokenArtFolder}/Stasis.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: Your Life cannot be increased or decreased.",
        keywords: ["blank"],
        effect1name: "While you control this Token",
      }
    ]
},
{
    id: "9013",
    name: "Tumbleweed Token",
    image: `${tokenArtFolder}/Tumbleweed.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You cannot declare attacks.",
        keywords: ["blank"],
        effect1name: "While you control this Token",
      }
    ]
},
{
    id: "9014",
    name: "Fuel Token",
    image: `${tokenArtFolder}/Fuel.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Construct","Token"],
    damage: 0,
    life: 7,
    damageThreshold: "1",
    abilities: [
      {
        text: "This Token can be counted for any number of Sacrifices for a single card or effect.",
        keywords: ["blank"],
        effect1name: "",
      }
    ]
},
{
    id: "9015",
    name: "Dust Token",
    image: `${tokenArtFolder}/Dust.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Reflex: When an Opponent declares an attack: Sacrifice this Token; Negate that attack.",
        keywords: ["blank"],
        effect1name: "Reflex",
        effect2name: "When an Opponent declares an attack",
      }
    ]
},
{
    id: "9016",
    name: "Wake Token",
    image: `${tokenArtFolder}/Wake.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: 0,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: Decrease the Damage Threshold of all Champions on the Zone by 1.",
        keywords: ["blank"],
        effect1name: "While you control this Token",
      }
    ]
},
{
    id: "9017",
    name: "Echo Token",
    image: `${tokenArtFolder}/Echo.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: "X",
    life: "X",
    damageThreshold: "1",
    abilities: [
      {
        text: "This Token’s Damage and Life are equal to the linked Target’s at the time of its Rallying. <br><br> If the linked Target leaves the Zone: Destroy this Token.",
        keywords: ["blank"],
        effect1name: "If the linked Target leaves the Zone",
      }
    ]
},
{
    id: "9018",
    name: "Burrow Token",
    image: `${tokenArtFolder}/Burrow.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: "0",
    life: "1",
    damageThreshold: "1",
    abilities: [
      {
        text: "Deathward",
        keywords: ["Deathward"],
        effect1name: "",
      }
    ]
},
{
    id: "9019",
    name: "Mulch Token",
    image: `${tokenArtFolder}/Mulch.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: "X",
    life: "X",
    damageThreshold: "1",
    abilities: [
      {
        text: "This Token’s Damage and Life are equal to the last remaining Damage and Life of the Champion it is replacing.",
        keywords: ["blank"],
        effect1name: "",
      }
    ]
},
{
    id: "9020",
    name: "Meat Token",
    image: `${tokenArtFolder}/Meat.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: "0",
    life: "2",
    damageThreshold: "1",
    abilities: [
      {
        text: "Slice and Dice: Offer 1 Life from this Token; Rally 1 Bile Token to your Zone.",
        keywords: ["blank"],
        effect1name: "Slice and Dice",
      }
    ]
},
{
    id: "9021",
    name: "Bile Token",
    image: `${tokenArtFolder}/Bile.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: "0",
    life: "1",
    damageThreshold: "1",
    abilities: [
      {
        text: "",
        keywords: ["blank"],
        effect1name: "",
      }
    ]
},
{
    id: "9022",
    name: "Ghost Token",
    image: `${tokenArtFolder}/Ghost.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: "X",
    life: "X",
    damageThreshold: "1",
    abilities: [
      {
        text: "This Token’s Damage and Life are equal to the Damage and Life of the Targeted Champion in the Tomb. <br><br> Destroy this Token if the Targeted Champion leaves the Tomb.",
        keywords: ["blank"],
        effect1name: "",
      }
    ]
},
{
    id: "9023",
    name: "Cow Token",
    image: `${tokenArtFolder}/Cow.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: "0",
    life: "2",
    damageThreshold: "2",
    abilities: [
      {
        text: "",
        keywords: ["blank"],
        effect1name: "",
      }
    ]
},
{
    id: "9024",
    name: "Windmill Token",
    image: `${tokenArtFolder}/Windmill.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Deathward <br><br> Knights who declare attacks must attack this Token. You, and this Token, take no battle Damage from Knights involving this Token. You can block with this Token only against Knights, but you can do so with no limit.",
        keywords: ["Deathward"],
        effect1name: "",
      }
    ]
},
{
    id: "9025",
    name: "Frog Token",
    image: `${tokenArtFolder}/Frog.png`,
    type: "Champion",
    condition: "",
    cost: "Basic",
    tags: ["Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Taunt",
        keywords: ["Taunt"],
        effect1name: "",
      }
    ]
}
];