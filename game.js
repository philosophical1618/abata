import Phaser from "phaser";
import WebFontFile from "./WebFontFile";

import chipPng from "./chip.png";


var chip;

new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: function() {
            this.load.addFile(new WebFontFile(this.load, 'Press Start 2P'))
            this.load.spritesheet('chip', chipPng, {frameWidth: 23, frameHeight: 24});
        },
        create: function() {
            const eat = this.add.text(200, 500, 'Eat', {
                fill: "#00f",
                fontFamily: '"Press Start 2p"',
                fontSize: '30px',
            })

            const sleep = this.add.text(450, 500, 'Sleep', {
                fill: "#00f",
                fontFamily: '"Press Start 2p"',
                fontSize: '30px',
            })

            eat.setOrigin(0,0);
            sleep.setOrigin(0,0);

            eat.on('pointerdown', function (event) { console.log('eat click')});
            sleep.on('pointerdown', function (event) { console.log('sleep click')});

            eat.setInteractive();
            sleep.setInteractive();

            this.camera = this.cameras.add(0,0,800,600)
            this.camera.setBackgroundColor(0xffffff);
            chip = this.add.sprite(400,300, "chip").setScale(8);

            this.anims.create({
                key: "blink",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers('chip', {frames: [0,1]}),
                repeat: -1,
                repeatDelay: Phaser.Math.Between(0,150),
            });

            chip.anims.play('blink');
            
        },
        update: function() {
        },
    },
    pixelArt: true,
    parent: 'abata',
})