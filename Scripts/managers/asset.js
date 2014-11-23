/// <reference path="../states/loading.ts" />
var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "background", src: "assets/images/background.png" },
        { id: "bgMusic", src: "assets/sounds/UnderTheClouds.mp3" }
    ];

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

            this.player = new createjs.SpriteSheet(playerSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
