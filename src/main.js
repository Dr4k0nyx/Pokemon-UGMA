import k from "./kaboomContext.js";
import world from "./scenes/world.js";
import leftDownClassroom from "./scenes/leftDownClassroom.js";
import rightDownClassroom from "./scenes/rightDownClassroom.js";
import leftUpClassroom from "./scenes/leftUpClassroom.js";
import rightUpClassroom from "./scenes/rightUpClassroom.js";
import setBattle from "./scenes/battle.js";
import groundFloor from "./scenes/groundFloor.js";
import universityCourtyard from "./scenes/universityCourtyard.js";
import { loadAssets } from './assetLoader.js';

k.loadSprite("assets", "./assets/tiles.png", {
    sliceX: 10,
    sliceY: 13,
});

k.loadSprite("player1", "./assets/newCharacter.png", {
    sliceX: 4,
    sliceY: 4,
    anims: {
        "player-idle-down": 0,
        "player-down": {
          from: 0,
          to: 3,
          loop: true,
        },
        "player-idle-side": 8,
        "player-side": {
          from: 8,
          to: 11,
          loop: true,
        },
        "player-idle-up": 12,
        "player-up": {
          from: 12,
          to: 15,
          loop: true,
        },
    },
});

k.loadSprite("class", "./assets/tilesSalonAbajo.png", {
  sliceX: 7,
  sliceY: 8,
});

k.loadSprite("yard", "./assets/patio.png", {
  sliceX: 8,
  sliceY: 27,
});

loadAssets();

const scenes = {
    world,
    leftDownClassroom,
    rightDownClassroom,
    leftUpClassroom,
    rightUpClassroom,
    setBattle,
    groundFloor,
    universityCourtyard,
};

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go('setBattle')