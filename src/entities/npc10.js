import { npc10State } from "../state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc10Lines from "../content/npc10Dialogue.js";

export function generateNpc10Components(k, pos) {
  return [
    k.sprite("npc10", {
      anim: "npc10-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc10",
  ];
}

export async function startInteractionNpc10(k, npc10, player) {
  if (player.direction === "left") {
    npc10.flipX = true;
    playAnimIfNotPlaying(npc10, "npc10-side");
  }

  if (player.direction === "right") {
    npc10.flipX = false;
    playAnimIfNotPlaying(npc10, "npc10-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc10, "npc10-up");
  }

  const responses = npc10Lines["spanish"];
  
  let nbTalkedNpc10 = npc10State.getNbTalkedNpc10();
  if (nbTalkedNpc10 > responses.length - 2) {
    npc10State.setNbTalkedNpc10(1);
    nbTalkedNpc10 = npc10State.getNbTalkedNpc10();
  }

  if (responses[nbTalkedNpc10]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc10]);
    npc10State.setNbTalkedNpc10(nbTalkedNpc10 + 1);
    return;
  }
}

export function endInteractionNpc10(npc10) {
  playAnimIfNotPlaying(npc10, "npc10-down");
}