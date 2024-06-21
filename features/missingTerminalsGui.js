import { BaseGui } from "../BaseGui";
import { registerGui } from "../guiManager";
import settings from "../data/settings";
import { getFloorSevenPhase, getTerminalsRemaining, getDevicesRemaining, getLeversRemaining, getGoldorPhase, getInFloorSevenBoss } from "../util/skyblockFunctions";

const missingTerminalsGui = new BaseGui(["missingTerminalsGui"], () => {
	if (!missingTerminalsGui.isOpen() && !settings().missingTerminalsOverlay) return;
	if (getFloorSevenPhase() != 3 || getGoldorPhase() == -1) return;

	if (settings().compactMissingTerminalsOverlay)
		return `&cMISSING TERMINALS: &b${getTerminalsRemaining()}t, ${getDevicesRemaining()}d, ${getLeversRemaining()}l`;
	else
		return `&cMISSING TERMINALS: &b${getTerminalsRemaining()}x terminals, ${getDevicesRemaining()}x device, ${getLeversRemaining()}x levers`;
})
registerGui(missingTerminalsGui);