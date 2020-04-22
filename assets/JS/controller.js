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
        getInterface.innerHTML = '<div class="row d-flex justify-content-center" style="margin:10px"><div class="col-lg-4"><center><img src="assets/images/icon-player/icon-' + player.classType.toLowerCase() + '.png" alt="' + classType + '" class="batIconPic"></center><div><h3>' + player.classType +' <span class="playLevText">(Level ' + player.level + ')</span></h3><div class="row"><div class ="progress" data-label="Health (' + player.curHealth + ' / ' + player.health + ')"><span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) + '%"></span></div><div class ="progress" data-label="Constitution (' + player.curConstitution + ' / ' + player.constitution + ')"><span class="constBar" style="width: ' + ((player.curConstitution/player.constitution)*100) + '%"></span></div><div class ="progress" data-label="Experience(' + player.exp + ' / ' + player.toNextLvl + ')"><span class="expBar" style="width: ' + ((player.exp/player.toNextLvl)*100) + '%"></span></div></div></div></div><div class="col-lg-3"><h4>Stats:</h4><p>Strength: ' + player.strength + '</p><p>Defense: ' + player.defense + '</p><p>Agility: ' + player.agility + '</p><p>Dexterity: ' + player.dexterity + '</p><p>Intellect: ' + player.intellect + '</p><p>Endurance: ' + player.endurance + '</p></div><div class="col-lg-4"><h4>Rucksack</h4><p>Gold: ' + player.gold + '</p></div></div></div>';
    },

    setPreFight: function(){
        let getSubheader = document.querySelector(".subheader");
        let getActions = document.querySelector(".actions");

        getSubheader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="buttonPreFight" onclick="controller.setFight()">Search for an enemy!</a>';
    },

    setFight: function(){
        let getSubheader = document.querySelector(".subheader");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        let enemy00 = new Enemy("Nightgaunt", 100, 10, 40, 20, 20, 10, 10, 15, ["Shriek"], '<p><strong>Lives:</strong> Guard the extinct volcano Ngranek in the Dreamlands</p><p><strong>Serves:</strong> Some serve the <a href="https://monster.fandom.com/wiki/Nodens" target="_blank"> Elder God Nodens </a>; others serve the <a href="https://monster.fandom.com/wiki/Yibb-Tstll" target="_blank">Outer God Yibb-Tstll</a></p><p>Batlike creatures who are utterly silent, creating no sound even while in motion. They dislike flying over water, but are otherwise relentless when in search of their prey.</p>');
        let enemy01 = new Enemy("Shantak", 100, 10, 40, 20, 20, 10, 10, 15, ["Shriek"], '<p><strong>Lives:</strong> Cold Wastes of the Dreamlands</p><p><strong>Serves:</strong> Some serve the <a href="https://monster.fandom.com/wiki/Nyarlathotep" target="_blank"> Outer God Nyarlathotep </a>; others serve the <a href="https://monster.fandom.com/wiki/Ithaqua" target="_blank">Elder God Ithaqua</a></p><p>Enormous reptilian birds—larger than an elephant—who, while dangerous, are themselves afraid of the Nightgaunt who prey upon them.</p>');
        let enemy02 = new Enemy("Ghast", 100, 10, 40, 20, 20, 10, 10, 15, ["Shriek"], '<p><strong>Lives:</strong> Vaults of Zin</p> <p><strong>Serves:</strong> Though they do not (to our knowledge) serve any specific deity, they are at the bottom of the pecking order, hunted on by all sorts of otherworldly beasts.</p><p>Eerily human creatures who move by leaping on their long kangaroo-like legs. Repulsive and with a guttural language, these creatures die the moment they touch daylight.</p>');
        let enemy03 = new Enemy("Shoggoth", 100, 10, 40, 20, 20, 10, 10, 15, ["Shriek"], '<p><strong>Lives:</strong> Both in the Dreamlands and on Earth, itself.</p><p><strong>Serves:</strong> Engineered by the <a href="https://lovecraft.fandom.com/wiki/Elder_Thing" target="_blank">Elder Things</a> to serve them; currently autonomous</p><p>Formless creatures capable of imitating any type of biology it comes across. They were the former slaves of the Elder Things who eventually revolted. Though seeking one out can be unwise, they may be found tucked into the uncanny crevices of earth.</p>');
        let enemy04 = new Enemy("Gug", 100, 10, 40, 20, 20, 10, 10, 15, ["Shriek"], '<p><strong>Lives:</strong> Dreamlands</p><p><strong>Serves:</strong> Worship the <a href="https://lovecraft.fandom.com/wiki/Great_One" target="_blank">Great Ones</a></p><p>Merciless hunters with only one goal: to please and follow the unscrupulous gods they worship.</p>');
        let enemy05 = new Enemy("Magah", 100, 10, 40, 20, 20, 10, 10, 15, ["Shriek"], '<p><strong>Lives:</strong> Dreamlands</p><p><strong>Serves:</strong> <i>Unknown</i></p><p>Not much is known about these birds, save for their residency in the groves of Kadath.</p>');
        let enemy06 = new Enemy("Moonbeast", 100, 10, 40, 20, 20, 10, 10, 15, ["Shriek"], '<p><strong>Lives:</strong> Regularly travel between the moon and the Dreamlands</p><p><strong>Serves:</strong> the <a href="https://monster.fandom.com/wiki/Nyarlathotep" target="_blank"> Outer God Nyarlathotep </a></p><p>In the port of Dylath-Leen, these merchants trade rubies for slaves and gold. They are unscrupulous businessmen with dark intentions, attempting to cover up their true plans by enslaving Lengmen to do their work.</p>');
        let enemy07 = new Enemy("Lengman", 100, 10, 40, 20, 20, 10, 10, 15, ["Shriek"], '<p><strong>Lives:</strong> Plateu of Leng</p><p><strong>Serves:</strong>Serve the <a href="https://monster.fandom.com/wiki/Nyarlathotep" target="_blank"> Outer God Nyarlathotep </a></p><p>Slaves of the Moonbeasts, the Lengmen act as mediators between them and humans. They also serve aboard the ships of their former masters. Their civilization, once powerful and advanced, is failing under the control of the Moonbeasts.</p>');

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(8));

        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
            case 5:
                enemy = enemy05;
                break;
            case 6:
                enemy = enemy06;
                break;
            case 7:
                enemy = enemy07;
                break;
        }

        getSubheader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML = '<a href="#" class="buttonPreFight" onclick="PlayerMoves.calcAttack()">Attack!!</a>';
        getEnemy.innerHTML = '<div class="row d-flex justify-content-center" style="margin:10px"><div class="col-lg-4"><center><img src="assets/images/icon-enemies/icon-' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '" class="batIconPic"></center><div><h3>' + enemy.enemyType +'</h3><div class="row"><div class ="progress" data-label="Health (' + enemy.curHealth + ' / ' + enemy.health + ')"><span class="healthBar" style="width: ' + ((enemy.curHealth/enemy.health)*100) + '%"></span></div><div class ="progress" data-label="Constitution (' + enemy.curConstitution + ' / ' + enemy.constitution + ')"><span class="constBar" style="width: ' + ((enemy.curConstitution/enemy.constitution)*100) + '%"></span></div></div></div></div><div class="col-lg-3"><h4>Stats:</h4><p>Strength: ' + enemy.strength + '</p><p>Defense: ' + enemy.defense + '</p><p>Agility: ' + enemy.agility + '</p><p>Dexterity: ' + enemy.dexterity + '</p><p>Intellect: ' + enemy.intellect + '</p><p>Endurance: ' + enemy.endurance + '</p></div><div class="col-lg-4"><h4>Description</h4><p>' + enemy.description + '</p></div></div></div>';
    }
}