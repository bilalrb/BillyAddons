import { BaseGui } from "../BaseGui";
import { registerGui } from "../guiManager";
import settings from "../data/settings";
import { checkOnSkyblock } from "../util/skyblockFunctions";

let health = "0/0";
let message = "";

const healthGui = new BaseGui(["healthGui"], () => {
	if (!healthGui.isOpen() && !settings().healthOverlay || !checkOnSkyblock()) return;

	minMaxHealth = health.split("/")

	if (minMaxHealth[0] > minMaxHealth[1])
		return (`&6${health}`);
	else
		return (`&c${health}`);
})
registerGui(healthGui);

register("actionBar", (hp, event) => {
	if (!settings().healthOverlay) return;

	cancel(event);
	health = hp;

	message = ChatLib.getChatMessage(event);

	const re = new RegExp(`§(?:c|6)${hp}❤`, "g")
	message = message.replace(re, "");
	
	ChatLib.actionBar(message);
}).setCriteria("${hp}❤").setContains()