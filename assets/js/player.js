let player = {
    pName: '',
    pId: '',
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

    namePlayer: function (pName){
        this.pName = pName;
    },

    setPlayer: function (pId, classType){
        this.classType = classType;
        switch (classType){
            case "heir":
                this.disClassType = "The Heir";
                this.fightStyle = "01";
                this.health = 150;
                this.stamina = 30; 
                this.willpower = 0;
                this.strength = 20; 
                this.intelligence = 0;
                this.agility = 20;
                this.dexterity = 10;
                this.defense = 25;
                this.tenacity = 10;
                this.abilities.push("00"); // Has abilities 00-04
                break;
            case "outlaw":
                this.disClassType = "The Outlaw";
                this.fightStyle = "01"
                this.health = 110;
                this.stamina = 20; 
                this.willpower = 0;
                this.strength = 10; 
                this.intelligence = 0;
                this.agility = 30;
                this.dexterity = 30;
                this.defense = 15;
                this.tenacity = 10;
                this.abilities.push("06");  // Has abilities 05-09
                break;
            case "cultist":
                this.disClassType = "The Cultist";
                this.health = 50;
                this.stamina = 0; 
                this.willpower = 30;
                this.strength = 0; 
                this.intelligence = 20;
                this.agility = 20;
                this.dexterity = 20;
                this.defense = 10;
                this.tenacity = 15;
                this.abilities.push("10"); // Has abilities 10-14
                break;
            case "writer":
                this.disClassType = "The Writer";
                this.health = 90;
                this.stamina = 0; 
                this.willpower = 20;
                this.strength = 0; 
                this.intelligence = 10;
                this.agility = 15;
                this.dexterity = 15;
                this.defense = 20;
                this.tenacity = 20;
                this.abilities.push("15"); //Has abilities 15-19
                break;
        };
        
        this.pId = pId;
        this.level = 1;
        this.curHealth = health;
        this.curStam = stamina;
        this.curWill = willpower; 
        this.exp = 0;
        this.toNextLvl = 100;
        this.gold = 10;
        this.bestiary = [];
        this.inventory = [];
        this.statusGood = "none";
        this.statusBad = "none";
    },
}