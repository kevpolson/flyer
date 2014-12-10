module states {
    var image: createjs.Bitmap;
    var currentDifficulty: number;
    var currentOption: number;
    export function startMenuUpdate() {
        //update all elements of the cutscene state
        menuInput.update();

        if (menuInput.hasKeyBeenUp(constants.SPACE) || menuInput.hasKeyBeenUp(constants.ENTER)) {
            console.log("space");
            if (constants.startOptions[currentOption] === "Start") {
                difficulty = constants.difficultyOptions[currentDifficulty];

                stage.removeChild(game);
                currentState = constants.CUTSCENE1;
                changeState(currentState);
                destroyHUD();
            }
        }
        else if (menuInput.hasKeyBeenUp(constants.RIGHT)) {
            console.log("right");
            if (currentOption === constants.startOptions.Difficulty) {
                currentDifficulty++;
                if (currentDifficulty > constants.difficultyOptions.Hard) {
                    currentDifficulty = constants.difficultyOptions.Hard;
                }
                console.log(currentDifficulty);
            }
        }
        else if (menuInput.hasKeyBeenUp(constants.LEFT)) {
            console.log("left");
            if (currentOption === constants.startOptions.Difficulty) {
                currentDifficulty--;
                if (currentDifficulty < constants.difficultyOptions.Easy) {
                    currentDifficulty = constants.difficultyOptions.Easy;
                }
            }
            console.log(currentDifficulty);
        }
        else if (menuInput.hasKeyBeenUp(constants.UP)) {
            console.log("up");
            currentOption--;
            if (currentOption < constants.startOptions.Difficulty) {
                currentOption = constants.startOptions.Difficulty;
            }
            console.log(currentOption);
        }
        else if (menuInput.hasKeyBeenUp(constants.DOWN)) {
            console.log("down");
            currentOption++;
            if (currentOption > constants.startOptions.Start) {
                currentOption = constants.startOptions.Start;
            }
            console.log(currentOption);
        }
        updateHUD();
    }

    // cutscene state Function
    export function startMenu(): void {
        document.getElementById("canvas").style.display = "inline";
        // Declare new Game Container
        currentOption = constants.startOptions.Difficulty;
        currentDifficulty = constants.difficultyOptions.Normal;
        menuInput = new managers.MenuInput();

        game = new createjs.Container();
        image = new createjs.Bitmap("");
        game.addChild(image);
        stage.addChild(game);

        createHUD(stage);
    }

    function updateHUD() {
        var start = document.getElementById("start");
        var difficultyLevel = document.getElementById("difficultyLevel");
        var diffRightArrow = document.getElementById("diffRightArrow");
        var diffLefttArrow = document.getElementById("diffLeftArrow");

        if (difficultyLevel != null && start != null) {
            if (currentOption === constants.startOptions.Start) {
                start.style.color = constants.COLOR_LIGHT_RED;
                difficultyLevel.style.color = constants.COLOR_CREAM;
                diffRightArrow.style.color = constants.COLOR_CREAM;
                diffLefttArrow.style.color = constants.COLOR_CREAM;
            }
            else {
                start.style.color = constants.COLOR_CREAM;
                difficultyLevel.style.color = constants.COLOR_LIGHT_RED;
                diffRightArrow.style.color = constants.COLOR_LIGHT_RED;
                diffLefttArrow.style.color = constants.COLOR_LIGHT_RED;
            }
            difficultyLevel.innerHTML = constants.difficultyOptions[currentDifficulty];
        }
    }

    function createHUD(currentStage) {
        var hud = document.createElement('div');
        var start = document.createElement('div');
        var title = document.createElement('div');
        var difficultyLevel = document.createElement('div');
        var diffRightArrow = document.createElement('div');
        var diffLefttArrow = document.createElement('div');

        hud.style.position = 'absolute';
        hud.id = "hud";
        hud.style.width = currentStage.canvas.width + "px";
        hud.style.height = currentStage.canvas.height + "px";
        hud.style.color = constants.COLOR_CREAM;
        hud.style.fontSize = "30px";
        hud.style.top = "10px";
        hud.style.left = "10px";

        title.id = "title";
        title.style.fontSize = "45px";
        title.style.width = "600px";
        title.style.height = "50px";
        title.style.position = 'absolute';
        title.style.top = (currentStage.canvas.height * 0.2) + "px";
        title.style.left = (currentStage.canvas.width * 0.5 - 210) + "px";
        title.innerHTML = "Kyoryu Island";

        diffLefttArrow.id = "diffLeftArrow";
        diffLefttArrow.style.width = "600px";
        diffLefttArrow.style.height = "50px";
        diffLefttArrow.style.position = 'absolute';
        diffLefttArrow.style.top = (currentStage.canvas.height * 0.4) + "px";
        diffLefttArrow.style.left = (currentStage.canvas.width * 0.5 - 240) + "px";
        diffLefttArrow.innerHTML = "<";

        difficultyLevel.id = "difficultyLevel";
        difficultyLevel.style.width = "600px";
        difficultyLevel.style.height = "50px";
        difficultyLevel.style.position = 'absolute';
        difficultyLevel.style.top = (currentStage.canvas.height * 0.4) + "px";
        difficultyLevel.style.left = (currentStage.canvas.width * 0.5 - 210) + "px";
        difficultyLevel.innerHTML = constants.difficultyOptions[currentDifficulty];

        diffRightArrow.id = "diffRightArrow";
        diffRightArrow.style.width = "600px";
        diffRightArrow.style.height = "50px";
        diffRightArrow.style.position = 'absolute';
        diffRightArrow.style.top = (currentStage.canvas.height * 0.4) + "px";
        diffRightArrow.style.left = (currentStage.canvas.width * 0.5 - 100) + "px";
        diffRightArrow.innerHTML = ">";

        start.id = "start";
        start.style.width = "600px";
        start.style.height = "50px";
        start.style.position = 'absolute';
        start.style.top = (currentStage.canvas.height * 0.5) + "px";
        start.style.left = (currentStage.canvas.width * 0.5 - 210) + "px";
        start.innerHTML = "Start";

        hud.appendChild(title);
        hud.appendChild(start);
        hud.appendChild(diffLefttArrow);
        hud.appendChild(difficultyLevel);
        hud.appendChild(diffRightArrow);

        document.body.appendChild(hud);
    }

    function destroyHUD() {
        document.body.removeChild(document.getElementById("hud"));
    }
} 