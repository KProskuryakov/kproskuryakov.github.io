/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lasergame/frontend/FrontendLasergame.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lasergame/Color.ts":
/*!********************************!*\
  !*** ./src/lasergame/Color.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["GREEN"] = 2] = "GREEN";
    Color[Color["CYAN"] = 3] = "CYAN";
    Color[Color["RED"] = 4] = "RED";
    Color[Color["MAGENTA"] = 5] = "MAGENTA";
    Color[Color["YELLOW"] = 6] = "YELLOW";
    Color[Color["WHITE"] = 7] = "WHITE";
})(Color || (Color = {}));
exports.default = Color;
function addColors(a, b) {
    return a | b;
}
exports.addColors = addColors;
function colorToRGBString(color) {
    const r = 4 === (4 & color) ? 255 : 0;
    const g = 2 === (2 & color) ? 255 : 0;
    const b = 1 === (1 & color) ? 255 : 0;
    return `rgb(${r},${g},${b})`;
}
exports.colorToRGBString = colorToRGBString;
function colorToName(color) {
    return Color[color];
}
exports.colorToName = colorToName;


/***/ }),

/***/ "./src/lasergame/Direction.ts":
/*!************************************!*\
  !*** ./src/lasergame/Direction.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["EAST"] = 1] = "EAST";
    Direction[Direction["SOUTH"] = 2] = "SOUTH";
    Direction[Direction["WEST"] = 3] = "WEST";
    Direction[Direction["NONE"] = 4] = "NONE";
    Direction[Direction["SPLIT_EAST_WEST"] = 5] = "SPLIT_EAST_WEST";
    Direction[Direction["SPLIT_NORTH_SOUTH"] = 6] = "SPLIT_NORTH_SOUTH";
})(Direction || (Direction = {}));
exports.default = Direction;
const oppositeDirection = [Direction.SOUTH, Direction.WEST, Direction.NORTH, Direction.EAST];
function getOppositeDirection(dir) {
    const oppDir = oppositeDirection[dir];
    return oppDir === undefined ? Direction.NONE : oppDir;
}
exports.getOppositeDirection = getOppositeDirection;


/***/ }),

/***/ "./src/lasergame/Ending.ts":
/*!*********************************!*\
  !*** ./src/lasergame/Ending.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var End;
(function (End) {
    End[End["Blocked"] = -2] = "Blocked";
    End[End["Loop"] = -1] = "Loop";
})(End = exports.End || (exports.End = {}));
function endingsEqual(a, b) {
    return a.end === b.end && a.color === b.color;
}
exports.endingsEqual = endingsEqual;


/***/ }),

/***/ "./src/lasergame/LaserGrid.ts":
/*!************************************!*\
  !*** ./src/lasergame/LaserGrid.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(/*! ./Color */ "./src/lasergame/Color.ts");
const Direction_1 = __webpack_require__(/*! ./Direction */ "./src/lasergame/Direction.ts");
const Ending_1 = __webpack_require__(/*! ./Ending */ "./src/lasergame/Ending.ts");
const PieceID_1 = __webpack_require__(/*! ./PieceID */ "./src/lasergame/PieceID.ts");
const Tile_1 = __webpack_require__(/*! ./Tile */ "./src/lasergame/Tile.ts");
function makeDefaultGrid() {
    const grid = [];
    for (let i = 0; i < 5; i++) {
        grid[i] = [];
    }
    const newGrid = {
        paths: [],
        grid: grid,
        length: 5, width: 5,
    };
    calculateAllEndings(newGrid);
    return newGrid;
}
exports.makeDefaultGrid = makeDefaultGrid;
function makeCustomGrid(availablePieces) {
    const grid = [];
    for (let i = 0; i < 5; i++) {
        grid[i] = [];
    }
    const newGrid = {
        paths: [],
        grid: grid,
        availablePieces,
        length: 5, width: 5,
    };
    calculateAllEndings(newGrid);
    return newGrid;
}
exports.makeCustomGrid = makeCustomGrid;
function tileToEdgeNumber(tile) {
    const x = tile.x;
    const y = tile.y;
    if (y === -1 && x > -1 && x < 5) {
        return 1 + x;
    }
    else if (x === 5 && y > -1 && y < 5) {
        return 6 + y;
    }
    else if (y === 5 && x > -1 && x < 5) {
        return 15 - x;
    }
    else if (x === -1 && y > -1 && y < 5) {
        return 20 - y;
    }
    return 0;
}
exports.tileToEdgeNumber = tileToEdgeNumber;
function edgeNumberToLaser(edge) {
    if (edge < 6) {
        return { tile: { x: edge - 1, y: -1 }, dir: Direction_1.default.SOUTH, color: Color_1.default.BLACK };
    }
    else if (edge < 11) {
        return { tile: { x: 5, y: edge - 6 }, dir: Direction_1.default.WEST, color: Color_1.default.BLACK };
    }
    else if (edge < 16) {
        return { tile: { x: -edge + 15, y: 5 }, dir: Direction_1.default.NORTH, color: Color_1.default.BLACK };
    }
    else if (edge < 21) {
        return { tile: { x: -1, y: -edge + 20 }, dir: Direction_1.default.EAST, color: Color_1.default.BLACK };
    }
    throw new Error("Incorrect Edge");
}
exports.edgeNumberToLaser = edgeNumberToLaser;
function getPieceFromGrid(laserGrid, tile) {
    if (laserGrid.grid[tile.y]) {
        return laserGrid.grid[tile.y][tile.x];
    }
    return undefined;
}
exports.getPieceFromGrid = getPieceFromGrid;
function isValidSpace(laserGrid, tile) {
    return Tile_1.tileWithinAreaExclusive(tile, { x: -1, y: -1 }, { x: laserGrid.width, y: laserGrid.length });
}
exports.isValidSpace = isValidSpace;
function removePieceFromGrid(laserGrid, piece) {
    laserGrid.grid[piece.tile.y][piece.tile.x] = undefined;
    piece.tile = { x: -1, y: -1 };
    calculateAllEndings(laserGrid);
    return piece;
}
exports.removePieceFromGrid = removePieceFromGrid;
function setPieceInGrid(laserGrid, piece, tile) {
    if (isValidSpace(laserGrid, piece.tile)) {
        laserGrid.grid[piece.tile.y][piece.tile.x] = undefined;
    }
    const currentPiece = getPieceFromGrid(laserGrid, tile);
    let removedPiece = undefined;
    if (currentPiece) {
        removedPiece = removePieceFromGrid(laserGrid, currentPiece);
    }
    piece.tile = tile;
    laserGrid.grid[tile.y][tile.x] = piece;
    calculateAllEndings(laserGrid);
    return removedPiece;
}
exports.setPieceInGrid = setPieceInGrid;
function calculateAllEndings(laserGrid) {
    const endings = [];
    for (let i = 0; i < 20; i++) {
        endings[i] = { start: i + 1, endings: calculateEndingList(laserGrid, i + 1) };
    }
    laserGrid.paths = endings;
}
exports.calculateAllEndings = calculateAllEndings;
function calculateEndingList(laserGrid, edge) {
    const endingList = [];
    function trackOneEnding(grid, laser) {
        for (let i = 0; i < 100; i++) {
            laser.tile = Tile_1.nextTile(laser.tile, laser.dir);
            if (!isValidSpace(grid, laser.tile)) {
                const endEdge = tileToEdgeNumber(laser.tile);
                endingList.push({ end: endEdge, color: laser.color });
                return;
            }
            const piece = getPieceFromGrid(grid, laser.tile);
            if (piece) {
                PieceID_1.applyPieceToLaser(laser, piece.pieceID);
                switch (laser.dir) {
                    case Direction_1.default.SPLIT_NORTH_SOUTH:
                        laser.dir = Direction_1.default.NORTH;
                        trackOneEnding(grid, { tile: laser.tile, dir: Direction_1.default.SOUTH, color: laser.color });
                        break;
                    case Direction_1.default.SPLIT_EAST_WEST:
                        laser.dir = Direction_1.default.EAST;
                        trackOneEnding(grid, { tile: laser.tile, dir: Direction_1.default.WEST, color: laser.color });
                        break;
                    case Direction_1.default.NONE:
                        endingList.push({ end: Ending_1.End.Blocked, color: laser.color });
                        return;
                }
            } // if piece is not null
        } // for
        endingList.push({ end: Ending_1.End.Loop, color: laser.color });
    } // trackOneEnding()
    trackOneEnding(laserGrid, edgeNumberToLaser(edge));
    endingList.sort((a, b) => a.end < b.end ? -1 : 1);
    return endingList;
}


/***/ }),

/***/ "./src/lasergame/LaserSegment.ts":
/*!***************************************!*\
  !*** ./src/lasergame/LaserSegment.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Direction_1 = __webpack_require__(/*! ./Direction */ "./src/lasergame/Direction.ts");
const Tile_1 = __webpack_require__(/*! ./Tile */ "./src/lasergame/Tile.ts");
function getOppositeLaserSegment(laser) {
    return { tile: Tile_1.copyTile(laser.tile), dir: Direction_1.getOppositeDirection(laser.dir), color: laser.color };
}
exports.getOppositeLaserSegment = getOppositeLaserSegment;
function copyLaserSegment(laser) {
    return { tile: Tile_1.copyTile(laser.tile), dir: laser.dir, color: laser.color };
}
exports.copyLaserSegment = copyLaserSegment;


/***/ }),

/***/ "./src/lasergame/LevelType.ts":
/*!************************************!*\
  !*** ./src/lasergame/LevelType.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LevelType;
(function (LevelType) {
    LevelType[LevelType["Daily"] = 0] = "Daily";
    LevelType[LevelType["Random"] = 1] = "Random";
    LevelType[LevelType["Custom"] = 2] = "Custom";
})(LevelType || (LevelType = {}));
exports.default = LevelType;


/***/ }),

/***/ "./src/lasergame/Path.ts":
/*!*******************************!*\
  !*** ./src/lasergame/Path.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Ending_1 = __webpack_require__(/*! ./Ending */ "./src/lasergame/Ending.ts");
function equalPaths(a, b) {
    if (a.endings.length !== b.endings.length)
        return false;
    for (let i = 0; i < a.endings.length; i++) {
        if (!Ending_1.endingsEqual(a.endings[i], b.endings[i])) {
            return false;
        }
    }
    return true;
}
exports.equalPaths = equalPaths;


/***/ }),

/***/ "./src/lasergame/PieceID.ts":
/*!**********************************!*\
  !*** ./src/lasergame/PieceID.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(/*! ./Color */ "./src/lasergame/Color.ts"), colorManager = Color_1;
const Direction_1 = __webpack_require__(/*! ./Direction */ "./src/lasergame/Direction.ts");
var PieceID;
(function (PieceID) {
    PieceID[PieceID["FORWARD_SLASH"] = 0] = "FORWARD_SLASH";
    PieceID[PieceID["BACK_SLASH"] = 1] = "BACK_SLASH";
    PieceID[PieceID["BLACK_HOLE"] = 2] = "BLACK_HOLE";
    PieceID[PieceID["HORI_SPLIT"] = 3] = "HORI_SPLIT";
    PieceID[PieceID["VERT_SPLIT"] = 4] = "VERT_SPLIT";
    PieceID[PieceID["RED"] = 5] = "RED";
    PieceID[PieceID["BLUE"] = 6] = "BLUE";
    PieceID[PieceID["GREEN"] = 7] = "GREEN";
})(PieceID || (PieceID = {}));
exports.default = PieceID;
const pieceRuleList = [
    { dirs: [Direction_1.default.EAST, Direction_1.default.NORTH, Direction_1.default.WEST, Direction_1.default.SOUTH] },
    { dirs: [Direction_1.default.WEST, Direction_1.default.SOUTH, Direction_1.default.EAST, Direction_1.default.NORTH] },
    { dirs: [Direction_1.default.NONE, Direction_1.default.NONE, Direction_1.default.NONE, Direction_1.default.NONE] },
    { dirs: [Direction_1.default.EAST, Direction_1.default.NONE, Direction_1.default.EAST, Direction_1.default.SPLIT_NORTH_SOUTH] },
    { dirs: [Direction_1.default.NONE, Direction_1.default.NORTH, Direction_1.default.SPLIT_EAST_WEST, Direction_1.default.NORTH] },
    { color: Color_1.default.RED },
    { color: Color_1.default.BLUE },
    { color: Color_1.default.GREEN },
];
function applyPieceToLaser(laser, pieceID) {
    const pieceRules = pieceRuleList[pieceID];
    if (pieceRules.dirs) {
        laser.dir = pieceRules.dirs[laser.dir];
    }
    if (pieceRules.color) {
        laser.color = colorManager.addColors(laser.color, pieceRules.color);
    }
    return laser;
}
exports.applyPieceToLaser = applyPieceToLaser;


/***/ }),

/***/ "./src/lasergame/Tile.ts":
/*!*******************************!*\
  !*** ./src/lasergame/Tile.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Direction_1 = __webpack_require__(/*! ./Direction */ "./src/lasergame/Direction.ts");
function directionToTile(direction) {
    switch (direction) {
        case Direction_1.default.NORTH:
            return { x: 0, y: -1 };
        case Direction_1.default.EAST:
            return { x: 1, y: 0 };
        case Direction_1.default.SOUTH:
            return { x: 0, y: 1 };
        case Direction_1.default.WEST:
            return { x: -1, y: 0 };
        default:
            return { x: 0, y: 0 };
    }
}
exports.directionToTile = directionToTile;
function nextTile(tile, dir) {
    return addTiles(tile, directionToTile(dir));
}
exports.nextTile = nextTile;
function addTiles(...tiles) {
    return tiles.reduce((p, v, _) => {
        return { x: p.x + v.x, y: p.y + v.y };
    }, { x: 0, y: 0 });
}
exports.addTiles = addTiles;
function subTiles(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
exports.subTiles = subTiles;
function copyTile(tile) {
    return { x: tile.x, y: tile.y };
}
exports.copyTile = copyTile;
function tileNotNegative(tile) {
    return tileCompare(tile, { x: -1, y: -1 }, (a, b) => a > b);
}
exports.tileNotNegative = tileNotNegative;
function tileCompare(a, b, compare) {
    return compare(a.x, b.x) && compare(a.y, b.y);
}
exports.tileCompare = tileCompare;
function tileWithinAreaInclusive(tile, min, max) {
    return tileCompare(tile, min, (a, b) => a >= b) && tileCompare(tile, max, (a, b) => a <= b);
}
exports.tileWithinAreaInclusive = tileWithinAreaInclusive;
function tileWithinAreaExclusive(tile, min, max) {
    return tileCompare(tile, min, (a, b) => a > b) && tileCompare(tile, max, (a, b) => a < b);
}
exports.tileWithinAreaExclusive = tileWithinAreaExclusive;


/***/ }),

/***/ "./src/lasergame/frontend/FrontendEnding.ts":
/*!**************************************************!*\
  !*** ./src/lasergame/frontend/FrontendEnding.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(/*! ../Color */ "./src/lasergame/Color.ts");
const Ending_1 = __webpack_require__(/*! ../Ending */ "./src/lasergame/Ending.ts");
function endingToString(ending) {
    const colorString = Color_1.colorToName(ending.color);
    return ending.end === Ending_1.End.Blocked ? `blocked ${colorString}` :
        ending.end === Ending_1.End.Loop ? `loop ${colorString}` :
            `${ending.end} ${colorString}`;
}
exports.endingToString = endingToString;


/***/ }),

/***/ "./src/lasergame/frontend/FrontendLasergame.ts":
/*!*****************************************************!*\
  !*** ./src/lasergame/frontend/FrontendLasergame.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LaserGrid_1 = __webpack_require__(/*! ../LaserGrid */ "./src/lasergame/LaserGrid.ts");
const LevelType_1 = __webpack_require__(/*! ../LevelType */ "./src/lasergame/LevelType.ts");
const Path_1 = __webpack_require__(/*! ../Path */ "./src/lasergame/Path.ts");
const PieceID_1 = __webpack_require__(/*! ../PieceID */ "./src/lasergame/PieceID.ts");
const LaserGridComponent_1 = __webpack_require__(/*! ./components/LaserGridComponent */ "./src/lasergame/frontend/components/LaserGridComponent.ts");
const PieceComponent_1 = __webpack_require__(/*! ./components/PieceComponent */ "./src/lasergame/frontend/components/PieceComponent.ts");
const ToolbarComponent_1 = __webpack_require__(/*! ./components/ToolbarComponent */ "./src/lasergame/frontend/components/ToolbarComponent.ts");
const FrontendPath_1 = __webpack_require__(/*! ./FrontendPath */ "./src/lasergame/frontend/FrontendPath.ts");
const HTMLElements_1 = __webpack_require__(/*! ./HTMLElements */ "./src/lasergame/frontend/HTMLElements.ts");
exports.toolbar = new ToolbarComponent_1.default("./toolbar.png", { x: 0, y: 7 }, 8, 1, draw);
exports.lasergridComponent = new LaserGridComponent_1.default("./lasergrid.png", { x: 0, y: 0 }, 7, 7, draw);
exports.pieceComponents = [];
let currentLevel;
exports.availablePieces = [];
exports.pieceIndexMap = new Map();
let levelType = LevelType_1.default.Custom;
// let difficulty = "medium";
/**
 * Inits the things that aren't constants
 */
