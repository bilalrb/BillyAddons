// Credit: Coleweight

let guis = [];
let guiNames = [];

export function registerGui(gui) {
	guis.push(gui);
	guiNames.push(gui.names[0]);
}

export default guis;

import "./features/msBoostAbilityGui";
import "./features/etherwarpHelperGui";
import "./features/flawlessTrackerGui";
import "./features/defenseGui";
import "./features/healthGui";
import "./features/manaGui";
import "./features/terminalCounterGui";
import "./features/missingTerminalsGui";
import "./features/completedTerminalsGui";