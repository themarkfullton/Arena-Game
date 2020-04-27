let Enemy = {
    classType: '',
    fightStyle: 1, // [1] Physical [2] Mental
    level: 1,
    health: 100, // If this reaches zero, player wins
    curHealth: 100,
    stamina: 100, // [1] Style; utilized for abilities
    curStam: 100, 
    willpower: 100, // [2] Style; utilized for abiltiies
    curWill: 100, 
    exp: 0, // Rewards player this amount of exp when defeated
    gold: 0, // Rewards player this amount of gold when defeated
    strength: 5, // [1] Style base stat
    intelligence: 5, // [2] Style base stat
    agility: 5, // How many times enemy attacks in a turn
    dexterity: 5, // Both; determines critical
    defense: 5, // Both; Defense against physical attacks
    tenacity: 5, // Both; Defense again mental attacks
    bestiary: 00, // The number added to the player's bestiary when defeated
    abilities: [], // Abilities enemy has
    statusGood: "none", // Lists any GOOD status impacting enemy; one at a time
    statusBad: "none", // Lists any BAD status impacting enemy; one at a time

    createEnemy: function (classType, fightStyle, health, stamina, willpower, strength, intelligence, agility, dexterity, defense, tenacity, bestiary, ability){
        this.classType = classType;
        this.fightStyle = fightStyle;
        this.level = 1;
        this.health = health;
        this.curHealth = health;
        this.stamina = stamina;
        this.curStam = stamina; 
        this.willpower = willpower;
        this.curWill = willpower; 
        this.exp = 0;
        this.gold = 10;
        this.strength = strength; 
        this.intelligence = intelligence;
        this.agility = agility;
        this.dexterity = dexterity;
        this.defense = defense;
        this.tenacity = tenacity;
        this.bestiary = bestiary;
        this.abilities.push(ability);
        this.statusGood = "none";
        this.statusBad = "none";
    },
}

let bestiary = {
    
}