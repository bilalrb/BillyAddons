import { BaseGui } from "../BaseGui";
import { registerGui } from "../guiManager";
import settings from "../data/settings";
import { checkOnSkyblock } from "../util/skyblockFunctions";

let defense = "0";
let message = "";

const defenseGui = new BaseGui(["defenseGui"], () => {
	if (!defenseGui.isOpen() && !settings().defenseOverlay || !checkOnSkyblock()) return;

	return (`&a${defense}`)
})
registerGui(defenseGui);

register("actionBar", (def, event) => {
	if (!settings().defenseOverlay) return;

	cancel(event);
	defense = def;

	message = ChatLib.getChatMessage(event);

	message = message.replace(`${def}§a❈ Defense`, "");

	ChatLib.actionBar(message);
}).setCriteria("     ${def}❈ Defense").setContains()