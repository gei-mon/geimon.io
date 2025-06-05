const { totems } = require('../data/totems.cjs');

class TotemExecutor {
    constructor(totemName, gameState) {
        this.totemName = totemName;
        this.gameState = gameState;
        this.rules = totems[0]; // Flat object
    }

    applyRules() {
        const ruleText = this.rules[this.totemName];
        if (!ruleText) {
            console.warn(`Totem '${this.totemName}' not found.`);
            return;
        }

        //console.log(`🟡 Applying Totem: ${this.totemName} – ${ruleText}`);

        switch (this.totemName) {
            case "Double Double":
                this.gameState.drawExtraCard = true;
                break;
            case "Single File":
                this.gameState.maxAttacksPerTurn = 1;
                break;
            case "Fists Only":
                this.gameState.onlyAttackDamage = true;
                break;
            case "Can't Punch Ghosts":
                this.gameState.onlyEffectDamage = true;
                break;
            case "Tomb Raider Rejects":
                this.gameState.canRetrieve = false;
                break;
            case "Blindfolded":
                this.gameState.canAddCards = false;
                break;
            case "Necromancer Died":
                this.gameState.canResurrect = false;
                break;
            case "Hell's Closed Today":
                this.gameState.canObliterate = false;
                break;
            case "Glass Bones and Paper Skin":
                this.gameState.startingLife = 10;
                break;
            case "Terrifying Toddlers":
                this.gameState.doubleLowDamage = true;
                break;
            case "Caught in your Underwear":
                this.gameState.useDamageThresholds = false;
                break;
            case "All or Nothing":
                this.gameState.damageMustKillOrNothing = true;
                break;
            case "Fair Play":
                this.gameState.handsRevealed = true;
                break;
            case "Pendulum of Pain":
                this.gameState.endPhaseDamage = 1;
                break;
            case "Countdown Clocktower":
                this.gameState.turnLimit = 12;
                this.gameState.winByLifeAtEnd = true;
                break;
            case "Fake Doctor":
                this.gameState.invertHealingAndDamage = true;
                break;
            case "Bluff-Fest":
                this.gameState.mustSetCardsBeforeActivating = true;
                break;
            case "Cards On Table":
                this.gameState.revealTopDeck = true;
                break;
            case "Shared Interest":
                this.gameState.preventDamageUntilTurn = 7;
                break;
            default:
                console.warn(`Totem '${this.totemName}' found but has no associated rule behavior.`);
        }
    }
}

module.exports = { TotemExecutor };