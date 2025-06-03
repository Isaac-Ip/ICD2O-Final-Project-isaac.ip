/* global Phaser */

// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This is the Menu Scene

/**
 * This class is the Level Scene.
 */
class LevelScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'levelScene' })

    this.LevelSceneBackgroundImage = null
    this.startButton = null
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
    console.log('Level Scene')
    this.load.image('levelSceneBackground', './assets/difficulty-scene.png')
    this.load.image('easyButton', './assets/easy-button.png')
    this.load.image('mediumButton', './assets/medium-button.png')
    this.load.image('hardButton', './assets/hard-button.png')
    this.load.image('insaneButton', './assets/insane-button.png')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create (data) {
    this.MenuSceneBackgroundImage = this.add.sprite(0, 0, 'levelSceneBackground')
    this.MenuSceneBackgroundImage.x = 1920 / 2
    this.MenuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, 'easyButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    
    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, 'mediumButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
   
    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, 'hardButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    
    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, 'insaneButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
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
    this.scene.start('gameScene')
  }
}

export default LevelScene
