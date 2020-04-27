let player = {
    pName: '',
    classType: '',
    disClassType: '',
    imgage: 0,
    fightStyle: 1, // [1] Physical [2] Mental
    level: 1,
    health: 100, // If this reaches zero, player loses
    curHealth: 100,
    stamina: 100, // [1] Style; utilized for abilities
    curStam: 100, 
    willpower: 100, // [2] Style; utilized for abiltiies
    curWill: 100, 
    exp: 0, // Gained by defeating enemies
    toNextLvl: 100, // Amount of exp needed to level up
    gold: 0, // Gained by defeating enemies; used in shop
    strength: 5, // [1] Style base stat
    intelligence: 5, // [2] Style base stat
    agility: 5, // How many times player attacks in a turn
    dexterity: 5, // Both; determines critical
    defense: 5, // Both; Defense against physical attacks
    tenacity: 5, // Both; Defense again mental attacks
    bestiary: [], // Enemies defeated by player, utilized by bestiary
    inventory: [], // Items player has
    abilities: [], // Abilities player has
    statusGood: "none", // Lists any GOOD status impacting player; one at a time
    statusBad: "none", // Lists any BAD status impacting player; one at a time

    createPlayer: function (classType, fightStyle, health, stamina, willpower, strength, intelligence, agility, dexterity, defense, tenacity, ability){
        this.classType = classType;
        switch (classType){
            case "heir":
                this.disClassType = "The Heir";
                break;
            case "outlaw":
                this.disClassType = "The Outlaw";
                break;
            case "cultist":
                this.disClassType = "The Cultist";
                break;
            case "writer":
                this.disClassType = "The Writer";
                break;
        };
        this.fightStyle = fightStyle;
        this.level = 1;
        this.health = health;
        this.curHealth = health;
        this.stamina = stamina;
        this.curStam = stamina; 
        this.willpower = willpower;
        this.curWill = willpower; 
        this.exp = 0;
        this.toNextLvl = 100;
        this.gold = 10;
        this.strength = strength; 
        this.intelligence = intelligence;
        this.agility = agility;
        this.dexterity = dexterity;
        this.defense = defense;
        this.tenacity = tenacity;
        this.bestiary = [];
        this.inventory = [];
        this.abilities.push(ability);
        this.statusGood = "none";
        this.statusBad = "none";
    },
}