/// <reference path="../objects/level1/skydiverlevel.ts" />
/// <reference path="../objects/level1/skydiverplayer.ts" />
module states {
    var level: objects.skyDiverLevel;

    export function level1Update() {
        if (level.levelCompleted) {
            level.destroy(scene);
            currentState = constants.CUTSCENE2;
            changeState(currentState);
        }
        else if (level.gameover) {
            level.destroy(scene);
            currentState = constants.GAMEOVER_STATE;
            changeState(currentState);
        }

        //update all elements of the play state
        input.update();
        level.update(scene);
        renderer.render(scene, level.player.camera);

    }

    // play state Function
    export function level1(): void {
        //Hide canvas because it isn't used by THREEJS
        document.getElementById("canvas").style.display = "none";
        renderer.domElement.style.display = "inline";
        level = new objects.skyDiverLevel(scene, constants.ringMisses[difficulty]);
    }
}