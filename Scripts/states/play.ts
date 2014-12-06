/// <reference path="../objects/label.ts" />
/// <reference path="../objects/skydiverlevel.ts" />
/// <reference path="../objects/skydiverplayer.ts" />
/// <reference path="../objects/sideScrollinglevel.ts" />
/// <reference path="../objects/sidescrollingplayer.ts" />
module states {
    var player;//: objects.sideScrollingPlayer;
    var level;//: objects.sideScrollingLevel;

    export function playUpdate() {
        //update all elements of the play state

        //THREEJS
        input.update();
        player.update();
        renderer.render(scene, player.camera);

        //CreateJS
        //player.update(input);
        //level.update(player, stage.canvas.width);
    }

    // play state Function
    export function play(): void {
        //THREEJS
        document.getElementById("canvas").style.display = "none";
        level = new objects.skyDiverLevel(scene);
        player = new objects.skyDiverPlayer(scene);

        //CreateJS
        // Declare new Game Container
        //game = new createjs.Container();
        
        // Instantiate Game Objects
        //level = new objects.sideScrollingLevel(game);
        //player = new objects.sideScrollingPlayer(game);
        
        //stage.addChild(game);
    }
}