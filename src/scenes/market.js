import {
  endInteractionNpc10,
  generateNpc10Components,
  startInteractionNpc10,
} from "../entities/npc10.js";
import {
  endInteractionNpc9,
  generateNpc9Components,
  startInteractionNpc9,
} from "../entities/npc9.js";
import {
  endInteractionNpc8,
  generateNpc8Components,
  startInteractionNpc8,
} from "../entities/npc8.js";
import {
  endInteractionNpc7,
  generateNpc7Components,
  startInteractionNpc7,
} from "../entities/npc7.js";
import {
  endInteractionNpc6,
  generateNpc6Components,
  startInteractionNpc6,
} from "../entities/npc6.js";
import {
  endInteractionNpc5,
  generateNpc5Components,
  startInteractionNpc5,
} from "../entities/npc5.js";
import {
  endInteractionNpc4,
  generateNpc4Components,
  startInteractionNpc4,
} from "../entities/npc4.js";
import {
  endInteractionNpc3,
  generateNpc3Components,
  startInteractionNpc3,
} from "../entities/npc3.js";
import {
  endInteractionNpc2,
  generateNpc2Components,
  startInteractionNpc2,
} from "../entities/npc2.js";
import {
  endInteractionNpc1,
  generateNpc1Components,
  startInteractionNpc1,
} from "../entities/npc1.js";
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

  const play = k.play('market', {
    volume: 0.4,
    loop:true
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
        if (object.name === "entranceMarketPlayer") {
          entities.player = map.add(
            generatePlayerComponents(k, k.vec2(object.x, object.y))
          );
          continue;
        }

        
        if (object.name === "NPC1") {
          entities.npc1 = map.add(
            generateNpc1Components(k, k.vec2(object.x, object.y))
          );
          continue;
      }

      if (object.name === "NPC2") {
          entities.npc2 = map.add(
            generateNpc2Components(k, k.vec2(object.x, object.y))
          );
          continue;
      }

      if (object.name === "NPC3") {
          entities.npc3 = map.add(
            generateNpc3Components(k, k.vec2(object.x, object.y))
          );
          continue;
      }

      if (object.name === "NPC4") {
          entities.npc4 = map.add(
            generateNpc4Components(k, k.vec2(object.x, object.y))
          );
          continue;
      }

      if (object.name === "NPC5") {
          entities.npc5 = map.add(
            generateNpc5Components(k, k.vec2(object.x, object.y))
          );
          continue;
      }

      if (object.name === "NPC6") {
          entities.npc6 = map.add(
            generateNpc6Components(k, k.vec2(object.x, object.y))
          );
          continue;
      }

      if (object.name === "NPC7") {
          entities.npc7 = map.add(
            generateNpc7Components(k, k.vec2(object.x, object.y))
          );
          continue;
      }

      if (object.name === "NPC8") {
          entities.npc8 = map.add(
            generateNpc8Components(k, k.vec2(object.x, object.y))
          );
          continue;
      }

      if (object.name === "NPC9") {
          entities.npc9 = map.add(
            generateNpc9Components(k, k.vec2(object.x, object.y))
          );
          continue;
      }

      if (object.name === "NPC10") {
          entities.npc10 = map.add(
            generateNpc10Components(k, k.vec2(object.x, object.y))
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
    play.paused = true;
    gameState.setPreviousScene("market");
    k.go("universityCourtyard");
  });

  entities.player.onCollide("npc1", async () => {
    await startInteractionNpc1(k, entities.npc1, entities.player);
});
entities.player.onCollideEnd("npc1", () => {
    endInteractionNpc1(entities.npc1);
});

entities.player.onCollide("npc2", async () => {
    await startInteractionNpc2(k, entities.npc2, entities.player);
});
entities.player.onCollideEnd("npc2", () => {
    endInteractionNpc2(entities.npc2);
});

entities.player.onCollide("npc3", async () => {
    await startInteractionNpc3(k, entities.npc3, entities.player);
});
entities.player.onCollideEnd("npc3", () => {
    endInteractionNpc3(entities.npc3);
});

entities.player.onCollide("npc4", async () => {
    await startInteractionNpc4(k, entities.npc4, entities.player);
});
entities.player.onCollideEnd("npc4", () => {
    endInteractionNpc4(entities.npc4);
});

entities.player.onCollide("npc5", async () => {
    await startInteractionNpc5(k, entities.npc5, entities.player);
});
entities.player.onCollideEnd("npc5", () => {
    endInteractionNpc5(entities.npc5);
});

entities.player.onCollide("npc6", async () => {
    await startInteractionNpc6(k, entities.npc6, entities.player);
});
entities.player.onCollideEnd("npc6", () => {
    endInteractionNpc6(entities.npc6);
});

entities.player.onCollide("npc7", async () => {
    await startInteractionNpc7(k, entities.npc7, entities.player);
});
entities.player.onCollideEnd("npc7", () => {
    endInteractionNpc7(entities.npc7);
});

entities.player.onCollide("npc8", async () => {
    await startInteractionNpc8(k, entities.npc8, entities.player);
});
entities.player.onCollideEnd("npc8", () => {
    endInteractionNpc8(entities.npc8);
});

entities.player.onCollide("npc9", async () => {
    await startInteractionNpc9(k, entities.npc9, entities.player);
});
entities.player.onCollideEnd("npc9", () => {
    endInteractionNpc9(entities.npc9);
});

entities.player.onCollide("npc10", async () => {
    await startInteractionNpc10(k, entities.npc10, entities.player);
});
entities.player.onCollideEnd("npc10", () => {
    endInteractionNpc10(entities.npc10);
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
