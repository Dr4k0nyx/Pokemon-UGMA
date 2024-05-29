import {
  startInteraction,
  endInteraction,
  generateChavezComponents
} from '../../entities/chavez.js';
import {
  generatePlayerComponents,
  setPlayerControls,
} from "../../entities/player.js";
import { gameState } from "../../state/stateManagers.js";
import {
  colorizeBackground,
  drawBoundries,
  drawTilesClassroom,
  fetchMapData,
} from "../../utils.js";

export default async function upClassroom_1(k) {
  colorizeBackground(k, 58, 58, 80);

  const mapData = await fetchMapData("./assets/maps/salonArriba1.json");
  const map = k.add([k.pos(520, 200)]);

  const classroomMusic = k.play('classroom', {
    volume: 0.4,
    loop: true
  });

  const entities = {
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

        if (object.name === "Chavez") {
          entities.chavez = map.add(
            generateChavezComponents(k, k.vec2(object.x, object.y))
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
    gameState.setPreviousScene("UpClassroom_1");
    k.go("firstFloor");
  });

  entities.player.onCollide("chavez", async () => {
    classroomMusic.paused = true;
    await startInteraction(k, entities.chavez, entities.player);
  });

  entities.player.onCollideEnd("chavez", () => {
    classroomMusic.paused = false;
    endInteraction(entities.chavez);
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
