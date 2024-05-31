import globalStateManager from "./globalState.js";
import {
    vivelibGlobalStateManager,
    yeleniaGlobalStateManager,
    alonsoGlobalStateManager,
    luisGlobalStateManager,
    thaysGlobalStateManager,
    yumilvaGlobalStateManager,
    vicenzoGlobalStateManager,
    chavezGlobalStateManager,
    npc1GlobalStateManager,
    npc2GlobalStateManager,
    npc3GlobalStateManager,
    npc4GlobalStateManager,
    npc5GlobalStateManager,
    npc6GlobalStateManager,
    npc7GlobalStateManager,
    npc8GlobalStateManager,
    npc9GlobalStateManager,
    npc10GlobalStateManager,
} from "./GlobalStates.js";

export const chavezState = chavezGlobalStateManager().getInstance();
export const vivelibState = vivelibGlobalStateManager().getInstance();
export const alonsoState = alonsoGlobalStateManager().getInstance();
export const thaysState = thaysGlobalStateManager().getInstance();
export const yeleniaState = yeleniaGlobalStateManager().getInstance();
export const luisState = luisGlobalStateManager().getInstance();
export const yumilvaState = yumilvaGlobalStateManager().getInstance();
export const vicenzoState = vicenzoGlobalStateManager().getInstance();
export const npc1State = npc1GlobalStateManager().getInstance();
export const npc2State = npc2GlobalStateManager().getInstance();
export const npc3State = npc3GlobalStateManager().getInstance();
export const npc4State = npc4GlobalStateManager().getInstance();
export const npc5State = npc5GlobalStateManager().getInstance();
export const npc6State = npc6GlobalStateManager().getInstance();
export const npc7State = npc7GlobalStateManager().getInstance();
export const npc8State = npc8GlobalStateManager().getInstance();
export const npc9State = npc9GlobalStateManager().getInstance();
export const npc10State = npc10GlobalStateManager().getInstance();

export const gameState = globalStateManager().getInstance();
