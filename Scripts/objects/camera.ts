module objects {
    // Camera Class

    export class Camera extends createjs.Container {
        stage: createjs.Stage;
        game: createjs.Container;
        player: objects.Player;
        constructor(stage: createjs.Stage, game: createjs.Container, player: objects.Player) {
            super();
            this.stage = stage;
            this.game = game;
            this.player = player;

            this.addChild(this.player);
            this.game.addChild(this);
        }

        update() {
            this.x = -player.x + stage.canvas.width * 0.5;
            this.y = -player.y + stage.canvas.height * 0.5;
        }
    }
} 