import settings from "../data/settings";

register("renderHealth", (event) => {
	if (!settings().hideHealthBar) return;

	cancel(event);
})

register("renderFood", (event) => {
	if (!settings().hideHungerBar) return;
	
	cancel(event);
})

register("renderArmor", (event) => {
	if (!settings().hideArmorBar) return;
	
	cancel(event);
})