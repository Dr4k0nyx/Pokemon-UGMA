import { yumilvaState } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import yumilvaLines from "../content/yumilvaDialogue.js";

export function generateYumilvaComponents(k, pos) {
  return [
    k.sprite("yumilva", {
      anim: "yumilva-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "yumilva",
  ];
}

export async function startInteraction(k, yumilva, player) {
  if (player.direction === "left") {
    yumilva.flipX = true;
    playAnimIfNotPlaying(yumilva, "yumilva-side");
  }

  if (player.direction === "right") {
    yumilva.flipX = false;
    playAnimIfNotPlaying(yumilva, "yumilva-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(yumilva, "yumilva-up");
  }

  const dataRival = 'yumilva - battle';
  const lines = JSON.parse(localStorage.getItem('yumilva - battle'));

  const responses = yumilvaLines["spanish"];
  yumilvaState.setNbTalkedYumilva(lines);
  
  let NbTalkedYumilva = yumilvaState.getNbTalkedYumilva();
  if (NbTalkedYumilva === 1 || NbTalkedYumilva === 0) {
    localStorage.setItem('boss', true);
    await dialog(k, k.vec2(2, 520), responses[NbTalkedYumilva], true, {info:[[1,5,7],[9,15,26]], dataRival});
  } else {
    await dialog(k, k.vec2(2, 520), responses[NbTalkedYumilva]);
  }
}

export function endInteraction(yumilva) {
  playAnimIfNotPlaying(yumilva, "yumilva-down");
}