import { registerCommand } from "../commandManager";
import constants from "../util/constants";
import { checkOnHypixel } from "../util/skyblockFunctions";

let pingTrigger = false;
let startTime = -1;
let ping = 0;

registerCommand({
	names: ["ping"],
	description: "Finds your ping on Hypixel.",
	options: "",
	category: "info",
	execute: () => {
		if (!checkOnHypixel()) {
			ChatLib.chat(`${constants.PREFIX} &cYou must be on Hypixel for this command!`);
			return;
		}

		ChatLib.command("ba ping");

		pingTrigger = true;
		startTime = Date.now();
	}
})

register("chat", (event) => {
	if (pingTrigger) {
		cancel(event);
		ping = Date.now() - startTime;
		pingTrigger = false;
		
		ChatLib.chat(`${constants.PREFIX} &b${ping}ms`);
		ping = 0;
		startTime = -1;
	}
}).setCriteria("Unknown command. Type \"/help\" for help. ('ba ping')")