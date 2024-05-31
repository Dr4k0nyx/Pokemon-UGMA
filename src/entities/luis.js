import { luisState } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import luisLines from "../content/luisDialogue.js";

export function generateLuisComponents(k, pos) {
  return [
    k.sprite("luis", {
      anim: "luis-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
    k.body({ isStatic: true }),
    k.pos(pos),
    {},
    "luis",
  ];
}

export async function startInteraction(k, luis, player) {
  if (player.direction === "left") {
    luis.flipX = true;
    playAnimIfNotPlaying(luis, "luis-side");
  }

  if (player.direction === "right") {
    luis.flipX = false;
    playAnimIfNotPlaying(luis, "luis-side");
  }

  if (player.direction === "down") {
    playAnimIfNotPlaying(luis, "luis-up");
  }

  const dataRival = 'luis - battle';
  const lines = JSON.parse(localStorage.getItem('luis - battle'));

  const responses = luisLines["spanish"];
  luisState.setNbTalkedLuis(lines);
  
  let NbTalkedLuis = luisState.getNbTalkedLuis();
  if (NbTalkedLuis === 1 || NbTalkedLuis === 0) {
    localStorage.setItem('boss', true);
    await dialog(k, k.vec2(2, 520), responses[NbTalkedLuis], true, {info:[[1,5,7],[9,15,26]], dataRival});
  } else {
    await dialog(k, k.vec2(2, 520), responses[NbTalkedLuis]);
  }
}

export function endInteraction(luis) {
  playAnimIfNotPlaying(luis, "luis-down");
}