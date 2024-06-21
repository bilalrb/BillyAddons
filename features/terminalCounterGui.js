import { BaseGui } from "../BaseGui";
import { registerGui } from "../guiManager";
import settings from "../data/settings";
import { getFloorSevenPhase, getGoldorPhase, getInFloorSevenBoss, getTerminalsActivated } from "../util/skyblockFunctions";

const terminalCounterGui = new BaseGui(["terminalCounterGui"], () => {
	if (!terminalCounterGui.isOpen() && !settings().terminalCounterOverlay) return;
	if (getFloorSevenPhase() != 3 || getGoldorPhase() == -1) return;

	if (getGoldorPhase() != 2)
		return `&b${getTerminalsActivated()}/7 &aTerminals activated`;
	else
		return `&b${getTerminalsActivated()}/8 &aTerminals activated`;
})
registerGui(terminalCounterGui);