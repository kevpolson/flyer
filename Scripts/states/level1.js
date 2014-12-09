/// <reference path="../objects/label.ts" />
/// <reference path="../objects/skydiverlevel.ts" />
/// <reference path="../objects/skydiverplayer.ts" />
/// <reference path="../objects/createjs/sideScrollinglevel.ts" />
/// <reference path="../objects/createjs/sidescrollingplayer.ts" />
var states;
(function (states) {
    var player;
    var level;

    function level1Update() {
        //update all elements of the play state
        input.update();
        level.update(scene);
        renderer.render(scene, level.player.camera);
    }
    states.level1Update = level1Update;

    // play state Function
    function level1() {
        //Hide canvas because it isn't used by THREEJS
        document.getElementById("canvas").style.display = "none";
        level = new objects.skyDiverLevel(scene, constants.ringMisses[difficulty]);
    }
    states.level1 = level1;
})(states || (states = {}));
//# sourceMappingURL=level1.js.map
