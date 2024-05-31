import { thaysState } from "../scenes/state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import thaysLines from "../content/alonsoDialogue.js";

export function generateThaysComponents(k, pos) {
    return [
        k.sprite("thays", {
            anim: "thays-down",
        }),
        k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
        k.body({ isStatic: true }),
        k.pos(pos),
        {},
        "thays",
    ];l
}

export async function startInteraction(k, thays, player) {
    if (player.direction === "left") {
        thays.flipX = true;
        playAnimIfNotPlaying(thays, "thays-side");
    }

    if (player.direction === "right") {
        thays.flipX = false;
        playAnimIfNotPlaying(thays, "thays-side");
    }

    if (player.direction === "down") {
        playAnimIfNotPlaying(thays, "thays-up");
    }

    const dataRival = 'thays - battle';
    const lines = JSON.parse(localStorage.getItem('thays - battle'));

    const responses = thaysLines["spanish"];
    thaysState.setNbTalkedThays(lines);

    let nbTalkedThays = thaysState.getNbTalkedThays();
    if (nbTalkedThays === 0 || nbTalkedThays === 1) {
        localStorage.setItem('boss', true);
        await dialog(k, k.vec2(2, 520), responses[nbTalkedThays], true, {info:[[1,5,7],[9,15,26]],dataRival});
    } else {
        await dialog(k, k.vec2(2, 520), responses[nbTalkedThays]);
    }
}

export function endInteraction(thays) {
    playAnimIfNotPlaying(thays, "thays-down");
}