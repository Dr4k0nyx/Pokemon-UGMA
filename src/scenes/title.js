import { colorizeBackground } from "../utils.js";

export function setTitle(k) {
    const bg = colorizeBackground(k, 70, 70, 250);

    const logo = k.add([
        k.sprite("logo"),
        k.pos(350,30)
    ]);

    const textInit = k.add([
        k.text('PRESIONA "SPACE" PARA CONTINUAR'),
        k.pos(300, 560),
        k.opacity(1)
    ]);

    k.loop(3, ()=>{
        k.tween(
            textInit.opacity,
            0,
            0.3,
            (val) => {
                textInit.opacity = val;
                if (textInit.opacity === 0) {
                    textInit.opacity = 1;
                }
            }
        );
    });

    k.onKeyPress('space', () => {
        textInit.destroy();
        bg.destroy();
        logo.destroy(); 
        k.go('setTutorial');
    });
}