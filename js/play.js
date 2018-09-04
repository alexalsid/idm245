gameObj.Play = function (game) {

    var txScore;
    var txTime;
    var timerObj;
    var timerSeconds;
    var player;
    var cursors;
    
    var wall_r01;
    var wall_r01Obj;
};


gameObj.Play.prototype = {
    create: function () {
        console.log('State - Play');


        // add walls and player here
        //rightside
        var wall_r00 = this.game.add.sprite(-450, -500, 'wall');
        wall_r01 = this.game.add.sprite(-450, -250, 'wall');
     

        var wall_r02 = this.game.add.sprite(-450, 0, 'wall');
        var wall_r03 = this.game.add.sprite(-450, 250, 'wall');
        var wall_r04 = this.game.add.sprite(-450, 500, 'wall');
        var wall_r05 = this.game.add.sprite(-450, 750, 'wall');
        var wall_r06 = this.game.add.sprite(-450, 1000, 'wall');
        var wall_r07 = this.game.add.sprite(-450, 1250, 'wall');
        var wall_r08 = this.game.add.sprite(-450, 1500, 'wall');
        var wall_r09 = this.game.add.sprite(-450, 1750, 'wall');
        var wall_r10 = this.game.add.sprite(-450, 2000, 'wall');
        var wall_r11 = this.game.add.sprite(-450, 2250, 'wall');
        var wall_r12 = this.game.add.sprite(-450, 2500, 'wall');
        var wall_r13 = this.game.add.sprite(-450, 2750, 'wall');
        var wall_r14 = this.game.add.sprite(-450, 3000, 'wall');
        var wall_r15 = this.game.add.sprite(-450, 3250, 'wall');
        var wall_r16 = this.game.add.sprite(-450, 3500, 'wall');

        //leftside
        var wall_l00 = this.game.add.sprite(650, -500, 'wall');
        var wall_l01 = this.game.add.sprite(650, -250, 'wall');
        var wall_l02 = this.game.add.sprite(650,  0, 'wall');
        var wall_l03 = this.game.add.sprite(650, 250, 'wall');
        var wall_l04 = this.game.add.sprite(650, 500, 'wall');

        var wall_l05 = this.game.add.sprite(650, 750, 'wall');
        var wall_l06 = this.game.add.sprite(650, 1000, 'wall');
        var wall_l07 = this.game.add.sprite(650, 1250, 'wall');
        var wall_l08 = this.game.add.sprite(650, 1500, 'wall');
        var wall_l09 = this.game.add.sprite(650, 1750, 'wall');
        var wall_l10 = this.game.add.sprite(650, 2000, 'wall');
        var wall_l11 = this.game.add.sprite(650, 2250, 'wall');
        var wall_l12 = this.game.add.sprite(650, 2500, 'wall');
        var wall_l13 = this.game.add.sprite(650, 2750, 'wall');
        var wall_l14 = this.game.add.sprite(650, 3000, 'wall');
        var wall_l15 = this.game.add.sprite(650, 3250, 'wall');
        var wall_l16 = this.game.add.sprite(650, 3500, 'wall');

        //world

        this.game.world.setBounds(0, 0, 960, 3500);

        // physics

        this.game.physics.startSystem(Phaser.Physics.P2JS);

        //player
        player = this.game.add.sprite(450, 300, 'player');

        this.game.physics.p2.enable(player);

        cursors = this.game.input.keyboard.createCursorKeys();

        //camera
        this.game.camera.follow(player);

    

        //reset game score
        gameObj.gScore = 0;

        //Add text
        var scoreStr = '0';
        var timeStr = '01:10';

        txScore = this.add.text(25, 15, scoreStr);
        txTime = this.add.text(this.world.width - 115, 15, timeStr);

        txScore.fill = 'black';
        txScore.font = 'Arial';
        txScore.fontSize = 36;

        txTime.fill = 'black';
        txTime.font = 'Arial';
        txTime.fontSize = 36;

        timerSeconds = 70;
        timerObj = this.game.time.create(false);
        timerObj.loop(1000, this.updateTimerFun, this);
        timerObj.start();
    }, // end create function


    winnerFun: function () {
        console.log('winnerFun called');
        this.state.start('Winner');
    },
    loserFun: function () {
        console.log('loserFun called');
        this.state.start('Loser');
    },

    pointsFun: function () {

        console.log('points button called');
        gameObj.gScore += 10;
        txScore.text = gameObj.gScore;

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


        } else if (timerSeconds == 0 && gameObj.gScore >= 100) {


            this.winnerFun();


        } else {


            this.loserFun();


        }
    },

    update: function () {

    player.body.setZeroVelocity();

    if (cursors.up.isDown) {
        player.body.moveUp(300)
    }
    else if (cursors.down.isDown) {
    player.body.moveDown(300);
    }

    if (cursors.left.isDown) {
        player.body.velocity.x = -300;
    }
    else if (cursors.right.isDown) {
    player.body.moveRight(300);
    }

},


    render: function () {

    this.game.debug.cameraInfo(this.game.camera, 32, 32);
    this.game.debug.spriteCoords(player, 32, 500);

}

};