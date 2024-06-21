// Credit: Coleweight

import constants from "./util/constants";

export class BaseGui {

	 /**
     * @param {string[]} names - Name of the gui. names[0] is required and used in config. You must make an entry in the module's PogData in constants.js to track the x, y, scale, and alignment.
     * @param {callback} renderedString - Callback to be used in renderOverlay. Must return the string that will be rendered.
     */
	
	constructor(names, renderedString) {
		this.names = names;
		this.renderedString = renderedString;
		this.gui = new Gui();

		register("dragged", (dx, dy, x, y) => {
			if (!this.gui.isOpen()) return;
			constants.data[names[0]].x += dx;
			constants.data[names[0]].y += dy;
			constants.data.save();
		})

		register ("guiMouseClick", (x, y, button, gui) => {
			if (!this.gui.isOpen()) return;

			if (button = 1) {
				constants.data[names[0]].x = x;
				constants.data[names[0]].y = y;
			}
		}) 

		register("renderOverlay", () => {
			if (this.gui.isOpen()) {
				let txt = "Drag to move. Use +/- to increase/decrease size. Use arrow keys to set alignment.";
				Renderer.drawStringWithShadow(txt, Renderer.screen.getWidth() / 2 - Renderer.getStringWidth(txt) / 2, Renderer.screen.getHeight() / 2);
			}

			let message = renderedString();
			if (this.gui.isOpen()) {
				message = `&f&oScale: ${constants.data[names[0]].scale.toFixed(2)}&r\n` + (message ?? "");
			}

			let text = new Text(message ?? "");
			text.setX(constants.data[names[0]].x)
			text.setY(constants.data[names[0]].y - (this.gui.isOpen() ? 10*constants.data[names[0]].scale : 0));

			if(constants.data[names[0]].alignment == 1) {
				text.setAlign("CENTER");
			} else if (constants.data[names[0]].alignment == 2) {
				text.setAlign("RIGHT");
			}

			text.setScale(parseFloat(constants.data[names[0]].scale));
			text.setShadow(true);

			text.draw();
		})

		register("guiKey", (char, keyCode, gui, event) => {
			if (!this.gui.isOpen()) return

			if (keyCode == 13)
                constants.data[names[0]].scale += 0.05
            else if (keyCode == 12)
                constants.data[names[0]].scale -= 0.05
            else if (keyCode == 203)
                constants.data[names[0]].alignment = 0
            else if (keyCode == 208 || keyCode == 200)
                constants.data[names[0]].alignment = 1
            else if (keyCode == 205)
                constants.data[names[0]].alignment = 2

            constants.data.save()
		})
	}

	isOpen()
    {
        return this.gui.isOpen()
    }

    open()
    {
        return this.gui.open()
    }
}