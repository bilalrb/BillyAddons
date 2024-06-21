import { registerCommand } from "../commandManager";
import sounds from "../soundManager";
import constants from "../util/constants";

registerCommand({
	names: ["stopsounds"],
	description: ["Stops all BillyAddons sounds playing."],
	options: "",
	category: "miscellaneous",
	execute: () => {
		sounds.forEach((sound) => {
			sound.stop();
		})

		ChatLib.chat(`${constants.PREFIX} &bStopped custom sounds!`);
	}
})