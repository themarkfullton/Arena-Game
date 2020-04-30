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
        script.scriptIntro();
    },

    // Depending on the level, different enemies are availiable.
    // This function creates a random number based on player level.
    setRanNum: function(){
        switch(player.level){
            case 1:
                let ranNum = Math.floor(Math.random() * Math.floor(4)); // returns a random num 0 to 3
                break;
            case 2:
                let ranNum = Math.floor(Math.random() * Math.floor(8)); // returns a random num 0 to 7
                break;
            case 3:
                let ranNum = Math.floor(Math.random() * Math.floor(13)); // returns a random num 0 to 12
                break;
            case 4:
                let ranNum = Math.floor(Math.random() * Math.floor(17)); // returns a random num 0 to 16
                break;
        }
            return ranNum;
    },

    setEnemy: function(){
        let tRanNum = this.setRanNum();
        enemy = new Enemy (tRanNum);
    },

    setFight: function(){


        $("#interface").html('<div id="battlescreen"><div class="row d-flex justify-content-between" id="insideBattle"><div id="battlePlayer"><div id="battlePlayerName"><h3>' + player.pName + '<span id="battleLvl">Level' + player.level + '</span></h3></div><div id="battlePlayerBars" class="col-lg-4"><div class ="progress" id="playerHealthBar" data-label="Health"><span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) +'%"></span></div><div class ="progress" id="playerWillBar" data-label="Willpower"><span class="constBar" style="width: ' + ((player.curWill/player.willpower)*100) + '%"></span></div><div class ="progress" id="playerExpBar" data-label="Experience"><span class="expBar" style="width: ' + ((player.exp/player.toNextLvl)*100) +'"></span></div></div></div><div id="battleEnemy"><div id="battleEnemyName">
                    <h3>Ghast <span id="battleLvl">Level1</span></h3>
                </div>
                <div id="battleEnemyBars" class="col-lg-4">
                    <div class ="progress" id="enemyHealthBar" data-label="Health"><span class="healthBar" style="width: 50%"></span></div>
                    <div class ="progress" id="enemyWillBar" data-label="Willpower"><span class="constBar" style="width: 50%"></span></div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-between" id="insideBattlePicRow">
            <div id="battlePlayerPic">
                <img class="battlePic" src="assets/images/Icons/Players/cultist00.png">
            </div>
            <div id="battleEnemyPic">
                <img class="battlePic" src="assets/images/Icons/Enemies/ghast.png">
            </div>
        </div>
    </div>

    <div id="battleNotes">
        <p class="bNPlayer">You attack 5 times for 10 damage</p>
        <p class="bNEnemy">Ghast attacks 3 times for 29 damage</p>
        <p>You lose</p>
    </div>

    <div id="actions">
        <div class="row justify-content-center">
            <div class="ability" onclick="">Fireball</div>
            <div class="ability" onclick="">Possession</div>
        </div>
    </div>--></div>');
    },

    
}
