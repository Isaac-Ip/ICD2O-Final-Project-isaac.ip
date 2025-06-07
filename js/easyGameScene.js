/* global Phaser */

// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This is the Easy Difficulty Game Scene

/**
 * This class is the Easy Difficulty Game Scene.
 */
class EasyGameScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'easyGameScene' })

    this.player = null
    this.boss = null
    this.GameSceneBackgroundImage = null
    this.leftRevolver = null
    this.rightRevolver = null
    this.spinButton = null
    this.spinNumber = 0
    this.spinError = null
    this.fireButton = null
    this.turnText = null
    this.turnTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' };
    this.bossText1 = null
    this.checkCheat = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * before preload() and create().
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init (data) {
    this.cameras.main.setBackgroundColor('#5f6e7a')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload () {
    console.log('Easy Game Scene')

    // images
    this.load.image('gameSceneBackground', './assets/roulette-scene.png')
    this.load.image('boss', 'assets/boss.png')
    this.load.image('player', 'assets/player.png')
    this.load.image('leftRevolver', 'assets/revolverleft.png')
    this.load.image('rightRevolver', 'assets/revolverright.png')
    this.load.image('spinButton', 'assets/spin-button.png')
    this.load.image('fireButton', 'assets/fire-button.png')
    this.load.image('bossText1', 'assets/boss-text-1.png')
    this.load.image('checkCheat', 'assets/check-cheat.png')
    this.load.image('checkGood', 'assets/check-good.png')
    this.load.image('checkBad', 'assets/check-bad.png')
    
    // sound
    this.load.audio('spin', 'assets/revolver-spin.wav')
    this.load.audio('boom', 'assets/shot-fired.wav')
    this.load.audio('blank', 'assets/blank-fired.wav')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create (data) {
    this.background = this.add.sprite(0, 0, 'gameSceneBackground')
    this.background.x = 1920 / 2
    this.background.y = 1080 / 2

    this.turnText = this.add.text(30, 20, 'Player Turn', this.turnTextStyle)

    this.player = this.add.sprite(1920 / 8, 1080 - 200, 'player')
    this.boss = this.add.sprite(1920 / 8 * 7, 1080 - 300, 'boss')
    this.leftRevolver = this.add.sprite(1920 / 16 * 12, 1080 - 500, 'leftRevolver')
    this.rightRevolver = this.add.sprite(1920 / 24 * 5, 1080 - 450, 'rightRevolver')
    this.spinButton = this.add.sprite(1920 / 8, 1080 - 100, 'spinButton').setInteractive()
    this.spinButton.on('pointerdown', () => this.clickSpinButton())
    this.fireButton = this.add.sprite(1920 / 8 * 7, 1080 - 100, 'fireButton').setInteractive()
    this.fireButton.on('pointerdown', () => this.clickFireButton())
    

    this.playerDeadlyBullet = Math.floor(Math.random() * 6) + 1
    this.playerSelectedBullet = Math.floor(Math.random() * 6) + 1
    this.bossDeadlyBullet = Math.floor(Math.random() * 6) + 1
    this.bossSelectedBullet = Math.floor(Math.random() * 6) + 1
  }

  clickSpinButton() {
    this.playerSelectedBullet = Math.floor(Math.random() * 6) + 1
    this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
    this.sound.play("spin")
      this.spinNumber = this.spinNumber + 1;
      this.bossText1 = this.add.sprite(1920 / 2, 1080 - 600, 'bossText1')
  }

  async clickFireButton() {
    this.bossText1.destroy()
    if (this.spinNumber === 0) {
      this.spinError = this.add.text(1920 / 2, 1080 / 2, "Spin Before You Shoot!\nClick to continue.", this.turnTextStyle).setOrigin(0.5);
      this.spinError.setInteractive({ useHandCursor: true });
      this.spinError.on('pointerdown', () => this.scene.start('easyGameScene'));
    } else {
      if (this.playerDeadlyBullet === this.playerSelectedBullet) {
        this.sound.play('boom')
        this.scene.start('deathScene')
      } else {
        this.sound.play('blank')
        this.bossDeadlyBullet = Math.floor(Math.random() * 6) + 1
        this.bossSelectedBullet = Math.floor(Math.random() * 6) + 1
        this.spinNumber = 0
        this.turnText.destroy()
        this.turnText = this.add.text(30, 20, 'Boss Turn', this.turnTextStyle)
        if (this.bossDeadlyBullet === this.bossSelectedBullet) {
          this.sound.play('boom')
          this.scene.start('deathScene')
        } else {
          this.sound.play('blank')
          this.turnText.destroy()
          this.turnText = this.add.text(30, 20, 'Player Turn', this.turnTextStyle)
        }
      }
    }
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update (time, delta) {
    // pass
    } 
  }


export default EasyGameScene
