import { BaseGui } from "../BaseGui";
import { registerGui } from "../guiManager";
import settings from "../data/settings";
import { checkHollows, raytraceBlock } from "../util/skyblockFunctions";

const etherwarpHelperGui = new BaseGui(["etherwarpHelperGui"], () => {
	if (!etherwarpHelperGui.isOpen() && !settings().etherwarpHelperOverlay) return;

	const txt = "&5Etherwarp: ";

	if (!checkHollows()) return
	if (!Player.getHeldItem()) return txt + "&cNO";

	if (Player.isSneaking()) {
		if (!Player.getHeldItem().getName().removeFormatting().includes("Aspect of the Void")) return txt + "&cNO";

		let block = raytraceBlock(61);
		if (block.toString().removeFormatting().includes("cobblestone") && block.type.getID() == 4) {
			return txt + "&aYES";
		}	
	}
	
	return txt + "&cNO";
})
registerGui(etherwarpHelperGui);