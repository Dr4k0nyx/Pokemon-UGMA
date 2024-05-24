import { vivelibState } from "../state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import vivelibLines from "../content/vivelibDialogue.js";

export function generateVivelibComponents(k, pos) {
  return [
    k.sprite("vivelib", {
      anim: "vivelib-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "vivelib",
  ];
}

export async function startInteraction(k, vivelib, player) {
  if (player.direction === "left") {
    vivelib.flipX = true;
    playAnimIfNotPlaying(vivelib, "vivelib-side");
  }

  if (player.direction === "right") {
    vivelib.flipX = false;
    playAnimIfNotPlaying(vivelib, "vivelib-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(vivelib, "vivelib-up");
  }

  const dataRival = 'vivelib - battle';
  const lines = JSON.parse(localStorage.getItem('vivelib - battle'));

  const responses = vivelibLines["spanish"];
  vivelibState.setNbTalkedVivelib(lines);
  
  let NbTalkedVivelib = vivelibState.getNbTalkedVivelib();
  if (NbTalkedVivelib === 1 || NbTalkedVivelib === 0) {
    localStorage.setItem('boss', true);
    await dialog(k, k.vec2(2, 520), responses[NbTalkedVivelib], true, {info:[[1,5,7],[9,15,26]], dataRival});
  } else {
    await dialog(k, k.vec2(2, 520), responses[NbTalkedVivelib]);
  }
}

export function endInteraction(vivelib) {
  playAnimIfNotPlaying(vivelib, "vivelib-down");
}