﻿/// <reference path="../objects/level1/skydiverlevel.ts" />
/// <reference path="../objects/level1/skydiverplayer.ts" />
var states;
(function (states) {
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
        renderer.domElement.style.display = "inline";
        level = new objects.skyDiverLevel(scene, constants.ringMisses[difficulty]);
    }
    states.level1 = level1;
})(states || (states = {}));
//# sourceMappingURL=level1.js.map
