gameObj.Loser = function (game) { };

gameObj.Loser.prototype = {
    create: function () {


        console.log('State - Loser');
        var lose = this.add.sprite(this.world.centerX - 300, 50, 'lose');
        lose.scale.setTo(1.5);


        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        btReplay = this.add.button(this.world.centerX, 600, 'replayButton', this.replayFun, this, 2, 0, 3);
        btReplay.anchor.setTo(0.5, 0.5);


        //Add text
        var scoreStr = gameObj.gScore;
        var timeStr = gameObj.gTime;

        var txScore = this.add.text(25, 15, scoreStr);
        var txTime = this.add.text(this.world.width - 115, 15, timeStr);

        txScore.fill = 'black';
        txScore.font = 'Arial';
        txScore.fontSize = 36;

        txTime.fill = 'black';
        txTime.font = 'Arial';
        txTime.fontSize = 36;


        var txFirst = this.add.text(this.world.centerX - 200, 100, 'TUNNEL VISION');
        var txSecond = this.add.text(this.world.centerX - 140, 170, 'oh no... you died in the tunnel!');
        var txThird = this.add.text(this.world.centerX - 100, 200, 'better luck next time');


        txFirst.fill = 'white'
        txSecond.fill = 'white'
        txThird.fill = 'white'


        txFirst.font = 'Codystar';
        txSecond.font = 'Arial';
        txThird.font = 'Arial';


        txFirst.fontSize = 50;
        txSecond.fontSize = 20;
        txThird.fontSize = 20;


    },




    replayFun: function () {
        console.log('replayFun called');
        this.state.start('Play');
    }


};