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

                if (object.name === "UpClassroom_9 - Player" && previousScene === "UpClassroom_9") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_10 - Player" && previousScene === "UpClassroom_10") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_11 - Player" && previousScene === "UpClassroom_11") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_12 - Player" && previousScene === "UpClassroom_12") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "entranceFloorPlayer" && previousScene === "firstFloor") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)),);
                    continue;
                }
            }
            continue;
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth);
    }

    setPlayerControls(k, entities.player);
    entities.player.onCollide("university - exit", () => {
        gameState.setPreviousScene("groundFloor");
        k.go("universityCourtyard");
    });
    entities.player.onCollide("UpClassroom_9 - entrance", () => k.go("upClassroom_9"));
    entities.player.onCollide("UpClassroom_10 - entrance", () => k.go("upClassroom_10"));
    entities.player.onCollide("UpClassroom_11 - entrance", () => k.go("upClassroom_11"));
    entities.player.onCollide("UpClassroom_12 - entrance", () => k.go("upClassroom_12"));
    entities.player.onCollide("firstFloor - entrance", () => {
        gameState.setPreviousScene("groundFloor");
        k.go("firstFloor");
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