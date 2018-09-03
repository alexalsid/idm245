gameObj.Main = function (game) { };

gameObj.Main.prototype = {
    create: function () {
        console.log('State - Main');
        //Add background image
        var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'background');
        spBackground.anchor.setTo(0.5, 0.5);





        //Add list graphics
        var start = this.add.sprite(this.world.centerX - 300, this.world.centerY - 300, 'start');
        start.scale.setTo(1.5);

        //Add text
        var txFirst = this.add.text(this.world.centerX - 200, 100, 'TUNNEL VISION');
        var txSecond = this.add.text(this.world.centerX - 190, this.world.centerY - 130, 'Use the arrow keys to move through the');
        var txThird = this.add.text(this.world.centerX - 140, this.world.centerY - 90, 'tunnel without hittin the walls');


        txFirst.fill = 'white'
        txSecond.fill = 'white'
        txThird.fill = 'white'


        txFirst.font = 'Codystar';
        txSecond.font = 'Arial';
        txThird.font = 'Arial';


        txFirst.fontSize = 50;
        txSecond.fontSize = 20;
        txThird.fontSize = 20;

        //Add button
        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        btPlay = this.add.button(this.world.centerX, this.world.centerY + 200, 'playButton', this.actionOnClick, this, 2, 0, 3);
        btPlay.anchor.setTo(0.5, 0.5);

    },
    actionOnClick: function () {
        console.log('actionOnClick called');
        this.state.start('Play');
    }
};
