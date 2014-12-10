module states {
    var image: createjs.Bitmap;

    export function cutscene3Update() {
        //update all elements of the cutscene state
        input.update();
        if (input.hasKeyBeenUp(constants.SPACE)) {
            destroyHUD();
            stage.removeChild(game);
            currentState = constants.GAMEOVER_STATE;
            changeState(currentState);
        }
    }

    // cutscene state Function
    export function cutscene3(): void {
        document.getElementById("canvas").style.display = "inline";
        // Declare new Game Container
        game = new createjs.Container();
        image = new createjs.Bitmap("");
        game.addChild(image);
        createHUD(stage);
        stage.addChild(game);
    }

    function updateHUD() {
    }

    function createHUD(currentStage) {
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
} 