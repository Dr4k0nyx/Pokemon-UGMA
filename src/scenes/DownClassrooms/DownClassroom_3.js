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

export default async function downClassroom_3(k) {
  colorizeBackground(k, 58, 58, 80);

  const mapData = await fetchMapData("./assets/maps/salonAbajo3.json");
  const map = k.add([k.pos(520, 200)]);

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
      }

      continue;
    }

    drawTilesClassroom(k, map, layer, mapData.tileheight, mapData.tileheight);
  }

  k.camScale(2);
  setPlayerControls(k, entities.player);
  entities.player.onCollide("classroom - exit", () => {
    gameState.setPreviousScene("DownClassroom_3");
    k.go("firstFloor");
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
