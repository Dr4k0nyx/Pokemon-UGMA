import { 
    generatePlayerComponents,
    setPlayerControls,
 } from "../entities/player.js";
import { gameState } from "../state/stateManagers.js";
import {
    colorizeBackground, 
    drawBoundries, 
    drawTiles, 
    fetchMapData 
} from "../utils.js";
import universityCourtyard from "./universityCourtyard.js";

export default async function groundFloor(k) {
    const previousScene = gameState.getPreviousScene();
    colorizeBackground(k, 58, 58, 80);
    const mapData = await fetchMapData("./assets/maps/PlantaBaja.json");
    const map = k.add([k.pos(0,0)]);

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
                if (object.name === "universityDoorPlayer" && previousScene === "universityCourtyard") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "entranceFloorPlayer" && !previousScene) {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)),);
                    continue;
                }
            }
            continue;
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth);
    }

    setPlayerControls(k, entities.player);
    entities.player.onCollide("university - exit", () => k.go("universityCourtyard"));
    entities.player.onCollide("firstFloor - entrance", () => {
        gameState.setPreviousScene("groundFloor");
        k.go("world");
      });
    
    k.camScale(2);
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