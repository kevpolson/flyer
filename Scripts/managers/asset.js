/// <reference path="../states/loading.ts" />
var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "background", src: "assets/images/background.png" },
        { id: "bgMusic", src: "assets/sounds/UnderTheClouds.mp3" }
    ];

    var newPlayerSheetData = {
        "images": ["assets/images/newPlayer.png"],
        "frames": [
            [1, 1, 36, 59],
            [38, 1, 36, 57],
            [75, 1, 36, 56],
            [112, 1, 36, 57],
            [149, 1, 36, 59],
            [186, 1, 36, 57],
            [223, 1, 36, 56],
            [260, 1, 36, 57],
            [1, 61, 37, 53],
            [39, 61, 43, 60],
            [84, 61, 53, 60],
            [137, 61, 46, 51],
            [185, 61, 39, 52],
            [224, 61, 41, 59],
            [266, 61, 50, 51],
            [317, 61, 46, 52],
            [1, 122, 59, 52],
            [61, 122, 50, 53],
            [112, 122, 70, 53],
            [183, 122, 64, 51],
            [248, 122, 50, 53],
            [299, 122, 65, 51]
        ],
        "animations": {
            "idle": {
                frames: [0, 1, 2, 3, 4, 5, 6, 7],
                speed: constants.ANIMATION_TIME
            },
            "dash": {
                frames: [8, 9, 10, 11, 12, 13, 14, 15],
                speed: constants.ANIMATION_TIME
            },
            "attack": {
                frames: [16, 17, 18, 19, 20, 21],
                next: "idle",
                speed: constants.ANIMATION_TIME
            }
        }
    };

    // SpriteSheet for Player Object
    var playerSheetData = {
        "images": ["assets/images/supes.png"],
        "frames": [
            [
                0, 0,
                constants.IDLE_WIDTH, constants.IDLE_HEIGHT],
            [
                constants.IDLE_WIDTH, 0,
                constants.IDLE_WIDTH, constants.IDLE_HEIGHT],
            [
                constants.IDLE_WIDTH * 2, 0,
                constants.IDLE_WIDTH, constants.IDLE_HEIGHT],
            [
                constants.IDLE_WIDTH * 3, 0,
                constants.IDLE_WIDTH, constants.IDLE_HEIGHT],
            [
                0, constants.IDLE_HEIGHT,
                constants.FLY_WIDTH, constants.FLY_HEIGHT],
            [
                constants.FLY_WIDTH, constants.IDLE_HEIGHT,
                constants.FLY_WIDTH, constants.FLY_HEIGHT],
            [
                0, constants.IDLE_HEIGHT + constants.FLY_HEIGHT,
                constants.FLY_WIDTH, constants.FLY_HEIGHT],
            [
                constants.FLY_WIDTH, constants.IDLE_HEIGHT + constants.FLY_HEIGHT,
                constants.FLY_WIDTH, constants.FLY_HEIGHT]
        ],
        "animations": {
            "idle": {
                frames: [0, 1, 2, 3],
                speed: constants.ANIMATION_TIME },
            "flyLeft": {
                frames: [4, 5],
                speed: constants.ANIMATION_TIME },
            "flyRight": {
                frames: [6, 7],
                speed: constants.ANIMATION_TIME }
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();

            this.loader = new createjs.LoadQueue();
            this.loader.on("progress", states.loadingState, this);
            this.loader.on("complete", states.loadingUnload, this);

            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);

            this.player = new createjs.SpriteSheet(newPlayerSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
