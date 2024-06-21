// doc my beloved

import Settings from "../../Amaterasu/core/Settings"
import DefaultConfig from "../../Amaterasu/core/DefaultConfig"
import constants from "../util/constants"

const CHANGELOG = `# §9BillyAddons v${constants.VERSION}\n ${FileLib.read("BillyAddons", "data/changelog.md")}`;
const CREDITS = `# §9Credits\n ${FileLib.read("BillyAddons", "data/CREDIT.md")}`;

const defaultConf = new DefaultConfig("BillyAddons", "data/settings.json");

defaultConf
.addSwitch({
    category: "General",
    configName: "hideHealthBar",
    title: "Hide Vanila Health Bar",
    description: "Hides your hearts",
    subcategory: "",
	value: false
})
.addSwitch({
    category: "General",
    configName: "hideHungerBar",
    title: "Hide Vanila Hunger Bar",
    description: "Hides your hunger bar",
    subcategory: "",
	value: false
})
.addSwitch({
    category: "General",
    configName: "hideArmorBar",
    title: "Hide Vanila Armor Bar",
    description: "Hides your armor bar",
    subcategory: "",
	value: false
})
.addSwitch({
    category: "General",
    configName: "customBonzoStaffSound",
    title: "Custom Bonzo Staff Sound",
    description: "Replaces the bonzo staff sounds with a custom sound",
    subcategory: "",
	value: false
})
.addSlider({
    category: "General",
    configName: "customBonzoStaffSoundDuration",
    title: "Custom Bonzo Staff Sound Duration",
    description: "Changes how long the custom sound will play for",
    options: [0, 5],
    value: 0,
    subcategory: "",

	shouldShow(data) {
		return data.customBonzoStaffSound;
	}
})
.addSwitch({
    category: "General",
    configName: "customNecronDeathSound",
    title: "Custom Necron Death Sound",
    description: "Replaces the necron death sounds with a custom sound",
    subcategory: "",
	value: false
})
.addSlider({
    category: "General",
    configName: "customNecronDeathSoundDuration",
    title: "Custom Necron Death Sound Duration",
    description: "Changes how long the custom sound will play for",
    options: [0, 7],
    value: 0,
    subcategory: "",

	shouldShow(data) {
		return data.customNecronDeathSound;
	}
})
.addSwitch({
    category: "General",
    configName: "trapperWarpKeybind",
    title: "Trevor The Trapper Warp Keybind",
    description: "Warps you to the next place for trapper (assign keybind in controls)",
    subcategory: "",
	value: false
})
.addSwitch({
    category: "General",
    configName: "slayerTradeWaypoints",
    title: "Slayer Trading Waypoints",
    description: "Automatically sends a message and creates a waypoint when a slayer boss is spawned from your party.",
    subcategory: "",
	value: false
})
.addSwitch({
    category: "Mining",
    configName: "pingGlideHelper",
    title: "Ping Glide Helper",
    description: "Plays a sound to alert you to move to the next block",
    subcategory: "Ping Glide",
	value: false
})
.addDropDown({
    category: "Mining",
    configName: "pingGlideBlock",
    title: "Ping Glide Block",
    description: "Chooses a specific block strength to enable the ping \nglide helper on",
    options: ["All","Ruby","Jade/Amber/Sapphire/Amethyst","Topaz/Opal","Jasper","Onyx/Aquamarine/Citrine/Peridot"],
    value: 0,
    subcategory: "Ping Glide",

	shouldShow(data) {
		return data.pingGlideHelper;
	}
})
.addSlider({
    category: "Mining",
    configName: "pingGlideMS",
    title: "Mining Speed",
    description: "Your mining speed, used to calculate ticks for the ping glide helper",
    options: [0, 10000],
    value: 0,
    subcategory: "Ping Glide",

	shouldShow(data) {
		return data.pingGlideHelper;
	}
})
.addSlider({
    category: "Mining",
    configName: "pingGlidePing",
    title: "Ping",
    description: "Your ping, used to calculate ticks for the ping glide helper",
    options: [0, 1000],
    value: 0,
    subcategory: "Ping Glide",

	shouldShow(data) {
		return data.pingGlideHelper;
	}
})
.addSlider({
    category: "Mining",
    configName: "pingGlidePitch",
    title: "Pitch",
    description: "The pitch of the sound that plays",
	options: [0, 100],
	value: "0",
    subcategory: "Ping Glide",

	shouldShow(data) {
		return data.pingGlideHelper;
	}
})
.addSwitch({
    category: "Overlays",
    configName: "msBoostAbilityOverlay",
    title: "Mining Speed Boost Overlay",
    description: "Displays whether or not Mining Speed Boost is ready",
    subcategory: "Mining Speed Boost Overlay",
	value: false
})
.addSwitch({
    category: "Overlays",
    configName: "msBoostAbilityOverlayCooldown",
    title: "Show Mining Speed Boost Cooldown",
    description: "Display the cooldown on the overlay when Mining Speed Boost is not active",
    subcategory: "Mining Speed Boost Overlay",
	value: false,

	shouldShow(data) {
		return data.msBoostAbilityOverlay;
	}
})
.addButton({
    category: "Overlays",
    configName: "moveMSBoostAbilityOverlay",
    title: "Change Mining Speed Boost Overlay Position",
    description: "Move the location of the Mining Speed Boost overlay",
	placeHolder: "Edit",
    subcategory: "Mining Speed Boost Overlay",
    onClick() {
        ChatLib.command("ba move msBoostAbilityGui", true);
    }
})
.addSwitch({
    category: "Overlays",
    configName: "etherwarpHelperOverlay",
    title: "Etherwarp Helper Overlay",
    description: "Displays text when etherwarp is aimed at cobblestone",
    subcategory: "Etherwarp Helper Overlay",
	value: false
})
.addButton({
    category: "Overlays",
    configName: "moveEtherwarpHelperOverlay",
    title: "Change Etherwarp Helper Overlay Position",
    description: "Move the location of the Etherwarp Helper overlay",
	placeHolder: "Edit",
    subcategory: "Etherwarp Helper Overlay",
    onClick() {
        ChatLib.command("ba move etherwarpHelperGui", true);
    }
})
.addSwitch({
    category: "Overlays",
    configName: "flawlessTrackerOverlay",
    title: "Flawless Tracker Overlay",
    description: "Displays your flawless gemstones per hour",
    subcategory: "Flawless Tracker Overlay",
	value: false
})
.addButton({
    category: "Overlays",
    configName: "moveFlawlessTrackerOverlay",
    title: "Change Flawless Tracker Overlay Position",
    description: "Move the location of the Flawless Tracker overlay",
	placeHolder: "Edit",
    subcategory: "Flawless Tracker Overlay",
    onClick() {
        ChatLib.command("ba move flawlessTrackerGui", true);
    }
})
.addSwitch({
    category: "Overlays",
    configName: "healthOverlay",
    title: "Health Overlay",
    description: "Displays your health",
    subcategory: "Health Overlay",
	value: false
})
.addButton({
    category: "Overlays",
    configName: "moveHealthOverlay",
    title: "Change Health Overlay Position",
    description: "Move the location of the health overlay",
	placeHolder: "Edit",
    subcategory: "Health Overlay",
    onClick() {
        ChatLib.command("ba move healthGui", true);
    }
})
.addSwitch({
    category: "Overlays",
    configName: "defenseOverlay",
    title: "Defense Overlay",
    description: "Displays your defense",
    subcategory: "Defense Overlay",
	value: false
})
.addButton({
    category: "Overlays",
    configName: "moveDefenseOverlay",
    title: "Change Defense Overlay Position",
    description: "Move the location of the defense overlay",
	placeHolder: "Edit",
    subcategory: "Defense Overlay",
    onClick() {
        ChatLib.command("ba move defenseGui", true);
    }
})
.addSwitch({
    category: "Overlays",
    configName: "manaOverlay",
    title: "Mana Overlay",
    description: "Displays your mana",
    subcategory: "Mana Overlay",
	value: false
})
.addButton({
    category: "Overlays",
    configName: "moveManaOverlay",
    title: "Change Mana Overlay Position",
    description: "Move the location of the mana overlay",
	placeHolder: "Edit",
    subcategory: "Mana Overlay",
    onClick() {
        ChatLib.command("ba move manaGui", true);
    }
})
.addSwitch({
    category: "Overlays",
    configName: "terminalCounterOverlay",
    title: "Terminal Counter Overlay",
    description: "Displays how many terminals are done",
    subcategory: "Terminal Counter Overlay",
	value: false
})
.addButton({
    category: "Overlays",
    configName: "moveTerminalCounterOverlay",
    title: "Change Terminal Counter Overlay Position",
    description: "Move the location of the terminal counter overlay",
	placeHolder: "Edit",
    subcategory: "Terminal Counter Overlay",
    onClick() {
        ChatLib.command("ba move terminalCounterGui", true);
    }
})
.addSwitch({
    category: "Overlays",
    configName: "missingTerminalsOverlay",
    title: "Missing Terminals Overlay",
    description: "Displays what terminals are missing",
    subcategory: "Missing Terminals Overlay",
	value: false
})
.addSwitch({
    category: "Overlays",
    configName: "compactMissingTerminalsOverlay",
    title: "Compact Missing Terminals Overlay",
    description: "Compacts the missing terminals overlay",
    subcategory: "Missing Terminals Overlay",
	value: false,

	shouldShow(data) {
		return data.missingTerminalsOverlay;
	}
})
.addButton({
    category: "Overlays",
    configName: "moveMissingTerminalsOverlay",
    title: "Change Missing Terminals Overlay Position",
    description: "Move the location of the missing terminals overlay",
	placeHolder: "Edit",
    subcategory: "Missing Terminals Overlay",
    onClick() {
        ChatLib.command("ba move missingTerminalsGui", true);
    }
})
.addSwitch({
    category: "Overlays",
    configName: "completedTerminalsOverlay",
    title: "Completed Terminals Overlay",
    description: "Displays what terminals are complete",
    subcategory: "Completed Terminals Overlay",
	value: false
})
.addSwitch({
    category: "Overlays",
    configName: "compactCompletedTerminalsOverlay",
    title: "Compact Completed Terminals Overlay",
    description: "Compacts the completed terminals overlay",
    subcategory: "Completed Terminals Overlay",
	value: false,

	shouldShow(data) {
		return data.completedTerminalsOverlay;
	}
})
.addButton({
    category: "Overlays",
    configName: "moveCompletedTerminalsOverlay",
    title: "Change Completed Terminals Overlay Position",
    description: "Move the location of the completed terminals overlay",
	placeHolder: "Edit",
    subcategory: "Completed Terminals Overlay",
    onClick() {
        ChatLib.command("ba move completedTerminalsGui", true);
    }
})

const setting = new Settings("BillyAddons", defaultConf, "data/ColorScheme.json")
	.setCommand("billyaddonssettings")
	.addMarkdown("Changelog", CHANGELOG)
    .addMarkdown("Credits", CREDITS)

setting
	.setPos(5, 8)
	.setSize(90, 85)
	.apply()

export default () => setting.settings;