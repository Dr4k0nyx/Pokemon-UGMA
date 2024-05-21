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

export default async function world(k) {
    const previousScene = gameState.getPreviousScene();
    colorizeBackground(k, 58, 58, 80);
    const mapData = await fetchMapData("./assets/maps/PisoUno.json");
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
                if (object.name === "entranceFloorPlayer" && previousScene === "groundFloor") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "leftHallwaysPlayer" && (previousScene === "leftDownClassroom" || previousScene === "leftUpClassroom")) {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "rightHallwaysPlayer" && (previousScene === "rightDownClassroom" || previousScene === "rightUpClassroom")) {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "player" && !previousScene) {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)),
                    );
                    continue;
                }
            }
            continue;
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth);
    }

    setPlayerControls(k, entities.player);
    entities.player.onCollide("leftDownClassroom - entrance", () => k.go("leftDownClassroom"));
    entities.player.onCollide("rightDownClassroom - entrance", () => k.go("rightDownClassroom"));
    entities.player.onCollide("leftUpClassroom - entrance", () => k.go("leftUpClassroom"));
    entities.player.onCollide("rightUpClassroom - entrance", () => k.go("rightUpClassroom"));
    entities.player.onCollide("groundFloor - entrance", () => k.go("groundFloor"));
    entities.player.onCollide("pokemon", () => k.go("setBattle",{info:[[0],[4]]}));
    
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
