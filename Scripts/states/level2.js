/// <reference path="../objects/level2/sideScrollinglevel.ts" />
/// <reference path="../objects/level2/sidescrollingplayer.ts" />
var states;
(function (states) {
    var player;
    var level;

    function level2Update() {
        if (player.transition) {
            if (!level.gameover) {
                player.destroy();
                level.destroy();
                currentState = constants.CUTSCENE3;
                changeState(currentState);
            } else if (level.gameover) {
                player.destroy();
                level.destroy();
                currentState = constants.GAMEOVER_STATE;
                changeState(currentState);
            }
        }

        //update all elements of level2
        input.update();
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
        level = new objects.sideScrollingLevel(game, player, constants.enemyLife[difficulty]);
        player = new objects.sideScrollingPlayer(game);
        level.createHUD(player);

        stage.addChild(game);
    }
    states.level2 = level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map
