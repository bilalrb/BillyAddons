// Credit: Coleweight

import { registerCommand } from "../commandManager";
import helpCommands from "../commandManager";
import { capitalizeFirstLetter } from "../util/skyblockFunctions";

registerCommand({
	names: ["help"],
	description: "Displays all BillyAddons commands.",
	options: "",
	category: "info",
	execute: () => {
		ChatLib.chat(ChatLib.getCenteredText("&9---------------- &lBillyAddons &9----------------"));
        ChatLib.chat(ChatLib.getCenteredText("&7(Hover over command to see usage)"));
		Object.keys(helpCommands).forEach(key => {
			ChatLib.chat(ChatLib.getCenteredText("&9&l" + capitalizeFirstLetter(key)));
			helpCommands[key].forEach(command => {
				helpCommand(command.name, command.description, command.options);
			})
		})
		ChatLib.chat(ChatLib.getCenteredText("&9----------------------------------------------"));
	}
})

/**
Chats a chat message with specified parameters.
@param {string} command - Command
@param {string} desc - Description
@param {string} usage - Usage
*/
export function helpCommand(command, desc, usage)
{
    ChatLib.chat(new TextComponent(`&9◆ /ba ${command} => &a${desc}`).setHoverValue(`${"/ba " + command + " " + usage}`));
}