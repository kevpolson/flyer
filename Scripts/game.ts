/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="states/loading.ts" />
/// <reference path="states/play.ts" />

//three.js
var scene: THREE.Scene; 

var renderer: THREE.WebGLRenderer;

//create.js
var stage: createjs.Stage;
var game: createjs.Container;
var input: managers.Input;

var bgMusic: createjs.SoundInstance;

var currentState: number;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x002F59, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    stage = new createjs.Stage(document.getElementById("canvas"));
    
    currentState = constants.LOADING_STATE;
    changeState(currentState);

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

    //bgMusic = createjs.Sound.play("bgMusic", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    //stage.update();
    currentStateFunction();

    //console.log("objects: " + stage.children.length);
}

function changeState(state: number): void {
    // Launch Various "screens"
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





