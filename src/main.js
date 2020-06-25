//create game configuration obj
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480, 
    scene: [Play, Menu]
}

//create main game object (Octopus head)
let game = new Phaser.Game(config);

//reserve some keyboard bindings
let keyF, keyLEFT, keyRIGHT;
