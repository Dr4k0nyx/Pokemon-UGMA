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

  const responses = vivelibLines["spanish"];

  let NbTalkedVivelib = vivelibState.getNbTalkedVivelib();
  if (responses[NbTalkedVivelib]) {
    await dialog(k, k.vec2(250, 500), responses[NbTalkedVivelib]);
    vivelibState.setNbTalkedVivelib(NbTalkedVivelib + 1);
    return;
  }

  //Pon aqui la batalla
}

export function endInteraction(vivelib) {
  playAnimIfNotPlaying(vivelib, "vivelib-down");
}