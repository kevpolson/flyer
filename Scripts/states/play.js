/// <reference path="../objects/label.ts" />
/// <reference path="../objects/level.ts" />
/// <reference path="../objects/player.ts" />
var states;
(function (states) {
    function playUpdate() {
        //update all elements of the play state
        input.update();

        player.update(input);
        level.update(player, stage.canvas.width);
    }
    states.playUpdate = playUpdate;

    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        level = new objects.Level(game);
        player = new objects.Player(game);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
