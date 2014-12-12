/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="states/loading.ts" />
/// <reference path="states/level1.ts" />
/// <reference path="states/level1.ts" />
//three.js
var scene;

var renderer;

//create.js
var stage;
var game;
var input;
var menuInput;
var difficulty;
var score;

var bgMusic;

var currentState;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ alpha: true });
    difficulty = constants.NORMAL;

    renderer.setClearColor(0x002F59, 1);
    renderer.setSize(854, 480);
    renderer.domElement.style.display = "none";
    document.body.appendChild(renderer.domElement);
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

    //difficulty = constants.NORMAL;
    bgMusic = createjs.Sound.play("bgMusic", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.025, 0);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event) {
    stage.update();
    currentStateFunction();
    //console.log("objects: " + stage.children.length);
}

function changeState(state) {
    switch (state) {
        case constants.LOADING_STATE:
            // instantiate play screen
            currentStateFunction = states.loadingUpdate;
            states.loading(stage);
            break;
        case constants.STARTMENU_STATE:
            // instantiate play screen
            currentStateFunction = states.startMenuUpdate;
            states.startMenu();
            break;
        case constants.CUTSCENE1:
            // instantiate play screen
            currentStateFunction = states.cutscene1Update;
            states.cutscene1();
            break;
        case constants.CUTSCENE2:
            // instantiate play screen
            currentStateFunction = states.cutscene2Update;
            states.cutscene2();
            break;
        case constants.CUTSCENE3:
            // instantiate play screen
            currentStateFunction = states.cutscene3Update;
            states.cutscene3();
            break;
        case constants.LEVEL1:
            // instantiate play screen
            currentStateFunction = states.level1Update;
            states.level1();
            break;
        case constants.LEVEL2:
            // instantiate play screen
            currentStateFunction = states.level2Update;
            states.level2();
            break;
        case constants.GAMEOVER_STATE:
            // instantiate play screen
            currentStateFunction = states.gameoverUpdate;
            states.gameover();
            break;
    }
}
//# sourceMappingURL=game.js.map
