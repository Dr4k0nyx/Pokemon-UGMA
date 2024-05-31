import { npc6State } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc6Lines from "../content/npc6Dialogue.js";

export function generateNpc6Components(k, pos) {
  return [
    k.sprite("npc6", {
      anim: "npc6-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc6",
  ];
}

export async function startInteractionNpc6(k, npc6, player) {
  if (player.direction === "left") {
    npc6.flipX = true;
    playAnimIfNotPlaying(npc6, "npc6-side");
  }

  if (player.direction === "right") {
    npc6.flipX = false;
    playAnimIfNotPlaying(npc6, "npc6-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc6, "npc6-up");
  }

  const responses = npc6Lines["spanish"];
  
  let nbTalkedNpc6 = npc6State.getNbTalkedNpc6();
  if (nbTalkedNpc6 > responses.length - 2) {
    npc6State.setNbTalkedNpc6(1);
    nbTalkedNpc6 = npc6State.getNbTalkedNpc6();
  }

  if (responses[nbTalkedNpc6]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc6]);
    npc6State.setNbTalkedNpc6(nbTalkedNpc6 + 1);
    return;
  }
}

export function endInteractionNpc6(npc6) {
  playAnimIfNotPlaying(npc6, "npc6-down");
}