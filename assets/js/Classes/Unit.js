class Unit {
    constructor(classType, disClassType, level, fightType, health, willpower, strength, intelligence, agility, dexterity, defense, tenacity, exp, gold){
        this.classType = classType;
        this.disClassType = disClassType;
        this.level = level;
        this.fightType = fightType;
        this.health = health;
        this.currHealth = health;
        this.willpower = willpower;
        this.currWill = willpower;
        this.strength = strength;
        this.intelligence = intelligence;
        this.agility = agility;
        this.dexterity = dexterity;
        this.defense = defense;
        this.tenacity = tenacity;
        this.exp = exp;
        this.gold = gold;
    }

    getClassType() {
        return this.classType
    }
    
    setClassType(newClass) {
        this.classType = newClass;
    }

    getClassType() {
        return this.classType
    }
    
    setClassType(newClass) {
        this.classType = newClass;
    }
}