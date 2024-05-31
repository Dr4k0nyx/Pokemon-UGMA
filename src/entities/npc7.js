import { npc7State } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc7Lines from "../content/npc7Dialogue.js";

export function generateNpc7Components(k, pos) {
  return [
    k.sprite("npc7", {
      anim: "npc7-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc7",
  ];
}

export async function startInteractionNpc7(k, npc7, player) {
  if (player.direction === "left") {
    npc7.flipX = true;
    playAnimIfNotPlaying(npc7, "npc7-side");
  }

  if (player.direction === "right") {
    npc7.flipX = false;
    playAnimIfNotPlaying(npc7, "npc7-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc7, "npc7-up");
  }

  const responses = npc7Lines["spanish"];
  
  let nbTalkedNpc7 = npc7State.getNbTalkedNpc7();
  if (nbTalkedNpc7 > responses.length - 2) {
    npc7State.setNbTalkedNpc7(1);
    nbTalkedNpc7 = npc7State.getNbTalkedNpc7();
  }

  if (responses[nbTalkedNpc7]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc7]);
    npc7State.setNbTalkedNpc7(nbTalkedNpc7 + 1);
    return;
  }
}

export function endInteractionNpc7(npc7) {
  playAnimIfNotPlaying(npc7, "npc7-down");
}