import { npc4State } from "../state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc4Lines from "../content/npc4Dialogue.js";

export function generateNpc4Components(k, pos) {
  return [
    k.sprite("npc4", {
      anim: "npc4-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc4",
  ];
}

export async function startInteractionNpc4(k, npc4, player) {
  if (player.direction === "left") {
    npc4.flipX = true;
    playAnimIfNotPlaying(npc4, "npc4-side");
  }

  if (player.direction === "right") {
    npc4.flipX = false;
    playAnimIfNotPlaying(npc4, "npc4-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc4, "npc4-up");
  }

  const responses = npc4Lines["spanish"];
  
  let nbTalkedNpc4 = npc4State.getNbTalkedNpc4();
  if (nbTalkedNpc4 > responses.length - 2) {
    npc4State.setNbTalkedNpc4(1);
    nbTalkedNpc4 = npc4State.getNbTalkedNpc4();
  }

  if (responses[nbTalkedNpc4]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc4]);
    npc4State.setNbTalkedNpc4(nbTalkedNpc4 + 1);
    return;
  }
}

export function endInteractionNpc4(npc4) {
  playAnimIfNotPlaying(npc4, "npc4-down");
}