import constants from "../util/constants";
import guis from "../guiManager";
import { registerCommand } from "../commandManager";

registerCommand({
	names: ["move"],
	description: "Move BillyAddons gui.",
	options: "(gui)",
	category: "miscellaneous",
	showInHelp: false,
	execute: (args) => {
		if (!args[1]) {
			(ChatLib.chat(constants.INVALIDARGS));
			return;
		}
		let found = false;

		guis.forEach(gui => {
			if (gui.names.map(names => names.toLowerCase()).includes(args[1].toLowerCase())) {
				gui.open();
				found = true;
			}
		})
	
		if (!found) {
			ChatLib.chat(`${constants.PREFIX} &bNo such gui as '${args[1]}'.`);
		}
	}
})