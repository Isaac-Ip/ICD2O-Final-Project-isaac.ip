/* global Phaser */

// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This is the Menu Scene

/**
 * This class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'menuScene' })

    this.MenuSceneBackgroundImage = null
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
    console.log('Menu Scene')
    this.load.image('menuSceneBackground', './assets/introrevolvers-scene.png')
    this.load.image('startButton', './assets/start-button.png')
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

export default MenuScene
