let script = {
    // Writes the intructions onto the interface div of index.html
    instructions: function(){
        $( "#interface" ).html('<p>This is an arena game.</p><p>After selecting a character, you’ll fight a series of monsters. Every monster defeated will increase your experience.</p><p>When you have enough experience to gain a level, you’ll need to defeat a boss. Reach Level 5 and you’ll be facing off against the Final Boss. Each character has their own narrative and the actions you take during their routes will impact which end you get.</p><p>REMEMBER: This game is currently not connected to a server. Therefore, anytime you refresh, you’ll lose all your progress. The game is designed to be played in a single browser window, so do not refresh or try to go to the previous page visited.</p><button type="button" class="btn btn-primary btn-lg btn-block" onclick="script.charSelectScreen()">Select Character</button>');

    },

    /* Writes the character selection text into the interface div on index.html
     For an easier read of the code being written into Interface, see test.html lines 31 through 85 */
    charSelectScreen: function(){
        $("#interface").html('<h2>Who Are You?</h2><p>Select a portrait of your choice.</p><div class="row d-flex justify-content-center" style="margin:10px"><div class="col-lg-4 my-auto"><a href="#" onclick="controller.setGameStart(\'00\', \'heir\')"><img class="iconPic" src="assets/images/Icons/Dialogue/heir00.png" alt="heir"></a><a href="#" onclick="controller.setGameStart(\'01\', \'heir\')"><img class="iconPic" src="assets/images/Icons/Dialogue/heir01.png" alt="heir"></a><a href="#" onclick="controller.setGameStart(\'02\', \'heir\')"><img class="iconPic" src="assets/images/Icons/Dialogue/heir02.png" alt="heir"></a></div><div class="col-lg-8 my-auto"><h3>The Heir</h3><p>Ever since you can remember, your family has been sweeping dark secrets under the rug. Your parents always required things of you that have made no sense. But now they’re gone. Along with the vast family fortune, you also inherited an ominous looking book filled with cryptic threats and devilish illustrations… </p><p><span class="archInfo">[ Physical Based; Balanced attack and defense, low speed ]</span></p></div></div><hr><div class="row d-flex justify-content-center" style="margin:10px"><div class="col-lg-4 my-auto"><a href="#" onclick="controller.setGameStart(\'00\', \'outlaw\')"><img class="iconPic" src="assets/images/Icons/Dialogue/outlaw00.png" alt="outlaw"></a><a href="#" onclick="controller.setGameStart(\'01\', \'outlaw\')"><img class="iconPic" src="assets/images/Icons/Dialogue/outlaw01.png" alt="outlaw"></a><a href="#" onclick="controller.setGameStart(\'02\', \'outlaw\')"><img class="iconPic" src="assets/images/Icons/Dialogue/outlaw02.png" alt="outlaw"></a></div><div class="col-lg-8 my-auto"><h3>The Outlaw</h3><p>It was supposed to be the heist of the century. An exploration team in the Arctic had unearthed a massive crystalline jewel, etched with patterns more primal than written history and had passed it on to their patron, a rich fool fancying himself an anthropologist. Your client, another rich fool, wanted you to “acquire” the item for them…. But the moment you put your hands on the thing, everything faded to black…</p><p><span class="archInfo">[ Physical Based; Quick and skilled but weak ]</span></p></div></div><hr><div class="row d-flex justify-content-center" style="margin:10px"><div class="col-lg-4 my-auto"><a href="#" onclick="controller.setGameStart(\'00\', \'cultist\')"><img class="iconPic" src="assets/images/Icons/Dialogue/cultist00.png" alt="cultist"></a><a href="#" onclick="controller.setGameStart(\'01\', \'cultist\')"><img class="iconPic" src="assets/images/Icons/Dialogue/cultist01.png" alt="cultist"></a><a href="#" onclick="controller.setGameStart(\'02\', \'cultist\')"><img class="iconPic" src="assets/images/Icons/Dialogue/cultist02.png" alt="cultist"></a></div><div class="col-lg-8 my-auto"><h3>The Cultist</h3><p>Although you look it, you’re not entirely human; where you’re from, no one really is. Back in the colonial days, your ancestors struck a deal with an ungodly group of creatures: They populate the mines of your town with precious materials and the town provides them with mates. Overtime, the interbreeding resulted in hellish creatures like you—halflings that worship their monstrous parents. That is, however, until the mines dried up. The creatures are no longer keeping their end of the deal… but why…?</p><p><span class="archInfo">[ Mental-Based; High attack but low defense ]</span></p></div></div><hr><div class="row d-flex justify-content-center" style="margin:10px"><div class="col-lg-4 my-auto"><a href="#" onclick="controller.setGameStart(\'00\', \'writer\')"><img class="iconPic" src="assets/images/Icons/Dialogue/writer00.png" alt="writer"></a><a href="#" onclick="controller.setGameStart(\'01\', \'writer\')"><img class="iconPic" src="assets/images/Icons/Dialogue/writer01.png" alt="writer"></a><a href="#" onclick="controller.setGameStart(\'02\', \'writer\')"><img class="iconPic" src="assets/images/Icons/Dialogue/writer02.png" alt="writer"></a></div><div class="col-lg-8 my-auto"><h3>The Writer</h3><p>Master of horror, they called you. Every story you released raked in a vast audience, captivated by the fantastic and terrible worlds you wove. What they didn’t realize, however, was that the fearsome tales were all real—every time you close your eyes, you’re swept away by harrowing journeys into the Dreamlands…</p><p><span class="archInfo">[ Mental-Based; High endurance but weak attack  ]</span></p></div></div>');
    },

    /* Writes selected character's stats into the interface div on index.html and allows user to confirm or deny
     For an easier read of the code being written into Interface, see test.html lines 87 through 25 */
    charConfScreen: function (){
        $("#interface").html('<div class="row"><div class="col-lg-4"><h3>Character Name</h3></div><div class="col-lg-8"><input type="text" id="pName" value="Grimoire" style="width: 100%;"></div></div><hr><div class="row"><div class="col-lg-6 my-auto"><img src="assets/images/Icons/Players/' + player.classType + player.pId + '.png"></div><div class="col-lg-6 my-auto"><h3>' + player.disClassType +'</h3><p><strong>Health:</strong> ' + player.health +'</p><p><strong>Stamina:</strong> ' + player.stamina +'</p><p><strong>Willpower:</strong> ' + player.willpower + '</p><p><strong>Strength:</strong> ' + player.strength +'</p><p><strong>Intelligence:</strong> ' + player.intelligence + '</p><p><strong>Agility:</strong> ' + player.agility + '</p><p><strong>Dexterity:</strong> ' + player.dexterity + '</p><p><strong>Defense:</strong> ' + player.defense + '</p><p><strong>Tenacity:</strong> ' + player.tenacity + '</p></div></div><hr><div class="row"><div class="col-lg-6 my-auto"><button type="button" class="btn btn-primary btn-lg btn-block" onclick="script.charSelectScreen()">Go Back</button></div><div class="col-lg-6 my-auto"><button type="button" class="btn btn-primary btn-lg btn-block" onclick="controller.namePlayer()">Confirm</button></div></div>');
    },

    scriptIntro: function(){
        switch(player.classType){
            case "heir":
                $("#interface").html('<div class="row"><div class="col-lg-4 my-auto"><img src="assets/images/Icons/Players/cultist' + player.pId + '.png"></div><div class="col-lg-8 my-auto"><p>"For your protection, avoid your own reflection."</p><p>It was the family mantra. Ever since you were young, your parents had drilled it into you. When you noticed the new mirror tucked close by the scene of their "suicide", then, you became suspicious.</p><p>Officials were quick to admit the situation was odd--both husband and wife gone at the same moment; with no physical cause of death--but could offer neither explaination nor time to uncovering the truth. For a day or two, you tried to move on, but the mystery continued to eat away at you. You always returned to that curiousity, that sinister mirror.</p><p>Eventually, you gave into your curiousity. After a few glasses of wine to dull your nerves, you took the mirror into your hands and willingly broke the family rule: You stared right at your reflection.</p><p>The world fades from view.</p><button type="button" class="btn btn-primary btn-lg btn-block" onclick="script.scritLvl1Start()">Wake Up</button></div></div>');
                break;
            case "outlaw":
                $("#interface").html('');
                break;
            case "cultist":
                $("#interface").html('');
                break;
            case "writer":
                $("#interface").html(''); 
                break;
        }
    },

    scriptL1Start: function(){
        switch(player.classType){
            case "heir":
                $("#interface").html('');
                break;
            case "outlaw":
                $("#interface").html('');
                break;
            case "cultist":
                $("#interface").html('');
                break;
            case "writer":
                $("#interface").html(''); 
                break;
        }
    }
}