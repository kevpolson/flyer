/// <reference path="../objects/label.ts" />
/// <reference path="../objects/skydiverlevel.ts" />
/// <reference path="../objects/skydiverplayer.ts" />
/// <reference path="../objects/createjs/sideScrollinglevel.ts" />
/// <reference path="../objects/createjs/sidescrollingplayer.ts" />
var states;
(function (states) {
    var player;
    var level;

    function playUpdate() {
        //update all elements of the play state
        //THREEJS
        input.update();
        player.update();
        level.update(player);
        renderer.render(scene, player.camera);
        //CreateJS
        //player.update(input);
        //level.update(player, stage.canvas.width);
    }
    states.playUpdate = playUpdate;

    // play state Function
    function play() {
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
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
