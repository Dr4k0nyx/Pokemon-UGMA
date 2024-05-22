import globalStateManager from "./globalState.js";
import {
    vivelibGlobalStateManager,
     yeleniaGlobalStateManager
} from "./GlobalStates.js";

export const vivelibState = vivelibGlobalStateManager().getInstance();
export const yeleniaState = yeleniaGlobalStateManager().getInstance();
export const gameState = globalStateManager().getInstance();
