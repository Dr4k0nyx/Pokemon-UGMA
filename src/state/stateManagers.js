import globalStateManager from "./globalState.js";
import {
    vivelibGlobalStateManager,
    yeleniaGlobalStateManager,
    alonsoGlobalStateManager,
    luisGlobalStateManager,
    thaysGlobalStateManager,
    yumilvaGlobalStateManager,
    vicenzoGlobalStateManager
} from "./GlobalStates.js";

export const vivelibState = vivelibGlobalStateManager().getInstance();
export const alonsoState = alonsoGlobalStateManager().getInstance();
export const thaysState = thaysGlobalStateManager().getInstance();
export const yeleniaState = yeleniaGlobalStateManager().getInstance();
export const luisState = luisGlobalStateManager().getInstance();
export const yumilvaState = yumilvaGlobalStateManager().getInstance();
export const vicenzoState = vicenzoGlobalStateManager().getInstance();

export const gameState = globalStateManager().getInstance();
