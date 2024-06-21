import { BaseGui } from "../BaseGui";
import { registerGui } from "../guiManager";
import settings from "../data/settings";
import { checkOnSkyblock } from "../util/skyblockFunctions";

let mana = "0/0";
let message = "";

const manaGui = new BaseGui(["manaGui"], () => {
	if (!manaGui.isOpen() && !settings().manaOverlay || !checkOnSkyblock()) return;

	return (`&b${mana}`)
})
registerGui(manaGui);

register("actionBar", (m, event) => {
	if (!settings().manaOverlay) return;

	cancel(event);
	mana = m;

	message = ChatLib.getChatMessage(event);

	message = message.replace(`${m}✎ Mana`, "");
	
	ChatLib.actionBar(message);
}).setCriteria("${*}     ${m}✎ Mana").setContains()