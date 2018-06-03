"use strict";

const numCols = 5;
const numRows = 5;

/**
 * @typedef {Object} Dir
 * @prop {String} name
 * @prop {Dir} opposite
 * @prop {Dir} clockwise
 * @prop {Dir} counterclockwise
 */
const Dirs = (() => {
	/** @type {Dir} */
	const up = {name: "Up"};
	/** @type {Dir} */
	const down = {name: "Down"};
	/** @type {Dir} */
	const right = {name: "Right"};
	/** @type {Dir} */
	const left = {name: "Left"};
	/** @type {Dir} */
	const none = {name: "None"};

	up.opposite = down;
	up.clockwise = right;
	up.counterclockwise = left;

	down.opposite = up;
	down.clockwise = left;
	down.counterclockwise = right;

	right.opposite = left;
	right.clockwise = down;
	right.counterclockwise = up;

	left.opposite = right;
	left.clockwise = up;
	left.counterclockwise = down;

	none.opposite = none;
	none.clockwise = none;
	none.counterclockwise = none;

	return Object.freeze({up, down, left, right, none});
})();

/**
 * @typedef {Object} Color
 * @prop {Number} i
 * @prop {String} hex
 * @prop {(o: Color) => Color} add
 * @prop {String} name
 */

const Colors = (() => {
	/** @type {Color} */
	const black = {};
	const blue = {};
	const green = {};
	const cyan = {};
	const red = {};
	const magenta = {};
	const yellow = {};
	const white = {};

	const colorList = [black, blue, green, cyan, red, magenta, yellow, white];
	const colorMap = {black, blue, green, cyan, red, magenta, yellow, white};

	colorList.forEach((c, i) => {
		c.i = i;
		const r = i & 4 == 4 ? "ff" : "00";
		const g = i & 2 == 2 ? "ff" : "00";
		const b = i & 1 == 1 ? "ff" : "00";
		c.hex = `#${r}${g}${b}`;
		c.add = (o) => {
			return colorList[c.i & o.i];
		};
	});

	for (const prop in colorMap) {
		colorMap[prop].name = prop.charAt(0).toUpperCase + prop.slice(1);
	}

	return Object.freeze({black, blue, green, cyan, red, magenta, yellow, white});
})();

const Sizes = (() => {
	const small = {name: "Small", px: 4};
	const medium = {name: "Medium", px: 8};
	const large = {name: "Large", px: 12};

	small.smaller = small;
	small.bigger = medium;

	medium.smaller = small;
	medium.bigger = large;
	
	large.smaller = medium;
	large.bigger = large;

	return Object.freeze({small, medium, large});
})();

const createLaser = (spec) => {
	let x = spec.x || 0;
	let y = spec.y || 0;
	let dir = spec.dir || Dirs.none;
	let color = spec.color || Colors.black;
	let size = spec.size || Sizes.medium;

	if (spec.edge) {
		if (spec.edge <= numCols) {
			x = spec.edge - 1;
		} else {
			
		}
	}

	const next = () => {
		if (dir == Dirs.left) {
			return createLaser({x: x - 1, y, dir, color, size});
		} else if (dir == Dirs.right) {
			return createLaser({x: x + 1, y, dir, color, size});
		} else if (dir == Dirs.up) {
			return createLaser({x, y: y - 1, dir, color, size});
		} else if (dir == Dirs.down) {
			return createLaser({x, y: y + 1, dir, color, size});
		}
	};

	return Object.freeze({next});
}

class Piece {
	constructor() {

	}
}

class LaserGrid {

	/**
	 * 
	 * @param {{width: Number, height: Number}} dimensions 
	 */
	constructor(dimensions) {
		this.width = dimensions.width;
		this.height = dimensions.height;
		this.data = [];
		this.pieces = [];
	}

	/**
	 * Gets the piece at the location in the 2d grid
	 * @param {{x: Number, y: Number}} loc 
	 */
	getPieceAtLoc(loc) {
		if (loc.x < 0 || loc.x >= this.width || loc.y < 0 || loc.y >= this.height) {
			throw new Error(`Like, don't do that. ${loc.x} ${loc.y}`);
		}
		return this.data[loc.y * this.width + loc.x];
	}
}

window.addEventListener("load", () => {
	const canvasId = "lasergame-canvas";

	const grid = new LaserGrid(numCols);

	/** @type {HTMLCanvasElement} */
	const canvas = document.getElementById(canvasId);
	const ctx = canvas.getContext("2d");

	function drawBackground() {
		const xSpace = canvas.width / (numCols + 2);
		const ySpace = canvas.height / (numRows + 2);

		ctx.fillStyle = "#B0B0B0";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.strokeStyle = "#000000";
		ctx.beginPath();
		for (let i = 1; i < numCols + 2; i++) {
			const x = i * xSpace;
			ctx.moveTo(x, ySpace);
			ctx.lineTo(x, canvas.height - ySpace);
		}
		for (let i = 1; i < numRows + 2; i++) {
			const y = i * ySpace;
			ctx.moveTo(xSpace, y);
			ctx.lineTo(canvas.width - xSpace, y);
		}
		ctx.stroke();
	}

	drawBackground();
});