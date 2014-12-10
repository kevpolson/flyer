/// <reference path="../objects/level2/sideScrollinglevel.ts" />
/// <reference path="../objects/level2/sidescrollingplayer.ts" />
module states {
    var player: objects.sideScrollingPlayer;
    var level: objects.sideScrollingLevel;

    export function level2Update() {
        if (player.transition) {
            if (!player.gameover) {
                player.destroy();
                level.destroy();
                currentState = constants.CUTSCENE3;
                changeState(currentState);
            }
            else if (player.gameover) {
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

    // level2 state Function
    export function level2(): void {
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
}