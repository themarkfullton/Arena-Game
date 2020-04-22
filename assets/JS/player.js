let player;

function Player(classType, health, constitution, strength, defense, agility, dexterity, intellect, endurance, startAbility) {
    this.classType = classType;
    this.level = 1;
    this.health = health;
    this.curHealth = health;
    this.constitution = constitution;
    this.curConstitution = constitution;
    this.exp = 0;
    this.toNextLvl = 100;
    this.gold = 0;
    this.strength = strength;
    this.defense = defense;
    this.agility = agility;
    this.dexterity = dexterity;
    this.intellect = intellect;
    this.endurance = endurance;
    this.items = ["potion"];
    this.abilities = [startAbility];
}

