let script = {
    imgId: "00,

    instructions: function(){
        $( "#interface" ).html('<p>This is an arena game.</p><p>After selecting a character, you’ll fight a series of monsters. Every monster defeated will increase your experience.</p><p>When you have enough experience to gain a level, you’ll need to defeat a boss. Reach Level 5 and you’ll be facing off against the Final Boss. Each character has their own narrative and the actions you take during their routes will impact which end you get.</p><p>REMEMBER: This game is currently not connected to a server. Therefore, anytime you refresh, you’ll lose all your progress. The game is designed to be played in a single browser window, so do not refresh or try to go to the previous page visited.</p><button type="button" class="btn btn-primary btn-lg btn-block" onclick="">Block level button</button>');

    },

    charSelect: function(){
        $("#interface").html('');
    },

    charChangeImg: function(change, classType){
        if (script.imgId == "00"){
            script.imgId = "01";
        }
        else {
            script.imgId == "00";
        }
        $("#" + change ).attr("src", "assets/images/icons/dialogue/" + classType + script.imgId + ".png");
    },
}