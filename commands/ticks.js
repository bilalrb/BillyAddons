import constants from "../util/constants";
import { registerCommand } from "../commandManager";
import { calcTicks } from "../util/skyblockFunctions";

registerCommand({
	names: ["ticks"],
	description: "Calculates ticks it takes to mine gemstones.",
	options: "(mining speed)",
	category: "info",
	execute: (args) => {
		if (!args[1]) {
			(ChatLib.chat(constants.INVALIDARGS));
			return;
		}

		let blockStrength;

		switch(args[2]) {
			default:
				if (isNaN(args[1])) {
					(ChatLib.chat(constants.INVALIDARGS));
					return;
				}

				ChatLib.chat(ChatLib.getCenteredText("&9---------- &lBillyAddons Tick Calculator &9----------"));
				ChatLib.chat("&bSelect a gemstone:");
				ChatLib.chat(new TextComponent("&6[&cRuby&6]").setClick("run_command", `/ba ticks ${args[1]} r`));
				ChatLib.chat(new TextComponent("&6[&aJade&8/&6Amber&8/&bSapphire&8/&5Amethyst&6]").setClick("run_command", `/ba ticks ${args[1]} jasa`))
				ChatLib.chat(new TextComponent("&6[&eTopaz&8/&fOpal&6]").setClick("run_command", `/ba ticks ${args[1]} to`))
				ChatLib.chat(new TextComponent("&6[&dJasper&6]").setClick("run_command", `/ba ticks ${args[1]} j`))
				ChatLib.chat(new TextComponent("&6[&0Onyx&8/&1Aquamarine&8/&6Citrine&8/&2Peridot&6]").setClick("run_command", `/ba ticks ${args[1]} oacp`))
				ChatLib.chat(ChatLib.getCenteredText("&9------------------------------------------------"));

				break;

			case "r":
				blockStrength = 2300;
				break;
			
			case "jasa":
				blockStrength = 3000;
				break;

			case "to":
				blockStrength = 3800;
				break;

			case "j":
				blockStrength = 4800;
				break;

			case "oacp":
				blockStrength = 5200;
				break;
		}

		if (args[2] == "r" || args[2] == "jasa" || args[2] == "to" || args[2] == "j" || args[2] == "oacp") {
			ChatLib.chat(`${constants.PREFIX} &b${calcTicks(blockStrength, parseFloat(args[1]))} ticks`);
		}
	}
})