let controller = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },

    resetPlayer: function(classType){
        switch (classType) {
            case "Adventurer":
                player = new Player (classType, 100, 5, 30, 30, 10, 15, 0, 10, "Guns-a-Blazing" );
                break;
            case "Outlaw":
                player = new Player (classType, 85, 5, 10, 15, 30, 30, 0, 10, "Shadow Slash" );
                break;
            case "Doctor":
                player = new Player (classType, 70, 10, 15, 15, 20, 15, 15, 10, "First Aid" );
                break;
            case "Cultist":
                player = new Player (classType, 70, 90, 0, 10, 15, 20, 15, 20, "Fireball");
                break;
            case "Madman":
                player = new Player (classType, 60, 100, 0, 10, 15, 20, 25, 15, "" );
                break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<div class="row d-flex justify-content-center" style="margin:10px"><div class="col-lg-4"><center><img src="assets/images/icon-player/icon-' + classType.toLowerCase() + '.png" alt="' + classType + '" class="batIconPic"></center><div><h3>' + classType +' <span class="playLevText">(Level ' + player.level + ')</span></h3><div class="row"><div class ="progress" data-label="Health (' + player.curHealth + ' / ' + player.health + ')"><span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) + '%"></span></div><div class ="progress" data-label="Constitution (' + player.curConstitution + ' / ' + player.constitution + ')"><span class="constBar" style="width: ' + ((player.curConstitution/player.constitution)*100) + '%"></span></div><div class ="progress" data-label="Experience(' + player.exp + ' / ' + player.toNextLvl + ')"><span class="expBar" style="width: ' + ((player.exp/player.toNextLvl)*100) + '%"></span></div></div></div></div><div class="col-lg-3"><h4>Stats:</h4><p>Strength: ' + player.strength + '</p><p>Defense: ' + player.defense + '</p><p>Agility: ' + player.agility + '</p><p>Dexterity: ' + player.dexterity + '</p><p>Intellect: ' + player.intellect + '</p><p>Endurance: ' + player.endurance + '</p></div><div class="col-lg-4"><h4>Rucksack</h4><p>Gold: ' + player.gold + '</p></div></div></div>';
    },

    setPreFight: function(){

    }
}