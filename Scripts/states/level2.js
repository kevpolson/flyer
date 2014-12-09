/// <reference path="../objects/level2/sideScrollinglevel.ts" />
/// <reference path="../objects/level2/sidescrollingplayer.ts" />
var states;
(function (states) {
    var player;
    var level;

    function level2Update() {
        //update all elements of level2
        input.update();
        player.update();
        level.update(player, stage.canvas.width);
    }
    states.level2Update = level2Update;

    // level2 state Function
    function level2() {
        //Make the canvas visible for createjs
        document.getElementById("canvas").style.display = "inline";

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        level = new objects.sideScrollingLevel(game);
        player = new objects.sideScrollingPlayer(game);

        stage.addChild(game);
    }
    states.level2 = level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map
