const tokenArtFolder = "https://geimon-app-833627ba44e0.herokuapp.com/Public/Images/Card Assets/Tokens";

export const tokens = [
{
    id: "9001",
    name: "Blocker Token",
    image: `${tokenArtFolder}/Blocker.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 0,
    life: 7,
    damageThreshold: "1",
    abilities: [
      {
        text: ""
      }
    ]
},
{
    id: "9002",
    name: "Care Token",
    image: `${tokenArtFolder}/Care.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You draw 1 additional card during each of your Draw Phases."
      }
    ]
},
{
    id: "9003",
    name: "Fear Token",
    image: `${tokenArtFolder}/Fear.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 7,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You cannot activate Champion effects."
      }
    ]
},
{
    id: "9004",
    name: "Greed Token",
    image: `${tokenArtFolder}/Greed.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 3,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You cannot Bury, Discard, Sacrifice, or Obliterate cards."
      }
    ]
},
{
    id: "9005",
    name: "Grenade Token",
    image: `${tokenArtFolder}/Grenade.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Offer 1 Life; Transfer control of this Token to your opponent. <br><br> If it becomes your End Phase while you control this Token (Mandatory): Destroy this Token; You take 10 Damage."
      }
    ]
},
{
    id: "9006",
    name: "Hunky Token",
    image: `${tokenArtFolder}/Hunky.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 5,
    life: 2,
    damageThreshold: "2",
    abilities: [
      {
        text: ""
      }
    ]
},
{
    id: "9007",
    name: "Jumper Token",
    image: `${tokenArtFolder}/Jumper.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 0,
    life: 20,
    damageThreshold: "1",
    abilities: [
      {
        text: "Springboard: Sacrifice this Token; Rally 1 Champion from your hand (ignoring its cost)."
      }
    ]
},
{
    id: "9008",
    name: "Macho Token",
    image: `${tokenArtFolder}/Macho.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 5,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: This is the only Champion you can attack with during your Battle Phase."
      }
    ]
},
{
    id: "9009",
    name: "Rage Token",
    image: `${tokenArtFolder}/Rage.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 7,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You skip your Main Phase 1 and immediately enter your Battle Phase."
      }
    ]
},
{
    id: "9010",
    name: "Scrap Token",
    image: `${tokenArtFolder}/Scrap.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Recycling: Sacrifice this Token; Draw 1."
      }
    ]
},
{
    id: "9011",
    name: "Sloth Token",
    image: `${tokenArtFolder}/Sloth.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 1,
    life: 10,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You cannot declare attacks."
      }
    ]
},
{
    id: "9012",
    name: "Stasis Token",
    image: `${tokenArtFolder}/Stasis.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: Your Life cannot be increased or decreased."
      }
    ]
},
{
    id: "9013",
    name: "Tumbleweed Token",
    image: `${tokenArtFolder}/Tumbleweed.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Frontier","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: You cannot declare attacks."
      }
    ]
},
{
    id: "9014",
    name: "Fuel Token",
    image: `${tokenArtFolder}/Fuel.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 0,
    life: 7,
    damageThreshold: "1",
    abilities: [
      {
        text: "Jumpstart: This Token can be counted for any number of Sacrifices for a single card or effect."
      }
    ]
},
{
    id: "9015",
    name: "Dust Token",
    image: `${tokenArtFolder}/Dust.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Reflex: When an Opponent declares an attack: Sacrifice this Token; Negate that attack."
      }
    ]
},
{
    id: "9016",
    name: "Wake Token",
    image: `${tokenArtFolder}/Wake.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Token"],
    damage: 0,
    life: 3,
    damageThreshold: "1",
    abilities: [
      {
        text: "While you control this Token: Decrease the Damage Threshold of all Champions on the Zone by 1."
      }
    ]
},
{
    id: "9017",
    name: "Echo Token",
    image: `${tokenArtFolder}/Echo.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Token"],
    damage: "X",
    life: "X",
    damageThreshold: "1",
    abilities: [
      {
        text: "This Token’s Damage and Life are equal to the linked Target’s at the time of its Rallying. <br><br> If the linked Target leaves the Zone: Destroy this Token."
      }
    ]
},
{
    id: "9018",
    name: "Burrow Token",
    image: `${tokenArtFolder}/Burrow.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Token"],
    damage: "0",
    life: "1",
    damageThreshold: "1",
    abilities: [
      {
        text: "Deathward"
      }
    ]
},
{
    id: "9019",
    name: "Mulch Token",
    image: `${tokenArtFolder}/Mulch.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: "X",
    life: "X",
    damageThreshold: "1",
    abilities: [
      {
        text: "This Token’s Damage and Life are equal to the last remaining Damage and Life of the Champion it is replacing."
      }
    ]
},
{
    id: "9020",
    name: "Meat Token",
    image: `${tokenArtFolder}/Meat.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: "0",
    life: "2",
    damageThreshold: "1",
    abilities: [
      {
        text: "Slice and Dice: Offer 1 Life from this Token; Rally 1 Bile Token to your Zone."
      }
    ]
},
{
    id: "9021",
    name: "Bile Token",
    image: `${tokenArtFolder}/Bile.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: "0",
    life: "1",
    damageThreshold: "1",
    abilities: [
      {
        text: ""
      }
    ]
},
{
    id: "9022",
    name: "Ghost Token",
    image: `${tokenArtFolder}/Ghost.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Undead","Token"],
    damage: "X",
    life: "X",
    damageThreshold: "1",
    abilities: [
      {
        text: "This Token’s Damage and Life are equal to the Damage and Life of the Targeted Champion in the Tomb. <br><br> Destroy this Token if the Targeted Champion leaves the Tomb."
      }
    ]
},
{
    id: "9023",
    name: "Cow Token",
    image: `${tokenArtFolder}/Cow.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Livestock","Token"],
    damage: "0",
    life: "2",
    damageThreshold: "2",
    abilities: [
      {
        text: ""
      }
    ]
},
{
    id: "9024",
    name: "Windmill Token",
    image: `${tokenArtFolder}/Windmill.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Deathward <br><br> Knights who declare attacks must attack this Token. <br><br> You, and this Token, take no Battle Damage from Knights involving this Token. <br><br> You can block with this Token only against Knights, but you can do so with no limit."
      }
    ]
},
{
    id: "9025",
    name: "Frog Token",
    image: `${tokenArtFolder}/Frog.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Taunt"
      }
    ]
},
{
    id: "9026",
    name: "Egg Token",
    image: `${tokenArtFolder}/Egg.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Livestock","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Breakfast of Champions: Sacrifice this card and Target 1 face-up Champion on the Zone; Target gains 1 Life."
      }
    ]
},
{
    id: "9027",
    name: "Shark Token",
    image: `${tokenArtFolder}/Shark.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Shark","Token"],
    damage: 5,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Deathward <br><br> Tear it Down: If this Token reduces a Champion to 1 Life by battle: Destroy that Champion."
      }
    ]
},
{
    id: "9028",
    name: "Bamboo Token",
    image: `${tokenArtFolder}/Bamboo.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Construct","Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: "Deathward <br><br> Armor Up: Sacrifice this Token; Add 1 Equipment."
      }
    ]
},
{
    id: "9029",
    name: "Lollipop Token",
    image: `${tokenArtFolder}/Lollipop.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Token"],
    damage: 0,
    life: 1,
    damageThreshold: "1",
    abilities: [
      {
        text: ""
      }
    ]
},
{
    id: "9030",
    name: "Trophy Token",
    image: `${tokenArtFolder}/Trophy.png`,
    type: "Champion",
    condition: "",
    cost: "",
    tags: ["Token"],
    damage: 0,
    life: 2,
    damageThreshold: "1",
    abilities: [
      {
        text: ""
      }
    ]
}
];