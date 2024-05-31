import { npc5State } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc5Lines from "../content/npc5Dialogue.js";

export function generateNpc5Components(k, pos) {
  return [
    k.sprite("npc5", {
      anim: "npc5-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc5",
  ];
}

export async function startInteractionNpc5(k, npc5, player) {
  if (player.direction === "left") {
    npc5.flipX = true;
    playAnimIfNotPlaying(npc5, "npc5-side");
  }

  if (player.direction === "right") {
    npc5.flipX = false;
    playAnimIfNotPlaying(npc5, "npc5-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc5, "npc5-up");
  }

  const responses = npc5Lines["spanish"];
  
  let nbTalkedNpc5 = npc5State.getNbTalkedNpc5();
  if (nbTalkedNpc5 > responses.length - 2) {
    npc5State.setNbTalkedNpc5(1);
    nbTalkedNpc5 = npc5State.getNbTalkedNpc5();
  }

  if (responses[nbTalkedNpc5]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc5]);
    npc5State.setNbTalkedNpc5(nbTalkedNpc5 + 1);
    return;
  }
}

export function endInteractionNpc5(npc5) {
  playAnimIfNotPlaying(npc5, "npc5-down");
}