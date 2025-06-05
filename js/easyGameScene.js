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
    this.fireButton = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * before preload() and create().
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init (data) {
    this.cameras.main.setBackgroundColor('#0x5f6e7a')
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

    this.player = this.physics.add.sprite(1920 / 8, 1080 - 200, 'player')
    this.boss = this.physics.add.sprite(1920 / 8 * 7, 1080 - 300, 'boss')
    this.leftRevolver = this.physics.add.sprite(1920 / 8, 1080 - 600, 'leftRevolver')
    this.rightRevolver = this.physics.add.sprite(1920 / 8 * 7, 1080 - 600, 'RightRevolver')
    this.spinButton = this.physics.add.sprite(1920 / 8, 1080 - 100, 'spinButton')
    this.spinButton.on('pointerdown', () => this.clickSpinButton())
    this.fireButton = this.physics.add.sprite(1920 / 8 * 7, 1080 - 100, 'fireButton')
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update (time, delta) {
    const playerDeadlyBullet = Math.floor(Math.random() * 6) + 1
    let playerSelectedBullet = Math.floor(Math.random() * 6) + 1
    clickSpinButton () {
  
  }
  }
}

export default EasyGameScene
