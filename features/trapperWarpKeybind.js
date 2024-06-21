import settings from "../data/settings";
import constants from "../util/constants";

let warps = ["trapper", "desert"];
let warpLocation;
let activeQuest = false;

const keyBind = new KeyBind("Trevor The Trapper Warp Keybind", Keyboard.KEY_NONE, "BillyAddons")

keyBind.registerKeyPress(() => {
	if (!settings().trapperWarpKeybind) return;

	if (!activeQuest)
		warpLocation = warps[0]
	ChatLib.command("warp " + warpLocation);
})

register("chat", (zone) => {
	activeQuest = true;

	setTimeout(() => {
		activeQuest = false;
	}, 600000)

	if (zone.includes("Mushroom"))
		warpLocation = warps[0];
	else if (zone.includes("Desert") || zone.includes("Oasis"))
		warpLocation = warps[1];

	if (settings().trapperWarpKeybind) 
		ChatLib.chat(`${constants.PREFIX} &aPress ${Keyboard.getKeyName(keyBind.getKeyCode())} to warp to closest area to animal.`);
}).setCriteria("[NPC] Trevor: You can find your ${*} animal near the ${zone}.")

register("chat", () => {
	activeQuest = false;
	warpLocation = warps[0];

	if (settings().trapperWarpKeybind) 
		ChatLib.chat(`${constants.PREFIX} &aPress ${Keyboard.getKeyName(keyBind.getKeyCode())} to warp back to Trevor.`);
}).setCriteria("Return to the Trapper soon to get a new animal to hunt!")