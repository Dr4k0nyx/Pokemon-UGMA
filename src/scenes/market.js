import {
  generatePlayerComponents,
  setPlayerControls,
} from "../entities/player.js";
import { gameState } from "../state/stateManagers.js";
import {
  colorizeBackground,
  drawBoundries,
  drawTilesShop,
  fetchMapData,
} from "../utils.js";

export default async function market(k) {
  colorizeBackground(k, 58, 58, 80);
  const mapData = await fetchMapData("./assets/maps/tienda.json");
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
        if (object.name === "entranceMarketPlayer") {
          entities.player = map.add(
            generatePlayerComponents(k, k.vec2(object.x, object.y))
          );
          continue;
        }
      }
      continue;
    }

    drawTilesShop(k, map, layer, mapData.tileheight, mapData.tileheight);
  }

  k.camScale(2);
  setPlayerControls(k, entities.player);
  entities.player.onCollide("market - exit", () => {
    gameState.setPreviousScene("market");
    k.go("universityCourtyard");
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
