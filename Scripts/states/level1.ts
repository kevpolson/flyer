/// <reference path="../objects/label.ts" />
/// <reference path="../objects/skydiverlevel.ts" />
/// <reference path="../objects/skydiverplayer.ts" />
/// <reference path="../objects/createjs/sideScrollinglevel.ts" />
/// <reference path="../objects/createjs/sidescrollingplayer.ts" />
module states {
    var player;//: objects.sideScrollingPlayer;
    var level;//: objects.sideScrollingLevel;

    export function level1Update() {
        //update all elements of the play state

        input.update();
        level.update(scene);
        renderer.render(scene, level.player.camera);

    }

    // play state Function
    export function level1(): void {
        //Hide canvas because it isn't used by THREEJS
        document.getElementById("canvas").style.display = "none";
        level = new objects.skyDiverLevel(scene, constants.ringMisses[difficulty]);
    }
}