import settings from "../data/settings";
import { registerSound } from "../soundManager";
import { getFloor, getFloorSevenPhase, getInFloorSevenBoss } from "../util/skyblockFunctions";

let necronDeathSound = new Sound({ source: "necrondeath.ogg" });
let necronDeathSoundPlaying = false;
registerSound(necronDeathSound);

register("soundPlay", (pos, name, vol, pitch, cat, event) => {
	if (!settings().customNecronDeathSound) return;
	if (getFloor() != 7 || getFloorSevenPhase() != 4) return;

	cancel(event);
	
	if (!necronDeathSoundPlaying) {
		necronDeathSound.play();
		necronDeathSoundPlaying = true;

		setTimeout(() => {
			necronDeathSound.stop();
			necronDeathSoundPlaying = false;
		}, settings().customNecronDeathSoundDuration * 1000)
	}
}).setCriteria("mob.wither.hurt")