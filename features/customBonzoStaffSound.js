// meh

import settings from "../data/settings";
import { registerSound } from "../soundManager";

let bonzoStaffUsed = false;
let bonzoStaffSound = new Sound({ source: "bonzostaff.ogg" });
let bonzoStaffSoundPlaying = false;
registerSound(bonzoStaffSound);

register("soundPlay", (pos, name, vol, pitch, cat, event) => {
	if (!settings().customBonzoStaffSound) return;

	if (bonzoStaffUsed) {
		cancel(event);
		if (bonzoStaffSoundPlaying) {
			bonzoStaffSound.stop();
			bonzoStaffSound.play();
			bonzoStaffSoundPlaying = true;

			setTimeout(() => {
				bonzoStaffSound.stop();
				bonzoStaffSoundPlaying = false;
			}, settings().customBonzoStaffSoundDuration * 1000)
		} else {
			bonzoStaffSound.play();
			bonzoStaffSoundPlaying = true;

			setTimeout(() => {
				bonzoStaffSound.stop();
				bonzoStaffSoundPlaying = false;
			}, settings().customBonzoStaffSoundDuration * 1000)
		}

		bonzoStaffUsed = false;
	}
}).setCriteria("mob.ghast.moan")

register("clicked", (x, y, button, state) => {
	if (!settings().customBonzoStaffSound) return;

	if (!button == 1) return;

	if (state) {
		if (Player.getHeldItem().getName().includes("Bonzo's Staff"))
			bonzoStaffUsed = true;
		else
			bonzoStaffUsed = false;
	}
})

register("soundPlay", (pos, name, vol, pitch, cat, event) => { cancelFireworks(event); }).setCriteria("fireworks.blast")
register("soundPlay", (pos, name, vol, pitch, cat, event) => { cancelFireworks(event); }).setCriteria("fireworks.blast_far")
register("soundPlay", (pos, name, vol, pitch, cat, event) => { cancelFireworks(event); }).setCriteria("fireworks.twinkle")
register("soundPlay", (pos, name, vol, pitch, cat, event) => { cancelFireworks(event); }).setCriteria("fireworks.twinkle_far")

function cancelFireworks(event) {
	if (!settings().customBonzoStaffSound) return;

	if (bonzoStaffSoundPlaying)
		cancel(event);
}

register("playerLeft", (name) => {
	if (name == Player.getName() && bonzoStaffSoundPlaying) {
		bonzoStaffSound.stop();
		bonzoStaffSoundPlaying = false;
	}
})