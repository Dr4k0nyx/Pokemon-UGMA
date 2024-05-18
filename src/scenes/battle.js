import { monsters } from '../battleComponent.js'

export default function setBattle(k,data) {

    /*Cargando Mons del jugador como el enemigo*/ 
    const { info } = data;
    let monsJ = [];
    let monsE = [];
    info[0].forEach(j => {
        monsJ.push(monsters[j]);
        monsJ[j].fainted = false;
    });
    info[1].forEach(e => {
        monsE.push(monsters[e]);
    });

    console.log(monsJ);
    console.log(monsE);

/*Anadiendo escenario*/ 
    k.add([
        k.sprite('battle-background'),
        k.scale(1.3),
        k.pos(0, 0)
    ]);

    const PlayerMon = [
        {
            name:monsJ[0].name,
            fainted:false
        }
    ];
    const EnemyMon = [
        {
            name:(monsE[1].name).toLowerCase(),
            fainted:false
        }
    ];
    
    let playerMon = k.add([
        k.sprite(PlayerMon[0].name),
        k.scale(1.7),
        k.pos(-100, 230),
        k.opacity(1)
    ]);
    
    k.tween(
        playerMon.pos.x,
        300,
        0.3,
        (val) => playerMon.pos.x = val
    );

    function viene(mon) {
        k.wait(0.3, () => {
            k.tween(
                mon.pos.y,
                230,
                0.3,
                (val) => mon.pos.y = val
            );
        });

        k.tween(
            mon.pos.y,
            800,
            0.5,
            (val) => mon.pos.y = val
        );
    }
    
    const playerMonHealthBox = k.add([
        k.rect(400, 100),
        k.outline(4),
        k.pos(1000, 400)
    ]);

    const nombreJugador = playerMonHealthBox.add([
        k.text(monsJ[0].name, { size: 32 }),
        k.color(10, 10, 10),
        k.pos(10, 10)
    ]);
    
    playerMonHealthBox.add([
        k.rect(370, 10),
        k.color(200, 200, 200),
        k.pos(15, 50)
    ]);
    
    const playerMonHealthBar = playerMonHealthBox.add([
        k.rect(370, 10),
        k.color(0, 200, 0),
        k.pos(15, 50)
    ]);
    
    k.tween(playerMonHealthBox.pos.x, 850, 0.3, (val) => playerMonHealthBox.pos.x = val);
    
    const enemyMon = k.add([
        k.sprite(EnemyMon[0].name),
        k.scale(1.5),
        k.pos(1300, 0),
        k.opacity(1),
    ]);
    enemyMon.flipX = true;

    k.tween(
        enemyMon.pos.x,
        1000,
        0.3,
        (val) => enemyMon.pos.x = val
    );
    
    const enemyMonHealthBox = k.add([
        k.rect(400, 100),
        k.outline(4),
        k.pos(-100, 50)
    ]);

    const nombreEnemigo = enemyMonHealthBox.add([
        k.text(EnemyMon[0].name, { size: 32 }),
        k.color(10, 10, 10),
        k.pos(10, 10)
    ]);

    enemyMonHealthBox.add([
        k.rect(370, 10),
        k.color(200, 200, 200),
        k.pos(15, 50)
    ]);

    let enemyMonHealthBar = enemyMonHealthBox.add([
        k.rect(370, 10),
        k.color(0, 200, 0),
        k.pos(15, 50)
    ]);

    function otraEntidad(box,flag){

        if (flag) {
            const playerMonHealthBar = box.add([
                k.rect(370, 10),
                k.color(0, 200, 0),
                k.pos(15, 50)
            ]);

            return playerMonHealthBar;
        }else{
            const enemyMonHealthBar = box.add([
                k.rect(370, 10),
                k.color(0, 200, 0),
                k.pos(15, 50)
            ]);
            
            return enemyMonHealthBar;
        }
        
    }



    k.tween(enemyMonHealthBox.pos.x, 100, 0.3, (val) => enemyMonHealthBox.pos.x = val);

    const box = k.add([
        k.rect(1300, 300),
        k.outline(4),
        k.pos(-2, 530)
    ]);

    const content = box.add([
        k.text('MARIPOSA is ready to battle!', { size: 42 }),
        k.color(10, 10, 10),
        k.pos(20, 20)
    ]);

    function reduceHealth(healthBar, damageDealt) {
        k.tween(
            healthBar.width,
            healthBar.width - damageDealt,
            0.5,
            (val) => {
                healthBar.width = val;
            }
        );
    }

    function makeMonFlash(mon) {
        k.tween(
            mon.opacity,
            0,
            0.3,
            (val) => {
                mon.opacity = val;
                if (mon.opacity === 0) {
                    mon.opacity = 1;
                }
            }
        );
    }
    
    function makeMonPunchPlayer(mon) {

        k.tween(
            mon.pos.x,
            400,
            0.2,
            (val) => {
                mon.pos.x = val;
                if (mon.pos.x === 400) {
                    k.tween(
                        mon.pos.x,
                        300,
                        0.2,
                        (val) => mon.pos.x = val
                    )
                }
            }
        );

    }

    function ataqueElementalEnemigo(mon) {

        k.tween(
            mon.pos.x,
            500,
            0.3,
            (val) => {
                mon.pos.x = val; // Actualizar la posición del objeto en cada paso de la animación
                k.tween(
                    mon.pos.y,
                    200,
                    0.1,
                    (val) => mon.pos.y = val
                )
            }

        );
    }

    function ataqueElementalPlayer(mon) {
        k.wait(0.4, () => {

            k.tween(
                mon.pos.x,
                300,
                0.4,
                (val) => {
                    mon.pos.x = val;
                    k.tween(
                        mon.pos.y,
                        300,
                        0.2,
                        (val) => mon.pos.y = val
                    )
                }
            )
        });
        k.tween(
            mon.pos.x,
            850,
            0.3,
            (val) => {
                mon.pos.x = val; // Actualizar la posición del objeto en cada paso de la animación
                k.tween(
                    mon.pos.y,
                    50,
                    0.1,
                    (val) => mon.pos.y = val
                );
            }
        );

    }


    function makeMonPunchEnemy(mon) {
        k.tween(
            mon.pos.x,
            900,
            0.2,
            (val) =>{
                mon.pos.x = val
                if (mon.pos.x === 900) {
                    k.tween(
                        mon.pos.x,
                        1000,
                        0.2,
                        (val) => mon.pos.x = val
                    )
                }
            }
        );

    }

    const ataques  = ['Tacleada','Zarpada','Golpe Sombra','Ala de hierro'];
    let selectAtaque;
    let phase = 'player-selection';
    k.onCharInput( (char) => {
        console.log(/^\d+$/.test(char));
        if (PlayerMon[0].fainted || EnemyMon[0].fainted) return;

        if (phase === 'player-selection') {
            content.text = 'Presiona un numero para elegir el ataque! \n\n 1)' + ataques[0] +  '        2)' + ataques[1] +  ' \n 3)' + ataques[2] +  '      4)' + ataques[3];
            selectAtaque = parseInt(char);
            phase = 'player-turn';
            if(!(/^\d+$/.test(char) && parseInt(char)>0 && parseInt(char)<5)) {
                console.log('No ha elegido un numero');
                phase = 'player-selection';
            }
            return;
        }
        if (char === 'a') {
            // nombreEnemigo.text = 'de jamon y queso';
            // enemyMonHealthBar = otraEntidad(enemyMonHealthBox);
            viene(playerMon);
        }

        if (phase === 'enemy-turn') {
            const ataqueEnemigo = Math.floor(Math.random() * 4);
            content.text = 'GAVILAN' + ' uso ' + ataques[ataqueEnemigo]+'!';
            const damageDealt = Math.random() * 100;
            console.log('enemigo: ' + damageDealt);
            if (damageDealt > 150) {
                content.text = "It's a critical hit!";
            }

            reduceHealth(playerMonHealthBar, damageDealt);
            makeMonFlash(playerMon);
            makeMonPunchEnemy(enemyMon);

            phase = 'player-selection';
            return;
        }

        if (phase === 'player-turn') {
            const damageDealt = Math.random() * 100;
            console.log('jugador: ' + damageDealt);

            if (damageDealt > 150) {
                content.text = "It's a critical hit!";
            } else {
                content.text = 'MARIPOSA uso '+ ataques[selectAtaque-1]+'!.';
            }
            if (char === '1' || char === '3') {
                makeMonPunchPlayer(playerMon);
            }else{
                ataqueElementalPlayer(playerMon);
            }

            reduceHealth(enemyMonHealthBar, damageDealt);
            makeMonFlash(enemyMon);

            phase = 'enemy-turn';
        }
    });



    function colorizeHealthBar(healthBar) {
        if (healthBar.width < 200) {
            healthBar.use(k.color(250, 150, 0));
        }

        if (healthBar.width < 100) {
            healthBar.use(k.color(200, 0, 0));
        }
    }

    function makeMonDrop(mon) {
        k.tween(
            mon.pos.y,
            800,
            0.5,
            (val) => mon.pos.y = val
        );
    }

    k.onUpdate(() => {
        colorizeHealthBar(playerMonHealthBar);
        colorizeHealthBar(enemyMonHealthBar);

        if (enemyMonHealthBar.width < 0 && !EnemyMon[0].fainted) {
            makeMonDrop(enemyMon);
            content.text = 'GAVILAN' + ' fainted!';
            EnemyMon[0].fainted = true;
            setTimeout(() => {
                content.text = 'MARIPOSA won the battle!';
            }, 1000);
            setTimeout(() => {
                // k.faintedMons.push(k.enemyName);
                k.go('world');
            }, 2000);
        }

        if (playerMonHealthBar.width < 0 && !PlayerMon[0].fainted) {
            makeMonDrop(playerMon);
            content.text = 'MARIPOSA fainted!';
            PlayerMon[0].fainted = true;
            setTimeout(() => {
                content.text = 'You rush to get MARIPOSA healed!';
            }, 1000);
            setTimeout(() => {
                // k.playerPos = vec2(500, 700);
                k.go('world');
            }, 2000);
        }
    });
}
