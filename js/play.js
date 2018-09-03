gameObj.Play = function (game) {

    var txScore;
    var txTime;
    var timerObj;
    var timerSeconds;
};


gameObj.Play.prototype = {
    create: function () {
        console.log('State - Play');


        // add walls and player here


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
    },
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
    }
};