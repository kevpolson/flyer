/// <reference path="../objects/label.ts" />
/// <reference path="../objects/skydiverlevel.ts" />
/// <reference path="../objects/skydiverplayer.ts" />
/// <reference path="../objects/sideScrollinglevel.ts" />
/// <reference path="../objects/sidescrollingplayer.ts" />
var states;
(function (states) {
    var player;
    var level;

    function playUpdate() {
        //update all elements of the play state
        input.update();

        player.update(input);

        //console.log(player.y + ' ' + player.regY + ' ' + player.currentFrame);
        level.update(player, stage.canvas.width);
    }
    states.playUpdate = playUpdate;

    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        level = new objects.skyDiverLevel(game, stage.canvas.width, stage.canvas.height);
        player = new objects.skyDiverPlayer(game, stage.canvas.width, stage.canvas.height);

        //level = new objects.sideScrollingLevel(game);
        //player = new objects.sideScrollingPlayer(game);
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
