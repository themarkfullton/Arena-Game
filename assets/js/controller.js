let controller = {
    setGameStart: function(pId, classType){
        player.createPlayer(pId, classType);
        this.displayInfo();
    },

    //Temporary Function to see if controller can access the player object
    displayInfo: function(){
        console.log("Class Type: " + player.classType);
        console.log("Display Class Name: " + player.disClassType);
        console.log("Player ID: " + player.pId);
        console.log("Fight Style: " + player.fightStyle);
        console.log("Level: " + player.level);
        console.log("Health: " + player.curHealth + " / " + player.health);
        console.log("Stamina: " + player.curStam + " / " + player.stamina);
        console.log("Willpower: " + player.curWill + " / " + player.willpower); 
        console.log("Exp: " + player.exp + " / " + player.toNextLvl); 
        console.log("Gold: " + player.gold);
        console.log("Strength: " + player.strength); 
        console.log("Intelligence: " + player.intelligence);
        console.log("Agility: " + player.agility); 
        console.log("Dexterity: " + player.dexterity);
        console.log("Defense: " + player.defense);
        console.log("Tenacity: " + player.tenacity);
    },
}
