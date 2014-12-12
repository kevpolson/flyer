var states;
(function (states) {
    var image;
    var currentDifficulty;
    var currentOption;
    function startMenuUpdate() {
        //update all elements of the cutscene state
        menuInput.update();

        if (menuInput.hasKeyBeenUp(constants.SPACE) || menuInput.hasKeyBeenUp(constants.ENTER)) {
            //if (constants.startOptions[currentOption] === "Start") {
            managers.Assets.killSounds();
            difficulty = constants.difficultyOptions[currentDifficulty];
            score = 0;
            stage.removeChild(bgImage);
            stage.removeChild(game);
            currentState = constants.CUTSCENE1;
            changeState(currentState);
            destroyHUD();
            //}
        } else if (menuInput.hasKeyBeenUp(constants.RIGHT)) {
            if (currentOption === 0 /* Difficulty */) {
                currentDifficulty++;
                if (currentDifficulty > 3 /* Hard */) {
                    currentDifficulty = 3 /* Hard */;
                }
            }
        } else if (menuInput.hasKeyBeenUp(constants.LEFT)) {
            if (currentOption === 0 /* Difficulty */) {
                currentDifficulty--;
                if (currentDifficulty < 1 /* Easy */) {
                    currentDifficulty = 1 /* Easy */;
                }
            }
        }

        /*
        else if (menuInput.hasKeyBeenUp(constants.UP)) {
        currentOption--;
        if (currentOption < constants.startOptions.Difficulty) {
        currentOption = constants.startOptions.Difficulty;
        }
        }
        else if (menuInput.hasKeyBeenUp(constants.DOWN)) {
        currentOption++;
        if (currentOption > constants.startOptions.Start) {
        currentOption = constants.startOptions.Start;
        }
        }
        */
        updateHUD();
    }
    states.startMenuUpdate = startMenuUpdate;

    // cutscene state Function
    function startMenu() {
        document.getElementById("canvas").style.display = "inline";

        // Declare new Game Container
        currentOption = 0 /* Difficulty */;
        currentDifficulty = 2 /* Normal */;
        menuInput = new managers.MenuInput();
        game = new createjs.Container();
        image = new createjs.Bitmap("");
        game.addChild(image);
        stage.addChild(game);

        createHUD(stage);
    }
    states.startMenu = startMenu;

    //update the HUD
    function updateHUD() {
        var difficultyLevel = document.getElementById("difficultyLevel");
        var diffRightArrow = document.getElementById("diffRightArrow");
        var diffLefttArrow = document.getElementById("diffLeftArrow");

        if (difficultyLevel != null) {
            difficultyLevel.innerHTML = constants.difficultyOptions[currentDifficulty];
        }
    }

    //create the HUD
    var bgImage;
    function createHUD(currentStage) {
        bgImage = new createjs.Bitmap(managers.Assets.loader.getResult("island"));
        bgImage.x = 0;
        bgImage.y = -100;
        bgImage.scaleX = 0.85;
        bgImage.scaleY = 0.85;
        stage.addChild(bgImage);
        var hud = document.createElement('div');

        //var start = document.createElement('div');
        var title = document.createElement('div');
        var difficultyLevel = document.createElement('div');
        var diffRightArrow = document.createElement('div');
        var diffLefttArrow = document.createElement('div');
        var inputStatement = document.createElement('div');

        hud.style.position = 'absolute';
        hud.id = "hud";
        hud.style.color = constants.COLOR_CREAM;
        hud.style.width = currentStage.canvas.width + "px";
        hud.style.height = currentStage.canvas.height + "px";
        hud.style.fontSize = "30px";
        hud.style.top = "10px";
        hud.style.left = "10px";

        title.id = "title";
        title.style.color = constants.COLOR_LIGHT_RED;
        title.style.fontSize = "45px";
        title.style.width = "600px";
        title.style.height = "50px";
        title.style.position = 'absolute';
        title.style.top = (currentStage.canvas.height * 0.2) + "px";
        title.style.left = (currentStage.canvas.width * 0.5 - 160) + "px";
        title.innerHTML = "Kyoryu Island";

        diffLefttArrow.id = "diffLeftArrow";
        diffLefttArrow.style.width = "600px";
        diffLefttArrow.style.height = "50px";
        diffLefttArrow.style.position = 'absolute';
        diffLefttArrow.style.top = (currentStage.canvas.height * 0.6) + "px";
        diffLefttArrow.style.left = (currentStage.canvas.width * 0.5 - 105) + "px"; //-30
        diffLefttArrow.innerHTML = "<";

        difficultyLevel.id = "difficultyLevel";
        difficultyLevel.align = "center";
        difficultyLevel.style.width = "100px";
        difficultyLevel.style.height = "50px";
        difficultyLevel.style.position = 'absolute';
        difficultyLevel.style.top = (currentStage.canvas.height * 0.6) + "px";
        difficultyLevel.style.left = (currentStage.canvas.width * 0.5 - 75) + "px"; //210
        difficultyLevel.innerHTML = constants.difficultyOptions[currentDifficulty];

        diffRightArrow.id = "diffRightArrow";
        diffRightArrow.style.width = "600px";
        diffRightArrow.style.height = "50px";
        diffRightArrow.style.position = 'absolute';
        diffRightArrow.style.top = (currentStage.canvas.height * 0.6) + "px";
        diffRightArrow.style.left = (currentStage.canvas.width * 0.5 + 35) + "px"; //+110
        diffRightArrow.innerHTML = ">";

        /*
        start.id = "start";
        start.style.width = "600px";
        start.style.height = "50px";
        start.style.position = 'absolute';
        start.style.top = (currentStage.canvas.height * 0.5) + "px";
        start.style.left = (currentStage.canvas.width * 0.5 - 210) + "px";
        start.innerHTML = "Start";
        */
        inputStatement.id = "inputStatement";
        inputStatement.style.width = "600px";
        inputStatement.style.height = "50px";
        inputStatement.style.position = 'absolute';
        inputStatement.style.top = (currentStage.canvas.height * 0.8) + "px";
        inputStatement.style.left = (currentStage.canvas.width * 0.5 - 210) + "px";
        inputStatement.innerHTML = "Press [SPACE] to Continue";

        hud.appendChild(inputStatement);

        hud.appendChild(title);

        //hud.appendChild(start);
        hud.appendChild(diffLefttArrow);
        hud.appendChild(difficultyLevel);
        hud.appendChild(diffRightArrow);

        document.body.appendChild(hud);
    }

    //destroy the HUD
    function destroyHUD() {
        document.body.removeChild(document.getElementById("hud"));
    }
})(states || (states = {}));
//# sourceMappingURL=startmenu.js.map
