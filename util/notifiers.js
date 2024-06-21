import { checkOnHypixel, checkOnSkyblock } from "./skyblockFunctions";

// me after making this in a seperate file for no reason (i need to fix this)

// Mining Speed Boost GUI/Notifier (coming soon™)
export let msBoostAbility = {
	"ready": false,
	"active": false,
	"cooldown": 120
}

register("chat", () => {
	msBoostAbility.ready = true;
}).setCriteria("Mining Speed Boost is now available!")

register("chat", () => {
	msBoostAbility.ready = false;
	msBoostAbility.cooldown = 120;
	msBoostAbility.active = true;
}).setCriteria("You used your Mining Speed Boost Pickaxe Ability!")

register("chat", () => {
	msBoostAbility.active = false;
}).setCriteria("Your Mining Speed Boost has expired!")

register("step", () => {
	if (msBoostAbility.cooldown > 0) {
		msBoostAbility.cooldown--;
	}
}).setFps(1);

register("worldLoad", () => {
	if (checkOnHypixel && checkOnSkyblock) {
		msBoostAbility.ready = false; 
		msBoostAbility.cooldown = 120;
		msBoostAbility.cooldown /= 2;
	}
})