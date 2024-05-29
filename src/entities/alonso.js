import { alonsoState } from "../state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import alonsoLines from "../content/alonsoDialogue.js";

export function generateAlonsoComponents(k, pos) {
    return [
        k.sprite("alonso", {
            anim: "alonso-down",
        }),
        k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
        k.body({ isStatic: true }),
        k.pos(pos),
        {},
        "alonso",
    ];l
}

export async function startInteraction(k, alonso, player) {
    if (player.direction === "left") {
        alonso.flipX = true;
        playAnimIfNotPlaying(alonso, "alonso-side");
    }

    if (player.direction === "right") {
        alonso.flipX = false;
        playAnimIfNotPlaying(alonso, "alonso-side");
    }

    if (player.direction === "down") {
        playAnimIfNotPlaying(alonso, "alonso-up");
    }

    const dataRival = 'alonso - battle';
    const lines = JSON.parse(localStorage.getItem('alonso - battle'));

    const responses = alonsoLines["spanish"];
    alonsoState.setNbTalkedAlonso(lines);

    let nbTalkedAlonso = alonsoState.getNbTalkedAlonso();
    if (nbTalkedAlonso === 0 || nbTalkedAlonso === 1) {
        localStorage.setItem('boss', true);
        await dialog(k, k.vec2(2, 520), responses[nbTalkedAlonso], true, {info:[[1,5,7],[9,15,26]],dataRival});
    } else {
        await dialog(k, k.vec2(2, 520), responses[nbTalkedAlonso]);
    }
}

export function endInteraction(alonso) {
    playAnimIfNotPlaying(alonso, "alonso-down");
}