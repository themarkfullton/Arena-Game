/* Utilized when creating a new character; uses bestiary to fill in the stats
 * 
 * [classType] is used to access the photos and etc
 * [disClassType] (display Class Type) is what's pulled by the battle interface
 * [fightStyle] Tells certain methods whether to use strength or intelligence
 * [health] ... is health
 * [willpower] is supposed to be utilized for abilties; not there yet
 * [strength] determines attack for physical (0) creatures
 * [intelligence] determines attack for mental (1) creatures
 * [agility] determines which combatant goes first
 * [dexterity] helps determine attack (it's a modifier) for both physical and mental creatures
 * [defense] reduces the PHYSICAL damage done to the creature
 * [tenacity] reduces the MENTAL damage done to the creature
 * 
 * [level] doesn't really DO anything, just for player to gauge how hard the enemy is
 * [curHealth]/[curWill] keep track of where the enemy's health is CURRENTLY at
 * [exp] tells how much exp player will gain upon defeating the enemy
 * [gold] tells how much gold player will get upon defeating the enemy
*/

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
