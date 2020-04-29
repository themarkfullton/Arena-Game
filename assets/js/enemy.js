let enemy;

function Enemy (enemyType, fightStyle, ) {
    this.classType = classType;
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
}