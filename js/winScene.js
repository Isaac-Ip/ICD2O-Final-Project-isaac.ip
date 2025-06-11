/* global Phaser */

// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This is the Win Scene; when the player wins, this scene will be shown

/**
 * This class is the Win Scene.
 */
class WinScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: 'winScene' })

    this.gameOverTextStyle = { font: '80px Courier New', fill: '#ff0000', align: 'center' }

    this.resetNumber = 0
    this.quoteText = null
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
    console.log('Win Scene')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.resetNumber = Math.floor(Math.random() * 2) + 1
    if (this.resetNumber === 1) {
      this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'You finally won.', this.gameOverTextStyle).setOrigin(0.5)
      this.quoteText.setInteractive({ useHandCursor: true })
      this.quoteText.on('pointerdown', () => {
        this.quoteText.destroy()
        this.quoteText = null
        this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'The man is dead.', this.gameOverTextStyle).setOrigin(0.5)
        this.quoteText.setInteractive({ useHandCursor: true })
        this.quoteText.on('pointerdown', () => {
          this.quoteText.destroy()
          this.quoteText = null
          this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'But you don\'t feel too good.\nYou feel guilt.', this.gameOverTextStyle).setOrigin(0.5)
          this.quoteText.setInteractive({ useHandCursor: true })
          this.quoteText.on('pointerdown', () => {
            this.quoteText.destroy()
            this.quoteText = null
            this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'Thinking about what just\nhappened, you walk home.', this.gameOverTextStyle).setOrigin(0.5)
            this.quoteText.setInteractive({ useHandCursor: true })
            this.quoteText.on('pointerdown', () => {
              this.quoteText.destroy()
              this.quoteText = null
              this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'Somehow, that dead man,\nhe\'s just standing there.\nThe first thing he says:', this.gameOverTextStyle).setOrigin(0.5)
              this.quoteText.setInteractive({ useHandCursor: true })
              this.quoteText.on('pointerdown', () => {
                this.quoteText.destroy()
                this.quoteText = null
                this.quoteText = this.add.text(1920 / 2, 1080 / 2, '"Care to play again?"', this.gameOverTextStyle).setOrigin(0.5)
                this.quoteText.setInteractive({ useHandCursor: true })
                this.quoteText.on('pointerdown', () => this.scene.start('levelScene'))
              })
            })
          })
        })
      })
    } else if (this.resetNumber === 2) {
      this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'You left the bar,\nwith a smile on your face.', this.gameOverTextStyle).setOrigin(0.5)
      this.quoteText.setInteractive({ useHandCursor: true })
      this.quoteText.on('pointerdown', () => {
        this.quoteText.destroy()
        this.quoteText = null
        this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'I mean, you did\n just win a couple million.', this.gameOverTextStyle).setOrigin(0.5)
        this.quoteText.setInteractive({ useHandCursor: true })
        this.quoteText.on('pointerdown', () => {
          this.quoteText.destroy()
          this.quoteText = null
          this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'As a rich man, you think the\nbest way to earn money\nis to gamble it all away.', this.gameOverTextStyle).setOrigin(0.5)
          this.quoteText.setInteractive({ useHandCursor: true })
          this.quoteText.on('pointerdown', () => {
            this.quoteText.destroy()
            this.quoteText = null
            this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'Obviously, you become homeless\nand dirt broke, now with\nno money to your name.', this.gameOverTextStyle).setOrigin(0.5)
            this.quoteText.setInteractive({ useHandCursor: true })
            this.quoteText.on('pointerdown', () => {
              this.quoteText.destroy()
              this.quoteText = null
              this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'You decide to wander the\nstreets for days on end,\nto the point you forget\nwhat you are doing.', this.gameOverTextStyle).setOrigin(0.5)
              this.quoteText.setInteractive({ useHandCursor: true })
              this.quoteText.on('pointerdown', () => {
                this.quoteText.destroy()
                this.quoteText = null
                this.quoteText = this.add.text(1920 / 2, 1080 / 2, 'Before you know it\n you are standing in front\nof the same bar you never\nwanted to come back to.', this.gameOverTextStyle).setOrigin(0.5)
                this.quoteText.setInteractive({ useHandCursor: true })
                this.quoteText.on('pointerdown', () => this.scene.start('levelScene'))
              })
            })
          })
        })
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

export default WinScene
