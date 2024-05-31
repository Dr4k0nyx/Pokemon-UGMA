import { npc8State } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc8Lines from "../content/npc8Dialogue.js";

export function generateNpc8Components(k, pos) {
  return [
    k.sprite("npc8", {
      anim: "npc8-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc8",
  ];
}

export async function startInteractionNpc8(k, npc8, player) {
  if (player.direction === "left") {
    npc8.flipX = true;
    playAnimIfNotPlaying(npc8, "npc8-side");
  }

  if (player.direction === "right") {
    npc8.flipX = false;
    playAnimIfNotPlaying(npc8, "npc8-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc8, "npc8-up");
  }

  const responses = npc8Lines["spanish"];
  
  let nbTalkedNpc8 = npc8State.getNbTalkedNpc8();
  if (nbTalkedNpc8 > responses.length - 2) {
    npc8State.setNbTalkedNpc8(1);
    nbTalkedNpc8 = npc8State.getNbTalkedNpc8();
  }

  if (responses[nbTalkedNpc8]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc8]);
    npc8State.setNbTalkedNpc8(nbTalkedNpc8 + 1);
    return;
  }
}

export function endInteractionNpc8(npc8) {
  playAnimIfNotPlaying(npc8, "npc8-down");
}