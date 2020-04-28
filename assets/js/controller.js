let controller = {
    setGameStart: function(pId, classType){
        this.createPlayer(pId, classType);
        this.displayInfo();
    },

    createPlayer: function(pId, classType){
        player = new Player (pId, classType);
        
    },

    namePlayer: function(){
        player.pName = $('#pName').val();
        $( "#interface" ).html("<p>IT WORKED</p><p>Player Name: " + player.pName + "</p>");
    }

}
