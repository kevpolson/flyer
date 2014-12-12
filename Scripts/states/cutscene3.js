var states;
(function (states) {
    var image;

    function cutscene3Update() {
        //update all elements of the cutscene state
        input.update();
        if (input.hasKeyBeenUp(constants.SPACE)) {
            stage.removeChild(bgImage);
            managers.Assets.killSounds();
            destroyHUD();
            stage.removeChild(game);
            currentState = constants.GAMEOVER_STATE;
            changeState(currentState);
        }
    }
    states.cutscene3Update = cutscene3Update;

    // cutscene state Function
    function cutscene3() {
        document.getElementById("canvas").style.display = "inline";

        // Declare new Game Container
        game = new createjs.Container();
        image = new createjs.Bitmap("");
        game.addChild(image);
        createHUD(stage);
        stage.addChild(game);
    }
    states.cutscene3 = cutscene3;

    function updateHUD() {
    }

    var bgImage;
    function createHUD(currentStage) {
        bgImage = new createjs.Bitmap(managers.Assets.loader.getResult("cutscene3"));
        stage.addChild(bgImage);
        var hud = document.createElement('div');
        var inputStatement = document.createElement('div');

        hud.style.position = 'absolute';
        hud.id = "hud";
        hud.style.width = currentStage.canvas.width + "px";
        hud.style.height = currentStage.canvas.height + "px";
        hud.style.color = "#FFFFFF";
        hud.style.fontSize = "35px";
        hud.style.top = "10px";
        hud.style.left = "10px";

        inputStatement.id = "inputStatement";
        inputStatement.style.width = "600px";
        inputStatement.style.height = "50px";
        inputStatement.style.position = 'absolute';
        inputStatement.style.top = (currentStage.canvas.height * 0.8) + "px";
        inputStatement.style.left = (currentStage.canvas.width * 0.5 - 210) + "px";
        inputStatement.innerHTML = "Press [SPACE] to Continue";

        hud.appendChild(inputStatement);

        document.body.appendChild(hud);
    }

    function destroyHUD() {
        document.body.removeChild(document.getElementById("hud"));
    }
})(states || (states = {}));
//# sourceMappingURL=cutscene3.js.map
