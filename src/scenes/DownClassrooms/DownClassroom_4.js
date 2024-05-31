import {
  startInteraction,
  endInteraction,
  generateVicenzoComponents
} from '../../entities/vicenzo.js';
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

export default async function downClassroom_4(k) {
  colorizeBackground(k, 58, 58, 80);

  const mapData = await fetchMapData("./assets/maps/salonAbajo4.json");
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

        if (object.name === "Vicenzo") {
          entities.vicenzo = map.add(
            generateVicenzoComponents(k, k.vec2(object.x, object.y))
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
    gameState.setPreviousScene("DownClassroom_4");
    k.go("firstFloor");
  });

  entities.player.onCollide("vicenzo", async () => {
    classroomMusic.paused = true;
    await startInteraction(k, entities.vicenzo, entities.player);
  });

  entities.player.onCollideEnd("vicenzo", () => {
    classroomMusic.paused = false;
    endInteraction(entities.vicenzo);
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
