// Credit: Coleweight

import constants from "./util/constants";

let commands = [];
let commandNames = [];
export default helpCommands = {info: [], miscellaneous: []};

export function registerCommand(command) {
	commands.push(command);
	commandNames.push(command.names[0]);

	if (command.showInHelp ?? true) {
		helpCommands[command.category].push({name: command.names[0], description: command.description, options: command.options});
	}
}

register("command", (...args) => {
	let stop = false;

	if (args == undefined) {
		ChatLib.command("billyaddonssettings", true);
		return;
	}

	commands.forEach((command) => {
		if (command.names.includes(args[0].toLowerCase())) {
			command.execute(args);
			stop = true;
		}
	})

	if (!stop) {
		ChatLib.chat(constants.INVALIDARGS);
	}
}).setName("billyaddons").setAliases("ba")

import "./commands/help";
import "./commands/move";
import "./commands/ticks";
import "./commands/stopSounds";
import "./commands/ping";