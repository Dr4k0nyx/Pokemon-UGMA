import { npc1State } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import npc1Lines from "../content/npc1Dialogue.js";

export function generateNpc1Components(k, pos) {
  return [
    k.sprite("npc1", {
      anim: "npc1-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "npc1",
  ];
}

export async function startInteractionNpc1(k, npc1, player) {
  if (player.direction === "left") {
    npc1.flipX = true;
    playAnimIfNotPlaying(npc1, "npc1-side");
  }

  if (player.direction === "right") {
    npc1.flipX = false;
    playAnimIfNotPlaying(npc1, "npc1-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(npc1, "npc1-up");
  }

  const responses = npc1Lines["spanish"];
  
  let nbTalkedNpc1 = npc1State.getNbTalkedNpc1();
  if (nbTalkedNpc1 > responses.length - 2) {
    npc1State.setNbTalkedNpc1(1);
    nbTalkedNpc1 = npc1State.getNbTalkedNpc1();
  }

  if (responses[nbTalkedNpc1]) {
    await dialog(k, k.vec2(2, 520), responses[nbTalkedNpc1]);
    npc1State.setNbTalkedNpc1(nbTalkedNpc1 + 1);
    return;
  }
}

export function endInteractionNpc1(npc1) {
  playAnimIfNotPlaying(npc1, "npc1-down");
}