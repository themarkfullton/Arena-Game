let enemy;

function Enemy(enemyType, enemyFS, exp, health, constitution, strength, defense, speed, dexterity, intellect, endurance, reward, abilities, description) {
    this.enemyType = enemyType;
    this.enemyFS = enemyFS;
    this.exp = exp;
    this.health = health;
    this.curHealth = health;
    this.constitution = constitution;
    this.curConstitution = constitution;
    this.strength = strength;
    this.defense = defense;
    this.speed = speed;
    this.dexterity = dexterity;
    this.intellect = intellect;
    this.endurance = endurance;
    this.reward = reward;
    this.abilities = abilities;
    this.description = description;
}