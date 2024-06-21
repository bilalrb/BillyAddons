import { BaseGui } from "../BaseGui";
import { registerGui } from "../guiManager";
import settings from "../data/settings";
import { formatTime } from "../util/skyblockFunctions";

let flawedCount = 0;
let lastMined = -1;
let flawlessPerHour = -1;
let startTime = -1;
let gemstone;

const flawlessTrackerGui = new BaseGui(["flawlessTrackerGui"], () => {
	if (!flawlessTrackerGui.isOpen() && !settings().flawlessTrackerOverlay) return;
	
	if (lastMined > 0) {
		return `&aUptime: &f${formatTime((Date.now() - startTime) / 1000)}\n&afl/hr: &f${flawlessPerHour}`;
	} else {
		return
	}
})
registerGui(flawlessTrackerGui);

register("chat", (gem, count) => {
	if (gem != gemstone)
		resetFlawlessTracker();

	gemstone = gem;

	count = parseInt(count);

	lastMined = Date.now();

	if (startTime == 0) return;
	if (startTime == -1)
		startTime = Date.now();
	
	flawedCount += count;

	if (Date.now() - startTime == 0) return
	flawlessPerHour = ((flawedCount / 80 / 80) * (60 / (((Date.now() - startTime) / 1000) / 60))).toFixed(1)
}).setCriteria("PRISTINE! You found ${*} ${*} ${gem} Gemstone x${count}!")

register("step", () => {
	if (Date.now() - lastMined > 120000)
		resetFlawlessTracker();
}).setFps(1)

function resetFlawlessTracker() {
	flawedCount = 0;
	lastMined = -1;
	startTime = -1;
}