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
                sRanNum = Math.floor(Math.random() * Math.floor(17)); // returns a random num 0 to 16
                break;
        }
            return sRanNum;
    },

    setEnemy: function(){
        enemy = new Enemy(this.setRanNum());
    },

    setMoves: function(){
        let allPActions = [];
        let pAction = $("<div>");
        pAction.attr("class", "ability");
        pAction.attr("onclick", "PlayerMoves.Attack()");
        pAction.html("<p>Attack</p>");
        
        allPActions.push(pAction);

        pAction.attr("onclick", "PlayerMoves.Defend()");
        pAction.html("<p>Defend</p>");

        allPActions.push(pAction);

        pAction.attr("onclick", "PlayerMoves.Bribe()");
        pAction.html("<p>Bribe</p>");

        allPActions.push(pAction);

        switch (player.classType){
            case "heir":
                if (player.level == 1){
                    pAction.attr("onclick", "PlayerMoves.FirstAid()");
                    pAction.html("<p>First Aid</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 2){
                    pAction.attr("onclick", "PlayerMoves.Reflect()");
                    pAction.html("<p>Reflect</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 3){
                    pAction.attr("onclick", "PlayerMoves.OtherSide()");
                    pAction.html("<p>Mirror Travel</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 4){
                    pAction.attr("onclick", "PlayerMoves.Mimicry()");
                    pAction.html("<p>Mimic</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 5){
                    pAction.attr("onclick", "PlayerMoves.HereditaryChaos()");
                    pAction.html("<p>Hereditary Chaos</p>");

                    allPActions.push(pAction);
                };
                break;
            case "outlaw":
                if (player.level == 1){
                    pAction.attr("onclick", "PlayerMoves.UncannySense()");
                    pAction.html("<p>Uncanny Sense</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 2){
                    pAction.attr("onclick", "PlayerMoves.ShadowSlash()");
                    pAction.html("<p>Shadow Salsh</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 3){
                    pAction.attr("onclick", "PlayerMoves.Enshroud()");
                    pAction.html("<p>Enshroud</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 4){
                    pAction.attr("onclick", "PlayerMoves.VileTendrils()");
                    pAction.html("<p>Vile Tendrils</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 5){
                    pAction.attr("onclick", "PlayerMoves.MidnightStrangle()");
                    pAction.html("<p>Midnight Strangle</p>");

                    allPActions.push(pAction);
                };
                break;
            case "cultist":
                if (player.level == 1){
                    pAction.attr("onclick", "PlayerMoves.Inheritance()");
                    pAction.html("<p>Utilize Inheritance</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 2){
                    pAction.attr("onclick", "PlayerMoves.EldritchGaze()");
                    pAction.html("<p>Eldritch Gaze</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 3){
                    pAction.attr("onclick", "PlayerMoves.Protonymic()");
                    pAction.html("<p>Utilize Enemy Protonymic</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 4){
                    pAction.attr("onclick", "PlayerMoves.Neonymic()");
                    pAction.html("<p>Utilize Enemy Neonymic</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 5){
                    pAction.attr("onclick", "PlayerMoves.Commune()");
                    pAction.html("<p>Communicate in the elder tongue</p>");

                    allPActions.push(pAction);
                };
                break;
            case "writer":
                if (player.level == 1){
                    pAction.attr("onclick", "PlayerMoves.Offstage()");
                    pAction.html("<p>Walk off stage</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 2){
                    pAction.attr("onclick", "PlayerMoves.PointOfView()");
                    pAction.html("<p>Switch Point of View</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 3){
                    pAction.attr("onclick", "PlayerMoves.Dialogue()");
                    pAction.html("<p>Dialogue</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 4){
                    pAction.attr("onclick", "PlayerMoves.Rewrite()");
                    pAction.html("<p>Rewrite Scene</p>");

                    allPActions.push(pAction);
                };
                if (player.level == 5){
                    pAction.attr("onclick", "PlayerMoves.Bribe()");
                    pAction.html("<p>Bribe</p>");

                    allPActions.push(pAction);
                };
                break;
        }
        
        if (player.level == 5){
            pAction.attr("onclick", "PlayerMoves.HunterSense()");
            pAction.html("<p>Hunter's Sense</p>");

            allPActions.push(pAction);
        };

        for (var i =0; i < allPActions.length; i++){
            $("#actions").append(allPActions[i]);
        };
    },

    setFight: function(){
        this.setEnemy();

        $("#interface").html('<div id="battlescreen"><div class="row d-flex justify-content-between" id="insideBattle"><div id="battlePlayer"><div id="battlePlayerName"><h3>' + player.pName + '<span id="battleLvl">Level' + player.level + '</span></h3></div><div id="battlePlayerBars" class="col-lg-4"><div class ="progress" id="playerHealthBar" data-label="Health"><span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) +'%"></span></div><div class ="progress" id="playerWillBar" data-label="Willpower"><span class="constBar" style="width: ' + ((player.curWill/player.willpower)*100) + '%"></span></div><div class ="progress" id="playerExpBar" data-label="Experience"><span class="expBar" style="width: ' + ((player.exp/player.toNextLvl)*100) +'"></span></div></div></div><div id="battleEnemy"><div id="battleEnemyName"><h3>' + enemy.disClassType + '<span id="battleLvl">Level' + enemy.level + '</span></h3></div><div id="battleEnemyBars" class="col-lg-4"><div class ="progress" id="enemyHealthBar" data-label="Health"><span class="healthBar" style="width: ' + ((enemy.curHealth/enemy.health)*100) + '%"></span></div><div class ="progress" id="enemyWillBar" data-label="Willpower"><span class="constBar" style="width: ' + ((enemy.curWill/enemy.willpower)*100) + '%"></span></div></div></div></div><div class="row d-flex justify-content-between" id="insideBattlePicRow"><div id="battlePlayerPic"><img class="battlePic" src="assets/images/Icons/Players/'+ player.classType + player.pId +'.png"></div><div id="battleEnemyPic"><img class="battlePic" src="assets/images/Icons/Enemies/' + enemy.classType + '.png"></div></div></div><div id="battleNotes"><p>A ' + enemy.disClassType + ' appears</p></div><div id="actionDiv"><div id="actions" class="row justify-content-center"></div></div></div>');
    
        $("#battlescreen").css("background-image", "url('assets/images/setting/"+ player.level.toString() +".png");
        this.setMoves();
    },

    
}