function init() {
    HTMLElements_1.canvas.addEventListener("click", onClick);
    HTMLElements_1.canvas.addEventListener("contextmenu", e => {
        e.preventDefault();
        onClick(e);
    });
    exports.pieceComponents[PieceID_1.default.FORWARD_SLASH] = new PieceComponent_1.default(PieceID_1.default.FORWARD_SLASH, "./pieces/mirror_forwardslash.png", draw);
    exports.pieceComponents[PieceID_1.default.BACK_SLASH] = new PieceComponent_1.default(PieceID_1.default.BACK_SLASH, "./pieces/mirror_backslash.png", draw);
    exports.pieceComponents[PieceID_1.default.BLACK_HOLE] = new PieceComponent_1.default(PieceID_1.default.BLACK_HOLE, "./pieces/mirror_blackhole.png", draw);
    exports.pieceComponents[PieceID_1.default.HORI_SPLIT] = new PieceComponent_1.default(PieceID_1.default.HORI_SPLIT, "./pieces/mirror_sidesplit.png", draw);
    exports.pieceComponents[PieceID_1.default.VERT_SPLIT] = new PieceComponent_1.default(PieceID_1.default.VERT_SPLIT, "./pieces/mirror_upsplit.png", draw);
    exports.pieceComponents[PieceID_1.default.BLUE] = new PieceComponent_1.default(PieceID_1.default.BLUE, "./pieces/swatch_blue.png", draw);
    exports.pieceComponents[PieceID_1.default.RED] = new PieceComponent_1.default(PieceID_1.default.RED, "./pieces/swatch_red.png", draw);
    exports.pieceComponents[PieceID_1.default.GREEN] = new PieceComponent_1.default(PieceID_1.default.GREEN, "./pieces/swatch_green.png", draw);
    for (let i = 0; i < 8; i++) {
        const piece = { pieceID: i, tile: { x: -1, y: -1 } };
        exports.availablePieces[i] = piece;
        exports.pieceIndexMap.set(piece, i);
    }
    LaserGrid_1.calculateAllEndings(exports.lasergridComponent.lasergrid);
    printPaths();
    exports.lasergridComponent.calculateDrawPathWrapper();
}
function draw() {
    HTMLElements_1.ctx.clearRect(0, 0, HTMLElements_1.canvas.width, HTMLElements_1.canvas.height);
    HTMLElements_1.ctx.fillStyle = "#9c9a9b";
    HTMLElements_1.ctx.fillRect(0, 0, HTMLElements_1.canvas.width, HTMLElements_1.canvas.height);
    exports.lasergridComponent.draw(HTMLElements_1.ctx);
    exports.toolbar.draw(HTMLElements_1.ctx);
}
function onClick(event) {
    const loc = windowToCanvas(event.clientX, event.clientY);
    exports.lasergridComponent.processMouseClick(loc.x, loc.y, event.button);
    exports.toolbar.processMouseClick(loc.x, loc.y, event.button);
    printPaths();
    if (currentLevel && checkVictory()) {
        if (levelType === LevelType_1.default.Random) {
            HTMLElements_1.victoryP.innerHTML = `Incredible! You won!">`
                + `Click here to generate a new random puzzle!</a>`;
        }
        else if (levelType === LevelType_1.default.Daily) {
            HTMLElements_1.victoryP.textContent = "Wow! You beat the daily level!";
        }
        else if (levelType === LevelType_1.default.Custom) {
            HTMLElements_1.victoryP.textContent = "Wow! You beat the custom level!";
        }
        HTMLElements_1.victoryP.hidden = false;
    }
    draw();
}
function populateEdgeLevelData() {
    if (currentLevel) {
        exports.edgeLevelData = [];
        for (const path of currentLevel) {
            const edge = path.start;
            let solved = false;
            if (Path_1.equalPaths(path, exports.lasergridComponent.lasergrid.paths[path.start - 1])) {
                solved = true;
            }
            exports.edgeLevelData.push({ edge, solved });
        }
    }
}
function checkVictory() {
    for (const data of exports.edgeLevelData) {
        if (!data.solved) {
            return false;
        }
    }
    return true;
}
function printPaths() {
    if (currentLevel) {
        populateEdgeLevelData();
        printLevelPaths();
    }
    else {
        printAllPaths();
    }
}
exports.printPaths = printPaths;
function printAllPaths() {
    HTMLElements_1.pathsPre.innerHTML = "";
    const paths = exports.lasergridComponent.lasergrid.paths;
    for (let i = 0; i < 20; i++) {
        const curPath = paths[i];
        let line = FrontendPath_1.pathToString(curPath);
        if (exports.lasergridComponent.selectedEdge === i + 1) {
            line = `><b>${line}</b>`;
        }
        HTMLElements_1.pathsPre.innerHTML += line;
        if (i < 19) {
            HTMLElements_1.pathsPre.innerHTML += "\n";
        }
    }
}
function printLevelPaths() {
    HTMLElements_1.pathsPre.innerHTML = "";
    const paths = exports.lasergridComponent.lasergrid.paths;
    for (let i = 0; i < currentLevel.length; i++) {
        const levelPath = currentLevel[i];
        const curPath = paths[levelPath.start - 1];
        let line = FrontendPath_1.pathToString(levelPath);
        line = Path_1.equalPaths(curPath, levelPath) ? `<span style='color: green'>${line}</span>`
            : `<span style='color: red'>${line}</span>`;
        if (exports.lasergridComponent.selectedEdge === levelPath.start) {
            line = `><b>${line}</b>`;
        }
        HTMLElements_1.pathsPre.innerHTML += line;
        if (i < currentLevel.length - 1) {
            HTMLElements_1.pathsPre.innerHTML += "\n";
        }
    }
}
/**
 * Converts the x, y pixel coordinates from window position to relative canvas position
 * @param {number} x clientX
 * @param {number} y clientY
 * @returns {{x: number, y: number}} a relative location to the canvas
 */
function windowToCanvas(x, y) {
    const bbox = HTMLElements_1.canvas.getBoundingClientRect();
    return {
        x: x - bbox.left * (HTMLElements_1.canvas.width / bbox.width),
        y: y - bbox.top * (HTMLElements_1.canvas.height / bbox.height),
    };
}
// export function getLevel(seed: string, difficultyString: string) {
//   difficulty = difficultyString;
//   window.fetch(`/api/lasergame/seed/${difficultyString}/${seed}`, {
//     credentials: "same-origin",
//     method: "GET",
//   }).then((response) => {
//     response.json().then((randomLevel) => {
//       levelType = LevelType.Random;
//       const levelData = randomLevel.levelData;
//       const newSeed = randomLevel.seed;
//       currentLevel = [];
//       for (const data of levelData.paths) {
//         currentLevel.push(data);
//       }
//       availablePieces = levelData.availablePieces;
//       printPaths();
//       draw();
//     });
//   });
// }
init();


/***/ }),

/***/ "./src/lasergame/frontend/FrontendPath.ts":
/*!************************************************!*\
  !*** ./src/lasergame/frontend/FrontendPath.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FrontendEnding_1 = __webpack_require__(/*! ./FrontendEnding */ "./src/lasergame/frontend/FrontendEnding.ts");
function pathToString(path) {
    return startToString(path) + endingListToString(path);
}
exports.pathToString = pathToString;
function startToString(path) {
    let str = `${path.start}`;
    if (path.start < 10) {
        str += "  -> ";
    }
    else {
        str += " -> ";
    }
    return str;
}
exports.startToString = startToString;
function endingListToString(path) {
    if (path.endings.length > 1) {
        let str = `{${FrontendEnding_1.endingToString(path.endings[0])}, `;
        for (let curEnding = 1; curEnding < path.endings.length - 1; curEnding++) {
            str += `${FrontendEnding_1.endingToString(path.endings[curEnding])}, `;
        }
        str += `${FrontendEnding_1.endingToString(path.endings[path.endings.length - 1])}}`;
        return str;
    }
    return FrontendEnding_1.endingToString(path.endings[0]);
}
exports.endingListToString = endingListToString;


/***/ }),

/***/ "./src/lasergame/frontend/FrontendTile.ts":
/*!************************************************!*\
  !*** ./src/lasergame/frontend/FrontendTile.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TILE_FULL = 50;
exports.TILE_HALF = exports.TILE_FULL / 2;
function tileFromPixels(x, y) {
    return { x: Math.floor(x / exports.TILE_FULL), y: Math.floor(y / exports.TILE_FULL) };
}
exports.tileFromPixels = tileFromPixels;
function tileToPixels(tile) {
    return { px: tile.x * exports.TILE_FULL, py: tile.y * exports.TILE_FULL };
}
exports.tileToPixels = tileToPixels;


/***/ }),

/***/ "./src/lasergame/frontend/HTMLElements.ts":
/*!************************************************!*\
  !*** ./src/lasergame/frontend/HTMLElements.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.importPre = document.getElementById("imported-pre");
exports.pathsPre = document.getElementById("paths-pre");
exports.canvas = document.getElementById("laser-game-canvas");
exports.victoryP = document.getElementById("victory-p");
exports.ctx = exports.canvas.getContext("2d");


/***/ }),

/***/ "./src/lasergame/frontend/components/CanvasComponent.ts":
/*!**************************************************************!*\
  !*** ./src/lasergame/frontend/components/CanvasComponent.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Tile_1 = __webpack_require__(/*! ../../Tile */ "./src/lasergame/Tile.ts");
const FrontendTile_1 = __webpack_require__(/*! ../FrontendTile */ "./src/lasergame/frontend/FrontendTile.ts");
/**
 * An abstract class representing a smaller section of the canvas
 */
class CanvasComponent {
    constructor(src, tile, widthInTiles, heightInTiles, draw, offsetX = 0, offsetY = 0) {
        this.img = new Image();
        this.img.onload = () => { draw(); };
        this.img.src = src;
        this.tile = tile;
        this.widthInTiles = widthInTiles;
        this.heightInTiles = heightInTiles;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }
    /**
     * Draws the components image at the location
     */
    draw(ctx) {
        const loc = FrontendTile_1.tileToPixels(this.tile);
        ctx.drawImage(this.img, loc.px + this.offsetX, loc.py + this.offsetY);
    }
    /**
     * Figures out whether a button press happened inside the component and returns it. If it didn't, returns null.
     */
    processMouseClick(x, y, _button) {
        const relativeTile = Tile_1.subTiles(FrontendTile_1.tileFromPixels(x, y), this.tile);
        if (Tile_1.tileWithinAreaExclusive(relativeTile, { x: -1, y: -1 }, { x: this.widthInTiles, y: this.heightInTiles })) {
            return relativeTile;
        }
        return null;
    }
}
exports.default = CanvasComponent;


/***/ }),

/***/ "./src/lasergame/frontend/components/LaserGridComponent.ts":
/*!*****************************************************************!*\
  !*** ./src/lasergame/frontend/components/LaserGridComponent.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(/*! ../../Color */ "./src/lasergame/Color.ts");
const Direction_1 = __webpack_require__(/*! ../../Direction */ "./src/lasergame/Direction.ts");
const LaserGrid_1 = __webpack_require__(/*! ../../LaserGrid */ "./src/lasergame/LaserGrid.ts");
const LaserSegment_1 = __webpack_require__(/*! ../../LaserSegment */ "./src/lasergame/LaserSegment.ts");
const PieceID_1 = __webpack_require__(/*! ../../PieceID */ "./src/lasergame/PieceID.ts");
const Tile_1 = __webpack_require__(/*! ../../Tile */ "./src/lasergame/Tile.ts");
const FrontendLasergame_1 = __webpack_require__(/*! ../FrontendLasergame */ "./src/lasergame/frontend/FrontendLasergame.ts");
const FrontendTile_1 = __webpack_require__(/*! ../FrontendTile */ "./src/lasergame/frontend/FrontendTile.ts");
const CanvasComponent_1 = __webpack_require__(/*! ./CanvasComponent */ "./src/lasergame/frontend/components/CanvasComponent.ts");
class LaserGridComponent extends CanvasComponent_1.default {
    constructor(src, tile, widthInTiles, heightInTiles, draw, offsetX = 0, offsetY = 0) {
        super(src, tile, widthInTiles, heightInTiles, draw, offsetX, offsetY);
        this.lasergrid = LaserGrid_1.makeDefaultGrid();
        this.selectedEdge = 1;
        this.drawPath = [];
        this.importedPathsList = [];
    }
    draw(ctx) {
        super.draw(ctx);
        // Draw pieces on grid
        for (const piece of FrontendLasergame_1.availablePieces) {
            if ((Tile_1.tileWithinAreaInclusive(piece.tile, { x: 0, y: 0 }, { x: 4, y: 4 }))) {
                FrontendLasergame_1.pieceComponents[piece.pieceID].drawAt(Tile_1.addTiles(this.tile, piece.tile, { x: 1, y: 1 }), ctx);
            }
        }
        // Draw laser path on grid
        for (const laser of this.drawPath) {
            ctx.beginPath();
            ctx.strokeStyle = Color_1.colorToRGBString(laser.color);
            const loc = FrontendTile_1.tileToPixels(Tile_1.addTiles(laser.tile, { x: 1, y: 1 }));
            loc.px += FrontendTile_1.TILE_HALF;
            loc.py += FrontendTile_1.TILE_HALF;
            ctx.moveTo(loc.px, loc.py);
            const tilemap = Tile_1.directionToTile(laser.dir);
            ctx.lineTo(loc.px + tilemap.x * FrontendTile_1.TILE_HALF, loc.py + tilemap.y * FrontendTile_1.TILE_HALF);
            ctx.stroke();
        }
        // Draw selected edge marker on grid
        let selectedEdgePixels = FrontendTile_1.tileToPixels(Tile_1.addTiles(LaserGrid_1.edgeNumberToLaser(this.selectedEdge).tile, { x: 1, y: 1 }));
        ctx.strokeStyle = "#FFFFFF";
        ctx.beginPath();
        if (this.selectedEdge < 6) {
            ctx.moveTo(selectedEdgePixels.px + FrontendTile_1.TILE_HALF - 5, selectedEdgePixels.py + FrontendTile_1.TILE_FULL - 5);
            ctx.lineTo(selectedEdgePixels.px + FrontendTile_1.TILE_HALF, selectedEdgePixels.py + FrontendTile_1.TILE_FULL);
            ctx.lineTo(selectedEdgePixels.px + FrontendTile_1.TILE_HALF + 5, selectedEdgePixels.py + FrontendTile_1.TILE_FULL - 5);
        }
        else if (this.selectedEdge < 11) {
            ctx.moveTo(selectedEdgePixels.px + 5, selectedEdgePixels.py + FrontendTile_1.TILE_HALF - 5);
            ctx.lineTo(selectedEdgePixels.px, selectedEdgePixels.py + FrontendTile_1.TILE_HALF);
            ctx.lineTo(selectedEdgePixels.px + 5, selectedEdgePixels.py + FrontendTile_1.TILE_HALF + 5);
        }
        else if (this.selectedEdge < 16) {
            ctx.moveTo(selectedEdgePixels.px + FrontendTile_1.TILE_HALF - 5, selectedEdgePixels.py + 5);
            ctx.lineTo(selectedEdgePixels.px + FrontendTile_1.TILE_HALF, selectedEdgePixels.py);
            ctx.lineTo(selectedEdgePixels.px + FrontendTile_1.TILE_HALF + 5, selectedEdgePixels.py + 5);
        }
        else if (this.selectedEdge < 21) {
            ctx.moveTo(selectedEdgePixels.px + FrontendTile_1.TILE_FULL - 5, selectedEdgePixels.py + FrontendTile_1.TILE_HALF - 5);
            ctx.lineTo(selectedEdgePixels.px + FrontendTile_1.TILE_FULL, selectedEdgePixels.py + FrontendTile_1.TILE_HALF);
            ctx.lineTo(selectedEdgePixels.px + FrontendTile_1.TILE_FULL - 5, selectedEdgePixels.py + FrontendTile_1.TILE_HALF + 5);
        }
        ctx.stroke();
        // Draw level edge hints
        if (FrontendLasergame_1.edgeLevelData) {
            ctx.globalAlpha = 0.1;
            for (const edgeData of FrontendLasergame_1.edgeLevelData) {
                selectedEdgePixels = FrontendTile_1.tileToPixels(Tile_1.addTiles(LaserGrid_1.edgeNumberToLaser(edgeData.edge).tile, { x: 1, y: 1 }));
                ctx.fillStyle = edgeData.solved ? "#00FF00" : "#FF0000";
                ctx.fillRect(selectedEdgePixels.px, selectedEdgePixels.py, FrontendTile_1.TILE_FULL, FrontendTile_1.TILE_FULL);
            }
            ctx.globalAlpha = 1.0;
        }
        // Draw edge numbers
        for (let e = 1; e <= 20; e++) {
            selectedEdgePixels = FrontendTile_1.tileToPixels(Tile_1.addTiles(LaserGrid_1.edgeNumberToLaser(e).tile, { x: 1, y: 1 }));
            ctx.fillStyle = "#000000";
            ctx.font = "24px sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillText(e.toString(), selectedEdgePixels.px + FrontendTile_1.TILE_HALF - ctx.measureText(e.toString()).width / 2, selectedEdgePixels.py + FrontendTile_1.TILE_HALF);
        }
    }
    processMouseClick(x, y, button) {
        const relativeTile = super.processMouseClick(x, y, button);
        console.log(button);
        if (relativeTile === null) {
            return null;
        }
        if (Tile_1.tileWithinAreaInclusive(relativeTile, { x: 1, y: 1 }, { x: 5, y: 5 })) {
            // tile in grid
            const loc = Tile_1.subTiles(relativeTile, { x: 1, y: 1 });
            const piece = LaserGrid_1.getPieceFromGrid(this.lasergrid, loc);
            if (piece) {
                const removedPiece = LaserGrid_1.removePieceFromGrid(this.lasergrid, piece);
                if (button === 0) { // left mouse button
                    FrontendLasergame_1.toolbar.selectedPiece = FrontendLasergame_1.pieceIndexMap.get(removedPiece);
                }
            }
            else {
                LaserGrid_1.setPieceInGrid(this.lasergrid, FrontendLasergame_1.availablePieces[FrontendLasergame_1.toolbar.selectedPiece], loc);
            }
            FrontendLasergame_1.printPaths();
            this.calculateDrawPathWrapper();
        }
        const newEdge = LaserGrid_1.tileToEdgeNumber(Tile_1.addTiles(relativeTile, { x: -1, y: -1 }));
        if (newEdge !== 0) {
            this.selectedEdge = newEdge;
        }
        this.calculateDrawPathWrapper();
        return relativeTile;
    }
    calculateDrawPathWrapper() {
        this.drawPath = [];
        this.calculateDrawPath(LaserGrid_1.edgeNumberToLaser(this.selectedEdge));
    }
    calculateDrawPath(laser) {
        for (let i = 0; i < 100; i++) {
            laser.tile = Tile_1.nextTile(laser.tile, laser.dir);
            if (!Tile_1.tileWithinAreaInclusive(laser.tile, { x: 0, y: 0 }, { x: 4, y: 4 })) {
                return;
            }
            const piece = LaserGrid_1.getPieceFromGrid(this.lasergrid, laser.tile);
            this.drawPath.push(LaserSegment_1.getOppositeLaserSegment(laser));
            if (piece) {
                PieceID_1.applyPieceToLaser(laser, piece.pieceID);
                switch (laser.dir) {
                    case Direction_1.default.SPLIT_NORTH_SOUTH:
                        laser.dir = Direction_1.default.NORTH;
                        this.drawPath.push(LaserSegment_1.getOppositeLaserSegment(laser));
                        this.calculateDrawPath(LaserSegment_1.getOppositeLaserSegment(laser));
                        break;
                    case Direction_1.default.SPLIT_EAST_WEST:
                        laser.dir = Direction_1.default.EAST;
                        this.drawPath.push(LaserSegment_1.getOppositeLaserSegment(laser));
                        this.calculateDrawPath(LaserSegment_1.getOppositeLaserSegment(laser));
                        break;
                    case Direction_1.default.NONE:
                        return;
                }
            } // if piece is not null
            this.drawPath.push(LaserSegment_1.copyLaserSegment(laser));
        }
    }
}
exports.default = LaserGridComponent;


