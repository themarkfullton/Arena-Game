let controller = {
    setGameStart: function(pId, classType){
        this.createPlayer(pId, classType);
        script.charConfScreen();
    },

    createPlayer: function(pId, classType){
        player = new Player (pId, classType);
        console.log("New player of ID " + pId + " and class type " + classType + " has been created.")
        
    },

    namePlayer: function(){
        player.pName = $('#pName').val();
        $( "#interface" ).html("<p>IT WORKED</p><p>Player Name: " + player.pName + "</p>");
    }

}
