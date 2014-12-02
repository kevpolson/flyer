/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/level.ts" />
/// <reference path="objects/player.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="states/loading.ts" />
/// <reference path="states/play.ts" />
var stage;
var game;
var input;

var level;
var player;
var bgMusic;

var currentState;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload() {
    stage = new createjs.Stage(document.getElementById("canvas"));

    currentState = constants.LOADING_STATE;
    changeState(currentState);

    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init() {
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    optimizeForMobile();
    input = new managers.Input();
    //bgMusic = createjs.Sound.play("bgMusic", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
    //console.log("objects: " + stage.children.length);
}

function changeState(state) {
    switch (state) {
        case constants.LOADING_STATE:
            // instantiate play screen
            currentStateFunction = states.loadingUpdate;
            states.loading();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playUpdate;
            states.play();
            break;
    }
}
//# sourceMappingURL=game.js.map
