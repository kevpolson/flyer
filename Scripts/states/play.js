/// <reference path="../objects/label.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/camera.ts" />
/// <reference path="../objects/player.ts" />
var states;
(function (states) {
    function playState() {
        //update all elements of the play state
        background.update();
        player.update();
        camera.update();
    }
    states.playState = playState;

    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game);
        player = new objects.Player(stage, game);
        console.log(player.x);
        camera = new objects.Camera(stage, game, player);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
