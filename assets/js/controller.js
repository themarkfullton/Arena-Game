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
        let sRanNum;

        if (player.level == 1){
            sRanNum = Math.floor(Math.random() * Math.floor(4));
        }
        else if (player.level == 2){
            sRanNum = Math.floor(Math.random() * Math.floor(8));
        }
        else if (player.level == 3){
            sRanNum = Math.floor(Math.random() * Math.floor(13));
        }
        else if (player.level >= 4){
            sRanNum = Math.floor(Math.random() * Math.floor(bestiary.length));
        }

        /* Old Code
        switch(player.level){
            case 1:
                sRanNum = Math.floor(Math.random() * Math.floor(4)); // returns a random num 0 to 3
                break;
            case 2:
                sRanNum = Math.floor(Math.random() * Math.floor(8)); // returns a random num 0 to 7
                break;
            case 3:
                sRanNum = Math.floor(Math.random() * Math.floor(13)); // returns a random num 0 to 12
                break;
            case 4:
                sRanNum = Math.floor(Math.random() * Math.floor(bestiary.length)); // returns a random num 0 to 16
                break;
        }*/
            return sRanNum;
    },

    setEnemy: function(){
        enemy = new Enemy(this.setRanNum());
    },

    setFight: function(){
        player.curHealth = player.health;
        this.setEnemy();

        $("#interface").html('<div id="battlescreen"><div class="row d-flex justify-content-between" id="insideBattle"><div id="battlePlayer"><div id="battlePlayerName"><h3>' + player.pName + '<span id="battleLvl">Level' + player.level + '</span></h3></div><div id="battlePlayerBars" class="col-lg-4"><div class ="progress" id="playerHealthBar" data-label="Health"><span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) +'%"></span></div><div class ="progress" id="playerWillBar" data-label="Willpower"><span class="constBar" style="width: ' + ((player.curWill/player.willpower)*100) + '%"></span></div><div class ="progress" id="playerExpBar" data-label="Experience"><span class="expBar" style="width: ' + ((player.exp/player.toNextLvl)*100) +'%"></span></div></div></div><div id="battleEnemy"><div id="battleEnemyName"><h3>' + enemy.disClassType + '<span id="battleLvl">Level' + enemy.level + '</span></h3></div><div id="battleEnemyBars" class="col-lg-4"><div class ="progress" id="enemyHealthBar" data-label="Health"><span class="healthBar" style="width: ' + ((enemy.curHealth/enemy.health)*100) + '%"></span></div><div class ="progress" id="enemyWillBar" data-label="Willpower"><span class="constBar" style="width: ' + ((enemy.curWill/enemy.willpower)*100) + '%"></span></div></div></div></div><div class="row d-flex justify-content-between" id="insideBattlePicRow"><div id="battlePlayerPic"><img class="battlePic" src="assets/images/Icons/Players/'+ player.classType + player.pId +'.png"></div><div id="battleEnemyPic"><img class="battlePic" src="assets/images/Icons/Enemies/' + enemy.classType + '.png"></div></div></div><div id="battleNotes"><p>A ' + enemy.disClassType + ' appears</p></div><div id="actionDiv"><div id="actions" class="row justify-content-center"> <div class="ability" onclick="controller.battleRound(0)">Attack</div></div></div></div><div id="treasureBox" class="d-flex justify-content-center"><h5>Gold: <span class="treasureAmt">' + player.gold + '</span></h5></div>');
    
        $("#battlescreen").css("background-image", "url('assets/images/setting/"+ player.level.toString() +".png");
    },

    battleRound: function(selAction){
        let check = 0;
        if (player.curHealth > 0 && enemy.curHealth >0){
                        
            if (player.agility >= enemy.agility){
                console.log("P Speed " + player.agility);
                console.log("E Speed " + enemy.agility);
                console.log("Player Faster");
                this.playerTurn(selAction);
                check = this.checkWin();
                if (check == 0){
                    this.enemyTurn();
                    check = this.checkWin();
                }
            }
            else {
                console.log("P Speed " + player.agility);
                console.log("E Speed " + enemy.agility);
                console.log("Enemy Faster");
                this.enemyTurn();
                check = this.checkWin();
                if (check == 0){
                    this.playerTurn(selAction);
                    check = this.checkWin();
                }
            }
        }
    },

    playerTurn(selAction){
        let baseDamage = PlayerMoves[selAction]();

        enemy.curHealth = enemy.curHealth - baseDamage;

        if (enemy.curHealth < 0 ){
            enemy.curHealth = 0;
        }

        $("#playerHealthBar").html('<span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) +'%"></span>');
        $("#playerWillBar").html('<span class="constBar" style="width: ' + ((player.curWill/player.willpower)*100) + '%"></span>');
        $("#enemyHealthBar").html('<span class="healthBar" style="width: ' + ((enemy.curHealth/enemy.health)*100) + '%"></span>');
        $("#enemyWillBar").html('<span class="constBar" style="width: ' + ((enemy.curWill/enemy.willpower)*100) + '%"></span>');
        
    },

    enemyTurn(){
        let baseDamage = PlayerMoves[29]();

        player.curHealth = player.curHealth - baseDamage;

        if (player.curHealth < 0 ){
            player.curHealth = 0;
        }

        $("#playerHealthBar").html('<span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) +'%"></span>');
        $("#playerWillBar").html('<span class="constBar" style="width: ' + ((player.curWill/player.willpower)*100) + '%"></span>');
        $("#enemyHealthBar").html('<span class="healthBar" style="width: ' + ((enemy.curHealth/enemy.health)*100) + '%"></span>');
        $("#enemyWillBar").html('<span class="constBar" style="width: ' + ((enemy.curWill/enemy.willpower)*100) + '%"></span>');
    },

    checkWin(){
        if (enemy.curHealth <= 0) {
            var newDiv = $("<div>");

            newDiv.html('<p class="bNEnemy">' + enemy.disClassType + ' crumples in defeat.</p><p>You win ' + enemy.exp + ' experience and ' + enemy.gold + ' gold!</p>');

            $("#battleNotes").prepend(newDiv);

            player.exp = player.exp + enemy.exp;
            console.log("P Exp" + player.exp);

            player.gold = player.gold + enemy.gold;

            if(player.exp >= player.toNextLvl){                
                controller.levelUp();

                var newDiv = $("<div>");

                newDiv.html('<p class="bNPlayer">LEVEL UP!!!</p><p>You reached Level ' + player.level + '!</p>');
                
                $("#battleNotes").prepend(newDiv);
                
                $("#battleLvl").html("Level" + player.level);
                
            }
            $("#playerExpBar").html('<span class="expBar" style="width: ' + ((player.exp/player.toNextLvl)*100) +'%"></span>');
            $("#treasureBox").html('<h5>Gold: <span class="treasureAmt">' + player.gold + '</span></h5>');

            var newDiv = $("<div>");

            newDiv.html('<p>Unfortunately, this is still in progress, but you can continue to play, level up and gather gold.</p><button type="button" class="btn btn-primary btn-lg btn-block" onclick="controller.setFight()">Click Here to Fight New Enemy!</button>');
                
            $("#battleNotes").prepend(newDiv);

            return 1;
        }
        else if (player.curHealth <= 0) {
            var newDiv = $("<div>");

            newDiv.html('<p class="nNPlayer">You crumple over in defeat.</p><p>You lose!</p><button type="button" class="btn btn-primary btn-lg btn-block" onclick="script.charSelectScreen()">Click Here to Restart!</button>');

            $("#battleNotes").prepend(newDiv);

            return 2;
        }
        
        return 0;
    },

    levelUp: function() {
        player.level++;
        player.toNextLvl = player.toNextLvl+ 30;
        
        if (player.classType == "heir" || player.classType == "outlaw"){
            player.health = player.health + 10;
            player.willpower = player.willpower + 3;
            player.strength = player.strength + 5;
            player.defense = player.defense + 4;
            player.dexterity = player.dexterity + 3;
            player.tenacity = player.tenacity+ 2;
        }
        else{
            player.health = player.health + 6;
            player.willpower = player.willpower + 6;
            player.intelligence = player.intelligence + 5;
            player.defense = player.defense + 3;
            player.dexterity = player.dexterity + 3;
            player.tenacity = player.tenacity + 5;
        }

        player.exp = 0;
    },
}
