/// <reference path="../objects/label.ts" />
/// <reference path="../objects/skydiverlevel.ts" />
/// <reference path="../objects/skydiverplayer.ts" />
/// <reference path="../objects/createjs/sideScrollinglevel.ts" />
/// <reference path="../objects/createjs/sidescrollingplayer.ts" />
module states {
    var player;//: objects.sideScrollingPlayer;
    var level;//: objects.sideScrollingLevel;

    export function level2Update() {
        //update all elements of level2

        input.update();
        player.update();
        level.update(player, stage.canvas.width);
    }

    // level2 state Function
    export function level2(): void {
        //Make the canvas visible for createjs
        document.getElementById("canvas").style.display = "inline";

        // Declare new Game Container
        game = new createjs.Container();
        
        // Instantiate Game Objects
        level = new objects.sideScrollingLevel(game);
        player = new objects.sideScrollingPlayer(game);
        
        stage.addChild(game);
    }
}