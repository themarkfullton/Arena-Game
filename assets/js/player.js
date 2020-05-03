let player;

function Player (pId, classType) {
    this.classType = classType;
    switch (classType){
        case "heir":
            this.disClassType = "The Heir";
            this.fightStyle = 0;
            this.health = 60; 
            this.willpower = 3;
            this.strength = 8; 
            this.intelligence = 3;
            this.agility = 6;
            this.dexterity = 5;
            this.defense = 10;
            this.tenacity = 5;
            break;
        case "outlaw":
            this.disClassType = "The Outlaw";
            this.fightStyle = 0;
            this.health = 50; 
            this.willpower = 5;
            this.strength = 6; 
            this.intelligence = 5;
            this.agility = 10;
            this.dexterity = 10;
            this.defense = 8;
            this.tenacity = 4;
            break;
        case "cultist":
            this.disClassType = "The Cultist";
            this.fightStyle = 1;
            this.health = 40;
            this.willpower = 30;
            this.strength = 3; 
            this.intelligence = 10;
            this.agility = 8;
            this.dexterity = 10;
            this.defense = 6;
            this.tenacity = 10;
            break;
        case "writer":
            this.disClassType = "The Writer";
            this.fightStyle = 1;
            this.health = 45;
            this.willpower = 27;
            this.strength = 3; 
            this.intelligence = 8;
            this.agility = 10;
            this.dexterity = 8;
            this.defense = 9;
            this.tenacity = 9;
            break;
    };
    
    this.pId = pId;
    this.level = 1;
    this.curHealth = this.health;
    this.curWill = this.willpower; 
    this.exp = 0;
    this.toNextLvl = 30;
    this.gold = 10;
    this.bestiary = [];
    this.inventory = [];
    this.pName ='';
}
