import globalStateManager from "./globalState.js";
import vivelibGlobalStateManager from "./vivelibGlobalState.js";

export const vivelibState = vivelibGlobalStateManager().getInstance();
export const gameState = globalStateManager().getInstance();
