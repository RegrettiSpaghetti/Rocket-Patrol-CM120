// Spaceship prefab! Hells Yeah
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, frame, pointValue) {
        super(scene, x, y, frame, pointValue);

        // Manually add our object to the scene
        scene.add.existing(this);

        //store that parameter
        this.points = pointValue;
    }

    update() {
        //move spaceship left
        this.x -= 3;

        //wraparound on Left edge
        if (this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    reset() {
        this.x = game.config.width;
    }
}