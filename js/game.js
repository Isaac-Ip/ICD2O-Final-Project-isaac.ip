/* global Phaser */

// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This is the Phaser3 game configuration file

// scene import statements
import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'
import EasyGameScene from './easyGameScene.js'
import MediumGameScene from './mediumGameScene.js'
import HardGameScene from './hardGameScene.js'
import InsaneGameScene from './insaneGameScene.js'
import LevelScene from './levelScene.js'
import DeathScene from './deathScene.js'
import WinScene from './winScene.js'
import InstructionsScene from './instructionsScene.js'

// create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const easyGameScene = new EasyGameScene()
const mediumGameScene = new MediumGameScene()
const hardGameScene = new HardGameScene()
const insaneGameScene = new InsaneGameScene()
const levelScene = new LevelScene()
const deathScene = new DeathScene()
const winScene = new WinScene()
const instructionsScene = new InstructionsScene()

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
// Note: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)
game.scene.add('easyGameScene', easyGameScene)
game.scene.add('mediumGameScene', mediumGameScene)
game.scene.add('hardGameScene', hardGameScene)
game.scene.add('insaneGameScene', insaneGameScene)
game.scene.add('levelScene', levelScene)
game.scene.add('deathScene', deathScene)
game.scene.add('winScene', winScene)
game.scene.add('instructionsScene', instructionsScene)
// start the splash scene

// the start scene
game.scene.start('splashScene')
