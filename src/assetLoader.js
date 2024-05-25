import k from "./kaboomContext.js";
export function loadAssets() {

    let ruta      = './assets/Battle/Pokemons/';
    k.loadSprite('battle-background', './assets/Battle/battleBackground.png');
    k.loadSprite("mariposa",     ruta   +   'mariposa.png');
    k.loadSprite("gavilan",      ruta   +   'gavilan.png' );
    k.loadSprite("Gorgozaur",    ruta   +   '003b.png'    );
    k.loadSprite("gorgozaur",    ruta   +   '003.png'     );
    k.loadSprite("Flamethrower", ruta   +   '006b.png'    );
    k.loadSprite("flamethrower", ruta   +   '006.png'     );
    k.loadSprite("Shadowmancer", ruta   +   '012b.png'    );
    k.loadSprite("shadowmancer", ruta   +   '012.png'     );
    k.loadSprite("Frostfang",    ruta   +   '016b.png'    );
    k.loadSprite("frostfang",    ruta   +   '016.png'     );
    k.loadSprite("Lavaspitter",  ruta   +   '018b.png'    );
    k.loadSprite("lavaspitter",  ruta   +   '018.png'     );
    k.loadSprite("Cragbeast",    ruta   +   '022sb.png'   );
    k.loadSprite("cragbeast",    ruta   +   '022s.png'    );
    k.loadSprite("Netherdrake",  ruta   +   '026sb.png'   );
    k.loadSprite("netherdrake",  ruta   +   '026s.png'    );
    k.loadSprite("Stormclaw",    ruta   +   '028sb.png'   );
    k.loadSprite("stormclaw",    ruta   +   '028s.png'    );
    k.loadSprite("Venomtail",    ruta   +   '029b.png'    );
    k.loadSprite("venomtail",    ruta   +   '029.png'     );
    k.loadSprite("Blightstalker",ruta   +   '031sb.png'   );
    k.loadSprite("blightstalker",ruta   +   '031s.png'    );
    k.loadSprite("Dreadfang",    ruta   +   '042b.png'    );
    k.loadSprite("dreadfang",    ruta   +   '042.png'     );
    k.loadSprite("Rumblehorn",   ruta   +   '044b.png'    );
    k.loadSprite("rumblehorn",   ruta   +   '044.png'     );
    k.loadSprite("Gloombringer", ruta   +   '058b.png'    );
    k.loadSprite("gloombringer", ruta   +   '058.png'     );
    k.loadSprite("Thundertusk",  ruta   +   '066b.png'    );
    k.loadSprite("thundertusk",  ruta   +   '066.png'     );
    k.loadSprite("Boulderback",  ruta   +   '077b.png'    );
    k.loadSprite("boulderback",  ruta   +   '077.png'     );
    k.loadSprite("Spectral",     ruta   +   '080b.png'    );
    k.loadSprite("spectral",     ruta   +   '080.png'     );
    k.loadSprite("Cinderghoul",  ruta   +   '093sb_1.png' );
    k.loadSprite("cinderghoul",  ruta   +   '093s_1.png'  );
    k.loadSprite("Glaciermaw",   ruta   +   '095b.png'    );
    k.loadSprite("glaciermaw",   ruta   +   '095.png'     );
    k.loadSprite("Ironshell",    ruta   +   '109sb.png'   );
    k.loadSprite("ironshell",    ruta   +   '109s.png'    );
    k.loadSprite("Quakebeast",   ruta   +   '112b.png'    );
    k.loadSprite("quakebeast",   ruta   +   '112.png'     );
    k.loadSprite("Vortex",       ruta   +   '117b.png'    );
    k.loadSprite("vortex",       ruta   +   '117.png'     );
    k.loadSprite("Nightscale",   ruta   +   '120sb.png'   );
    k.loadSprite("nightscale",   ruta   +   '120s.png'    );
    k.loadSprite("Galewing",     ruta   +   '126b.png'    );
    k.loadSprite("galewing",     ruta   +   '126.png'     );
    k.loadSprite("Pyroclast",    ruta   +   '129b.png'    );
    k.loadSprite("pyroclast",    ruta   +   '129.png'     );
    k.loadSprite("Terrorclaw",   ruta   +   '141sb.png'   );
    k.loadSprite("terrorclaw",   ruta   +   '141s.png'    );
    k.loadSprite("Abyssal",      ruta   +   '157b.png'    );
    k.loadSprite("abyssal",      ruta   +   '157.png'     );
    k.loadSprite("Eclipse",      ruta   +   '163b_1.png'  );
    k.loadSprite("eclipse",      ruta   +   '163_1.png'   );
    k.loadSprite("Razorquill",   ruta   +   '164b.png'    );
    k.loadSprite("razorquill",   ruta   +   '164.png'     );
    k.loadSprite("Inferno",      ruta   +   '184sb.png'   );
    k.loadSprite("inferno",      ruta   +   '184s.png'    );
    
    k.loadSprite("logo", "./assets/UGMA-QUEST.png");

    k.loadSprite("assets", "./assets/tiles.png", {
        sliceX: 10,
        sliceY: 13,
    });

    k.loadSprite("shop", "./assets/tienda.png", {
      sliceX: 10,
      sliceY: 12,
    });
    
    k.loadSprite("player1", "./assets/newCharacter.png", {
        sliceX: 4,
        sliceY: 4,
        anims: {
            "player-idle-down": 0,
            "player-down": {
              from: 0,
              to: 3,
              loop: true,
            },
            "player-idle-side": 8,
            "player-side": {
              from: 8,
              to: 11,
              loop: true,
            },
            "player-idle-up": 12,
            "player-up": {
              from: 12,
              to: 15,
              loop: true,
            },
        },
    });
    

    k.loadSprite("vivelib", "./assets/vivelib.png", {
      sliceX: 4,
      sliceY: 4,

      anims: {
        "vivelib-down": 0,
        "vivelib-side": 4,
        "vivelib-up": 12,
      }
    });

    k.loadSprite("alonso", "./assets/Alonso.png", {
      sliceX: 4,
      sliceY: 4,

      anims: {
        "alonso-down": 0,
        "alonso-side": 4,
        "alonso-up": 12,
      }
    });

    k.loadSprite("thays", "./assets/Thays.png", {
      sliceX: 4,
      sliceY: 4,

      anims: {
        "thays-down": 0,
        "thays-side": 4,
        "thays-up": 12,
      }
    });

    k.loadSprite("yelenia", "./assets/Yelenia.png", {
      sliceX: 4,
      sliceY: 4,

      anims: {
        "yelenia-down": 0,
        "yelenia-side": 4,
        "yelenia-up": 12,
      }
    });

    k.loadSprite("luis", "./assets/Luis.png", {
      sliceX: 4,
      sliceY: 4,

      anims: {
        "luis-down": 0,
        "luis-side": 4,
        "luis-up": 12,
      }
    });

    k.loadSprite("yumilva", "./assets/Yumilva.png", {
      sliceX: 4,
      sliceY: 4,

      anims: {
        "yumilba-down": 0,
        "yumilba-side": 4,
        "yumilba-up": 12,
      }
    });

    k.loadSprite("vicenzo", "./assets/Vicenzo.png", {
      sliceX: 4,
      sliceY: 4,

      anims: {
        "vicenzo-down": 0,
        "vicenzo-side": 4,
        "vicenzo-up": 12,
      }
    });
    
    k.loadSprite("class", "./assets/tilesSalonAbajo.png", {
      sliceX: 7,
      sliceY: 8,
    });
    
    k.loadSprite("yard", "./assets/patio.png", {
      sliceX: 8,
      sliceY: 27,
    });
    

    ruta = './assets/Battle/animations/'
    /*Cargando sprites de ataques*/ 
    k.loadSprite("aire",         ruta   +   'aire.png'       );
    k.loadSprite("pentagrama",   ruta   +   'pentagrama.png' );
    k.loadSprite("raices",       ruta   +   'raices.png'     );
    k.loadSprite("arcoiris",     ruta   +   'arcoiris.png'   );
    k.loadSprite("diamante",     ruta   +   'diamante.png'   );
    k.loadSprite("veneno",       ruta   +   'veneno.png'     );
    k.loadSprite("rayitos",      ruta   +   'rayitos.png'    );
    k.loadSprite("piedra",       ruta   +   'piedra.png'     );

    /*Tema de batalla */
    k.loadSound("battle", "src/mp3/battle.mp3");
    k.loadSound('battleBoss', 'src/mp3/battleBoss.mp3');
    k.loadSound("sonido1", "src/mp3/sonido1.wav");
    k.loadSound("sonido2", "src/mp3/sonido2.mp3");
    k.loadSound("sonido3", "src/mp3/sonido3.mp3");
    k.loadSound("sonido4", "src/mp3/sonido4.wav");

    k.loadSound('tutorial', "src/mp3/tutorial.mp3");
    k.loadSound('patio', 'src/mp3/patio.mp3');
    k.loadSound('groundFloor', 'src/mp3/groundFloor.mp3');
    k.loadSound('firstFloor', 'src/mp3/firstFloor.mp3');
    k.loadSound('market', "src/mp3/market.mp3");
    k.loadSound('classroom', 'src/mp3/classroom.mp3');
}