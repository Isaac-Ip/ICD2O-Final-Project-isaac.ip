/* global Phaser */

// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This is the Level Scene

/**
 * This class is the Level Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'menuScene' })

    this.MenuSceneBackgroundImage = null
    this.startButton = null
    this.instuctionsButton = null
    this.recommend = null
    this.menuSceneText = null
    this.menuSceneTextStyle = {
      backgroundColor: '#ffffff',
      padding: { left: 20, right: 20, top: 10, bottom: 10 },
      font: '200px Monospace',
      fill: '#000000',
      align: 'center'
    }
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * before preload() and create().
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload () {
    console.log('Menu Scene')
    this.load.image('menuSceneBackground', './assets/introrevolvers-scene.png')
    this.load.image('startButton', './assets/start-button.png')
    this.load.image('instructionsButton', './assets/instructions.png')
    this.load.image('recommend', './assets/recommend.png')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create (data) {
    this.MenuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.MenuSceneBackgroundImage.x = 1920 / 2
    this.MenuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    this.startButton.on('pointerover', () => { this.recommend = this.add.sprite(1920 / 2, 1080 / 8 * 3, 'recommend') })
    this.startButton.on('pointerout', () => { this.recommend.destroy(); this.recommend = null })
    this.instuctionsButton = this.add.sprite(1920 / 2, 1080 / 2 + 230, 'instructionsButton')
    this.instuctionsButton.setInteractive({ useHandCursor: true })
    this.instuctionsButton.on('pointerdown', () => this.clickInstructionsButton())

    this.menuSceneText = this.add
      .text(1920 / 2, 1080 / 2 - 350, 'Russian Roulette', this.menuSceneTextStyle)
      .setOrigin(0.5)
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time The current time.
   * @param {number} delta The delta time in ms since the last frame.
   */
  update (time, delta) {
    // pass
  }

  clickButton () {
    this.scene.start('levelScene')
  }

  clickInstructionsButton () {
    this.scene.start('instructionsScene')
  }
}

export default MenuScene
