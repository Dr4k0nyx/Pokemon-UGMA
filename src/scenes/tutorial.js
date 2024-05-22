import { colorizeBackground } from "../utils.js";

export function setTutorial(k) {
    let username = [], next = 0, select = 0, selectYN = 1;
    colorizeBackground(k, 102, 100, 200);

    k.add([k.pos(0,0)]);

    function initialInputUsername() {
        const blockInput = k.add([
            k.rect(1000, 230), 
            k.outline(4),
            k.pos(138, 180)
        ]);
    
        const input = blockInput.add([
            k.text('_ _ _ _ _ _ _ _ _ _', {size: 42}),
            k.color(10,10,10),
            k.pos(300, 100)
        ]);
    
        const contentInput = input.add([
            k.text('', {size: 42}),
            k.color(10,10,10),
            k.pos(0, 0)
        ])
    
        k.onCharInput((char) => {
            if(username.length < 10) {
                if(char !== ' ')username.push(char);
                contentInput.text = username.join(' ')
            }
            
        });
    
        k.onKeyPress('backspace', ()=> {
            username.pop();
            contentInput.text = username.join(' ')
        });

        next++;

        return {blockInput,input,contentInput};
    }

    function selectYesOrNo() {
        const selectBox = content.add([
            k.text('_',{size: 75}),
            k.color(10,10,10),
            k.pos(25,55)
        ]);

        next++;

        return selectBox;
    }

    function eventsControlYesOrNO(selectBox) {
        k.onKeyPress('left', () => {
            if(selectYN === 0) {
                selectBox.move(-10000, 0);
                selectYN++;
            }
        });
    
        k.onKeyPress('right', () => {
            if(selectYN === 1) {
                selectBox.move(10000,0);
                selectYN--;
            } 
        });
    }

    function menuInfo() {
        const menuBox = k.add([
            k.rect(500, 200),
            k.outline(4),
            k.pos(10,10)
        ]);

        const menuContent = menuBox.add([
            k.text('Info. controles\n\nInfo. aventura\n\nNo necesito nada'),
            k.color(10,10,10),
            k.pos(90, 10)
        ]);

        const selectItemMenu = menuBox.add([
            k.text('→'),
            k.color(30,30,30),
            k.pos(30,10)
        ]);

        next ++;

        return {menuBox, menuContent, selectItemMenu};
    }

    function eventsSelectItemMenu(selectItemMenu) {
        k.onKeyPress('up', () => {
            if(select === 1 || select === 2) {
                selectItemMenu.move(0, -4250);
                select--;
            }
        });
    
        k.onKeyPress('down', () => {
            if(select === 0 || select === 1) {
                selectItemMenu.move(0,4250);
                select++;
            } 
        });
    }

    function drawArrowKey() {
        const boxUp = k.add([
            k.rect(40, 40),
            k.outline(4),
            k.pos(55, 15)
        ]);

        const boxLeft = k.add([
            k.rect(40, 40),
            k.outline(4),
            k.pos(10, 60)
        ]);

        const boxRight = k.add([
            k.rect(40, 40),
            k.outline(4),
            k.pos(100, 60)
        ]);

        const boxBottom = k.add([
            k.rect(40, 40),
            k.outline(4),
            k.pos(55, 60)
        ]);

        const arrowUp = boxUp.add([
            k.text('↑'),
            k.color(30,30,30),
            k.pos(10,10)
        ]);

        const arrowLeft = boxLeft.add([
            k.text('←'),
            k.color(30,30,30),
            k.pos(10,10)
        ]);

        const arrowRight = boxRight.add([
            k.text('→'),
            k.color(30,30,30),
            k.pos(10,10)
        ]);

        const arrowBottom = boxBottom.add([
            k.text('↓'),
            k.color(30,30,30),
            k.pos(10,10)
        ]);


        return {boxUp, boxLeft, boxRight, boxBottom, arrowUp, arrowLeft, arrowRight, arrowBottom};
    }

    function drawSpace() {
        const boxSpace = k.add([
            k.rect(160,40),
            k.outline(4),
            k.pos(10,200)
        ]);

        const lineSpace = boxSpace.add([
            k.text('______'),
            k.color(30,30,30),
            k.pos(20,0)
        ]);

        return {boxSpace, lineSpace};
    }

    function drawEsc() {
        const boxEsc = k.add([
            k.rect(40, 40),
            k.outline(4),
            k.pos(60, 320)
        ]);

        const contentEsc = boxEsc.add([
            k.text('Esc',{size:16}),
            k.color(30,30,30),
            k.pos(5,5)
        ]);

        return {boxEsc, contentEsc};
    }

    const box = k.add([
        k.rect(1276, 300),
        k.outline(4),
        k.pos(2, 530)
    ]);

    const content = box.add([
        k.text('Hola, hola.\n\nEncantado de conocerte.\n\n', {size: 42}),
        k.color(10,10,10),
        k.pos(20, 20)
    ]);

    let selectBox, inputUsername, destroySelectAndInput = true, menu, destroyMenu = true;
    let arrowsKeys, infoArrowsKeys, spaceKey, infoSpaceKey, escKey, infoEscKey, destroyInfoControll = true;
    let infoAdventure;

    function eventSpace() {
        if(next === 0) {
            content.text = 'Te doy la bienvenida a nuestra universidad.\n\nMi nombre es Prof. Gadd';
            next++;
        } else if(next === 1 || username.length === 0){
            content.text = 'Me podrias decir tu nombre ?\n\nPRESIONA "SPACE" PARA TERMINAR.';
            if(inputUsername === undefined ) inputUsername = initialInputUsername();
            else {
                const { blockInput, input, contentInput } = inputUsername;
                blockInput.hidden = false;
                input.hidden = false;
                contentInput.hidden = false;
                if(next === 1) next++;
            }
        } else if(next === 2){
            content.text = `${username.join('').toUpperCase()} es tu nombre ?\n\n\tSI\t\t\t\t\tNO`;
            const { blockInput, input, contentInput } = inputUsername;
            blockInput.hidden = true;
            input.hidden = true;
            contentInput.hidden = true;
            if(selectBox === undefined) {
                selectBox = selectYesOrNo();
                eventsControlYesOrNO(selectBox);
            } else {
                selectBox.hidden = false;
                next++;
            } 
        } else if(next === 3 && selectYN === 0) {
            inputUsername.contentInput.text = '';
            username = [];
            next = 1;
            selectBox.hidden = true;
            return eventSpace();
        } else if(next === 3 ) {
            if(destroySelectAndInput) {
                destroySelectAndInput = false;
                const { blockInput, input, contentInput } = inputUsername;
                blockInput.destroy();
                input.destroy();
                contentInput.destroy();
                selectBox.destroy();
            }
            content.text = `Ok ${username.join('').toUpperCase()}, esta es tu primera aventura ?\n\nSi necesitas un consejo, estoy a tu disposicion.`;
            if(menu === undefined) {
                menu = menuInfo();
                eventsSelectItemMenu(menu.selectItemMenu);
            } else {
                const {menuBox, menuContent, selectItemMenu} = menu;
                menuBox.hidden = false;
                menuContent.hidden = false;
                selectItemMenu.hidden = false;
                if(arrowsKeys !== undefined) {
                    const {boxUp, arrowUp, boxLeft, arrowLeft, boxRight, arrowRight, boxBottom, arrowBottom } = arrowsKeys;
                    boxUp.hidden = true;
                    arrowUp.hidden = true;
                    boxLeft.hidden = true;
                    arrowLeft.hidden = true;
                    boxRight.hidden = true;
                    arrowRight.hidden = true;
                    boxBottom.hidden = true;
                    arrowBottom.hidden = true;
                    infoArrowsKeys.hidden = true;
                    const { boxSpace, lineSpace } = spaceKey;
                    boxSpace.hidden = true;
                    lineSpace.hidden = true;
                    infoSpaceKey.hidden = true;
                    const {boxEsc, contentEsc} = escKey;
                    boxEsc.hidden = true;
                    contentEsc.hidden = true;
                    infoEscKey.hidden = true;
                }
                if(infoAdventure !== undefined) infoAdventure.hidden = true;
                next++;
            }
        } else if(next === 4) {
            const {menuBox, menuContent, selectItemMenu} = menu;
            menuBox.hidden = true;
            menuContent.hidden = true;
            selectItemMenu.hidden = true;
            content.text = 'Presiona "SPACE" para culminar.';
            next = 3;
            if(select === 0) {
                if(arrowsKeys === undefined) {
                    arrowsKeys = drawArrowKey();
                    infoArrowsKeys = k.add([
                        k.text('Mover protagonista de la historia. Seleccionar opciones.'),
                        k.pos(150, 30)
                    ]);
    
                    spaceKey = drawSpace();
                    infoSpaceKey = k.add([
                        k.text('Confirmar opciones y interactuar.'),
                        k.pos(200, 200)
                    ]);
    
                    escKey = drawEsc();
                    infoEscKey = k.add([
                        k.text('Abrir Opciones.'),
                        k.pos(160, 320)
                    ]);
                } else {
                    const {boxUp, arrowUp, boxLeft, arrowLeft, boxRight, arrowRight, boxBottom, arrowBottom } = arrowsKeys;
                    boxUp.hidden = false;
                    arrowUp.hidden = false;
                    boxLeft.hidden = false;
                    arrowLeft.hidden = false;
                    boxRight.hidden = false;
                    arrowRight.hidden = false;
                    boxBottom.hidden = false;
                    arrowBottom.hidden = false;
                    infoArrowsKeys.hidden = false;
                    const { boxSpace, lineSpace } = spaceKey;
                    boxSpace.hidden = false;
                    lineSpace.hidden = false;
                    infoSpaceKey.hidden = false;
                    const {boxEsc, contentEsc} = escKey;
                    boxEsc.hidden = false;
                    contentEsc.hidden = false;
                    infoEscKey.hidden = false;
                }
            } else if(select === 1) {
                if(infoAdventure === undefined) infoAdventure = k.add([
                    k.text(`Estas a punto de ingresar en una universidad.\n\nLlamada UGMA, esta universidad esta situada en Venezuela,\n\n`+
                            `Estado Bolivar, Ciudad Guayana, Puerto Ordaz.\n\nTu proposito es terminarla a lo mas rapido que puedas\n\n`+
                            `Por que la UC esta subiendo por minuto.\n\nRapido! Antes de que te endeudes.`),
                    k.pos(20, 20)
                ]);
                else  infoAdventure.hidden = false;
            } else {
                if(arrowsKeys !== undefined) {
                    const {boxUp, arrowUp, boxLeft, arrowLeft, boxRight, arrowRight, boxBottom, arrowBottom } = arrowsKeys;
                    boxUp.destroy();
                    arrowUp.destroy();
                    boxLeft.destroy();
                    arrowLeft.destroy();
                    boxRight.destroy();
                    arrowRight.destroy();
                    boxBottom.destroy();
                    arrowBottom.destroy();
                    infoArrowsKeys.destroy();
                    const { boxSpace, lineSpace } = spaceKey;
                    boxSpace.destroy();
                    lineSpace.destroy();
                    infoSpaceKey.destroy();
                    const {boxEsc, contentEsc} = escKey;
                    boxEsc.destroy();
                    contentEsc.destroy();
                    infoEscKey.destroy();
                }
                if(infoAdventure !== undefined) infoAdventure.destroy();
                k.go('universityCourtyard')
            }
        }
    }

    k.onKeyPress("space", eventSpace);
}