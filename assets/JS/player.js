let player;

function Player(classType, playerFS, health, constitution, strength, defense, speed, dexterity, intellect, endurance, startAbility) {
    this.classType = classType;
    this.playerFS = playerFS;
    this.level = 1;
    this.health = health;
    this.curHealth = health;
    this.constitution = constitution;
    this.curConstitution = constitution;
    this.exp = 0;
    this.toNextLvl = 100;
    this.gold = 0;
    this.strength = strength;
    this.defense = defense;
    this.speed = speed;
    this.dexterity = dexterity;
    this.intellect = intellect;
    this.endurance = endurance;
    this.enemiesDef = 0;
    this.items = ["potion"];
    this.abilities = [startAbility];
}

let PlayerMoves = {
    calcAttack: function() {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        let getDialogue = document.querySelector("#dialogue");
        let getDialogue2 = document.querySelector("#dialogue2");
        let getFinalDia = document.querySelector("#finalDia");

        let playerAttack = function() {
            let calcBaseDamage;

            if ( player.playerFS == 2 ){
                calcBaseDamage = player.strength * player.constitution /1000;
            }
            else {
                calcBaseDamage = player.strength * player.dexterity / 1000;
            }

            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            let numberOfHits = Math.floor(Math.random() * Math.floor(player.dexterity / 10) / 2 ) + 1;

            let attackValues = [ calcOutputDamage, numberOfHits ];
            return attackValues;
        }

        let enemyAttack = function() {
            let calcBaseDamage;

            if ( enemy.enemyFS == 2 ){
                calcBaseDamage = enemy.strength * enemy.constitution /1000;
            }
            else {
                calcBaseDamage = enemy.strength * enemy.dexterity / 1000;
            }

            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.dexterity / 10) / 2 ) + 1;

            let attackValues = [ calcOutputDamage, numberOfHits ];
            return attackValues;
        }

        let getPlayerHealth = document.querySelector("#playerHealthBar");
        let getPlayerConst = document.querySelector("#playerConstBar");
        let getPlayerExp = document.querySelector("#playerExpBar");
        let getEnemyHealth = document.querySelector("#enemyHealthBar");
        let getEnemyConst = document.querySelector("#enemyConstBar");
        let getPlayerGold = document.querySelector(".playerGold");
        let getPlayerLevel = document.querySelector(".playLevText");

        function playerTurn(){
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];

            enemy.curHealth = enemy.curHealth - totalDamage;

            getDialogue.innerHTML = "<p>You hit " + enemy.enemyType + " for " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.</p>";
        }

        function enemyTurn(){
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];

            player.curHealth = player.curHealth - totalDamage;

            getDialogue2.innerHTML = "<p>You were hit by " + enemy.enemyType + " for " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.</p>";
        }

        if (getPlayerSpeed >= getEnemySpeed) {
            playerTurn();

            if (enemy.curHealth <= 0) {
                getFinalDia.innerHTML = '<p>' + enemy.enemyType +'crumples in defeat.</p><p>You win ' + enemy.exp + ' experience and ' + enemy.reward + ' gold.</p><p><strong>Search for a new opponent!</strong></p>';
                getActions.innerHTML = '<a href="#" class="buttonPreFight" onclick="controller.setFight()">Search for an enemy!</a>'

                player.enemiesDef++;

                getPlayerHealth.innerHTML = '<span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) + '%"></span>';
                getPlayerConst.innerHTML = '<span class="constBar" style="width: ' + ((player.curConstitution/player.constitution)*100) + '%"></span>';
                getEnemyHealth.innerHTML ='<span class="healthBar" style="width: 0%"></span>';

                player.exp = player.exp + enemy.exp;
                player.gold = player.gold + enemy.reward;
                getPlayerGold.innerHTML = 'Gold: ' + player.gold;

                if (player.exp >= player.toNextLvl){
                    player.level++;
                    player.exp = 0;
                    getFinalDia.innerHTML += '<p>You reached Level' + player.level + '!</p>';
                    getPlayerLevel.innerHTML = '(Level ' + player.level + ')';
                    getPlayerExp.innerHTML = '<span class="expBar" style="width: ' + ((player.exp/player.toNextLvl)*100) + '%"></span>';
                }
                else{
                    getPlayerExp.innerHTML = '<span class="expBar" style="width: ' + ((player.exp/player.toNextLvl)*100) + '%"></span>';
                }
            }
            else {
                enemyTurn();

                getPlayerHealth.innerHTML = '<span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) + '%"></span>';
                getPlayerConst.innerHTML = '<span class="constBar" style="width: ' + ((player.curConstitution/player.constitution)*100) + '%"></span>';

                getEnemyHealth.innerHTML = '<span class="healthBar" style="width: ' + ((enemy.curHealth/enemy.health)*100) + '%"></span>';
                
            }
        }
        else{

            enemyTurn();

            if (player.curHealth <= 0) {
                getFinalDia.innerHTML = '<p>You crumple over in defeat.</p><p>That was a nice run! You defeated ' + player.enemiesDef + ' enemies and reached Level ' + player.level + ' with ' + player.gold + "gold.</p><p>Refresh the browser to try again!</p>";

                getPlayerHealth.innerHTML = '<span class="healthBar" style="width: 0%"></span>';
                getEnemyHealth.innerHTML = '<span class="healthBar" style="width: ' + ((enemy.curHealth/enemy.health)*100) + '%"></span>';
                getEnemyConst.innerHTML = '<span class="constBar" style="width: ' + ((enemy.curConstitution/enemy.constitution)*100) + '%"></span>';
            }
            else {
                playerTurn();

                getEnemyHealth.innerHTML = '<span class="healthBar" style="width: ' + ((enemy.curConstitution/enemy.constitution)*100) + '%"></span>';
                getEnemyConst.innerHTML = '<span class="constBar" style="width: ' + ((enemy.curConstitution/enemy.constitution)*100) + '%"></span>';

                getPlayerHealth.innerHTML = '<span class="healthBar" style="width: ' + ((player.curHealth/player.health)*100) + '%"></span>';
            }
        }
    }

}

