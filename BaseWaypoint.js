// Inspiration: Coleweight (which is inspired by Soopy)

import RenderLibV2 from "../RenderLibV2"
import renderBeaconBeam from "../BeaconBeam"

/**
 * Renders a waypoint with some settings.
 * @param {number} x - X coordinate of the waypoint.
 * @param {number} y - Y coordinate of the waypoint.
 * @param {number} z - Z coordinate of the waypoint.
 * @param {number} r - Red in range of 0 - 1
 * @param {number} g - Green in range of 0 - 1
 * @param {number} b - Blue in range of 0 - 1
 * @param {number} a - Alpha in range of 0-1
 * @param {string} name - Name of the waypoint (includes distance). Set to null for no name.
 * @param {string} nameColor - Color of the waypoint's name. Uses Minecraft color codes.
 * @param {boolean} box - Whether or not a box should be rendered with the waypoint
 * @param {boolean} beacon - Whether or not a beacon should be rendered with the waypoint
 * @param {boolean} phaseBox - Whether or not the box should be visible through walls
 * @param {boolean} phaseBeacon - Whether or not the beacon should be visible through walls
 */
export function drawWaypoint(x, y, z, r, g, b, a, name, nameColor, box, beacon, phaseBox, phaseBeacon) {
	if (box) {
		RenderLibV2.drawEspBox(x + 0.5, y, z + 0.5, 1, 1, r, g, b, a, phaseBox);
		RenderLibV2.drawInnerEspBox(x + 0.5, y, z + 0.5, 1, 1, r, g, b, a, phaseBox);
	}

	if (beacon) {
		renderBeaconBeam(x, y, z, r, g, b, a, phaseBeacon);
	}

	if (name) {
		let text = `§${nameColor}${name} §b(${Math.round(Player.asPlayerMP().distanceTo(x, y, z))}m)`;
		Tessellator.drawString(text, x + 0.5, y + 2, z + 0.5, 0, true, 1, true);
	}
}