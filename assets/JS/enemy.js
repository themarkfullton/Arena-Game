let enemy;

function Enemy(enemyType, health, constitution, strength, defense, agility, dexterity, intellect, endurance, abilities, description) {
    this.enemyType = enemyType;
    this.health = health;
    this.curHealth = health;
    this.constitution = constitution;
    this.curConstitution = constitution;
    this.strength = strength;
    this.defense = defense;
    this.agility = agility;
    this.dexterity = dexterity;
    this.intellect = intellect;
    this.endurance = endurance;
    this.abilities = abilities;
    this.description = description;
}