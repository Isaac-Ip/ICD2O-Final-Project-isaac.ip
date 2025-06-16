/* global Phaser */

// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This is the Hard Difficulty Game Scene

/**
 * This class is the Hard Difficulty Game Scene.
 */
class HardGameScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'hardGameScene' })

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
    this.turnTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }
    this.checkCheat = null
    this.checkGood = null
    this.checkBad = null
    this.playerHitpoints = 5
    this.bossHitpoints = 5
    this.playerHitpointsText = null
    this.bossHitpointsText = null
    this.bloodstain = null
    this.shield = null
    this.shieldFade = null
    this.shieldPulse1 = null
    this.shieldPulse2 = null
    this.shieldPulse3 = null
    this.shieldUsed = false
    this.shieldColor = null
    this.protect = null
    this.death = null
    this.deathFade = null
    this.deathPulse1 = null
    this.deathPulse2 = null
    this.deathPulse3 = null
    this.deathUsed = false
    this.deathColor = null
    this.cooldown3 = null
    this.cooldown2 = null
    this.cooldown1 = null
    this.shieldCooldown = 0
    this.deathCooldown = 0
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
    console.log('Hard Game Scene')

    // images
    this.load.image('gameSceneBackground', './assets/roulette-scene.png')
    this.load.image('boss', 'assets/boss.png')
    this.load.image('player', 'assets/player.png')
    this.load.image('leftRevolver', 'assets/revolverleft.png')
    this.load.image('rightRevolver', 'assets/revolverright.png')
    this.load.image('spinButton', 'assets/spin-button.png')
    this.load.image('fireButton', 'assets/fire-button.png')
    this.load.image('checkCheat', 'assets/check-cheat.png')
    this.load.image('checkGood', 'assets/check-good.png')
    this.load.image('checkBad', 'assets/check-bad.png')
    this.load.image('bloodstain', 'assets/bloodstain.png')
    this.load.image('shield', 'assets/shield.png')
    this.load.image('shieldFade', 'assets/shield-fade.png')
    this.load.image('shieldColor', 'assets/shield-color.png')
    this.load.image('shieldPulse1', 'assets/shield-pulse-1.png')
    this.load.image('shieldPulse2', 'assets/shield-pulse-2.png')
    this.load.image('shieldPulse3', 'assets/shield-pulse-3.png')
    this.load.image('protect', 'assets/protect.png')
    this.load.image('death', 'assets/death.png')
    this.load.image('deathFade', 'assets/death-fade.png')
    this.load.image('deathColor', 'assets/death-color.png')
    this.load.image('deathPulse1', 'assets/death-pulse-1.png')
    this.load.image('deathPulse2', 'assets/death-pulse-2.png')
    this.load.image('deathPulse3', 'assets/death-pulse-3.png')
    this.load.image('cooldown1', 'assets/cooldown1.png')
    this.load.image('cooldown2', 'assets/cooldown2.png')
    this.load.image('cooldown3', 'assets/cooldown3.png')

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

    this.turnText = this.add.text(800, 1000, 'Player Turn', this.turnTextStyle)
    this.playerHitpointsText = this.add.text(65, 350, `Player HP: ${this.playerHitpoints}`, this.turnTextStyle)
    this.bossHitpointsText = this.add.text(1520, 350, `Boss HP: ${this.bossHitpoints}`, this.turnTextStyle)

    this.player = this.add.sprite(1920 / 8, 1080 - 200, 'player')
    this.boss = this.add.sprite(1920 / 8 * 7, 1080 - 300, 'boss')
    this.leftRevolver = this.add.sprite(1920 / 16 * 12, 1080 - 500, 'leftRevolver')
    this.rightRevolver = this.add.sprite(1920 / 24 * 5, 1080 - 450, 'rightRevolver')
    this.spinButton = this.add.sprite(1920 / 8, 1080 - 100, 'spinButton').setInteractive()
    this.spinButton.on('pointerdown', () => this.clickSpinButton())
    this.fireButton = this.add.sprite(1920 / 8 * 7, 1080 - 100, 'fireButton').setInteractive()
    this.fireButton.on('pointerdown', () => this.clickFireButton())
    this.checkCheat = this.add.sprite(1920 - 1750, 1080 - 930, 'checkCheat').setInteractive()
    this.checkCheat.on('pointerdown', () => this.clickCheatButton())
    this.shield = this.add.sprite(1920 - 180, 1080 - 930, 'shield').setInteractive()
    this.shield.on('pointerdown', () => this.clickShieldButton())
    this.death = this.add.sprite(1920 - 430, 1080 - 930, 'death').setInteractive()
    this.death.on('pointerdown', () => this.clickDeathButton())

    this.playerDeadlyBullet = Math.floor(Math.random() * 4) + 1
    this.playerSelectedBullet = Math.floor(Math.random() * 4) + 1
    this.bossDeadlyBullet = Math.floor(Math.random() * 6) + 1
    this.bossSelectedBullet = Math.floor(Math.random() * 6) + 1
  }

  clickDeathButton () {
    this.deathUsed = true
    this.death.destroy()
    this.death = null
    this.deathFade = this.add.sprite(1920 - 430, 1080 - 930, 'deathFade').setInteractive()
    setTimeout(() => { this.deathFade.destroy() }, 100)
    setTimeout(() => { this.deathFade = null }, 100)
    setTimeout(() => { this.deathPulse1 = this.add.sprite(1920 - 430, 1080 - 930, 'deathPulse1').setInteractive() }, 100)
    setTimeout(() => { this.deathPulse1 = this.deathPulse1.destroy() }, 200)
    setTimeout(() => { this.deathPulse1 = this.deathPulse1 = null }, 200)
    setTimeout(() => { this.deathPulse2 = this.add.sprite(1920 - 430, 1080 - 930, 'deathPulse2').setInteractive() }, 200)
    setTimeout(() => { this.deathPulse2 = this.deathPulse2.destroy() }, 300)
    setTimeout(() => { this.deathPulse2 = this.deathPulse2 = null }, 300)
    setTimeout(() => { this.deathPulse3 = this.add.sprite(1920 - 430, 1080 - 930, 'deathPulse3').setInteractive() }, 300)
    setTimeout(() => { this.deathPulse3 = this.deathPulse3.destroy() }, 400)
    setTimeout(() => { this.deathPulse3 = this.deathPulse3 = null }, 400)
    setTimeout(() => { this.deathColor = this.add.sprite(1920 - 430, 1080 - 930, 'deathColor').setInteractive() }, 400)
  }

  clickShieldButton () {
    this.shieldUsed = true
    this.shield.destroy()
    this.shield = null
    this.shieldFade = this.add.sprite(1920 - 180, 1080 - 930, 'shieldFade').setInteractive()
    setTimeout(() => { this.shieldFade.destroy() }, 100)
    setTimeout(() => { this.shieldFade = null }, 100)
    setTimeout(() => { this.shieldPulse1 = this.add.sprite(1920 - 180, 1080 - 930, 'shieldPulse1').setInteractive() }, 100)
    setTimeout(() => { this.shieldPulse1 = this.shieldPulse1.destroy() }, 200)
    setTimeout(() => { this.shieldPulse1 = this.shieldPulse1 = null }, 200)
    setTimeout(() => { this.shieldPulse2 = this.add.sprite(1920 - 180, 1080 - 930, 'shieldPulse2').setInteractive() }, 200)
    setTimeout(() => { this.shieldPulse2 = this.shieldPulse2.destroy() }, 300)
    setTimeout(() => { this.shieldPulse2 = this.shieldPulse2 = null }, 300)
    setTimeout(() => { this.shieldPulse3 = this.add.sprite(1920 - 180, 1080 - 930, 'shieldPulse3').setInteractive() }, 300)
    setTimeout(() => { this.shieldPulse3 = this.shieldPulse3.destroy() }, 400)
    setTimeout(() => { this.shieldPulse3 = this.shieldPulse3 = null }, 400)
    setTimeout(() => { this.shieldColor = this.add.sprite(1920 - 180, 1080 - 930, 'shieldColor').setInteractive() }, 400)
  }

  clickCheatButton () {
    if (this.spinNumber === 0) {
      this.spinNumber = 0
    } else {
      if (this.playerDeadlyBullet === this.playerSelectedBullet) {
        this.checkCheat.destroy()
        this.checkCheat = null
        this.checkBad = this.add.sprite(1920 - 1750, 1080 - 930, 'checkBad').setInteractive()
      } else {
        this.checkCheat.destroy()
        this.checkCheat = null
        this.checkGood = this.add.sprite(1920 - 1750, 1080 - 930, 'checkGood').setInteractive()
      }
    }
  }

  clickSpinButton () {
    this.playerSelectedBullet = Math.floor(Math.random() * 4) + 1
    this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this })
    this.sound.play('spin')
    this.tweens.add({
      targets: this.rightRevolver,
      angle: 360,
      duration: 1000,
      ease: 'Cubic.easeOut',
      onComplete: () => {
        this.rightRevolver.angle = 0
      }
    })
    this.tweens.add({
      targets: this.leftRevolver,
      angle: -360,
      duration: 1000,
      ease: 'Cubic.easeOut',
      onComplete: () => {
        this.leftRevolver.angle = 0
      }
    })
    this.spinNumber = this.spinNumber + 1
  }

  clickFireButton () {
    if (this.bossText1) {
      this.bossText1.destroy()
      this.bossText1 = null
    }
    if (this.checkBad) {
      this.checkBad.destroy()
      this.checkBad = null
    }
    if (this.checkGood) {
      this.checkGood.destroy()
      this.checkGood = null
    }
    if (this.spinNumber === 0) {
      this.spinError = this.add.text(1920 / 2, 1080 / 2, 'Spin Before You Shoot!\nClick to continue.', this.turnTextStyle).setOrigin(0.5)
      this.spinError.setInteractive({ useHandCursor: true })
      this.spinError.on('pointerdown', () => this.spinError.destroy())
    } else {
      this.tweens.add({
        targets: this.rightRevolver,
        angle: 30,
        duration: 150,
        yoyo: true,
        ease: 'Cubic.easeOut',
        onComplete: () => {
          this.rightRevolver.angle = 0
        }
      })
      if (this.shieldUsed === true) {
        this.spinNumber = 0
        if (this.shieldCooldown === 0) {
          this.shieldColor.destroy()
          this.protect = this.add.sprite(1920 / 2, 1080 / 2, 'protect')
          this.protect.setAlpha(0.5)
          setTimeout(() => this.protect.setAlpha(0.45), 100)
          setTimeout(() => this.protect.setAlpha(0.4), 200)
          setTimeout(() => this.protect.setAlpha(0.35), 300)
          setTimeout(() => this.protect.setAlpha(0.3), 400)
          setTimeout(() => this.protect.setAlpha(0.25), 500)
          setTimeout(() => this.protect.setAlpha(0.2), 600)
          setTimeout(() => this.protect.setAlpha(0.15), 700)
          setTimeout(() => this.protect.setAlpha(0.1), 800)
          setTimeout(() => this.protect.setAlpha(0.05), 900)
          setTimeout(() => this.protect.destroy(), 1000)
          setTimeout(() => (this.protect = null), 1000)
          this.shieldCooldown = 3
          this.cooldown3 = this.add.sprite(1920 - 180, 1080 - 930, 'cooldown3')
        } else if (this.shieldCooldown === 3) {
          this.cooldown3.destroy()
          this.shieldCooldown = 2
          this.cooldown2 = this.add.sprite(1920 - 180, 1080 - 930, 'cooldown2')
        } else if (this.shieldCooldown === 2) {
          this.cooldown2.destroy()
          this.shieldCooldown = 1
          this.cooldown1 = this.add.sprite(1920 - 180, 1080 - 930, 'cooldown1')
        } else if (this.shieldCooldown === 1) {
          this.cooldown1.destroy()
          this.shieldCooldown = 0
          this.shield = this.add.sprite(1920 - 180, 1080 - 930, 'shield').setInteractive()
          this.shield.on('pointerdown', () => this.clickShieldButton())
          this.shieldUsed = false
        }
      }
      if (this.playerDeadlyBullet === this.playerSelectedBullet) {
        if (this.shieldUsed === true && this.shieldCooldown === 3) {
          this.shieldCooldown = 3
        } else {
          if (this.playerHitpoints > 0) {
            this.spinNumber = 0
            this.bloodstain = this.add.sprite(1920 / 2, 1080 / 2, 'bloodstain')
            this.bloodstain.setAlpha(0.5)
            setTimeout(() => this.bloodstain.setAlpha(0.45), 100)
            setTimeout(() => this.bloodstain.setAlpha(0.4), 200)
            setTimeout(() => this.bloodstain.setAlpha(0.35), 300)
            setTimeout(() => this.bloodstain.setAlpha(0.3), 400)
            setTimeout(() => this.bloodstain.setAlpha(0.25), 500)
            setTimeout(() => this.bloodstain.setAlpha(0.2), 600)
            setTimeout(() => this.bloodstain.setAlpha(0.15), 700)
            setTimeout(() => this.bloodstain.setAlpha(0.1), 800)
            setTimeout(() => this.bloodstain.setAlpha(0.05), 900)
            setTimeout(() => this.bloodstain.destroy(), 1000)
            setTimeout(() => (this.bloodstain = null), 1000)
            this.playerHitpoints -= 1
            this.playerHitpointsText.destroy()
            this.playerHitpointsText = this.add.text(65, 350, `Player HP: ${this.playerHitpoints}`, this.turnTextStyle)
            this.sound.play('boom')
          }
          if (this.playerHitpoints === 0) {
            this.playerHitpoints = 5
            this.bossHitpoints = 5
            this.scene.start('deathScene')
          }
        }
      } else {
        this.sound.play('blank')
        this.spinNumber = 0
      }
      this.bossSelectedBullet = Math.floor(Math.random() * 6) + 1
      this.turnText.destroy()
      this.turnText = null
      this.turnText = this.add.text(800, 1000, 'Boss Turn', this.turnTextStyle)
      setTimeout(() => {
        this.tweens.add({
          targets: this.leftRevolver,
          angle: -30,
          duration: 150,
          yoyo: true,
          ease: 'Cubic.easeOut',
          onComplete: () => {
            this.leftRevolver.angle = 0
          }
        })
      }, 200)
      if (this.bossDeadlyBullet === this.bossSelectedBullet) {
        if (this.bossHitpoints > 0) {
          if (this.deathUsed === true && this.deathCooldown === 0) {
            setTimeout(() => {
              this.bossHitpoints -= 1
            }, 200)
            this.deathCooldown = 3
            this.deathColor.destroy()
            this.cooldown3 = this.add.sprite(1920 - 430, 1080 - 930, 'cooldown3')
          } else if (this.deathCooldown === 3) {
            this.cooldown3.destroy()
            this.deathCooldown = 2
            this.cooldown2 = this.add.sprite(1920 - 430, 1080 - 930, 'cooldown2')
          } else if (this.deathCooldown === 2) {
            this.cooldown2.destroy()
            this.deathCooldown = 1
            this.cooldown1 = this.add.sprite(1920 - 430, 1080 - 930, 'cooldown1')
          } else if (this.deathCooldown === 1) {
            this.cooldown1.destroy()
            this.deathCooldown = 0
            this.death = this.add.sprite(1920 - 430, 1080 - 930, 'death').setInteractive()
            this.death.on('pointerdown', () => this.clickDeathButton())
            this.deathUsed = false
          }
          setTimeout(() => {
            this.bossHitpoints -= 1
          }, 200)
          setTimeout(() => {
            this.bossHitpointsText.destroy()
            this.bossHitpointsText = null
            this.bossHitpointsText = this.add.text(1520, 350, `Boss HP: ${this.bossHitpoints}`, this.turnTextStyle)
            this.sound.play('boom')
            if (this.bossHitpoints === 0) {
              this.playerHitpoints = 5
              this.bossHitpoints = 5
              this.scene.start('winScene')
            }
          }, 200)
        }
      } else {
        if (this.deathUsed === true && this.deathCooldown === 0) {
          this.deathCooldown = 3
          this.deathColor.destroy()
          this.cooldown3 = this.add.sprite(1920 - 430, 1080 - 930, 'cooldown3')
        } else if (this.deathCooldown === 3) {
          this.cooldown3.destroy()
          this.deathCooldown = 2
          this.cooldown2 = this.add.sprite(1920 - 430, 1080 - 930, 'cooldown2')
        } else if (this.deathCooldown === 2) {
          this.cooldown2.destroy()
          this.deathCooldown = 1
          this.cooldown1 = this.add.sprite(1920 - 430, 1080 - 930, 'cooldown1')
        } else if (this.deathCooldown === 1) {
          this.cooldown1.destroy()
          this.deathCooldown = 0
          this.death = this.add.sprite(1920 - 430, 1080 - 930, 'death').setInteractive()
          this.death.on('pointerdown', () => this.clickDeathButton())
          this.deathUsed = false
        }
        setTimeout(() => {
          this.sound.play('blank')
          setTimeout(() => {
            if (this.turnText) {
              this.turnText.destroy()
              this.turnText = null
            }
            this.turnText = this.add.text(800, 1000, 'Player Turn', this.turnTextStyle)
          }, 200)
        }, 200)
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

export default HardGameScene
