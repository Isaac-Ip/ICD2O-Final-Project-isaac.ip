/* global Phaser */

// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This is the Level Scene

/**
 * This class is the Level Scene.
 */
class InstructionsScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'instructionsScene' })

    this.instructionsBackgroundImage = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * before preload() and create().
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')

    this.instructionsTextStyle = { font: '80px Courier New', fill: '#ff0000', align: 'center' }
    this.instructions = null
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload () {
    console.log('Instructions Scene')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create (data) {
    this.instructions = this.add.text(1920 / 2, 1080 / 2, 'This is Russian Roulette,\na game where two people take turns \npulling the trigger of a\ngun loaded with bullets.', this.instructionsTextStyle).setOrigin(0.5)
    this.instructions.setInteractive({ useHandCursor: true })
    this.instructions.on('pointerdown', () => {
      this.instructions.destroy()
      this.instructions = null
      this.instructions = this.add.text(1920 / 2, 1080 / 2, 'This game is similar.\nSince the game doesn\'t have\nrisks, it has abilities instead.\nThere are two offensive\nand two defensive abilities.', this.instructionsTextStyle).setOrigin(0.5)
      this.instructions.setInteractive({ useHandCursor: true })
      this.instructions.on('pointerdown', () => {
        this.instructions.destroy()
        this.instructions = null
        this.instructions = this.add.text(1920 / 2, 1080 / 2, 'The large button in the top\nleft corner is the \"cheat\" button.\nThis defensive ability lets you see\nif the chamber has a blank or not.\nIt has one use per game,\nso use it wisely.', this.instructionsTextStyle).setOrigin(0.5)
        this.instructions.setInteractive({ useHandCursor: true })
        this.instructions.on('pointerdown', () => {
          this.instructions.destroy()
          this.instructions = null
          this.instructions = this.add.text(1920 / 2, 1080 / 2, 'In the top right corner are three\nbuttons, all of which have a three\nturn cooldown. One of them has a shield\nicon. This defensive ability protects\nyou from any harm, and deactivates\nwhen the turn is over.', this.instructionsTextStyle).setOrigin(0.5)
          this.instructions.setInteractive({ useHandCursor: true })
          this.instructions.on('pointerdown', () => {
            this.instructions.destroy()
            this.instructions = null
            this.instructions = this.add.text(1920 / 2, 1080 / 2, 'The next button has a skull\nand crossbones. This offensive\nability deals double damage to your\nopponent if his revolver is loaded.\nOtherwise, it is useless.', this.instructionsTextStyle).setOrigin(0.5)
            this.instructions.setInteractive({ useHandCursor: true })
            this.instructions.on('pointerdown', () => {
              this.instructions.destroy()
              this.instructions = null
              this.instructions = this.add.text(1920 / 2, 1080 / 2, 'The last offensive ability has a\ngreen four leaf clover. This ability\ndoubles the chance for the opponent\nto take damage, and is great when\npaired with the double damage ability.', this.instructionsTextStyle).setOrigin(0.5)
              this.instructions.setInteractive({ useHandCursor: true })
              this.instructions.on('pointerdown', () => {
                this.instructions.destroy()
                this.instructions = null
                this.instructions = this.add.text(1920 / 2, 1080 / 2, 'Each ability only start being\nused in a specific difficulty,\nfrom easy, medium, hard and insane.', this.instructionsTextStyle).setOrigin(0.5)
                this.instructions.setInteractive({ useHandCursor: true })
                this.instructions.on('pointerdown', () => {
                  this.instructions.destroy()
                  this.instructions = null
                  this.instructions = this.add.text(1920 / 2, 1080 / 2, 'On the bottom half of the screen,\nthere are two characters.\nThe left character is you,\nand the other is your opponent.\nBoth have five lives.', this.instructionsTextStyle).setOrigin(0.5)
                  this.instructions.setInteractive({ useHandCursor: true })
                  this.instructions.on('pointerdown', () => {
                    this.instructions.destroy()
                    this.instructions = null
                    this.instructions = this.add.text(1920 / 2, 1080 / 2, 'There are two other buttons in\nthe bottom half of the screen. The\nbottom left button is the spin button.\nThis button spins the barrel\nfor a new chance of survival.', this.instructionsTextStyle).setOrigin(0.5)
                    this.instructions.setInteractive({ useHandCursor: true })
                    this.instructions.on('pointerdown', () => {
                      this.instructions.destroy()
                      this.instructions = null
                      this.instructions = this.add.text(1920 / 2, 1080 / 2, 'The bottom right corner\nlies the fire button. It causes the\ncharacters to pull the trigger and shoot.\nSince the game is turn-based, the chance\nfor you to win is slightly reduced.', this.instructionsTextStyle).setOrigin(0.5)
                      this.instructions.setInteractive({ useHandCursor: true })
                      this.instructions.on('pointerdown', () => {
                        this.instructions.destroy()
                        this.instructions = null
                        this.instructions = this.add.text(1920 / 2, 1080 / 2, 'All difficulties are possible\nwith the abilities. Without\nthem, it\'s almost impossible to win.', this.instructionsTextStyle).setOrigin(0.5)
                        this.instructions.setInteractive({ useHandCursor: true })
                        this.instructions.on('pointerdown', () => {
                          this.instructions.destroy()
                          this.instructions = null
                          this.instructions = this.add.text(1920 / 2, 1080 / 2, 'Best of luck.', this.instructionsTextStyle).setOrigin(0.5)
                          this.instructions.setInteractive({ useHandCursor: true })
                          this.instructions.on('pointerdown', () => {
                            this.instructions.destroy()
                            this.instructions = null
                            this.scene.start('menuScene')
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
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

export default InstructionsScene
