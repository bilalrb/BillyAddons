import { BaseGui } from "../BaseGui";
import { registerGui } from "../guiManager";
import settings from "../data/settings";
import { msBoostAbility } from "../util/notifiers";
import { checkDwarven, checkEnd, checkHollows } from "../util/skyblockFunctions";

const msBoostAbilityGui = new BaseGui(["msBoostAbilityGui"], () => {
	if (!msBoostAbilityGui.isOpen() && !settings().msBoostAbilityOverlay) return;

	const txt = "&6Mining Speed Boost:" 

	if (checkDwarven() || checkHollows() || checkEnd()) {
		if (msBoostAbility.ready) {
			return txt + " &aReady";
		} else {
			if (settings().msBoostAbilityOverlayCooldown) {
				return `${txt} &cNot Ready (${msBoostAbility.cooldown}s)`;
			}

			return txt + " &cNot Ready";
		}
	}
})
registerGui(msBoostAbilityGui);