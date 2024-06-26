import {
  endInteraction,
  generateYeleniaComponents,
  startInteraction,
} from "../../entities/yelenia.js";

import {
  generatePlayerComponents,
  setPlayerControls,
} from "../../entities/player.js";
import { gameState } from "../state/stateManagers.js";
import {
  colorizeBackground,
  drawBoundries,
  drawTilesClassroom,
  fetchMapData,
} from "../../utils.js";

export default async function downClassroom_6(k) {
  colorizeBackground(k, 58, 58, 80);
  localStorage.setItem('spawn','downClassroom_6');
  const mapData = await fetchMapData("./assets/maps/salonAbajo6.json");
  const map = k.add([k.pos(520, 200)]);

  const classroomMusic = k.play('classroom', {
    volume: 0.4,
    loop: true
  });

  const entities = {
    yelenia:null,
    player: null,
  };

  const layers = mapData.layers;
  for (const layer of layers) {
    if (layer.name === "Boundries") {
      drawBoundries(k, map, layer);
      continue;
    }

    if (layer.name === "SpawnPoints") {
      for (const object of layer.objects) {
        if (object.name === "player") {
          entities.player = map.add(
            generatePlayerComponents(k, k.vec2(object.x, object.y))
          );
          continue;
        }

        if (object.name === "Yelenia") {
          entities.yelenia = map.add(
            generateYeleniaComponents(k, k.vec2(object.x, object.y))
          );
          continue;
        }
      }

      continue;
    }

    drawTilesClassroom(k, map, layer, mapData.tileheight, mapData.tileheight);
  }

  k.camScale(2);
  setPlayerControls(k, entities.player);
  entities.player.onCollide("classroom - exit", () => {
    classroomMusic.paused = true;
    gameState.setPreviousScene("DownClassroom_6");
    k.go("firstFloor");
  });

  entities.player.onCollide("yelenia", async () => {
    classroomMusic.paused = true;
    await startInteraction(k, entities.yelenia, entities.player);
  });

  entities.player.onCollideEnd("yelenia", () => {
    classroomMusic.paused = false;
    endInteraction(entities.yelenia);
  });

  
  k.camPos(entities.player.worldPos());
  k.onUpdate(async () => {
    if (entities.player.pos.dist(k.camPos()) > 3) {
      await k.tween(
        k.camPos(),
        entities.player.worldPos(),
        0.15,
        (newPos) => k.camPos(newPos),
        k.easings.linear
      );
    }
  });
}
