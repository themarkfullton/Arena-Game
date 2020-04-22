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
        getInterface.innerHTML = '<img src="assets/images/icon-player/icon-' + classType.toLowerCase() + '.png" alt="' + classType + '" class="batIconPic"><div><h3>' + classType +'</h3><progress id="healthBar" value="' + player.health + '" max="' + player.health + '"></progress>   <progress id="constBar" value="' + player.constitution + '" max="' + player.constitution + '"></progress><p>Experience: ' + player.exp + '</p><p>Gold: ' + player.gold + '</p><p>Strength: ' + player.strength + '</p><p>Defense: ' + player.defense + '</p><p>Agility: ' + player.agility + '</p><p>Dexterity: ' + player.dexterity + '</p><p>Intellect: ' + player.intellect + '</p><p>Endurance: ' + player.endurance + '</p></div>';
    },

    setPreFight: function(){

    }
}