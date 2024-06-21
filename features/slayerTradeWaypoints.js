import { drawWaypoint } from "../BaseWaypoint"
import settings from "../data/settings";
import { getScoreboard } from "../util/skyblockFunctions";

let spawner;
let wX;
let wY;
let wZ;

let bossSpawned;

let waypoints = [];

// Rendering waypoint
register("renderWorld", () => {
	waypoints.forEach(slayer => {
		drawWaypoint(slayer[1], slayer[2], slayer[3], 0.333, 1, 1, 0.3, `${slayer[0]}'s Slayer`, "a", true, true, true, false);
	});
})

// Sending message when slayer is spawned by yourself
register("tick", () => {
	if (!settings().slayerTradeWaypoints) return;

	if (getScoreboard(true)[2] == "Slay the boss!" && !bossSpawned) {
		ChatLib.command(`pc BA:SLAYERSPAWNED@${Math.round(Player.getX())},${Math.round(Player.getY())},${Math.round(Player.getZ())}`)
		bossSpawned = true;

		spawner = Player.getName();
		wX = Math.round(Player.getX());
		wY = Math.round(Player.getY());
		wZ = Math.round(Player.getZ());
		waypoints.push([spawner, wX, wY, wZ]);
	}
})

// Sending message when your slayer is killed
register("chat", () => {
	if (!settings().slayerTradeWaypoints) return;

	ChatLib.command(`pc BA:SLAYERKILLED@${wX},${wY},${wZ}`);
	bossSpawned = false;

	// Remove waypoint from list of waypoints
	waypoints.forEach(slayer => {
		if (slayer[0] == Player.getName()) {
			waypoints.splice(waypoints.indexOf(slayer));
		}
	})
}).setCriteria("  SLAYER QUEST COMPLETE!");

// Sending message when your slayer is failed
register("chat", () => {
	if (!settings().slayerTradeWaypoints) return;

	ChatLib.command(`pc BA:SLAYERFAILED@${wX},${wY},${wZ}`);
	bossSpawned = false;

	// Remove waypoint from list of waypoints
	waypoints.forEach(slayer => {
		if (slayer[0] == name) {
			waypoints.splice(waypoints.indexOf(slayer));
		}
	})
}).setCriteria("  SLAYER QUEST FAILED!");


// Drawing waypoint when slayer is spawned by someone else
register("chat", (name, x, y, z) => {
	if (name != Player.getName()) {
		spawner = name;
		wX = x;
		wY = y;
		wZ = z;
		waypoints.push([spawner, wX, wY, wZ]);
	}
}).setCriteria("Party > ${*} ${name}: BA:SLAYERSPAWNED@${x},${y},${z}")


// Removing waypoint when someone else's slayer is killed
register("chat", (name, x, y, z) => {
	if (name == spawner && x == wX && y == wY && z == wZ) {
		// Remove waypoint from list of waypoints
		waypoints.forEach(slayer => {
			if (slayer[0] == name) {
				waypoints.splice(waypoints.indexOf(slayer));
			}
		})
	}
}).setCriteria("Party > ${*} ${name}: BA:SLAYERKILLED@${x},${y},${z}")

// Removing waypoint when someone else's slayer is failed
register("chat", (name, x, y, z) => {
	if (name == spawner && x == wX && y == wY && z == wZ) {
		// Remove waypoint from list of waypoints
		waypoints.forEach(slayer => {
			if (slayer[0] == name) {
				waypoints.splice(waypoints.indexOf(slayer));
			}
		})
	}
}).setCriteria("Party > ${*} ${name}: BA:SLAYERFAILED@${x},${y},${z}")

// Clearing variables when logging out
register("playerLeft", (name) => {
	if (name == Player.getName() && bossSpawned) {
		bossSpawned = false;
		waypoints.length = 0
	}
})