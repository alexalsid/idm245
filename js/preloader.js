gameObj.Preloader = function (game) { };

gameObj.Preloader.prototype = {
    preload: function () {
        console.log("State - Preloader");
        this.stage.backgroundColor = '#FFF';

        // Progress bar animation code
        //this.preloadBg = this.add.sprite((820 - 297) / 2, (700 - 145) / 2, 'preloaderBg');
        //this.preloadBar = this.add.sprite((820 - 158) / 2, (700 - 50) / 2, 'preloaderBar');
        //this.load.setPreloadSprite(this.preloadBar);
        //PLAY BTN

        this.load.spritesheet('playButton', 'img/playbtn.png', 133.33, 54);

        // THIS IS WHERE MY IMAGES WILL GO
        this.game.load.image('wall', 'img/wall.png');
        this.game.load.image('player', 'img/player.png');
        this.game.load.image('win', 'img/win.png');
        this.game.load.image('start', 'img/start.png');
        this.game.load.image('lose', 'img/lose.png');
        this.game.load.image('points', 'img/points.png');
        this.game.load.image('obstacles', 'img/obstacles.png');


        // BUTTONS
        this.load.spritesheet('replayButton', 'img/replaybtn.png', 133.33, 54);
        this.load.spritesheet('playButton', 'img/playbtn.png', 133.33, 54);
        this.load.spritesheet('loseButton', 'img/losebtn.png', 133.33, 54);
        this.load.spritesheet('winButton', 'img/winbtn.png', 133.33, 54);
        //temporary 

        this.load.spritesheet('pointsButton', "img/pointsbtn.png", 133.33, 54);






        // SCRIPTS
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },
    create: function () {
        this.state.start('Main');
    }
};