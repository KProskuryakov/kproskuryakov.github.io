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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9Db2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0VuZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0xhc2VyR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0xhc2VyU2VnbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0xldmVsVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL1BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9QaWVjZUlELnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvVGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL0Zyb250ZW5kRW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvRnJvbnRlbmRMYXNlcmdhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9Gcm9udGVuZFBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9Gcm9udGVuZFRpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9IVE1MRWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9jb21wb25lbnRzL0NhbnZhc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL2NvbXBvbmVudHMvTGFzZXJHcmlkQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvY29tcG9uZW50cy9QaWVjZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL2NvbXBvbmVudHMvVG9vbGJhckNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSyxLQVNKO0FBVEQsV0FBSyxLQUFLO0lBQ1IsbUNBQUs7SUFDTCxpQ0FBSTtJQUNKLG1DQUFLO0lBQ0wsaUNBQUk7SUFDSiwrQkFBRztJQUNILHVDQUFPO0lBQ1AscUNBQU07SUFDTixtQ0FBSztBQUNQLENBQUMsRUFUSSxLQUFLLEtBQUwsS0FBSyxRQVNUO0FBQ0Qsa0JBQWUsS0FBSyxDQUFDO0FBRXJCLFNBQWdCLFNBQVMsQ0FBQyxDQUFRLEVBQUUsQ0FBUTtJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxLQUFZO0lBQzNDLE1BQU0sQ0FBQyxHQUFHLENB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QUFHLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWM7UUFDM0QsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0QsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSx5QkFBeUI7UUFDOUIsT0FBTyxtQ0FBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFuRUQsbUNBbUVDIiwiZmlsZSI6Imxhc2VyZ2FtZS9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvRnJvbnRlbmRMYXNlcmdhbWUudHNcIik7XG4iLCJlbnVtIENvbG9yIHtcclxuICBCTEFDSyxcclxuICBCTFVFLFxyXG4gIEdSRUVOLFxyXG4gIENZQU4sXHJcbiAgUkVELFxyXG4gIE1BR0VOVEEsXHJcbiAgWUVMTE9XLFxyXG4gIFdISVRFLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbG9ycyhhOiBDb2xvciwgYjogQ29sb3IpIHtcclxuICByZXR1cm4gYSB8IGI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvUkdCU3RyaW5nKGNvbG9yOiBDb2xvcikge1xyXG4gIGNvbnN0IHIgPSA0ID09PSAoNCAmIGNvbG9yKSA/IDI1NSA6IDA7XHJcbiAgY29uc3QgZyA9IDIgPT09ICgyICYgY29sb3IpID8gMjU1IDogMDtcclxuICBjb25zdCBiID0gMSA9PT0gKDEgJiBjb2xvcikgPyAyNTUgOiAwO1xyXG4gIHJldHVybiBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvTmFtZShjb2xvcjogQ29sb3IpIHtcclxuICByZXR1cm4gQ29sb3JbY29sb3JdO1xyXG59XHJcbiIsImVudW0gRGlyZWN0aW9uIHtcclxuICBOT1JUSCxcclxuICBFQVNULFxyXG4gIFNPVVRILFxyXG4gIFdFU1QsXHJcbiAgTk9ORSxcclxuICBTUExJVF9FQVNUX1dFU1QsXHJcbiAgU1BMSVRfTk9SVEhfU09VVEgsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uO1xyXG5cclxuY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBbRGlyZWN0aW9uLlNPVVRILCBEaXJlY3Rpb24uV0VTVCwgRGlyZWN0aW9uLk5PUlRILCBEaXJlY3Rpb24uRUFTVF07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVEaXJlY3Rpb24oZGlyOiBEaXJlY3Rpb24pIHtcclxuICBjb25zdCBvcHBEaXIgPSBvcHBvc2l0ZURpcmVjdGlvbltkaXJdO1xyXG4gIHJldHVybiBvcHBEaXIgPT09IHVuZGVmaW5lZCA/IERpcmVjdGlvbi5OT05FIDogb3BwRGlyO1xyXG59XHJcbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9Db2xvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIEVuZGluZyB7XHJcbiAgcmVhZG9ubHkgZW5kOiBFbmQ7XHJcbiAgcmVhZG9ubHkgY29sb3I6IENvbG9yO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFbmQge1xyXG4gIEJsb2NrZWQgPSAtMixcclxuICBMb29wLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5kaW5nc0VxdWFsKGE6IEVuZGluZywgYjogRW5kaW5nKSB7XHJcbiAgcmV0dXJuIGEuZW5kID09PSBiLmVuZCAmJiBhLmNvbG9yID09PSBiLmNvbG9yO1xyXG59XHJcbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuL0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgRW5kaW5nLCB7IEVuZCB9IGZyb20gXCIuL0VuZGluZ1wiO1xyXG5pbXBvcnQgTGFzZXJTZWdtZW50IGZyb20gXCIuL0xhc2VyU2VnbWVudFwiO1xyXG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9QYXRoXCI7XHJcbmltcG9ydCBQaWVjZUlELCB7IGFwcGx5UGllY2VUb0xhc2VyIH0gZnJvbSBcIi4vUGllY2VJRFwiO1xyXG5pbXBvcnQgVGlsZSwgeyBuZXh0VGlsZSwgdGlsZVdpdGhpbkFyZWFFeGNsdXNpdmUgfSBmcm9tIFwiLi9UaWxlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRQaWVjZSB7XHJcbiAgcmVhZG9ubHkgcGllY2VJRDogUGllY2VJRDtcclxuICB0aWxlOiBUaWxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgTGFzZXJHcmlkIHtcclxuICBwYXRoczogUGF0aFtdO1xyXG4gIHJlYWRvbmx5IGdyaWQ6IChHcmlkUGllY2UgfCB1bmRlZmluZWQpW11bXTtcclxuICByZWFkb25seSBsZW5ndGg6IG51bWJlcjtcclxuICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZURlZmF1bHRHcmlkKCk6IExhc2VyR3JpZCB7XHJcbiAgY29uc3QgZ3JpZCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICBncmlkW2ldID0gW107XHJcbiAgfVxyXG4gIGNvbnN0IG5ld0dyaWQgPSB7XHJcbiAgICBwYXRoczogW10gYXMgUGF0aFtdLFxyXG4gICAgZ3JpZDogZ3JpZCBhcyBHcmlkUGllY2VbXVtdLFxyXG4gICAgbGVuZ3RoOiA1LCB3aWR0aDogNSxcclxuICB9O1xyXG4gIGNhbGN1bGF0ZUFsbEVuZGluZ3MobmV3R3JpZCk7XHJcbiAgcmV0dXJuIG5ld0dyaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ3VzdG9tR3JpZChhdmFpbGFibGVQaWVjZXM6IEdyaWRQaWVjZVtdKTogTGFzZXJHcmlkIHtcclxuICBjb25zdCBncmlkID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIGdyaWRbaV0gPSBbXTtcclxuICB9XHJcbiAgY29uc3QgbmV3R3JpZCA9IHtcclxuICAgIHBhdGhzOiBbXSBhcyBQYXRoW10sXHJcbiAgICBncmlkOiBncmlkIGFzIEdyaWRQaWVjZVtdW10sXHJcbiAgICBhdmFpbGFibGVQaWVjZXMsXHJcbiAgICBsZW5ndGg6IDUsIHdpZHRoOiA1LFxyXG4gIH07XHJcbiAgY2FsY3VsYXRlQWxsRW5kaW5ncyhuZXdHcmlkKTtcclxuICByZXR1cm4gbmV3R3JpZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVUb0VkZ2VOdW1iZXIodGlsZTogVGlsZSkge1xyXG4gIGNvbnN0IHggPSB0aWxlLng7XHJcbiAgY29uc3QgeSA9IHRpbGUueTtcclxuICBpZiAoeSA9PT0gLTEgJiYgeCA+IC0xICYmIHggPCA1KSB7XHJcbiAgICByZXR1cm4gMSArIHg7XHJcbiAgfSBlbHNlIGlmICh4ID09PSA1ICYmIHkgPiAtMSAmJiB5IDwgNSkge1xyXG4gICAgcmV0dXJuIDYgKyB5O1xyXG4gIH0gZWxzZSBpZiAoeSA9PT0gNSAmJiB4ID4gLTEgJiYgeCA8IDUpIHtcclxuICAgIHJldHVybiAxNSAtIHg7XHJcbiAgfSBlbHNlIGlmICh4ID09PSAtMSAmJiB5ID4gLTEgJiYgeSA8IDUpIHtcclxuICAgIHJldHVybiAyMCAtIHk7XHJcbiAgfVxyXG4gIHJldHVybiAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWRnZU51bWJlclRvTGFzZXIoZWRnZTogbnVtYmVyKTogTGFzZXJTZWdtZW50IHtcclxuICBpZiAoZWRnZSA8IDYpIHtcclxuICAgIHJldHVybiB7IHRpbGU6IHsgeDogZWRnZSAtIDEsIHk6IC0xIH0sIGRpcjogRGlyZWN0aW9uLlNPVVRILCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcclxuICB9IGVsc2UgaWYgKGVkZ2UgPCAxMSkge1xyXG4gICAgcmV0dXJuIHsgdGlsZTogeyB4OiA1LCB5OiBlZGdlIC0gNiB9LCBkaXI6IERpcmVjdGlvbi5XRVNULCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcclxuICB9IGVsc2UgaWYgKGVkZ2UgPCAxNikge1xyXG4gICAgcmV0dXJuIHsgdGlsZTogeyB4OiAtZWRnZSArIDE1LCB5OiA1IH0sIGRpcjogRGlyZWN0aW9uLk5PUlRILCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcclxuICB9IGVsc2UgaWYgKGVkZ2UgPCAyMSkge1xyXG4gICAgcmV0dXJuIHsgdGlsZTogeyB4OiAtMSwgeTogLWVkZ2UgKyAyMCB9LCBkaXI6IERpcmVjdGlvbi5FQVNULCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IEVkZ2VcIilcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBpZWNlRnJvbUdyaWQobGFzZXJHcmlkOiBMYXNlckdyaWQsIHRpbGU6IFRpbGUpIHtcclxuICBpZiAobGFzZXJHcmlkLmdyaWRbdGlsZS55XSkge1xyXG4gICAgcmV0dXJuIGxhc2VyR3JpZC5ncmlkW3RpbGUueV1bdGlsZS54XTtcclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRTcGFjZShsYXNlckdyaWQ6IExhc2VyR3JpZCwgdGlsZTogVGlsZSkge1xyXG4gIHJldHVybiB0aWxlV2l0aGluQXJlYUV4Y2x1c2l2ZSh0aWxlLCB7IHg6IC0xLCB5OiAtMSB9LCB7IHg6IGxhc2VyR3JpZC53aWR0aCwgeTogbGFzZXJHcmlkLmxlbmd0aCB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBpZWNlRnJvbUdyaWQobGFzZXJHcmlkOiBMYXNlckdyaWQsIHBpZWNlOiBHcmlkUGllY2UpOiBHcmlkUGllY2Uge1xyXG4gIGxhc2VyR3JpZC5ncmlkW3BpZWNlLnRpbGUueV1bcGllY2UudGlsZS54XSA9IHVuZGVmaW5lZDtcclxuICBwaWVjZS50aWxlID0geyB4OiAtMSwgeTogLTEgfTtcclxuICBjYWxjdWxhdGVBbGxFbmRpbmdzKGxhc2VyR3JpZCk7XHJcbiAgcmV0dXJuIHBpZWNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGllY2VJbkdyaWQobGFzZXJHcmlkOiBMYXNlckdyaWQsIHBpZWNlOiBHcmlkUGllY2UsIHRpbGU6IFRpbGUpOiBHcmlkUGllY2UgfCB1bmRlZmluZWQge1xyXG4gIGlmIChpc1ZhbGlkU3BhY2UobGFzZXJHcmlkLCBwaWVjZS50aWxlKSkge1xyXG4gICAgbGFzZXJHcmlkLmdyaWRbcGllY2UudGlsZS55XVtwaWVjZS50aWxlLnhdID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBjb25zdCBjdXJyZW50UGllY2UgPSBnZXRQaWVjZUZyb21HcmlkKGxhc2VyR3JpZCwgdGlsZSk7XHJcbiAgbGV0IHJlbW92ZWRQaWVjZSA9IHVuZGVmaW5lZDtcclxuICBpZiAoY3VycmVudFBpZWNlKSB7XHJcbiAgICByZW1vdmVkUGllY2UgPSByZW1vdmVQaWVjZUZyb21HcmlkKGxhc2VyR3JpZCwgY3VycmVudFBpZWNlKTtcclxuICB9XHJcbiAgcGllY2UudGlsZSA9IHRpbGU7XHJcbiAgbGFzZXJHcmlkLmdyaWRbdGlsZS55XVt0aWxlLnhdID0gcGllY2U7XHJcbiAgY2FsY3VsYXRlQWxsRW5kaW5ncyhsYXNlckdyaWQpO1xyXG4gIHJldHVybiByZW1vdmVkUGllY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBbGxFbmRpbmdzKGxhc2VyR3JpZDogTGFzZXJHcmlkKSB7XHJcbiAgY29uc3QgZW5kaW5nczogUGF0aFtdID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICBlbmRpbmdzW2ldID0geyBzdGFydDogaSArIDEsIGVuZGluZ3M6IGNhbGN1bGF0ZUVuZGluZ0xpc3QobGFzZXJHcmlkLCBpICsgMSkgfTtcclxuICB9XHJcbiAgbGFzZXJHcmlkLnBhdGhzID0gZW5kaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlRW5kaW5nTGlzdChsYXNlckdyaWQ6IExhc2VyR3JpZCwgZWRnZTogbnVtYmVyKSB7XHJcbiAgY29uc3QgZW5kaW5nTGlzdDogRW5kaW5nW10gPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tPbmVFbmRpbmcoZ3JpZDogTGFzZXJHcmlkLCBsYXNlcjogTGFzZXJTZWdtZW50KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgIGxhc2VyLnRpbGUgPSBuZXh0VGlsZShsYXNlci50aWxlLCBsYXNlci5kaXIpO1xyXG4gICAgICBpZiAoIWlzVmFsaWRTcGFjZShncmlkLCBsYXNlci50aWxlKSkge1xyXG4gICAgICAgIGNvbnN0IGVuZEVkZ2UgPSB0aWxlVG9FZGdlTnVtYmVyKGxhc2VyLnRpbGUpO1xyXG4gICAgICAgIGVuZGluZ0xpc3QucHVzaCh7IGVuZDogZW5kRWRnZSwgY29sb3I6IGxhc2VyLmNvbG9yIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwaWVjZSA9IGdldFBpZWNlRnJvbUdyaWQoZ3JpZCwgbGFzZXIudGlsZSk7XHJcbiAgICAgIGlmIChwaWVjZSkge1xyXG4gICAgICAgIGFwcGx5UGllY2VUb0xhc2VyKGxhc2VyLCBwaWVjZS5waWVjZUlEKTtcclxuICAgICAgICBzd2l0Y2ggKGxhc2VyLmRpcikge1xyXG4gICAgICAgICAgY2FzZSBEaXJlY3Rpb24uU1BMSVRfTk9SVEhfU09VVEg6XHJcbiAgICAgICAgICAgIGxhc2VyLmRpciA9IERpcmVjdGlvbi5OT1JUSDtcclxuICAgICAgICAgICAgdHJhY2tPbmVFbmRpbmcoZ3JpZCwgeyB0aWxlOiBsYXNlci50aWxlLCBkaXI6IERpcmVjdGlvbi5TT1VUSCwgY29sb3I6IGxhc2VyLmNvbG9yIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLlNQTElUX0VBU1RfV0VTVDpcclxuICAgICAgICAgICAgbGFzZXIuZGlyID0gRGlyZWN0aW9uLkVBU1Q7XHJcbiAgICAgICAgICAgIHRyYWNrT25lRW5kaW5nKGdyaWQsIHsgdGlsZTogbGFzZXIudGlsZSwgZGlyOiBEaXJlY3Rpb24uV0VTVCwgY29sb3I6IGxhc2VyLmNvbG9yIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLk5PTkU6XHJcbiAgICAgICAgICAgIGVuZGluZ0xpc3QucHVzaCh7IGVuZDogRW5kLkJsb2NrZWQsIGNvbG9yOiBsYXNlci5jb2xvciB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAvLyBpZiBwaWVjZSBpcyBub3QgbnVsbFxyXG4gICAgfSAvLyBmb3JcclxuICAgIGVuZGluZ0xpc3QucHVzaCh7IGVuZDogRW5kLkxvb3AsIGNvbG9yOiBsYXNlci5jb2xvciB9KTtcclxuICB9IC8vIHRyYWNrT25lRW5kaW5nKClcclxuXHJcbiAgdHJhY2tPbmVFbmRpbmcobGFzZXJHcmlkLCBlZGdlTnVtYmVyVG9MYXNlcihlZGdlKSk7XHJcbiAgZW5kaW5nTGlzdC5zb3J0KChhLCBiKSA9PiBhLmVuZCA8IGIuZW5kID8gLTEgOiAxKTtcclxuICByZXR1cm4gZW5kaW5nTGlzdDtcclxufVxyXG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IERpcmVjdGlvbiwgeyBnZXRPcHBvc2l0ZURpcmVjdGlvbiB9IGZyb20gXCIuL0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgVGlsZSwgeyBjb3B5VGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBMYXNlclNlZ21lbnQge1xyXG4gIHRpbGU6IFRpbGU7XHJcbiAgZGlyOiBEaXJlY3Rpb247XHJcbiAgY29sb3I6IENvbG9yO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXI6IExhc2VyU2VnbWVudCk6IExhc2VyU2VnbWVudCB7XHJcbiAgcmV0dXJuIHsgdGlsZTogY29weVRpbGUobGFzZXIudGlsZSksIGRpcjogZ2V0T3Bwb3NpdGVEaXJlY3Rpb24obGFzZXIuZGlyKSwgY29sb3I6IGxhc2VyLmNvbG9yIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5TGFzZXJTZWdtZW50KGxhc2VyOiBMYXNlclNlZ21lbnQpOiBMYXNlclNlZ21lbnQge1xyXG4gIHJldHVybiB7IHRpbGU6IGNvcHlUaWxlKGxhc2VyLnRpbGUpLCBkaXI6IGxhc2VyLmRpciwgY29sb3I6IGxhc2VyLmNvbG9yIH07XHJcbn1cclxuIiwiZW51bSBMZXZlbFR5cGUge1xyXG4gIERhaWx5LFxyXG4gIFJhbmRvbSxcclxuICBDdXN0b20sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExldmVsVHlwZTtcclxuIiwiaW1wb3J0IEVuZGluZywge2VuZGluZ3NFcXVhbH0gZnJvbSBcIi4vRW5kaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgUGF0aCB7XHJcbiAgc3RhcnQ6IG51bWJlcjtcclxuICBlbmRpbmdzOiBFbmRpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsUGF0aHMoYTogUGF0aCwgYjogUGF0aCkge1xyXG4gIGlmIChhLmVuZGluZ3MubGVuZ3RoICE9PSBiLmVuZGluZ3MubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmVuZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghZW5kaW5nc0VxdWFsKGEuZW5kaW5nc1tpXSwgYi5lbmRpbmdzW2ldKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcbiIsImltcG9ydCBDb2xvciwgKiBhcyBjb2xvck1hbmFnZXIgZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi9EaXJlY3Rpb25cIjtcclxuaW1wb3J0IExhc2VyU2VnbWVudCBmcm9tIFwiLi9MYXNlclNlZ21lbnRcIjtcclxuXHJcbmVudW0gUGllY2VJRCB7XHJcbiAgRk9SV0FSRF9TTEFTSCxcclxuICBCQUNLX1NMQVNILFxyXG4gIEJMQUNLX0hPTEUsXHJcbiAgSE9SSV9TUExJVCxcclxuICBWRVJUX1NQTElULFxyXG5cclxuICBSRUQsXHJcbiAgQkxVRSxcclxuICBHUkVFTixcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaWVjZUlEO1xyXG5cclxuaW50ZXJmYWNlIFBpZWNlUnVsZSB7XHJcbiAgZGlycz86IERpcmVjdGlvbltdO1xyXG4gIGNvbG9yPzogQ29sb3I7XHJcbn1cclxuXHJcbmNvbnN0IHBpZWNlUnVsZUxpc3Q6IFJlYWRvbmx5QXJyYXk8UGllY2VSdWxlPiA9IFtcclxuICB7IGRpcnM6IFtEaXJlY3Rpb24uRUFTVCwgRGlyZWN0aW9uLk5PUlRILCBEaXJlY3Rpb24uV0VTVCwgRGlyZWN0aW9uLlNPVVRIXSB9LFxyXG4gIHsgZGlyczogW0RpcmVjdGlvbi5XRVNULCBEaXJlY3Rpb24uU09VVEgsIERpcmVjdGlvbi5FQVNULCBEaXJlY3Rpb24uTk9SVEhdIH0sXHJcbiAgeyBkaXJzOiBbRGlyZWN0aW9uLk5PTkUsIERpcmVjdGlvbi5OT05FLCBEaXJlY3Rpb24uTk9ORSwgRGlyZWN0aW9uLk5PTkVdIH0sXHJcbiAgeyBkaXJzOiBbRGlyZWN0aW9uLkVBU1QsIERpcmVjdGlvbi5OT05FLCBEaXJlY3Rpb24uRUFTVCwgRGlyZWN0aW9uLlNQTElUX05PUlRIX1NPVVRIXSB9LFxyXG4gIHsgZGlyczogW0RpcmVjdGlvbi5OT05FLCBEaXJlY3Rpb24uTk9SVEgsIERpcmVjdGlvbi5TUExJVF9FQVNUX1dFU1QsIERpcmVjdGlvbi5OT1JUSF0gfSxcclxuXHJcbiAgeyBjb2xvcjogQ29sb3IuUkVEIH0sXHJcbiAgeyBjb2xvcjogQ29sb3IuQkxVRSB9LFxyXG4gIHsgY29sb3I6IENvbG9yLkdSRUVOIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQaWVjZVRvTGFzZXIobGFzZXI6IExhc2VyU2VnbWVudCwgcGllY2VJRDogUGllY2VJRCkge1xyXG4gIGNvbnN0IHBpZWNlUnVsZXMgPSBwaWVjZVJ1bGVMaXN0W3BpZWNlSURdO1xyXG4gIGlmIChwaWVjZVJ1bGVzLmRpcnMpIHtcclxuICAgIGxhc2VyLmRpciA9IHBpZWNlUnVsZXMuZGlyc1tsYXNlci5kaXJdO1xyXG4gIH1cclxuICBpZiAocGllY2VSdWxlcy5jb2xvcikge1xyXG4gICAgbGFzZXIuY29sb3IgPSBjb2xvck1hbmFnZXIuYWRkQ29sb3JzKGxhc2VyLmNvbG9yLCBwaWVjZVJ1bGVzLmNvbG9yKTtcclxuICB9XHJcbiAgcmV0dXJuIGxhc2VyO1xyXG59XHJcbiIsImltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4vRGlyZWN0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgVGlsZSB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGlvblRvVGlsZShkaXJlY3Rpb246IERpcmVjdGlvbik6IFRpbGUge1xyXG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICBjYXNlIERpcmVjdGlvbi5OT1JUSDpcclxuICAgICAgcmV0dXJuIHsgeDogMCwgeTogLTEgfTtcclxuICAgIGNhc2UgRGlyZWN0aW9uLkVBU1Q6XHJcbiAgICAgIHJldHVybiB7IHg6IDEsIHk6IDAgfTtcclxuICAgIGNhc2UgRGlyZWN0aW9uLlNPVVRIOlxyXG4gICAgICByZXR1cm4geyB4OiAwLCB5OiAxIH07XHJcbiAgICBjYXNlIERpcmVjdGlvbi5XRVNUOlxyXG4gICAgICByZXR1cm4geyB4OiAtMSwgeTogMCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5leHRUaWxlKHRpbGU6IFRpbGUsIGRpcjogRGlyZWN0aW9uKSB7XHJcbiAgcmV0dXJuIGFkZFRpbGVzKHRpbGUsIGRpcmVjdGlvblRvVGlsZShkaXIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRpbGVzKC4uLnRpbGVzOiBUaWxlW10pOiBUaWxlIHtcclxuICByZXR1cm4gdGlsZXMucmVkdWNlKChwLCB2LCBfKSA9PiB7XHJcbiAgICByZXR1cm4ge3g6IHAueCArIHYueCwgeTogcC55ICsgdi55fTtcclxuICB9LCB7eDogMCwgeTogMH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YlRpbGVzKGE6IFRpbGUsIGI6IFRpbGUpOiBUaWxlIHtcclxuICByZXR1cm4geyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29weVRpbGUodGlsZTogVGlsZSk6IFRpbGUge1xyXG4gIHJldHVybiB7IHg6IHRpbGUueCwgeTogdGlsZS55IH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aWxlTm90TmVnYXRpdmUodGlsZTogVGlsZSkge1xyXG4gIHJldHVybiB0aWxlQ29tcGFyZSh0aWxlLCB7IHg6IC0xLCB5OiAtMSB9LCAoYSwgYikgPT4gYSA+IGIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGlsZUNvbXBhcmUoYTogVGlsZSwgYjogVGlsZSwgY29tcGFyZTogKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIGNvbXBhcmUoYS54LCBiLngpICYmIGNvbXBhcmUoYS55ICwgYi55KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVXaXRoaW5BcmVhSW5jbHVzaXZlKHRpbGU6IFRpbGUsIG1pbjogVGlsZSwgbWF4OiBUaWxlKSB7XHJcbiAgcmV0dXJuIHRpbGVDb21wYXJlKHRpbGUsIG1pbiwgKGEsIGIpID0+IGEgPj0gYikgJiYgdGlsZUNvbXBhcmUodGlsZSwgbWF4LCAoYSwgYikgPT4gYSA8PSBiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVXaXRoaW5BcmVhRXhjbHVzaXZlKHRpbGU6IFRpbGUsIG1pbjogVGlsZSwgbWF4OiBUaWxlKSB7XHJcbiAgcmV0dXJuIHRpbGVDb21wYXJlKHRpbGUsIG1pbiwgKGEsIGIpID0+IGEgPiBiKSAmJiB0aWxlQ29tcGFyZSh0aWxlLCBtYXgsIChhLCBiKSA9PiBhIDwgYik7XHJcbn1cclxuIiwiaW1wb3J0IHtjb2xvclRvTmFtZX0gZnJvbSBcIi4uL0NvbG9yXCI7XHJcbmltcG9ydCBFbmRpbmcsIHtFbmR9IGZyb20gXCIuLi9FbmRpbmdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmRpbmdUb1N0cmluZyhlbmRpbmc6IEVuZGluZykge1xyXG4gIGNvbnN0IGNvbG9yU3RyaW5nID0gY29sb3JUb05hbWUoZW5kaW5nLmNvbG9yKTtcclxuICByZXR1cm4gZW5kaW5nLmVuZCA9PT0gRW5kLkJsb2NrZWQgPyBgYmxvY2tlZCAke2NvbG9yU3RyaW5nfWAgOlxyXG4gICAgZW5kaW5nLmVuZCA9PT0gRW5kLkxvb3AgPyBgbG9vcCAke2NvbG9yU3RyaW5nfWAgOlxyXG4gICAgYCR7ZW5kaW5nLmVuZH0gJHtjb2xvclN0cmluZ31gO1xyXG59XHJcbiIsImltcG9ydCB7IGNhbGN1bGF0ZUFsbEVuZGluZ3MsIEdyaWRQaWVjZSB9IGZyb20gXCIuLi9MYXNlckdyaWRcIjtcclxuaW1wb3J0IExldmVsVHlwZSBmcm9tIFwiLi4vTGV2ZWxUeXBlXCI7XHJcbmltcG9ydCBQYXRoLCB7IGVxdWFsUGF0aHMgfSBmcm9tIFwiLi4vUGF0aFwiO1xyXG5pbXBvcnQgUGllY2VJRCBmcm9tIFwiLi4vUGllY2VJRFwiO1xyXG5pbXBvcnQgTGFzZXJHcmlkQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvTGFzZXJHcmlkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBQaWVjZUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1BpZWNlQ29tcG9uZW50XCI7XHJcbmltcG9ydCBUb29sYmFyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvVG9vbGJhckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBwYXRoVG9TdHJpbmcgfSBmcm9tIFwiLi9Gcm9udGVuZFBhdGhcIjtcclxuaW1wb3J0IHsgY2FudmFzLCBjdHgsIHBhdGhzUHJlLCB2aWN0b3J5UCB9IGZyb20gXCIuL0hUTUxFbGVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvb2xiYXIgPSBuZXcgVG9vbGJhckNvbXBvbmVudChcIi4vdG9vbGJhci5wbmdcIiwgeyB4OiAwLCB5OiA3IH0sIDgsIDEsIGRyYXcpO1xyXG5leHBvcnQgY29uc3QgbGFzZXJncmlkQ29tcG9uZW50ID0gbmV3IExhc2VyR3JpZENvbXBvbmVudChcIi4vbGFzZXJncmlkLnBuZ1wiLCB7IHg6IDAsIHk6IDAgfSwgNywgNywgZHJhdyk7XHJcblxyXG5leHBvcnQgY29uc3QgcGllY2VDb21wb25lbnRzOiBQaWVjZUNvbXBvbmVudFtdID0gW107XHJcblxyXG5sZXQgY3VycmVudExldmVsOiBQYXRoW107XHJcbmV4cG9ydCBjb25zdCBhdmFpbGFibGVQaWVjZXM6IEdyaWRQaWVjZVtdID0gW107XHJcbmV4cG9ydCBjb25zdCBwaWVjZUluZGV4TWFwOiBNYXA8R3JpZFBpZWNlLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG5leHBvcnQgbGV0IGVkZ2VMZXZlbERhdGE6IEFycmF5PHsgZWRnZTogbnVtYmVyLCBzb2x2ZWQ6IGJvb2xlYW4gfT47XHJcbmxldCBsZXZlbFR5cGU6IExldmVsVHlwZSA9IExldmVsVHlwZS5DdXN0b207XHJcbi8vIGxldCBkaWZmaWN1bHR5ID0gXCJtZWRpdW1cIjtcclxuXHJcbi8qKlxyXG4gKiBJbml0cyB0aGUgdGhpbmdzIHRoYXQgYXJlbid0IGNvbnN0YW50c1xyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBvbkNsaWNrKGUpO1xyXG4gIH0pO1xyXG5cclxuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5GT1JXQVJEX1NMQVNIXSA9IG5ldyBQaWVjZUNvbXBvbmVudChQaWVjZUlELkZPUldBUkRfU0xBU0gsXHJcbiAgICBcIi4vcGllY2VzL21pcnJvcl9mb3J3YXJkc2xhc2gucG5nXCIsIGRyYXcpO1xyXG4gIHBpZWNlQ29tcG9uZW50c1tQaWVjZUlELkJBQ0tfU0xBU0hdID0gbmV3IFBpZWNlQ29tcG9uZW50KFBpZWNlSUQuQkFDS19TTEFTSCxcclxuICAgIFwiLi9waWVjZXMvbWlycm9yX2JhY2tzbGFzaC5wbmdcIiwgZHJhdyk7XHJcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuQkxBQ0tfSE9MRV0gPSBuZXcgUGllY2VDb21wb25lbnQoUGllY2VJRC5CTEFDS19IT0xFLFxyXG4gICAgXCIuL3BpZWNlcy9taXJyb3JfYmxhY2tob2xlLnBuZ1wiLCBkcmF3KTtcclxuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5IT1JJX1NQTElUXSA9IG5ldyBQaWVjZUNvbXBvbmVudChQaWVjZUlELkhPUklfU1BMSVQsXHJcbiAgICBcIi4vcGllY2VzL21pcnJvcl9zaWRlc3BsaXQucG5nXCIsIGRyYXcpO1xyXG4gIHBpZWNlQ29tcG9uZW50c1tQaWVjZUlELlZFUlRfU1BMSVRdID0gbmV3IFBpZWNlQ29tcG9uZW50KFBpZWNlSUQuVkVSVF9TUExJVCxcclxuICAgIFwiLi9waWVjZXMvbWlycm9yX3Vwc3BsaXQucG5nXCIsIGRyYXcpO1xyXG5cclxuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5CTFVFXSA9IG5ldyBQaWVjZUNvbXBvbmVudChQaWVjZUlELkJMVUUsXHJcbiAgICBcIi4vcGllY2VzL3N3YXRjaF9ibHVlLnBuZ1wiLCBkcmF3KTtcclxuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5SRURdID0gbmV3IFBpZWNlQ29tcG9uZW50KFBpZWNlSUQuUkVELFxyXG4gICAgXCIuL3BpZWNlcy9zd2F0Y2hfcmVkLnBuZ1wiLCBkcmF3KTtcclxuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5HUkVFTl0gPSBuZXcgUGllY2VDb21wb25lbnQoUGllY2VJRC5HUkVFTixcclxuICAgIFwiLi9waWVjZXMvc3dhdGNoX2dyZWVuLnBuZ1wiLCBkcmF3KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgIGNvbnN0IHBpZWNlOiBHcmlkUGllY2UgPSB7cGllY2VJRDogaSwgdGlsZToge3g6IC0xLCB5OiAtMX19O1xyXG4gICAgYXZhaWxhYmxlUGllY2VzW2ldID0gcGllY2U7XHJcbiAgICBwaWVjZUluZGV4TWFwLnNldChwaWVjZSwgaSk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVBbGxFbmRpbmdzKGxhc2VyZ3JpZENvbXBvbmVudC5sYXNlcmdyaWQpO1xyXG4gIHByaW50UGF0aHMoKTtcclxuICBsYXNlcmdyaWRDb21wb25lbnQuY2FsY3VsYXRlRHJhd1BhdGhXcmFwcGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiM5YzlhOWJcIjtcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgbGFzZXJncmlkQ29tcG9uZW50LmRyYXcoY3R4KTtcclxuICB0b29sYmFyLmRyYXcoY3R4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gIGNvbnN0IGxvYyA9IHdpbmRvd1RvQ2FudmFzKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gIGxhc2VyZ3JpZENvbXBvbmVudC5wcm9jZXNzTW91c2VDbGljayhsb2MueCwgbG9jLnksIGV2ZW50LmJ1dHRvbik7XHJcbiAgdG9vbGJhci5wcm9jZXNzTW91c2VDbGljayhsb2MueCwgbG9jLnksIGV2ZW50LmJ1dHRvbik7XHJcbiAgcHJpbnRQYXRocygpO1xyXG4gIGlmIChjdXJyZW50TGV2ZWwgJiYgY2hlY2tWaWN0b3J5KCkpIHtcclxuICAgIGlmIChsZXZlbFR5cGUgPT09IExldmVsVHlwZS5SYW5kb20pIHtcclxuICAgICAgdmljdG9yeVAuaW5uZXJIVE1MID0gYEluY3JlZGlibGUhIFlvdSB3b24hXCI+YFxyXG4gICAgICAgICsgYENsaWNrIGhlcmUgdG8gZ2VuZXJhdGUgYSBuZXcgcmFuZG9tIHB1enpsZSE8L2E+YDtcclxuICAgIH0gZWxzZSBpZiAobGV2ZWxUeXBlID09PSBMZXZlbFR5cGUuRGFpbHkpIHtcclxuICAgICAgdmljdG9yeVAudGV4dENvbnRlbnQgPSBcIldvdyEgWW91IGJlYXQgdGhlIGRhaWx5IGxldmVsIVwiO1xyXG4gICAgfSBlbHNlIGlmIChsZXZlbFR5cGUgPT09IExldmVsVHlwZS5DdXN0b20pIHtcclxuICAgICAgdmljdG9yeVAudGV4dENvbnRlbnQgPSBcIldvdyEgWW91IGJlYXQgdGhlIGN1c3RvbSBsZXZlbCFcIjtcclxuICAgIH1cclxuICAgIHZpY3RvcnlQLmhpZGRlbiA9IGZhbHNlO1xyXG4gIH1cclxuICBkcmF3KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlRWRnZUxldmVsRGF0YSgpIHtcclxuICBpZiAoY3VycmVudExldmVsKSB7XHJcbiAgICBlZGdlTGV2ZWxEYXRhID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgY3VycmVudExldmVsKSB7XHJcbiAgICAgIGNvbnN0IGVkZ2UgPSBwYXRoLnN0YXJ0O1xyXG4gICAgICBsZXQgc29sdmVkID0gZmFsc2U7XHJcbiAgICAgIGlmIChlcXVhbFBhdGhzKHBhdGgsIGxhc2VyZ3JpZENvbXBvbmVudC5sYXNlcmdyaWQucGF0aHNbcGF0aC5zdGFydCAtIDFdKSkge1xyXG4gICAgICAgIHNvbHZlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWRnZUxldmVsRGF0YS5wdXNoKHsgZWRnZSwgc29sdmVkIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWaWN0b3J5KCk6IGJvb2xlYW4ge1xyXG4gIGZvciAoY29uc3QgZGF0YSBvZiBlZGdlTGV2ZWxEYXRhKSB7XHJcbiAgICBpZiAoIWRhdGEuc29sdmVkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludFBhdGhzKCkge1xyXG4gIGlmIChjdXJyZW50TGV2ZWwpIHtcclxuICAgIHBvcHVsYXRlRWRnZUxldmVsRGF0YSgpO1xyXG4gICAgcHJpbnRMZXZlbFBhdGhzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByaW50QWxsUGF0aHMoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50QWxsUGF0aHMoKSB7XHJcbiAgcGF0aHNQcmUuaW5uZXJIVE1MID0gXCJcIjtcclxuICBjb25zdCBwYXRocyA9IGxhc2VyZ3JpZENvbXBvbmVudC5sYXNlcmdyaWQucGF0aHM7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICBjb25zdCBjdXJQYXRoID0gcGF0aHNbaV07XHJcbiAgICBsZXQgbGluZSA9IHBhdGhUb1N0cmluZyhjdXJQYXRoKTtcclxuICAgIGlmIChsYXNlcmdyaWRDb21wb25lbnQuc2VsZWN0ZWRFZGdlID09PSBpICsgMSkge1xyXG4gICAgICBsaW5lID0gYD48Yj4ke2xpbmV9PC9iPmA7XHJcbiAgICB9XHJcbiAgICBwYXRoc1ByZS5pbm5lckhUTUwgKz0gbGluZTtcclxuICAgIGlmIChpIDwgMTkpIHtcclxuICAgICAgcGF0aHNQcmUuaW5uZXJIVE1MICs9IFwiXFxuXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludExldmVsUGF0aHMoKSB7XHJcbiAgcGF0aHNQcmUuaW5uZXJIVE1MID0gXCJcIjtcclxuICBjb25zdCBwYXRocyA9IGxhc2VyZ3JpZENvbXBvbmVudC5sYXNlcmdyaWQucGF0aHM7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGV2ZWwubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGxldmVsUGF0aCA9IGN1cnJlbnRMZXZlbFtpXTtcclxuICAgIGNvbnN0IGN1clBhdGggPSBwYXRoc1tsZXZlbFBhdGguc3RhcnQgLSAxXTtcclxuICAgIGxldCBsaW5lID0gcGF0aFRvU3RyaW5nKGxldmVsUGF0aCk7XHJcbiAgICBsaW5lID0gZXF1YWxQYXRocyhjdXJQYXRoLCBsZXZlbFBhdGgpID8gYDxzcGFuIHN0eWxlPSdjb2xvcjogZ3JlZW4nPiR7bGluZX08L3NwYW4+YFxyXG4gICAgICA6IGA8c3BhbiBzdHlsZT0nY29sb3I6IHJlZCc+JHtsaW5lfTwvc3Bhbj5gO1xyXG4gICAgaWYgKGxhc2VyZ3JpZENvbXBvbmVudC5zZWxlY3RlZEVkZ2UgPT09IGxldmVsUGF0aC5zdGFydCkge1xyXG4gICAgICBsaW5lID0gYD48Yj4ke2xpbmV9PC9iPmA7XHJcbiAgICB9XHJcbiAgICBwYXRoc1ByZS5pbm5lckhUTUwgKz0gbGluZTtcclxuXHJcbiAgICBpZiAoaSA8IGN1cnJlbnRMZXZlbC5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHBhdGhzUHJlLmlubmVySFRNTCArPSBcIlxcblwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSB4LCB5IHBpeGVsIGNvb3JkaW5hdGVzIGZyb20gd2luZG93IHBvc2l0aW9uIHRvIHJlbGF0aXZlIGNhbnZhcyBwb3NpdGlvblxyXG4gKiBAcGFyYW0ge251bWJlcn0geCBjbGllbnRYXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IGNsaWVudFlcclxuICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6IG51bWJlcn19IGEgcmVsYXRpdmUgbG9jYXRpb24gdG8gdGhlIGNhbnZhc1xyXG4gKi9cclxuZnVuY3Rpb24gd2luZG93VG9DYW52YXMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICBjb25zdCBiYm94ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeDogeCAtIGJib3gubGVmdCAqIChjYW52YXMud2lkdGggLyBiYm94LndpZHRoKSxcclxuICAgIHk6IHkgLSBiYm94LnRvcCAqIChjYW52YXMuaGVpZ2h0IC8gYmJveC5oZWlnaHQpLFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRMZXZlbChzZWVkOiBzdHJpbmcsIGRpZmZpY3VsdHlTdHJpbmc6IHN0cmluZykge1xyXG4vLyAgIGRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5U3RyaW5nO1xyXG4vLyAgIHdpbmRvdy5mZXRjaChgL2FwaS9sYXNlcmdhbWUvc2VlZC8ke2RpZmZpY3VsdHlTdHJpbmd9LyR7c2VlZH1gLCB7XHJcbi8vICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4vLyAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4vLyAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vICAgICByZXNwb25zZS5qc29uKCkudGhlbigocmFuZG9tTGV2ZWwpID0+IHtcclxuLy8gICAgICAgbGV2ZWxUeXBlID0gTGV2ZWxUeXBlLlJhbmRvbTtcclxuLy8gICAgICAgY29uc3QgbGV2ZWxEYXRhID0gcmFuZG9tTGV2ZWwubGV2ZWxEYXRhO1xyXG4vLyAgICAgICBjb25zdCBuZXdTZWVkID0gcmFuZG9tTGV2ZWwuc2VlZDtcclxuLy8gICAgICAgY3VycmVudExldmVsID0gW107XHJcbi8vICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiBsZXZlbERhdGEucGF0aHMpIHtcclxuLy8gICAgICAgICBjdXJyZW50TGV2ZWwucHVzaChkYXRhKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBhdmFpbGFibGVQaWVjZXMgPSBsZXZlbERhdGEuYXZhaWxhYmxlUGllY2VzO1xyXG4vLyAgICAgICBwcmludFBhdGhzKCk7XHJcbi8vICAgICAgIGRyYXcoKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG5pbml0KCk7XHJcbiIsImltcG9ydCBQYXRoIGZyb20gXCIuLi9QYXRoXCI7XHJcbmltcG9ydCB7ZW5kaW5nVG9TdHJpbmd9IGZyb20gXCIuL0Zyb250ZW5kRW5kaW5nXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0aFRvU3RyaW5nKHBhdGg6IFBhdGgpIHtcclxuICByZXR1cm4gc3RhcnRUb1N0cmluZyhwYXRoKSArIGVuZGluZ0xpc3RUb1N0cmluZyhwYXRoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VG9TdHJpbmcocGF0aDogUGF0aCkge1xyXG4gIGxldCBzdHIgPSBgJHtwYXRoLnN0YXJ0fWA7XHJcbiAgaWYgKHBhdGguc3RhcnQgPCAxMCkge1xyXG4gICAgc3RyICs9IFwiICAtPiBcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RyICs9IFwiIC0+IFwiO1xyXG4gIH1cclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5kaW5nTGlzdFRvU3RyaW5nKHBhdGg6IFBhdGgpIHtcclxuICBpZiAocGF0aC5lbmRpbmdzLmxlbmd0aCA+IDEpIHtcclxuICAgIGxldCBzdHIgPSBgeyR7ZW5kaW5nVG9TdHJpbmcocGF0aC5lbmRpbmdzWzBdKX0sIGA7XHJcbiAgICBmb3IgKGxldCBjdXJFbmRpbmcgPSAxOyBjdXJFbmRpbmcgPCBwYXRoLmVuZGluZ3MubGVuZ3RoIC0gMTsgY3VyRW5kaW5nKyspIHtcclxuICAgICAgc3RyICs9IGAke2VuZGluZ1RvU3RyaW5nKHBhdGguZW5kaW5nc1tjdXJFbmRpbmddKX0sIGA7XHJcbiAgICB9XHJcbiAgICBzdHIgKz0gYCR7ZW5kaW5nVG9TdHJpbmcocGF0aC5lbmRpbmdzW3BhdGguZW5kaW5ncy5sZW5ndGggLSAxXSl9fWA7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuICByZXR1cm4gZW5kaW5nVG9TdHJpbmcocGF0aC5lbmRpbmdzWzBdKTtcclxufVxyXG4iLCJpbXBvcnQgVGlsZSBmcm9tIFwiLi4vVGlsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRJTEVfRlVMTCA9IDUwO1xyXG5leHBvcnQgY29uc3QgVElMRV9IQUxGID0gVElMRV9GVUxMIC8gMjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aWxlRnJvbVBpeGVscyh4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUge1xyXG4gIHJldHVybiB7eDogTWF0aC5mbG9vcih4IC8gVElMRV9GVUxMKSwgeTogTWF0aC5mbG9vcih5IC8gVElMRV9GVUxMKX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aWxlVG9QaXhlbHModGlsZTogVGlsZSkge1xyXG4gIHJldHVybiB7IHB4OiB0aWxlLnggKiBUSUxFX0ZVTEwsIHB5OiB0aWxlLnkgKiBUSUxFX0ZVTEwgfTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgaW1wb3J0UHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBvcnRlZC1wcmVcIikgYXMgSFRNTFByZUVsZW1lbnQ7XHJcbmV4cG9ydCBjb25zdCBwYXRoc1ByZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aHMtcHJlXCIpIGFzIEhUTUxQcmVFbGVtZW50O1xyXG5leHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXNlci1nYW1lLWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuZXhwb3J0IGNvbnN0IHZpY3RvcnlQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWN0b3J5LXBcIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG5leHBvcnQgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiIsImltcG9ydCBUaWxlLCB7c3ViVGlsZXMsIHRpbGVXaXRoaW5BcmVhRXhjbHVzaXZlfSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xyXG5pbXBvcnQgeyB0aWxlRnJvbVBpeGVscywgdGlsZVRvUGl4ZWxzIH0gZnJvbSBcIi4uL0Zyb250ZW5kVGlsZVwiO1xyXG5cclxuLyoqXHJcbiAqIEFuIGFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhIHNtYWxsZXIgc2VjdGlvbiBvZiB0aGUgY2FudmFzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDYW52YXNDb21wb25lbnQge1xyXG4gIHB1YmxpYyB0aWxlOiBUaWxlO1xyXG4gIHB1YmxpYyB3aWR0aEluVGlsZXM6IG51bWJlcjtcclxuICBwdWJsaWMgaGVpZ2h0SW5UaWxlczogbnVtYmVyO1xyXG4gIHB1YmxpYyBvZmZzZXRYOiBudW1iZXI7XHJcbiAgcHVibGljIG9mZnNldFk6IG51bWJlcjtcclxuICBwcml2YXRlIGltZzogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3JjOiBzdHJpbmcsIHRpbGU6IFRpbGUsIHdpZHRoSW5UaWxlczogbnVtYmVyLCBoZWlnaHRJblRpbGVzOiBudW1iZXIsIGRyYXc6ICgpID0+IHZvaWQsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKSB7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4geyBkcmF3KCk7IH07XHJcbiAgICB0aGlzLmltZy5zcmMgPSBzcmM7XHJcbiAgICB0aGlzLnRpbGUgPSB0aWxlO1xyXG4gICAgdGhpcy53aWR0aEluVGlsZXMgPSB3aWR0aEluVGlsZXM7XHJcbiAgICB0aGlzLmhlaWdodEluVGlsZXMgPSBoZWlnaHRJblRpbGVzO1xyXG4gICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgY29tcG9uZW50cyBpbWFnZSBhdCB0aGUgbG9jYXRpb25cclxuICAgKi9cclxuICBwdWJsaWMgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgY29uc3QgbG9jID0gdGlsZVRvUGl4ZWxzKHRoaXMudGlsZSk7XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCBsb2MucHggKyB0aGlzLm9mZnNldFgsIGxvYy5weSArIHRoaXMub2Zmc2V0WSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaWd1cmVzIG91dCB3aGV0aGVyIGEgYnV0dG9uIHByZXNzIGhhcHBlbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IGFuZCByZXR1cm5zIGl0LiBJZiBpdCBkaWRuJ3QsIHJldHVybnMgbnVsbC5cclxuICAgKi9cclxuICBwdWJsaWMgcHJvY2Vzc01vdXNlQ2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIsIF9idXR0b246IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVsYXRpdmVUaWxlID0gc3ViVGlsZXModGlsZUZyb21QaXhlbHMoeCwgeSksIHRoaXMudGlsZSk7XHJcbiAgICBpZiAodGlsZVdpdGhpbkFyZWFFeGNsdXNpdmUocmVsYXRpdmVUaWxlLCB7eDogLTEsIHk6IC0xfSwge3g6IHRoaXMud2lkdGhJblRpbGVzLCB5OiB0aGlzLmhlaWdodEluVGlsZXN9KSkge1xyXG4gICAgICByZXR1cm4gcmVsYXRpdmVUaWxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvbG9yVG9SR0JTdHJpbmcgfSBmcm9tIFwiLi4vLi4vQ29sb3JcIjtcclxuaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi4vLi4vRGlyZWN0aW9uXCI7XHJcbmltcG9ydCBMYXNlckdyaWQsIHsgZWRnZU51bWJlclRvTGFzZXIsIGdldFBpZWNlRnJvbUdyaWQsIG1ha2VEZWZhdWx0R3JpZCwgcmVtb3ZlUGllY2VGcm9tR3JpZCwgc2V0UGllY2VJbkdyaWQsIHRpbGVUb0VkZ2VOdW1iZXIgfSBmcm9tIFwiLi4vLi4vTGFzZXJHcmlkXCI7XHJcbmltcG9ydCBMYXNlclNlZ21lbnQsIHsgY29weUxhc2VyU2VnbWVudCwgZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQgfSBmcm9tIFwiLi4vLi4vTGFzZXJTZWdtZW50XCI7XHJcbmltcG9ydCBQYXRoc0xpc3QgZnJvbSBcIi4uLy4uL1BhdGhzTGlzdFwiO1xyXG5pbXBvcnQgeyBhcHBseVBpZWNlVG9MYXNlciB9IGZyb20gXCIuLi8uLi9QaWVjZUlEXCI7XHJcbmltcG9ydCBUaWxlLCB7IGFkZFRpbGVzLCBkaXJlY3Rpb25Ub1RpbGUsIG5leHRUaWxlLCBzdWJUaWxlcywgdGlsZVdpdGhpbkFyZWFJbmNsdXNpdmUgfSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xyXG5pbXBvcnQgeyBhdmFpbGFibGVQaWVjZXMsIGVkZ2VMZXZlbERhdGEsIHBpZWNlQ29tcG9uZW50cywgcHJpbnRQYXRocywgdG9vbGJhciwgcGllY2VJbmRleE1hcCB9IGZyb20gXCIuLi9Gcm9udGVuZExhc2VyZ2FtZVwiO1xyXG5pbXBvcnQgeyB0aWxlVG9QaXhlbHMsIFRJTEVfRlVMTCwgVElMRV9IQUxGIH0gZnJvbSBcIi4uL0Zyb250ZW5kVGlsZVwiO1xyXG5pbXBvcnQgQ2FudmFzQ29tcG9uZW50IGZyb20gXCIuL0NhbnZhc0NvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXNlckdyaWRDb21wb25lbnQgZXh0ZW5kcyBDYW52YXNDb21wb25lbnQge1xyXG4gIHB1YmxpYyBsYXNlcmdyaWQ6IExhc2VyR3JpZDtcclxuICBwdWJsaWMgc2VsZWN0ZWRFZGdlOiBudW1iZXI7XHJcbiAgcHVibGljIGRyYXdQYXRoOiBMYXNlclNlZ21lbnRbXTtcclxuICBwdWJsaWMgaW1wb3J0ZWRQYXRoc0xpc3Q6IFBhdGhzTGlzdDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzcmM6IHN0cmluZywgdGlsZTogVGlsZSwgd2lkdGhJblRpbGVzOiBudW1iZXIsIGhlaWdodEluVGlsZXM6IG51bWJlciwgZHJhdzogKCkgPT4gdm9pZCxcclxuICAgIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCkge1xyXG4gICAgc3VwZXIoc3JjLCB0aWxlLCB3aWR0aEluVGlsZXMsIGhlaWdodEluVGlsZXMsIGRyYXcsIG9mZnNldFgsIG9mZnNldFkpO1xyXG5cclxuICAgIHRoaXMubGFzZXJncmlkID0gbWFrZURlZmF1bHRHcmlkKCk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEVkZ2UgPSAxO1xyXG4gICAgdGhpcy5kcmF3UGF0aCA9IFtdO1xyXG4gICAgdGhpcy5pbXBvcnRlZFBhdGhzTGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIHN1cGVyLmRyYXcoY3R4KTtcclxuXHJcbiAgICAvLyBEcmF3IHBpZWNlcyBvbiBncmlkXHJcbiAgICBmb3IgKGNvbnN0IHBpZWNlIG9mIGF2YWlsYWJsZVBpZWNlcykge1xyXG4gICAgICBpZiAoKHRpbGVXaXRoaW5BcmVhSW5jbHVzaXZlKHBpZWNlLnRpbGUsIHsgeDogMCwgeTogMCB9LCB7IHg6IDQsIHk6IDQgfSkpKSB7XHJcbiAgICAgICAgcGllY2VDb21wb25lbnRzW3BpZWNlLnBpZWNlSURdLmRyYXdBdChhZGRUaWxlcyh0aGlzLnRpbGUsIHBpZWNlLnRpbGUsIHsgeDogMSwgeTogMSB9KSwgY3R4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgbGFzZXIgcGF0aCBvbiBncmlkXHJcbiAgICBmb3IgKGNvbnN0IGxhc2VyIG9mIHRoaXMuZHJhd1BhdGgpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvclRvUkdCU3RyaW5nKGxhc2VyLmNvbG9yKTtcclxuICAgICAgY29uc3QgbG9jID0gdGlsZVRvUGl4ZWxzKGFkZFRpbGVzKGxhc2VyLnRpbGUsIHsgeDogMSwgeTogMSB9KSk7XHJcbiAgICAgIGxvYy5weCArPSBUSUxFX0hBTEY7XHJcbiAgICAgIGxvYy5weSArPSBUSUxFX0hBTEY7XHJcbiAgICAgIGN0eC5tb3ZlVG8obG9jLnB4LCBsb2MucHkpO1xyXG4gICAgICBjb25zdCB0aWxlbWFwID0gZGlyZWN0aW9uVG9UaWxlKGxhc2VyLmRpcik7XHJcbiAgICAgIGN0eC5saW5lVG8obG9jLnB4ICsgdGlsZW1hcC54ICogVElMRV9IQUxGLCBsb2MucHkgKyB0aWxlbWFwLnkgKiBUSUxFX0hBTEYpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyBzZWxlY3RlZCBlZGdlIG1hcmtlciBvbiBncmlkXHJcbiAgICBsZXQgc2VsZWN0ZWRFZGdlUGl4ZWxzID0gdGlsZVRvUGl4ZWxzKGFkZFRpbGVzKGVkZ2VOdW1iZXJUb0xhc2VyKHRoaXMuc2VsZWN0ZWRFZGdlKS50aWxlLCB7IHg6IDEsIHk6IDEgfSkpO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjRkZGRkZGXCI7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEVkZ2UgPCA2KSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGIC0gNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9GVUxMIC0gNSk7XHJcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGLCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0ZVTEwpO1xyXG4gICAgICBjdHgubGluZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfSEFMRiArIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfRlVMTCAtIDUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWRnZSA8IDExKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9IQUxGIC0gNSk7XHJcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYpO1xyXG4gICAgICBjdHgubGluZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfSEFMRiArIDUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWRnZSA8IDE2KSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGIC0gNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgNSk7XHJcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGLCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkpO1xyXG4gICAgICBjdHgubGluZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfSEFMRiArIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIDUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWRnZSA8IDIxKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9GVUxMIC0gNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9IQUxGIC0gNSk7XHJcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9GVUxMLCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYpO1xyXG4gICAgICBjdHgubGluZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfRlVMTCAtIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfSEFMRiArIDUpO1xyXG4gICAgfVxyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgIC8vIERyYXcgbGV2ZWwgZWRnZSBoaW50c1xyXG4gICAgaWYgKGVkZ2VMZXZlbERhdGEpIHtcclxuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC4xO1xyXG4gICAgICBmb3IgKGNvbnN0IGVkZ2VEYXRhIG9mIGVkZ2VMZXZlbERhdGEpIHtcclxuICAgICAgICBzZWxlY3RlZEVkZ2VQaXhlbHMgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXMoZWRnZU51bWJlclRvTGFzZXIoZWRnZURhdGEuZWRnZSkudGlsZSwgeyB4OiAxLCB5OiAxIH0pKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gZWRnZURhdGEuc29sdmVkID8gXCIjMDBGRjAwXCIgOiBcIiNGRjAwMDBcIjtcclxuICAgICAgICBjdHguZmlsbFJlY3Qoc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHksIFRJTEVfRlVMTCwgVElMRV9GVUxMKTtcclxuICAgICAgfVxyXG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxLjA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyBlZGdlIG51bWJlcnNcclxuICAgIGZvciAobGV0IGUgPSAxOyBlIDw9IDIwOyBlKyspIHtcclxuICAgICAgc2VsZWN0ZWRFZGdlUGl4ZWxzID0gdGlsZVRvUGl4ZWxzKGFkZFRpbGVzKGVkZ2VOdW1iZXJUb0xhc2VyKGUpLnRpbGUsIHsgeDogMSwgeTogMSB9KSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgY3R4LmZvbnQgPSBcIjI0cHggc2Fucy1zZXJpZlwiO1xyXG4gICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KGUudG9TdHJpbmcoKSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGIC0gY3R4Lm1lYXN1cmVUZXh0KGUudG9TdHJpbmcoKSkud2lkdGggLyAyLFxyXG4gICAgICAgIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfSEFMRik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJvY2Vzc01vdXNlQ2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIsIGJ1dHRvbjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZWxhdGl2ZVRpbGUgPSBzdXBlci5wcm9jZXNzTW91c2VDbGljayh4LCB5LCBidXR0b24pO1xyXG4gICAgY29uc29sZS5sb2coYnV0dG9uKTtcclxuICAgIGlmIChyZWxhdGl2ZVRpbGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpbGVXaXRoaW5BcmVhSW5jbHVzaXZlKHJlbGF0aXZlVGlsZSwgeyB4OiAxLCB5OiAxIH0sIHsgeDogNSwgeTogNSB9KSkge1xyXG4gICAgICAvLyB0aWxlIGluIGdyaWRcclxuICAgICAgY29uc3QgbG9jID0gc3ViVGlsZXMocmVsYXRpdmVUaWxlLCB7IHg6IDEsIHk6IDEgfSk7XHJcbiAgICAgIGNvbnN0IHBpZWNlID0gZ2V0UGllY2VGcm9tR3JpZCh0aGlzLmxhc2VyZ3JpZCwgbG9jKTtcclxuICAgICAgaWYgKHBpZWNlKSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZFBpZWNlID0gcmVtb3ZlUGllY2VGcm9tR3JpZCh0aGlzLmxhc2VyZ3JpZCwgcGllY2UpO1xyXG4gICAgICAgIGlmIChidXR0b24gPT09IDApIHsgLy8gbGVmdCBtb3VzZSBidXR0b25cclxuICAgICAgICAgIHRvb2xiYXIuc2VsZWN0ZWRQaWVjZSA9IHBpZWNlSW5kZXhNYXAuZ2V0KHJlbW92ZWRQaWVjZSkhO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRQaWVjZUluR3JpZCh0aGlzLmxhc2VyZ3JpZCwgYXZhaWxhYmxlUGllY2VzW3Rvb2xiYXIuc2VsZWN0ZWRQaWVjZV0sIGxvYyk7XHJcbiAgICAgIH1cclxuICAgICAgcHJpbnRQYXRocygpO1xyXG5cclxuICAgICAgdGhpcy5jYWxjdWxhdGVEcmF3UGF0aFdyYXBwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdFZGdlID0gdGlsZVRvRWRnZU51bWJlcihhZGRUaWxlcyhyZWxhdGl2ZVRpbGUsIHsgeDogLTEsIHk6IC0xIH0pKTtcclxuICAgIGlmIChuZXdFZGdlICE9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlID0gbmV3RWRnZTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FsY3VsYXRlRHJhd1BhdGhXcmFwcGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIHJlbGF0aXZlVGlsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxjdWxhdGVEcmF3UGF0aFdyYXBwZXIoKSB7XHJcbiAgICB0aGlzLmRyYXdQYXRoID0gW107XHJcbiAgICB0aGlzLmNhbGN1bGF0ZURyYXdQYXRoKGVkZ2VOdW1iZXJUb0xhc2VyKHRoaXMuc2VsZWN0ZWRFZGdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZURyYXdQYXRoKGxhc2VyOiBMYXNlclNlZ21lbnQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgbGFzZXIudGlsZSA9IG5leHRUaWxlKGxhc2VyLnRpbGUsIGxhc2VyLmRpcik7XHJcbiAgICAgIGlmICghdGlsZVdpdGhpbkFyZWFJbmNsdXNpdmUobGFzZXIudGlsZSwgeyB4OiAwLCB5OiAwIH0sIHsgeDogNCwgeTogNCB9KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwaWVjZSA9IGdldFBpZWNlRnJvbUdyaWQodGhpcy5sYXNlcmdyaWQsIGxhc2VyLnRpbGUpO1xyXG4gICAgICB0aGlzLmRyYXdQYXRoLnB1c2goZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXIpKTtcclxuICAgICAgaWYgKHBpZWNlKSB7XHJcbiAgICAgICAgYXBwbHlQaWVjZVRvTGFzZXIobGFzZXIsIHBpZWNlLnBpZWNlSUQpO1xyXG4gICAgICAgIHN3aXRjaCAobGFzZXIuZGlyKSB7XHJcbiAgICAgICAgICBjYXNlIERpcmVjdGlvbi5TUExJVF9OT1JUSF9TT1VUSDpcclxuICAgICAgICAgICAgbGFzZXIuZGlyID0gRGlyZWN0aW9uLk5PUlRIO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQYXRoLnB1c2goZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXIpKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVEcmF3UGF0aChnZXRPcHBvc2l0ZUxhc2VyU2VnbWVudChsYXNlcikpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLlNQTElUX0VBU1RfV0VTVDpcclxuICAgICAgICAgICAgbGFzZXIuZGlyID0gRGlyZWN0aW9uLkVBU1Q7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BhdGgucHVzaChnZXRPcHBvc2l0ZUxhc2VyU2VnbWVudChsYXNlcikpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZURyYXdQYXRoKGdldE9wcG9zaXRlTGFzZXJTZWdtZW50KGxhc2VyKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBEaXJlY3Rpb24uTk9ORTpcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAvLyBpZiBwaWVjZSBpcyBub3QgbnVsbFxyXG4gICAgICB0aGlzLmRyYXdQYXRoLnB1c2goY29weUxhc2VyU2VnbWVudChsYXNlcikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmlkUGllY2UgfSBmcm9tIFwiLi4vLi4vTGFzZXJHcmlkXCI7XHJcbmltcG9ydCBQaWVjZUlEIGZyb20gXCIuLi8uLi9QaWVjZUlEXCI7XHJcbmltcG9ydCBUaWxlIGZyb20gXCIuLi8uLi9UaWxlXCI7XHJcbmltcG9ydCB7IHRpbGVUb1BpeGVscyB9IGZyb20gXCIuLi9Gcm9udGVuZFRpbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlQ29tcG9uZW50IHtcclxuICBwdWJsaWMgcGllY2U6IEdyaWRQaWVjZTtcclxuICBwdWJsaWMgaXNQbGFjZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBpZWNlSUQ6IFBpZWNlSUQsIHNyYzogc3RyaW5nLCBkcmF3OiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLnBpZWNlID0geyBwaWVjZUlELCB0aWxlOiB7IHg6IC0xLCB5OiAtMSB9IH07XHJcbiAgICB0aGlzLmlzUGxhY2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4geyBkcmF3KCk7IH07XHJcbiAgICB0aGlzLmltZy5zcmMgPSBzcmM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd0F0KHRpbGU6IFRpbGUsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICBjb25zdCBwb3MgPSB0aWxlVG9QaXhlbHModGlsZSk7XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCBwb3MucHgsIHBvcy5weSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUaWxlLCB7IGFkZFRpbGVzLCB0aWxlTm90TmVnYXRpdmUgfSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xyXG5pbXBvcnQgeyBhdmFpbGFibGVQaWVjZXMsIHBpZWNlQ29tcG9uZW50cyB9IGZyb20gXCIuLi9Gcm9udGVuZExhc2VyZ2FtZVwiO1xyXG5pbXBvcnQgeyBUSUxFX0ZVTEwsIHRpbGVUb1BpeGVscyB9IGZyb20gXCIuLi9Gcm9udGVuZFRpbGVcIjtcclxuaW1wb3J0IENhbnZhc0NvbXBvbmVudCBmcm9tIFwiLi9DYW52YXNDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdG9vbGJhciB0byBzZWxlY3QgdGhlIHBpZWNlcyB0byBwdXQgaW4gdGhlIGdyaWRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQgZXh0ZW5kcyBDYW52YXNDb21wb25lbnQge1xyXG4gIHB1YmxpYyBzZWxlY3RlZFBpZWNlOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyY1xyXG4gICAqIEBwYXJhbSB7VGlsZX0gdGlsZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aEluVGlsZXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0SW5UaWxlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0WCA9IDBdIHBpeGVsIG9mZnNldCBmb3IgdGhlIGltYWdlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRZID0gMF0gcGl4ZWwgb2Zmc2V0IGZvciB0aGUgaW1hZ2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHNyYzogc3RyaW5nLCB0aWxlOiBUaWxlLCB3aWR0aEluVGlsZXM6IG51bWJlciwgaGVpZ2h0SW5UaWxlczogbnVtYmVyLFxyXG4gICAgZHJhdzogKCkgPT4gdm9pZCwgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKSB7XHJcbiAgICBzdXBlcihzcmMsIHRpbGUsIHdpZHRoSW5UaWxlcywgaGVpZ2h0SW5UaWxlcywgZHJhdywgb2Zmc2V0WCwgb2Zmc2V0WSk7XHJcbiAgICB0aGlzLnNlbGVjdGVkUGllY2UgPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZHJhd3MgdGhlIGltYWdlLCB0aGUgcGllY2VzIGFuZCB0aGUgaGlnaGxpZ2h0XHJcbiAgICovXHJcbiAgcHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIHN1cGVyLmRyYXcoY3R4KTtcclxuXHJcbiAgICAvLyBkcmF3IHBpZWNlcyBpbiBlYWNoIGJveFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmFpbGFibGVQaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcGllY2VDb21wb25lbnRzW2F2YWlsYWJsZVBpZWNlc1tpXS5waWVjZUlEXS5kcmF3QXQoYWRkVGlsZXModGhpcy50aWxlLCB7eDogaSwgeTogMH0pLCBjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIGdyZWVuIGFuZCByZWQgaGlnaGxpZ2h0c1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuMjtcclxuICAgIGxldCBsb2MgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXModGhpcy50aWxlLCB7eDogdGhpcy5zZWxlY3RlZFBpZWNlLCB5OiAwfSkpO1xyXG4gICAgY3R4LmZpbGxSZWN0KGxvYy5weCwgbG9jLnB5LCBUSUxFX0ZVTEwsIFRJTEVfRlVMTCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF2YWlsYWJsZVBpZWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwaWVjZSA9IGF2YWlsYWJsZVBpZWNlc1tpXTtcclxuICAgICAgaWYgKGkgIT09IHRoaXMuc2VsZWN0ZWRQaWVjZSAmJiB0aWxlTm90TmVnYXRpdmUocGllY2UudGlsZSkpIHtcclxuICAgICAgICBsb2MgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXModGhpcy50aWxlLCB7eDogaSwgeTogMH0pKTtcclxuICAgICAgICBjdHguZmlsbFJlY3QobG9jLnB4LCBsb2MucHksIFRJTEVfRlVMTCwgVElMRV9GVUxMKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMS4wO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0cyBhIHBpZWNlIGlmIGNsaWNrZWQgb24uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggYSBwaXhlbCB4IHZhbHVlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgYSBwaXhlbCB5IHZhbHVlXHJcbiAgICovXHJcbiAgcHVibGljIHByb2Nlc3NNb3VzZUNsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyLCBidXR0b246IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVsYXRpdmVUaWxlID0gc3VwZXIucHJvY2Vzc01vdXNlQ2xpY2soeCwgeSwgYnV0dG9uKTtcclxuICAgIGlmIChyZWxhdGl2ZVRpbGUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBpZWNlID0gcmVsYXRpdmVUaWxlLng7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVsYXRpdmVUaWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyB0aGUgc2VsZWN0ZWQgcGllY2Ugb2JqZWN0LlxyXG4gICAqIEByZXR1cm5zIHtQaWVjZX1cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRQaWVjZUNvbXBvbmVudCgpIHtcclxuICAgIHJldHVybiBwaWVjZUNvbXBvbmVudHNbdGhpcy5zZWxlY3RlZFBpZWNlXTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==