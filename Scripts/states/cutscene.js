var states;
(function (states) {
    var player;
    var level;

    function cutsceneUpdate() {
        //update all elements of the cutscene state
        input.update();
        //CreateJS
        //player.update();
        //level.update(player, stage.canvas.width);
    }
    states.cutsceneUpdate = cutsceneUpdate;

    // cutscene state Function
    function cutscene() {
        document.getElementById("canvas").style.display = "inline";

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        level = new objects.sideScrollingLevel(game);
        player = new objects.sideScrollingPlayer(game);

        stage.addChild(game);
    }
    states.cutscene = cutscene;
})(states || (states = {}));
//# sourceMappingURL=cutscene.js.map
