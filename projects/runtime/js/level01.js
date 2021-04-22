var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        

    function createSawBlade(x, y){
        var hitZoneSize = 23;
        var damageFromObstacle = 10;
         var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
    }
       createSawBlade(1000, 280);
       createSawBlade(1700, 200);
       createSawBlade(2000, 200);
      
       function createTrain(x, y){
           var hitZoneSize = 30;
           var damageFromTrain = 30;
           var trainHitZone = game.createObstacle(hitZoneSize, damageFromTrain);
           var obstacleImage = draw.bitmap("https://mail.google.com/mail/u/0?ui=2&ik=479ae5b9c4&attid=0.1&permmsgid=msg-a:r5444474461604014706&th=178db29803823fd7&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-6M76IeNRaDThXgUQDyT7ey4EWWKXaZJ1wmg79hWvP2ByC4UrSzW-j448GvH2OQI2fwZ1O10PocFVoSCLDjgAI30O-KbZfq5t-8Z3I-MN-8cEJrUBiDqO7-YU&disp=emb&realattid=ii_knkfhwbl0")
           trainHitZone.addChild(obstacleImage)
           obstacleImage.x = -25;
           obstacleImage.y = -25;
           trainHitZone.x = x;
           trainHitZone.y = y;
           game.addGameItem(trainHitZone)
       } 
       createTrain(1200, 280);
        function createEnemy(x, y){
        var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.bitmap("https://mail.google.com/mail/u/0?ui=2&ik=479ae5b9c4&attid=0.1&permmsgid=msg-a:r1962190168674805721&th=178eab1987991a91&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9WwOJcoIN2zCJtltDoHcR0YFMh6fK4K9-xRK4Yvxh3VNMxmLg7Uc9ISG3WNiqmBdIOec9Ly0yzwf3w8Ay2UQkuwF_pXmawkSqd5UF9dDx82ATYxmsRHE1pD1o&disp=emb&realattid=ii_knoqmwkz0");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -3;
        enemy.onPlayerCollision = function() {
         console.log('The enemy has hit Halle');
         game.changeIntegrity(-50);
};      enemy.onProjectileCollision = function(){
        console.log("Halle has hit the enemy");
        game.increaseScore(100)
        enemy.fadeOut();
};
        
        }

        createEnemy(1600, 250);
    createTrain(1200, 280);
        function createHealth(x, y){
        var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.rect(25,25,"green")
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -2;
        enemy.onPlayerCollision = function() {
         console.log('Halle is healed');
         game.changeIntegrity(20);
         enemy.fadeOut();
};     enemy.onProjectileCollision = function(){
        console.log("Why did you shoot the health?");
        
};
        }
       function createTrophy(x, y){
        var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.bitmap("https://mail.google.com/mail/u/0?ui=2&ik=479ae5b9c4&attid=0.1&permmsgid=msg-a:r-5996309448342779230&th=178fa0dc75bd4104&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8iZx7a8BQm0CiZRzXxEs3_qg0w-1IjyeTqd1tUDovFhlL9AKvGD6XG8aTD1jwg4tXQpvK6oGIfQqsoDg5dKcDPw3y3nRkhNjZQ1sZezmVa5hG6WPiF6PXLLc0&disp=emb&realattid=ii_knt02d730")
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -2;
        enemy.onPlayerCollision = function() {
         console.log('You have won');
         game.changeIntegrity(20);
         enemy.fadeOut();
};     enemy.onProjectileCollision = function(){
        console.log("Why did you shoot the Trophy?");
        
};
        }
        createHealth(1900, 250);
        createSawBlade(2200, 300);
        createSawBlade(2500, 290);
        createTrain(2800, 300);
        createHealth(3000, 250);
        createEnemy(3600, 250);
        createSawBlade(3200, 200);
        creatTrain(3500, 250)
        createSawBlade(3700, 250);
        createSawBlade(3900, 200);
        createTrophy(4000, 250);
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
