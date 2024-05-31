import { chavezState } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import chavezLines from "../content/chavezDialogue.js";

export function generateChavezComponents(k, pos) {
    return [
        k.sprite("chavez", {
            anim: "chavez-down",
        }),
        k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
        k.body({ isStatic: true }),
        k.pos(pos),
        {},
        "chavez",
    ];
}

export async function startInteraction(k, chavez, player) {
    if (player.direction === "left") {
        chavez.flipX = true;
        playAnimIfNotPlaying(chavez, "chavez-side");
    }

    if (player.direction === "right") {
        chavez.flipX = false;
        playAnimIfNotPlaying(chavez, "chavez-side");
    }

    if (player.direction === "down") {
        playAnimIfNotPlaying(chavez, "chavez-up");
    }

    const dataRival = 'chavez - battle';
    const lines = JSON.parse(localStorage.getItem('chavez - battle'));

    const responses = chavezLines["spanish"];
    chavezState.setNbTalkedChavez(lines);

    let nbTalkedChavez = chavezState.getNbTalkedChavez();
    if (nbTalkedChavez === 0 || nbTalkedChavez === 1) {
        localStorage.setItem('boss', true);
        await dialog(k, k.vec2(2, 520), responses[nbTalkedChavez], true, {info:[[1,5,7],[9,15,26]],dataRival});
    } else {
        await dialog(k, k.vec2(2, 520), responses[nbTalkedChavez]);
    }
}

export function endInteraction(chavez) {
    playAnimIfNotPlaying(chavez, "chavez-down");
}