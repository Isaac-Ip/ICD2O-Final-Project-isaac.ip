/* global Phaser */

// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This is the Death Scene; when the player dies, this scene will be shown

/**
 * This class is the Death Scene.
 */
class DeathScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: 'deathScene' })

    this.gameOverTextStyle = { font: '80px Courier New', fill: '#ff0000', align: 'center' }

    this.quoteNumber = 0
    this.quoteText = null
    this.deathMessage = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * before preload() and create().
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log('Death Scene')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.quoteNumber = Math.floor(Math.random() * 6) + 1
    if (this.quoteNumber === 1) {
      this.quoteText = this.add.text(1920 / 2, 1080 / 2, '"Everything you want is\non the other side of fear."\n\nJack Canfield', this.gameOverTextStyle).setOrigin(0.5)
      this.quoteText.setInteractive({ useHandCursor: true })
      this.quoteText.on('pointerdown', () => {
        this.quoteText.destroy()
        this.quoteText = null
        this.deathMessage = this.add.text(1920 / 2, 1080 / 2, 'Death is not permanent.', this.gameOverTextStyle).setOrigin(0.5)
        this.deathMessage.setInteractive({ useHandCursor: true })
        this.deathMessage.on('pointerdown', () => this.scene.start('levelScene'))
      })
    } else if (this.quoteNumber === 2) {
      this.quoteText = this.add.text(1920 / 2, 1080 / 2, '"Pain is temporary.\nQuitting lasts forever.\”\n\nLance Armstrong', this.gameOverTextStyle).setOrigin(0.5)
      this.quoteText.setInteractive({ useHandCursor: true })
      this.quoteText.on('pointerdown', () => {
        this.quoteText.destroy()
        this.quoteText = null
        this.deathMessage = this.add.text(1920 / 2, 1080 / 2, 'Death is not permanent.', this.gameOverTextStyle).setOrigin(0.5)
        this.deathMessage.setInteractive({ useHandCursor: true })
        this.deathMessage.on('pointerdown', () => this.scene.start('levelScene'))
      })
    } else if (this.quoteNumber === 3) {
      this.quoteText = this.add.text(1920 / 2, 1080 / 2, "\"What is the point of being\nalive if you don't at least\ntry to do something remarkable?\"\n\nJohn Green", this.gameOverTextStyle).setOrigin(0.5)
      this.quoteText.setInteractive({ useHandCursor: true })
      this.quoteText.on('pointerdown', () => {
        this.quoteText.destroy()
        this.quoteText = null
        this.deathMessage = this.add.text(1920 / 2, 1080 / 2, 'Death is not permanent.', this.gameOverTextStyle).setOrigin(0.5)
        this.deathMessage.setInteractive({ useHandCursor: true })
        this.deathMessage.on('pointerdown', () => this.scene.start('levelScene'))
      })
    } else if (this.quoteNumber === 4) {
      this.quoteText = this.add.text(1920 / 2, 1080 / 2, '"Success is not final,\nfailure is not fatal:\nit is the courage to\ncontinue that counts."\n\nWinston Churchill', this.gameOverTextStyle).setOrigin(0.5)
      this.quoteText.setInteractive({ useHandCursor: true })
      this.quoteText.on('pointerdown', () => {
        this.quoteText.destroy()
        this.quoteText = null
        this.deathMessage = this.add.text(1920 / 2, 1080 / 2, 'Death is not permanent.', this.gameOverTextStyle).setOrigin(0.5)
        this.deathMessage.setInteractive({ useHandCursor: true })
        this.deathMessage.on('pointerdown', () => this.scene.start('levelScene'))
      })
    } else if (this.quoteNumber === 5) {
      this.quoteText = this.add.text(1920 / 2, 1080 / 2, "\"I can accept failure.\nEveryone fails at something.\nBut I can't accept not trying.\"\n\nMichael Jordan", this.gameOverTextStyle).setOrigin(0.5)
      this.quoteText.setInteractive({ useHandCursor: true })
      this.quoteText.on('pointerdown', () => {
        this.quoteText.destroy()
        this.quoteText = null
        this.deathMessage = this.add.text(1920 / 2, 1080 / 2, 'Death is not permanent.', this.gameOverTextStyle).setOrigin(0.5)
        this.deathMessage.setInteractive({ useHandCursor: true })
        this.deathMessage.on('pointerdown', () => this.scene.start('levelScene'))
      })
    } else {
      this.quoteText = this.add.text(1920 / 2, 1080 / 2, '"The greatest mistake you can\nmake in life is to be continually\nfearing you will make one."\n\nElbert Hubbard', this.gameOverTextStyle).setOrigin(0.5)
      this.quoteText.setInteractive({ useHandCursor: true })
      this.quoteText.on('pointerdown', () => {
        this.quoteText.destroy()
        this.quoteText = null
        this.deathMessage = this.add.text(1920 / 2, 1080 / 2, 'Death is not permanent.', this.gameOverTextStyle).setOrigin(0.5)
        this.deathMessage.setInteractive({ useHandCursor: true })
        this.deathMessage.on('pointerdown', () => this.scene.start('levelScene'))
      })
    }
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    // pass
  }
}

export default DeathScene
