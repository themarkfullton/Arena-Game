/* This is basically a list of all the moves utilized in combat.
 *The problem is that I ran out of time; so there's only really two moves here. 
 *I'm hoping to go back in after the assignment is graded and add all the things here so I'm keeping them in here for now 
 *Enemy attack is at the waaaaay bottom. I was going to have enemy abilities start from there, but didn't get around to it (surprise)*/

let PlayerMoves = [
    Attack = function(){
        console.log("Ran attack fun");
        let baseDamage;
        let damageMod = Math.floor(Math.random() * ( player.level + player.dexterity ) );

        if (player.classType == "heir" || player.classType == "outlaw"){
            baseDamage = ( player.strength + damageMod ) - enemy.defense;

            if (baseDamage < 0){
                baseDamage = 0;
            }

        }
        
        else{
            baseDamage = ( player.intelligence + damageMod ) - enemy.tenacity;

            if (baseDamage < 0){
                baseDamage = 0;
            }

        }

        var newDiv = $("<div>");

        if (baseDamage > 0 ){
            newDiv.html('<p class="bNPlayer">You attack ' + enemy.disClassType + ' for ' + baseDamage + ' points</p>');
        }
        else {
            newDiv.html('<p class="bNPlayer">You try to attack, but you can\'t make a dent on ' + enemy.disClassType + '</p>');
        }
        
        $("#battleNotes").prepend(newDiv);

        return baseDamage;
    },

    //============================================================[1]====================================================================

    Bribe = function(){
        console.log("Ran bribe fun");
    },

    //============================================================[2]====================================================================    
    Inventory = function(){
        console.log("Ran inventory fun");
    },

    //============================================================[3]====================================================================
    UsePotion = function(){
        console.log("Ran use potion fun");
    },
    //============================================================[4]====================================================================
    UseElixir = function(){
        console.log("Ran use Elixir fun");
    },
    //============================================================[5]====================================================================
    useItem3 = function(){
        console.log("Ran use Item 3 fun");
    },
    //============================================================[6]====================================================================
    useItem4 = function(){
        console.log("Ran use Item 4 fun");
    },
    //============================================================[7]====================================================================
    useItem5 = function(){
        console.log("Ran use Item 5 fun");
    },
    //============================================================[8]====================================================================
    useItem6 = function(){
        console.log("Ran use Item 6 fun");
    },
    //============================================================[9]====================================================================
    FirstAid=  function(){
        console.log("Ran First Aid fun");
    },
    //============================================================[10]====================================================================
    Mirage = function(){
        console.log("Ran Mirage fun");
    },
    //============================================================[11]====================================================================
    OtherSide = function(){
        console.log("Ran Otherside fun");
    },
    //============================================================[12]====================================================================
    Mimicry = function(){
        console.log("Ran Mimicry fun");
    },
    //============================================================[13]====================================================================
    HereditaryChaos = function(){
        console.log("Ran Hereditary Chaos fun");
    },
    //============================================================[14]====================================================================
    UncannySense = function(){
        console.log("Ran Uncanny Chaos fun");
    },
    //============================================================[15]====================================================================
    ShadowSlash = function(){
        console.log("Ran ShadowSlash fun");
    },
    //============================================================[16]====================================================================
    Enshroud = function(){
        console.log("Ran Enshroud fun");
    },
    //============================================================[17]====================================================================
    VileTendrils = function(){
        console.log("Ran Vile Tendrils fun");
    },
    //============================================================[18]====================================================================
    MidnightStrangle = function(){
        console.log("Ran Midnight Strangle fun");
    },
    //============================================================[19]====================================================================
    Inheritance = function(){
        console.log("Ran Inheritance fun");
    },
    //============================================================[20]====================================================================
    EldritchGaze = function(){
        console.log("Ran Eldritch Gaze fun");
    },
    //============================================================[21]====================================================================
    Protonymic = function(){
        console.log("Ran Protonymic fun");
    },
    //============================================================[22]====================================================================
    Neonymic = function(){
        console.log("Ran Neonymic fun");
    },
    //============================================================[23]====================================================================
    Commune = function(){
        console.log("Ran Commune fun");
    },
    //============================================================[24]====================================================================
    OffStage = function(){
        console.log("Ran Offstage fun");
    },
    //============================================================[25]====================================================================
    PointOfView = function(){
        console.log("Ran Point of View fun");
    },
    //============================================================[26]====================================================================
    Dialogue = function(){
        console.log("Ran Dialogue fun");
    },
    //============================================================[27]====================================================================
    Rewrite = function(){
        console.log("Ran Rewrite fun");
    },
    //============================================================[28]====================================================================
    HunterSense = function(){
        console.log("Ran HunterSense fun");
    },
    //============================================================[29]====================================================================
    EnemyAttack = function(){
        console.log("Ran enemy attack fun");
        let baseDamage;
        let damageMod = Math.floor(Math.random() * ( enemy.level + enemy.dexterity ) );

        if (enemy.fightType == 0){
            baseDamage = ( enemy.strength + damageMod ) - player.defense;

            if (baseDamage < 0){
                baseDamage = 0;
            }

        }
        else if (enemy.fightType == 1) {
            baseDamage = ( enemy.intelligence + damageMod ) - player.tenacity;

            if (baseDamage < 0){
                baseDamage = 0;
            }

        }

        var newDiv = $("<div>");

        if (baseDamage > 0 ){
            newDiv.html('<p class="bNEnemy">' + enemy.disClassType + ' attacks you for ' + baseDamage + ' points</p>');
        }
        else {
            newDiv.html('<p class="bNEnemy">'+ enemy.disClassType + ' tries to attack you, but can\'t make a dent!</p>');
        }
        
        $("#battleNotes").prepend(newDiv);

        return baseDamage;
    },
]