/***/ }),

/***/ "./src/lasergame/frontend/components/PieceComponent.ts":
/*!*************************************************************!*\
  !*** ./src/lasergame/frontend/components/PieceComponent.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FrontendTile_1 = __webpack_require__(/*! ../FrontendTile */ "./src/lasergame/frontend/FrontendTile.ts");
class PieceComponent {
    constructor(pieceID, src, draw) {
        this.piece = { pieceID, tile: { x: -1, y: -1 } };
        this.isPlaced = false;
        this.img = new Image();
        this.img.onload = () => { draw(); };
        this.img.src = src;
    }
    drawAt(tile, ctx) {
        const pos = FrontendTile_1.tileToPixels(tile);
        ctx.drawImage(this.img, pos.px, pos.py);
    }
}
exports.default = PieceComponent;


/***/ }),

/***/ "./src/lasergame/frontend/components/ToolbarComponent.ts":
/*!***************************************************************!*\
  !*** ./src/lasergame/frontend/components/ToolbarComponent.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Tile_1 = __webpack_require__(/*! ../../Tile */ "./src/lasergame/Tile.ts");
const FrontendLasergame_1 = __webpack_require__(/*! ../FrontendLasergame */ "./src/lasergame/frontend/FrontendLasergame.ts");
const FrontendTile_1 = __webpack_require__(/*! ../FrontendTile */ "./src/lasergame/frontend/FrontendTile.ts");
const CanvasComponent_1 = __webpack_require__(/*! ./CanvasComponent */ "./src/lasergame/frontend/components/CanvasComponent.ts");
/**
 * The toolbar to select the pieces to put in the grid
 */
