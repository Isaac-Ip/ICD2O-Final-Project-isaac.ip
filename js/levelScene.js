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
    this.easyButton = null
    this.mediumButton = null
    this.hardButton = null
    this.insaneButton = null
    this.easyDesc = null
    this.mediumDesc = null
    this.hardDesc = null
    this.insaneDesc = null
    this.easyBar = null
    this.mediumBar = null
    this.hardBar = null
    this.insaneBar = null
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
    this.load.image('easyDesc', './assets/easy-desc.png')
    this.load.image('mediumDesc', './assets/medium-desc.png')
    this.load.image('hardDesc', './assets/hard-desc.png')
    this.load.image('insaneDesc', './assets/insane-desc.png')
    this.load.image('easyBar', './assets/easy-bar.png')
    this.load.image('mediumBar', './assets/medium-bar.png')
    this.load.image('hardBar', './assets/hard-bar.png')
    this.load.image('insaneBar', './assets/insane-bar.png')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create (data) {
    this.LevelSceneBackgroundImage = this.add.sprite(0, 0, 'levelSceneBackground')
    this.LevelSceneBackgroundImage.x = 1920 / 2
    this.LevelSceneBackgroundImage.y = 1080 / 2

    this.easyButton = this.add.sprite(1920 / 2, 1080 / 8 * 3, 'easyButton')
    this.easyButton.setInteractive({ useHandCursor: true })
    this.easyButton.on('pointerdown', () => this.clickEasyButton())
    this.easyButton.on('pointerover', () => { this.easyDesc = this.add.sprite(1920 / 4 * 3, 1080 / 8 * 3, 'easyDesc') })
    this.easyButton.on('pointerout', () => { this.easyDesc.destroy(); this.easyDesc = null })
    this.easyButton.on('pointerover', () => { this.easyBar = this.add.sprite(1920 / 4, 1080 / 8 * 3, 'easyBar') })
    this.easyButton.on('pointerout', () => { this.easyBar.destroy(); this.easyBar = null })

    this.mediumButton = this.add.sprite(1920 / 2, 1080 / 8 * 4, 'mediumButton')
    this.mediumButton.setInteractive({ useHandCursor: true })
    this.mediumButton.on('pointerdown', () => this.clickMediumButton())
    this.mediumButton.on('pointerover', () => { this.mediumDesc = this.add.sprite(1920 / 4 * 3, 1080 / 8 * 4, 'mediumDesc') })
    this.mediumButton.on('pointerout', () => { this.mediumDesc.destroy(); this.mediumDesc = null })
    this.mediumButton.on('pointerover', () => { this.mediumBar = this.add.sprite(1920 / 4, 1080 / 8 * 4, 'mediumBar') })
    this.mediumButton.on('pointerout', () => { this.mediumBar.destroy(); this.mediumBar = null })

    this.hardButton = this.add.sprite(1920 / 2, 1080 / 8 * 5, 'hardButton')
    this.hardButton.setInteractive({ useHandCursor: true })
    this.hardButton.on('pointerdown', () => this.clickHardButton())
    this.hardButton.on('pointerover', () => { this.hardDesc = this.add.sprite(1920 / 4 * 3, 1080 / 8 * 5, 'hardDesc') })
    this.hardButton.on('pointerout', () => { this.hardDesc.destroy(); this.hardDesc = null })
    this.hardButton.on('pointerover', () => { this.hardBar = this.add.sprite(1920 / 4, 1080 / 8 * 5, 'hardBar') })
    this.hardButton.on('pointerout', () => { this.hardBar.destroy(); this.hardBar = null })

    this.insaneButton = this.add.sprite(1920 / 2, 1080 / 8 * 6, 'insaneButton')
    this.insaneButton.setInteractive({ useHandCursor: true })
    this.insaneButton.on('pointerdown', () => this.clickInsaneButton())
    this.insaneButton.on('pointerover', () => { this.insaneDesc = this.add.sprite(1920 / 4 * 3, 1080 / 8 * 6, 'insaneDesc') })
    this.insaneButton.on('pointerout', () => { this.insaneDesc.destroy(); this.insaneDesc = null })
    this.insaneButton.on('pointerover', () => { this.insaneBar = this.add.sprite(1920 / 4, 1080 / 8 * 6, 'insaneBar') })
    this.insaneButton.on('pointerout', () => { this.insaneBar.destroy(); this.insaneBar = null })
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

  clickEasyButton () {
    this.scene.start('easyGameScene')
  }

  clickMediumButton () {
    this.scene.start('easyGameScene')
  }

  clickHardButton () {
    this.scene.start('easyGameScene')
  }

  clickInsaneButton () {
    this.scene.start('easyGameScene')
  }
}

export default LevelScene
