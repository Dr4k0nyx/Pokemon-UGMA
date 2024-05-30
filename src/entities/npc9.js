import { npc9State } from "../state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc9Lines from "../content/npc9Dialogue.js";

export function generateNpc9Components(k, pos) {
  return [
    k.sprite("npc9", {
      anim: "npc9-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc9",
  ];
}

export async function startInteractionNpc9(k, npc9, player) {
  if (player.direction === "left") {
    npc9.flipX = true;
    playAnimIfNotPlaying(npc9, "npc9-side");
  }

  if (player.direction === "right") {
    npc9.flipX = false;
    playAnimIfNotPlaying(npc9, "npc9-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc9, "npc9-up");
  }

  const responses = npc9Lines["spanish"];
  
  let nbTalkedNpc9 = npc9State.getNbTalkedNpc9();
  if (nbTalkedNpc9 > responses.length - 2) {
    npc9State.setNbTalkedNpc9(1);
    nbTalkedNpc9 = npc9State.getNbTalkedNpc9();
  }

  if (responses[nbTalkedNpc9]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc9]);
    npc9State.setNbTalkedNpc9(nbTalkedNpc9 + 1);
    return;
  }
}

export function endInteractionNpc9(npc9) {
  playAnimIfNotPlaying(npc9, "npc9-down");
}