"use strict";

const Dirs = (() => {
	const none = 0;
	const up = 1;
	const down = 2;
	const left = 3;
	const right = 4;

	const dirData = [];
	dirData[none] = { name: "None", opposite: none, clockwise: none, counterclockwise: none };
	dirData[up] = { name: "Up", opposite: down, clockwise: right, counterclockwise: left };
	dirData[down] = { name: "Down", opposite: up, clockwise: left, counterclockwise: right };
	dirData[left] = { name: "Left", opposite: right, clockwise: up, counterclockwise: down };
	dirData[right] = { name: "Right", opposite: left, clockwise: down, counterclockwise: up };

	const opposite = (dir) => {
		return dirData[dir].opposite;
	};

	const clockwise = (dir) => {
		return dirData[dir].clockwise;
	};

	const counterclockwise = (dir) => {
		return dirData[dir].counterclockwise;
	};

	return Object.freeze({ none, up, down, left, right, opposite, clockwise, counterclockwise });
})();

const Colors = (() => {
	const black = 0;
	const blue = 1;
	const green = 2;
	const cyan = 3;
	const red = 4;
	const magenta = 5;
	const yellow = 6;
	const white = 7;

	const colorList = [
		{ name: "Black" },
		{ name: "Blue" },
		{ name: "Green" },
		{ name: "Cyan" },
		{ name: "Red" },
		{ name: "Magenta" },
		{ name: "Yellow" },
		{ name: "White" }
	];

	colorList.forEach((c, i) => {
		const r = i & 4 == 4 ? "ff" : "00";
		const g = i & 2 == 2 ? "ff" : "00";
		const b = i & 1 == 1 ? "ff" : "00";
		c.hex = `#${r}${g}${b}`;
		c.index = i;
	});

	const add = (c1, c2) => {
		return colorList[c1.index & c2.index].index;
	};

	const subtract = (c1, c2) => {
		return colorList[c1.index & ~c2.index].index;
	};

	const hex = (c) => {
		return colorList[c].hex;
	};

	const name = (c) => {
		return colorList[c].name;
	};

	return Object.freeze({ black, blue, green, cyan, red, magenta, yellow, white, add, subtract, hex, name });
})();

const Sizes = (() => {
	const small = 0;
	const medium = 1;
	const large = 2;

	const sizes = [
		{ name: "Small" },
		{ name: "Medium" },
		{ name: "Large" }
	];

	const shrink = (size) => {
		return Math.max(size - 1, small);
	};

	const grow = (size) => {
		return Math.min(size + 1, large);
	};

	const name = (size) => {
		return sizes[size].name;
	};

	return Object.freeze({ small, medium, large, shrink, grow, name });
})();

const Lasers = (() => {
	const create = (spec) => {
		let { x, y, dir, color, size } = spec;
		x = x || 0;
		y = y || 0;
		dir = dir || Dirs.none;
		color = color || Colors.black;
		size = size || Sizes.medium;

		return { x, y, dir, color, size };
	};

	const next = (laser) => {
		const { x, y, dir, color, size } = laser;
		const result = { x, y, dir, color, size };
		if (dir == Dirs.left) {
			result.x = x - 1;
			return result;
		} else if (dir == Dirs.right) {
			result.x = x + 1;
			return result;
		} else if (dir == Dirs.up) {
			result.y = y - 1;
			return result;
		} else if (dir == Dirs.down) {
			result.y = y + 1;
			return result;
		} else {
			return result;
		}
	};

	const copy = (laser) => {
		const { x, y, color, size, dir } = laser;
		return { x, y, color, size, dir };
	};

	const addColor = (laser, color) => {
		laser.color = Colors.add(laser.color, color);
	};

	const subtractColor = (laser, color) => {
		laser.color = Colors.subtract(laser.color, color);
	};

	const shrink = (laser) => {
		laser.size = Sizes.shrink(laser.size);
	};

	const grow = (laser) => {
		laser.size = Sizes.grow(laser.size);
	};

	return Object.freeze({ create, next, copy, addColor, subtractColor, shrink, grow });
})();

const Grids = (() => {
	const create = (dimensions) => {
		const { width, height } = dimensions;
		return { width, height, data: [], pieces: [] };
	};

	const createLaserFromEdge = (grid, edge) => {
		let {x, y, color, dir, size} = Lasers.create({});
		const {width, height} = grid;
		if (edge <= width) {
			x = edge - 1;
			dir = Dirs.down;
			return Lasers.create({})
		} else if (edge <= width + height) {
			x = width - 1;
			y = edge - width;
			dir = Dirs.left;
		} else if (edge <= width * 2 + height) {
			x = width * 2 + height - edge;
			y = height - 1;
			dir = Dirs.up;
		} else {
			y = width * 2 + height * 2 - edge;
			dir = Dirs.right;
		}
		return {x, y, color, dir, size};
	};

	const isLaserOnEdge = (grid, laser) => {
		const { x, y } = laser;
		const { width, height } = grid;
		return x == -1 || y == -1 || x == width || y == height;
	};

	const getPieceAtLoc = (grid, loc) => {
		const { width, data } = grid;
		const { x, y } = loc;
		return data[y * width + x];
	};

	return Object.freeze({ create, isLaserOnEdge, getPieceAtLoc });
})();

window.addEventListener("load", () => {
	const canvasId = "lasergame-canvas";

	const grid = Grids.create({ width: 5, height: 5 });

	/** @type {HTMLCanvasElement} */
	const canvas = document.getElementById(canvasId);
	const ctx = canvas.getContext("2d");

	function drawBackground() {
		const xSpace = canvas.width / (grid.width + 2);
		const ySpace = canvas.height / (grid.height + 2);

		ctx.fillStyle = "#B0B0B0";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.strokeStyle = "#000000";
		ctx.beginPath();
		for (let i = 1; i < grid.width + 2; i++) {
			const x = i * xSpace;
			ctx.moveTo(x, ySpace);
			ctx.lineTo(x, canvas.height - ySpace);
		}
		for (let i = 1; i < grid.height + 2; i++) {
			const y = i * ySpace;
			ctx.moveTo(xSpace, y);
			ctx.lineTo(canvas.width - xSpace, y);
		}
		ctx.stroke();
	}

	drawBackground();
});