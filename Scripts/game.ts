/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/player.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="states/loading.ts" />
/// <reference path="states/play.ts" />

var stage: createjs.Stage;
var game: createjs.Container;
var input: managers.Input;
var camera: objects.Camera;

var background: objects.Background;
var player: objects.Player;
var bgMusic: createjs.SoundInstance;

var currentState: number;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    states.loading();
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    optimizeForMobile();
    input = new managers.Input();

    bgMusic = createjs.Sound.play("bgMusic", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
    currentState = constants.PLAY_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    currentStateFunction();
    stage.update();

    //console.log("objects: " + game.children.length);
}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
    }
}

//the player will shoot when an enemy is pressed
function playerShoot(event) {
    player.shootPressed();
}





