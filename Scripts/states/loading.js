/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    var progress;
    function loadingUnload() {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();

        currentState = constants.LEVEL1;
        changeState(currentState);
    }
    states.loadingUnload = loadingUnload;

    function loadingState(event) {
        progress.text = (event.progress * 100).toString() + "%";

        stage.update();
    }
    states.loadingState = loadingState;

    function loadingUpdate() {
    }
    states.loadingUpdate = loadingUpdate;

    function loading() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        progress = new objects.Label(stage.canvas.width * 0.5, stage.canvas.height * 0.5, "0%");
        game.addChild(progress);

        stage.addChild(game);
    }
    states.loading = loading;
})(states || (states = {}));
//# sourceMappingURL=loading.js.map
