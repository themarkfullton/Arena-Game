/* Utilized when creating a new character 
 * 
 * [classType] is used to access the photos and etc
 * [disClassType] (display Class Type) is what's pulled by the battle interface
 * [fightStyle] was supposed to tell certain methods whether to use strength or intelligence, but I never got that far
 * [health] ... is health
 * [willpower] is supposed to be utilized for abilties; once again, not there yet
 * [strength] determines attack for physical (0) characters
 * [intelligence] determines attack for mental (1) characters
 * [agility] determines which combatant goes first; this stat is not increased upon level up
 * [dexterity] helps determine attack (it's a modifier) for both physical and mental characters
 * [defense] reduces the PHYSICAL damage done to the character
 * [tenacity] reduces the MENTAL damage done to the character
 * 
 * [pId] indicates which image the player selected
 * [level] doesn't really DO anything itself, but when the player increases a level their stats go up
 * [curHealth]/[curWill] keep track of where the character's health is CURRENTLY at
 * [exp]/[toNextLevel] if the player's exp (added to when an enemy is defeated) = toNextLevel, the player will level up
 * [gold] You're SUPPOSED to be able to buy items that help in battle, but I haven't gotten that far yet.
 * [inventory] Also used for items; see above
 * [pName] Used to hold and display the player name
*/
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
            this.tenacity = 6;
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
            this.tenacity = 6;
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
    this.inventory = [];
    this.pName ='';
}
