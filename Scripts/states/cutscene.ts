module states {
    var player;//: objects.sideScrollingPlayer;
    var level;//: objects.sideScrollingLevel;

    export function cutsceneUpdate() {
        //update all elements of the cutscene state

        input.update();
        //CreateJS
        //player.update();
        //level.update(player, stage.canvas.width);
    }

    // cutscene state Function
    export function cutscene(): void {
        document.getElementById("canvas").style.display = "inline";
        
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        level = new objects.sideScrollingLevel(game);
        player = new objects.sideScrollingPlayer(game);

        stage.addChild(game);
    }
} 