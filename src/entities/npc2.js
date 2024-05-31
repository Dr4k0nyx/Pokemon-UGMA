import { npc2State } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc2Lines from "../content/npc2Dialogue.js";

export function generateNpc2Components(k, pos) {
  return [
    k.sprite("npc2", {
      anim: "npc2-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc2",
  ];
}

export async function startInteractionNpc2(k, npc2, player) {
  if (player.direction === "left") {
    npc2.flipX = true;
    playAnimIfNotPlaying(npc2, "npc2-side");
  }

  if (player.direction === "right") {
    npc2.flipX = false;
    playAnimIfNotPlaying(npc2, "npc2-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc2, "npc2-up");
  }

  const responses = npc2Lines["spanish"];
  
  let nbTalkedNpc2 = npc2State.getNbTalkedNpc2();
  if (nbTalkedNpc2 > responses.length - 2) {
    npc2State.setNbTalkedNpc2(1);
    nbTalkedNpc2 = npc2State.getNbTalkedNpc2();
  }

  if (responses[nbTalkedNpc2]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc2]);
    npc2State.setNbTalkedNpc2(nbTalkedNpc2 + 1);
    return;
  }
}

export function endInteractionNpc2(npc2) {
  playAnimIfNotPlaying(npc2, "npc2-down");
}