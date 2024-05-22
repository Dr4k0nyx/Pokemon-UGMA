import { yeleniaState } from "../state/stateManagers.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import yeleniaLines from "../content/yeleniaDialogue.js";

export function generateYeleniaComponents(k, pos) {
    return [
        k.sprite("yelenia", {
            anim: "yelenia-down",
        }),
        k.area({ shape: new k.Rect(k.vec2(19, 30), 24, 30) }),
        k.body({ isStatic: true }),
        k.pos(pos),
        {},
        "yelenia",
    ];
}

export async function startInteraction(k, yelenia, player) {
    if (player.direction === "left") {
        yelenia.flipX = true;
        playAnimIfNotPlaying(yelenia, "yelenia-side");
    }

    if (player.direction === "right") {
        yelenia.flipX = false;
        playAnimIfNotPlaying(yelenia, "yelenia-side");
    }

    if (player.direction === "down") {
        playAnimIfNotPlaying(yelenia, "yelenia-up");
    }

    const responses = yeleniaLines["spanish"];

    let nbTalkedYelenia = yeleniaState.getnbTalkedYelenia();
    if (responses[nbTalkedYelenia]) {
        await dialog(k, k.vec2(250, 500), responses[nbTalkedYelenia]);
        yeleniaState.setnbTalkedYelenia(nbTalkedYelenia + 1);
        return;
    }

    k.go("setBattle",{info:[[1,5,7],[9,15,26]]})
}

export function endInteraction(yelenia) {
    playAnimIfNotPlaying(yelenia, "yelenia-down");
}