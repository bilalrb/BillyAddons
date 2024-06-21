import settings from "../data/settings";
import { msBoostAbility } from "../util/notifiers";
import { calcTicks } from "../util/skyblockFunctions";

// dear lord
// this was the first feature i made im sure there's a better way but im too lazy to change it

// will recode later
register("hitBlock", (block) => {
	if (settings().pingGlideHelper) {
		if (!msBoostAbility.active) {
			if (block.toString().includes("stained_glass")) {
				let breaktime;
				// All blocks
				if (settings().pingGlideBlock == 0) {
					// Ruby
					if (block.getMetadata() == 14) {
						breaktime = (calcTicks(2300, settings().pingGlideMS) * 50) - settings().pingGlidePing;
					// Jade / Amber / Sapphire / Amethyst
					} else if (block.getMetadata() == 5 || block.getMetadata() == 1 || block.getMetadata() == 3 || block.getMetadata() == 10) {
						breaktime = (calcTicks(3000, settings().pingGlideMS) * 50) - settings().pingGlidePing;
					// Topaz / Opal
					} else if (block.getMetadata() == 4 || block.getMetadata() == 0) {
						breaktime = (calcTicks(3800, settings().pingGlideMS) * 50) - settings().pingGlidePing;
					// Jasper
					} else if (block.getMetadata() == 2) {
						breaktime = (calcTicks(4800, settings().pingGlideMS) * 50) - settings().pingGlidePing;
					// Onyx / Aquamarine / Citrine / Peridot
					} else if (block.getMetadata() == 15 || block.getMetadata() == 11 || block.getMetadata() == 12 || block.getMetadata() == 13) {
						breaktime = (calcTicks(5200, settings().pingGlideMS) * 50) - settings().pingGlidePing;
					} 
				// Only Ruby
				} else if ((settings().pingGlideBlock == 1) && (block.getMetadata() == 14)) {
					breaktime = (calcTicks(2300, settings().pingGlideMS) * 50) - settings().pingGlidePing;
				// Only Jade / Amber / Sapphire / Amethyst
				} else if ((settings().pingGlideBlock == 2) && (block.getMetadata() == 5 || block.getMetadata() == 1 || block.getMetadata() == 3 || block.getMetadata() == 10)) {
					breaktime = (calcTicks(3000, settings().pingGlideMS) * 50) - settings().pingGlidePing;
				// Only Topaz / Opal
				} else if ((settings().pingGlideBlock == 3) && (block.getMetadata() == 4 || block.getMetadata() == 0)) {
					breaktime = (calcTicks(3800, settings().pingGlideMS) * 50) - settings().pingGlidePing;
				// Only Jasper
				} else if ((settings().pingGlideBlock == 4) && (block.getMetadata() == 2)) {
					breaktime = (calcTicks(4800, settings().pingGlideMS) * 50) - settings().pingGlidePing;
				// Only Onyx / Aquamarine / Citrine / Peridot
				} else if ((settings().pingGlideBlock == 5) && (block.getMetadata() == 15 || block.getMetadata() == 11 || block.getMetadata() == 12 || block.getMetadata() == 13)) {
					breaktime = (calcTicks(5200, settings().pingGlideMS) * 50) - settings().pingGlidePing;
				}

				if (breaktime <= 100) {
					breaktime = 100;
				} else if (breaktime > 3000) return;

				if (breaktime) {
					setTimeout(() => {
						if (Player.lookingAt().x ==  block.x && Player.lookingAt().y ==  block.y && Player.lookingAt().z ==  block.z ) {
							World.playSound("random.orb", 1, settings().pingGlidePitch / 100);
						}
					}, breaktime);
				}
			}
		}
	}
});