import { BaseGui } from "../BaseGui";
import { registerGui } from "../guiManager";
import settings from "../data/settings";
import { getFloorSevenPhase, getGoldorPhase, getTerminalsRemaining, getDevicesRemaining, getLeversRemaining, getInFloorSevenBoss } from "../util/skyblockFunctions";

const completedTerminalsGui = new BaseGui(["completedTerminalsGui"], () => {
	if (!completedTerminalsGui.isOpen() && !settings().completedTerminalsOverlay) return;
	if (getFloorSevenPhase() != 3 || getGoldorPhase() == -1) return;

	let totalTerminals;

	if (getGoldorPhase() != 2)
		totalTerminals = 4;
	else
		totalTerminals = 5;

	if (settings().compactCompletedTerminalsOverlay)
		return `&aCOMPLETED TERMINALS: &b${(totalTerminals) - getTerminalsRemaining()}t, ${1 - getDevicesRemaining()}d, ${2 - getLeversRemaining()}l`;
	else
		return `&aCOMPLETED TERMINALS: &b${(totalTerminals) - getTerminalsRemaining()}x terminals, ${1 - getDevicesRemaining()}x device, ${2 - getLeversRemaining()}x levers`;
})
registerGui(completedTerminalsGui);