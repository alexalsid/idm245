gameObj.Play = function (game) {

    var txScore;
    var txTime;
    var timerObj;
    var timerSeconds;
    var player;
    var cursors;
    var playerObj;

    var wall_r01;
    var wall_r01Obj;

    var startTime = 0;
    var endTime = 0;
    var duration = 0;

    var loseSfx;
    var pointsSfx;
    var wallSfx;
};


gameObj.Play.prototype = {
    create: function () {
        console.log('State - Play');


        // add walls and player here
        //rightside
        //var wall_r00 = this.game.add.sprite(-450, -500, 'wall');
        //wall_r01 = this.game.add.sprite(-450, -250, 'wall');
     //
//
        //var wall_r02 = this.game.add.sprite(-450, 0, 'wall');
        //var wall_r03 = this.game.add.sprite(-450, 250, 'wall');
        //var wall_r04 = this.game.add.sprite(-450, 500, 'wall');
        //var wall_r05 = this.game.add.sprite(-450, 750, 'wall');
        //var wall_r06 = this.game.add.sprite(-450, 1000, 'wall');
        //var wall_r07 = this.game.add.sprite(-450, 1250, 'wall');
        //var wall_r08 = this.game.add.sprite(-450, 1500, 'wall');
        //var wall_r09 = this.game.add.sprite(-450, 1750, 'wall');
        //var wall_r10 = this.game.add.sprite(-450, 2000, 'wall');
        //var wall_r11 = this.game.add.sprite(-450, 2250, 'wall');
        //var wall_r12 = this.game.add.sprite(-450, 2500, 'wall');
        //var wall_r13 = this.game.add.sprite(-450, 2750, 'wall');
        //var wall_r14 = this.game.add.sprite(-450, 3000, 'wall');
        //var wall_r15 = this.game.add.sprite(-450, 3250, 'wall');
        //var wall_r16 = this.game.add.sprite(-450, 3500, 'wall');
//
        ////leftside
        //var wall_l00 = this.game.add.sprite(650, -500, 'wall');
        //var wall_l01 = this.game.add.sprite(650, -250, 'wall');
        //var wall_l02 = this.game.add.sprite(650,  0, 'wall');
        //var wall_l03 = this.game.add.sprite(650, 250, 'wall');
        //var wall_l04 = this.game.add.sprite(650, 500, 'wall');
//
        //var wall_l05 = this.game.add.sprite(650, 750, 'wall');
        //var wall_l06 = this.game.add.sprite(650, 1000, 'wall');
        //var wall_l07 = this.game.add.sprite(650, 1250, 'wall');
        //var wall_l08 = this.game.add.sprite(650, 1500, 'wall');
        //var wall_l09 = this.game.add.sprite(650, 1750, 'wall');
        //var wall_l10 = this.game.add.sprite(650, 2000, 'wall');
        //var wall_l11 = this.game.add.sprite(650, 2250, 'wall');
        //var wall_l12 = this.game.add.sprite(650, 2500, 'wall');
        //var wall_l13 = this.game.add.sprite(650, 2750, 'wall');
        //var wall_l14 = this.game.add.sprite(650, 3000, 'wall');
        //var wall_l15 = this.game.add.sprite(650, 3250, 'wall');
        //var wall_l16 = this.game.add.sprite(650, 3500, 'wall');

        // physics

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.setImpactEvents(true);
        this.game.physics.p2.restitution = 0.8;

        //world

        this.game.world.setBounds(0, 0, 960, 40000);

        

        //collistion groups
        var playerCollisionGroup = this.game.physics.p2.createCollisionGroup();
        var obstaclesCollisionGroup = this.game.physics.p2.createCollisionGroup();
        var pointsCollisionGroup = this.game.physics.p2.createCollisionGroup();
        var wallsCollisionGroup = this.game.physics.p2.createCollisionGroup();
        this.game.physics.p2.updateBoundsCollisionGroup();

        var walls = this.game.add.group();
        this.game.physics.enable(walls);
        walls.enableBody = true;
        walls.physicsBodyType = Phaser.Physics.P2JS;
       


        for (var i = 0; i < 100; i++) {
            var yPos = i * 250;
            

            if (i < 30) {
                var wall = walls.create(-50, yPos, 'wall');
            } else if (i > 30 && i < 60) {

                var wall = walls.create(-20, yPos, 'wall');
            } else if (i > 60) {

                var wall = walls.create(0, yPos, 'wall');

            };
            wall.body.setRectangle(550, 550);
            wall.body.kinematic = true;
            wall.body.setCollisionGroup(wallsCollisionGroup);
            wall.body.collides([wallsCollisionGroup, playerCollisionGroup]);
            
           
        }

        //right walls

        for (var i = 0; i < 100; i++) {
            
            var yPos = i * 250;
            if (i < 30) {
            var wall = walls.create(1000, yPos, 'wall');
            } else if(i > 30 && i < 60){

            var wall = walls.create(970, yPos, 'wall');
            } else if (i > 60) {

            var wall = walls.create(950, yPos, 'wall');
                
            };
            wall.body.setRectangle(550, 550);
            wall.body.kinematic = true;
            wall.body.setCollisionGroup(wallsCollisionGroup);
            wall.body.collides([wallsCollisionGroup, playerCollisionGroup]);
            
           
        } 

        //points 
        var points = this.game.add.group();
        points.enableBody = true;
        points.physicsBodyType = Phaser.Physics.P2JS;

        for (var i = 0; i < 220; i++) {
            var xPos = this.game.rnd.integerInRange(300, 700);
            var point = points.create(xPos, this.game.world.randomY, 'points');
            //this.game.physics.p2.enable(point);
            point.body.setRectangle(40, 40);
            point.body.setCollisionGroup(pointsCollisionGroup);

            //  Pandas will collide against themselves and the player
            //  If you don't set this they'll not collide with anything.
            //  The first parameter is either an array or a single collision group.
            point.body.collides([pointsCollisionGroup, playerCollisionGroup]);
        }

        //obstacles 

        var obstacles = this.game.add.group();
        obstacles.enableBody = true;
        obstacles.physicsBodyType = Phaser.Physics.P2JS;

        for (var i = 0; i < 50; i++) {
            var xPos = this.game.rnd.integerInRange(300, 700);
            var obstacle = obstacles.create(xPos, this.game.world.randomY, 'obstacles');
            //this.game.physics.p2.enable(point);
            obstacle.body.setRectangle(40, 40);

            //  Tell the panda to use the pandaCollisionGroup 
            obstacle.body.setCollisionGroup(obstaclesCollisionGroup);

            //  Pandas will collide against themselves and the player
            //  If you don't set this they'll not collide with anything.
            //  The first parameter is either an array or a single collision group.
            obstacle.body.collides([obstaclesCollisionGroup, playerCollisionGroup]);
        }
    

        //player
        
        player = this.game.add.sprite(450, 300, 'player');
        this.game.physics.p2.enable(player);
        player.body.setCircle(28);
        player.body.velocity.y = 300;
        player.body.collideWorldBounds = true;

        player.body.setCollisionGroup(playerCollisionGroup);
        player.body.collides(pointsCollisionGroup, this.hitPoints, this);
        player.body.collides(obstaclesCollisionGroup, this.hitObstacles, this);
        player.body.collides(wallsCollisionGroup, this.hitWalls, this);
        

        cursors = this.game.input.keyboard.createCursorKeys();

        //camera
        this.game.camera.follow(player);

    

        //reset game score
        gameObj.gScore = 0;

        //Add text
        var scoreStr = '0';
        var timeStr = '02:30';

        txScore = this.add.text(25, 15, scoreStr);
        txScore.fixedToCamera = true;
        txTime = this.add.text(this.world.width - 115, 15, timeStr);
        txTime.fixedToCamera = true;

        txScore.fill = 'black';
        txScore.font = 'Arial';
        txScore.fontSize = 36;

        txTime.fill = 'black';
        txTime.font = 'Arial';
        txTime.fontSize = 36;

        timerSeconds = 150;
        timerObj = this.game.time.create(false);
        timerObj.loop(1000, this.updateTimerFun, this);
        timerObj.start();

        //sounds
        loseSfx = this.game.add.audio('loseSfx');
        loseSfx.allowMultiple = true;
        pointsSfx = this.game.add.audio('pointsSfx');
        pointsSfx.allowMultiple = true;
        wallSfx = this.game.add.audio('wallSfx');
        wallSfx.allowMultiple = true;

    }, // end create function


    winnerFun: function () {
        console.log('winnerFun called');
        this.state.start('Winner');
    },
    loserFun: function () {
        console.log('loserFun called');
        this.state.start('Loser');
    },

    hitPoints: function (body1, body2) {

        console.log('points button called');
        pointsSfx.play();
        gameObj.gScore += 10;
        txScore.text = gameObj.gScore;
        player.body.velocity.y = 300;
        body2.sprite.alpha = 0.0;


    },

    hitObstacles: function () {
        loseSfx.play();
        this.loserFun();
        
    },

    hitWalls: function () {
        wallSfx.play();

    },

    updateTimerFun: function () {


        if (timerSeconds > 0) {



            timerSeconds = timerSeconds - 1;

            displayMin = Math.floor(timerSeconds / 60) % 60;

            if (displayMin < 10) {

                displayMin = '0' + displayMin;
            }

            displaySec = Math.floor(timerSeconds) % 60;

            if (displaySec < 10) {

                displaySec = '0' + displaySec;
            }

            gameObj.gTime = displayMin + ":" + displaySec;
            txTime.text = gameObj.gTime;


        } else if (timerSeconds == 0 && gameObj.gScore >= 1500) {


            this.winnerFun();


        } else {


            this.loserFun();


        }
    },

    update: function () {

    
 

    if (cursors.left.isDown) {
        player.body.velocity.x = -300;
    } else if (cursors.right.isDown) {
        player.body.moveRight(200);
    }

       



},


    render: function () {

    //this.game.debug.cameraInfo(this.game.camera, 32, 32);
    //this.game.debug.spriteCoords(player, 32, 500);

}

};