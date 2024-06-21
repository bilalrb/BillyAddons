export function getTablist() {
	if(!World.isLoaded()) return []

	return TabList.getNames().map(name => name.removeFormatting())
}

// Credits: BloomCore
export function getScoreboard(descending = false) {
	return Scoreboard.getLines(descending).map(line => line.getName()?.removeFormatting()?.replace(/[^\u0000-\u007F]/g, ""))
}

// Credits: BloomCore
export function inTab(string) {
	return this.getTablist().find(name => name.match(/^(Area|Dungeon): ([\w\d ]+)$/))?.includes(string)
}

// Credits: BloomCore
export function getCurrentArea() {
	if (!World.isLoaded()) return

	for (score of this.getScoreboard()) {
		let areaName = score.match(/^  (.+)$/)?.[1]

		if (!areaName) continue
		return areaName
	}
}

export function checkOnHypixel() {
	if (!getScoreboard()) {
		return false;
	}

	if (getScoreboard(true)[0].toLowerCase().includes("www.hypixel.net")) return true;
	return false;
}

export function checkOnSkyblock() {
	if (Scoreboard.getTitle().removeFormatting() == "SKYBLOCK") return true;
	return false;
}

export function checkDwarven() {
	if (inTab("Dwarven Mines")) return true;
	return false;
}

export function checkHollows() {
	if (inTab("Crystal Hollows")) return true;
	return false;
}

export function checkEnd() {
	if (inTab("The End")) return true;
	return false;
}

export function getFloor() {
	if (getCurrentArea().includes("The Catacombs")) {
		let floor = getCurrentArea().match(/[0-9]/)[0];
		return floor;
	}
}

export function calcTicks(blockStrength, miningSpeed) {
	let tick = Math.round((blockStrength * 30) / miningSpeed);

	if (tick <= 4 && tick > 1) {
		tick = 4;
	}

	return tick;
}

/**
 * Raytraces from the player's look vector for the set number of blocks
 * Credits: BloomCore
 * @param {Number} distance 
 * @returns {Block|null}
 */
export const raytraceBlock = (distance) => {
	let rt = Player.getPlayer().func_174822_a(distance, 0);
	let bp = rt.func_178782_a();
    if (!bp) return null;
    return World.getBlockAt(new BlockPos(bp));
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatTime(seconds) {
	let hours = Math.floor(seconds / 60 / 60);

	if (hours > 1)
		return `${hours}h ${Math.floor((seconds / 60) - hours * 60)}m`
	else
		return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`
}

export let floorSevenPhase = -1;
export function getFloorSevenPhase() {
	return floorSevenPhase;
}

export let inFloorSevenBoss = false;
export function getInFloorSevenBoss() {
	return inFloorSevenBoss;
}

export let goldorPhase = -1;
export function getGoldorPhase() {
	return goldorPhase;
}

export let terminalsActivated = -1;
export function getTerminalsActivated() {
	return terminalsActivated;
}

export let gateDestroyed = false;
export function getGateDestroyed() {
	return gateDestroyed;
}

export let terminalsRemaining = -1;
export function getTerminalsRemaining() {
	return terminalsRemaining;
}

export let devicesRemaining = -1;
export function getDevicesRemaining() {
	return devicesRemaining;
}

export let leversRemaining = -1;
export function getLeversRemaining() {
	return leversRemaining;
}

// i hate this
// Setting phases
register("chat", () => { 
	floorSevenPhase = 1; 
	inFloorSevenBoss = true;
	ChatLib.chat(inFloorSevenBoss);
}).setCriteria("[BOSS] Maxor: WELL WELL WELL LOOK WHO’S HERE!")
register("chat", () => { floorSevenPhase = 2; }).setCriteria("[BOSS] Storm: Pathetic Maxor, just like expected.")
register("chat", () => {
	floorSevenPhase = 3;

	goldorPhase = 1;

	terminalsActivated = 0;

	terminalsRemaining = 4;
	devicesRemaining = 1;
	leversRemaining = 2;
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")
register("chat", () => { floorSevenPhase = 4; }).setCriteria("[BOSS] Necron: Finally, I heard so much about you. The Eye likes you very much.")
register("chat", () => { floorSevenPhase = 4; }).setCriteria("[BOSS] Necron: You went further than any human before, congratulations.")
register("chat", () => { floorSevenPhase = 5; }).setCriteria("[BOSS] Wither King: Ohhh?")
register("chat", () => { floorSevenPhase = 5; }).setCriteria("[BOSS] Wither King: You.. again?")

// Resetting all vriables
function resetFloorSevenBoss() {
	inFloorSevenBoss = false;
	floorSevenPhase = -1;
	goldorPhase = -1;
	terminalsActivated = -1;
	gateDestroyed = false;
	terminalsRemaining = -1;
	devicesRemaining = -1;
	leversRemaining = -1;
}

// Finishing a run
register("chat", () => {
	resetFloorSevenBoss();
}).setCriteria(/\[BOSS] Necron: All this, for nothing\.\.\.|\[BOSS] Wither King: Incredible\. You did what I couldn't do myself\./g)

// Leaving dungeon early
register("playerLeft", (name) => {
	if (name == Player.getName() && inFloorSevenBoss) {
		resetFloorSevenBoss();
	}
})

// On completion of terminal
register("chat", (player, type, done, total) => {
	terminalsActivated = done;

	if (type == "terminal")
		terminalsRemaining--;
	else if (type == "device")
		devicesRemaining--;
	else if (type == "lever")
		leversRemaining--;

	// Next phase
	if (done == total && goldorPhase != 4) {
		goldorPhase++

		terminalsActivated = 0;

		devicesRemaining = 1;
		leversRemaining = 2;
		
		if (goldorPhase != 2)
			terminalsRemaining = 4;
		else
			terminalsRemaining = 5;

		gateDestroyed = false;
	}
}).setCriteria(/^(\w+)[\w ]+ (terminal|lever|device)! ?(?:\((\d)\/(\d)\))?$/gm)

register("chat", () => {
	gateDestroyed = true;
}).setCriteria("The gate has been destroyed!")

// Resetting after terminal phase complete
register("chat", () => {
	goldorPhase = -1;
	terminalsActivated = -1;
	terminalsRemaining = -1;
	devicesRemaining = -1;
	leversRemaining = -1;
	gateDestroyed = false;
}).setCriteria("The Core entrance is opening!")