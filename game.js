import Phaser from "phaser";
import chipPng from "./chip.png";

var chip;

new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: function() {
            this.load.spritesheet('chip', chipPng, {frameWidth: 24});
        },
        create: function() {
            this.camera = this.cameras.add(0,0,800,600)
            this.camera.setBackgroundColor(0xffffff);
            chip = this.add.sprite(400,300, "chip").setScale(8);
            this.anims.create({
                key: "blink",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers('chip', {frames: [0,1]}),
                repeat: -1,
                repeatDelay: Phaser.Math.Between(0,150),
            })
            chip.anims.play('blink');
            
        },
        update: function() {
        },
    },
    pixelArt: true,
    parent: 'abata',
})