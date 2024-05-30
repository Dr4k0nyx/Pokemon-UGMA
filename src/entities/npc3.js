import { npc3State } from "../state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc3Lines from "../content/npc3Dialogue.js";

export function generateNpc3Components(k, pos) {
  return [
    k.sprite("npc3", {
      anim: "npc3-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc3",
  ];
}

export async function startInteractionNpc3(k, npc3, player) {
  if (player.direction === "left") {
    npc3.flipX = true;
    playAnimIfNotPlaying(npc3, "npc3-side");
  }

  if (player.direction === "right") {
    npc3.flipX = false;
    playAnimIfNotPlaying(npc3, "npc3-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc3, "npc3-up");
  }

  const responses = npc3Lines["spanish"];
  
  let nbTalkedNpc3 = npc3State.getNbTalkedNpc3();
  if (nbTalkedNpc3 > responses.length - 2) {
    npc3State.setNbTalkedNpc3(1);
    nbTalkedNpc3 = npc3State.getNbTalkedNpc3();
  }

  if (responses[nbTalkedNpc3]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc3]);
    npc3State.setNbTalkedNpc3(nbTalkedNpc3 + 1);
    return;
  }
}

export function endInteractionNpc3(npc3) {
  playAnimIfNotPlaying(npc3, "npc3-down");
}