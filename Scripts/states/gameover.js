var states;
(function (states) {
    var image;

    function gameoverUpdate() {
        //update all elements of the cutscene state
        input.update();
        if (input.hasKeyBeenUp(constants.SPACE)) {
            destroyHUD();
            stage.removeChild(game);
            currentState = constants.STARTMENU_STATE;
            changeState(currentState);
        }
    }
    states.gameoverUpdate = gameoverUpdate;

    // cutscene state Function
    function gameover() {
        document.getElementById("canvas").style.display = "inline";
        renderer.domElement.style.display = "none";

        // Declare new Game Container
        game = new createjs.Container();
        image = new createjs.Bitmap("");
        game.addChild(image);
        createHUD(stage);
        stage.addChild(game);
    }
    states.gameover = gameover;

    function updateHUD() {
    }

    function createHUD(currentStage) {
        var hud = document.createElement('div');
        var gameover = document.createElement('div');
        var scoreDisplay = document.createElement('div');
        var inputStatement = document.createElement('div');

        hud.style.position = 'absolute';
        hud.id = "hud";
        hud.style.width = currentStage.canvas.width + "px";
        hud.style.height = currentStage.canvas.height + "px";
        hud.style.color = "#FFFFFF";
        hud.style.fontSize = "35px";
        hud.style.top = "10px";
        hud.style.left = "10px";

        gameover.id = "gameover";
        gameover.style.color = constants.COLOR_ORANGE;
        gameover.style.fontSize = "50px";
        gameover.style.width = "600px";
        gameover.style.height = "50px";
        gameover.style.position = 'absolute';
        gameover.style.top = (currentStage.canvas.height * 0.2) + "px";
        gameover.style.left = (currentStage.canvas.width * 0.5 - 150) + "px";
        gameover.innerHTML = "GAMEOVER";

        scoreDisplay.id = "inputStatement";
        scoreDisplay.style.fontSize = "40px";
        scoreDisplay.style.width = "50px";
        scoreDisplay.style.height = "50px";
        scoreDisplay.style.position = 'absolute';
        scoreDisplay.style.top = (currentStage.canvas.height * 0.4) + "px";
        scoreDisplay.style.left = (currentStage.canvas.width * 0.5 - 55) + "px";
        scoreDisplay.innerHTML = "Score: " + score;

        inputStatement.id = "inputStatement";
        inputStatement.style.width = "600px";
        inputStatement.style.height = "50px";
        inputStatement.style.position = 'absolute';
        inputStatement.style.top = (currentStage.canvas.height * 0.8) + "px";
        inputStatement.style.left = (currentStage.canvas.width * 0.5 - 210) + "px";
        inputStatement.innerHTML = "Press [SPACE] to Continue";

        hud.appendChild(gameover);
        hud.appendChild(scoreDisplay);
        hud.appendChild(inputStatement);

        document.body.appendChild(hud);
    }

    function destroyHUD() {
        document.body.removeChild(document.getElementById("hud"));
    }
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
