let controller = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },

    resetPlayer: function(classType){
        switch (classType) {
            case "Adventurer":
                player = new Player (classType, 100, 0, 30, 30, 10, 15, 0, 10 );
                break;
            case "Outlaw":
                player = new Player (classType, 85, 0, 10, 15, 30, 30, 0, 10 );
                break;
            case "Doctor":
                player = new Player (classType, 70, 0, 15, 15, 20, 15, 15, 10 );
                break;
            case "Cultist":
                player = new Player (classType, 70, 90, 0, 10, 15, 20, 15, 20 );
                break;
            case "Madman":
                player = new Player (classType, 60, 100, 0, 10, 15, 20, 25, 15 );
                break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '';
    },

    setPreFight: function(){

    }
}