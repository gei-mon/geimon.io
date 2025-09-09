const totems = [
    {
        "Glass Bones and Paper Skin": "Starting life is set at 10.", // Server
        "Double Double": "Turn Player draws an extra card in their Draw Phase.", // Player
        "Fake Doctor": "All Gain Life effects aimed towards a Player now Damage the Player that amount instead, and all Damage and Offer effects now Grant that amount of Life instead.", // Server
        "Countdown Clocktower": "At the end of the 12th turn, the Player with the highest Life wins.", // Server
        "Pendulum of Pain": "During each End Phase, both Players take 1 Damage.", // Player
        "Tomb Raider Rejects": "Cards cannot be Retrieved.", // Player
        "Necromancer Died": "Cards cannot be Resurrected.", // Player
        "Blindfolded": "Cards cannot be Added.", // Player
        "Single File": "Turn Player can only attack with 1 Champion during their Battle Phase.", // Player
        "Fair Play": "Both Players play with their Hands revealed.", // Server (kinda done)
        "Shared Interest": "Neither Player can Damage their Opponent until the start of Turn 7.", // Player
        "Terrifying Toddlers": "Double the Damage of battling Champions with a current Damage of 2 or lower (During Damage Calculation only).", // Player
        "Fists Only": "Damage can only be dealt by attack.", // Player
        "Caught in your Underwear": "No Damage Thresholds.", // Player
        "All or Nothing": "The Damage a Champion takes from a single event must Destroy it or the Damage does nothing.", // Player
        "Cannon Fodder": "Both Players can perform an unlimited number of Basic Rallies on their turns.",
        "Rules as Written": "Costs cannot be ignored.",
        "Fire Sale": "Ignore the costs on Equipment cards.",
        "Insurance Policy": "When a face-up Mounted Commander Obelisk a Player controls is Destroyed, that Player can move a Commander Obelisk from their Deck to their Reserve."
    }
]

module.exports = { totems };