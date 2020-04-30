let player;

function Player (pId, classType) {
    this.classType = classType;
    switch (classType){
        case "heir":
            this.disClassType = "The Heir";
            this.fightStyle = "01";
            this.health = 150; 
            this.willpower = 0;
            this.strength = 20; 
            this.intelligence = 0;
            this.agility = 20;
            this.dexterity = 10;
            this.defense = 25;
            this.tenacity = 10;
            this.abilities = ["00"]; // Has abilities 00-04
            break;
        case "outlaw":
            this.disClassType = "The Outlaw";
            this.fightStyle = "01"
            this.health = 110; 
            this.willpower = 0;
            this.strength = 10; 
            this.intelligence = 0;
            this.agility = 30;
            this.dexterity = 30;
            this.defense = 15;
            this.tenacity = 10;
            this.abilities = ["06"];  // Has abilities 05-09
            break;
        case "cultist":
            this.disClassType = "The Cultist";
            this.health = 50;
            this.willpower = 30;
            this.strength = 0; 
            this.intelligence = 20;
            this.agility = 20;
            this.dexterity = 20;
            this.defense = 10;
            this.tenacity = 15;
            this.abilities = ["10"]; // Has abilities 10-14
            break;
        case "writer":
            this.disClassType = "The Writer";
            this.health = 90;
            this.willpower = 20;
            this.strength = 0; 
            this.intelligence = 10;
            this.agility = 15;
            this.dexterity = 15;
            this.defense = 20;
            this.tenacity = 20;
            this.abilities = ["15"]; //Has abilities 15-19
            break;
    };
    
    this.pId = pId;
    this.level = 1;
    this.curHealth = this.health;
    this.curWill = this.willpower; 
    this.exp = 0;
    this.toNextLvl = 100;
    this.gold = 10;
    this.bestiary = [];
    this.inventory = [];
    this.statusGood = "none";
    this.statusBad = "none";
    this.pName ='';
}
