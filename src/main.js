import k from "./kaboomContext.js";
import world from "./scenes/world.js";
import classroom from "./scenes/classroom.js";

k.loadSprite("assets", "./assets/tiles.png", {
    sliceX: 10,
    sliceY: 5,
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

k.loadSprite("class", "./assets/classroomTiles.png", {
  sliceX: 10,
  sliceY: 10,
});

const scenes = {
    world,
    classroom,
};

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("world");