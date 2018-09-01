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

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "./node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "./node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "./node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "./node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "./node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "./node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "./node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

// Detect the global object, even if operating in strict mode.
// http://stackoverflow.com/a/14387057/265298
var global = (0, eval)('this'),
    width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}
math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ((typeof module) == 'object' && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(/*! crypto */ 0);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

// End anonymous scope, and pass initial values.
})(
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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

/***/ "./src/lasergame/LevelGenerator.ts":
/*!*****************************************!*\
  !*** ./src/lasergame/LevelGenerator.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Path_1 = __webpack_require__(/*! ./Path */ "./src/lasergame/Path.ts");
const seedrandom = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
const LaserGrid_1 = __webpack_require__(/*! ./LaserGrid */ "./src/lasergame/LaserGrid.ts");
const defaultGrid = LaserGrid_1.makeDefaultGrid();
function generateLevel(seed = Date.now().toString(), numPaths = 5) {
    const rng = seedrandom(seed);
    const interestingPaths = [];
    const boringPaths = [];
    const availablePieces = [];
    for (let i = 0; i < 8; i++) {
        availablePieces[i] = { pieceID: Math.floor(rng() * 8), tile: { x: -1, y: -1 }, index: i };
    }
    const randomGrid = LaserGrid_1.makeDefaultGrid();
    availablePieces.forEach((piece) => {
        while (true) {
            const randTile = { x: Math.floor(rng() * 5), y: Math.floor(rng() * 5) };
            if (!LaserGrid_1.getPieceFromGrid(randomGrid, randTile)) {
                LaserGrid_1.setPieceInGrid(randomGrid, piece, randTile);
                break;
            }
        }
    });
    const gridPaths = randomGrid.paths;
    for (let i = 0; i < gridPaths.length; i++) {
        if (!Path_1.equalPaths(gridPaths[i], defaultGrid.paths[i])) {
            interestingPaths.push(gridPaths[i]);
        }
        else {
            boringPaths.push(gridPaths[i]);
        }
    }
    // shuffle cleansedEndings
    shuffle(interestingPaths, rng);
    let randomPaths = interestingPaths.slice(0, numPaths);
    if (randomPaths.length < numPaths) {
        shuffle(boringPaths, rng);
        randomPaths = randomPaths.concat(boringPaths.slice(0, numPaths - randomPaths.length));
    }
    randomPaths.sort((a, b) => a.start < b.start ? -1 : 1);
    for (const piece of availablePieces) {
        piece.tile = { x: -1, y: -1 };
    }
    return { paths: randomPaths, availablePieces };
}
exports.generateLevel = generateLevel;
function shuffle(paths, rng) {
    let m = paths.length;
    let t;
    let i;
    while (m) {
        i = Math.floor(rng() * m--);
        t = paths[m];
        paths[m] = paths[i];
        paths[i] = t;
    }
}


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
    LevelType[LevelType["Seed"] = 1] = "Seed";
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
const LevelGenerator_1 = __webpack_require__(/*! ../LevelGenerator */ "./src/lasergame/LevelGenerator.ts");
const seedrandom = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
exports.toolbar = new ToolbarComponent_1.default("./toolbar.png", { x: 0, y: 7 }, 8, 1, draw);
exports.lasergridComponent = new LaserGridComponent_1.default("./lasergrid.png", { x: 0, y: 0 }, 7, 7, draw);
exports.pieceComponents = [];
let currentLevel;
exports.availablePieces = [];
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
    HTMLElements_1.seedLevelButton.addEventListener("click", seedLevel);
    HTMLElements_1.dailyLevelButton.addEventListener("click", dailyLevel);
    exports.pieceComponents[PieceID_1.default.FORWARD_SLASH] = new PieceComponent_1.default("./pieces/mirror_forwardslash.png", draw);
    exports.pieceComponents[PieceID_1.default.BACK_SLASH] = new PieceComponent_1.default("./pieces/mirror_backslash.png", draw);
    exports.pieceComponents[PieceID_1.default.BLACK_HOLE] = new PieceComponent_1.default("./pieces/mirror_blackhole.png", draw);
    exports.pieceComponents[PieceID_1.default.HORI_SPLIT] = new PieceComponent_1.default("./pieces/mirror_sidesplit.png", draw);
    exports.pieceComponents[PieceID_1.default.VERT_SPLIT] = new PieceComponent_1.default("./pieces/mirror_upsplit.png", draw);
    exports.pieceComponents[PieceID_1.default.BLUE] = new PieceComponent_1.default("./pieces/swatch_blue.png", draw);
    exports.pieceComponents[PieceID_1.default.RED] = new PieceComponent_1.default("./pieces/swatch_red.png", draw);
    exports.pieceComponents[PieceID_1.default.GREEN] = new PieceComponent_1.default("./pieces/swatch_green.png", draw);
    for (let i = 0; i < 8; i++) {
        const piece = { pieceID: i, tile: { x: -1, y: -1 }, index: i };
        exports.availablePieces[i] = piece;
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
        if (levelType === LevelType_1.default.Seed) {
            HTMLElements_1.victoryP.textContent = "You beat the seed level!";
        }
        else if (levelType === LevelType_1.default.Daily) {
            HTMLElements_1.victoryP.textContent = "Wow! You beat the daily level!";
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
function setNewLevel(seed, edges) {
    exports.lasergridComponent.clear();
    const newLevel = LevelGenerator_1.generateLevel(seed, edges);
    currentLevel = [];
    newLevel.paths.forEach(p => currentLevel.push(p));
    exports.availablePieces = newLevel.availablePieces;
    printPaths();
    exports.lasergridComponent.calculateDrawPathWrapper();
    draw();
}
function seedLevel() {
    let seed = HTMLElements_1.seedInput.value;
    let edges = parseInt(HTMLElements_1.edgesInput.value);
    if (seed === "") {
        seed = Date.now().toString();
    }
    if (isNaN(edges) || edges < 1 || edges > 20) {
        edges = undefined;
    }
    levelType = LevelType_1.default.Seed;
    HTMLElements_1.victoryP.textContent = `Currently playing seed: ${seed}`;
    setNewLevel(seed, edges);
}
function dailyLevel() {
    const seed = new Date().toDateString();
    const rng = seedrandom(seed);
    const edges = rng() * 10 + 5;
    levelType = LevelType_1.default.Daily;
    HTMLElements_1.victoryP.textContent = `Currently playing daily level: ${seed}`;
    setNewLevel(seed, edges);
}
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
exports.seedLevelButton = document.getElementById("seed-level");
exports.dailyLevelButton = document.getElementById("daily-level");
exports.edgesInput = document.getElementById("edges");
exports.seedInput = document.getElementById("seed");
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
    clear() {
        this.lasergrid = LaserGrid_1.makeDefaultGrid();
        this.selectedEdge = 1;
        this.drawPath = [];
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
                    FrontendLasergame_1.toolbar.selectedPiece = removedPiece.index;
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
    constructor(src, draw) {
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


/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL2FsZWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3R5Y2hlaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yMTI4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3I0MDk2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3JzaGlmdDcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcndvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9zZWVkcmFuZG9tLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9EaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9FbmRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9MYXNlckdyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9MYXNlclNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9MZXZlbEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0xldmVsVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL1BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9QaWVjZUlELnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvVGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL0Zyb250ZW5kRW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvRnJvbnRlbmRMYXNlcmdhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9Gcm9udGVuZFBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9Gcm9udGVuZFRpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9IVE1MRWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9jb21wb25lbnRzL0NhbnZhc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL2NvbXBvbmVudHMvTGFzZXJHcmlkQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvY29tcG9uZW50cy9QaWVjZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL2NvbXBvbmVudHMvVG9vbGJhckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FB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R0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsd0JBQVMsRUFBRSx3QkFBUyxDQUFDLENBQUM7YUFDcEQ7U0FDRjtRQUNELEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksaUJBQWlCLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxNQUFjO1FBQzNELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNELElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0kseUJBQXlCO1FBQzlCLE9BQU8sbUNBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBbkVELG1DQW1FQzs7Ozs7Ozs7Ozs7O0FDM0VELGUiLCJmaWxlIjoibGFzZXJnYW1lL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9Gcm9udGVuZExhc2VyZ2FtZS50c1wiKTtcbiIsIi8vIEEgbGlicmFyeSBvZiBzZWVkYWJsZSBSTkdzIGltcGxlbWVudGVkIGluIEphdmFzY3JpcHQuXG4vL1xuLy8gVXNhZ2U6XG4vL1xuLy8gdmFyIHNlZWRyYW5kb20gPSByZXF1aXJlKCdzZWVkcmFuZG9tJyk7XG4vLyB2YXIgcmFuZG9tID0gc2VlZHJhbmRvbSgxKTsgLy8gb3IgYW55IHNlZWQuXG4vLyB2YXIgeCA9IHJhbmRvbSgpOyAgICAgICAvLyAwIDw9IHggPCAxLiAgRXZlcnkgYml0IGlzIHJhbmRvbS5cbi8vIHZhciB4ID0gcmFuZG9tLnF1aWNrKCk7IC8vIDAgPD0geCA8IDEuICAzMiBiaXRzIG9mIHJhbmRvbW5lc3MuXG5cbi8vIGFsZWEsIGEgNTMtYml0IG11bHRpcGx5LXdpdGgtY2FycnkgZ2VuZXJhdG9yIGJ5IEpvaGFubmVzIEJhYWfDuGUuXG4vLyBQZXJpb2Q6IH4yXjExNlxuLy8gUmVwb3J0ZWQgdG8gcGFzcyBhbGwgQmlnQ3J1c2ggdGVzdHMuXG52YXIgYWxlYSA9IHJlcXVpcmUoJy4vbGliL2FsZWEnKTtcblxuLy8geG9yMTI4LCBhIHB1cmUgeG9yLXNoaWZ0IGdlbmVyYXRvciBieSBHZW9yZ2UgTWFyc2FnbGlhLlxuLy8gUGVyaW9kOiAyXjEyOC0xLlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogTWF0cml4UmFuayBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3IxMjggPSByZXF1aXJlKCcuL2xpYi94b3IxMjgnKTtcblxuLy8geG9yd293LCBHZW9yZ2UgTWFyc2FnbGlhJ3MgMTYwLWJpdCB4b3Itc2hpZnQgY29tYmluZWQgcGx1cyB3ZXlsLlxuLy8gUGVyaW9kOiAyXjE5Mi0yXjMyXG4vLyBSZXBvcnRlZCB0byBmYWlsOiBDb2xsaXNpb25PdmVyLCBTaW1wUG9rZXIsIGFuZCBMaW5lYXJDb21wLlxudmFyIHhvcndvdyA9IHJlcXVpcmUoJy4vbGliL3hvcndvdycpO1xuXG4vLyB4b3JzaGlmdDcsIGJ5IEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyLCB0YWtlc1xuLy8gYSBkaWZmZXJlbnQgYXBwcm9hY2g6IGl0IGFkZHMgcm9idXN0bmVzcyBieSBhbGxvd2luZyBtb3JlIHNoaWZ0c1xuLy8gdGhhbiBNYXJzYWdsaWEncyBvcmlnaW5hbCB0aHJlZS4gIEl0IGlzIGEgNy1zaGlmdCBnZW5lcmF0b3Jcbi8vIHdpdGggMjU2IGJpdHMsIHRoYXQgcGFzc2VzIEJpZ0NydXNoIHdpdGggbm8gc3lzdG1hdGljIGZhaWx1cmVzLlxuLy8gUGVyaW9kIDJeMjU2LTEuXG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHhvcnNoaWZ0NyA9IHJlcXVpcmUoJy4vbGliL3hvcnNoaWZ0NycpO1xuXG4vLyB4b3I0MDk2LCBieSBSaWNoYXJkIEJyZW50LCBpcyBhIDQwOTYtYml0IHhvci1zaGlmdCB3aXRoIGFcbi8vIHZlcnkgbG9uZyBwZXJpb2QgdGhhdCBhbHNvIGFkZHMgYSBXZXlsIGdlbmVyYXRvci4gSXQgYWxzbyBwYXNzZXNcbi8vIEJpZ0NydXNoIHdpdGggbm8gc3lzdGVtYXRpYyBmYWlsdXJlcy4gIEl0cyBsb25nIHBlcmlvZCBtYXlcbi8vIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBtYW55IGdlbmVyYXRvcnMgYW5kIG5lZWQgdG8gYXZvaWRcbi8vIGNvbGxpc2lvbnMuXG4vLyBQZXJpb2Q6IDJeNDEyOC0yXjMyLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3I0MDk2ID0gcmVxdWlyZSgnLi9saWIveG9yNDA5NicpO1xuXG4vLyBUeWNoZS1pLCBieSBTYW11ZWwgTmV2ZXMgYW5kIEZpbGlwZSBBcmF1am8sIGlzIGEgYml0LXNoaWZ0aW5nIHJhbmRvbVxuLy8gbnVtYmVyIGdlbmVyYXRvciBkZXJpdmVkIGZyb20gQ2hhQ2hhLCBhIG1vZGVybiBzdHJlYW0gY2lwaGVyLlxuLy8gaHR0cHM6Ly9lZGVuLmRlaS51Yy5wdC9+c25ldmVzL3B1YnMvMjAxMS1zbmZhMi5wZGZcbi8vIFBlcmlvZDogfjJeMTI3XG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHR5Y2hlaSA9IHJlcXVpcmUoJy4vbGliL3R5Y2hlaScpO1xuXG4vLyBUaGUgb3JpZ2luYWwgQVJDNC1iYXNlZCBwcm5nIGluY2x1ZGVkIGluIHRoaXMgbGlicmFyeS5cbi8vIFBlcmlvZDogfjJeMTYwMFxudmFyIHNyID0gcmVxdWlyZSgnLi9zZWVkcmFuZG9tJyk7XG5cbnNyLmFsZWEgPSBhbGVhO1xuc3IueG9yMTI4ID0geG9yMTI4O1xuc3IueG9yd293ID0geG9yd293O1xuc3IueG9yc2hpZnQ3ID0geG9yc2hpZnQ3O1xuc3IueG9yNDA5NiA9IHhvcjQwOTY7XG5zci50eWNoZWkgPSB0eWNoZWk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3I7XG4iLCIvLyBBIHBvcnQgb2YgYW4gYWxnb3JpdGhtIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2UuY29tPiwgMjAxMFxuLy8gaHR0cDovL2JhYWdvZS5jb20vZW4vUmFuZG9tTXVzaW5ncy9qYXZhc2NyaXB0L1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25xdWlubGFuL2JldHRlci1yYW5kb20tbnVtYmVycy1mb3ItamF2YXNjcmlwdC1taXJyb3Jcbi8vIE9yaWdpbmFsIHdvcmsgaXMgdW5kZXIgTUlUIGxpY2Vuc2UgLVxuXG4vLyBDb3B5cmlnaHQgKEMpIDIwMTAgYnkgSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5vcmc+XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy8gXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vLyBcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gQWxlYShzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIG1hc2ggPSBNYXNoKCk7XG5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gMjA5MTYzOSAqIG1lLnMwICsgbWUuYyAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gICAgbWUuczAgPSBtZS5zMTtcbiAgICBtZS5zMSA9IG1lLnMyO1xuICAgIHJldHVybiBtZS5zMiA9IHQgLSAobWUuYyA9IHQgfCAwKTtcbiAgfTtcblxuICAvLyBBcHBseSB0aGUgc2VlZGluZyBhbGdvcml0aG0gZnJvbSBCYWFnb2UuXG4gIG1lLmMgPSAxO1xuICBtZS5zMCA9IG1hc2goJyAnKTtcbiAgbWUuczEgPSBtYXNoKCcgJyk7XG4gIG1lLnMyID0gbWFzaCgnICcpO1xuICBtZS5zMCAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczAgPCAwKSB7IG1lLnMwICs9IDE7IH1cbiAgbWUuczEgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMxIDwgMCkgeyBtZS5zMSArPSAxOyB9XG4gIG1lLnMyIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMiA8IDApIHsgbWUuczIgKz0gMTsgfVxuICBtYXNoID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuYyA9IGYuYztcbiAgdC5zMCA9IGYuczA7XG4gIHQuczEgPSBmLnMxO1xuICB0LnMyID0gZi5zMjtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgQWxlYShzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IHhnLm5leHQ7XG4gIHBybmcuaW50MzIgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgKiAweDEwMDAwMDAwMCkgfCAwOyB9XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHBybmcoKSArIChwcm5nKCkgKiAweDIwMDAwMCB8IDApICogMS4xMTAyMjMwMjQ2MjUxNTY1ZS0xNjsgLy8gMl4tNTNcbiAgfTtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmZ1bmN0aW9uIE1hc2goKSB7XG4gIHZhciBuID0gMHhlZmM4MjQ5ZDtcblxuICB2YXIgbWFzaCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbiArPSBkYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgICB2YXIgaCA9IDAuMDI1MTk2MDMyODI0MTY5MzggKiBuO1xuICAgICAgbiA9IGggPj4+IDA7XG4gICAgICBoIC09IG47XG4gICAgICBoICo9IG47XG4gICAgICBuID0gaCA+Pj4gMDtcbiAgICAgIGggLT0gbjtcbiAgICAgIG4gKz0gaCAqIDB4MTAwMDAwMDAwOyAvLyAyXjMyXG4gICAgfVxuICAgIHJldHVybiAobiA+Pj4gMCkgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICB9O1xuXG4gIHJldHVybiBtYXNoO1xufVxuXG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMuYWxlYSA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwiVHljaGUtaVwiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBTYW11ZWwgTmV2ZXMgYW5kIEZpbGlwZSBBcmF1am8uXG4vLyBTZWUgaHR0cHM6Ly9lZGVuLmRlaS51Yy5wdC9+c25ldmVzL3B1YnMvMjAxMS1zbmZhMi5wZGZcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYiA9IG1lLmIsIGMgPSBtZS5jLCBkID0gbWUuZCwgYSA9IG1lLmE7XG4gICAgYiA9IChiIDw8IDI1KSBeIChiID4+PiA3KSBeIGM7XG4gICAgYyA9IChjIC0gZCkgfCAwO1xuICAgIGQgPSAoZCA8PCAyNCkgXiAoZCA+Pj4gOCkgXiBhO1xuICAgIGEgPSAoYSAtIGIpIHwgMDtcbiAgICBtZS5iID0gYiA9IChiIDw8IDIwKSBeIChiID4+PiAxMikgXiBjO1xuICAgIG1lLmMgPSBjID0gKGMgLSBkKSB8IDA7XG4gICAgbWUuZCA9IChkIDw8IDE2KSBeIChjID4+PiAxNikgXiBhO1xuICAgIHJldHVybiBtZS5hID0gKGEgLSBiKSB8IDA7XG4gIH07XG5cbiAgLyogVGhlIGZvbGxvd2luZyBpcyBub24taW52ZXJ0ZWQgdHljaGUsIHdoaWNoIGhhcyBiZXR0ZXIgaW50ZXJuYWxcbiAgICogYml0IGRpZmZ1c2lvbiwgYnV0IHdoaWNoIGlzIGFib3V0IDI1JSBzbG93ZXIgdGhhbiB0eWNoZS1pIGluIEpTLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGEgPSBtZS5hLCBiID0gbWUuYiwgYyA9IG1lLmMsIGQgPSBtZS5kO1xuICAgIGEgPSAobWUuYSArIG1lLmIgfCAwKSA+Pj4gMDtcbiAgICBkID0gbWUuZCBeIGE7IGQgPSBkIDw8IDE2IF4gZCA+Pj4gMTY7XG4gICAgYyA9IG1lLmMgKyBkIHwgMDtcbiAgICBiID0gbWUuYiBeIGM7IGIgPSBiIDw8IDEyIF4gZCA+Pj4gMjA7XG4gICAgbWUuYSA9IGEgPSBhICsgYiB8IDA7XG4gICAgZCA9IGQgXiBhOyBtZS5kID0gZCA9IGQgPDwgOCBeIGQgPj4+IDI0O1xuICAgIG1lLmMgPSBjID0gYyArIGQgfCAwO1xuICAgIGIgPSBiIF4gYztcbiAgICByZXR1cm4gbWUuYiA9IChiIDw8IDcgXiBiID4+PiAyNSk7XG4gIH1cbiAgKi9cblxuICBtZS5hID0gMDtcbiAgbWUuYiA9IDA7XG4gIG1lLmMgPSAyNjU0NDM1NzY5IHwgMDtcbiAgbWUuZCA9IDEzNjcxMzA1NTE7XG5cbiAgaWYgKHNlZWQgPT09IE1hdGguZmxvb3Ioc2VlZCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUuYSA9IChzZWVkIC8gMHgxMDAwMDAwMDApIHwgMDtcbiAgICBtZS5iID0gc2VlZCB8IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyAyMDsgaysrKSB7XG4gICAgbWUuYiBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5hID0gZi5hO1xuICB0LmIgPSBmLmI7XG4gIHQuYyA9IGYuYztcbiAgdC5kID0gZi5kO1xuICByZXR1cm4gdDtcbn07XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMudHljaGVpID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3IxMjhcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gR2VvcmdlIE1hcnNhZ2xpYS4gIFNlZSBodHRwOi8vd3d3LmpzdGF0c29mdC5vcmcvdjA4L2kxNC9wYXBlclxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgbWUueCA9IDA7XG4gIG1lLnkgPSAwO1xuICBtZS56ID0gMDtcbiAgbWUudyA9IDA7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gbWUueCBeIChtZS54IDw8IDExKTtcbiAgICBtZS54ID0gbWUueTtcbiAgICBtZS55ID0gbWUuejtcbiAgICBtZS56ID0gbWUudztcbiAgICByZXR1cm4gbWUudyBePSAobWUudyA+Pj4gMTkpIF4gdCBeICh0ID4+PiA4KTtcbiAgfTtcblxuICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS54ID0gc2VlZDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDY0OyBrKyspIHtcbiAgICBtZS54IF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLng7XG4gIHQueSA9IGYueTtcbiAgdC56ID0gZi56O1xuICB0LncgPSBmLnc7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcjEyOCA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgUmljaGFyZCBCcmVudCdzIFhvcmdlbnMgeG9yNDA5NiBhbGdvcml0aG0uXG4vL1xuLy8gVGhpcyBmYXN0IG5vbi1jcnlwdG9ncmFwaGljIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIGlzIGRlc2lnbmVkIGZvclxuLy8gdXNlIGluIE1vbnRlLUNhcmxvIGFsZ29yaXRobXMuIEl0IGNvbWJpbmVzIGEgbG9uZy1wZXJpb2QgeG9yc2hpZnRcbi8vIGdlbmVyYXRvciB3aXRoIGEgV2V5bCBnZW5lcmF0b3IsIGFuZCBpdCBwYXNzZXMgYWxsIGNvbW1vbiBiYXR0ZXJpZXNcbi8vIG9mIHN0YXN0aWNpYWwgdGVzdHMgZm9yIHJhbmRvbW5lc3Mgd2hpbGUgY29uc3VtaW5nIG9ubHkgYSBmZXcgbmFub3NlY29uZHNcbi8vIGZvciBlYWNoIHBybmcgZ2VuZXJhdGVkLiAgRm9yIGJhY2tncm91bmQgb24gdGhlIGdlbmVyYXRvciwgc2VlIEJyZW50J3Ncbi8vIHBhcGVyOiBcIlNvbWUgbG9uZy1wZXJpb2QgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzIHVzaW5nIHNoaWZ0cyBhbmQgeG9ycy5cIlxuLy8gaHR0cDovL2FyeGl2Lm9yZy9wZGYvMTAwNC4zMTE1djEucGRmXG4vL1xuLy8gVXNhZ2U6XG4vL1xuLy8gdmFyIHhvcjQwOTYgPSByZXF1aXJlKCd4b3I0MDk2Jyk7XG4vLyByYW5kb20gPSB4b3I0MDk2KDEpOyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlZWQgd2l0aCBpbnQzMiBvciBzdHJpbmcuXG4vLyBhc3NlcnQuZXF1YWwocmFuZG9tKCksIDAuMTUyMDQzNjQ1MDUzODU0Nyk7IC8vICgwLCAxKSByYW5nZSwgNTMgYml0cy5cbi8vIGFzc2VydC5lcXVhbChyYW5kb20uaW50MzIoKSwgMTgwNjUzNDg5Nyk7ICAgLy8gc2lnbmVkIGludDMyLCAzMiBiaXRzLlxuLy9cbi8vIEZvciBub256ZXJvIG51bWVyaWMga2V5cywgdGhpcyBpbXBlbGVtZW50YXRpb24gcHJvdmlkZXMgYSBzZXF1ZW5jZVxuLy8gaWRlbnRpY2FsIHRvIHRoYXQgYnkgQnJlbnQncyB4b3JnZW5zIDMgaW1wbGVtZW50YWlvbiBpbiBDLiAgVGhpc1xuLy8gaW1wbGVtZW50YXRpb24gYWxzbyBwcm92aWRlcyBmb3IgaW5pdGFsaXppbmcgdGhlIGdlbmVyYXRvciB3aXRoXG4vLyBzdHJpbmcgc2VlZHMsIG9yIGZvciBzYXZpbmcgYW5kIHJlc3RvcmluZyB0aGUgc3RhdGUgb2YgdGhlIGdlbmVyYXRvci5cbi8vXG4vLyBPbiBDaHJvbWUsIHRoaXMgcHJuZyBiZW5jaG1hcmtzIGFib3V0IDIuMSB0aW1lcyBzbG93ZXIgdGhhblxuLy8gSmF2YXNjcmlwdCdzIGJ1aWx0LWluIE1hdGgucmFuZG9tKCkuXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3ID0gbWUudyxcbiAgICAgICAgWCA9IG1lLlgsIGkgPSBtZS5pLCB0LCB2O1xuICAgIC8vIFVwZGF0ZSBXZXlsIGdlbmVyYXRvci5cbiAgICBtZS53ID0gdyA9ICh3ICsgMHg2MWM4ODY0NykgfCAwO1xuICAgIC8vIFVwZGF0ZSB4b3IgZ2VuZXJhdG9yLlxuICAgIHYgPSBYWyhpICsgMzQpICYgMTI3XTtcbiAgICB0ID0gWFtpID0gKChpICsgMSkgJiAxMjcpXTtcbiAgICB2IF49IHYgPDwgMTM7XG4gICAgdCBePSB0IDw8IDE3O1xuICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgdCBePSB0ID4+PiAxMjtcbiAgICAvLyBVcGRhdGUgWG9yIGdlbmVyYXRvciBhcnJheSBzdGF0ZS5cbiAgICB2ID0gWFtpXSA9IHYgXiB0O1xuICAgIG1lLmkgPSBpO1xuICAgIC8vIFJlc3VsdCBpcyB0aGUgY29tYmluYXRpb24uXG4gICAgcmV0dXJuICh2ICsgKHcgXiAodyA+Pj4gMTYpKSkgfCAwO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQobWUsIHNlZWQpIHtcbiAgICB2YXIgdCwgdiwgaSwgaiwgdywgWCA9IFtdLCBsaW1pdCA9IDEyODtcbiAgICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgICAgLy8gTnVtZXJpYyBzZWVkcyBpbml0aWFsaXplIHYsIHdoaWNoIGlzIHVzZWQgdG8gZ2VuZXJhdGVzIFguXG4gICAgICB2ID0gc2VlZDtcbiAgICAgIHNlZWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdHJpbmcgc2VlZHMgYXJlIG1peGVkIGludG8gdiBhbmQgWCBvbmUgY2hhcmFjdGVyIGF0IGEgdGltZS5cbiAgICAgIHNlZWQgPSBzZWVkICsgJ1xcMCc7XG4gICAgICB2ID0gMDtcbiAgICAgIGxpbWl0ID0gTWF0aC5tYXgobGltaXQsIHNlZWQubGVuZ3RoKTtcbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6ZSBjaXJjdWxhciBhcnJheSBhbmQgd2V5bCB2YWx1ZS5cbiAgICBmb3IgKGkgPSAwLCBqID0gLTMyOyBqIDwgbGltaXQ7ICsraikge1xuICAgICAgLy8gUHV0IHRoZSB1bmljb2RlIGNoYXJhY3RlcnMgaW50byB0aGUgYXJyYXksIGFuZCBzaHVmZmxlIHRoZW0uXG4gICAgICBpZiAoc2VlZCkgdiBePSBzZWVkLmNoYXJDb2RlQXQoKGogKyAzMikgJSBzZWVkLmxlbmd0aCk7XG4gICAgICAvLyBBZnRlciAzMiBzaHVmZmxlcywgdGFrZSB2IGFzIHRoZSBzdGFydGluZyB3IHZhbHVlLlxuICAgICAgaWYgKGogPT09IDApIHcgPSB2O1xuICAgICAgdiBePSB2IDw8IDEwO1xuICAgICAgdiBePSB2ID4+PiAxNTtcbiAgICAgIHYgXj0gdiA8PCA0O1xuICAgICAgdiBePSB2ID4+PiAxMztcbiAgICAgIGlmIChqID49IDApIHtcbiAgICAgICAgdyA9ICh3ICsgMHg2MWM4ODY0NykgfCAwOyAgICAgLy8gV2V5bC5cbiAgICAgICAgdCA9IChYW2ogJiAxMjddIF49ICh2ICsgdykpOyAgLy8gQ29tYmluZSB4b3IgYW5kIHdleWwgdG8gaW5pdCBhcnJheS5cbiAgICAgICAgaSA9ICgwID09IHQpID8gaSArIDEgOiAwOyAgICAgLy8gQ291bnQgemVyb2VzLlxuICAgICAgfVxuICAgIH1cbiAgICAvLyBXZSBoYXZlIGRldGVjdGVkIGFsbCB6ZXJvZXM7IG1ha2UgdGhlIGtleSBub256ZXJvLlxuICAgIGlmIChpID49IDEyOCkge1xuICAgICAgWFsoc2VlZCAmJiBzZWVkLmxlbmd0aCB8fCAwKSAmIDEyN10gPSAtMTtcbiAgICB9XG4gICAgLy8gUnVuIHRoZSBnZW5lcmF0b3IgNTEyIHRpbWVzIHRvIGZ1cnRoZXIgbWl4IHRoZSBzdGF0ZSBiZWZvcmUgdXNpbmcgaXQuXG4gICAgLy8gRmFjdG9yaW5nIHRoaXMgYXMgYSBmdW5jdGlvbiBzbG93cyB0aGUgbWFpbiBnZW5lcmF0b3IsIHNvIGl0IGlzIGp1c3RcbiAgICAvLyB1bnJvbGxlZCBoZXJlLiAgVGhlIHdleWwgZ2VuZXJhdG9yIGlzIG5vdCBhZHZhbmNlZCB3aGlsZSB3YXJtaW5nIHVwLlxuICAgIGkgPSAxMjc7XG4gICAgZm9yIChqID0gNCAqIDEyODsgaiA+IDA7IC0taikge1xuICAgICAgdiA9IFhbKGkgKyAzNCkgJiAxMjddO1xuICAgICAgdCA9IFhbaSA9ICgoaSArIDEpICYgMTI3KV07XG4gICAgICB2IF49IHYgPDwgMTM7XG4gICAgICB0IF49IHQgPDwgMTc7XG4gICAgICB2IF49IHYgPj4+IDE1O1xuICAgICAgdCBePSB0ID4+PiAxMjtcbiAgICAgIFhbaV0gPSB2IF4gdDtcbiAgICB9XG4gICAgLy8gU3RvcmluZyBzdGF0ZSBhcyBvYmplY3QgbWVtYmVycyBpcyBmYXN0ZXIgdGhhbiB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcy5cbiAgICBtZS53ID0gdztcbiAgICBtZS5YID0gWDtcbiAgICBtZS5pID0gaTtcbiAgfVxuXG4gIGluaXQobWUsIHNlZWQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5pID0gZi5pO1xuICB0LncgPSBmLnc7XG4gIHQuWCA9IGYuWC5zbGljZSgpO1xuICByZXR1cm4gdDtcbn07XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICBpZiAoc2VlZCA9PSBudWxsKSBzZWVkID0gKyhuZXcgRGF0ZSk7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLlgpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3I0MDk2ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdyBvYmplY3Qgb3IgZ2xvYmFsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcnNoaWZ0N1wiIGFsZ29yaXRobSBieVxuLy8gRnJhbsOnb2lzIFBhbm5ldG9uIGFuZCBQaWVycmUgTCdlY3V5ZXI6XG4vLyBcIk9uIHRoZSBYb3Jnc2hpZnQgUmFuZG9tIE51bWJlciBHZW5lcmF0b3JzXCJcbi8vIGh0dHA6Ly9zYWx1Yy5lbmdyLnVjb25uLmVkdS9yZWZzL2NyeXB0by9ybmcvcGFubmV0b24wNW9udGhleG9yc2hpZnQucGRmXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVwZGF0ZSB4b3IgZ2VuZXJhdG9yLlxuICAgIHZhciBYID0gbWUueCwgaSA9IG1lLmksIHQsIHYsIHc7XG4gICAgdCA9IFhbaV07IHQgXj0gKHQgPj4+IDcpOyB2ID0gdCBeICh0IDw8IDI0KTtcbiAgICB0ID0gWFsoaSArIDEpICYgN107IHYgXj0gdCBeICh0ID4+PiAxMCk7XG4gICAgdCA9IFhbKGkgKyAzKSAmIDddOyB2IF49IHQgXiAodCA+Pj4gMyk7XG4gICAgdCA9IFhbKGkgKyA0KSAmIDddOyB2IF49IHQgXiAodCA8PCA3KTtcbiAgICB0ID0gWFsoaSArIDcpICYgN107IHQgPSB0IF4gKHQgPDwgMTMpOyB2IF49IHQgXiAodCA8PCA5KTtcbiAgICBYW2ldID0gdjtcbiAgICBtZS5pID0gKGkgKyAxKSAmIDc7XG4gICAgcmV0dXJuIHY7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5pdChtZSwgc2VlZCkge1xuICAgIHZhciBqLCB3LCBYID0gW107XG5cbiAgICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgICAgLy8gU2VlZCBzdGF0ZSBhcnJheSB1c2luZyBhIDMyLWJpdCBpbnRlZ2VyLlxuICAgICAgdyA9IFhbMF0gPSBzZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZWVkIHN0YXRlIHVzaW5nIGEgc3RyaW5nLlxuICAgICAgc2VlZCA9ICcnICsgc2VlZDtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBzZWVkLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIFhbaiAmIDddID0gKFhbaiAmIDddIDw8IDE1KSBeXG4gICAgICAgICAgICAoc2VlZC5jaGFyQ29kZUF0KGopICsgWFsoaiArIDEpICYgN10gPDwgMTMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBFbmZvcmNlIGFuIGFycmF5IGxlbmd0aCBvZiA4LCBub3QgYWxsIHplcm9lcy5cbiAgICB3aGlsZSAoWC5sZW5ndGggPCA4KSBYLnB1c2goMCk7XG4gICAgZm9yIChqID0gMDsgaiA8IDggJiYgWFtqXSA9PT0gMDsgKytqKTtcbiAgICBpZiAoaiA9PSA4KSB3ID0gWFs3XSA9IC0xOyBlbHNlIHcgPSBYW2pdO1xuXG4gICAgbWUueCA9IFg7XG4gICAgbWUuaSA9IDA7XG5cbiAgICAvLyBEaXNjYXJkIGFuIGluaXRpYWwgMjU2IHZhbHVlcy5cbiAgICBmb3IgKGogPSAyNTY7IGogPiAwOyAtLWopIHtcbiAgICAgIG1lLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBpbml0KG1lLCBzZWVkKTtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueC5zbGljZSgpO1xuICB0LmkgPSBmLmk7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgaWYgKHNlZWQgPT0gbnVsbCkgc2VlZCA9ICsobmV3IERhdGUpO1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS54KSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yc2hpZnQ3ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yd293XCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIEdlb3JnZSBNYXJzYWdsaWEuICBTZWUgaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IChtZS54IF4gKG1lLnggPj4+IDIpKTtcbiAgICBtZS54ID0gbWUueTsgbWUueSA9IG1lLno7IG1lLnogPSBtZS53OyBtZS53ID0gbWUudjtcbiAgICByZXR1cm4gKG1lLmQgPSAobWUuZCArIDM2MjQzNyB8IDApKSArXG4gICAgICAgKG1lLnYgPSAobWUudiBeIChtZS52IDw8IDQpKSBeICh0IF4gKHQgPDwgMSkpKSB8IDA7XG4gIH07XG5cbiAgbWUueCA9IDA7XG4gIG1lLnkgPSAwO1xuICBtZS56ID0gMDtcbiAgbWUudyA9IDA7XG4gIG1lLnYgPSAwO1xuXG4gIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLnggPSBzZWVkO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgNjQ7IGsrKykge1xuICAgIG1lLnggXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBpZiAoayA9PSBzdHJzZWVkLmxlbmd0aCkge1xuICAgICAgbWUuZCA9IG1lLnggPDwgMTAgXiBtZS54ID4+PiA0O1xuICAgIH1cbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueDtcbiAgdC55ID0gZi55O1xuICB0LnogPSBmLno7XG4gIHQudyA9IGYudztcbiAgdC52ID0gZi52O1xuICB0LmQgPSBmLmQ7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcndvdyA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLypcbkNvcHlyaWdodCAyMDE0IERhdmlkIEJhdS5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG5JTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWVxuQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcblRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG5TT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuKi9cblxuKGZ1bmN0aW9uIChwb29sLCBtYXRoKSB7XG4vL1xuLy8gVGhlIGZvbGxvd2luZyBjb25zdGFudHMgYXJlIHJlbGF0ZWQgdG8gSUVFRSA3NTQgbGltaXRzLlxuLy9cblxuLy8gRGV0ZWN0IHRoZSBnbG9iYWwgb2JqZWN0LCBldmVuIGlmIG9wZXJhdGluZyBpbiBzdHJpY3QgbW9kZS5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0Mzg3MDU3LzI2NTI5OFxudmFyIGdsb2JhbCA9ICgwLCBldmFsKSgndGhpcycpLFxuICAgIHdpZHRoID0gMjU2LCAgICAgICAgLy8gZWFjaCBSQzQgb3V0cHV0IGlzIDAgPD0geCA8IDI1NlxuICAgIGNodW5rcyA9IDYsICAgICAgICAgLy8gYXQgbGVhc3Qgc2l4IFJDNCBvdXRwdXRzIGZvciBlYWNoIGRvdWJsZVxuICAgIGRpZ2l0cyA9IDUyLCAgICAgICAgLy8gdGhlcmUgYXJlIDUyIHNpZ25pZmljYW50IGRpZ2l0cyBpbiBhIGRvdWJsZVxuICAgIHJuZ25hbWUgPSAncmFuZG9tJywgLy8gcm5nbmFtZTogbmFtZSBmb3IgTWF0aC5yYW5kb20gYW5kIE1hdGguc2VlZHJhbmRvbVxuICAgIHN0YXJ0ZGVub20gPSBtYXRoLnBvdyh3aWR0aCwgY2h1bmtzKSxcbiAgICBzaWduaWZpY2FuY2UgPSBtYXRoLnBvdygyLCBkaWdpdHMpLFxuICAgIG92ZXJmbG93ID0gc2lnbmlmaWNhbmNlICogMixcbiAgICBtYXNrID0gd2lkdGggLSAxLFxuICAgIG5vZGVjcnlwdG87ICAgICAgICAgLy8gbm9kZS5qcyBjcnlwdG8gbW9kdWxlLCBpbml0aWFsaXplZCBhdCB0aGUgYm90dG9tLlxuXG4vL1xuLy8gc2VlZHJhbmRvbSgpXG4vLyBUaGlzIGlzIHRoZSBzZWVkcmFuZG9tIGZ1bmN0aW9uIGRlc2NyaWJlZCBhYm92ZS5cbi8vXG5mdW5jdGlvbiBzZWVkcmFuZG9tKHNlZWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBrZXkgPSBbXTtcbiAgb3B0aW9ucyA9IChvcHRpb25zID09IHRydWUpID8geyBlbnRyb3B5OiB0cnVlIH0gOiAob3B0aW9ucyB8fCB7fSk7XG5cbiAgLy8gRmxhdHRlbiB0aGUgc2VlZCBzdHJpbmcgb3IgYnVpbGQgb25lIGZyb20gbG9jYWwgZW50cm9weSBpZiBuZWVkZWQuXG4gIHZhciBzaG9ydHNlZWQgPSBtaXhrZXkoZmxhdHRlbihcbiAgICBvcHRpb25zLmVudHJvcHkgPyBbc2VlZCwgdG9zdHJpbmcocG9vbCldIDpcbiAgICAoc2VlZCA9PSBudWxsKSA/IGF1dG9zZWVkKCkgOiBzZWVkLCAzKSwga2V5KTtcblxuICAvLyBVc2UgdGhlIHNlZWQgdG8gaW5pdGlhbGl6ZSBhbiBBUkM0IGdlbmVyYXRvci5cbiAgdmFyIGFyYzQgPSBuZXcgQVJDNChrZXkpO1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHJhbmRvbSBkb3VibGUgaW4gWzAsIDEpIHRoYXQgY29udGFpbnNcbiAgLy8gcmFuZG9tbmVzcyBpbiBldmVyeSBiaXQgb2YgdGhlIG1hbnRpc3NhIG9mIHRoZSBJRUVFIDc1NCB2YWx1ZS5cbiAgdmFyIHBybmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbiA9IGFyYzQuZyhjaHVua3MpLCAgICAgICAgICAgICAvLyBTdGFydCB3aXRoIGEgbnVtZXJhdG9yIG4gPCAyIF4gNDhcbiAgICAgICAgZCA9IHN0YXJ0ZGVub20sICAgICAgICAgICAgICAgICAvLyAgIGFuZCBkZW5vbWluYXRvciBkID0gMiBeIDQ4LlxuICAgICAgICB4ID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgYW5kIG5vICdleHRyYSBsYXN0IGJ5dGUnLlxuICAgIHdoaWxlIChuIDwgc2lnbmlmaWNhbmNlKSB7ICAgICAgICAgIC8vIEZpbGwgdXAgYWxsIHNpZ25pZmljYW50IGRpZ2l0cyBieVxuICAgICAgbiA9IChuICsgeCkgKiB3aWR0aDsgICAgICAgICAgICAgIC8vICAgc2hpZnRpbmcgbnVtZXJhdG9yIGFuZFxuICAgICAgZCAqPSB3aWR0aDsgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZGVub21pbmF0b3IgYW5kIGdlbmVyYXRpbmcgYVxuICAgICAgeCA9IGFyYzQuZygxKTsgICAgICAgICAgICAgICAgICAgIC8vICAgbmV3IGxlYXN0LXNpZ25pZmljYW50LWJ5dGUuXG4gICAgfVxuICAgIHdoaWxlIChuID49IG92ZXJmbG93KSB7ICAgICAgICAgICAgIC8vIFRvIGF2b2lkIHJvdW5kaW5nIHVwLCBiZWZvcmUgYWRkaW5nXG4gICAgICBuIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBsYXN0IGJ5dGUsIHNoaWZ0IGV2ZXJ5dGhpbmdcbiAgICAgIGQgLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHJpZ2h0IHVzaW5nIGludGVnZXIgbWF0aCB1bnRpbFxuICAgICAgeCA+Pj49IDE7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgd2UgaGF2ZSBleGFjdGx5IHRoZSBkZXNpcmVkIGJpdHMuXG4gICAgfVxuICAgIHJldHVybiAobiArIHgpIC8gZDsgICAgICAgICAgICAgICAgIC8vIEZvcm0gdGhlIG51bWJlciB3aXRoaW4gWzAsIDEpLlxuICB9O1xuXG4gIHBybmcuaW50MzIgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSB8IDA7IH1cbiAgcHJuZy5xdWljayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJjNC5nKDQpIC8gMHgxMDAwMDAwMDA7IH1cbiAgcHJuZy5kb3VibGUgPSBwcm5nO1xuXG4gIC8vIE1peCB0aGUgcmFuZG9tbmVzcyBpbnRvIGFjY3VtdWxhdGVkIGVudHJvcHkuXG4gIG1peGtleSh0b3N0cmluZyhhcmM0LlMpLCBwb29sKTtcblxuICAvLyBDYWxsaW5nIGNvbnZlbnRpb246IHdoYXQgdG8gcmV0dXJuIGFzIGEgZnVuY3Rpb24gb2YgcHJuZywgc2VlZCwgaXNfbWF0aC5cbiAgcmV0dXJuIChvcHRpb25zLnBhc3MgfHwgY2FsbGJhY2sgfHxcbiAgICAgIGZ1bmN0aW9uKHBybmcsIHNlZWQsIGlzX21hdGhfY2FsbCwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgLy8gTG9hZCB0aGUgYXJjNCBzdGF0ZSBmcm9tIHRoZSBnaXZlbiBzdGF0ZSBpZiBpdCBoYXMgYW4gUyBhcnJheS5cbiAgICAgICAgICBpZiAoc3RhdGUuUykgeyBjb3B5KHN0YXRlLCBhcmM0KTsgfVxuICAgICAgICAgIC8vIE9ubHkgcHJvdmlkZSB0aGUgLnN0YXRlIG1ldGhvZCBpZiByZXF1ZXN0ZWQgdmlhIG9wdGlvbnMuc3RhdGUuXG4gICAgICAgICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weShhcmM0LCB7fSk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGNhbGxlZCBhcyBhIG1ldGhvZCBvZiBNYXRoIChNYXRoLnNlZWRyYW5kb20oKSksIG11dGF0ZVxuICAgICAgICAvLyBNYXRoLnJhbmRvbSBiZWNhdXNlIHRoYXQgaXMgaG93IHNlZWRyYW5kb20uanMgaGFzIHdvcmtlZCBzaW5jZSB2MS4wLlxuICAgICAgICBpZiAoaXNfbWF0aF9jYWxsKSB7IG1hdGhbcm5nbmFtZV0gPSBwcm5nOyByZXR1cm4gc2VlZDsgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgaXQgaXMgYSBuZXdlciBjYWxsaW5nIGNvbnZlbnRpb24sIHNvIHJldHVybiB0aGVcbiAgICAgICAgLy8gcHJuZyBkaXJlY3RseS5cbiAgICAgICAgZWxzZSByZXR1cm4gcHJuZztcbiAgICAgIH0pKFxuICBwcm5nLFxuICBzaG9ydHNlZWQsXG4gICdnbG9iYWwnIGluIG9wdGlvbnMgPyBvcHRpb25zLmdsb2JhbCA6ICh0aGlzID09IG1hdGgpLFxuICBvcHRpb25zLnN0YXRlKTtcbn1cbm1hdGhbJ3NlZWQnICsgcm5nbmFtZV0gPSBzZWVkcmFuZG9tO1xuXG4vL1xuLy8gQVJDNFxuLy9cbi8vIEFuIEFSQzQgaW1wbGVtZW50YXRpb24uICBUaGUgY29uc3RydWN0b3IgdGFrZXMgYSBrZXkgaW4gdGhlIGZvcm0gb2Zcbi8vIGFuIGFycmF5IG9mIGF0IG1vc3QgKHdpZHRoKSBpbnRlZ2VycyB0aGF0IHNob3VsZCBiZSAwIDw9IHggPCAod2lkdGgpLlxuLy9cbi8vIFRoZSBnKGNvdW50KSBtZXRob2QgcmV0dXJucyBhIHBzZXVkb3JhbmRvbSBpbnRlZ2VyIHRoYXQgY29uY2F0ZW5hdGVzXG4vLyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgZnJvbSBBUkM0LiAgSXRzIHJldHVybiB2YWx1ZSBpcyBhIG51bWJlciB4XG4vLyB0aGF0IGlzIGluIHRoZSByYW5nZSAwIDw9IHggPCAod2lkdGggXiBjb3VudCkuXG4vL1xuZnVuY3Rpb24gQVJDNChrZXkpIHtcbiAgdmFyIHQsIGtleWxlbiA9IGtleS5sZW5ndGgsXG4gICAgICBtZSA9IHRoaXMsIGkgPSAwLCBqID0gbWUuaSA9IG1lLmogPSAwLCBzID0gbWUuUyA9IFtdO1xuXG4gIC8vIFRoZSBlbXB0eSBrZXkgW10gaXMgdHJlYXRlZCBhcyBbMF0uXG4gIGlmICgha2V5bGVuKSB7IGtleSA9IFtrZXlsZW4rK107IH1cblxuICAvLyBTZXQgdXAgUyB1c2luZyB0aGUgc3RhbmRhcmQga2V5IHNjaGVkdWxpbmcgYWxnb3JpdGhtLlxuICB3aGlsZSAoaSA8IHdpZHRoKSB7XG4gICAgc1tpXSA9IGkrKztcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyBrZXlbaSAlIGtleWxlbl0gKyAodCA9IHNbaV0pKV07XG4gICAgc1tqXSA9IHQ7XG4gIH1cblxuICAvLyBUaGUgXCJnXCIgbWV0aG9kIHJldHVybnMgdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGFzIG9uZSBudW1iZXIuXG4gIChtZS5nID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICAvLyBVc2luZyBpbnN0YW5jZSBtZW1iZXJzIGluc3RlYWQgb2YgY2xvc3VyZSBzdGF0ZSBuZWFybHkgZG91YmxlcyBzcGVlZC5cbiAgICB2YXIgdCwgciA9IDAsXG4gICAgICAgIGkgPSBtZS5pLCBqID0gbWUuaiwgcyA9IG1lLlM7XG4gICAgd2hpbGUgKGNvdW50LS0pIHtcbiAgICAgIHQgPSBzW2kgPSBtYXNrICYgKGkgKyAxKV07XG4gICAgICByID0gciAqIHdpZHRoICsgc1ttYXNrICYgKChzW2ldID0gc1tqID0gbWFzayAmIChqICsgdCldKSArIChzW2pdID0gdCkpXTtcbiAgICB9XG4gICAgbWUuaSA9IGk7IG1lLmogPSBqO1xuICAgIHJldHVybiByO1xuICAgIC8vIEZvciByb2J1c3QgdW5wcmVkaWN0YWJpbGl0eSwgdGhlIGZ1bmN0aW9uIGNhbGwgYmVsb3cgYXV0b21hdGljYWxseVxuICAgIC8vIGRpc2NhcmRzIGFuIGluaXRpYWwgYmF0Y2ggb2YgdmFsdWVzLiAgVGhpcyBpcyBjYWxsZWQgUkM0LWRyb3BbMjU2XS5cbiAgICAvLyBTZWUgaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9cnNhK2ZsdWhyZXIrcmVzcG9uc2UmYnRuSVxuICB9KSh3aWR0aCk7XG59XG5cbi8vXG4vLyBjb3B5KClcbi8vIENvcGllcyBpbnRlcm5hbCBzdGF0ZSBvZiBBUkM0IHRvIG9yIGZyb20gYSBwbGFpbiBvYmplY3QuXG4vL1xuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC5qID0gZi5qO1xuICB0LlMgPSBmLlMuc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG4vL1xuLy8gZmxhdHRlbigpXG4vLyBDb252ZXJ0cyBhbiBvYmplY3QgdHJlZSB0byBuZXN0ZWQgYXJyYXlzIG9mIHN0cmluZ3MuXG4vL1xuZnVuY3Rpb24gZmxhdHRlbihvYmosIGRlcHRoKSB7XG4gIHZhciByZXN1bHQgPSBbXSwgdHlwID0gKHR5cGVvZiBvYmopLCBwcm9wO1xuICBpZiAoZGVwdGggJiYgdHlwID09ICdvYmplY3QnKSB7XG4gICAgZm9yIChwcm9wIGluIG9iaikge1xuICAgICAgdHJ5IHsgcmVzdWx0LnB1c2goZmxhdHRlbihvYmpbcHJvcF0sIGRlcHRoIC0gMSkpOyB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuICByZXR1cm4gKHJlc3VsdC5sZW5ndGggPyByZXN1bHQgOiB0eXAgPT0gJ3N0cmluZycgPyBvYmogOiBvYmogKyAnXFwwJyk7XG59XG5cbi8vXG4vLyBtaXhrZXkoKVxuLy8gTWl4ZXMgYSBzdHJpbmcgc2VlZCBpbnRvIGEga2V5IHRoYXQgaXMgYW4gYXJyYXkgb2YgaW50ZWdlcnMsIGFuZFxuLy8gcmV0dXJucyBhIHNob3J0ZW5lZCBzdHJpbmcgc2VlZCB0aGF0IGlzIGVxdWl2YWxlbnQgdG8gdGhlIHJlc3VsdCBrZXkuXG4vL1xuZnVuY3Rpb24gbWl4a2V5KHNlZWQsIGtleSkge1xuICB2YXIgc3RyaW5nc2VlZCA9IHNlZWQgKyAnJywgc21lYXIsIGogPSAwO1xuICB3aGlsZSAoaiA8IHN0cmluZ3NlZWQubGVuZ3RoKSB7XG4gICAga2V5W21hc2sgJiBqXSA9XG4gICAgICBtYXNrICYgKChzbWVhciBePSBrZXlbbWFzayAmIGpdICogMTkpICsgc3RyaW5nc2VlZC5jaGFyQ29kZUF0KGorKykpO1xuICB9XG4gIHJldHVybiB0b3N0cmluZyhrZXkpO1xufVxuXG4vL1xuLy8gYXV0b3NlZWQoKVxuLy8gUmV0dXJucyBhbiBvYmplY3QgZm9yIGF1dG9zZWVkaW5nLCB1c2luZyB3aW5kb3cuY3J5cHRvIGFuZCBOb2RlIGNyeXB0b1xuLy8gbW9kdWxlIGlmIGF2YWlsYWJsZS5cbi8vXG5mdW5jdGlvbiBhdXRvc2VlZCgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3V0O1xuICAgIGlmIChub2RlY3J5cHRvICYmIChvdXQgPSBub2RlY3J5cHRvLnJhbmRvbUJ5dGVzKSkge1xuICAgICAgLy8gVGhlIHVzZSBvZiAnb3V0JyB0byByZW1lbWJlciByYW5kb21CeXRlcyBtYWtlcyB0aWdodCBtaW5pZmllZCBjb2RlLlxuICAgICAgb3V0ID0gb3V0KHdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0ID0gbmV3IFVpbnQ4QXJyYXkod2lkdGgpO1xuICAgICAgKGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvKS5nZXRSYW5kb21WYWx1ZXMob3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRvc3RyaW5nKG91dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgYnJvd3NlciA9IGdsb2JhbC5uYXZpZ2F0b3IsXG4gICAgICAgIHBsdWdpbnMgPSBicm93c2VyICYmIGJyb3dzZXIucGx1Z2lucztcbiAgICByZXR1cm4gWytuZXcgRGF0ZSwgZ2xvYmFsLCBwbHVnaW5zLCBnbG9iYWwuc2NyZWVuLCB0b3N0cmluZyhwb29sKV07XG4gIH1cbn1cblxuLy9cbi8vIHRvc3RyaW5nKClcbi8vIENvbnZlcnRzIGFuIGFycmF5IG9mIGNoYXJjb2RlcyB0byBhIHN0cmluZ1xuLy9cbmZ1bmN0aW9uIHRvc3RyaW5nKGEpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoMCwgYSk7XG59XG5cbi8vXG4vLyBXaGVuIHNlZWRyYW5kb20uanMgaXMgbG9hZGVkLCB3ZSBpbW1lZGlhdGVseSBtaXggYSBmZXcgYml0c1xuLy8gZnJvbSB0aGUgYnVpbHQtaW4gUk5HIGludG8gdGhlIGVudHJvcHkgcG9vbC4gIEJlY2F1c2Ugd2UgZG9cbi8vIG5vdCB3YW50IHRvIGludGVyZmVyZSB3aXRoIGRldGVybWluaXN0aWMgUFJORyBzdGF0ZSBsYXRlcixcbi8vIHNlZWRyYW5kb20gd2lsbCBub3QgY2FsbCBtYXRoLnJhbmRvbSBvbiBpdHMgb3duIGFnYWluIGFmdGVyXG4vLyBpbml0aWFsaXphdGlvbi5cbi8vXG5taXhrZXkobWF0aC5yYW5kb20oKSwgcG9vbCk7XG5cbi8vXG4vLyBOb2RlanMgYW5kIEFNRCBzdXBwb3J0OiBleHBvcnQgdGhlIGltcGxlbWVudGF0aW9uIGFzIGEgbW9kdWxlIHVzaW5nXG4vLyBlaXRoZXIgY29udmVudGlvbi5cbi8vXG5pZiAoKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gc2VlZHJhbmRvbTtcbiAgLy8gV2hlbiBpbiBub2RlLmpzLCB0cnkgdXNpbmcgY3J5cHRvIHBhY2thZ2UgZm9yIGF1dG9zZWVkaW5nLlxuICB0cnkge1xuICAgIG5vZGVjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgfSBjYXRjaCAoZXgpIHt9XG59IGVsc2UgaWYgKCh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VlZHJhbmRvbTsgfSk7XG59XG5cbi8vIEVuZCBhbm9ueW1vdXMgc2NvcGUsIGFuZCBwYXNzIGluaXRpYWwgdmFsdWVzLlxufSkoXG4gIFtdLCAgICAgLy8gcG9vbDogZW50cm9weSBwb29sIHN0YXJ0cyBlbXB0eVxuICBNYXRoICAgIC8vIG1hdGg6IHBhY2thZ2UgY29udGFpbmluZyByYW5kb20sIHBvdywgYW5kIHNlZWRyYW5kb21cbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTtcclxufTtcclxuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJlbnVtIENvbG9yIHtcclxuICBCTEFDSyxcclxuICBCTFVFLFxyXG4gIEdSRUVOLFxyXG4gIENZQU4sXHJcbiAgUkVELFxyXG4gIE1BR0VOVEEsXHJcbiAgWUVMTE9XLFxyXG4gIFdISVRFLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbG9ycyhhOiBDb2xvciwgYjogQ29sb3IpIHtcclxuICByZXR1cm4gYSB8IGI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvUkdCU3RyaW5nKGNvbG9yOiBDb2xvcikge1xyXG4gIGNvbnN0IHIgPSA0ID09PSAoNCAmIGNvbG9yKSA/IDI1NSA6IDA7XHJcbiAgY29uc3QgZyA9IDIgPT09ICgyICYgY29sb3IpID8gMjU1IDogMDtcclxuICBjb25zdCBiID0gMSA9PT0gKDEgJiBjb2xvcikgPyAyNTUgOiAwO1xyXG4gIHJldHVybiBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvTmFtZShjb2xvcjogQ29sb3IpIHtcclxuICByZXR1cm4gQ29sb3JbY29sb3JdO1xyXG59XHJcbiIsImVudW0gRGlyZWN0aW9uIHtcclxuICBOT1JUSCxcclxuICBFQVNULFxyXG4gIFNPVVRILFxyXG4gIFdFU1QsXHJcbiAgTk9ORSxcclxuICBTUExJVF9FQVNUX1dFU1QsXHJcbiAgU1BMSVRfTk9SVEhfU09VVEgsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uO1xyXG5cclxuY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBbRGlyZWN0aW9uLlNPVVRILCBEaXJlY3Rpb24uV0VTVCwgRGlyZWN0aW9uLk5PUlRILCBEaXJlY3Rpb24uRUFTVF07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVEaXJlY3Rpb24oZGlyOiBEaXJlY3Rpb24pIHtcclxuICBjb25zdCBvcHBEaXIgPSBvcHBvc2l0ZURpcmVjdGlvbltkaXJdO1xyXG4gIHJldHVybiBvcHBEaXIgPT09IHVuZGVmaW5lZCA/IERpcmVjdGlvbi5OT05FIDogb3BwRGlyO1xyXG59XHJcbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9Db2xvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIEVuZGluZyB7XHJcbiAgcmVhZG9ubHkgZW5kOiBFbmQ7XHJcbiAgcmVhZG9ubHkgY29sb3I6IENvbG9yO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFbmQge1xyXG4gIEJsb2NrZWQgPSAtMixcclxuICBMb29wLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5kaW5nc0VxdWFsKGE6IEVuZGluZywgYjogRW5kaW5nKSB7XHJcbiAgcmV0dXJuIGEuZW5kID09PSBiLmVuZCAmJiBhLmNvbG9yID09PSBiLmNvbG9yO1xyXG59XHJcbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuL0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgRW5kaW5nLCB7IEVuZCB9IGZyb20gXCIuL0VuZGluZ1wiO1xyXG5pbXBvcnQgTGFzZXJTZWdtZW50IGZyb20gXCIuL0xhc2VyU2VnbWVudFwiO1xyXG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9QYXRoXCI7XHJcbmltcG9ydCBQaWVjZUlELCB7IGFwcGx5UGllY2VUb0xhc2VyIH0gZnJvbSBcIi4vUGllY2VJRFwiO1xyXG5pbXBvcnQgVGlsZSwgeyBuZXh0VGlsZSwgdGlsZVdpdGhpbkFyZWFFeGNsdXNpdmUgfSBmcm9tIFwiLi9UaWxlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRQaWVjZSB7XHJcbiAgcmVhZG9ubHkgcGllY2VJRDogUGllY2VJRDtcclxuICB0aWxlOiBUaWxlO1xyXG4gIHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBMYXNlckdyaWQge1xyXG4gIHBhdGhzOiBQYXRoW107XHJcbiAgcmVhZG9ubHkgZ3JpZDogKEdyaWRQaWVjZSB8IHVuZGVmaW5lZClbXVtdO1xyXG4gIHJlYWRvbmx5IGxlbmd0aDogbnVtYmVyO1xyXG4gIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGVmYXVsdEdyaWQoKTogTGFzZXJHcmlkIHtcclxuICBjb25zdCBncmlkID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIGdyaWRbaV0gPSBbXTtcclxuICB9XHJcbiAgY29uc3QgbmV3R3JpZCA9IHtcclxuICAgIHBhdGhzOiBbXSBhcyBQYXRoW10sXHJcbiAgICBncmlkOiBncmlkIGFzIEdyaWRQaWVjZVtdW10sXHJcbiAgICBsZW5ndGg6IDUsIHdpZHRoOiA1LFxyXG4gIH07XHJcbiAgY2FsY3VsYXRlQWxsRW5kaW5ncyhuZXdHcmlkKTtcclxuICByZXR1cm4gbmV3R3JpZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVUb0VkZ2VOdW1iZXIodGlsZTogVGlsZSkge1xyXG4gIGNvbnN0IHggPSB0aWxlLng7XHJcbiAgY29uc3QgeSA9IHRpbGUueTtcclxuICBpZiAoeSA9PT0gLTEgJiYgeCA+IC0xICYmIHggPCA1KSB7XHJcbiAgICByZXR1cm4gMSArIHg7XHJcbiAgfSBlbHNlIGlmICh4ID09PSA1ICYmIHkgPiAtMSAmJiB5IDwgNSkge1xyXG4gICAgcmV0dXJuIDYgKyB5O1xyXG4gIH0gZWxzZSBpZiAoeSA9PT0gNSAmJiB4ID4gLTEgJiYgeCA8IDUpIHtcclxuICAgIHJldHVybiAxNSAtIHg7XHJcbiAgfSBlbHNlIGlmICh4ID09PSAtMSAmJiB5ID4gLTEgJiYgeSA8IDUpIHtcclxuICAgIHJldHVybiAyMCAtIHk7XHJcbiAgfVxyXG4gIHJldHVybiAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWRnZU51bWJlclRvTGFzZXIoZWRnZTogbnVtYmVyKTogTGFzZXJTZWdtZW50IHtcclxuICBpZiAoZWRnZSA8IDYpIHtcclxuICAgIHJldHVybiB7IHRpbGU6IHsgeDogZWRnZSAtIDEsIHk6IC0xIH0sIGRpcjogRGlyZWN0aW9uLlNPVVRILCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcclxuICB9IGVsc2UgaWYgKGVkZ2UgPCAxMSkge1xyXG4gICAgcmV0dXJuIHsgdGlsZTogeyB4OiA1LCB5OiBlZGdlIC0gNiB9LCBkaXI6IERpcmVjdGlvbi5XRVNULCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcclxuICB9IGVsc2UgaWYgKGVkZ2UgPCAxNikge1xyXG4gICAgcmV0dXJuIHsgdGlsZTogeyB4OiAtZWRnZSArIDE1LCB5OiA1IH0sIGRpcjogRGlyZWN0aW9uLk5PUlRILCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcclxuICB9IGVsc2UgaWYgKGVkZ2UgPCAyMSkge1xyXG4gICAgcmV0dXJuIHsgdGlsZTogeyB4OiAtMSwgeTogLWVkZ2UgKyAyMCB9LCBkaXI6IERpcmVjdGlvbi5FQVNULCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IEVkZ2VcIilcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBpZWNlRnJvbUdyaWQobGFzZXJHcmlkOiBMYXNlckdyaWQsIHRpbGU6IFRpbGUpIHtcclxuICBpZiAobGFzZXJHcmlkLmdyaWRbdGlsZS55XSkge1xyXG4gICAgcmV0dXJuIGxhc2VyR3JpZC5ncmlkW3RpbGUueV1bdGlsZS54XTtcclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRTcGFjZShsYXNlckdyaWQ6IExhc2VyR3JpZCwgdGlsZTogVGlsZSkge1xyXG4gIHJldHVybiB0aWxlV2l0aGluQXJlYUV4Y2x1c2l2ZSh0aWxlLCB7IHg6IC0xLCB5OiAtMSB9LCB7IHg6IGxhc2VyR3JpZC53aWR0aCwgeTogbGFzZXJHcmlkLmxlbmd0aCB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBpZWNlRnJvbUdyaWQobGFzZXJHcmlkOiBMYXNlckdyaWQsIHBpZWNlOiBHcmlkUGllY2UpOiBHcmlkUGllY2Uge1xyXG4gIGxhc2VyR3JpZC5ncmlkW3BpZWNlLnRpbGUueV1bcGllY2UudGlsZS54XSA9IHVuZGVmaW5lZDtcclxuICBwaWVjZS50aWxlID0geyB4OiAtMSwgeTogLTEgfTtcclxuICBjYWxjdWxhdGVBbGxFbmRpbmdzKGxhc2VyR3JpZCk7XHJcbiAgcmV0dXJuIHBpZWNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGllY2VJbkdyaWQobGFzZXJHcmlkOiBMYXNlckdyaWQsIHBpZWNlOiBHcmlkUGllY2UsIHRpbGU6IFRpbGUpOiBHcmlkUGllY2UgfCB1bmRlZmluZWQge1xyXG4gIGlmIChpc1ZhbGlkU3BhY2UobGFzZXJHcmlkLCBwaWVjZS50aWxlKSkge1xyXG4gICAgbGFzZXJHcmlkLmdyaWRbcGllY2UudGlsZS55XVtwaWVjZS50aWxlLnhdID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBjb25zdCBjdXJyZW50UGllY2UgPSBnZXRQaWVjZUZyb21HcmlkKGxhc2VyR3JpZCwgdGlsZSk7XHJcbiAgbGV0IHJlbW92ZWRQaWVjZSA9IHVuZGVmaW5lZDtcclxuICBpZiAoY3VycmVudFBpZWNlKSB7XHJcbiAgICByZW1vdmVkUGllY2UgPSByZW1vdmVQaWVjZUZyb21HcmlkKGxhc2VyR3JpZCwgY3VycmVudFBpZWNlKTtcclxuICB9XHJcbiAgcGllY2UudGlsZSA9IHRpbGU7XHJcbiAgbGFzZXJHcmlkLmdyaWRbdGlsZS55XVt0aWxlLnhdID0gcGllY2U7XHJcbiAgY2FsY3VsYXRlQWxsRW5kaW5ncyhsYXNlckdyaWQpO1xyXG4gIHJldHVybiByZW1vdmVkUGllY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBbGxFbmRpbmdzKGxhc2VyR3JpZDogTGFzZXJHcmlkKSB7XHJcbiAgY29uc3QgZW5kaW5nczogUGF0aFtdID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICBlbmRpbmdzW2ldID0geyBzdGFydDogaSArIDEsIGVuZGluZ3M6IGNhbGN1bGF0ZUVuZGluZ0xpc3QobGFzZXJHcmlkLCBpICsgMSkgfTtcclxuICB9XHJcbiAgbGFzZXJHcmlkLnBhdGhzID0gZW5kaW5ncztcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlRW5kaW5nTGlzdChsYXNlckdyaWQ6IExhc2VyR3JpZCwgZWRnZTogbnVtYmVyKSB7XHJcbiAgY29uc3QgZW5kaW5nTGlzdDogRW5kaW5nW10gPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tPbmVFbmRpbmcoZ3JpZDogTGFzZXJHcmlkLCBsYXNlcjogTGFzZXJTZWdtZW50KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgIGxhc2VyLnRpbGUgPSBuZXh0VGlsZShsYXNlci50aWxlLCBsYXNlci5kaXIpO1xyXG4gICAgICBpZiAoIWlzVmFsaWRTcGFjZShncmlkLCBsYXNlci50aWxlKSkge1xyXG4gICAgICAgIGNvbnN0IGVuZEVkZ2UgPSB0aWxlVG9FZGdlTnVtYmVyKGxhc2VyLnRpbGUpO1xyXG4gICAgICAgIGVuZGluZ0xpc3QucHVzaCh7IGVuZDogZW5kRWRnZSwgY29sb3I6IGxhc2VyLmNvbG9yIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwaWVjZSA9IGdldFBpZWNlRnJvbUdyaWQoZ3JpZCwgbGFzZXIudGlsZSk7XHJcbiAgICAgIGlmIChwaWVjZSkge1xyXG4gICAgICAgIGFwcGx5UGllY2VUb0xhc2VyKGxhc2VyLCBwaWVjZS5waWVjZUlEKTtcclxuICAgICAgICBzd2l0Y2ggKGxhc2VyLmRpcikge1xyXG4gICAgICAgICAgY2FzZSBEaXJlY3Rpb24uU1BMSVRfTk9SVEhfU09VVEg6XHJcbiAgICAgICAgICAgIGxhc2VyLmRpciA9IERpcmVjdGlvbi5OT1JUSDtcclxuICAgICAgICAgICAgdHJhY2tPbmVFbmRpbmcoZ3JpZCwgeyB0aWxlOiBsYXNlci50aWxlLCBkaXI6IERpcmVjdGlvbi5TT1VUSCwgY29sb3I6IGxhc2VyLmNvbG9yIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLlNQTElUX0VBU1RfV0VTVDpcclxuICAgICAgICAgICAgbGFzZXIuZGlyID0gRGlyZWN0aW9uLkVBU1Q7XHJcbiAgICAgICAgICAgIHRyYWNrT25lRW5kaW5nKGdyaWQsIHsgdGlsZTogbGFzZXIudGlsZSwgZGlyOiBEaXJlY3Rpb24uV0VTVCwgY29sb3I6IGxhc2VyLmNvbG9yIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLk5PTkU6XHJcbiAgICAgICAgICAgIGVuZGluZ0xpc3QucHVzaCh7IGVuZDogRW5kLkJsb2NrZWQsIGNvbG9yOiBsYXNlci5jb2xvciB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAvLyBpZiBwaWVjZSBpcyBub3QgbnVsbFxyXG4gICAgfSAvLyBmb3JcclxuICAgIGVuZGluZ0xpc3QucHVzaCh7IGVuZDogRW5kLkxvb3AsIGNvbG9yOiBsYXNlci5jb2xvciB9KTtcclxuICB9IC8vIHRyYWNrT25lRW5kaW5nKClcclxuXHJcbiAgdHJhY2tPbmVFbmRpbmcobGFzZXJHcmlkLCBlZGdlTnVtYmVyVG9MYXNlcihlZGdlKSk7XHJcbiAgZW5kaW5nTGlzdC5zb3J0KChhLCBiKSA9PiBhLmVuZCA8IGIuZW5kID8gLTEgOiAxKTtcclxuICByZXR1cm4gZW5kaW5nTGlzdDtcclxufVxyXG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IERpcmVjdGlvbiwgeyBnZXRPcHBvc2l0ZURpcmVjdGlvbiB9IGZyb20gXCIuL0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgVGlsZSwgeyBjb3B5VGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBMYXNlclNlZ21lbnQge1xyXG4gIHRpbGU6IFRpbGU7XHJcbiAgZGlyOiBEaXJlY3Rpb247XHJcbiAgY29sb3I6IENvbG9yO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXI6IExhc2VyU2VnbWVudCk6IExhc2VyU2VnbWVudCB7XHJcbiAgcmV0dXJuIHsgdGlsZTogY29weVRpbGUobGFzZXIudGlsZSksIGRpcjogZ2V0T3Bwb3NpdGVEaXJlY3Rpb24obGFzZXIuZGlyKSwgY29sb3I6IGxhc2VyLmNvbG9yIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5TGFzZXJTZWdtZW50KGxhc2VyOiBMYXNlclNlZ21lbnQpOiBMYXNlclNlZ21lbnQge1xyXG4gIHJldHVybiB7IHRpbGU6IGNvcHlUaWxlKGxhc2VyLnRpbGUpLCBkaXI6IGxhc2VyLmRpciwgY29sb3I6IGxhc2VyLmNvbG9yIH07XHJcbn1cclxuIiwiaW1wb3J0IFBhdGgsIHsgZXF1YWxQYXRocyB9IGZyb20gXCIuL1BhdGhcIjtcclxuaW1wb3J0ICogYXMgc2VlZHJhbmRvbSBmcm9tIFwic2VlZHJhbmRvbVwiO1xyXG5pbXBvcnQgeyBHcmlkUGllY2UsIGdldFBpZWNlRnJvbUdyaWQsIHNldFBpZWNlSW5HcmlkLCBtYWtlRGVmYXVsdEdyaWQgfSBmcm9tIFwiLi9MYXNlckdyaWRcIjtcclxuaW1wb3J0IFRpbGUgZnJvbSBcIi4vVGlsZVwiO1xyXG5cclxuY29uc3QgZGVmYXVsdEdyaWQgPSBtYWtlRGVmYXVsdEdyaWQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUxldmVsKHNlZWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCksIG51bVBhdGhzID0gNSkge1xyXG4gIGNvbnN0IHJuZyA9IHNlZWRyYW5kb20oc2VlZCk7XHJcblxyXG4gIGNvbnN0IGludGVyZXN0aW5nUGF0aHM6IFBhdGhbXSA9IFtdO1xyXG4gIGNvbnN0IGJvcmluZ1BhdGhzOiBQYXRoW10gPSBbXTtcclxuXHJcbiAgY29uc3QgYXZhaWxhYmxlUGllY2VzOiBHcmlkUGllY2VbXSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgYXZhaWxhYmxlUGllY2VzW2ldID0geyBwaWVjZUlEOiBNYXRoLmZsb29yKHJuZygpICogOCksIHRpbGU6IHsgeDogLTEsIHk6IC0xIH0sIGluZGV4OiBpIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCByYW5kb21HcmlkID0gbWFrZURlZmF1bHRHcmlkKCk7XHJcblxyXG4gIGF2YWlsYWJsZVBpZWNlcy5mb3JFYWNoKChwaWVjZTogR3JpZFBpZWNlKSA9PiB7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBjb25zdCByYW5kVGlsZTogVGlsZSA9IHsgeDogTWF0aC5mbG9vcihybmcoKSAqIDUpLCB5OiBNYXRoLmZsb29yKHJuZygpICogNSkgfTtcclxuICAgICAgaWYgKCFnZXRQaWVjZUZyb21HcmlkKHJhbmRvbUdyaWQsIHJhbmRUaWxlKSkge1xyXG4gICAgICAgIHNldFBpZWNlSW5HcmlkKHJhbmRvbUdyaWQsIHBpZWNlLCByYW5kVGlsZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ3JpZFBhdGhzID0gcmFuZG9tR3JpZC5wYXRocztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkUGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghZXF1YWxQYXRocyhncmlkUGF0aHNbaV0sIGRlZmF1bHRHcmlkLnBhdGhzW2ldKSkge1xyXG4gICAgICBpbnRlcmVzdGluZ1BhdGhzLnB1c2goZ3JpZFBhdGhzW2ldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvcmluZ1BhdGhzLnB1c2goZ3JpZFBhdGhzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHNodWZmbGUgY2xlYW5zZWRFbmRpbmdzXHJcbiAgc2h1ZmZsZShpbnRlcmVzdGluZ1BhdGhzLCBybmcpO1xyXG5cclxuICBsZXQgcmFuZG9tUGF0aHM6IFBhdGhbXSA9IGludGVyZXN0aW5nUGF0aHMuc2xpY2UoMCwgbnVtUGF0aHMpO1xyXG5cclxuICBpZiAocmFuZG9tUGF0aHMubGVuZ3RoIDwgbnVtUGF0aHMpIHtcclxuICAgIHNodWZmbGUoYm9yaW5nUGF0aHMsIHJuZyk7XHJcbiAgICByYW5kb21QYXRocyA9IHJhbmRvbVBhdGhzLmNvbmNhdChib3JpbmdQYXRocy5zbGljZSgwLCBudW1QYXRocyAtIHJhbmRvbVBhdGhzLmxlbmd0aCkpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tUGF0aHMuc29ydCgoYSwgYikgPT4gYS5zdGFydCA8IGIuc3RhcnQgPyAtMSA6IDEpO1xyXG5cclxuICBmb3IgKGNvbnN0IHBpZWNlIG9mIGF2YWlsYWJsZVBpZWNlcykge1xyXG4gICAgcGllY2UudGlsZSA9IHsgeDogLTEsIHk6IC0xIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBwYXRoczogcmFuZG9tUGF0aHMsIGF2YWlsYWJsZVBpZWNlcyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlKHBhdGhzOiBQYXRoW10sIHJuZzogYW55KSB7XHJcbiAgbGV0IG0gPSBwYXRocy5sZW5ndGg7XHJcbiAgbGV0IHQ6IFBhdGg7IGxldCBpOiBudW1iZXI7XHJcbiAgd2hpbGUgKG0pIHtcclxuICAgIGkgPSBNYXRoLmZsb29yKHJuZygpICogbS0tKTtcclxuXHJcbiAgICB0ID0gcGF0aHNbbV07XHJcbiAgICBwYXRoc1ttXSA9IHBhdGhzW2ldO1xyXG4gICAgcGF0aHNbaV0gPSB0O1xyXG4gIH1cclxufSIsImVudW0gTGV2ZWxUeXBlIHtcclxuICBEYWlseSxcclxuICBTZWVkLFxyXG4gIEN1c3RvbSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGV2ZWxUeXBlO1xyXG4iLCJpbXBvcnQgRW5kaW5nLCB7ZW5kaW5nc0VxdWFsfSBmcm9tIFwiLi9FbmRpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBQYXRoIHtcclxuICBzdGFydDogbnVtYmVyO1xyXG4gIGVuZGluZ3M6IEVuZGluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxQYXRocyhhOiBQYXRoLCBiOiBQYXRoKSB7XHJcbiAgaWYgKGEuZW5kaW5ncy5sZW5ndGggIT09IGIuZW5kaW5ncy5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuZW5kaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKCFlbmRpbmdzRXF1YWwoYS5lbmRpbmdzW2ldLCBiLmVuZGluZ3NbaV0pKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IENvbG9yLCAqIGFzIGNvbG9yTWFuYWdlciBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuL0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgTGFzZXJTZWdtZW50IGZyb20gXCIuL0xhc2VyU2VnbWVudFwiO1xyXG5cclxuZW51bSBQaWVjZUlEIHtcclxuICBGT1JXQVJEX1NMQVNILFxyXG4gIEJBQ0tfU0xBU0gsXHJcbiAgQkxBQ0tfSE9MRSxcclxuICBIT1JJX1NQTElULFxyXG4gIFZFUlRfU1BMSVQsXHJcblxyXG4gIFJFRCxcclxuICBCTFVFLFxyXG4gIEdSRUVOLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBpZWNlSUQ7XHJcblxyXG5pbnRlcmZhY2UgUGllY2VSdWxlIHtcclxuICBkaXJzPzogRGlyZWN0aW9uW107XHJcbiAgY29sb3I/OiBDb2xvcjtcclxufVxyXG5cclxuY29uc3QgcGllY2VSdWxlTGlzdDogUmVhZG9ubHlBcnJheTxQaWVjZVJ1bGU+ID0gW1xyXG4gIHsgZGlyczogW0RpcmVjdGlvbi5FQVNULCBEaXJlY3Rpb24uTk9SVEgsIERpcmVjdGlvbi5XRVNULCBEaXJlY3Rpb24uU09VVEhdIH0sXHJcbiAgeyBkaXJzOiBbRGlyZWN0aW9uLldFU1QsIERpcmVjdGlvbi5TT1VUSCwgRGlyZWN0aW9uLkVBU1QsIERpcmVjdGlvbi5OT1JUSF0gfSxcclxuICB7IGRpcnM6IFtEaXJlY3Rpb24uTk9ORSwgRGlyZWN0aW9uLk5PTkUsIERpcmVjdGlvbi5OT05FLCBEaXJlY3Rpb24uTk9ORV0gfSxcclxuICB7IGRpcnM6IFtEaXJlY3Rpb24uRUFTVCwgRGlyZWN0aW9uLk5PTkUsIERpcmVjdGlvbi5FQVNULCBEaXJlY3Rpb24uU1BMSVRfTk9SVEhfU09VVEhdIH0sXHJcbiAgeyBkaXJzOiBbRGlyZWN0aW9uLk5PTkUsIERpcmVjdGlvbi5OT1JUSCwgRGlyZWN0aW9uLlNQTElUX0VBU1RfV0VTVCwgRGlyZWN0aW9uLk5PUlRIXSB9LFxyXG5cclxuICB7IGNvbG9yOiBDb2xvci5SRUQgfSxcclxuICB7IGNvbG9yOiBDb2xvci5CTFVFIH0sXHJcbiAgeyBjb2xvcjogQ29sb3IuR1JFRU4gfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBpZWNlVG9MYXNlcihsYXNlcjogTGFzZXJTZWdtZW50LCBwaWVjZUlEOiBQaWVjZUlEKSB7XHJcbiAgY29uc3QgcGllY2VSdWxlcyA9IHBpZWNlUnVsZUxpc3RbcGllY2VJRF07XHJcbiAgaWYgKHBpZWNlUnVsZXMuZGlycykge1xyXG4gICAgbGFzZXIuZGlyID0gcGllY2VSdWxlcy5kaXJzW2xhc2VyLmRpcl07XHJcbiAgfVxyXG4gIGlmIChwaWVjZVJ1bGVzLmNvbG9yKSB7XHJcbiAgICBsYXNlci5jb2xvciA9IGNvbG9yTWFuYWdlci5hZGRDb2xvcnMobGFzZXIuY29sb3IsIHBpZWNlUnVsZXMuY29sb3IpO1xyXG4gIH1cclxuICByZXR1cm4gbGFzZXI7XHJcbn1cclxuIiwiaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi9EaXJlY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBUaWxlIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aW9uVG9UaWxlKGRpcmVjdGlvbjogRGlyZWN0aW9uKTogVGlsZSB7XHJcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgIGNhc2UgRGlyZWN0aW9uLk5PUlRIOlxyXG4gICAgICByZXR1cm4geyB4OiAwLCB5OiAtMSB9O1xyXG4gICAgY2FzZSBEaXJlY3Rpb24uRUFTVDpcclxuICAgICAgcmV0dXJuIHsgeDogMSwgeTogMCB9O1xyXG4gICAgY2FzZSBEaXJlY3Rpb24uU09VVEg6XHJcbiAgICAgIHJldHVybiB7IHg6IDAsIHk6IDEgfTtcclxuICAgIGNhc2UgRGlyZWN0aW9uLldFU1Q6XHJcbiAgICAgIHJldHVybiB7IHg6IC0xLCB5OiAwIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV4dFRpbGUodGlsZTogVGlsZSwgZGlyOiBEaXJlY3Rpb24pIHtcclxuICByZXR1cm4gYWRkVGlsZXModGlsZSwgZGlyZWN0aW9uVG9UaWxlKGRpcikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVGlsZXMoLi4udGlsZXM6IFRpbGVbXSk6IFRpbGUge1xyXG4gIHJldHVybiB0aWxlcy5yZWR1Y2UoKHAsIHYsIF8pID0+IHtcclxuICAgIHJldHVybiB7eDogcC54ICsgdi54LCB5OiBwLnkgKyB2Lnl9O1xyXG4gIH0sIHt4OiAwLCB5OiAwfSApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ViVGlsZXMoYTogVGlsZSwgYjogVGlsZSk6IFRpbGUge1xyXG4gIHJldHVybiB7IHg6IGEueCAtIGIueCwgeTogYS55IC0gYi55IH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5VGlsZSh0aWxlOiBUaWxlKTogVGlsZSB7XHJcbiAgcmV0dXJuIHsgeDogdGlsZS54LCB5OiB0aWxlLnkgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVOb3ROZWdhdGl2ZSh0aWxlOiBUaWxlKSB7XHJcbiAgcmV0dXJuIHRpbGVDb21wYXJlKHRpbGUsIHsgeDogLTEsIHk6IC0xIH0sIChhLCBiKSA9PiBhID4gYik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aWxlQ29tcGFyZShhOiBUaWxlLCBiOiBUaWxlLCBjb21wYXJlOiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGJvb2xlYW4pIHtcclxuICByZXR1cm4gY29tcGFyZShhLngsIGIueCkgJiYgY29tcGFyZShhLnkgLCBiLnkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGlsZVdpdGhpbkFyZWFJbmNsdXNpdmUodGlsZTogVGlsZSwgbWluOiBUaWxlLCBtYXg6IFRpbGUpIHtcclxuICByZXR1cm4gdGlsZUNvbXBhcmUodGlsZSwgbWluLCAoYSwgYikgPT4gYSA+PSBiKSAmJiB0aWxlQ29tcGFyZSh0aWxlLCBtYXgsIChhLCBiKSA9PiBhIDw9IGIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGlsZVdpdGhpbkFyZWFFeGNsdXNpdmUodGlsZTogVGlsZSwgbWluOiBUaWxlLCBtYXg6IFRpbGUpIHtcclxuICByZXR1cm4gdGlsZUNvbXBhcmUodGlsZSwgbWluLCAoYSwgYikgPT4gYSA+IGIpICYmIHRpbGVDb21wYXJlKHRpbGUsIG1heCwgKGEsIGIpID0+IGEgPCBiKTtcclxufVxyXG4iLCJpbXBvcnQge2NvbG9yVG9OYW1lfSBmcm9tIFwiLi4vQ29sb3JcIjtcclxuaW1wb3J0IEVuZGluZywge0VuZH0gZnJvbSBcIi4uL0VuZGluZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZGluZ1RvU3RyaW5nKGVuZGluZzogRW5kaW5nKSB7XHJcbiAgY29uc3QgY29sb3JTdHJpbmcgPSBjb2xvclRvTmFtZShlbmRpbmcuY29sb3IpO1xyXG4gIHJldHVybiBlbmRpbmcuZW5kID09PSBFbmQuQmxvY2tlZCA/IGBibG9ja2VkICR7Y29sb3JTdHJpbmd9YCA6XHJcbiAgICBlbmRpbmcuZW5kID09PSBFbmQuTG9vcCA/IGBsb29wICR7Y29sb3JTdHJpbmd9YCA6XHJcbiAgICBgJHtlbmRpbmcuZW5kfSAke2NvbG9yU3RyaW5nfWA7XHJcbn1cclxuIiwiaW1wb3J0IHsgY2FsY3VsYXRlQWxsRW5kaW5ncywgR3JpZFBpZWNlIH0gZnJvbSBcIi4uL0xhc2VyR3JpZFwiO1xyXG5pbXBvcnQgTGV2ZWxUeXBlIGZyb20gXCIuLi9MZXZlbFR5cGVcIjtcclxuaW1wb3J0IFBhdGgsIHsgZXF1YWxQYXRocyB9IGZyb20gXCIuLi9QYXRoXCI7XHJcbmltcG9ydCBQaWVjZUlEIGZyb20gXCIuLi9QaWVjZUlEXCI7XHJcbmltcG9ydCBMYXNlckdyaWRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9MYXNlckdyaWRDb21wb25lbnRcIjtcclxuaW1wb3J0IFBpZWNlQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUGllY2VDb21wb25lbnRcIjtcclxuaW1wb3J0IFRvb2xiYXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub29sYmFyQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHBhdGhUb1N0cmluZyB9IGZyb20gXCIuL0Zyb250ZW5kUGF0aFwiO1xyXG5pbXBvcnQgeyBjYW52YXMsIGN0eCwgcGF0aHNQcmUsIHZpY3RvcnlQLCBzZWVkTGV2ZWxCdXR0b24sIHNlZWRJbnB1dCwgZWRnZXNJbnB1dCwgZGFpbHlMZXZlbEJ1dHRvbiB9IGZyb20gXCIuL0hUTUxFbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxldmVsIH0gZnJvbSBcIi4uL0xldmVsR2VuZXJhdG9yXCI7XHJcbmltcG9ydCBzZWVkcmFuZG9tID0gcmVxdWlyZShcInNlZWRyYW5kb21cIik7XHJcblxyXG5leHBvcnQgY29uc3QgdG9vbGJhciA9IG5ldyBUb29sYmFyQ29tcG9uZW50KFwiLi90b29sYmFyLnBuZ1wiLCB7IHg6IDAsIHk6IDcgfSwgOCwgMSwgZHJhdyk7XHJcbmV4cG9ydCBjb25zdCBsYXNlcmdyaWRDb21wb25lbnQgPSBuZXcgTGFzZXJHcmlkQ29tcG9uZW50KFwiLi9sYXNlcmdyaWQucG5nXCIsIHsgeDogMCwgeTogMCB9LCA3LCA3LCBkcmF3KTtcclxuXHJcbmV4cG9ydCBjb25zdCBwaWVjZUNvbXBvbmVudHM6IFBpZWNlQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbmxldCBjdXJyZW50TGV2ZWw6IFBhdGhbXTtcclxuZXhwb3J0IGxldCBhdmFpbGFibGVQaWVjZXM6IEdyaWRQaWVjZVtdID0gW107XHJcbmV4cG9ydCBsZXQgZWRnZUxldmVsRGF0YTogQXJyYXk8eyBlZGdlOiBudW1iZXIsIHNvbHZlZDogYm9vbGVhbiB9PjtcclxubGV0IGxldmVsVHlwZTogTGV2ZWxUeXBlID0gTGV2ZWxUeXBlLkN1c3RvbTtcclxuLy8gbGV0IGRpZmZpY3VsdHkgPSBcIm1lZGl1bVwiO1xyXG5cclxuLyoqXHJcbiAqIEluaXRzIHRoZSB0aGluZ3MgdGhhdCBhcmVuJ3QgY29uc3RhbnRzXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG9uQ2xpY2soZSk7XHJcbiAgfSk7XHJcblxyXG4gIHNlZWRMZXZlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VlZExldmVsKTtcclxuICBkYWlseUxldmVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkYWlseUxldmVsKTtcclxuXHJcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuRk9SV0FSRF9TTEFTSF0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9taXJyb3JfZm9yd2FyZHNsYXNoLnBuZ1wiLCBkcmF3KTtcclxuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5CQUNLX1NMQVNIXSA9IG5ldyBQaWVjZUNvbXBvbmVudChcIi4vcGllY2VzL21pcnJvcl9iYWNrc2xhc2gucG5nXCIsIGRyYXcpO1xyXG4gIHBpZWNlQ29tcG9uZW50c1tQaWVjZUlELkJMQUNLX0hPTEVdID0gbmV3IFBpZWNlQ29tcG9uZW50KFwiLi9waWVjZXMvbWlycm9yX2JsYWNraG9sZS5wbmdcIiwgZHJhdyk7XHJcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuSE9SSV9TUExJVF0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9taXJyb3Jfc2lkZXNwbGl0LnBuZ1wiLCBkcmF3KTtcclxuICBwaWVjZUNvbXBvbmVudHNbUGllY2VJRC5WRVJUX1NQTElUXSA9IG5ldyBQaWVjZUNvbXBvbmVudChcIi4vcGllY2VzL21pcnJvcl91cHNwbGl0LnBuZ1wiLCBkcmF3KTtcclxuXHJcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuQkxVRV0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9zd2F0Y2hfYmx1ZS5wbmdcIiwgZHJhdyk7XHJcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuUkVEXSA9IG5ldyBQaWVjZUNvbXBvbmVudChcIi4vcGllY2VzL3N3YXRjaF9yZWQucG5nXCIsIGRyYXcpO1xyXG4gIHBpZWNlQ29tcG9uZW50c1tQaWVjZUlELkdSRUVOXSA9IG5ldyBQaWVjZUNvbXBvbmVudChcIi4vcGllY2VzL3N3YXRjaF9ncmVlbi5wbmdcIiwgZHJhdyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICBjb25zdCBwaWVjZTogR3JpZFBpZWNlID0geyBwaWVjZUlEOiBpLCB0aWxlOiB7IHg6IC0xLCB5OiAtMSB9LCBpbmRleDogaSB9O1xyXG4gICAgYXZhaWxhYmxlUGllY2VzW2ldID0gcGllY2U7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVBbGxFbmRpbmdzKGxhc2VyZ3JpZENvbXBvbmVudC5sYXNlcmdyaWQpO1xyXG4gIHByaW50UGF0aHMoKTtcclxuICBsYXNlcmdyaWRDb21wb25lbnQuY2FsY3VsYXRlRHJhd1BhdGhXcmFwcGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiM5YzlhOWJcIjtcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgbGFzZXJncmlkQ29tcG9uZW50LmRyYXcoY3R4KTtcclxuICB0b29sYmFyLmRyYXcoY3R4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gIGNvbnN0IGxvYyA9IHdpbmRvd1RvQ2FudmFzKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gIGxhc2VyZ3JpZENvbXBvbmVudC5wcm9jZXNzTW91c2VDbGljayhsb2MueCwgbG9jLnksIGV2ZW50LmJ1dHRvbik7XHJcbiAgdG9vbGJhci5wcm9jZXNzTW91c2VDbGljayhsb2MueCwgbG9jLnksIGV2ZW50LmJ1dHRvbik7XHJcbiAgcHJpbnRQYXRocygpO1xyXG4gIGlmIChjdXJyZW50TGV2ZWwgJiYgY2hlY2tWaWN0b3J5KCkpIHtcclxuICAgIGlmIChsZXZlbFR5cGUgPT09IExldmVsVHlwZS5TZWVkKSB7XHJcbiAgICAgIHZpY3RvcnlQLnRleHRDb250ZW50ID0gXCJZb3UgYmVhdCB0aGUgc2VlZCBsZXZlbCFcIjtcclxuICAgIH0gZWxzZSBpZiAobGV2ZWxUeXBlID09PSBMZXZlbFR5cGUuRGFpbHkpIHtcclxuICAgICAgdmljdG9yeVAudGV4dENvbnRlbnQgPSBcIldvdyEgWW91IGJlYXQgdGhlIGRhaWx5IGxldmVsIVwiO1xyXG4gICAgfVxyXG4gICAgdmljdG9yeVAuaGlkZGVuID0gZmFsc2U7XHJcbiAgfVxyXG4gIGRyYXcoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVFZGdlTGV2ZWxEYXRhKCkge1xyXG4gIGlmIChjdXJyZW50TGV2ZWwpIHtcclxuICAgIGVkZ2VMZXZlbERhdGEgPSBbXTtcclxuICAgIGZvciAoY29uc3QgcGF0aCBvZiBjdXJyZW50TGV2ZWwpIHtcclxuICAgICAgY29uc3QgZWRnZSA9IHBhdGguc3RhcnQ7XHJcbiAgICAgIGxldCBzb2x2ZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKGVxdWFsUGF0aHMocGF0aCwgbGFzZXJncmlkQ29tcG9uZW50Lmxhc2VyZ3JpZC5wYXRoc1twYXRoLnN0YXJ0IC0gMV0pKSB7XHJcbiAgICAgICAgc29sdmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlZGdlTGV2ZWxEYXRhLnB1c2goeyBlZGdlLCBzb2x2ZWQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZpY3RvcnkoKTogYm9vbGVhbiB7XHJcbiAgZm9yIChjb25zdCBkYXRhIG9mIGVkZ2VMZXZlbERhdGEpIHtcclxuICAgIGlmICghZGF0YS5zb2x2ZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50UGF0aHMoKSB7XHJcbiAgaWYgKGN1cnJlbnRMZXZlbCkge1xyXG4gICAgcG9wdWxhdGVFZGdlTGV2ZWxEYXRhKCk7XHJcbiAgICBwcmludExldmVsUGF0aHMoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJpbnRBbGxQYXRocygpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRBbGxQYXRocygpIHtcclxuICBwYXRoc1ByZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnN0IHBhdGhzID0gbGFzZXJncmlkQ29tcG9uZW50Lmxhc2VyZ3JpZC5wYXRocztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcclxuICAgIGNvbnN0IGN1clBhdGggPSBwYXRoc1tpXTtcclxuICAgIGxldCBsaW5lID0gcGF0aFRvU3RyaW5nKGN1clBhdGgpO1xyXG4gICAgaWYgKGxhc2VyZ3JpZENvbXBvbmVudC5zZWxlY3RlZEVkZ2UgPT09IGkgKyAxKSB7XHJcbiAgICAgIGxpbmUgPSBgPjxiPiR7bGluZX08L2I+YDtcclxuICAgIH1cclxuICAgIHBhdGhzUHJlLmlubmVySFRNTCArPSBsaW5lO1xyXG4gICAgaWYgKGkgPCAxOSkge1xyXG4gICAgICBwYXRoc1ByZS5pbm5lckhUTUwgKz0gXCJcXG5cIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50TGV2ZWxQYXRocygpIHtcclxuICBwYXRoc1ByZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnN0IHBhdGhzID0gbGFzZXJncmlkQ29tcG9uZW50Lmxhc2VyZ3JpZC5wYXRocztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMZXZlbC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbGV2ZWxQYXRoID0gY3VycmVudExldmVsW2ldO1xyXG4gICAgY29uc3QgY3VyUGF0aCA9IHBhdGhzW2xldmVsUGF0aC5zdGFydCAtIDFdO1xyXG4gICAgbGV0IGxpbmUgPSBwYXRoVG9TdHJpbmcobGV2ZWxQYXRoKTtcclxuICAgIGxpbmUgPSBlcXVhbFBhdGhzKGN1clBhdGgsIGxldmVsUGF0aCkgPyBgPHNwYW4gc3R5bGU9J2NvbG9yOiBncmVlbic+JHtsaW5lfTwvc3Bhbj5gXHJcbiAgICAgIDogYDxzcGFuIHN0eWxlPSdjb2xvcjogcmVkJz4ke2xpbmV9PC9zcGFuPmA7XHJcbiAgICBpZiAobGFzZXJncmlkQ29tcG9uZW50LnNlbGVjdGVkRWRnZSA9PT0gbGV2ZWxQYXRoLnN0YXJ0KSB7XHJcbiAgICAgIGxpbmUgPSBgPjxiPiR7bGluZX08L2I+YDtcclxuICAgIH1cclxuICAgIHBhdGhzUHJlLmlubmVySFRNTCArPSBsaW5lO1xyXG5cclxuICAgIGlmIChpIDwgY3VycmVudExldmVsLmxlbmd0aCAtIDEpIHtcclxuICAgICAgcGF0aHNQcmUuaW5uZXJIVE1MICs9IFwiXFxuXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIHgsIHkgcGl4ZWwgY29vcmRpbmF0ZXMgZnJvbSB3aW5kb3cgcG9zaXRpb24gdG8gcmVsYXRpdmUgY2FudmFzIHBvc2l0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IGNsaWVudFhcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgY2xpZW50WVxyXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gYSByZWxhdGl2ZSBsb2NhdGlvbiB0byB0aGUgY2FudmFzXHJcbiAqL1xyXG5mdW5jdGlvbiB3aW5kb3dUb0NhbnZhcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gIGNvbnN0IGJib3ggPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB4OiB4IC0gYmJveC5sZWZ0ICogKGNhbnZhcy53aWR0aCAvIGJib3gud2lkdGgpLFxyXG4gICAgeTogeSAtIGJib3gudG9wICogKGNhbnZhcy5oZWlnaHQgLyBiYm94LmhlaWdodCksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmV3TGV2ZWwoc2VlZDogc3RyaW5nLCBlZGdlczogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgbGFzZXJncmlkQ29tcG9uZW50LmNsZWFyKCk7XHJcbiAgY29uc3QgbmV3TGV2ZWwgPSBnZW5lcmF0ZUxldmVsKHNlZWQsIGVkZ2VzKVxyXG4gIGN1cnJlbnRMZXZlbCA9IFtdO1xyXG4gIG5ld0xldmVsLnBhdGhzLmZvckVhY2gocCA9PiBjdXJyZW50TGV2ZWwucHVzaChwKSk7XHJcbiAgYXZhaWxhYmxlUGllY2VzID0gbmV3TGV2ZWwuYXZhaWxhYmxlUGllY2VzO1xyXG4gIHByaW50UGF0aHMoKTtcclxuICBsYXNlcmdyaWRDb21wb25lbnQuY2FsY3VsYXRlRHJhd1BhdGhXcmFwcGVyKCk7XHJcbiAgZHJhdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWVkTGV2ZWwoKSB7XHJcbiAgbGV0IHNlZWQgPSBzZWVkSW5wdXQudmFsdWU7XHJcbiAgbGV0IGVkZ2VzOiBudW1iZXIgfCB1bmRlZmluZWQgPSBwYXJzZUludChlZGdlc0lucHV0LnZhbHVlKTtcclxuXHJcbiAgaWYgKHNlZWQgPT09IFwiXCIpIHtcclxuICAgIHNlZWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNOYU4oZWRnZXMpIHx8IGVkZ2VzIDwgMSB8fCBlZGdlcyA+IDIwKSB7XHJcbiAgICBlZGdlcyA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGxldmVsVHlwZSA9IExldmVsVHlwZS5TZWVkO1xyXG4gIHZpY3RvcnlQLnRleHRDb250ZW50ID0gYEN1cnJlbnRseSBwbGF5aW5nIHNlZWQ6ICR7c2VlZH1gXHJcblxyXG4gIHNldE5ld0xldmVsKHNlZWQsIGVkZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGFpbHlMZXZlbCgpIHtcclxuICBjb25zdCBzZWVkID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcclxuICBjb25zdCBybmcgPSBzZWVkcmFuZG9tKHNlZWQpO1xyXG4gIGNvbnN0IGVkZ2VzID0gcm5nKCkgKiAxMCArIDU7XHJcblxyXG4gIGxldmVsVHlwZSA9IExldmVsVHlwZS5EYWlseTtcclxuICB2aWN0b3J5UC50ZXh0Q29udGVudCA9IGBDdXJyZW50bHkgcGxheWluZyBkYWlseSBsZXZlbDogJHtzZWVkfWBcclxuICBzZXROZXdMZXZlbChzZWVkLCBlZGdlcyk7XHJcbn1cclxuXHJcbmluaXQoKTtcclxuIiwiaW1wb3J0IFBhdGggZnJvbSBcIi4uL1BhdGhcIjtcclxuaW1wb3J0IHtlbmRpbmdUb1N0cmluZ30gZnJvbSBcIi4vRnJvbnRlbmRFbmRpbmdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRoVG9TdHJpbmcocGF0aDogUGF0aCkge1xyXG4gIHJldHVybiBzdGFydFRvU3RyaW5nKHBhdGgpICsgZW5kaW5nTGlzdFRvU3RyaW5nKHBhdGgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUb1N0cmluZyhwYXRoOiBQYXRoKSB7XHJcbiAgbGV0IHN0ciA9IGAke3BhdGguc3RhcnR9YDtcclxuICBpZiAocGF0aC5zdGFydCA8IDEwKSB7XHJcbiAgICBzdHIgKz0gXCIgIC0+IFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdHIgKz0gXCIgLT4gXCI7XHJcbiAgfVxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmRpbmdMaXN0VG9TdHJpbmcocGF0aDogUGF0aCkge1xyXG4gIGlmIChwYXRoLmVuZGluZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgbGV0IHN0ciA9IGB7JHtlbmRpbmdUb1N0cmluZyhwYXRoLmVuZGluZ3NbMF0pfSwgYDtcclxuICAgIGZvciAobGV0IGN1ckVuZGluZyA9IDE7IGN1ckVuZGluZyA8IHBhdGguZW5kaW5ncy5sZW5ndGggLSAxOyBjdXJFbmRpbmcrKykge1xyXG4gICAgICBzdHIgKz0gYCR7ZW5kaW5nVG9TdHJpbmcocGF0aC5lbmRpbmdzW2N1ckVuZGluZ10pfSwgYDtcclxuICAgIH1cclxuICAgIHN0ciArPSBgJHtlbmRpbmdUb1N0cmluZyhwYXRoLmVuZGluZ3NbcGF0aC5lbmRpbmdzLmxlbmd0aCAtIDFdKX19YDtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG4gIHJldHVybiBlbmRpbmdUb1N0cmluZyhwYXRoLmVuZGluZ3NbMF0pO1xyXG59XHJcbiIsImltcG9ydCBUaWxlIGZyb20gXCIuLi9UaWxlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVElMRV9GVUxMID0gNTA7XHJcbmV4cG9ydCBjb25zdCBUSUxFX0hBTEYgPSBUSUxFX0ZVTEwgLyAyO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVGcm9tUGl4ZWxzKHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSB7XHJcbiAgcmV0dXJuIHt4OiBNYXRoLmZsb29yKHggLyBUSUxFX0ZVTEwpLCB5OiBNYXRoLmZsb29yKHkgLyBUSUxFX0ZVTEwpfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVUb1BpeGVscyh0aWxlOiBUaWxlKSB7XHJcbiAgcmV0dXJuIHsgcHg6IHRpbGUueCAqIFRJTEVfRlVMTCwgcHk6IHRpbGUueSAqIFRJTEVfRlVMTCB9O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBpbXBvcnRQcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltcG9ydGVkLXByZVwiKSBhcyBIVE1MUHJlRWxlbWVudDtcclxuZXhwb3J0IGNvbnN0IHBhdGhzUHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXRocy1wcmVcIikgYXMgSFRNTFByZUVsZW1lbnQ7XHJcbmV4cG9ydCBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhc2VyLWdhbWUtY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5leHBvcnQgY29uc3QgdmljdG9yeVAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpY3RvcnktcFwiKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWVkTGV2ZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZWQtbGV2ZWxcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuZXhwb3J0IGNvbnN0IGRhaWx5TGV2ZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhaWx5LWxldmVsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmV4cG9ydCBjb25zdCBlZGdlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGdlc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5leHBvcnQgY29uc3Qgc2VlZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWVkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5leHBvcnQgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiIsImltcG9ydCBUaWxlLCB7c3ViVGlsZXMsIHRpbGVXaXRoaW5BcmVhRXhjbHVzaXZlfSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xyXG5pbXBvcnQgeyB0aWxlRnJvbVBpeGVscywgdGlsZVRvUGl4ZWxzIH0gZnJvbSBcIi4uL0Zyb250ZW5kVGlsZVwiO1xyXG5cclxuLyoqXHJcbiAqIEFuIGFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhIHNtYWxsZXIgc2VjdGlvbiBvZiB0aGUgY2FudmFzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDYW52YXNDb21wb25lbnQge1xyXG4gIHB1YmxpYyB0aWxlOiBUaWxlO1xyXG4gIHB1YmxpYyB3aWR0aEluVGlsZXM6IG51bWJlcjtcclxuICBwdWJsaWMgaGVpZ2h0SW5UaWxlczogbnVtYmVyO1xyXG4gIHB1YmxpYyBvZmZzZXRYOiBudW1iZXI7XHJcbiAgcHVibGljIG9mZnNldFk6IG51bWJlcjtcclxuICBwcml2YXRlIGltZzogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3JjOiBzdHJpbmcsIHRpbGU6IFRpbGUsIHdpZHRoSW5UaWxlczogbnVtYmVyLCBoZWlnaHRJblRpbGVzOiBudW1iZXIsIGRyYXc6ICgpID0+IHZvaWQsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKSB7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcub25sb2FkID0gKCkgPT4geyBkcmF3KCk7IH07XHJcbiAgICB0aGlzLmltZy5zcmMgPSBzcmM7XHJcbiAgICB0aGlzLnRpbGUgPSB0aWxlO1xyXG4gICAgdGhpcy53aWR0aEluVGlsZXMgPSB3aWR0aEluVGlsZXM7XHJcbiAgICB0aGlzLmhlaWdodEluVGlsZXMgPSBoZWlnaHRJblRpbGVzO1xyXG4gICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgY29tcG9uZW50cyBpbWFnZSBhdCB0aGUgbG9jYXRpb25cclxuICAgKi9cclxuICBwdWJsaWMgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgY29uc3QgbG9jID0gdGlsZVRvUGl4ZWxzKHRoaXMudGlsZSk7XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCBsb2MucHggKyB0aGlzLm9mZnNldFgsIGxvYy5weSArIHRoaXMub2Zmc2V0WSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaWd1cmVzIG91dCB3aGV0aGVyIGEgYnV0dG9uIHByZXNzIGhhcHBlbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IGFuZCByZXR1cm5zIGl0LiBJZiBpdCBkaWRuJ3QsIHJldHVybnMgbnVsbC5cclxuICAgKi9cclxuICBwdWJsaWMgcHJvY2Vzc01vdXNlQ2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIsIF9idXR0b246IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVsYXRpdmVUaWxlID0gc3ViVGlsZXModGlsZUZyb21QaXhlbHMoeCwgeSksIHRoaXMudGlsZSk7XHJcbiAgICBpZiAodGlsZVdpdGhpbkFyZWFFeGNsdXNpdmUocmVsYXRpdmVUaWxlLCB7eDogLTEsIHk6IC0xfSwge3g6IHRoaXMud2lkdGhJblRpbGVzLCB5OiB0aGlzLmhlaWdodEluVGlsZXN9KSkge1xyXG4gICAgICByZXR1cm4gcmVsYXRpdmVUaWxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvbG9yVG9SR0JTdHJpbmcgfSBmcm9tIFwiLi4vLi4vQ29sb3JcIjtcclxuaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi4vLi4vRGlyZWN0aW9uXCI7XHJcbmltcG9ydCBMYXNlckdyaWQsIHsgZWRnZU51bWJlclRvTGFzZXIsIGdldFBpZWNlRnJvbUdyaWQsIG1ha2VEZWZhdWx0R3JpZCwgcmVtb3ZlUGllY2VGcm9tR3JpZCwgc2V0UGllY2VJbkdyaWQsIHRpbGVUb0VkZ2VOdW1iZXIgfSBmcm9tIFwiLi4vLi4vTGFzZXJHcmlkXCI7XHJcbmltcG9ydCBMYXNlclNlZ21lbnQsIHsgY29weUxhc2VyU2VnbWVudCwgZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQgfSBmcm9tIFwiLi4vLi4vTGFzZXJTZWdtZW50XCI7XHJcbmltcG9ydCB7IGFwcGx5UGllY2VUb0xhc2VyIH0gZnJvbSBcIi4uLy4uL1BpZWNlSURcIjtcclxuaW1wb3J0IFRpbGUsIHsgYWRkVGlsZXMsIGRpcmVjdGlvblRvVGlsZSwgbmV4dFRpbGUsIHN1YlRpbGVzLCB0aWxlV2l0aGluQXJlYUluY2x1c2l2ZSB9IGZyb20gXCIuLi8uLi9UaWxlXCI7XHJcbmltcG9ydCB7IGF2YWlsYWJsZVBpZWNlcywgZWRnZUxldmVsRGF0YSwgcGllY2VDb21wb25lbnRzLCBwcmludFBhdGhzLCB0b29sYmFyIH0gZnJvbSBcIi4uL0Zyb250ZW5kTGFzZXJnYW1lXCI7XHJcbmltcG9ydCB7IHRpbGVUb1BpeGVscywgVElMRV9GVUxMLCBUSUxFX0hBTEYgfSBmcm9tIFwiLi4vRnJvbnRlbmRUaWxlXCI7XHJcbmltcG9ydCBDYW52YXNDb21wb25lbnQgZnJvbSBcIi4vQ2FudmFzQ29tcG9uZW50XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhc2VyR3JpZENvbXBvbmVudCBleHRlbmRzIENhbnZhc0NvbXBvbmVudCB7XHJcbiAgcHVibGljIGxhc2VyZ3JpZDogTGFzZXJHcmlkO1xyXG4gIHB1YmxpYyBzZWxlY3RlZEVkZ2U6IG51bWJlcjtcclxuICBwdWJsaWMgZHJhd1BhdGg6IExhc2VyU2VnbWVudFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHNyYzogc3RyaW5nLCB0aWxlOiBUaWxlLCB3aWR0aEluVGlsZXM6IG51bWJlciwgaGVpZ2h0SW5UaWxlczogbnVtYmVyLCBkcmF3OiAoKSA9PiB2b2lkLFxyXG4gICAgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKSB7XHJcbiAgICBzdXBlcihzcmMsIHRpbGUsIHdpZHRoSW5UaWxlcywgaGVpZ2h0SW5UaWxlcywgZHJhdywgb2Zmc2V0WCwgb2Zmc2V0WSk7XHJcblxyXG4gICAgdGhpcy5sYXNlcmdyaWQgPSBtYWtlRGVmYXVsdEdyaWQoKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRWRnZSA9IDE7XHJcbiAgICB0aGlzLmRyYXdQYXRoID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xyXG5cclxuICAgIC8vIERyYXcgcGllY2VzIG9uIGdyaWRcclxuICAgIGZvciAoY29uc3QgcGllY2Ugb2YgYXZhaWxhYmxlUGllY2VzKSB7XHJcbiAgICAgIGlmICgodGlsZVdpdGhpbkFyZWFJbmNsdXNpdmUocGllY2UudGlsZSwgeyB4OiAwLCB5OiAwIH0sIHsgeDogNCwgeTogNCB9KSkpIHtcclxuICAgICAgICBwaWVjZUNvbXBvbmVudHNbcGllY2UucGllY2VJRF0uZHJhd0F0KGFkZFRpbGVzKHRoaXMudGlsZSwgcGllY2UudGlsZSwgeyB4OiAxLCB5OiAxIH0pLCBjdHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyBsYXNlciBwYXRoIG9uIGdyaWRcclxuICAgIGZvciAoY29uc3QgbGFzZXIgb2YgdGhpcy5kcmF3UGF0aCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yVG9SR0JTdHJpbmcobGFzZXIuY29sb3IpO1xyXG4gICAgICBjb25zdCBsb2MgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXMobGFzZXIudGlsZSwgeyB4OiAxLCB5OiAxIH0pKTtcclxuICAgICAgbG9jLnB4ICs9IFRJTEVfSEFMRjtcclxuICAgICAgbG9jLnB5ICs9IFRJTEVfSEFMRjtcclxuICAgICAgY3R4Lm1vdmVUbyhsb2MucHgsIGxvYy5weSk7XHJcbiAgICAgIGNvbnN0IHRpbGVtYXAgPSBkaXJlY3Rpb25Ub1RpbGUobGFzZXIuZGlyKTtcclxuICAgICAgY3R4LmxpbmVUbyhsb2MucHggKyB0aWxlbWFwLnggKiBUSUxFX0hBTEYsIGxvYy5weSArIHRpbGVtYXAueSAqIFRJTEVfSEFMRik7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHNlbGVjdGVkIGVkZ2UgbWFya2VyIG9uIGdyaWRcclxuICAgIGxldCBzZWxlY3RlZEVkZ2VQaXhlbHMgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXMoZWRnZU51bWJlclRvTGFzZXIodGhpcy5zZWxlY3RlZEVkZ2UpLnRpbGUsIHsgeDogMSwgeTogMSB9KSk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNGRkZGRkZcIjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkRWRnZSA8IDYpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0hBTEYgLSA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0ZVTEwgLSA1KTtcclxuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0hBTEYsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfRlVMTCk7XHJcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGICsgNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9GVUxMIC0gNSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFZGdlIDwgMTEpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYgLSA1KTtcclxuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHgsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfSEFMRik7XHJcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9IQUxGICsgNSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFZGdlIDwgMTYpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0hBTEYgLSA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyA1KTtcclxuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0hBTEYsIHNlbGVjdGVkRWRnZVBpeGVscy5weSk7XHJcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGICsgNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgNSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFZGdlIDwgMjEpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0ZVTEwgLSA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYgLSA1KTtcclxuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0ZVTEwsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfSEFMRik7XHJcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9GVUxMIC0gNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9IQUxGICsgNSk7XHJcbiAgICB9XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgLy8gRHJhdyBsZXZlbCBlZGdlIGhpbnRzXHJcbiAgICBpZiAoZWRnZUxldmVsRGF0YSkge1xyXG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjE7XHJcbiAgICAgIGZvciAoY29uc3QgZWRnZURhdGEgb2YgZWRnZUxldmVsRGF0YSkge1xyXG4gICAgICAgIHNlbGVjdGVkRWRnZVBpeGVscyA9IHRpbGVUb1BpeGVscyhhZGRUaWxlcyhlZGdlTnVtYmVyVG9MYXNlcihlZGdlRGF0YS5lZGdlKS50aWxlLCB7IHg6IDEsIHk6IDEgfSkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBlZGdlRGF0YS5zb2x2ZWQgPyBcIiMwMEZGMDBcIiA6IFwiI0ZGMDAwMFwiO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdChzZWxlY3RlZEVkZ2VQaXhlbHMucHgsIHNlbGVjdGVkRWRnZVBpeGVscy5weSwgVElMRV9GVUxMLCBUSUxFX0ZVTEwpO1xyXG4gICAgICB9XHJcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDEuMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IGVkZ2UgbnVtYmVyc1xyXG4gICAgZm9yIChsZXQgZSA9IDE7IGUgPD0gMjA7IGUrKykge1xyXG4gICAgICBzZWxlY3RlZEVkZ2VQaXhlbHMgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXMoZWRnZU51bWJlclRvTGFzZXIoZSkudGlsZSwgeyB4OiAxLCB5OiAxIH0pKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xyXG4gICAgICBjdHguZm9udCA9IFwiMjRweCBzYW5zLXNlcmlmXCI7XHJcbiAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoZS50b1N0cmluZygpLCBzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0hBTEYgLSBjdHgubWVhc3VyZVRleHQoZS50b1N0cmluZygpKS53aWR0aCAvIDIsXHJcbiAgICAgICAgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgVElMRV9IQUxGKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpIHtcclxuICAgIHRoaXMubGFzZXJncmlkID0gbWFrZURlZmF1bHRHcmlkKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkRWRnZSA9IDE7XHJcbiAgICB0aGlzLmRyYXdQYXRoID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJvY2Vzc01vdXNlQ2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIsIGJ1dHRvbjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZWxhdGl2ZVRpbGUgPSBzdXBlci5wcm9jZXNzTW91c2VDbGljayh4LCB5LCBidXR0b24pO1xyXG4gICAgY29uc29sZS5sb2coYnV0dG9uKTtcclxuICAgIGlmIChyZWxhdGl2ZVRpbGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpbGVXaXRoaW5BcmVhSW5jbHVzaXZlKHJlbGF0aXZlVGlsZSwgeyB4OiAxLCB5OiAxIH0sIHsgeDogNSwgeTogNSB9KSkge1xyXG4gICAgICAvLyB0aWxlIGluIGdyaWRcclxuICAgICAgY29uc3QgbG9jID0gc3ViVGlsZXMocmVsYXRpdmVUaWxlLCB7IHg6IDEsIHk6IDEgfSk7XHJcbiAgICAgIGNvbnN0IHBpZWNlID0gZ2V0UGllY2VGcm9tR3JpZCh0aGlzLmxhc2VyZ3JpZCwgbG9jKTtcclxuICAgICAgaWYgKHBpZWNlKSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZFBpZWNlID0gcmVtb3ZlUGllY2VGcm9tR3JpZCh0aGlzLmxhc2VyZ3JpZCwgcGllY2UpO1xyXG4gICAgICAgIGlmIChidXR0b24gPT09IDApIHsgLy8gbGVmdCBtb3VzZSBidXR0b25cclxuICAgICAgICAgIHRvb2xiYXIuc2VsZWN0ZWRQaWVjZSA9IHJlbW92ZWRQaWVjZS5pbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0UGllY2VJbkdyaWQodGhpcy5sYXNlcmdyaWQsIGF2YWlsYWJsZVBpZWNlc1t0b29sYmFyLnNlbGVjdGVkUGllY2VdLCBsb2MpO1xyXG4gICAgICB9XHJcbiAgICAgIHByaW50UGF0aHMoKTtcclxuXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlRHJhd1BhdGhXcmFwcGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3RWRnZSA9IHRpbGVUb0VkZ2VOdW1iZXIoYWRkVGlsZXMocmVsYXRpdmVUaWxlLCB7IHg6IC0xLCB5OiAtMSB9KSk7XHJcbiAgICBpZiAobmV3RWRnZSAhPT0gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRWRnZSA9IG5ld0VkZ2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhbGN1bGF0ZURyYXdQYXRoV3JhcHBlcigpO1xyXG5cclxuICAgIHJldHVybiByZWxhdGl2ZVRpbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsY3VsYXRlRHJhd1BhdGhXcmFwcGVyKCkge1xyXG4gICAgdGhpcy5kcmF3UGF0aCA9IFtdO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVEcmF3UGF0aChlZGdlTnVtYmVyVG9MYXNlcih0aGlzLnNlbGVjdGVkRWRnZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVEcmF3UGF0aChsYXNlcjogTGFzZXJTZWdtZW50KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgIGxhc2VyLnRpbGUgPSBuZXh0VGlsZShsYXNlci50aWxlLCBsYXNlci5kaXIpO1xyXG4gICAgICBpZiAoIXRpbGVXaXRoaW5BcmVhSW5jbHVzaXZlKGxhc2VyLnRpbGUsIHsgeDogMCwgeTogMCB9LCB7IHg6IDQsIHk6IDQgfSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcGllY2UgPSBnZXRQaWVjZUZyb21HcmlkKHRoaXMubGFzZXJncmlkLCBsYXNlci50aWxlKTtcclxuICAgICAgdGhpcy5kcmF3UGF0aC5wdXNoKGdldE9wcG9zaXRlTGFzZXJTZWdtZW50KGxhc2VyKSk7XHJcbiAgICAgIGlmIChwaWVjZSkge1xyXG4gICAgICAgIGFwcGx5UGllY2VUb0xhc2VyKGxhc2VyLCBwaWVjZS5waWVjZUlEKTtcclxuICAgICAgICBzd2l0Y2ggKGxhc2VyLmRpcikge1xyXG4gICAgICAgICAgY2FzZSBEaXJlY3Rpb24uU1BMSVRfTk9SVEhfU09VVEg6XHJcbiAgICAgICAgICAgIGxhc2VyLmRpciA9IERpcmVjdGlvbi5OT1JUSDtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aC5wdXNoKGdldE9wcG9zaXRlTGFzZXJTZWdtZW50KGxhc2VyKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRHJhd1BhdGgoZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIERpcmVjdGlvbi5TUExJVF9FQVNUX1dFU1Q6XHJcbiAgICAgICAgICAgIGxhc2VyLmRpciA9IERpcmVjdGlvbi5FQVNUO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQYXRoLnB1c2goZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQobGFzZXIpKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVEcmF3UGF0aChnZXRPcHBvc2l0ZUxhc2VyU2VnbWVudChsYXNlcikpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLk5PTkU6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gLy8gaWYgcGllY2UgaXMgbm90IG51bGxcclxuICAgICAgdGhpcy5kcmF3UGF0aC5wdXNoKGNvcHlMYXNlclNlZ21lbnQobGFzZXIpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZFBpZWNlIH0gZnJvbSBcIi4uLy4uL0xhc2VyR3JpZFwiO1xyXG5pbXBvcnQgUGllY2VJRCBmcm9tIFwiLi4vLi4vUGllY2VJRFwiO1xyXG5pbXBvcnQgVGlsZSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xyXG5pbXBvcnQgeyB0aWxlVG9QaXhlbHMgfSBmcm9tIFwiLi4vRnJvbnRlbmRUaWxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZUNvbXBvbmVudCB7XHJcbiAgcHVibGljIGlzUGxhY2VkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzcmM6IHN0cmluZywgZHJhdzogKCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5pc1BsYWNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLm9ubG9hZCA9ICgpID0+IHsgZHJhdygpOyB9O1xyXG4gICAgdGhpcy5pbWcuc3JjID0gc3JjO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYXdBdCh0aWxlOiBUaWxlLCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgY29uc3QgcG9zID0gdGlsZVRvUGl4ZWxzKHRpbGUpO1xyXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgcG9zLnB4LCBwb3MucHkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgVGlsZSwgeyBhZGRUaWxlcywgdGlsZU5vdE5lZ2F0aXZlIH0gZnJvbSBcIi4uLy4uL1RpbGVcIjtcclxuaW1wb3J0IHsgYXZhaWxhYmxlUGllY2VzLCBwaWVjZUNvbXBvbmVudHMgfSBmcm9tIFwiLi4vRnJvbnRlbmRMYXNlcmdhbWVcIjtcclxuaW1wb3J0IHsgVElMRV9GVUxMLCB0aWxlVG9QaXhlbHMgfSBmcm9tIFwiLi4vRnJvbnRlbmRUaWxlXCI7XHJcbmltcG9ydCBDYW52YXNDb21wb25lbnQgZnJvbSBcIi4vQ2FudmFzQ29tcG9uZW50XCI7XHJcblxyXG4vKipcclxuICogVGhlIHRvb2xiYXIgdG8gc2VsZWN0IHRoZSBwaWVjZXMgdG8gcHV0IGluIHRoZSBncmlkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGV4dGVuZHMgQ2FudmFzQ29tcG9uZW50IHtcclxuICBwdWJsaWMgc2VsZWN0ZWRQaWVjZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmNcclxuICAgKiBAcGFyYW0ge1RpbGV9IHRpbGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhJblRpbGVzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodEluVGlsZXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldFggPSAwXSBwaXhlbCBvZmZzZXQgZm9yIHRoZSBpbWFnZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0WSA9IDBdIHBpeGVsIG9mZnNldCBmb3IgdGhlIGltYWdlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzcmM6IHN0cmluZywgdGlsZTogVGlsZSwgd2lkdGhJblRpbGVzOiBudW1iZXIsIGhlaWdodEluVGlsZXM6IG51bWJlcixcclxuICAgIGRyYXc6ICgpID0+IHZvaWQsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCkge1xyXG4gICAgc3VwZXIoc3JjLCB0aWxlLCB3aWR0aEluVGlsZXMsIGhlaWdodEluVGlsZXMsIGRyYXcsIG9mZnNldFgsIG9mZnNldFkpO1xyXG4gICAgdGhpcy5zZWxlY3RlZFBpZWNlID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGRyYXdzIHRoZSBpbWFnZSwgdGhlIHBpZWNlcyBhbmQgdGhlIGhpZ2hsaWdodFxyXG4gICAqL1xyXG4gIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICBzdXBlci5kcmF3KGN0eCk7XHJcblxyXG4gICAgLy8gZHJhdyBwaWVjZXMgaW4gZWFjaCBib3hcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXZhaWxhYmxlUGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHBpZWNlQ29tcG9uZW50c1thdmFpbGFibGVQaWVjZXNbaV0ucGllY2VJRF0uZHJhd0F0KGFkZFRpbGVzKHRoaXMudGlsZSwge3g6IGksIHk6IDB9KSwgY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IHRoZSBncmVlbiBhbmQgcmVkIGhpZ2hsaWdodHNcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjI7XHJcbiAgICBsZXQgbG9jID0gdGlsZVRvUGl4ZWxzKGFkZFRpbGVzKHRoaXMudGlsZSwge3g6IHRoaXMuc2VsZWN0ZWRQaWVjZSwgeTogMH0pKTtcclxuICAgIGN0eC5maWxsUmVjdChsb2MucHgsIGxvYy5weSwgVElMRV9GVUxMLCBUSUxFX0ZVTEwpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmFpbGFibGVQaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcGllY2UgPSBhdmFpbGFibGVQaWVjZXNbaV07XHJcbiAgICAgIGlmIChpICE9PSB0aGlzLnNlbGVjdGVkUGllY2UgJiYgdGlsZU5vdE5lZ2F0aXZlKHBpZWNlLnRpbGUpKSB7XHJcbiAgICAgICAgbG9jID0gdGlsZVRvUGl4ZWxzKGFkZFRpbGVzKHRoaXMudGlsZSwge3g6IGksIHk6IDB9KSk7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KGxvYy5weCwgbG9jLnB5LCBUSUxFX0ZVTEwsIFRJTEVfRlVMTCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDEuMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdHMgYSBwaWVjZSBpZiBjbGlja2VkIG9uLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IGEgcGl4ZWwgeCB2YWx1ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IGEgcGl4ZWwgeSB2YWx1ZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcm9jZXNzTW91c2VDbGljayh4OiBudW1iZXIsIHk6IG51bWJlciwgYnV0dG9uOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlbGF0aXZlVGlsZSA9IHN1cGVyLnByb2Nlc3NNb3VzZUNsaWNrKHgsIHksIGJ1dHRvbik7XHJcbiAgICBpZiAocmVsYXRpdmVUaWxlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQaWVjZSA9IHJlbGF0aXZlVGlsZS54O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbGF0aXZlVGlsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoZXMgdGhlIHNlbGVjdGVkIHBpZWNlIG9iamVjdC5cclxuICAgKiBAcmV0dXJucyB7UGllY2V9XHJcbiAgICovXHJcbiAgcHVibGljIGdldFNlbGVjdGVkUGllY2VDb21wb25lbnQoKSB7XHJcbiAgICByZXR1cm4gcGllY2VDb21wb25lbnRzW3RoaXMuc2VsZWN0ZWRQaWVjZV07XHJcbiAgfVxyXG59XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=