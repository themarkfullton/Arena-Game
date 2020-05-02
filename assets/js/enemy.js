let enemy;

function Enemy (i) {
    console.log("Trying to do bestiary [" + i + "]");
    this.classType = bestiary[i].classType;
    this.disClassType= bestiary[i].disClassType;
    this.level= bestiary[i].level;
    this.fightType = bestiary[i].fightType;
    this.health= bestiary[i].health;
    this.curHealth = this.health;
    this.willpower = bestiary[i].willpower;
    this.curWill = this.willpower;
    this.strength = bestiary[i].strength; 
    this.intelligence = bestiary[i].intelligence;
    this.agility = bestiary[i].agility;
    this.dexterity = bestiary[i].dexterity;
    this.defense = bestiary[i].defense;
    this.tenacity = bestiary[i].tenacity;
    this.exp = bestiary[i].exp;
    this.gold = bestiary[i].gold;
}
