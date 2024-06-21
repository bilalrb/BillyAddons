import PogObject from "../../PogData";

let data = new PogObject("BillyAddons", {
	"msBoostAbilityGui": {
		"x": 0,
		"y": 0,
		"alignment": 0,
		"scale": 1.0
	},
	"etherwarpHelperGui": {
		"x": 0,
		"y": 0,
		"alignment": 0,
		"scale": 1.0
	},
	"flawlessTrackerGui": {
		"x": 0,
		"y": 0,
		"alignment": 0,
		"scale": 1.0
	},
	"healthGui": {
		"x": 0,
		"y": 0,
		"alignment": 0,
		"scale": 1.0
	},
	"manaGui": {
		"x": 0,
		"y": 0,
		"alignment": 0,
		"scale": 1.0
	},
	"defenseGui": {
		"x": 0,
		"y": 0,
		"alignment": 0,
		"scale": 1.0
	},
	"terminalCounterGui": {
		"x": 0,
		"y": 0,
		"alignment": 0,
		"scale": 1.0
	},
	"missingTerminalsGui": {
		"x": 0,
		"y": 0,
		"alignment": 0,
		"scale": 1.0
	},
	"completedTerminalsGui": {
		"x": 0,
		"y": 0,
		"alignment": 0,
		"scale": 1.0
	}
}, "../data/data.json");

const PREFIX = "&9[BA]"
export default constants = {
	PREFIX: PREFIX,
	INVALIDARGS: `${PREFIX} &cInvalid arguments. '/ba help' to see all commands.`,
	VERSION: (JSON.parse(FileLib.read("BillyAddons", "metadata.json"))).version,
	data: data
}