//Creates a menu scene
//Use a constructor of the parent scene to create the curr obj.
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");

        // debug: move to the next scene
        this.scene.start("playScene");
    }
}