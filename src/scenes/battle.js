import { monsters } from '../battleComponent.js'

export default function setBattle(k,data) {

    if (!('nivel' in localStorage)){
        localStorage.setItem('nivel',1);
    }
    if (!('exp' in localStorage)){
        localStorage.setItem('exp',0);
    }

    let spawn = localStorage.getItem('spawn');

    let nivel = localStorage.getItem('nivel');
    let exp = localStorage.getItem('exp');

    console.log(nivel);

    /*Cargando Mons del jugador como el enemigo*/ 
    const { info } = data;
    let monsJ = [];
    let monsE = [];
    info[0].forEach(j => {
        let monster = monsters[j];
        monster.fainted = false;
        monsJ.push(monster);
    });
    info[1].forEach(e => {
        let monster = monsters[e];
        monster.fainted = false;
        monsE.push(monster);
    });
    let pmon = monsJ[0];
    let emon = monsE[0];

    console.log(pmon);

    let pi = 0;
    let pe = 0;

    console.log('este es el nivel actual del Juagdor: ' + nivel);

/*Anadiendo escenario*/ 
    k.add([
        k.sprite('battle-background'),
        k.scale(1.3),
        k.pos(0, 0)
    ]);
    
    let playerMon = k.add([
        k.sprite(pmon.name),
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

    function viene(name,flag) {
        if (flag) {
            nombreJugador.text = pmon.name;
            playerMon = k.add([
                k.sprite(name),
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
            k.wait(2,()=>{
                content.text = pmon.name + ' entro al campo de batalla!'
            });
        }else{
            nombreEnemigo.text = name;
            enemyMon = k.add([
                k.sprite(name.toLowerCase()),
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
            setTimeout(() => {
                content.text = emon.name + ' entro al campo de batalla!'
            }, 2000);
            // k.wait(2,()=>{
            //     content.text = emon.name + ' entro al campo de batalla!'
            // });
        }
    }
    
    const playerMonHealthBox = k.add([
        k.rect(400, 100),
        k.outline(4),
        k.pos(1000, 400)
    ]);

    const nombreJugador = playerMonHealthBox.add([
        k.text(pmon.name, { size: 32 }),
        k.color(10, 10, 10),
        k.pos(10, 10)
    ]);

    const statsJugador = playerMonHealthBox.add([
        k.text('lv:'+nivel, { size: 20 }),
        k.color(10, 10, 10),
        k.pos(320, 20)
    ]);

    
    playerMonHealthBox.add([
        k.rect(370, 10),
        k.color(200, 200, 200),
        k.pos(15, 50)
    ]);
    
    let playerMonHealthBar = playerMonHealthBox.add([
        k.rect(370, 10),
        k.color(0, 200, 0),
        k.pos(15, 50)
    ]);
    
    k.tween(playerMonHealthBox.pos.x, 850, 0.3, (val) => playerMonHealthBox.pos.x = val);
    
    let enemyMon = k.add([
        k.sprite(emon.name.toLowerCase()),
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
        k.text(emon.name, { size: 32 }),
        k.color(10, 10, 10),
        k.pos(10, 10)
    ]);

    const statsEnemigo = enemyMonHealthBox.add([
        k.text('lv:'+1, { size: 20 }),
        k.color(10, 10, 10),
        k.pos(320, 20)
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
        k.text( pmon.name + ' esta listo para la batalla!', { size: 42 }),
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

    function ataqueEspecialEnemigo(mon) {

        k.wait(0.4, () =>{
            k.tween(
                mon.pos.x,
                1000,
                0.4,
                (val) => {
                    mon.pos.x = val;
                    k.tween(
                        mon.pos.y,
                        0,
                        0.2,
                        (val) => mon.pos.y = val
                    )
                }
            )

        });
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

    function ataqueElementalEnemy(nameAttack) {
        const ataque = k.add([
            k.sprite(nameAttack),
            k.scale(1.5),
            k.pos(1000, 0),
            k.opacity(1),
        ]);

        k.tween(
            ataque.pos.x,
            450,
            0.3,
            (val) => {
                ataque.pos.x = val; // Actualizar la posición del objeto en cada paso de la animación
                k.tween(
                    ataque.pos.y,
                    200,
                    0.1,
                    (val) => {
                        ataque.pos.y = val
                        k.tween(
                            ataque.opacity,
                            0,
                            0.6,
                            (val) => ataque.opacity = val
                        )
                    }
                )
            }

        );


    }

    function ataqueElementalPlayer(nameAttack) {
        const ataque = k.add([
            k.sprite(nameAttack),
            k.scale(1.5),
            k.pos(300, 300),
            k.opacity(1),
        ]);

        k.tween(
            ataque.pos.x,
            850,
            0.3,
            (val) => {
                ataque.pos.x = val; // Actualizar la posición del objeto en cada paso de la animación
                k.tween(
                    ataque.pos.y,
                    50,
                    0.1,
                    (val) => {
                        ataque.pos.y = val
                        k.tween(
                            ataque.opacity,
                            0,
                            0.6,
                            (val) => ataque.opacity = val
                        )

                    }
                );
            }
        );
    }

    function ataqueEspecialPlayer(mon) {
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
    let cancion = true;
    let selectAtaque;
    let phase = 'player-selection';
    let sonido;
    k.onCharInput( (char) => {
        if (cancion) {
            sonido = k.play("battle",{
                volume:0.5,
                loop:true
            });
            cancion = false;
        }
        console.log(/^\d+$/.test(char));
        if (pmon.fainted || emon.fainted) return;

        if (phase === 'player-selection') {
            content.text = 'Presiona un numero para elegir el ataque! \n\n 1)' + pmon.attacks[0] +  '        2)' + pmon.attacks[1] +  ' \n 3)' + pmon.attacks[2] +  '      4)' + pmon.attacks[3];
            selectAtaque = parseInt(char);
            phase = 'player-turn';
            if(!(/^\d+$/.test(char) && parseInt(char)>0 && parseInt(char)<5)) {
                console.log('No ha elegido un numero');
                phase = 'player-selection';
            }
            return;
        }
        if (char === 'a') {
            //playerMonHealthBar = otraEntidad(playerMonHealthBox); 
            enemyMonHealthBar = otraEntidad(enemyMonHealthBox);

        }

        if (phase === 'enemy-turn') {
            const ataqueEnemigo = Math.floor(Math.random() * 4);
            let damageDealt = 1;
            switch (ataqueEnemigo) {
                case 0:
                    damageDealt = Math.floor(Math.random() * 11) + 5;
                    makeMonPunchEnemy(enemyMon);
                    k.play("sonido1");
                break;
                case 1:
                    damageDealt = Math.floor(Math.random() * 11) + 15;
                    ataqueElementalEnemy(emon.ataqueElemental)
                    k.play("sonido2");
                break;
                case 2:
                    damageDealt = Math.floor(Math.random() * 11) + (10);
                    ataqueEspecialEnemigo(enemyMon);
                    k.play("sonido3");
                break;
                case 3:
                    damageDealt = Math.floor(Math.random() * 11) + 15;
                    makeMonPunchEnemy(enemyMon);
                    k.play("sonido4");
                break;
            }
            content.text = emon.name + ' uso ' + emon.attacks[ataqueEnemigo]+'!';
            console.log('enemigo: ' + damageDealt);
            console.log(ataqueEnemigo);
            if (damageDealt > 150) {
                content.text = "Ha dado un golpe critico!";
            }

            reduceHealth(playerMonHealthBar, damageDealt);
            makeMonFlash(playerMon);

            phase = 'player-selection';
            return;
        }

        if (phase === 'player-turn') {
            let damageDealt = 0;
            switch (char) {
                case '1':
                    damageDealt = Math.floor(Math.random() * 11) + nivel*5;
                    makeMonPunchPlayer(playerMon);
                    k.play("sonido1");
                break;
                case '2':
                    damageDealt = Math.floor(Math.random() * 11) + nivel*7;
                    ataqueElementalPlayer(pmon.ataqueElemental);
                    k.play("sonido2");
                break;
                case '3':
                    damageDealt = Math.floor(Math.random() * 11) + nivel*5;
                    ataqueEspecialPlayer(playerMon);
                    k.play("sonido3");
                break;
                case '4':
                    damageDealt = Math.floor(Math.random() * 11) + nivel*7;
                    makeMonPunchPlayer(playerMon);
                    k.play("sonido4");
                break;
            }
            console.log('jugador: ' + damageDealt);

            if (damageDealt > 150) {
                content.text = "Ha dado un golpe critico!";
            } else {
                content.text = pmon.name + ' uso '+ pmon.attacks[selectAtaque-1]+'!.';
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

        if (enemyMonHealthBar.width < 0 && !emon.fainted) {
            makeMonDrop(enemyMon);
            content.text = emon.name + ' fainted!';
            emon.fainted = true;
            if (pe < monsE.length-1 && emon.fainted === true) {
                pe++;
                emon = monsE[pe];                
                content.text = monsE[pe-1].name + ' No puede seguir mas!';
                viene(emon.name,false);
                enemyMonHealthBar = otraEntidad(enemyMonHealthBox); 
            }else{
                setTimeout(() => {
                    content.text = emon.name + ' won the battle!';
                }, 1000);
                setTimeout(() => {
                    k.go(spawn);
                    if (exp === '3') {
                        localStorage.setItem('exp',0)
                        nivel++;
                        localStorage.setItem('nivel',nivel);
                    }else{
                        exp++;
                        localStorage.setItem('exp',exp)
                    }

                    sonido.paused = true;
                }, 2000);
            }
        }

        if (playerMonHealthBar.width < 0 && !pmon.fainted) {
            makeMonDrop(playerMon);
            pmon.fainted = true;
            if (pi < monsJ.length-1 && pmon.fainted === true) {
                pi++;
                pmon = monsJ[pi];                
                content.text = monsJ[pi-1].name + ' No puede seguir mas!';
                viene(pmon.name,true);
                playerMonHealthBar = otraEntidad(playerMonHealthBox); 
            }else{
                setTimeout(() => {
                    content.text = 'Tu equipo ha pedido vida, vuelvelo a intentar!';
                }, 1000);
                setTimeout(() => {
                    k.go(spawn);
                    sonido.paused = true;
                }, 2000);
            }
        }
    });
}
