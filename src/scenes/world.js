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

                if (object.name === "UpClassroom_1 - Player" && previousScene === "UpClassroom_1") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_2 - Player" && previousScene === "UpClassroom_2") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_3 - Player" && previousScene === "UpClassroom_3") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_4 - Player" && previousScene === "UpClassroom_4") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_5 - Player" && previousScene === "UpClassroom_5") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_6 - Player" && previousScene === "UpClassroom_6") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_7 - Player" && previousScene === "UpClassroom_7") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "UpClassroom_8 - Player" && previousScene === "UpClassroom_8") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "DownClassroom_1 - Player" && previousScene === "DownClassroom_1") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "DownClassroom_2 - Player" && previousScene === "DownClassroom_2") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "DownClassroom_3 - Player" && previousScene === "DownClassroom_3") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "DownClassroom_4 - Player" && previousScene === "DownClassroom_4") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "DownClassroom_5 - Player" && previousScene === "DownClassroom_5") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "DownClassroom_6 - Player" && previousScene === "DownClassroom_6") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "DownClassroom_7 - Player" && previousScene === "DownClassroom_7") {
                    entities.player = map.add(generatePlayerComponents(k, k.vec2(object.x, object.y)));
                    continue;
                }

                if (object.name === "DownClassroom_8 - Player" && previousScene === "DownClassroom_8") {
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
    entities.player.onCollide("UpClassroom_1 - entrance", () => k.go("upClassroom_1"));
    entities.player.onCollide("UpClassroom_2 - entrance", () => k.go("upClassroom_2"));
    entities.player.onCollide("UpClassroom_3 - entrance", () => k.go("upClassroom_3"));
    entities.player.onCollide("UpClassroom_4 - entrance", () => k.go("upClassroom_4"));
    entities.player.onCollide("UpClassroom_5 - entrance", () => k.go("upClassroom_5"));
    entities.player.onCollide("UpClassroom_6 - entrance", () => k.go("upClassroom_6"));
    entities.player.onCollide("UpClassroom_7 - entrance", () => k.go("upClassroom_7"));
    entities.player.onCollide("UpClassroom_8 - entrance", () => k.go("upClassroom_8"));
    entities.player.onCollide("DownClassroom_1 - entrance", () => k.go("downClassroom_1"));
    entities.player.onCollide("DownClassroom_2 - entrance", () => k.go("downClassroom_2"));
    entities.player.onCollide("DownClassroom_3 - entrance", () => k.go("downClassroom_3"));
    entities.player.onCollide("DownClassroom_4 - entrance", () => k.go("downClassroom_4"));
    entities.player.onCollide("DownClassroom_5 - entrance", () => k.go("downClassroom_5"));
    entities.player.onCollide("DownClassroom_6 - entrance", () => k.go("downClassroom_6"));
    entities.player.onCollide("DownClassroom_7 - entrance", () => k.go("downClassroom_7"));
    entities.player.onCollide("DownClassroom_8 - entrance", () => k.go("downClassroom_8"));
    entities.player.onCollide("groundFloor - entrance", () => {
        gameState.setPreviousScene("world");
        k.go("groundFloor");
    });
    entities.player.onCollide("pokemon", () => k.go("setBattle",{info:[[0,1,2,3],[4,5,6,7]]}));
    
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
