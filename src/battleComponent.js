
const tipos = [
    {
        name:"Fuego",
        debilidad: ["Agua"],
        ataqueElemental: "fuego"
    },
    {
        name:"Normal",
        debilidad: [],
        ataqueElemental: "arcoiris"
    },
    {
        name:"Tierra",
        debilidad: ["Agua", "Planta"],
        ataqueElemental: "piedra"
    },
    {
        name:"Agua",
        debilidad: ["Planta"],
        ataqueElemental: "diamante"
    },
    {
        name:"Dragon",
        debilidad: ["Dragón"],
        ataqueElemental: "pentagrama"
    },
    {
        name:"Veneno",
        debilidad: ["Tierra"],
        ataqueElemental: "veneno"
    },
    {
        name:"Volador",
        debilidad: [],
        ataqueElemental: "aire"
    },
    {
        name:"Planta",
        debilidad: ["Fuego", "Veneno", "Volador"],
        ataqueElemental: "raices"
    },
];

export const monsters = [
    {
        name: "Gorgozaur",
        type: tipos[0].name,
        ataqueElemental: tipos[0].ataqueElemental,
        weaknesses: tipos[0].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Garra Sombra", "Tormenta de Hojas"]
    },
    {
        name: "Flamethrower",
        type: tipos[1].name,
        ataqueElemental: tipos[1].ataqueElemental,
        weaknesses: tipos[1].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Colmillo Ígneo", "Lluvia Ácida"]
    },
    {
        name: "Shadowmancer",
        type: tipos[2].name,
        weaknesses: tipos[2].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Puño Trueno", "Viento Cortante"]
    },
    {
        name: "Frostfang",
        type: tipos[3].name,
        ataqueElemental: tipos[2].ataqueElemental,
        weaknesses: tipos[3].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Aqua Jet", "Rayo Solar"]
    },
    {
        name: "Lavaspitter",
        type: tipos[4].name,
        ataqueElemental: tipos[4].ataqueElemental,
        weaknesses: tipos[4].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Golpe Aéreo", "Terremoto"]
    },
    {
        name: "Cragbeast",
        type: tipos[5].name,
        ataqueElemental: tipos[5].ataqueElemental,
        weaknesses: tipos[5].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Lanza Rocas", "Bola Sombra"]
    },
    {
        name: "Netherdrake",
        type: tipos[6].name,
        ataqueElemental: tipos[6].ataqueElemental,
        weaknesses: tipos[6].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Cuchillada", "Explosión"]
    },
    {
        name: "Stormclaw",
        type: tipos[7].name,
        ataqueElemental: tipos[7].ataqueElemental,
        weaknesses: tipos[7].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Llama Azul", "Danza Espada"]
    },
    {
        name: "Venomtail",
        type: tipos[0].name,
        ataqueElemental: tipos[0].ataqueElemental,
        weaknesses: tipos[0].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Onda Trueno", "Hidrobomba"]
    },
    {
        name: "Blightstalker",
        type: tipos[1],
        attacks: ["Tacleada", "Ataque Elemental", "Viento Plateado", "Megapuño"]
    },
    {
        name: "Dreadfang",
        type: tipos[2].name,
        weaknesses: tipos[2].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Latigazo", "Avalancha"]
    },
    {
        name: "Rumblehorn",
        type: tipos[3].name,
        ataqueElemental: tipos[2].ataqueElemental,
        weaknesses: tipos[3].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Ráfaga Venenosa", "Beso Drenaje"]
    },
    {
        name: "Gloombringer",
        type: tipos[4].name,
        ataqueElemental: tipos[4].ataqueElemental,
        weaknesses: tipos[4].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Roca Afilada", "Ataque Arena"]
    },
    {
        name: "Thundertusk",
        type: tipos[5].name,
        ataqueElemental: tipos[5].ataqueElemental,
        weaknesses: tipos[5].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Puño Bala", "Hidrochorro"]
    },
    {
        name: "Boulderback",
        type: tipos[6].name,
        ataqueElemental: tipos[6].ataqueElemental,
        weaknesses: tipos[6].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Látigo Cepa", "Aro de Luz"]
    },
    {
        name: "Spectral",
        type: tipos[7].name,
        ataqueElemental: tipos[7].ataqueElemental,
        weaknesses: tipos[7].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Mordida", "Arañazo"]
    },
    {
        name: "Cinderghoul",
        type: tipos[0].name,
        ataqueElemental: tipos[0].ataqueElemental,
        weaknesses: tipos[0].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Chispa", "Burbuja"]
    },
    {
        name: "Glaciermaw",
        type: tipos[1],
        attacks: ["Tacleada", "Ataque Elemental", "Vendaval", "Viento Hielo"]
    },
    {
        name: "Ironshell",
        type: tipos[1].name,
        ataqueElemental: tipos[1].ataqueElemental,
        weaknesses: tipos[1].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Gruñido", "Mordisco"]
    },
    {
        name: "Quakebeast",
        type: tipos[3].name,
        ataqueElemental: tipos[2].ataqueElemental,
        weaknesses: tipos[3].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Latigazo", "Golpe Cuerpo"]
    },
    {
        name: "Vortex",
        type: tipos[4].name,
        ataqueElemental: tipos[4].ataqueElemental,
        weaknesses: tipos[4].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Colmillo Veneno", "Doble Patada"]
    },
    {
        name: "Nightscale",
        type: tipos[5].name,
        ataqueElemental: tipos[5].ataqueElemental,
        weaknesses: tipos[5].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Golpe Cabeza", "Confusión"]
    },
    {
        name: "Galewing",
        type: tipos[6].name,
        ataqueElemental: tipos[6].ataqueElemental,
        weaknesses: tipos[6].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Picotazo", "Danza Aleteo"]
    },
    {
        name: "Pyroclast",
        type: tipos[7].name,
        ataqueElemental: tipos[7].ataqueElemental,
        weaknesses: tipos[7].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Desenrollar", "Giro Fuego"]
    },
    {
        name: "Terrorclaw",
        type: tipos[0].name,
        ataqueElemental: tipos[0].ataqueElemental,
        weaknesses: tipos[0].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Golpe Aéreo", "Puño Fuego"]
    },
    {
        name: "Abyssal Leviathan",
        type: tipos[1],
        attacks: ["Tacleada", "Ataque Elemental", "Golpe Bajo", "Cabezazo"]
    },
    {
        name: "Eclipse",
        type: tipos[2].name,
        weaknesses: tipos[2].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Placaje", "Pisotón"]
    },
    {
        name: "Razorquill",
        type: tipos[3].name,
        ataqueElemental: tipos[2].ataqueElemental,
        weaknesses: tipos[3].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Lanzarrocas", "Poder Oculto"]
    },
    {
        name: "Inferno",
        type: tipos[4].name,
        ataqueElemental: tipos[4].ataqueElemental,
        weaknesses: tipos[4].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Patada Baja", "Doble Filo"]
    },
    {
        name: "Tempest",
        type: tipos[5].name,
        ataqueElemental: tipos[5].ataqueElemental,
        weaknesses: tipos[5].debilidad,
        attacks: ["Tacleada", "Ataque Elemental", "Cabezazo", "Picotazo Venenoso"]
    }
];