import kaboom from "../lib/kaboom.mjs";

const k = kaboom({
    width: 1280,
    height: 720,
    scale: window.innerWidth / 1500,
    letterbox: true,
    global: false
});

export default k;