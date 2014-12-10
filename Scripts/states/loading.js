/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
var states;
(function (states) {
    function loadingUnload() {
        destroyHUD();
        currentState = constants.STARTMENU_STATE; //constants.CUTSCENE1;//
        changeState(currentState);
    }
    states.loadingUnload = loadingUnload;

    function loadingState(event) {
        updateHUD(Math.floor(event.progress * 100).toString() + "%");
    }
    states.loadingState = loadingState;

    function loadingUpdate() {
    }
    states.loadingUpdate = loadingUpdate;

    function loading(currentStage) {
        createHUD(currentStage);
    }
    states.loading = loading;

    function updateHUD(progressUpdate) {
        var progress = document.getElementById("progress");

        progress.innerHTML = progressUpdate;
    }

    function createHUD(currentStage) {
        var hud = document.createElement('div');
        var progress = document.createElement('div');

        hud.style.position = 'absolute';
        hud.id = "hud";
        hud.style.width = currentStage.canvas.width + "px";
        hud.style.height = currentStage.canvas.height + "px";
        hud.style.color = "#F2F5A9";
        hud.style.fontSize = "35px";
        hud.style.top = "10px";
        hud.style.left = "10px";

        progress.id = "progress";
        progress.style.color = "#FE2E2E";
        progress.style.width = "80px";
        progress.style.height = "50px";
        progress.style.position = 'absolute';
        progress.style.top = (currentStage.canvas.height * 0.5 - 25) + "px";
        progress.style.left = (currentStage.canvas.width * 0.5 - 40) + "px";
        progress.innerHTML = "0%";

        hud.appendChild(progress);

        document.body.appendChild(hud);
    }

    function destroyHUD() {
        document.body.removeChild(document.getElementById("hud"));
    }
})(states || (states = {}));
//# sourceMappingURL=loading.js.map
