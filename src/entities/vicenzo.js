import { vicenzoState } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import vicenzoLines from "../content/vicenzoDialogue.js";

export function generateVicenzoComponents(k, pos) {
    return [
        k.sprite("vicenzo", {
            anim: "vicenzo-down",
        }),
        k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
        k.body({ isStatic: true }),
        k.pos(pos),
        {},
        "vicenzo",
    ];
}

export async function startInteraction(k, vicenzo, player) {
    if (player.direction === "left") {
        vicenzo.flipX = true;
        playAnimIfNotPlaying(vicenzo, "vicenzo-side");
    }

    if (player.direction === "right") {
        vicenzo.flipX = false;
        playAnimIfNotPlaying(vicenzo, "vicenzo-side");
    }

    if (player.direction === "down") {
        playAnimIfNotPlaying(vicenzo, "vicenzo-up");
    }

    const dataRival = 'vicenzo - battle';
    const lines = JSON.parse(localStorage.getItem('vicenzo - battle'));

    const responses = vicenzoLines["spanish"];
    vicenzoState.setNbTalkedVicenzo(lines);

    let nbTalkedVicenzo = vicenzoState.getNbTalkedVicenzo();
    if (nbTalkedVicenzo === 0 || nbTalkedVicenzo === 1) {
        localStorage.setItem('boss', true);
        await dialog(k, k.vec2(2, 520), responses[nbTalkedVicenzo], true, {info:[[1,5,7],[9,15,26]],dataRival});
    } else {
        await dialog(k, k.vec2(2, 520), responses[nbTalkedVicenzo]);
    }
}

export function endInteraction(vicenzo) {
    playAnimIfNotPlaying(vicenzo, "vicenzo-down");
}