class ToolbarComponent extends CanvasComponent_1.default {
    /**
     *
     * @param {string} src
     * @param {Tile} tile
     * @param {number} widthInTiles
     * @param {number} heightInTiles
     * @param {number} [offsetX = 0] pixel offset for the image
     * @param {number} [offsetY = 0] pixel offset for the image
     */
    constructor(src, tile, widthInTiles, heightInTiles, draw, offsetX = 0, offsetY = 0) {
        super(src, tile, widthInTiles, heightInTiles, draw, offsetX, offsetY);
        this.selectedPiece = 0;
    }
    /**
     * draws the image, the pieces and the highlight
     */
    draw(ctx) {
        super.draw(ctx);
        // draw pieces in each box
        for (let i = 0; i < FrontendLasergame_1.availablePieces.length; i++) {
            FrontendLasergame_1.pieceComponents[FrontendLasergame_1.availablePieces[i].pieceID].drawAt(Tile_1.addTiles(this.tile, { x: i, y: 0 }), ctx);
        }
        // draw the green and red highlights
        ctx.fillStyle = "green";
        ctx.globalAlpha = 0.2;
        let loc = FrontendTile_1.tileToPixels(Tile_1.addTiles(this.tile, { x: this.selectedPiece, y: 0 }));
        ctx.fillRect(loc.px, loc.py, FrontendTile_1.TILE_FULL, FrontendTile_1.TILE_FULL);
        ctx.fillStyle = "red";
        for (let i = 0; i < FrontendLasergame_1.availablePieces.length; i++) {
            const piece = FrontendLasergame_1.availablePieces[i];
            if (i !== this.selectedPiece && Tile_1.tileNotNegative(piece.tile)) {
                loc = FrontendTile_1.tileToPixels(Tile_1.addTiles(this.tile, { x: i, y: 0 }));
                ctx.fillRect(loc.px, loc.py, FrontendTile_1.TILE_FULL, FrontendTile_1.TILE_FULL);
            }
        }
        ctx.globalAlpha = 1.0;
    }
    /**
     * Selects a piece if clicked on.
     * @param {number} x a pixel x value
     * @param {number} y a pixel y value
     */
    processMouseClick(x, y, button) {
        const relativeTile = super.processMouseClick(x, y, button);
        if (relativeTile !== null) {
            this.selectedPiece = relativeTile.x;
        }
        return relativeTile;
    }
    /**
     * Fetches the selected piece object.
     * @returns {Piece}
     */
    getSelectedPieceComponent() {
        return FrontendLasergame_1.pieceComponents[this.selectedPiece];
    }
}
exports.default = ToolbarComponent;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9Db2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0VuZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0xhc2VyR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0xhc2VyU2VnbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0xldmVsVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL1BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9QaWVjZUlELnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvVGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL0Zyb250ZW5kRW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvRnJvbnRlbmRMYXNlcmdhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9Gcm9udGVuZFBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9Gcm9udGVuZFRpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9IVE1MRWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9jb21wb25lbnRzL0NhbnZhc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL2NvbXBvbmVudHMvTGFzZXJHcmlkQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvY29tcG9uZW50cy9QaWVjZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL2NvbXBvbmVudHMvVG9vbGJhckNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSyxLQVNKO0FBVEQsV0FBSyxLQUFLO0lBQ1IsbUNBQUs7SUFDTCxpQ0FBSTtJQUNKLG1DQUFLO0lBQ0wsaUNBQUk7SUFDSiwrQkFBRztJQUNILHVDQUFPO0lBQ1AscUNBQU07SUFDTixtQ0FBSztBQUNQLENBQUMsRUFUSSxLQUFLLEtBQUwsS0FBSyxRQVNUO0FBQ0Qsa0JBQWUsS0FBSyxDQUFDO0FBRXJCLFNBQWdCLFNBQVMsQ0FBQyxDQUFRLEVBQUUsQ0FBUTtJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxLQUFZO0lBQzNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQy9CLENBQUM7QUFMRCw0Q0FLQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxLQUFZO0lBQ3RDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFGRCxrQ0FFQzs7Ozs7Ozs7Ozs7Ozs7O0FDekJELElBQUssU0FRSjtBQVJELFdBQUssU0FBUztJQUNaLDJDQUFLO0lBQ0wseUNBQUk7SUFDSiwyQ0FBSztJQUNMLHlDQUFJO0lBQ0oseUNBQUk7SUFDSiwrREFBZTtJQUNmLG1FQUFpQjtBQUNuQixDQUFDLEVBUkksU0FBUyxLQUFULFNBQVMsUUFRYjtBQUNELGtCQUFlLFNBQVMsQ0FBQztBQUV6QixNQUFNLGlCQUFpQixHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdGLFNBQWdCLG9CQUFvQixDQUFDLEdBQWM7SUFDakQsTUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsT0FBTyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDeEQsQ0FBQztBQUhELG9EQUdDOzs7Ozs7Ozs7Ozs7Ozs7QUNURCxJQUFZLEdBR1g7QUFIRCxXQUFZLEdBQUc7SUFDYixvQ0FBWTtJQUNaLDhCQUFJO0FBQ04sQ0FBQyxFQUhXLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQUdkO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQy9DLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNoRCxDQUFDO0FBRkQsb0NBRUM7Ozs7Ozs7Ozs7Ozs7OztBQ2RELCtFQUE0QjtBQUM1QiwyRkFBb0M7QUFDcEMsa0ZBQXVDO0FBR3ZDLHFGQUF1RDtBQUN2RCw0RUFBaUU7QUFjakUsU0FBZ0IsZUFBZTtJQUM3QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ2Q7SUFDRCxNQUFNLE9BQU8sR0FBRztRQUNkLEtBQUssRUFBRSxFQUFZO1FBQ25CLElBQUksRUFBRSxJQUFxQjtRQUMzQixNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ3BCLENBQUM7SUFDRixtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBWkQsMENBWUM7QUFFRCxTQUFnQixjQUFjLENBQUMsZUFBNEI7SUFDekQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNkO0lBQ0QsTUFBTSxPQUFPLEdBQUc7UUFDZCxLQUFLLEVBQUUsRUFBWTtRQUNuQixJQUFJLEVBQUUsSUFBcUI7UUFDM0IsZUFBZTtRQUNmLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7S0FDcEIsQ0FBQztJQUNGLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFiRCx3Q0FhQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVU7SUFDekMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNkO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNkO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNmO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFiRCw0Q0FhQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLElBQVk7SUFDNUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ1osT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsZUFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ25GO1NBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1FBQ3BCLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDakY7U0FBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7UUFDcEIsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsZUFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3BGO1NBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1FBQ3BCLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3BGO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztBQUNuQyxDQUFDO0FBWEQsOENBV0M7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxTQUFvQixFQUFFLElBQVU7SUFDL0QsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFMRCw0Q0FLQztBQUVELFNBQWdCLFlBQVksQ0FBQyxTQUFvQixFQUFFLElBQVU7SUFDM0QsT0FBTyw4QkFBdUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDdEcsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsU0FBb0IsRUFBRSxLQUFnQjtJQUN4RSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDdkQsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFMRCxrREFLQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxTQUFvQixFQUFFLEtBQWdCLEVBQUUsSUFBVTtJQUMvRSxJQUFJLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztLQUN4RDtJQUNELE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDN0IsSUFBSSxZQUFZLEVBQUU7UUFDaEIsWUFBWSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUM3RDtJQUNELEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDdkMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQWJELHdDQWFDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsU0FBb0I7SUFDdEQsTUFBTSxPQUFPLEdBQVcsRUFBRSxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUMvRTtJQUNELFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQzVCLENBQUM7QUFORCxrREFNQztBQUVELFNBQVMsbUJBQW1CLENBQUMsU0FBb0IsRUFBRSxJQUFZO0lBQzdELE1BQU0sVUFBVSxHQUFhLEVBQUUsQ0FBQztJQUVoQyxTQUFTLGNBQWMsQ0FBQyxJQUFlLEVBQUUsS0FBbUI7UUFDMUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixLQUFLLENBQUMsSUFBSSxHQUFHLGVBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLE1BQU0sT0FBTyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0MsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPO2FBQ1I7WUFDRCxNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELElBQUksS0FBSyxFQUFFO2dCQUNULDJCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRTtvQkFDakIsS0FBSyxtQkFBUyxDQUFDLGlCQUFpQjt3QkFDOUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQzt3QkFDNUIsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQ3JGLE1BQU07b0JBQ1IsS0FBSyxtQkFBUyxDQUFDLGVBQWU7d0JBQzVCLEtBQUssQ0FBQyxHQUFHLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUM7d0JBQzNCLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUNwRixNQUFNO29CQUNSLEtBQUssbUJBQVMsQ0FBQyxJQUFJO3dCQUNqQixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFlBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUMxRCxPQUFPO2lCQUNWO2FBQ0YsQ0FBQyx1QkFBdUI7U0FDMUIsQ0FBQyxNQUFNO1FBQ1IsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxZQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsbUJBQW1CO0lBRXJCLGNBQWMsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEpELDJGQUE4RDtBQUM5RCw0RUFBd0M7QUFReEMsU0FBZ0IsdUJBQXVCLENBQUMsS0FBbUI7SUFDekQsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxnQ0FBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsRyxDQUFDO0FBRkQsMERBRUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxLQUFtQjtJQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM1RSxDQUFDO0FBRkQsNENBRUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRCxJQUFLLFNBSUo7QUFKRCxXQUFLLFNBQVM7SUFDWiwyQ0FBSztJQUNMLDZDQUFNO0lBQ04sNkNBQU07QUFDUixDQUFDLEVBSkksU0FBUyxLQUFULFNBQVMsUUFJYjtBQUVELGtCQUFlLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTnpCLGtGQUE4QztBQU85QyxTQUFnQixVQUFVLENBQUMsQ0FBTyxFQUFFLENBQU87SUFDekMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUssQ0FBQztJQUN4RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBSSxDQUFDLHFCQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBUkQsZ0NBUUM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZELHVHQUErQztBQUMvQywyRkFBb0M7QUFHcEMsSUFBSyxPQVVKO0FBVkQsV0FBSyxPQUFPO0lBQ1YsdURBQWE7SUFDYixpREFBVTtJQUNWLGlEQUFVO0lBQ1YsaURBQVU7SUFDVixpREFBVTtJQUVWLG1DQUFHO0lBQ0gscUNBQUk7SUFDSix1Q0FBSztBQUNQLENBQUMsRUFWSSxPQUFPLEtBQVAsT0FBTyxRQVVYO0FBQ0Qsa0JBQWUsT0FBTyxDQUFDO0FBT3ZCLE1BQU0sYUFBYSxHQUE2QjtJQUM5QyxFQUFFLElBQUksRUFBRSxDQUFDLG1CQUFTLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsS0FBSyxFQUFFLG1CQUFTLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDNUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxtQkFBUyxDQUFDLElBQUksRUFBRSxtQkFBUyxDQUFDLEtBQUssRUFBRSxtQkFBUyxDQUFDLElBQUksRUFBRSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQzVFLEVBQUUsSUFBSSxFQUFFLENBQUMsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUMxRSxFQUFFLElBQUksRUFBRSxDQUFDLG1CQUFTLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBRTtJQUN2RixFQUFFLElBQUksRUFBRSxDQUFDLG1CQUFTLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsS0FBSyxFQUFFLG1CQUFTLENBQUMsZUFBZSxFQUFFLG1CQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFFdkYsRUFBRSxLQUFLLEVBQUUsZUFBSyxDQUFDLEdBQUcsRUFBRTtJQUNwQixFQUFFLEtBQUssRUFBRSxlQUFLLENBQUMsSUFBSSxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLGVBQUssQ0FBQyxLQUFLLEVBQUU7Q0FDdkIsQ0FBQztBQUVGLFNBQWdCLGlCQUFpQixDQUFDLEtBQW1CLEVBQUUsT0FBZ0I7SUFDckUsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLElBQUksVUFBVSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFO1FBQ3BCLEtBQUssQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyRTtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVRELDhDQVNDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0QsMkZBQW9DO0FBT3BDLFNBQWdCLGVBQWUsQ0FBQyxTQUFvQjtJQUNsRCxRQUFRLFNBQVMsRUFBRTtRQUNqQixLQUFLLG1CQUFTLENBQUMsS0FBSztZQUNsQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6QixLQUFLLG1CQUFTLENBQUMsSUFBSTtZQUNqQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDeEIsS0FBSyxtQkFBUyxDQUFDLEtBQUs7WUFDbEIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3hCLEtBQUssbUJBQVMsQ0FBQyxJQUFJO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3pCO1lBQ0UsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQ3pCO0FBQ0gsQ0FBQztBQWJELDBDQWFDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLElBQVUsRUFBRSxHQUFjO0lBQ2pELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixRQUFRLENBQUMsR0FBRyxLQUFhO0lBQ3ZDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsT0FBTyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ3RDLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFFLENBQUM7QUFDcEIsQ0FBQztBQUpELDRCQUlDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLENBQU8sRUFBRSxDQUFPO0lBQ3ZDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN4QyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixRQUFRLENBQUMsSUFBVTtJQUNqQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNsQyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixlQUFlLENBQUMsSUFBVTtJQUN4QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUZELDBDQUVDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLENBQU8sRUFBRSxDQUFPLEVBQUUsT0FBMEM7SUFDdEYsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLHVCQUF1QixDQUFDLElBQVUsRUFBRSxHQUFTLEVBQUUsR0FBUztJQUN0RSxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlGLENBQUM7QUFGRCwwREFFQztBQUVELFNBQWdCLHVCQUF1QixDQUFDLElBQVUsRUFBRSxHQUFTLEVBQUUsR0FBUztJQUN0RSxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzVGLENBQUM7QUFGRCwwREFFQzs7Ozs7Ozs7Ozs7Ozs7O0FDdERELGdGQUFxQztBQUNyQyxtRkFBc0M7QUFFdEMsU0FBZ0IsY0FBYyxDQUFDLE1BQWM7SUFDM0MsTUFBTSxXQUFXLEdBQUcsbUJBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsT0FBTyxNQUFNLENBQUMsR0FBRyxLQUFLLFlBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsR0FBRyxLQUFLLFlBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNqRCxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7QUFDbkMsQ0FBQztBQUxELHdDQUtDOzs7Ozs7Ozs7Ozs7Ozs7QUNSRCw0RkFBOEQ7QUFDOUQsNEZBQXFDO0FBQ3JDLDZFQUEyQztBQUMzQyxzRkFBaUM7QUFDakMscUpBQWlFO0FBQ2pFLHlJQUF5RDtBQUN6RCwrSUFBNkQ7QUFDN0QsNkdBQThDO0FBQzlDLDZHQUFpRTtBQUVwRCxlQUFPLEdBQUcsSUFBSSwwQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVFLDBCQUFrQixHQUFHLElBQUksNEJBQWtCLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTNGLHVCQUFlLEdBQXFCLEVBQUUsQ0FBQztBQUVwRCxJQUFJLFlBQW9CLENBQUM7QUFDWix1QkFBZSxHQUFnQixFQUFFLENBQUM7QUFDbEMscUJBQWEsR0FBMkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUUvRCxJQUFJLFNBQVMsR0FBYyxtQkFBUyxDQUFDLE1BQU0sQ0FBQztBQUM1Qyw2QkFBNkI7QUFFN0I7O0dBRUc7QUFDSCxTQUFTLElBQUk7SUFDWCxxQkFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxxQkFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUN6QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUM7SUFFSCx1QkFBZSxDQUFDLGlCQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLGlCQUFPLENBQUMsYUFBYSxFQUMvRSxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1Qyx1QkFBZSxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLGlCQUFPLENBQUMsVUFBVSxFQUN6RSwrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6Qyx1QkFBZSxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLGlCQUFPLENBQUMsVUFBVSxFQUN6RSwrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6Qyx1QkFBZSxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLGlCQUFPLENBQUMsVUFBVSxFQUN6RSwrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6Qyx1QkFBZSxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLGlCQUFPLENBQUMsVUFBVSxFQUN6RSw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV2Qyx1QkFBZSxDQUFDLGlCQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUM3RCwwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyx1QkFBZSxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLGlCQUFPLENBQUMsR0FBRyxFQUMzRCx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyx1QkFBZSxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLGlCQUFPLENBQUMsS0FBSyxFQUMvRCwyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLE1BQU0sS0FBSyxHQUFjLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQztRQUM1RCx1QkFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMzQixxQkFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0I7SUFFRCwrQkFBbUIsQ0FBQywwQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxVQUFVLEVBQUUsQ0FBQztJQUNiLDBCQUFrQixDQUFDLHdCQUF3QixFQUFFLENBQUM7QUFDaEQsQ0FBQztBQUVELFNBQVMsSUFBSTtJQUNYLGtCQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQU0sQ0FBQyxLQUFLLEVBQUUscUJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxrQkFBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDMUIsa0JBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxxQkFBTSxDQUFDLEtBQUssRUFBRSxxQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhELDBCQUFrQixDQUFDLElBQUksQ0FBQyxrQkFBRyxDQUFDLENBQUM7SUFDN0IsZUFBTyxDQUFDLElBQUksQ0FBQyxrQkFBRyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEtBQWlCO0lBQ2hDLE1BQU0sR0FBRyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RCwwQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLGVBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELFVBQVUsRUFBRSxDQUFDO0lBQ2IsSUFBSSxZQUFZLElBQUksWUFBWSxFQUFFLEVBQUU7UUFDbEMsSUFBSSxTQUFTLEtBQUssbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsdUJBQVEsQ0FBQyxTQUFTLEdBQUcsd0JBQXdCO2tCQUN6QyxpREFBaUQsQ0FBQztTQUN2RDthQUFNLElBQUksU0FBUyxLQUFLLG1CQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3hDLHVCQUFRLENBQUMsV0FBVyxHQUFHLGdDQUFnQyxDQUFDO1NBQ3pEO2FBQU0sSUFBSSxTQUFTLEtBQUssbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekMsdUJBQVEsQ0FBQyxXQUFXLEdBQUcsaUNBQWlDLENBQUM7U0FDMUQ7UUFDRCx1QkFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDekI7SUFDRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUM7QUFFRCxTQUFTLHFCQUFxQjtJQUM1QixJQUFJLFlBQVksRUFBRTtRQUNoQixxQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLE1BQU0sSUFBSSxJQUFJLFlBQVksRUFBRTtZQUMvQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLGlCQUFVLENBQUMsSUFBSSxFQUFFLDBCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4RSxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2Y7WUFDRCxxQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7QUFDSCxDQUFDO0FBRUQsU0FBUyxZQUFZO0lBQ25CLEtBQUssTUFBTSxJQUFJLElBQUkscUJBQWEsRUFBRTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxTQUFnQixVQUFVO0lBQ3hCLElBQUksWUFBWSxFQUFFO1FBQ2hCLHFCQUFxQixFQUFFLENBQUM7UUFDeEIsZUFBZSxFQUFFLENBQUM7S0FDbkI7U0FBTTtRQUNMLGFBQWEsRUFBRSxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQVBELGdDQU9DO0FBRUQsU0FBUyxhQUFhO0lBQ3BCLHVCQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixNQUFNLEtBQUssR0FBRywwQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0IsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxHQUFHLDJCQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSwwQkFBa0IsQ0FBQyxZQUFZLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QyxJQUFJLEdBQUcsT0FBTyxJQUFJLE1BQU0sQ0FBQztTQUMxQjtRQUNELHVCQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDVix1QkFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7U0FDNUI7S0FDRjtBQUNILENBQUM7QUFFRCxTQUFTLGVBQWU7SUFDdEIsdUJBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sS0FBSyxHQUFHLDBCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUMsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxHQUFHLDJCQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxHQUFHLGlCQUFVLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw4QkFBOEIsSUFBSSxTQUFTO1lBQ2pGLENBQUMsQ0FBQyw0QkFBNEIsSUFBSSxTQUFTLENBQUM7UUFDOUMsSUFBSSwwQkFBa0IsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtZQUN2RCxJQUFJLEdBQUcsT0FBTyxJQUFJLE1BQU0sQ0FBQztTQUMxQjtRQUNELHVCQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUUzQixJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQix1QkFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7U0FDNUI7S0FDRjtBQUNILENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQzFDLE1BQU0sSUFBSSxHQUFHLHFCQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUU1QyxPQUFPO1FBQ0wsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMscUJBQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxxQkFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUM7QUFDSixDQUFDO0FBRUQscUVBQXFFO0FBQ3JFLG1DQUFtQztBQUNuQyxzRUFBc0U7QUFDdEUsa0NBQWtDO0FBQ2xDLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsOENBQThDO0FBQzlDLHNDQUFzQztBQUN0QyxpREFBaUQ7QUFDakQsMENBQTBDO0FBQzFDLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsbUNBQW1DO0FBQ25DLFVBQVU7QUFDVixxREFBcUQ7QUFDckQsc0JBQXNCO0FBQ3RCLGdCQUFnQjtBQUNoQixVQUFVO0FBQ1YsUUFBUTtBQUNSLElBQUk7QUFFSixJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaE1QLG1IQUFnRDtBQUVoRCxTQUFnQixZQUFZLENBQUMsSUFBVTtJQUNyQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsSUFBVTtJQUN0QyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFO1FBQ25CLEdBQUcsSUFBSSxPQUFPLENBQUM7S0FDaEI7U0FBTTtRQUNMLEdBQUcsSUFBSSxNQUFNLENBQUM7S0FDZjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQVJELHNDQVFDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsSUFBVTtJQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMzQixJQUFJLEdBQUcsR0FBRyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEQsS0FBSyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUN4RSxHQUFHLElBQUksR0FBRywrQkFBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3ZEO1FBQ0QsR0FBRyxJQUFJLEdBQUcsK0JBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNuRSxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsT0FBTywrQkFBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBVkQsZ0RBVUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pCWSxpQkFBUyxHQUFHLEVBQUUsQ0FBQztBQUNmLGlCQUFTLEdBQUcsaUJBQVMsR0FBRyxDQUFDLENBQUM7QUFFdkMsU0FBZ0IsY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ2pELE9BQU8sRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBUyxDQUFDLEVBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRkQsd0NBRUM7QUFFRCxTQUFnQixZQUFZLENBQUMsSUFBVTtJQUNyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsaUJBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxpQkFBUyxFQUFFLENBQUM7QUFDNUQsQ0FBQztBQUZELG9DQUVDOzs7Ozs7Ozs7Ozs7Ozs7QUNYWSxpQkFBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFtQixDQUFDO0FBQ3RFLGdCQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQW1CLENBQUM7QUFDbEUsY0FBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQXNCLENBQUM7QUFDM0UsZ0JBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBeUIsQ0FBQztBQUV4RSxXQUFHLEdBQUcsY0FBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0x2RSxnRkFBbUU7QUFDbkUsOEdBQStEO0FBRS9EOztHQUVHO0FBQ0gsTUFBOEIsZUFBZTtJQVEzQyxZQUFZLEdBQVcsRUFBRSxJQUFVLEVBQUUsWUFBb0IsRUFBRSxhQUFxQixFQUFFLElBQWdCLEVBQ3RGLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxJQUFJLENBQUMsR0FBNkI7UUFDdkMsTUFBTSxHQUFHLEdBQUcsMkJBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQkFBaUIsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLE9BQWU7UUFDNUQsTUFBTSxZQUFZLEdBQUcsZUFBUSxDQUFDLDZCQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLDhCQUF1QixDQUFDLFlBQVksRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsRUFBRTtZQUN4RyxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBdENELGtDQXNDQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNELG1GQUErQztBQUMvQywrRkFBd0M7QUFDeEMsK0ZBQXlKO0FBQ3pKLHdHQUE2RjtBQUU3Rix5RkFBa0Q7QUFDbEQsZ0ZBQTBHO0FBQzFHLDZIQUEySDtBQUMzSCw4R0FBcUU7QUFDckUsaUlBQWdEO0FBSWhELE1BQXFCLGtCQUFtQixTQUFRLHlCQUFlO0lBTTdELFlBQ0UsR0FBVyxFQUFFLElBQVUsRUFBRSxZQUFvQixFQUFFLGFBQXFCLEVBQUUsSUFBZ0IsRUFDdEYsT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQztRQUN4QixLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLFNBQVMsR0FBRywyQkFBZSxFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQTZCO1FBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEIsc0JBQXNCO1FBQ3RCLEtBQUssTUFBTSxLQUFLLElBQUksbUNBQWUsRUFBRTtZQUNuQyxJQUFJLENBQUMsOEJBQXVCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUN6RSxtQ0FBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDN0Y7U0FDRjtRQUVELDBCQUEwQjtRQUMxQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsd0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELE1BQU0sR0FBRyxHQUFHLDJCQUFZLENBQUMsZUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0QsR0FBRyxDQUFDLEVBQUUsSUFBSSx3QkFBUyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxFQUFFLElBQUksd0JBQVMsQ0FBQztZQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sT0FBTyxHQUFHLHNCQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLHdCQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLHdCQUFTLENBQUMsQ0FBQztZQUMzRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZDtRQUVELG9DQUFvQztRQUNwQyxJQUFJLGtCQUFrQixHQUFHLDJCQUFZLENBQUMsZUFBUSxDQUFDLDZCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0csR0FBRyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDNUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsQ0FBQyxDQUFDO1lBQ2pGLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFGO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsRUFBRTtZQUNqQyxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLENBQUMsQ0FBQztZQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUU7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3RSxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5RTthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLEVBQUU7WUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsQ0FBQyxDQUFDO1lBQ2pGLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFGO1FBQ0QsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWIsd0JBQXdCO1FBQ3hCLElBQUksaUNBQWEsRUFBRTtZQUNqQixHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN0QixLQUFLLE1BQU0sUUFBUSxJQUFJLGlDQUFhLEVBQUU7Z0JBQ3BDLGtCQUFrQixHQUFHLDJCQUFZLENBQUMsZUFBUSxDQUFDLDZCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25HLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hELEdBQUcsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLGtCQUFrQixDQUFDLEVBQUUsRUFBRSx3QkFBUyxFQUFFLHdCQUFTLENBQUMsQ0FBQzthQUNsRjtZQUNELEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1NBQ3ZCO1FBRUQsb0JBQW9CO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsa0JBQWtCLEdBQUcsMkJBQVksQ0FBQyxlQUFRLENBQUMsNkJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7WUFDN0IsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDNUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNwRyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVNLGlCQUFpQixDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBYztRQUMzRCxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSw4QkFBdUIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDekUsZUFBZTtZQUNmLE1BQU0sR0FBRyxHQUFHLGVBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sS0FBSyxHQUFHLDRCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxZQUFZLEdBQUcsK0JBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFLEVBQUUsb0JBQW9CO29CQUN0QywyQkFBTyxDQUFDLGFBQWEsR0FBRyxpQ0FBYSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUUsQ0FBQztpQkFDMUQ7YUFDRjtpQkFBTTtnQkFDTCwwQkFBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsbUNBQWUsQ0FBQywyQkFBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzdFO1lBQ0QsOEJBQVUsRUFBRSxDQUFDO1lBRWIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDakM7UUFFRCxNQUFNLE9BQU8sR0FBRyw0QkFBZ0IsQ0FBQyxlQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUVoQyxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRU0sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBbUI7UUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixLQUFLLENBQUMsSUFBSSxHQUFHLGVBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsOEJBQXVCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDeEUsT0FBTzthQUNSO1lBQ0QsTUFBTSxLQUFLLEdBQUcsNEJBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0NBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLEtBQUssRUFBRTtnQkFDVCwyQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxRQUFRLEtBQUssQ0FBQyxHQUFHLEVBQUU7b0JBQ2pCLEtBQUssbUJBQVMsQ0FBQyxpQkFBaUI7d0JBQzlCLEtBQUssQ0FBQyxHQUFHLEdBQUcsbUJBQVMsQ0FBQyxLQUFLLENBQUM7d0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNDQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxzQ0FBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxNQUFNO29CQUNSLEtBQUssbUJBQVMsQ0FBQyxlQUFlO3dCQUM1QixLQUFLLENBQUMsR0FBRyxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDO3dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQ0FBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsc0NBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsTUFBTTtvQkFDUixLQUFLLG1CQUFTLENBQUMsSUFBSTt3QkFDakIsT0FBTztpQkFDVjthQUNGLENBQUMsdUJBQXVCO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLCtCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0NBQ0Y7QUF4SkQscUNBd0pDOzs7Ozs7Ozs7Ozs7Ozs7QUNsS0QsOEdBQStDO0FBRS9DLE1BQXFCLGNBQWM7SUFLakMsWUFBWSxPQUFnQixFQUFFLEdBQVcsRUFBRSxJQUFnQjtRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFVLEVBQUUsR0FBNkI7UUFDckQsTUFBTSxHQUFHLEdBQUcsMkJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBakJELGlDQWlCQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJELGdGQUE2RDtBQUM3RCw2SEFBd0U7QUFDeEUsOEdBQTBEO0FBQzFELGlJQUFnRDtBQUVoRDs7R0FFRztBQUNILE1BQXFCLGdCQUFpQixTQUFRLHlCQUFlO0lBRzNEOzs7Ozs7OztPQVFHO0lBQ0gsWUFDRSxHQUFXLEVBQUUsSUFBVSxFQUFFLFlBQW9CLEVBQUUsYUFBcUIsRUFDcEUsSUFBZ0IsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxJQUFJLENBQUMsR0FBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQiwwQkFBMEI7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1DQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLG1DQUFlLENBQUMsbUNBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVGO1FBRUQsb0NBQW9DO1FBQ3BDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksR0FBRyxHQUFHLDJCQUFZLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLHdCQUFTLEVBQUUsd0JBQVMsQ0FBQyxDQUFDO1FBRW5ELEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQ0FBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxNQUFNLEtBQUssR0FBRyxtQ0FBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLElBQUksc0JBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzNELEdBQUcsR0FBRywyQkFBWSxDQUFDLGVBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSx3QkFBUyxFQUFFLHdCQUFTLENBQUMsQ0FBQzthQUNwRDtTQUNGO1FBQ0QsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWM7UUFDM0QsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0QsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSx5QkFBeUI7UUFDOUIsT0FBTyxtQ0FBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFuRUQsbUNBbUVDIiwiZmlsZSI6Imxhc2VyZ2FtZS9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvRnJvbnRlbmRMYXNlcmdhbWUudHNcIik7XG4iLCJlbnVtIENvbG9yIHtcbiAgQkxBQ0ssXG4gIEJMVUUsXG4gIEdSRUVOLFxuICBDWUFOLFxuICBSRUQsXG4gIE1BR0VOVEEsXG4gIFlFTExPVyxcbiAgV0hJVEUsXG59XG5leHBvcnQgZGVmYXVsdCBDb2xvcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbG9ycyhhOiBDb2xvciwgYjogQ29sb3IpIHtcbiAgcmV0dXJuIGEgfCBiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1JHQlN0cmluZyhjb2xvcjogQ29sb3IpIHtcbiAgY29uc3QgciA9IDQgPT09ICg0ICYgY29sb3IpID8gMjU1IDogMDtcbiAgY29uc3QgZyA9IDIgPT09ICgyICYgY29sb3IpID8gMjU1IDogMDtcbiAgY29uc3QgYiA9IDEgPT09ICgxICYgY29sb3IpID8gMjU1IDogMDtcbiAgcmV0dXJuIGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9OYW1lKGNvbG9yOiBDb2xvcikge1xuICByZXR1cm4gQ29sb3JbY29sb3JdO1xufVxuIiwiZW51bSBEaXJlY3Rpb24ge1xuICBOT1JUSCxcbiAgRUFTVCxcbiAgU09VVEgsXG4gIFdFU1QsXG4gIE5PTkUsXG4gIFNQTElUX0VBU1RfV0VTVCxcbiAgU1BMSVRfTk9SVEhfU09VVEgsXG59XG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb247XG5cbmNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0gW0RpcmVjdGlvbi5TT1VUSCwgRGlyZWN0aW9uLldFU1QsIERpcmVjdGlvbi5OT1JUSCwgRGlyZWN0aW9uLkVBU1RdO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVEaXJlY3Rpb24oZGlyOiBEaXJlY3Rpb24pIHtcbiAgY29uc3Qgb3BwRGlyID0gb3Bwb3NpdGVEaXJlY3Rpb25bZGlyXTtcbiAgcmV0dXJuIG9wcERpciA9PT0gdW5kZWZpbmVkID8gRGlyZWN0aW9uLk5PTkUgOiBvcHBEaXI7XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vQ29sb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIEVuZGluZyB7XG4gIHJlYWRvbmx5IGVuZDogRW5kO1xuICByZWFkb25seSBjb2xvcjogQ29sb3I7XG59XG5cbmV4cG9ydCBlbnVtIEVuZCB7XG4gIEJsb2NrZWQgPSAtMixcbiAgTG9vcCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZGluZ3NFcXVhbChhOiBFbmRpbmcsIGI6IEVuZGluZykge1xuICByZXR1cm4gYS5lbmQgPT09IGIuZW5kICYmIGEuY29sb3IgPT09IGIuY29sb3I7XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vQ29sb3JcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4vRGlyZWN0aW9uXCI7XG5pbXBvcnQgRW5kaW5nLCB7IEVuZCB9IGZyb20gXCIuL0VuZGluZ1wiO1xuaW1wb3J0IExhc2VyU2VnbWVudCBmcm9tIFwiLi9MYXNlclNlZ21lbnRcIjtcbmltcG9ydCBQYXRoIGZyb20gXCIuL1BhdGhcIjtcbmltcG9ydCBQaWVjZUlELCB7IGFwcGx5UGllY2VUb0xhc2VyIH0gZnJvbSBcIi4vUGllY2VJRFwiO1xuaW1wb3J0IFRpbGUsIHsgbmV4dFRpbGUsIHRpbGVXaXRoaW5BcmVhRXhjbHVzaXZlIH0gZnJvbSBcIi4vVGlsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRQaWVjZSB7XG4gIHJlYWRvbmx5IHBpZWNlSUQ6IFBpZWNlSUQ7XG4gIHRpbGU6IFRpbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBMYXNlckdyaWQge1xuICBwYXRoczogUGF0aFtdO1xuICByZWFkb25seSBncmlkOiAoR3JpZFBpZWNlIHwgdW5kZWZpbmVkKVtdW107XG4gIHJlYWRvbmx5IGxlbmd0aDogbnVtYmVyO1xuICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURlZmF1bHRHcmlkKCk6IExhc2VyR3JpZCB7XG4gIGNvbnN0IGdyaWQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBncmlkW2ldID0gW107XG4gIH1cbiAgY29uc3QgbmV3R3JpZCA9IHtcbiAgICBwYXRoczogW10gYXMgUGF0aFtdLFxuICAgIGdyaWQ6IGdyaWQgYXMgR3JpZFBpZWNlW11bXSxcbiAgICBsZW5ndGg6IDUsIHdpZHRoOiA1LFxuICB9O1xuICBjYWxjdWxhdGVBbGxFbmRpbmdzKG5ld0dyaWQpO1xuICByZXR1cm4gbmV3R3JpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDdXN0b21HcmlkKGF2YWlsYWJsZVBpZWNlczogR3JpZFBpZWNlW10pOiBMYXNlckdyaWQge1xuICBjb25zdCBncmlkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgZ3JpZFtpXSA9IFtdO1xuICB9XG4gIGNvbnN0IG5ld0dyaWQgPSB7XG4gICAgcGF0aHM6IFtdIGFzIFBhdGhbXSxcbiAgICBncmlkOiBncmlkIGFzIEdyaWRQaWVjZVtdW10sXG4gICAgYXZhaWxhYmxlUGllY2VzLFxuICAgIGxlbmd0aDogNSwgd2lkdGg6IDUsXG4gIH07XG4gIGNhbGN1bGF0ZUFsbEVuZGluZ3MobmV3R3JpZCk7XG4gIHJldHVybiBuZXdHcmlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlsZVRvRWRnZU51bWJlcih0aWxlOiBUaWxlKSB7XG4gIGNvbnN0IHggPSB0aWxlLng7XG4gIGNvbnN0IHkgPSB0aWxlLnk7XG4gIGlmICh5ID09PSAtMSAmJiB4ID4gLTEgJiYgeCA8IDUpIHtcbiAgICByZXR1cm4gMSArIHg7XG4gIH0gZWxzZSBpZiAoeCA9PT0gNSAmJiB5ID4gLTEgJiYgeSA8IDUpIHtcbiAgICByZXR1cm4gNiArIHk7XG4gIH0gZWxzZSBpZiAoeSA9PT0gNSAmJiB4ID4gLTEgJiYgeCA8IDUpIHtcbiAgICByZXR1cm4gMTUgLSB4O1xuICB9IGVsc2UgaWYgKHggPT09IC0xICYmIHkgPiAtMSAmJiB5IDwgNSkge1xuICAgIHJldHVybiAyMCAtIHk7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlTnVtYmVyVG9MYXNlcihlZGdlOiBudW1iZXIpOiBMYXNlclNlZ21lbnQge1xuICBpZiAoZWRnZSA8IDYpIHtcbiAgICByZXR1cm4geyB0aWxlOiB7IHg6IGVkZ2UgLSAxLCB5OiAtMSB9LCBkaXI6IERpcmVjdGlvbi5TT1VUSCwgY29sb3I6IENvbG9yLkJMQUNLIH07XG4gIH0gZWxzZSBpZiAoZWRnZSA8IDExKSB7XG4gICAgcmV0dXJuIHsgdGlsZTogeyB4OiA1LCB5OiBlZGdlIC0gNiB9LCBkaXI6IERpcmVjdGlvbi5XRVNULCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcbiAgfSBlbHNlIGlmIChlZGdlIDwgMTYpIHtcbiAgICByZXR1cm4geyB0aWxlOiB7IHg6IC1lZGdlICsgMTUsIHk6IDUgfSwgZGlyOiBEaXJlY3Rpb24uTk9SVEgsIGNvbG9yOiBDb2xvci5CTEFDSyB9O1xuICB9IGVsc2UgaWYgKGVkZ2UgPCAyMSkge1xuICAgIHJldHVybiB7IHRpbGU6IHsgeDogLTEsIHk6IC1lZGdlICsgMjAgfSwgZGlyOiBEaXJlY3Rpb24uRUFTVCwgY29sb3I6IENvbG9yLkJMQUNLIH07XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IEVkZ2VcIilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBpZWNlRnJvbUdyaWQobGFzZXJHcmlkOiBMYXNlckdyaWQsIHRpbGU6IFRpbGUpIHtcbiAgaWYgKGxhc2VyR3JpZC5ncmlkW3RpbGUueV0pIHtcbiAgICByZXR1cm4gbGFzZXJHcmlkLmdyaWRbdGlsZS55XVt0aWxlLnhdO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkU3BhY2UobGFzZXJHcmlkOiBMYXNlckdyaWQsIHRpbGU6IFRpbGUpIHtcbiAgcmV0dXJuIHRpbGVXaXRoaW5BcmVhRXhjbHVzaXZlKHRpbGUsIHsgeDogLTEsIHk6IC0xIH0sIHsgeDogbGFzZXJHcmlkLndpZHRoLCB5OiBsYXNlckdyaWQubGVuZ3RoIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGllY2VGcm9tR3JpZChsYXNlckdyaWQ6IExhc2VyR3JpZCwgcGllY2U6IEdyaWRQaWVjZSk6IEdyaWRQaWVjZSB7XG4gIGxhc2VyR3JpZC5ncmlkW3BpZWNlLnRpbGUueV1bcGllY2UudGlsZS54XSA9IHVuZGVmaW5lZDtcbiAgcGllY2UudGlsZSA9IHsgeDogLTEsIHk6IC0xIH07XG4gIGNhbGN1bGF0ZUFsbEVuZGluZ3MobGFzZXJHcmlkKTtcbiAgcmV0dXJuIHBpZWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UGllY2VJbkdyaWQobGFzZXJHcmlkOiBMYXNlckdyaWQsIHBpZWNlOiBHcmlkUGllY2UsIHRpbGU6IFRpbGUpOiBHcmlkUGllY2UgfCB1bmRlZmluZWQge1xuICBpZiAoaXNWYWxpZFNwYWNlKGxhc2VyR3JpZCwgcGllY2UudGlsZSkpIHtcbiAgICBsYXNlckdyaWQuZ3JpZFtwaWVjZS50aWxlLnldW3BpZWNlLnRpbGUueF0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3QgY3VycmVudFBpZWNlID0gZ2V0UGllY2VGcm9tR3JpZChsYXNlckdyaWQsIHRpbGUpO1xuICBsZXQgcmVtb3ZlZFBpZWNlID0gdW5kZWZpbmVkO1xuICBpZiAoY3VycmVudFBpZWNlKSB7XG4gICAgcmVtb3ZlZFBpZWNlID0gcmVtb3ZlUGllY2VGcm9tR3JpZChsYXNlckdyaWQsIGN1cnJlbnRQaWVjZSk7XG4gIH1cbiAgcGllY2UudGlsZSA9IHRpbGU7XG4gIGxhc2VyR3JpZC5ncmlkW3RpbGUueV1bdGlsZS54XSA9IHBpZWNlO1xuICBjYWxjdWxhdGVBbGxFbmRpbmdzKGxhc2VyR3JpZCk7XG4gIHJldHVybiByZW1vdmVkUGllY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBbGxFbmRpbmdzKGxhc2VyR3JpZDogTGFzZXJHcmlkKSB7XG4gIGNvbnN0IGVuZGluZ3M6IFBhdGhbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICBlbmRpbmdzW2ldID0geyBzdGFydDogaSArIDEsIGVuZGluZ3M6IGNhbGN1bGF0ZUVuZGluZ0xpc3QobGFzZXJHcmlkLCBpICsgMSkgfTtcbiAgfVxuICBsYXNlckdyaWQucGF0aHMgPSBlbmRpbmdzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVFbmRpbmdMaXN0KGxhc2VyR3JpZDogTGFzZXJHcmlkLCBlZGdlOiBudW1iZXIpIHtcbiAgY29uc3QgZW5kaW5nTGlzdDogRW5kaW5nW10gPSBbXTtcblxuICBmdW5jdGlvbiB0cmFja09uZUVuZGluZyhncmlkOiBMYXNlckdyaWQsIGxhc2VyOiBMYXNlclNlZ21lbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBsYXNlci50aWxlID0gbmV4dFRpbGUobGFzZXIudGlsZSwgbGFzZXIuZGlyKTtcbiAgICAgIGlmICghaXNWYWxpZFNwYWNlKGdyaWQsIGxhc2VyLnRpbGUpKSB7XG4gICAgICAgIGNvbnN0IGVuZEVkZ2UgPSB0aWxlVG9FZGdlTnVtYmVyKGxhc2VyLnRpbGUpO1xuICAgICAgICBlbmRpbmdMaXN0LnB1c2goeyBlbmQ6IGVuZEVkZ2UsIGNvbG9yOiBsYXNlci5jb2xvciB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcGllY2UgPSBnZXRQaWVjZUZyb21HcmlkKGdyaWQsIGxhc2VyLnRpbGUpO1xuICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgIGFwcGx5UGllY2VUb0xhc2VyKGxhc2VyLCBwaWVjZS5waWVjZUlEKTtcbiAgICAgICAgc3dpdGNoIChsYXNlci5kaXIpIHtcbiAgICAgICAgICBjYXNlIERpcmVjdGlvbi5TUExJVF9OT1JUSF9TT1VUSDpcbiAgICAgICAgICAgIGxhc2VyLmRpciA9IERpcmVjdGlvbi5OT1JUSDtcbiAgICAgICAgICAgIHRyYWNrT25lRW5kaW5nKGdyaWQsIHsgdGlsZTogbGFzZXIudGlsZSwgZGlyOiBEaXJlY3Rpb24uU09VVEgsIGNvbG9yOiBsYXNlci5jb2xvciB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLlNQTElUX0VBU1RfV0VTVDpcbiAgICAgICAgICAgIGxhc2VyLmRpciA9IERpcmVjdGlvbi5FQVNUO1xuICAgICAgICAgICAgdHJhY2tPbmVFbmRpbmcoZ3JpZCwgeyB0aWxlOiBsYXNlci50aWxlLCBkaXI6IERpcmVjdGlvbi5XRVNULCBjb2xvcjogbGFzZXIuY29sb3IgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIERpcmVjdGlvbi5OT05FOlxuICAgICAgICAgICAgZW5kaW5nTGlzdC5wdXNoKHsgZW5kOiBFbmQuQmxvY2tlZCwgY29sb3I6IGxhc2VyLmNvbG9yIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IC8vIGlmIHBpZWNlIGlzIG5vdCBudWxsXG4gICAgfSAvLyBmb3JcbiAgICBlbmRpbmdMaXN0LnB1c2goeyBlbmQ6IEVuZC5Mb29wLCBjb2xvcjogbGFzZXIuY29sb3IgfSk7XG4gIH0gLy8gdHJhY2tPbmVFbmRpbmcoKVxuXG4gIHRyYWNrT25lRW5kaW5nKGxhc2VyR3JpZCwgZWRnZU51bWJlclRvTGFzZXIoZWRnZSkpO1xuICBlbmRpbmdMaXN0LnNvcnQoKGEsIGIpID0+IGEuZW5kIDwgYi5lbmQgPyAtMSA6IDEpO1xuICByZXR1cm4gZW5kaW5nTGlzdDtcbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9Db2xvclwiO1xuaW1wb3J0IERpcmVjdGlvbiwgeyBnZXRPcHBvc2l0ZURpcmVjdGlvbiB9IGZyb20gXCIuL0RpcmVjdGlvblwiO1xuaW1wb3J0IFRpbGUsIHsgY29weVRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBMYXNlclNlZ21lbnQge1xuICB0aWxlOiBUaWxlO1xuICBkaXI6IERpcmVjdGlvbjtcbiAgY29sb3I6IENvbG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXI6IExhc2VyU2VnbWVudCk6IExhc2VyU2VnbWVudCB7XG4gIHJldHVybiB7IHRpbGU6IGNvcHlUaWxlKGxhc2VyLnRpbGUpLCBkaXI6IGdldE9wcG9zaXRlRGlyZWN0aW9uKGxhc2VyLmRpciksIGNvbG9yOiBsYXNlci5jb2xvciB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weUxhc2VyU2VnbWVudChsYXNlcjogTGFzZXJTZWdtZW50KTogTGFzZXJTZWdtZW50IHtcbiAgcmV0dXJuIHsgdGlsZTogY29weVRpbGUobGFzZXIudGlsZSksIGRpcjogbGFzZXIuZGlyLCBjb2xvcjogbGFzZXIuY29sb3IgfTtcbn1cbiIsImVudW0gTGV2ZWxUeXBlIHtcbiAgRGFpbHksXG4gIFJhbmRvbSxcbiAgQ3VzdG9tLFxufVxuXG5leHBvcnQgZGVmYXVsdCBMZXZlbFR5cGU7XG4iLCJpbXBvcnQgRW5kaW5nLCB7ZW5kaW5nc0VxdWFsfSBmcm9tIFwiLi9FbmRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIFBhdGgge1xuICBzdGFydDogbnVtYmVyO1xuICBlbmRpbmdzOiBFbmRpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsUGF0aHMoYTogUGF0aCwgYjogUGF0aCkge1xuICBpZiAoYS5lbmRpbmdzLmxlbmd0aCAhPT0gYi5lbmRpbmdzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuZW5kaW5ncy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghZW5kaW5nc0VxdWFsKGEuZW5kaW5nc1tpXSwgYi5lbmRpbmdzW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCBDb2xvciwgKiBhcyBjb2xvck1hbmFnZXIgZnJvbSBcIi4vQ29sb3JcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4vRGlyZWN0aW9uXCI7XG5pbXBvcnQgTGFzZXJTZWdtZW50IGZyb20gXCIuL0xhc2VyU2VnbWVudFwiO1xuXG5lbnVtIFBpZWNlSUQge1xuICBGT1JXQVJEX1NMQVNILFxuICBCQUNLX1NMQVNILFxuICBCTEFDS19IT0xFLFxuICBIT1JJX1NQTElULFxuICBWRVJUX1NQTElULFxuXG4gIFJFRCxcbiAgQkxVRSxcbiAgR1JFRU4sXG59XG5leHBvcnQgZGVmYXVsdCBQaWVjZUlEO1xuXG5pbnRlcmZhY2UgUGllY2VSdWxlIHtcbiAgZGlycz86IERpcmVjdGlvbltdO1xuICBjb2xvcj86IENvbG9yO1xufVxuXG5jb25zdCBwaWVjZVJ1bGVMaXN0OiBSZWFkb25seUFycmF5PFBpZWNlUnVsZT4gPSBbXG4gIHsgZGlyczogW0RpcmVjdGlvbi5FQVNULCBEaXJlY3Rpb24uTk9SVEgsIERpcmVjdGlvbi5XRVNULCBEaXJlY3Rpb24uU09VVEhdIH0sXG4gIHsgZGlyczogW0RpcmVjdGlvbi5XRVNULCBEaXJlY3Rpb24uU09VVEgsIERpcmVjdGlvbi5FQVNULCBEaXJlY3Rpb24uTk9SVEhdIH0sXG4gIHsgZGlyczogW0RpcmVjdGlvbi5OT05FLCBEaXJlY3Rpb24uTk9ORSwgRGlyZWN0aW9uLk5PTkUsIERpcmVjdGlvbi5OT05FXSB9LFxuICB7IGRpcnM6IFtEaXJlY3Rpb24uRUFTVCwgRGlyZWN0aW9uLk5PTkUsIERpcmVjdGlvbi5FQVNULCBEaXJlY3Rpb24uU1BMSVRfTk9SVEhfU09VVEhdIH0sXG4gIHsgZGlyczogW0RpcmVjdGlvbi5OT05FLCBEaXJlY3Rpb24uTk9SVEgsIERpcmVjdGlvbi5TUExJVF9FQVNUX1dFU1QsIERpcmVjdGlvbi5OT1JUSF0gfSxcblxuICB7IGNvbG9yOiBDb2xvci5SRUQgfSxcbiAgeyBjb2xvcjogQ29sb3IuQkxVRSB9LFxuICB7IGNvbG9yOiBDb2xvci5HUkVFTiB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGllY2VUb0xhc2VyKGxhc2VyOiBMYXNlclNlZ21lbnQsIHBpZWNlSUQ6IFBpZWNlSUQpIHtcbiAgY29uc3QgcGllY2VSdWxlcyA9IHBpZWNlUnVsZUxpc3RbcGllY2VJRF07XG4gIGlmIChwaWVjZVJ1bGVzLmRpcnMpIHtcbiAgICBsYXNlci5kaXIgPSBwaWVjZVJ1bGVzLmRpcnNbbGFzZXIuZGlyXTtcbiAgfVxuICBpZiAocGllY2VSdWxlcy5jb2xvcikge1xuICAgIGxhc2VyLmNvbG9yID0gY29sb3JNYW5hZ2VyLmFkZENvbG9ycyhsYXNlci5jb2xvciwgcGllY2VSdWxlcy5jb2xvcik7XG4gIH1cbiAgcmV0dXJuIGxhc2VyO1xufVxuIiwiaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi9EaXJlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIFRpbGUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGlvblRvVGlsZShkaXJlY3Rpb246IERpcmVjdGlvbik6IFRpbGUge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgRGlyZWN0aW9uLk5PUlRIOlxuICAgICAgcmV0dXJuIHsgeDogMCwgeTogLTEgfTtcbiAgICBjYXNlIERpcmVjdGlvbi5FQVNUOlxuICAgICAgcmV0dXJuIHsgeDogMSwgeTogMCB9O1xuICAgIGNhc2UgRGlyZWN0aW9uLlNPVVRIOlxuICAgICAgcmV0dXJuIHsgeDogMCwgeTogMSB9O1xuICAgIGNhc2UgRGlyZWN0aW9uLldFU1Q6XG4gICAgICByZXR1cm4geyB4OiAtMSwgeTogMCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRUaWxlKHRpbGU6IFRpbGUsIGRpcjogRGlyZWN0aW9uKSB7XG4gIHJldHVybiBhZGRUaWxlcyh0aWxlLCBkaXJlY3Rpb25Ub1RpbGUoZGlyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUaWxlcyguLi50aWxlczogVGlsZVtdKTogVGlsZSB7XG4gIHJldHVybiB0aWxlcy5yZWR1Y2UoKHAsIHYsIF8pID0+IHtcbiAgICByZXR1cm4ge3g6IHAueCArIHYueCwgeTogcC55ICsgdi55fTtcbiAgfSwge3g6IDAsIHk6IDB9ICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJUaWxlcyhhOiBUaWxlLCBiOiBUaWxlKTogVGlsZSB7XG4gIHJldHVybiB7IHg6IGEueCAtIGIueCwgeTogYS55IC0gYi55IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VGlsZSh0aWxlOiBUaWxlKTogVGlsZSB7XG4gIHJldHVybiB7IHg6IHRpbGUueCwgeTogdGlsZS55IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWxlTm90TmVnYXRpdmUodGlsZTogVGlsZSkge1xuICByZXR1cm4gdGlsZUNvbXBhcmUodGlsZSwgeyB4OiAtMSwgeTogLTEgfSwgKGEsIGIpID0+IGEgPiBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVDb21wYXJlKGE6IFRpbGUsIGI6IFRpbGUsIGNvbXBhcmU6IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYm9vbGVhbikge1xuICByZXR1cm4gY29tcGFyZShhLngsIGIueCkgJiYgY29tcGFyZShhLnkgLCBiLnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlsZVdpdGhpbkFyZWFJbmNsdXNpdmUodGlsZTogVGlsZSwgbWluOiBUaWxlLCBtYXg6IFRpbGUpIHtcbiAgcmV0dXJuIHRpbGVDb21wYXJlKHRpbGUsIG1pbiwgKGEsIGIpID0+IGEgPj0gYikgJiYgdGlsZUNvbXBhcmUodGlsZSwgbWF4LCAoYSwgYikgPT4gYSA8PSBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVXaXRoaW5BcmVhRXhjbHVzaXZlKHRpbGU6IFRpbGUsIG1pbjogVGlsZSwgbWF4OiBUaWxlKSB7XG4gIHJldHVybiB0aWxlQ29tcGFyZSh0aWxlLCBtaW4sIChhLCBiKSA9PiBhID4gYikgJiYgdGlsZUNvbXBhcmUodGlsZSwgbWF4LCAoYSwgYikgPT4gYSA8IGIpO1xufVxuIiwiaW1wb3J0IHtjb2xvclRvTmFtZX0gZnJvbSBcIi4uL0NvbG9yXCI7XG5pbXBvcnQgRW5kaW5nLCB7RW5kfSBmcm9tIFwiLi4vRW5kaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRpbmdUb1N0cmluZyhlbmRpbmc6IEVuZGluZykge1xuICBjb25zdCBjb2xvclN0cmluZyA9IGNvbG9yVG9OYW1lKGVuZGluZy5jb2xvcik7XG4gIHJldHVybiBlbmRpbmcuZW5kID09PSBFbmQuQmxvY2tlZCA/IGBibG9ja2VkICR7Y29sb3JTdHJpbmd9YCA6XG4gICAgZW5kaW5nLmVuZCA9PT0gRW5kLkxvb3AgPyBgbG9vcCAke2NvbG9yU3RyaW5nfWAgOlxuICAgIGAke2VuZGluZy5lbmR9ICR7Y29sb3JTdHJpbmd9YDtcbn1cbiIsImltcG9ydCB7IGNhbGN1bGF0ZUFsbEVuZGluZ3MsIEdyaWRQaWVjZSB9IGZyb20gXCIuLi9MYXNlckdyaWRcIjtcbmltcG9ydCBMZXZlbFR5cGUgZnJvbSBcIi4uL0xldmVsVHlwZVwiO1xuaW1wb3J0IFBhdGgsIHsgZXF1YWxQYXRocyB9IGZyb20gXCIuLi9QYXRoXCI7XG5pbXBvcnQgUGllY2VJRCBmcm9tIFwiLi4vUGllY2VJRFwiO1xuaW1wb3J0IExhc2VyR3JpZENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0xhc2VyR3JpZENvbXBvbmVudFwiO1xuaW1wb3J0IFBpZWNlQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUGllY2VDb21wb25lbnRcIjtcbmltcG9ydCBUb29sYmFyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvVG9vbGJhckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcGF0aFRvU3RyaW5nIH0gZnJvbSBcIi4vRnJvbnRlbmRQYXRoXCI7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCwgcGF0aHNQcmUsIHZpY3RvcnlQIH0gZnJvbSBcIi4vSFRNTEVsZW1lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB0b29sYmFyID0gbmV3IFRvb2xiYXJDb21wb25lbnQoXCIuL3Rvb2xiYXIucG5nXCIsIHsgeDogMCwgeTogNyB9LCA4LCAxLCBkcmF3KTtcbmV4cG9ydCBjb25zdCBsYXNlcmdyaWRDb21wb25lbnQgPSBuZXcgTGFzZXJHcmlkQ29tcG9uZW50KFwiLi9sYXNlcmdyaWQucG5nXCIsIHsgeDogMCwgeTogMCB9LCA3LCA3LCBkcmF3KTtcblxuZXhwb3J0IGNvbnN0IHBpZWNlQ29tcG9uZW50czogUGllY2VDb21wb25lbnRbXSA9IFtdO1xuXG5sZXQgY3VycmVudExldmVsOiBQYXRoW107XG5leHBvcnQgY29uc3QgYXZhaWxhYmxlUGllY2VzOiBHcmlkUGllY2VbXSA9IFtdO1xuZXhwb3J0IGNvbnN0IHBpZWNlSW5kZXhNYXA6IE1hcDxHcmlkUGllY2UsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG5leHBvcnQgbGV0IGVkZ2VMZXZlbERhdGE6IEFycmF5PHsgZWRnZTogbnVtYmVyLCBzb2x2ZWQ6IGJvb2xlYW4gfT47XG5sZXQgbGV2ZWxUeXBlOiBMZXZlbFR5cGUgPSBMZXZlbFR5cGUuQ3VzdG9tO1xuLy8gbGV0IGRpZmZpY3VsdHkgPSBcIm1lZGl1bVwiO1xuXG4vKipcbiAqIEluaXRzIHRoZSB0aGluZ3MgdGhhdCBhcmVuJ3QgY29uc3RhbnRzXG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uQ2xpY2soZSk7XG4gIH0pO1xuXG4gIHBpZWNlQ29tcG9uZW50c1tQaWVjZUlELkZPUldBUkRfU0xBU0hdID0gbmV3IFBpZWNlQ29tcG9uZW50KFBpZWNlSUQuRk9SV0FSRF9TTEFTSCxcbiAgICBcIi4vcGllY2VzL21pcnJvcl9mb3J3YXJkc2xhc2gucG5nXCIsIGRyYXcpO1xuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5CQUNLX1NMQVNIXSA9IG5ldyBQaWVjZUNvbXBvbmVudChQaWVjZUlELkJBQ0tfU0xBU0gsXG4gICAgXCIuL3BpZWNlcy9taXJyb3JfYmFja3NsYXNoLnBuZ1wiLCBkcmF3KTtcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuQkxBQ0tfSE9MRV0gPSBuZXcgUGllY2VDb21wb25lbnQoUGllY2VJRC5CTEFDS19IT0xFLFxuICAgIFwiLi9waWVjZXMvbWlycm9yX2JsYWNraG9sZS5wbmdcIiwgZHJhdyk7XG4gIHBpZWNlQ29tcG9uZW50c1tQaWVjZUlELkhPUklfU1BMSVRdID0gbmV3IFBpZWNlQ29tcG9uZW50KFBpZWNlSUQuSE9SSV9TUExJVCxcbiAgICBcIi4vcGllY2VzL21pcnJvcl9zaWRlc3BsaXQucG5nXCIsIGRyYXcpO1xuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5WRVJUX1NQTElUXSA9IG5ldyBQaWVjZUNvbXBvbmVudChQaWVjZUlELlZFUlRfU1BMSVQsXG4gICAgXCIuL3BpZWNlcy9taXJyb3JfdXBzcGxpdC5wbmdcIiwgZHJhdyk7XG5cbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuQkxVRV0gPSBuZXcgUGllY2VDb21wb25lbnQoUGllY2VJRC5CTFVFLFxuICAgIFwiLi9waWVjZXMvc3dhdGNoX2JsdWUucG5nXCIsIGRyYXcpO1xuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5SRURdID0gbmV3IFBpZWNlQ29tcG9uZW50KFBpZWNlSUQuUkVELFxuICAgIFwiLi9waWVjZXMvc3dhdGNoX3JlZC5wbmdcIiwgZHJhdyk7XG4gIHBpZWNlQ29tcG9uZW50c1tQaWVjZUlELkdSRUVOXSA9IG5ldyBQaWVjZUNvbXBvbmVudChQaWVjZUlELkdSRUVOLFxuICAgIFwiLi9waWVjZXMvc3dhdGNoX2dyZWVuLnBuZ1wiLCBkcmF3KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGNvbnN0IHBpZWNlOiBHcmlkUGllY2UgPSB7cGllY2VJRDogaSwgdGlsZToge3g6IC0xLCB5OiAtMX19O1xuICAgIGF2YWlsYWJsZVBpZWNlc1tpXSA9IHBpZWNlO1xuICAgIHBpZWNlSW5kZXhNYXAuc2V0KHBpZWNlLCBpKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUFsbEVuZGluZ3MobGFzZXJncmlkQ29tcG9uZW50Lmxhc2VyZ3JpZCk7XG4gIHByaW50UGF0aHMoKTtcbiAgbGFzZXJncmlkQ29tcG9uZW50LmNhbGN1bGF0ZURyYXdQYXRoV3JhcHBlcigpO1xufVxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBcIiM5YzlhOWJcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgbGFzZXJncmlkQ29tcG9uZW50LmRyYXcoY3R4KTtcbiAgdG9vbGJhci5kcmF3KGN0eCk7XG59XG5cbmZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgY29uc3QgbG9jID0gd2luZG93VG9DYW52YXMoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gIGxhc2VyZ3JpZENvbXBvbmVudC5wcm9jZXNzTW91c2VDbGljayhsb2MueCwgbG9jLnksIGV2ZW50LmJ1dHRvbik7XG4gIHRvb2xiYXIucHJvY2Vzc01vdXNlQ2xpY2sobG9jLngsIGxvYy55LCBldmVudC5idXR0b24pO1xuICBwcmludFBhdGhzKCk7XG4gIGlmIChjdXJyZW50TGV2ZWwgJiYgY2hlY2tWaWN0b3J5KCkpIHtcbiAgICBpZiAobGV2ZWxUeXBlID09PSBMZXZlbFR5cGUuUmFuZG9tKSB7XG4gICAgICB2aWN0b3J5UC5pbm5lckhUTUwgPSBgSW5jcmVkaWJsZSEgWW91IHdvbiFcIj5gXG4gICAgICAgICsgYENsaWNrIGhlcmUgdG8gZ2VuZXJhdGUgYSBuZXcgcmFuZG9tIHB1enpsZSE8L2E+YDtcbiAgICB9IGVsc2UgaWYgKGxldmVsVHlwZSA9PT0gTGV2ZWxUeXBlLkRhaWx5KSB7XG4gICAgICB2aWN0b3J5UC50ZXh0Q29udGVudCA9IFwiV293ISBZb3UgYmVhdCB0aGUgZGFpbHkgbGV2ZWwhXCI7XG4gICAgfSBlbHNlIGlmIChsZXZlbFR5cGUgPT09IExldmVsVHlwZS5DdXN0b20pIHtcbiAgICAgIHZpY3RvcnlQLnRleHRDb250ZW50ID0gXCJXb3chIFlvdSBiZWF0IHRoZSBjdXN0b20gbGV2ZWwhXCI7XG4gICAgfVxuICAgIHZpY3RvcnlQLmhpZGRlbiA9IGZhbHNlO1xuICB9XG4gIGRyYXcoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVFZGdlTGV2ZWxEYXRhKCkge1xuICBpZiAoY3VycmVudExldmVsKSB7XG4gICAgZWRnZUxldmVsRGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiBjdXJyZW50TGV2ZWwpIHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBwYXRoLnN0YXJ0O1xuICAgICAgbGV0IHNvbHZlZCA9IGZhbHNlO1xuICAgICAgaWYgKGVxdWFsUGF0aHMocGF0aCwgbGFzZXJncmlkQ29tcG9uZW50Lmxhc2VyZ3JpZC5wYXRoc1twYXRoLnN0YXJ0IC0gMV0pKSB7XG4gICAgICAgIHNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlZGdlTGV2ZWxEYXRhLnB1c2goeyBlZGdlLCBzb2x2ZWQgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmljdG9yeSgpOiBib29sZWFuIHtcbiAgZm9yIChjb25zdCBkYXRhIG9mIGVkZ2VMZXZlbERhdGEpIHtcbiAgICBpZiAoIWRhdGEuc29sdmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRQYXRocygpIHtcbiAgaWYgKGN1cnJlbnRMZXZlbCkge1xuICAgIHBvcHVsYXRlRWRnZUxldmVsRGF0YSgpO1xuICAgIHByaW50TGV2ZWxQYXRocygpO1xuICB9IGVsc2Uge1xuICAgIHByaW50QWxsUGF0aHMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludEFsbFBhdGhzKCkge1xuICBwYXRoc1ByZS5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBwYXRocyA9IGxhc2VyZ3JpZENvbXBvbmVudC5sYXNlcmdyaWQucGF0aHM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgIGNvbnN0IGN1clBhdGggPSBwYXRoc1tpXTtcbiAgICBsZXQgbGluZSA9IHBhdGhUb1N0cmluZyhjdXJQYXRoKTtcbiAgICBpZiAobGFzZXJncmlkQ29tcG9uZW50LnNlbGVjdGVkRWRnZSA9PT0gaSArIDEpIHtcbiAgICAgIGxpbmUgPSBgPjxiPiR7bGluZX08L2I+YDtcbiAgICB9XG4gICAgcGF0aHNQcmUuaW5uZXJIVE1MICs9IGxpbmU7XG4gICAgaWYgKGkgPCAxOSkge1xuICAgICAgcGF0aHNQcmUuaW5uZXJIVE1MICs9IFwiXFxuXCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50TGV2ZWxQYXRocygpIHtcbiAgcGF0aHNQcmUuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgcGF0aHMgPSBsYXNlcmdyaWRDb21wb25lbnQubGFzZXJncmlkLnBhdGhzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMZXZlbC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxldmVsUGF0aCA9IGN1cnJlbnRMZXZlbFtpXTtcbiAgICBjb25zdCBjdXJQYXRoID0gcGF0aHNbbGV2ZWxQYXRoLnN0YXJ0IC0gMV07XG4gICAgbGV0IGxpbmUgPSBwYXRoVG9TdHJpbmcobGV2ZWxQYXRoKTtcbiAgICBsaW5lID0gZXF1YWxQYXRocyhjdXJQYXRoLCBsZXZlbFBhdGgpID8gYDxzcGFuIHN0eWxlPSdjb2xvcjogZ3JlZW4nPiR7bGluZX08L3NwYW4+YFxuICAgICAgOiBgPHNwYW4gc3R5bGU9J2NvbG9yOiByZWQnPiR7bGluZX08L3NwYW4+YDtcbiAgICBpZiAobGFzZXJncmlkQ29tcG9uZW50LnNlbGVjdGVkRWRnZSA9PT0gbGV2ZWxQYXRoLnN0YXJ0KSB7XG4gICAgICBsaW5lID0gYD48Yj4ke2xpbmV9PC9iPmA7XG4gICAgfVxuICAgIHBhdGhzUHJlLmlubmVySFRNTCArPSBsaW5lO1xuXG4gICAgaWYgKGkgPCBjdXJyZW50TGV2ZWwubGVuZ3RoIC0gMSkge1xuICAgICAgcGF0aHNQcmUuaW5uZXJIVE1MICs9IFwiXFxuXCI7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHgsIHkgcGl4ZWwgY29vcmRpbmF0ZXMgZnJvbSB3aW5kb3cgcG9zaXRpb24gdG8gcmVsYXRpdmUgY2FudmFzIHBvc2l0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0geCBjbGllbnRYXG4gKiBAcGFyYW0ge251bWJlcn0geSBjbGllbnRZXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gYSByZWxhdGl2ZSBsb2NhdGlvbiB0byB0aGUgY2FudmFzXG4gKi9cbmZ1bmN0aW9uIHdpbmRvd1RvQ2FudmFzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gIGNvbnN0IGJib3ggPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB4IC0gYmJveC5sZWZ0ICogKGNhbnZhcy53aWR0aCAvIGJib3gud2lkdGgpLFxuICAgIHk6IHkgLSBiYm94LnRvcCAqIChjYW52YXMuaGVpZ2h0IC8gYmJveC5oZWlnaHQpLFxuICB9O1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0TGV2ZWwoc2VlZDogc3RyaW5nLCBkaWZmaWN1bHR5U3RyaW5nOiBzdHJpbmcpIHtcbi8vICAgZGlmZmljdWx0eSA9IGRpZmZpY3VsdHlTdHJpbmc7XG4vLyAgIHdpbmRvdy5mZXRjaChgL2FwaS9sYXNlcmdhbWUvc2VlZC8ke2RpZmZpY3VsdHlTdHJpbmd9LyR7c2VlZH1gLCB7XG4vLyAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbi8vICAgICBtZXRob2Q6IFwiR0VUXCIsXG4vLyAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vLyAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKHJhbmRvbUxldmVsKSA9PiB7XG4vLyAgICAgICBsZXZlbFR5cGUgPSBMZXZlbFR5cGUuUmFuZG9tO1xuLy8gICAgICAgY29uc3QgbGV2ZWxEYXRhID0gcmFuZG9tTGV2ZWwubGV2ZWxEYXRhO1xuLy8gICAgICAgY29uc3QgbmV3U2VlZCA9IHJhbmRvbUxldmVsLnNlZWQ7XG4vLyAgICAgICBjdXJyZW50TGV2ZWwgPSBbXTtcbi8vICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiBsZXZlbERhdGEucGF0aHMpIHtcbi8vICAgICAgICAgY3VycmVudExldmVsLnB1c2goZGF0YSk7XG4vLyAgICAgICB9XG4vLyAgICAgICBhdmFpbGFibGVQaWVjZXMgPSBsZXZlbERhdGEuYXZhaWxhYmxlUGllY2VzO1xuLy8gICAgICAgcHJpbnRQYXRocygpO1xuLy8gICAgICAgZHJhdygpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH1cblxuaW5pdCgpO1xuIiwiaW1wb3J0IFBhdGggZnJvbSBcIi4uL1BhdGhcIjtcbmltcG9ydCB7ZW5kaW5nVG9TdHJpbmd9IGZyb20gXCIuL0Zyb250ZW5kRW5kaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoVG9TdHJpbmcocGF0aDogUGF0aCkge1xuICByZXR1cm4gc3RhcnRUb1N0cmluZyhwYXRoKSArIGVuZGluZ0xpc3RUb1N0cmluZyhwYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VG9TdHJpbmcocGF0aDogUGF0aCkge1xuICBsZXQgc3RyID0gYCR7cGF0aC5zdGFydH1gO1xuICBpZiAocGF0aC5zdGFydCA8IDEwKSB7XG4gICAgc3RyICs9IFwiICAtPiBcIjtcbiAgfSBlbHNlIHtcbiAgICBzdHIgKz0gXCIgLT4gXCI7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZGluZ0xpc3RUb1N0cmluZyhwYXRoOiBQYXRoKSB7XG4gIGlmIChwYXRoLmVuZGluZ3MubGVuZ3RoID4gMSkge1xuICAgIGxldCBzdHIgPSBgeyR7ZW5kaW5nVG9TdHJpbmcocGF0aC5lbmRpbmdzWzBdKX0sIGA7XG4gICAgZm9yIChsZXQgY3VyRW5kaW5nID0gMTsgY3VyRW5kaW5nIDwgcGF0aC5lbmRpbmdzLmxlbmd0aCAtIDE7IGN1ckVuZGluZysrKSB7XG4gICAgICBzdHIgKz0gYCR7ZW5kaW5nVG9TdHJpbmcocGF0aC5lbmRpbmdzW2N1ckVuZGluZ10pfSwgYDtcbiAgICB9XG4gICAgc3RyICs9IGAke2VuZGluZ1RvU3RyaW5nKHBhdGguZW5kaW5nc1twYXRoLmVuZGluZ3MubGVuZ3RoIC0gMV0pfX1gO1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgcmV0dXJuIGVuZGluZ1RvU3RyaW5nKHBhdGguZW5kaW5nc1swXSk7XG59XG4iLCJpbXBvcnQgVGlsZSBmcm9tIFwiLi4vVGlsZVwiO1xuXG5leHBvcnQgY29uc3QgVElMRV9GVUxMID0gNTA7XG5leHBvcnQgY29uc3QgVElMRV9IQUxGID0gVElMRV9GVUxMIC8gMjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVGcm9tUGl4ZWxzKHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSB7XG4gIHJldHVybiB7eDogTWF0aC5mbG9vcih4IC8gVElMRV9GVUxMKSwgeTogTWF0aC5mbG9vcih5IC8gVElMRV9GVUxMKX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWxlVG9QaXhlbHModGlsZTogVGlsZSkge1xuICByZXR1cm4geyBweDogdGlsZS54ICogVElMRV9GVUxMLCBweTogdGlsZS55ICogVElMRV9GVUxMIH07XG59XG4iLCJleHBvcnQgY29uc3QgaW1wb3J0UHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBvcnRlZC1wcmVcIikgYXMgSFRNTFByZUVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcGF0aHNQcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdGhzLXByZVwiKSBhcyBIVE1MUHJlRWxlbWVudDtcbmV4cG9ydCBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhc2VyLWdhbWUtY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHZpY3RvcnlQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWN0b3J5LXBcIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiIsImltcG9ydCBUaWxlLCB7c3ViVGlsZXMsIHRpbGVXaXRoaW5BcmVhRXhjbHVzaXZlfSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xuaW1wb3J0IHsgdGlsZUZyb21QaXhlbHMsIHRpbGVUb1BpeGVscyB9IGZyb20gXCIuLi9Gcm9udGVuZFRpbGVcIjtcblxuLyoqXG4gKiBBbiBhYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBzbWFsbGVyIHNlY3Rpb24gb2YgdGhlIGNhbnZhc1xuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDYW52YXNDb21wb25lbnQge1xuICBwdWJsaWMgdGlsZTogVGlsZTtcbiAgcHVibGljIHdpZHRoSW5UaWxlczogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0SW5UaWxlczogbnVtYmVyO1xuICBwdWJsaWMgb2Zmc2V0WDogbnVtYmVyO1xuICBwdWJsaWMgb2Zmc2V0WTogbnVtYmVyO1xuICBwcml2YXRlIGltZzogSFRNTEltYWdlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihzcmM6IHN0cmluZywgdGlsZTogVGlsZSwgd2lkdGhJblRpbGVzOiBudW1iZXIsIGhlaWdodEluVGlsZXM6IG51bWJlciwgZHJhdzogKCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKSB7XG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltZy5vbmxvYWQgPSAoKSA9PiB7IGRyYXcoKTsgfTtcbiAgICB0aGlzLmltZy5zcmMgPSBzcmM7XG4gICAgdGhpcy50aWxlID0gdGlsZTtcbiAgICB0aGlzLndpZHRoSW5UaWxlcyA9IHdpZHRoSW5UaWxlcztcbiAgICB0aGlzLmhlaWdodEluVGlsZXMgPSBoZWlnaHRJblRpbGVzO1xuICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XG4gICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3cyB0aGUgY29tcG9uZW50cyBpbWFnZSBhdCB0aGUgbG9jYXRpb25cbiAgICovXG4gIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgbG9jID0gdGlsZVRvUGl4ZWxzKHRoaXMudGlsZSk7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgbG9jLnB4ICsgdGhpcy5vZmZzZXRYLCBsb2MucHkgKyB0aGlzLm9mZnNldFkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpZ3VyZXMgb3V0IHdoZXRoZXIgYSBidXR0b24gcHJlc3MgaGFwcGVuZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgYW5kIHJldHVybnMgaXQuIElmIGl0IGRpZG4ndCwgcmV0dXJucyBudWxsLlxuICAgKi9cbiAgcHVibGljIHByb2Nlc3NNb3VzZUNsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyLCBfYnV0dG9uOiBudW1iZXIpIHtcbiAgICBjb25zdCByZWxhdGl2ZVRpbGUgPSBzdWJUaWxlcyh0aWxlRnJvbVBpeGVscyh4LCB5KSwgdGhpcy50aWxlKTtcbiAgICBpZiAodGlsZVdpdGhpbkFyZWFFeGNsdXNpdmUocmVsYXRpdmVUaWxlLCB7eDogLTEsIHk6IC0xfSwge3g6IHRoaXMud2lkdGhJblRpbGVzLCB5OiB0aGlzLmhlaWdodEluVGlsZXN9KSkge1xuICAgICAgcmV0dXJuIHJlbGF0aXZlVGlsZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbG9yVG9SR0JTdHJpbmcgfSBmcm9tIFwiLi4vLi4vQ29sb3JcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4uLy4uL0RpcmVjdGlvblwiO1xuaW1wb3J0IExhc2VyR3JpZCwgeyBlZGdlTnVtYmVyVG9MYXNlciwgZ2V0UGllY2VGcm9tR3JpZCwgbWFrZURlZmF1bHRHcmlkLCByZW1vdmVQaWVjZUZyb21HcmlkLCBzZXRQaWVjZUluR3JpZCwgdGlsZVRvRWRnZU51bWJlciB9IGZyb20gXCIuLi8uLi9MYXNlckdyaWRcIjtcbmltcG9ydCBMYXNlclNlZ21lbnQsIHsgY29weUxhc2VyU2VnbWVudCwgZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQgfSBmcm9tIFwiLi4vLi4vTGFzZXJTZWdtZW50XCI7XG5pbXBvcnQgUGF0aHNMaXN0IGZyb20gXCIuLi8uLi9QYXRoc0xpc3RcIjtcbmltcG9ydCB7IGFwcGx5UGllY2VUb0xhc2VyIH0gZnJvbSBcIi4uLy4uL1BpZWNlSURcIjtcbmltcG9ydCBUaWxlLCB7IGFkZFRpbGVzLCBkaXJlY3Rpb25Ub1RpbGUsIG5leHRUaWxlLCBzdWJUaWxlcywgdGlsZVdpdGhpbkFyZWFJbmNsdXNpdmUgfSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xuaW1wb3J0IHsgYXZhaWxhYmxlUGllY2VzLCBlZGdlTGV2ZWxEYXRhLCBwaWVjZUNvbXBvbmVudHMsIHByaW50UGF0aHMsIHRvb2xiYXIsIHBpZWNlSW5kZXhNYXAgfSBmcm9tIFwiLi4vRnJvbnRlbmRMYXNlcmdhbWVcIjtcbmltcG9ydCB7IHRpbGVUb1BpeGVscywgVElMRV9GVUxMLCBUSUxFX0hBTEYgfSBmcm9tIFwiLi4vRnJvbnRlbmRUaWxlXCI7XG5pbXBvcnQgQ2FudmFzQ29tcG9uZW50IGZyb20gXCIuL0NhbnZhc0NvbXBvbmVudFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFzZXJHcmlkQ29tcG9uZW50IGV4dGVuZHMgQ2FudmFzQ29tcG9uZW50IHtcbiAgcHVibGljIGxhc2VyZ3JpZDogTGFzZXJHcmlkO1xuICBwdWJsaWMgc2VsZWN0ZWRFZGdlOiBudW1iZXI7XG4gIHB1YmxpYyBkcmF3UGF0aDogTGFzZXJTZWdtZW50W107XG4gIHB1YmxpYyBpbXBvcnRlZFBhdGhzTGlzdDogUGF0aHNMaXN0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNyYzogc3RyaW5nLCB0aWxlOiBUaWxlLCB3aWR0aEluVGlsZXM6IG51bWJlciwgaGVpZ2h0SW5UaWxlczogbnVtYmVyLCBkcmF3OiAoKSA9PiB2b2lkLFxuICAgIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCkge1xuICAgIHN1cGVyKHNyYywgdGlsZSwgd2lkdGhJblRpbGVzLCBoZWlnaHRJblRpbGVzLCBkcmF3LCBvZmZzZXRYLCBvZmZzZXRZKTtcblxuICAgIHRoaXMubGFzZXJncmlkID0gbWFrZURlZmF1bHRHcmlkKCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkRWRnZSA9IDE7XG4gICAgdGhpcy5kcmF3UGF0aCA9IFtdO1xuICAgIHRoaXMuaW1wb3J0ZWRQYXRoc0xpc3QgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuXG4gICAgLy8gRHJhdyBwaWVjZXMgb24gZ3JpZFxuICAgIGZvciAoY29uc3QgcGllY2Ugb2YgYXZhaWxhYmxlUGllY2VzKSB7XG4gICAgICBpZiAoKHRpbGVXaXRoaW5BcmVhSW5jbHVzaXZlKHBpZWNlLnRpbGUsIHsgeDogMCwgeTogMCB9LCB7IHg6IDQsIHk6IDQgfSkpKSB7XG4gICAgICAgIHBpZWNlQ29tcG9uZW50c1twaWVjZS5waWVjZUlEXS5kcmF3QXQoYWRkVGlsZXModGhpcy50aWxlLCBwaWVjZS50aWxlLCB7IHg6IDEsIHk6IDEgfSksIGN0eCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRHJhdyBsYXNlciBwYXRoIG9uIGdyaWRcbiAgICBmb3IgKGNvbnN0IGxhc2VyIG9mIHRoaXMuZHJhd1BhdGgpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yVG9SR0JTdHJpbmcobGFzZXIuY29sb3IpO1xuICAgICAgY29uc3QgbG9jID0gdGlsZVRvUGl4ZWxzKGFkZFRpbGVzKGxhc2VyLnRpbGUsIHsgeDogMSwgeTogMSB9KSk7XG4gICAgICBsb2MucHggKz0gVElMRV9IQUxGO1xuICAgICAgbG9jLnB5ICs9IFRJTEVfSEFMRjtcbiAgICAgIGN0eC5tb3ZlVG8obG9jLnB4LCBsb2MucHkpO1xuICAgICAgY29uc3QgdGlsZW1hcCA9IGRpcmVjdGlvblRvVGlsZShsYXNlci5kaXIpO1xuICAgICAgY3R4LmxpbmVUbyhsb2MucHggKyB0aWxlbWFwLnggKiBUSUxFX0hBTEYsIGxvYy5weSArIHRpbGVtYXAueSAqIFRJTEVfSEFMRik7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLy8gRHJhdyBzZWxlY3RlZCBlZGdlIG1hcmtlciBvbiBncmlkXG4gICAgbGV0IHNlbGVjdGVkRWRnZVBpeGVscyA9IHRpbGVUb1BpeGVscyhhZGRUaWxlcyhlZGdlTnVtYmVyVG9MYXNlcih0aGlzLnNlbGVjdGVkRWRnZSkudGlsZSwgeyB4OiAxLCB5OiAxIH0pKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRFZGdlIDwgNikge1xuICAgICAgY3R4Lm1vdmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0hBTEYgLSA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0ZVTEwgLSA1KTtcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGLCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0ZVTEwpO1xuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0hBTEYgKyA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0ZVTEwgLSA1KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFZGdlIDwgMTEpIHtcbiAgICAgIGN0eC5tb3ZlVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9IQUxGIC0gNSk7XG4gICAgICBjdHgubGluZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9IQUxGKTtcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9IQUxGICsgNSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWRnZSA8IDE2KSB7XG4gICAgICBjdHgubW92ZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfSEFMRiAtIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIDUpO1xuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0hBTEYsIHNlbGVjdGVkRWRnZVBpeGVscy5weSk7XG4gICAgICBjdHgubGluZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfSEFMRiArIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIDUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEVkZ2UgPCAyMSkge1xuICAgICAgY3R4Lm1vdmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0ZVTEwgLSA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYgLSA1KTtcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9GVUxMLCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYpO1xuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0ZVTEwgLSA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYgKyA1KTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgLy8gRHJhdyBsZXZlbCBlZGdlIGhpbnRzXG4gICAgaWYgKGVkZ2VMZXZlbERhdGEpIHtcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuMTtcbiAgICAgIGZvciAoY29uc3QgZWRnZURhdGEgb2YgZWRnZUxldmVsRGF0YSkge1xuICAgICAgICBzZWxlY3RlZEVkZ2VQaXhlbHMgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXMoZWRnZU51bWJlclRvTGFzZXIoZWRnZURhdGEuZWRnZSkudGlsZSwgeyB4OiAxLCB5OiAxIH0pKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVkZ2VEYXRhLnNvbHZlZCA/IFwiIzAwRkYwMFwiIDogXCIjRkYwMDAwXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdChzZWxlY3RlZEVkZ2VQaXhlbHMucHgsIHNlbGVjdGVkRWRnZVBpeGVscy5weSwgVElMRV9GVUxMLCBUSUxFX0ZVTEwpO1xuICAgICAgfVxuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuICAgIH1cblxuICAgIC8vIERyYXcgZWRnZSBudW1iZXJzXG4gICAgZm9yIChsZXQgZSA9IDE7IGUgPD0gMjA7IGUrKykge1xuICAgICAgc2VsZWN0ZWRFZGdlUGl4ZWxzID0gdGlsZVRvUGl4ZWxzKGFkZFRpbGVzKGVkZ2VOdW1iZXJUb0xhc2VyKGUpLnRpbGUsIHsgeDogMSwgeTogMSB9KSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICBjdHguZm9udCA9IFwiMjRweCBzYW5zLXNlcmlmXCI7XG4gICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgIGN0eC5maWxsVGV4dChlLnRvU3RyaW5nKCksIHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfSEFMRiAtIGN0eC5tZWFzdXJlVGV4dChlLnRvU3RyaW5nKCkpLndpZHRoIC8gMixcbiAgICAgICAgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9IQUxGKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcHJvY2Vzc01vdXNlQ2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIsIGJ1dHRvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVsYXRpdmVUaWxlID0gc3VwZXIucHJvY2Vzc01vdXNlQ2xpY2soeCwgeSwgYnV0dG9uKTtcbiAgICBjb25zb2xlLmxvZyhidXR0b24pO1xuICAgIGlmIChyZWxhdGl2ZVRpbGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aWxlV2l0aGluQXJlYUluY2x1c2l2ZShyZWxhdGl2ZVRpbGUsIHsgeDogMSwgeTogMSB9LCB7IHg6IDUsIHk6IDUgfSkpIHtcbiAgICAgIC8vIHRpbGUgaW4gZ3JpZFxuICAgICAgY29uc3QgbG9jID0gc3ViVGlsZXMocmVsYXRpdmVUaWxlLCB7IHg6IDEsIHk6IDEgfSk7XG4gICAgICBjb25zdCBwaWVjZSA9IGdldFBpZWNlRnJvbUdyaWQodGhpcy5sYXNlcmdyaWQsIGxvYyk7XG4gICAgICBpZiAocGllY2UpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFBpZWNlID0gcmVtb3ZlUGllY2VGcm9tR3JpZCh0aGlzLmxhc2VyZ3JpZCwgcGllY2UpO1xuICAgICAgICBpZiAoYnV0dG9uID09PSAwKSB7IC8vIGxlZnQgbW91c2UgYnV0dG9uXG4gICAgICAgICAgdG9vbGJhci5zZWxlY3RlZFBpZWNlID0gcGllY2VJbmRleE1hcC5nZXQocmVtb3ZlZFBpZWNlKSE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBpZWNlSW5HcmlkKHRoaXMubGFzZXJncmlkLCBhdmFpbGFibGVQaWVjZXNbdG9vbGJhci5zZWxlY3RlZFBpZWNlXSwgbG9jKTtcbiAgICAgIH1cbiAgICAgIHByaW50UGF0aHMoKTtcblxuICAgICAgdGhpcy5jYWxjdWxhdGVEcmF3UGF0aFdyYXBwZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdFZGdlID0gdGlsZVRvRWRnZU51bWJlcihhZGRUaWxlcyhyZWxhdGl2ZVRpbGUsIHsgeDogLTEsIHk6IC0xIH0pKTtcbiAgICBpZiAobmV3RWRnZSAhPT0gMCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEVkZ2UgPSBuZXdFZGdlO1xuICAgIH1cbiAgICB0aGlzLmNhbGN1bGF0ZURyYXdQYXRoV3JhcHBlcigpO1xuXG4gICAgcmV0dXJuIHJlbGF0aXZlVGlsZTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVEcmF3UGF0aFdyYXBwZXIoKSB7XG4gICAgdGhpcy5kcmF3UGF0aCA9IFtdO1xuICAgIHRoaXMuY2FsY3VsYXRlRHJhd1BhdGgoZWRnZU51bWJlclRvTGFzZXIodGhpcy5zZWxlY3RlZEVkZ2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlRHJhd1BhdGgobGFzZXI6IExhc2VyU2VnbWVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGxhc2VyLnRpbGUgPSBuZXh0VGlsZShsYXNlci50aWxlLCBsYXNlci5kaXIpO1xuICAgICAgaWYgKCF0aWxlV2l0aGluQXJlYUluY2x1c2l2ZShsYXNlci50aWxlLCB7IHg6IDAsIHk6IDAgfSwgeyB4OiA0LCB5OiA0IH0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBpZWNlID0gZ2V0UGllY2VGcm9tR3JpZCh0aGlzLmxhc2VyZ3JpZCwgbGFzZXIudGlsZSk7XG4gICAgICB0aGlzLmRyYXdQYXRoLnB1c2goZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXIpKTtcbiAgICAgIGlmIChwaWVjZSkge1xuICAgICAgICBhcHBseVBpZWNlVG9MYXNlcihsYXNlciwgcGllY2UucGllY2VJRCk7XG4gICAgICAgIHN3aXRjaCAobGFzZXIuZGlyKSB7XG4gICAgICAgICAgY2FzZSBEaXJlY3Rpb24uU1BMSVRfTk9SVEhfU09VVEg6XG4gICAgICAgICAgICBsYXNlci5kaXIgPSBEaXJlY3Rpb24uTk9SVEg7XG4gICAgICAgICAgICB0aGlzLmRyYXdQYXRoLnB1c2goZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXIpKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRHJhd1BhdGgoZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXIpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLlNQTElUX0VBU1RfV0VTVDpcbiAgICAgICAgICAgIGxhc2VyLmRpciA9IERpcmVjdGlvbi5FQVNUO1xuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aC5wdXNoKGdldE9wcG9zaXRlTGFzZXJTZWdtZW50KGxhc2VyKSk7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZURyYXdQYXRoKGdldE9wcG9zaXRlTGFzZXJTZWdtZW50KGxhc2VyKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIERpcmVjdGlvbi5OT05FOlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IC8vIGlmIHBpZWNlIGlzIG5vdCBudWxsXG4gICAgICB0aGlzLmRyYXdQYXRoLnB1c2goY29weUxhc2VyU2VnbWVudChsYXNlcikpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgR3JpZFBpZWNlIH0gZnJvbSBcIi4uLy4uL0xhc2VyR3JpZFwiO1xuaW1wb3J0IFBpZWNlSUQgZnJvbSBcIi4uLy4uL1BpZWNlSURcIjtcbmltcG9ydCBUaWxlIGZyb20gXCIuLi8uLi9UaWxlXCI7XG5pbXBvcnQgeyB0aWxlVG9QaXhlbHMgfSBmcm9tIFwiLi4vRnJvbnRlbmRUaWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlQ29tcG9uZW50IHtcbiAgcHVibGljIHBpZWNlOiBHcmlkUGllY2U7XG4gIHB1YmxpYyBpc1BsYWNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGllY2VJRDogUGllY2VJRCwgc3JjOiBzdHJpbmcsIGRyYXc6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLnBpZWNlID0geyBwaWVjZUlELCB0aWxlOiB7IHg6IC0xLCB5OiAtMSB9IH07XG4gICAgdGhpcy5pc1BsYWNlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4geyBkcmF3KCk7IH07XG4gICAgdGhpcy5pbWcuc3JjID0gc3JjO1xuICB9XG5cbiAgcHVibGljIGRyYXdBdCh0aWxlOiBUaWxlLCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IHBvcyA9IHRpbGVUb1BpeGVscyh0aWxlKTtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCBwb3MucHgsIHBvcy5weSk7XG4gIH1cbn1cbiIsImltcG9ydCBUaWxlLCB7IGFkZFRpbGVzLCB0aWxlTm90TmVnYXRpdmUgfSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xuaW1wb3J0IHsgYXZhaWxhYmxlUGllY2VzLCBwaWVjZUNvbXBvbmVudHMgfSBmcm9tIFwiLi4vRnJvbnRlbmRMYXNlcmdhbWVcIjtcbmltcG9ydCB7IFRJTEVfRlVMTCwgdGlsZVRvUGl4ZWxzIH0gZnJvbSBcIi4uL0Zyb250ZW5kVGlsZVwiO1xuaW1wb3J0IENhbnZhc0NvbXBvbmVudCBmcm9tIFwiLi9DYW52YXNDb21wb25lbnRcIjtcblxuLyoqXG4gKiBUaGUgdG9vbGJhciB0byBzZWxlY3QgdGhlIHBpZWNlcyB0byBwdXQgaW4gdGhlIGdyaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCBleHRlbmRzIENhbnZhc0NvbXBvbmVudCB7XG4gIHB1YmxpYyBzZWxlY3RlZFBpZWNlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmNcbiAgICogQHBhcmFtIHtUaWxlfSB0aWxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aEluVGlsZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodEluVGlsZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRYID0gMF0gcGl4ZWwgb2Zmc2V0IGZvciB0aGUgaW1hZ2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRZID0gMF0gcGl4ZWwgb2Zmc2V0IGZvciB0aGUgaW1hZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNyYzogc3RyaW5nLCB0aWxlOiBUaWxlLCB3aWR0aEluVGlsZXM6IG51bWJlciwgaGVpZ2h0SW5UaWxlczogbnVtYmVyLFxuICAgIGRyYXc6ICgpID0+IHZvaWQsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCkge1xuICAgIHN1cGVyKHNyYywgdGlsZSwgd2lkdGhJblRpbGVzLCBoZWlnaHRJblRpbGVzLCBkcmF3LCBvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICB0aGlzLnNlbGVjdGVkUGllY2UgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIGRyYXdzIHRoZSBpbWFnZSwgdGhlIHBpZWNlcyBhbmQgdGhlIGhpZ2hsaWdodFxuICAgKi9cbiAgcHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG5cbiAgICAvLyBkcmF3IHBpZWNlcyBpbiBlYWNoIGJveFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXZhaWxhYmxlUGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwaWVjZUNvbXBvbmVudHNbYXZhaWxhYmxlUGllY2VzW2ldLnBpZWNlSURdLmRyYXdBdChhZGRUaWxlcyh0aGlzLnRpbGUsIHt4OiBpLCB5OiAwfSksIGN0eCk7XG4gICAgfVxuXG4gICAgLy8gZHJhdyB0aGUgZ3JlZW4gYW5kIHJlZCBoaWdobGlnaHRzXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjI7XG4gICAgbGV0IGxvYyA9IHRpbGVUb1BpeGVscyhhZGRUaWxlcyh0aGlzLnRpbGUsIHt4OiB0aGlzLnNlbGVjdGVkUGllY2UsIHk6IDB9KSk7XG4gICAgY3R4LmZpbGxSZWN0KGxvYy5weCwgbG9jLnB5LCBUSUxFX0ZVTEwsIFRJTEVfRlVMTCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF2YWlsYWJsZVBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGllY2UgPSBhdmFpbGFibGVQaWVjZXNbaV07XG4gICAgICBpZiAoaSAhPT0gdGhpcy5zZWxlY3RlZFBpZWNlICYmIHRpbGVOb3ROZWdhdGl2ZShwaWVjZS50aWxlKSkge1xuICAgICAgICBsb2MgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXModGhpcy50aWxlLCB7eDogaSwgeTogMH0pKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KGxvYy5weCwgbG9jLnB5LCBUSUxFX0ZVTEwsIFRJTEVfRlVMTCk7XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDEuMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIGEgcGllY2UgaWYgY2xpY2tlZCBvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHggYSBwaXhlbCB4IHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IGEgcGl4ZWwgeSB2YWx1ZVxuICAgKi9cbiAgcHVibGljIHByb2Nlc3NNb3VzZUNsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyLCBidXR0b246IG51bWJlcikge1xuICAgIGNvbnN0IHJlbGF0aXZlVGlsZSA9IHN1cGVyLnByb2Nlc3NNb3VzZUNsaWNrKHgsIHksIGJ1dHRvbik7XG4gICAgaWYgKHJlbGF0aXZlVGlsZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFBpZWNlID0gcmVsYXRpdmVUaWxlLng7XG4gICAgfVxuICAgIHJldHVybiByZWxhdGl2ZVRpbGU7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyB0aGUgc2VsZWN0ZWQgcGllY2Ugb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7UGllY2V9XG4gICAqL1xuICBwdWJsaWMgZ2V0U2VsZWN0ZWRQaWVjZUNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gcGllY2VDb21wb25lbnRzW3RoaXMuc2VsZWN0ZWRQaWVjZV07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=