/// <reference path="../objects/label.ts" />
/// <reference path="../objects/level.ts" />
/// <reference path="../objects/player.ts" />
module states {
    export function playUpdate() {
        //update all elements of the play state
        input.update();

        player.update(input);
        level.update(player, stage.canvas.width);
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        level = new objects.Level(game);
        player = new objects.Player(game);
        
        stage.addChild(game);
    }
}