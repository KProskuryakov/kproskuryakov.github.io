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
   true && module,    // present in node.js
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
   true && module,    // present in node.js
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
   true && module,    // present in node.js
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
   true && module,    // present in node.js
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
   true && module,    // present in node.js
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
   true && module,    // present in node.js
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
if ( true && module.exports) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL2FsZWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3R5Y2hlaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yMTI4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3I0MDk2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3JzaGlmdDcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcndvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9zZWVkcmFuZG9tLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9EaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9FbmRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9MYXNlckdyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9MYXNlclNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9MZXZlbEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL0xldmVsVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL1BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9QaWVjZUlELnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvVGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL0Zyb250ZW5kRW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvRnJvbnRlbmRMYXNlcmdhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9Gcm9udGVuZFBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9Gcm9udGVuZFRpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9IVE1MRWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9mcm9udGVuZC9jb21wb25lbnRzL0NhbnZhc0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL2NvbXBvbmVudHMvTGFzZXJHcmlkQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvZnJvbnRlbmQvY29tcG9uZW50cy9QaWVjZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL2NvbXBvbmVudHMvVG9vbGJhckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixvQkFBb0I7QUFDcEIsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFPLENBQUMseURBQVk7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyw2REFBYzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDZEQUFjOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxtRUFBaUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCtEQUFlOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDZEQUFjOztBQUVuQztBQUNBO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLDZEQUFjOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0NBQXNDO0FBQ2pFO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDLFVBQVUsOEZBQU0sSUFBSSxnR0FBVTtBQUMvQixFQUFFLG1DQUFPLFlBQVksYUFBYSxFQUFFO0FBQUEsb0dBQUM7QUFDckMsQ0FBQztBQUNEO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsRUFBRSxLQUEyQjtBQUM3QixFQUFFLDhGQUF1QztBQUN6Qzs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQXdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVLDhGQUFNLElBQUksZ0dBQVU7QUFDL0IsRUFBRSxtQ0FBTyxZQUFZLGFBQWEsRUFBRTtBQUFBLG9HQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSw4RkFBdUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQXdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVLDhGQUFNLElBQUksZ0dBQVU7QUFDL0IsRUFBRSxtQ0FBTyxZQUFZLGFBQWEsRUFBRTtBQUFBLG9HQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSw4RkFBdUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qiw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSw4RkFBTSxJQUFJLGdHQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxvR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsOEZBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7O0FDakpBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDLDhCQUE4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQXdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVLDhGQUFNLElBQUksZ0dBQVU7QUFDL0IsRUFBRSxtQ0FBTyxZQUFZLGFBQWEsRUFBRTtBQUFBLG9HQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSw4RkFBdUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYSxhQUFhO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQXdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVLDhGQUFNLElBQUksZ0dBQVU7QUFDL0IsRUFBRSxtQ0FBTyxZQUFZLGFBQWEsRUFBRTtBQUFBLG9HQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSw4RkFBdUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQixpQkFBaUI7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCw4QkFBOEI7QUFDOUIsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEI7QUFDQSwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2Y7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUEsMkJBQTJCLHNCQUFzQjtBQUNqRCwyQkFBMkIsZ0NBQWdDO0FBQzNEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQSxtQ0FBbUMscUJBQXFCLEVBQUU7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0IsYUFBYTs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrQkFBa0I7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNENBQTRDLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGVBQVE7QUFDakMsR0FBRztBQUNILENBQUMsVUFBVSxJQUEyQztBQUN0RCxFQUFFLG1DQUFPLFlBQVksbUJBQW1CLEVBQUU7QUFBQSxvR0FBQztBQUMzQzs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pQQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQSxJQUFLLEtBU0o7QUFURCxXQUFLLEtBQUs7SUFDUixtQ0FBSztJQUNMLGlDQUFJO0lBQ0osbUNBQUs7SUFDTCxpQ0FBSTtJQUNKLCtCQUFHO0lBQ0gsdUNBQU87SUFDUCxxQ0FBTTtJQUNOLG1DQUFLO0FBQ1AsQ0FBQyxFQVRJLEtBQUssS0FBTCxLQUFLLFFBU1Q7QUFDRCxrQkFBZSxLQUFLLENBQUM7QUFFckIsU0FBZ0IsU0FBUyxDQUFDLENBQVEsRUFBRSxDQUFRO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUM7QUFGRCw4QkFFQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLEtBQVk7SUFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDL0IsQ0FBQztBQUxELDRDQUtDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLEtBQVk7SUFDdEMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUZELGtDQUVDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkQsSUFBSyxTQVFKO0FBUkQsV0FBSyxTQUFTO0lBQ1osMkNBQUs7SUFDTCx5Q0FBSTtJQUNKLDJDQUFLO0lBQ0wseUNBQUk7SUFDSix5Q0FBSTtJQUNKLCtEQUFlO0lBQ2YsbUVBQWlCO0FBQ25CLENBQUMsRUFSSSxTQUFTLEtBQVQsU0FBUyxRQVFiO0FBQ0Qsa0JBQWUsU0FBUyxDQUFDO0FBRXpCLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0YsU0FBZ0Isb0JBQW9CLENBQUMsR0FBYztJQUNqRCxNQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxPQUFPLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN4RCxDQUFDO0FBSEQsb0RBR0M7Ozs7Ozs7Ozs7Ozs7OztBQ1RELElBQVksR0FHWDtBQUhELFdBQVksR0FBRztJQUNiLG9DQUFZO0lBQ1osOEJBQUk7QUFDTixDQUFDLEVBSFcsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBR2Q7QUFFRCxTQUFnQixZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDL0MsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2hELENBQUM7QUFGRCxvQ0FFQzs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsK0VBQTRCO0FBQzVCLDJGQUFvQztBQUNwQyxrRkFBdUM7QUFHdkMscUZBQXVEO0FBQ3ZELDRFQUFpRTtBQWVqRSxTQUFnQixlQUFlO0lBQzdCLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDZDtJQUNELE1BQU0sT0FBTyxHQUFHO1FBQ2QsS0FBSyxFQUFFLEVBQVk7UUFDbkIsSUFBSSxFQUFFLElBQXFCO1FBQzNCLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7S0FDcEIsQ0FBQztJQUNGLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFaRCwwQ0FZQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVU7SUFDekMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNkO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNkO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNmO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFiRCw0Q0FhQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLElBQVk7SUFDNUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ1osT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsZUFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ25GO1NBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1FBQ3BCLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDakY7U0FBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7UUFDcEIsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsZUFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3BGO1NBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1FBQ3BCLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3BGO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztBQUNuQyxDQUFDO0FBWEQsOENBV0M7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxTQUFvQixFQUFFLElBQVU7SUFDL0QsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFMRCw0Q0FLQztBQUVELFNBQWdCLFlBQVksQ0FBQyxTQUFvQixFQUFFLElBQVU7SUFDM0QsT0FBTyw4QkFBdUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDdEcsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsU0FBb0IsRUFBRSxLQUFnQjtJQUN4RSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDdkQsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFMRCxrREFLQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxTQUFvQixFQUFFLEtBQWdCLEVBQUUsSUFBVTtJQUMvRSxJQUFJLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztLQUN4RDtJQUNELE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDN0IsSUFBSSxZQUFZLEVBQUU7UUFDaEIsWUFBWSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUM3RDtJQUNELEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDdkMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQWJELHdDQWFDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsU0FBb0I7SUFDdEQsTUFBTSxPQUFPLEdBQVcsRUFBRSxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUMvRTtJQUNELFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQzVCLENBQUM7QUFORCxrREFNQztBQUVELFNBQVMsbUJBQW1CLENBQUMsU0FBb0IsRUFBRSxJQUFZO0lBQzdELE1BQU0sVUFBVSxHQUFhLEVBQUUsQ0FBQztJQUVoQyxTQUFTLGNBQWMsQ0FBQyxJQUFlLEVBQUUsS0FBbUI7UUFDMUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixLQUFLLENBQUMsSUFBSSxHQUFHLGVBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLE1BQU0sT0FBTyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0MsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPO2FBQ1I7WUFDRCxNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELElBQUksS0FBSyxFQUFFO2dCQUNULDJCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRTtvQkFDakIsS0FBSyxtQkFBUyxDQUFDLGlCQUFpQjt3QkFDOUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQzt3QkFDNUIsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQ3JGLE1BQU07b0JBQ1IsS0FBSyxtQkFBUyxDQUFDLGVBQWU7d0JBQzVCLEtBQUssQ0FBQyxHQUFHLEdBQUcsbUJBQVMsQ0FBQyxJQUFJLENBQUM7d0JBQzNCLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUNwRixNQUFNO29CQUNSLEtBQUssbUJBQVMsQ0FBQyxJQUFJO3dCQUNqQixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFlBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUMxRCxPQUFPO2lCQUNWO2FBQ0YsQ0FBQyx1QkFBdUI7U0FDMUIsQ0FBQyxNQUFNO1FBQ1IsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxZQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsbUJBQW1CO0lBRXJCLGNBQWMsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUlELDJGQUE4RDtBQUM5RCw0RUFBd0M7QUFReEMsU0FBZ0IsdUJBQXVCLENBQUMsS0FBbUI7SUFDekQsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxnQ0FBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsRyxDQUFDO0FBRkQsMERBRUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxLQUFtQjtJQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM1RSxDQUFDO0FBRkQsNENBRUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRCw0RUFBMEM7QUFDMUMsK0ZBQXlDO0FBQ3pDLDJGQUEyRjtBQUczRixNQUFNLFdBQVcsR0FBRywyQkFBZSxFQUFFLENBQUM7QUFFdEMsU0FBZ0IsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxHQUFHLENBQUM7SUFDdEUsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdCLE1BQU0sZ0JBQWdCLEdBQVcsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUUvQixNQUFNLGVBQWUsR0FBZ0IsRUFBRSxDQUFDO0lBRXhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztLQUMzRjtJQUVELE1BQU0sVUFBVSxHQUFHLDJCQUFlLEVBQUUsQ0FBQztJQUVyQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1FBQzNDLE9BQU8sSUFBSSxFQUFFO1lBQ1gsTUFBTSxRQUFRLEdBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzlFLElBQUksQ0FBQyw0QkFBZ0IsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQzNDLDBCQUFjLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUMsTUFBTTthQUNQO1NBQ0Y7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBSSxDQUFDLGlCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNMLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7S0FDRjtJQUVELDBCQUEwQjtJQUMxQixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFL0IsSUFBSSxXQUFXLEdBQVcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUU5RCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxFQUFFO1FBQ2pDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3ZGO0lBRUQsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZELEtBQUssTUFBTSxLQUFLLElBQUksZUFBZSxFQUFFO1FBQ25DLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDL0I7SUFFRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsQ0FBQztBQUNqRCxDQUFDO0FBbkRELHNDQW1EQztBQUVELFNBQVMsT0FBTyxDQUFDLEtBQWEsRUFBRSxHQUFRO0lBQ3RDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDckIsSUFBSSxDQUFPLENBQUM7SUFBQyxJQUFJLENBQVMsQ0FBQztJQUMzQixPQUFPLENBQUMsRUFBRTtRQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNkO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEVELElBQUssU0FJSjtBQUpELFdBQUssU0FBUztJQUNaLDJDQUFLO0lBQ0wseUNBQUk7SUFDSiw2Q0FBTTtBQUNSLENBQUMsRUFKSSxTQUFTLEtBQVQsU0FBUyxRQUliO0FBRUQsa0JBQWUsU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNOekIsa0ZBQThDO0FBTzlDLFNBQWdCLFVBQVUsQ0FBQyxDQUFPLEVBQUUsQ0FBTztJQUN6QyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QyxJQUFJLENBQUMscUJBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3QyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFSRCxnQ0FRQzs7Ozs7Ozs7Ozs7Ozs7O0FDZkQsdUdBQStDO0FBQy9DLDJGQUFvQztBQUdwQyxJQUFLLE9BVUo7QUFWRCxXQUFLLE9BQU87SUFDVix1REFBYTtJQUNiLGlEQUFVO0lBQ1YsaURBQVU7SUFDVixpREFBVTtJQUNWLGlEQUFVO0lBRVYsbUNBQUc7SUFDSCxxQ0FBSTtJQUNKLHVDQUFLO0FBQ1AsQ0FBQyxFQVZJLE9BQU8sS0FBUCxPQUFPLFFBVVg7QUFDRCxrQkFBZSxPQUFPLENBQUM7QUFPdkIsTUFBTSxhQUFhLEdBQTZCO0lBQzlDLEVBQUUsSUFBSSxFQUFFLENBQUMsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLEVBQUUsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUM1RSxFQUFFLElBQUksRUFBRSxDQUFDLG1CQUFTLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsS0FBSyxFQUFFLG1CQUFTLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDNUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxtQkFBUyxDQUFDLElBQUksRUFBRSxtQkFBUyxDQUFDLElBQUksRUFBRSxtQkFBUyxDQUFDLElBQUksRUFBRSxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzFFLEVBQUUsSUFBSSxFQUFFLENBQUMsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO0lBQ3ZGLEVBQUUsSUFBSSxFQUFFLENBQUMsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLEVBQUUsbUJBQVMsQ0FBQyxlQUFlLEVBQUUsbUJBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUV2RixFQUFFLEtBQUssRUFBRSxlQUFLLENBQUMsR0FBRyxFQUFFO0lBQ3BCLEVBQUUsS0FBSyxFQUFFLGVBQUssQ0FBQyxJQUFJLEVBQUU7SUFDckIsRUFBRSxLQUFLLEVBQUUsZUFBSyxDQUFDLEtBQUssRUFBRTtDQUN2QixDQUFDO0FBRUYsU0FBZ0IsaUJBQWlCLENBQUMsS0FBbUIsRUFBRSxPQUFnQjtJQUNyRSxNQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUU7UUFDcEIsS0FBSyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JFO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBVEQsOENBU0M7Ozs7Ozs7Ozs7Ozs7OztBQzNDRCwyRkFBb0M7QUFPcEMsU0FBZ0IsZUFBZSxDQUFDLFNBQW9CO0lBQ2xELFFBQVEsU0FBUyxFQUFFO1FBQ2pCLEtBQUssbUJBQVMsQ0FBQyxLQUFLO1lBQ2xCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pCLEtBQUssbUJBQVMsQ0FBQyxJQUFJO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN4QixLQUFLLG1CQUFTLENBQUMsS0FBSztZQUNsQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDeEIsS0FBSyxtQkFBUyxDQUFDLElBQUk7WUFDakIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDekI7WUFDRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDekI7QUFDSCxDQUFDO0FBYkQsMENBYUM7QUFFRCxTQUFnQixRQUFRLENBQUMsSUFBVSxFQUFFLEdBQWM7SUFDakQsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFHLEtBQWE7SUFDdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM5QixPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDdEMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUUsQ0FBQztBQUNwQixDQUFDO0FBSkQsNEJBSUM7QUFFRCxTQUFnQixRQUFRLENBQUMsQ0FBTyxFQUFFLENBQU87SUFDdkMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3hDLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxJQUFVO0lBQ2pDLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2xDLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxJQUFVO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRkQsMENBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsQ0FBTyxFQUFFLENBQU8sRUFBRSxPQUEwQztJQUN0RixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsdUJBQXVCLENBQUMsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQ3RFLE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDOUYsQ0FBQztBQUZELDBEQUVDO0FBRUQsU0FBZ0IsdUJBQXVCLENBQUMsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQ3RFLE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDNUYsQ0FBQztBQUZELDBEQUVDOzs7Ozs7Ozs7Ozs7Ozs7QUN0REQsZ0ZBQXFDO0FBQ3JDLG1GQUFzQztBQUV0QyxTQUFnQixjQUFjLENBQUMsTUFBYztJQUMzQyxNQUFNLFdBQVcsR0FBRyxtQkFBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEtBQUssWUFBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxHQUFHLEtBQUssWUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBTEQsd0NBS0M7Ozs7Ozs7Ozs7Ozs7OztBQ1JELDRGQUE4RDtBQUM5RCw0RkFBcUM7QUFDckMsNkVBQTJDO0FBQzNDLHNGQUFpQztBQUNqQyxxSkFBaUU7QUFDakUseUlBQXlEO0FBQ3pELCtJQUE2RDtBQUM3RCw2R0FBOEM7QUFDOUMsNkdBQTJIO0FBQzNILDJHQUFrRDtBQUNsRCwrRkFBMEM7QUFFN0IsZUFBTyxHQUFHLElBQUksMEJBQWdCLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1RSwwQkFBa0IsR0FBRyxJQUFJLDRCQUFrQixDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUUzRix1QkFBZSxHQUFxQixFQUFFLENBQUM7QUFFcEQsSUFBSSxZQUFvQixDQUFDO0FBQ2QsdUJBQWUsR0FBZ0IsRUFBRSxDQUFDO0FBRTdDLElBQUksU0FBUyxHQUFjLG1CQUFTLENBQUMsTUFBTSxDQUFDO0FBQzVDLDZCQUE2QjtBQUU3Qjs7R0FFRztBQUNILFNBQVMsSUFBSTtJQUNYLHFCQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLHFCQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ3pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDLENBQUMsQ0FBQztJQUVILDhCQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELCtCQUFnQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV2RCx1QkFBZSxDQUFDLGlCQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RHLHVCQUFlLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLHdCQUFjLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEcsdUJBQWUsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksd0JBQWMsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRyx1QkFBZSxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hHLHVCQUFlLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLHdCQUFjLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFOUYsdUJBQWUsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksd0JBQWMsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRix1QkFBZSxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSx3QkFBYyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25GLHVCQUFlLENBQUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLHdCQUFjLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixNQUFNLEtBQUssR0FBYyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMxRSx1QkFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUM1QjtJQUVELCtCQUFtQixDQUFDLDBCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELFVBQVUsRUFBRSxDQUFDO0lBQ2IsMEJBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztBQUNoRCxDQUFDO0FBRUQsU0FBUyxJQUFJO0lBQ1gsa0JBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxxQkFBTSxDQUFDLEtBQUssRUFBRSxxQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELGtCQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMxQixrQkFBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFNLENBQUMsS0FBSyxFQUFFLHFCQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEQsMEJBQWtCLENBQUMsSUFBSSxDQUFDLGtCQUFHLENBQUMsQ0FBQztJQUM3QixlQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFHLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsS0FBaUI7SUFDaEMsTUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELDBCQUFrQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsZUFBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsVUFBVSxFQUFFLENBQUM7SUFDYixJQUFJLFlBQVksSUFBSSxZQUFZLEVBQUUsRUFBRTtRQUNsQyxJQUFJLFNBQVMsS0FBSyxtQkFBUyxDQUFDLElBQUksRUFBRTtZQUNoQyx1QkFBUSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztTQUNuRDthQUFNLElBQUksU0FBUyxLQUFLLG1CQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3hDLHVCQUFRLENBQUMsV0FBVyxHQUFHLGdDQUFnQyxDQUFDO1NBQ3pEO1FBQ0QsdUJBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3pCO0lBQ0QsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBRUQsU0FBUyxxQkFBcUI7SUFDNUIsSUFBSSxZQUFZLEVBQUU7UUFDaEIscUJBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxNQUFNLElBQUksSUFBSSxZQUFZLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxpQkFBVSxDQUFDLElBQUksRUFBRSwwQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDeEUsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNmO1lBQ0QscUJBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN0QztLQUNGO0FBQ0gsQ0FBQztBQUVELFNBQVMsWUFBWTtJQUNuQixLQUFLLE1BQU0sSUFBSSxJQUFJLHFCQUFhLEVBQUU7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBZ0IsVUFBVTtJQUN4QixJQUFJLFlBQVksRUFBRTtRQUNoQixxQkFBcUIsRUFBRSxDQUFDO1FBQ3hCLGVBQWUsRUFBRSxDQUFDO0tBQ25CO1NBQU07UUFDTCxhQUFhLEVBQUUsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFQRCxnQ0FPQztBQUVELFNBQVMsYUFBYTtJQUNwQix1QkFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsTUFBTSxLQUFLLEdBQUcsMEJBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUNqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksMEJBQWtCLENBQUMsWUFBWSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxHQUFHLE9BQU8sSUFBSSxNQUFNLENBQUM7U0FDMUI7UUFDRCx1QkFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1YsdUJBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1NBQzVCO0tBQ0Y7QUFDSCxDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3RCLHVCQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixNQUFNLEtBQUssR0FBRywwQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVDLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksR0FBRywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBRyxpQkFBVSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsOEJBQThCLElBQUksU0FBUztZQUNqRixDQUFDLENBQUMsNEJBQTRCLElBQUksU0FBUyxDQUFDO1FBQzlDLElBQUksMEJBQWtCLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDdkQsSUFBSSxHQUFHLE9BQU8sSUFBSSxNQUFNLENBQUM7U0FDMUI7UUFDRCx1QkFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFFM0IsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0IsdUJBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1NBQzVCO0tBQ0Y7QUFDSCxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGNBQWMsQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUMxQyxNQUFNLElBQUksR0FBRyxxQkFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFFNUMsT0FBTztRQUNMLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLHFCQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMscUJBQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLElBQVksRUFBRSxLQUF5QjtJQUMxRCwwQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixNQUFNLFFBQVEsR0FBRyw4QkFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7SUFDM0MsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUNsQixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCx1QkFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDM0MsVUFBVSxFQUFFLENBQUM7SUFDYiwwQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQzlDLElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUVELFNBQVMsU0FBUztJQUNoQixJQUFJLElBQUksR0FBRyx3QkFBUyxDQUFDLEtBQUssQ0FBQztJQUMzQixJQUFJLEtBQUssR0FBdUIsUUFBUSxDQUFDLHlCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFM0QsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1FBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5QjtJQUVELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtRQUMzQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0tBQ25CO0lBRUQsU0FBUyxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNCLHVCQUFRLENBQUMsV0FBVyxHQUFHLDJCQUEyQixJQUFJLEVBQUU7SUFFeEQsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsU0FBUyxVQUFVO0lBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFN0IsU0FBUyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDO0lBQzVCLHVCQUFRLENBQUMsV0FBVyxHQUFHLGtDQUFrQyxJQUFJLEVBQUU7SUFDL0QsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFNUCxtSEFBZ0Q7QUFFaEQsU0FBZ0IsWUFBWSxDQUFDLElBQVU7SUFDckMsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLElBQVU7SUFDdEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRTtRQUNuQixHQUFHLElBQUksT0FBTyxDQUFDO0tBQ2hCO1NBQU07UUFDTCxHQUFHLElBQUksTUFBTSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFSRCxzQ0FRQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLElBQVU7SUFDM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2xELEtBQUssSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUU7WUFDeEUsR0FBRyxJQUFJLEdBQUcsK0JBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUN2RDtRQUNELEdBQUcsSUFBSSxHQUFHLCtCQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbkUsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELE9BQU8sK0JBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQVZELGdEQVVDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QlksaUJBQVMsR0FBRyxFQUFFLENBQUM7QUFDZixpQkFBUyxHQUFHLGlCQUFTLEdBQUcsQ0FBQyxDQUFDO0FBRXZDLFNBQWdCLGNBQWMsQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUNqRCxPQUFPLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQVMsQ0FBQyxFQUFDLENBQUM7QUFDdEUsQ0FBQztBQUZELHdDQUVDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLElBQVU7SUFDckMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLGlCQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsaUJBQVMsRUFBRSxDQUFDO0FBQzVELENBQUM7QUFGRCxvQ0FFQzs7Ozs7Ozs7Ozs7Ozs7O0FDWFksaUJBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBbUIsQ0FBQztBQUN0RSxnQkFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFtQixDQUFDO0FBQ2xFLGNBQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFzQixDQUFDO0FBQzNFLGdCQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXlCLENBQUM7QUFFeEUsdUJBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBcUIsQ0FBQztBQUM1RSx3QkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBcUIsQ0FBQztBQUM5RSxrQkFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFxQixDQUFDO0FBQ2xFLGlCQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXFCLENBQUM7QUFFaEUsV0FBRyxHQUFHLGNBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNWdkUsZ0ZBQW1FO0FBQ25FLDhHQUErRDtBQUUvRDs7R0FFRztBQUNILE1BQThCLGVBQWU7SUFRM0MsWUFBWSxHQUFXLEVBQUUsSUFBVSxFQUFFLFlBQW9CLEVBQUUsYUFBcUIsRUFBRSxJQUFnQixFQUN0RixPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksSUFBSSxDQUFDLEdBQTZCO1FBQ3ZDLE1BQU0sR0FBRyxHQUFHLDJCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxPQUFlO1FBQzVELE1BQU0sWUFBWSxHQUFHLGVBQVEsQ0FBQyw2QkFBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSw4QkFBdUIsQ0FBQyxZQUFZLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUU7WUFDeEcsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQXRDRCxrQ0FzQ0M7Ozs7Ozs7Ozs7Ozs7OztBQzVDRCxtRkFBK0M7QUFDL0MsK0ZBQXdDO0FBQ3hDLCtGQUF5SjtBQUN6Six3R0FBNkY7QUFDN0YseUZBQWtEO0FBQ2xELGdGQUEwRztBQUMxRyw2SEFBNEc7QUFDNUcsOEdBQXFFO0FBQ3JFLGlJQUFnRDtBQUloRCxNQUFxQixrQkFBbUIsU0FBUSx5QkFBZTtJQUs3RCxZQUNFLEdBQVcsRUFBRSxJQUFVLEVBQUUsWUFBb0IsRUFBRSxhQUFxQixFQUFFLElBQWdCLEVBQ3RGLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUM7UUFDeEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxTQUFTLEdBQUcsMkJBQWUsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQixzQkFBc0I7UUFDdEIsS0FBSyxNQUFNLEtBQUssSUFBSSxtQ0FBZSxFQUFFO1lBQ25DLElBQUksQ0FBQyw4QkFBdUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pFLG1DQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM3RjtTQUNGO1FBRUQsMEJBQTBCO1FBQzFCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEIsR0FBRyxDQUFDLFdBQVcsR0FBRyx3QkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsTUFBTSxHQUFHLEdBQUcsMkJBQVksQ0FBQyxlQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRCxHQUFHLENBQUMsRUFBRSxJQUFJLHdCQUFTLENBQUM7WUFDcEIsR0FBRyxDQUFDLEVBQUUsSUFBSSx3QkFBUyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0IsTUFBTSxPQUFPLEdBQUcsc0JBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsd0JBQVMsQ0FBQyxDQUFDO1lBQzNFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNkO1FBRUQsb0NBQW9DO1FBQ3BDLElBQUksa0JBQWtCLEdBQUcsMkJBQVksQ0FBQyxlQUFRLENBQUMsNkJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRyxHQUFHLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM1QixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxHQUFHLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6RixHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxDQUFDLENBQUM7WUFDakYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUY7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3RSxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsQ0FBQyxDQUFDO1lBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5RTthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLEVBQUU7WUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdFLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlFO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsRUFBRTtZQUNqQyxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxHQUFHLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6RixHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxDQUFDLENBQUM7WUFDakYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLHdCQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUY7UUFDRCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFYix3QkFBd0I7UUFDeEIsSUFBSSxpQ0FBYSxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLEtBQUssTUFBTSxRQUFRLElBQUksaUNBQWEsRUFBRTtnQkFDcEMsa0JBQWtCLEdBQUcsMkJBQVksQ0FBQyxlQUFRLENBQUMsNkJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkcsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDeEQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxFQUFFLHdCQUFTLEVBQUUsd0JBQVMsQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7U0FDdkI7UUFFRCxvQkFBb0I7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixrQkFBa0IsR0FBRywyQkFBWSxDQUFDLGVBQVEsQ0FBQyw2QkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkYsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDMUIsR0FBRyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztZQUM3QixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM1QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsd0JBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ3BHLGtCQUFrQixDQUFDLEVBQUUsR0FBRyx3QkFBUyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsMkJBQWUsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWM7UUFDM0QsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksOEJBQXVCLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3pFLGVBQWU7WUFDZixNQUFNLEdBQUcsR0FBRyxlQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRCxNQUFNLEtBQUssR0FBRyw0QkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELElBQUksS0FBSyxFQUFFO2dCQUNULE1BQU0sWUFBWSxHQUFHLCtCQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRSxFQUFFLG9CQUFvQjtvQkFDdEMsMkJBQU8sQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztpQkFDNUM7YUFDRjtpQkFBTTtnQkFDTCwwQkFBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsbUNBQWUsQ0FBQywyQkFBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzdFO1lBQ0QsOEJBQVUsRUFBRSxDQUFDO1lBRWIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDakM7UUFFRCxNQUFNLE9BQU8sR0FBRyw0QkFBZ0IsQ0FBQyxlQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUVoQyxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRU0sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBbUI7UUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixLQUFLLENBQUMsSUFBSSxHQUFHLGVBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsOEJBQXVCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDeEUsT0FBTzthQUNSO1lBQ0QsTUFBTSxLQUFLLEdBQUcsNEJBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0NBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLEtBQUssRUFBRTtnQkFDVCwyQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxRQUFRLEtBQUssQ0FBQyxHQUFHLEVBQUU7b0JBQ2pCLEtBQUssbUJBQVMsQ0FBQyxpQkFBaUI7d0JBQzlCLEtBQUssQ0FBQyxHQUFHLEdBQUcsbUJBQVMsQ0FBQyxLQUFLLENBQUM7d0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNDQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxzQ0FBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxNQUFNO29CQUNSLEtBQUssbUJBQVMsQ0FBQyxlQUFlO3dCQUM1QixLQUFLLENBQUMsR0FBRyxHQUFHLG1CQUFTLENBQUMsSUFBSSxDQUFDO3dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQ0FBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsc0NBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsTUFBTTtvQkFDUixLQUFLLG1CQUFTLENBQUMsSUFBSTt3QkFDakIsT0FBTztpQkFDVjthQUNGLENBQUMsdUJBQXVCO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLCtCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0NBQ0Y7QUE1SkQscUNBNEpDOzs7Ozs7Ozs7Ozs7Ozs7QUNyS0QsOEdBQStDO0FBRS9DLE1BQXFCLGNBQWM7SUFJakMsWUFBWSxHQUFXLEVBQUUsSUFBZ0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUFDLElBQVUsRUFBRSxHQUE2QjtRQUNyRCxNQUFNLEdBQUcsR0FBRywyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUFmRCxpQ0FlQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJELGdGQUE2RDtBQUM3RCw2SEFBd0U7QUFDeEUsOEdBQTBEO0FBQzFELGlJQUFnRDtBQUVoRDs7R0FFRztBQUNILE1BQXFCLGdCQUFpQixTQUFRLHlCQUFlO0lBRzNEOzs7Ozs7OztPQVFHO0lBQ0gsWUFDRSxHQUFXLEVBQUUsSUFBVSxFQUFFLFlBQW9CLEVBQUUsYUFBcUIsRUFDcEUsSUFBZ0IsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxJQUFJLENBQUMsR0FBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQiwwQkFBMEI7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1DQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLG1DQUFlLENBQUMsbUNBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVGO1FBRUQsb0NBQW9DO1FBQ3BDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksR0FBRyxHQUFHLDJCQUFZLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLHdCQUFTLEVBQUUsd0JBQVMsQ0FBQyxDQUFDO1FBRW5ELEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQ0FBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxNQUFNLEtBQUssR0FBRyxtQ0FBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLElBQUksc0JBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzNELEdBQUcsR0FBRywyQkFBWSxDQUFDLGVBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSx3QkFBUyxFQUFFLHdCQUFTLENBQUMsQ0FBQzthQUNwRDtTQUNGO1FBQ0QsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLE1BQWM7UUFDM0QsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0QsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSx5QkFBeUI7UUFDOUIsT0FBTyxtQ0FBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFuRUQsbUNBbUVDOzs7Ozs7Ozs7Ozs7QUMzRUQsZSIsImZpbGUiOiJsYXNlcmdhbWUvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGFzZXJnYW1lL2Zyb250ZW5kL0Zyb250ZW5kTGFzZXJnYW1lLnRzXCIpO1xuIiwiLy8gQSBsaWJyYXJ5IG9mIHNlZWRhYmxlIFJOR3MgaW1wbGVtZW50ZWQgaW4gSmF2YXNjcmlwdC5cbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgc2VlZHJhbmRvbSA9IHJlcXVpcmUoJ3NlZWRyYW5kb20nKTtcbi8vIHZhciByYW5kb20gPSBzZWVkcmFuZG9tKDEpOyAvLyBvciBhbnkgc2VlZC5cbi8vIHZhciB4ID0gcmFuZG9tKCk7ICAgICAgIC8vIDAgPD0geCA8IDEuICBFdmVyeSBiaXQgaXMgcmFuZG9tLlxuLy8gdmFyIHggPSByYW5kb20ucXVpY2soKTsgLy8gMCA8PSB4IDwgMS4gIDMyIGJpdHMgb2YgcmFuZG9tbmVzcy5cblxuLy8gYWxlYSwgYSA1My1iaXQgbXVsdGlwbHktd2l0aC1jYXJyeSBnZW5lcmF0b3IgYnkgSm9oYW5uZXMgQmFhZ8O4ZS5cbi8vIFBlcmlvZDogfjJeMTE2XG4vLyBSZXBvcnRlZCB0byBwYXNzIGFsbCBCaWdDcnVzaCB0ZXN0cy5cbnZhciBhbGVhID0gcmVxdWlyZSgnLi9saWIvYWxlYScpO1xuXG4vLyB4b3IxMjgsIGEgcHVyZSB4b3Itc2hpZnQgZ2VuZXJhdG9yIGJ5IEdlb3JnZSBNYXJzYWdsaWEuXG4vLyBQZXJpb2Q6IDJeMTI4LTEuXG4vLyBSZXBvcnRlZCB0byBmYWlsOiBNYXRyaXhSYW5rIGFuZCBMaW5lYXJDb21wLlxudmFyIHhvcjEyOCA9IHJlcXVpcmUoJy4vbGliL3hvcjEyOCcpO1xuXG4vLyB4b3J3b3csIEdlb3JnZSBNYXJzYWdsaWEncyAxNjAtYml0IHhvci1zaGlmdCBjb21iaW5lZCBwbHVzIHdleWwuXG4vLyBQZXJpb2Q6IDJeMTkyLTJeMzJcbi8vIFJlcG9ydGVkIHRvIGZhaWw6IENvbGxpc2lvbk92ZXIsIFNpbXBQb2tlciwgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yd293ID0gcmVxdWlyZSgnLi9saWIveG9yd293Jyk7XG5cbi8vIHhvcnNoaWZ0NywgYnkgRnJhbsOnb2lzIFBhbm5ldG9uIGFuZCBQaWVycmUgTCdlY3V5ZXIsIHRha2VzXG4vLyBhIGRpZmZlcmVudCBhcHByb2FjaDogaXQgYWRkcyByb2J1c3RuZXNzIGJ5IGFsbG93aW5nIG1vcmUgc2hpZnRzXG4vLyB0aGFuIE1hcnNhZ2xpYSdzIG9yaWdpbmFsIHRocmVlLiAgSXQgaXMgYSA3LXNoaWZ0IGdlbmVyYXRvclxuLy8gd2l0aCAyNTYgYml0cywgdGhhdCBwYXNzZXMgQmlnQ3J1c2ggd2l0aCBubyBzeXN0bWF0aWMgZmFpbHVyZXMuXG4vLyBQZXJpb2QgMl4yNTYtMS5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yc2hpZnQ3ID0gcmVxdWlyZSgnLi9saWIveG9yc2hpZnQ3Jyk7XG5cbi8vIHhvcjQwOTYsIGJ5IFJpY2hhcmQgQnJlbnQsIGlzIGEgNDA5Ni1iaXQgeG9yLXNoaWZ0IHdpdGggYVxuLy8gdmVyeSBsb25nIHBlcmlvZCB0aGF0IGFsc28gYWRkcyBhIFdleWwgZ2VuZXJhdG9yLiBJdCBhbHNvIHBhc3Nlc1xuLy8gQmlnQ3J1c2ggd2l0aCBubyBzeXN0ZW1hdGljIGZhaWx1cmVzLiAgSXRzIGxvbmcgcGVyaW9kIG1heVxuLy8gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIG1hbnkgZ2VuZXJhdG9ycyBhbmQgbmVlZCB0byBhdm9pZFxuLy8gY29sbGlzaW9ucy5cbi8vIFBlcmlvZDogMl40MTI4LTJeMzIuXG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHhvcjQwOTYgPSByZXF1aXJlKCcuL2xpYi94b3I0MDk2Jyk7XG5cbi8vIFR5Y2hlLWksIGJ5IFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqbywgaXMgYSBiaXQtc2hpZnRpbmcgcmFuZG9tXG4vLyBudW1iZXIgZ2VuZXJhdG9yIGRlcml2ZWQgZnJvbSBDaGFDaGEsIGEgbW9kZXJuIHN0cmVhbSBjaXBoZXIuXG4vLyBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuLy8gUGVyaW9kOiB+Ml4xMjdcbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgdHljaGVpID0gcmVxdWlyZSgnLi9saWIvdHljaGVpJyk7XG5cbi8vIFRoZSBvcmlnaW5hbCBBUkM0LWJhc2VkIHBybmcgaW5jbHVkZWQgaW4gdGhpcyBsaWJyYXJ5LlxuLy8gUGVyaW9kOiB+Ml4xNjAwXG52YXIgc3IgPSByZXF1aXJlKCcuL3NlZWRyYW5kb20nKTtcblxuc3IuYWxlYSA9IGFsZWE7XG5zci54b3IxMjggPSB4b3IxMjg7XG5zci54b3J3b3cgPSB4b3J3b3c7XG5zci54b3JzaGlmdDcgPSB4b3JzaGlmdDc7XG5zci54b3I0MDk2ID0geG9yNDA5NjtcbnNyLnR5Y2hlaSA9IHR5Y2hlaTtcblxubW9kdWxlLmV4cG9ydHMgPSBzcjtcbiIsIi8vIEEgcG9ydCBvZiBhbiBhbGdvcml0aG0gYnkgSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5jb20+LCAyMDEwXG4vLyBodHRwOi8vYmFhZ29lLmNvbS9lbi9SYW5kb21NdXNpbmdzL2phdmFzY3JpcHQvXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbnF1aW5sYW4vYmV0dGVyLXJhbmRvbS1udW1iZXJzLWZvci1qYXZhc2NyaXB0LW1pcnJvclxuLy8gT3JpZ2luYWwgd29yayBpcyB1bmRlciBNSVQgbGljZW5zZSAtXG5cbi8vIENvcHlyaWdodCAoQykgMjAxMCBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLm9yZz5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vLyBcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vIFxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cblxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBBbGVhKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgbWFzaCA9IE1hc2goKTtcblxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAyMDkxNjM5ICogbWUuczAgKyBtZS5jICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICBtZS5zMCA9IG1lLnMxO1xuICAgIG1lLnMxID0gbWUuczI7XG4gICAgcmV0dXJuIG1lLnMyID0gdCAtIChtZS5jID0gdCB8IDApO1xuICB9O1xuXG4gIC8vIEFwcGx5IHRoZSBzZWVkaW5nIGFsZ29yaXRobSBmcm9tIEJhYWdvZS5cbiAgbWUuYyA9IDE7XG4gIG1lLnMwID0gbWFzaCgnICcpO1xuICBtZS5zMSA9IG1hc2goJyAnKTtcbiAgbWUuczIgPSBtYXNoKCcgJyk7XG4gIG1lLnMwIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMCA8IDApIHsgbWUuczAgKz0gMTsgfVxuICBtZS5zMSAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczEgPCAwKSB7IG1lLnMxICs9IDE7IH1cbiAgbWUuczIgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMyIDwgMCkgeyBtZS5zMiArPSAxOyB9XG4gIG1hc2ggPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5jID0gZi5jO1xuICB0LnMwID0gZi5zMDtcbiAgdC5zMSA9IGYuczE7XG4gIHQuczIgPSBmLnMyO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBBbGVhKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0geGcubmV4dDtcbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSAqIDB4MTAwMDAwMDAwKSB8IDA7IH1cbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcHJuZygpICsgKHBybmcoKSAqIDB4MjAwMDAwIHwgMCkgKiAxLjExMDIyMzAyNDYyNTE1NjVlLTE2OyAvLyAyXi01M1xuICB9O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuZnVuY3Rpb24gTWFzaCgpIHtcbiAgdmFyIG4gPSAweGVmYzgyNDlkO1xuXG4gIHZhciBtYXNoID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgIHZhciBoID0gMC4wMjUxOTYwMzI4MjQxNjkzOCAqIG47XG4gICAgICBuID0gaCA+Pj4gMDtcbiAgICAgIGggLT0gbjtcbiAgICAgIGggKj0gbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgbiArPSBoICogMHgxMDAwMDAwMDA7IC8vIDJeMzJcbiAgICB9XG4gICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gIH07XG5cbiAgcmV0dXJuIG1hc2g7XG59XG5cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy5hbGVhID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJUeWNoZS1pXCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqby5cbi8vIFNlZSBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBiID0gbWUuYiwgYyA9IG1lLmMsIGQgPSBtZS5kLCBhID0gbWUuYTtcbiAgICBiID0gKGIgPDwgMjUpIF4gKGIgPj4+IDcpIF4gYztcbiAgICBjID0gKGMgLSBkKSB8IDA7XG4gICAgZCA9IChkIDw8IDI0KSBeIChkID4+PiA4KSBeIGE7XG4gICAgYSA9IChhIC0gYikgfCAwO1xuICAgIG1lLmIgPSBiID0gKGIgPDwgMjApIF4gKGIgPj4+IDEyKSBeIGM7XG4gICAgbWUuYyA9IGMgPSAoYyAtIGQpIHwgMDtcbiAgICBtZS5kID0gKGQgPDwgMTYpIF4gKGMgPj4+IDE2KSBeIGE7XG4gICAgcmV0dXJuIG1lLmEgPSAoYSAtIGIpIHwgMDtcbiAgfTtcblxuICAvKiBUaGUgZm9sbG93aW5nIGlzIG5vbi1pbnZlcnRlZCB0eWNoZSwgd2hpY2ggaGFzIGJldHRlciBpbnRlcm5hbFxuICAgKiBiaXQgZGlmZnVzaW9uLCBidXQgd2hpY2ggaXMgYWJvdXQgMjUlIHNsb3dlciB0aGFuIHR5Y2hlLWkgaW4gSlMuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IG1lLmEsIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQ7XG4gICAgYSA9IChtZS5hICsgbWUuYiB8IDApID4+PiAwO1xuICAgIGQgPSBtZS5kIF4gYTsgZCA9IGQgPDwgMTYgXiBkID4+PiAxNjtcbiAgICBjID0gbWUuYyArIGQgfCAwO1xuICAgIGIgPSBtZS5iIF4gYzsgYiA9IGIgPDwgMTIgXiBkID4+PiAyMDtcbiAgICBtZS5hID0gYSA9IGEgKyBiIHwgMDtcbiAgICBkID0gZCBeIGE7IG1lLmQgPSBkID0gZCA8PCA4IF4gZCA+Pj4gMjQ7XG4gICAgbWUuYyA9IGMgPSBjICsgZCB8IDA7XG4gICAgYiA9IGIgXiBjO1xuICAgIHJldHVybiBtZS5iID0gKGIgPDwgNyBeIGIgPj4+IDI1KTtcbiAgfVxuICAqL1xuXG4gIG1lLmEgPSAwO1xuICBtZS5iID0gMDtcbiAgbWUuYyA9IDI2NTQ0MzU3NjkgfCAwO1xuICBtZS5kID0gMTM2NzEzMDU1MTtcblxuICBpZiAoc2VlZCA9PT0gTWF0aC5mbG9vcihzZWVkKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS5hID0gKHNlZWQgLyAweDEwMDAwMDAwMCkgfCAwO1xuICAgIG1lLmIgPSBzZWVkIHwgMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDIwOyBrKyspIHtcbiAgICBtZS5iIF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmEgPSBmLmE7XG4gIHQuYiA9IGYuYjtcbiAgdC5jID0gZi5jO1xuICB0LmQgPSBmLmQ7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy50eWNoZWkgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcjEyOFwiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSBtZS54IF4gKG1lLnggPDwgMTEpO1xuICAgIG1lLnggPSBtZS55O1xuICAgIG1lLnkgPSBtZS56O1xuICAgIG1lLnogPSBtZS53O1xuICAgIHJldHVybiBtZS53IF49IChtZS53ID4+PiAxOSkgXiB0IF4gKHQgPj4+IDgpO1xuICB9O1xuXG4gIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLnggPSBzZWVkO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgNjQ7IGsrKykge1xuICAgIG1lLnggXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueDtcbiAgdC55ID0gZi55O1xuICB0LnogPSBmLno7XG4gIHQudyA9IGYudztcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yMTI4ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiBSaWNoYXJkIEJyZW50J3MgWG9yZ2VucyB4b3I0MDk2IGFsZ29yaXRobS5cbi8vXG4vLyBUaGlzIGZhc3Qgbm9uLWNyeXB0b2dyYXBoaWMgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgaXMgZGVzaWduZWQgZm9yXG4vLyB1c2UgaW4gTW9udGUtQ2FybG8gYWxnb3JpdGhtcy4gSXQgY29tYmluZXMgYSBsb25nLXBlcmlvZCB4b3JzaGlmdFxuLy8gZ2VuZXJhdG9yIHdpdGggYSBXZXlsIGdlbmVyYXRvciwgYW5kIGl0IHBhc3NlcyBhbGwgY29tbW9uIGJhdHRlcmllc1xuLy8gb2Ygc3Rhc3RpY2lhbCB0ZXN0cyBmb3IgcmFuZG9tbmVzcyB3aGlsZSBjb25zdW1pbmcgb25seSBhIGZldyBuYW5vc2Vjb25kc1xuLy8gZm9yIGVhY2ggcHJuZyBnZW5lcmF0ZWQuICBGb3IgYmFja2dyb3VuZCBvbiB0aGUgZ2VuZXJhdG9yLCBzZWUgQnJlbnQnc1xuLy8gcGFwZXI6IFwiU29tZSBsb25nLXBlcmlvZCByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnMgdXNpbmcgc2hpZnRzIGFuZCB4b3JzLlwiXG4vLyBodHRwOi8vYXJ4aXYub3JnL3BkZi8xMDA0LjMxMTV2MS5wZGZcbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgeG9yNDA5NiA9IHJlcXVpcmUoJ3hvcjQwOTYnKTtcbi8vIHJhbmRvbSA9IHhvcjQwOTYoMSk7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlZCB3aXRoIGludDMyIG9yIHN0cmluZy5cbi8vIGFzc2VydC5lcXVhbChyYW5kb20oKSwgMC4xNTIwNDM2NDUwNTM4NTQ3KTsgLy8gKDAsIDEpIHJhbmdlLCA1MyBiaXRzLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbS5pbnQzMigpLCAxODA2NTM0ODk3KTsgICAvLyBzaWduZWQgaW50MzIsIDMyIGJpdHMuXG4vL1xuLy8gRm9yIG5vbnplcm8gbnVtZXJpYyBrZXlzLCB0aGlzIGltcGVsZW1lbnRhdGlvbiBwcm92aWRlcyBhIHNlcXVlbmNlXG4vLyBpZGVudGljYWwgdG8gdGhhdCBieSBCcmVudCdzIHhvcmdlbnMgMyBpbXBsZW1lbnRhaW9uIGluIEMuICBUaGlzXG4vLyBpbXBsZW1lbnRhdGlvbiBhbHNvIHByb3ZpZGVzIGZvciBpbml0YWxpemluZyB0aGUgZ2VuZXJhdG9yIHdpdGhcbi8vIHN0cmluZyBzZWVkcywgb3IgZm9yIHNhdmluZyBhbmQgcmVzdG9yaW5nIHRoZSBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuLy9cbi8vIE9uIENocm9tZSwgdGhpcyBwcm5nIGJlbmNobWFya3MgYWJvdXQgMi4xIHRpbWVzIHNsb3dlciB0aGFuXG4vLyBKYXZhc2NyaXB0J3MgYnVpbHQtaW4gTWF0aC5yYW5kb20oKS5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHcgPSBtZS53LFxuICAgICAgICBYID0gbWUuWCwgaSA9IG1lLmksIHQsIHY7XG4gICAgLy8gVXBkYXRlIFdleWwgZ2VuZXJhdG9yLlxuICAgIG1lLncgPSB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdiA9IFhbKGkgKyAzNCkgJiAxMjddO1xuICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgIHYgXj0gdiA8PCAxMztcbiAgICB0IF49IHQgPDwgMTc7XG4gICAgdiBePSB2ID4+PiAxNTtcbiAgICB0IF49IHQgPj4+IDEyO1xuICAgIC8vIFVwZGF0ZSBYb3IgZ2VuZXJhdG9yIGFycmF5IHN0YXRlLlxuICAgIHYgPSBYW2ldID0gdiBeIHQ7XG4gICAgbWUuaSA9IGk7XG4gICAgLy8gUmVzdWx0IGlzIHRoZSBjb21iaW5hdGlvbi5cbiAgICByZXR1cm4gKHYgKyAodyBeICh3ID4+PiAxNikpKSB8IDA7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5pdChtZSwgc2VlZCkge1xuICAgIHZhciB0LCB2LCBpLCBqLCB3LCBYID0gW10sIGxpbWl0ID0gMTI4O1xuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBOdW1lcmljIHNlZWRzIGluaXRpYWxpemUgdiwgd2hpY2ggaXMgdXNlZCB0byBnZW5lcmF0ZXMgWC5cbiAgICAgIHYgPSBzZWVkO1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0cmluZyBzZWVkcyBhcmUgbWl4ZWQgaW50byB2IGFuZCBYIG9uZSBjaGFyYWN0ZXIgYXQgYSB0aW1lLlxuICAgICAgc2VlZCA9IHNlZWQgKyAnXFwwJztcbiAgICAgIHYgPSAwO1xuICAgICAgbGltaXQgPSBNYXRoLm1heChsaW1pdCwgc2VlZC5sZW5ndGgpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIGNpcmN1bGFyIGFycmF5IGFuZCB3ZXlsIHZhbHVlLlxuICAgIGZvciAoaSA9IDAsIGogPSAtMzI7IGogPCBsaW1pdDsgKytqKSB7XG4gICAgICAvLyBQdXQgdGhlIHVuaWNvZGUgY2hhcmFjdGVycyBpbnRvIHRoZSBhcnJheSwgYW5kIHNodWZmbGUgdGhlbS5cbiAgICAgIGlmIChzZWVkKSB2IF49IHNlZWQuY2hhckNvZGVBdCgoaiArIDMyKSAlIHNlZWQubGVuZ3RoKTtcbiAgICAgIC8vIEFmdGVyIDMyIHNodWZmbGVzLCB0YWtlIHYgYXMgdGhlIHN0YXJ0aW5nIHcgdmFsdWUuXG4gICAgICBpZiAoaiA9PT0gMCkgdyA9IHY7XG4gICAgICB2IF49IHYgPDwgMTA7XG4gICAgICB2IF49IHYgPj4+IDE1O1xuICAgICAgdiBePSB2IDw8IDQ7XG4gICAgICB2IF49IHYgPj4+IDEzO1xuICAgICAgaWYgKGogPj0gMCkge1xuICAgICAgICB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7ICAgICAvLyBXZXlsLlxuICAgICAgICB0ID0gKFhbaiAmIDEyN10gXj0gKHYgKyB3KSk7ICAvLyBDb21iaW5lIHhvciBhbmQgd2V5bCB0byBpbml0IGFycmF5LlxuICAgICAgICBpID0gKDAgPT0gdCkgPyBpICsgMSA6IDA7ICAgICAvLyBDb3VudCB6ZXJvZXMuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdlIGhhdmUgZGV0ZWN0ZWQgYWxsIHplcm9lczsgbWFrZSB0aGUga2V5IG5vbnplcm8uXG4gICAgaWYgKGkgPj0gMTI4KSB7XG4gICAgICBYWyhzZWVkICYmIHNlZWQubGVuZ3RoIHx8IDApICYgMTI3XSA9IC0xO1xuICAgIH1cbiAgICAvLyBSdW4gdGhlIGdlbmVyYXRvciA1MTIgdGltZXMgdG8gZnVydGhlciBtaXggdGhlIHN0YXRlIGJlZm9yZSB1c2luZyBpdC5cbiAgICAvLyBGYWN0b3JpbmcgdGhpcyBhcyBhIGZ1bmN0aW9uIHNsb3dzIHRoZSBtYWluIGdlbmVyYXRvciwgc28gaXQgaXMganVzdFxuICAgIC8vIHVucm9sbGVkIGhlcmUuICBUaGUgd2V5bCBnZW5lcmF0b3IgaXMgbm90IGFkdmFuY2VkIHdoaWxlIHdhcm1pbmcgdXAuXG4gICAgaSA9IDEyNztcbiAgICBmb3IgKGogPSA0ICogMTI4OyBqID4gMDsgLS1qKSB7XG4gICAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgICB0ID0gWFtpID0gKChpICsgMSkgJiAxMjcpXTtcbiAgICAgIHYgXj0gdiA8PCAxMztcbiAgICAgIHQgXj0gdCA8PCAxNztcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB0IF49IHQgPj4+IDEyO1xuICAgICAgWFtpXSA9IHYgXiB0O1xuICAgIH1cbiAgICAvLyBTdG9yaW5nIHN0YXRlIGFzIG9iamVjdCBtZW1iZXJzIGlzIGZhc3RlciB0aGFuIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzLlxuICAgIG1lLncgPSB3O1xuICAgIG1lLlggPSBYO1xuICAgIG1lLmkgPSBpO1xuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQudyA9IGYudztcbiAgdC5YID0gZi5YLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuWCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcjQwOTYgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93IG9iamVjdCBvciBnbG9iYWxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yc2hpZnQ3XCIgYWxnb3JpdGhtIGJ5XG4vLyBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllcjpcbi8vIFwiT24gdGhlIFhvcmdzaGlmdCBSYW5kb20gTnVtYmVyIEdlbmVyYXRvcnNcIlxuLy8gaHR0cDovL3NhbHVjLmVuZ3IudWNvbm4uZWR1L3JlZnMvY3J5cHRvL3JuZy9wYW5uZXRvbjA1b250aGV4b3JzaGlmdC5wZGZcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdmFyIFggPSBtZS54LCBpID0gbWUuaSwgdCwgdiwgdztcbiAgICB0ID0gWFtpXTsgdCBePSAodCA+Pj4gNyk7IHYgPSB0IF4gKHQgPDwgMjQpO1xuICAgIHQgPSBYWyhpICsgMSkgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDEwKTtcbiAgICB0ID0gWFsoaSArIDMpICYgN107IHYgXj0gdCBeICh0ID4+PiAzKTtcbiAgICB0ID0gWFsoaSArIDQpICYgN107IHYgXj0gdCBeICh0IDw8IDcpO1xuICAgIHQgPSBYWyhpICsgNykgJiA3XTsgdCA9IHQgXiAodCA8PCAxMyk7IHYgXj0gdCBeICh0IDw8IDkpO1xuICAgIFhbaV0gPSB2O1xuICAgIG1lLmkgPSAoaSArIDEpICYgNztcbiAgICByZXR1cm4gdjtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIGosIHcsIFggPSBbXTtcblxuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBTZWVkIHN0YXRlIGFycmF5IHVzaW5nIGEgMzItYml0IGludGVnZXIuXG4gICAgICB3ID0gWFswXSA9IHNlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgdXNpbmcgYSBzdHJpbmcuXG4gICAgICBzZWVkID0gJycgKyBzZWVkO1xuICAgICAgZm9yIChqID0gMDsgaiA8IHNlZWQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgWFtqICYgN10gPSAoWFtqICYgN10gPDwgMTUpIF5cbiAgICAgICAgICAgIChzZWVkLmNoYXJDb2RlQXQoaikgKyBYWyhqICsgMSkgJiA3XSA8PCAxMyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgYW4gYXJyYXkgbGVuZ3RoIG9mIDgsIG5vdCBhbGwgemVyb2VzLlxuICAgIHdoaWxlIChYLmxlbmd0aCA8IDgpIFgucHVzaCgwKTtcbiAgICBmb3IgKGogPSAwOyBqIDwgOCAmJiBYW2pdID09PSAwOyArK2opO1xuICAgIGlmIChqID09IDgpIHcgPSBYWzddID0gLTE7IGVsc2UgdyA9IFhbal07XG5cbiAgICBtZS54ID0gWDtcbiAgICBtZS5pID0gMDtcblxuICAgIC8vIERpc2NhcmQgYW4gaW5pdGlhbCAyNTYgdmFsdWVzLlxuICAgIGZvciAoaiA9IDI1NjsgaiA+IDA7IC0taikge1xuICAgICAgbWUubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQobWUsIHNlZWQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54LnNsaWNlKCk7XG4gIHQuaSA9IGYuaTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICBpZiAoc2VlZCA9PSBudWxsKSBzZWVkID0gKyhuZXcgRGF0ZSk7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLngpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3JzaGlmdDcgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3J3b3dcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gR2VvcmdlIE1hcnNhZ2xpYS4gIFNlZSBodHRwOi8vd3d3LmpzdGF0c29mdC5vcmcvdjA4L2kxNC9wYXBlclxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gKG1lLnggXiAobWUueCA+Pj4gMikpO1xuICAgIG1lLnggPSBtZS55OyBtZS55ID0gbWUuejsgbWUueiA9IG1lLnc7IG1lLncgPSBtZS52O1xuICAgIHJldHVybiAobWUuZCA9IChtZS5kICsgMzYyNDM3IHwgMCkpICtcbiAgICAgICAobWUudiA9IChtZS52IF4gKG1lLnYgPDwgNCkpIF4gKHQgXiAodCA8PCAxKSkpIHwgMDtcbiAgfTtcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcbiAgbWUudiA9IDA7XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIGlmIChrID09IHN0cnNlZWQubGVuZ3RoKSB7XG4gICAgICBtZS5kID0gbWUueCA8PCAxMCBeIG1lLnggPj4+IDQ7XG4gICAgfVxuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICB0LnYgPSBmLnY7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yd293ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvKlxuQ29weXJpZ2h0IDIwMTQgRGF2aWQgQmF1LlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbklOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG5DTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4oZnVuY3Rpb24gKHBvb2wsIG1hdGgpIHtcbi8vXG4vLyBUaGUgZm9sbG93aW5nIGNvbnN0YW50cyBhcmUgcmVsYXRlZCB0byBJRUVFIDc1NCBsaW1pdHMuXG4vL1xuXG4vLyBEZXRlY3QgdGhlIGdsb2JhbCBvYmplY3QsIGV2ZW4gaWYgb3BlcmF0aW5nIGluIHN0cmljdCBtb2RlLlxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODcwNTcvMjY1Mjk4XG52YXIgZ2xvYmFsID0gKDAsIGV2YWwpKCd0aGlzJyksXG4gICAgd2lkdGggPSAyNTYsICAgICAgICAvLyBlYWNoIFJDNCBvdXRwdXQgaXMgMCA8PSB4IDwgMjU2XG4gICAgY2h1bmtzID0gNiwgICAgICAgICAvLyBhdCBsZWFzdCBzaXggUkM0IG91dHB1dHMgZm9yIGVhY2ggZG91YmxlXG4gICAgZGlnaXRzID0gNTIsICAgICAgICAvLyB0aGVyZSBhcmUgNTIgc2lnbmlmaWNhbnQgZGlnaXRzIGluIGEgZG91YmxlXG4gICAgcm5nbmFtZSA9ICdyYW5kb20nLCAvLyBybmduYW1lOiBuYW1lIGZvciBNYXRoLnJhbmRvbSBhbmQgTWF0aC5zZWVkcmFuZG9tXG4gICAgc3RhcnRkZW5vbSA9IG1hdGgucG93KHdpZHRoLCBjaHVua3MpLFxuICAgIHNpZ25pZmljYW5jZSA9IG1hdGgucG93KDIsIGRpZ2l0cyksXG4gICAgb3ZlcmZsb3cgPSBzaWduaWZpY2FuY2UgKiAyLFxuICAgIG1hc2sgPSB3aWR0aCAtIDEsXG4gICAgbm9kZWNyeXB0bzsgICAgICAgICAvLyBub2RlLmpzIGNyeXB0byBtb2R1bGUsIGluaXRpYWxpemVkIGF0IHRoZSBib3R0b20uXG5cbi8vXG4vLyBzZWVkcmFuZG9tKClcbi8vIFRoaXMgaXMgdGhlIHNlZWRyYW5kb20gZnVuY3Rpb24gZGVzY3JpYmVkIGFib3ZlLlxuLy9cbmZ1bmN0aW9uIHNlZWRyYW5kb20oc2VlZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGtleSA9IFtdO1xuICBvcHRpb25zID0gKG9wdGlvbnMgPT0gdHJ1ZSkgPyB7IGVudHJvcHk6IHRydWUgfSA6IChvcHRpb25zIHx8IHt9KTtcblxuICAvLyBGbGF0dGVuIHRoZSBzZWVkIHN0cmluZyBvciBidWlsZCBvbmUgZnJvbSBsb2NhbCBlbnRyb3B5IGlmIG5lZWRlZC5cbiAgdmFyIHNob3J0c2VlZCA9IG1peGtleShmbGF0dGVuKFxuICAgIG9wdGlvbnMuZW50cm9weSA/IFtzZWVkLCB0b3N0cmluZyhwb29sKV0gOlxuICAgIChzZWVkID09IG51bGwpID8gYXV0b3NlZWQoKSA6IHNlZWQsIDMpLCBrZXkpO1xuXG4gIC8vIFVzZSB0aGUgc2VlZCB0byBpbml0aWFsaXplIGFuIEFSQzQgZ2VuZXJhdG9yLlxuICB2YXIgYXJjNCA9IG5ldyBBUkM0KGtleSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgcmFuZG9tIGRvdWJsZSBpbiBbMCwgMSkgdGhhdCBjb250YWluc1xuICAvLyByYW5kb21uZXNzIGluIGV2ZXJ5IGJpdCBvZiB0aGUgbWFudGlzc2Egb2YgdGhlIElFRUUgNzU0IHZhbHVlLlxuICB2YXIgcHJuZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuID0gYXJjNC5nKGNodW5rcyksICAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggYSBudW1lcmF0b3IgbiA8IDIgXiA0OFxuICAgICAgICBkID0gc3RhcnRkZW5vbSwgICAgICAgICAgICAgICAgIC8vICAgYW5kIGRlbm9taW5hdG9yIGQgPSAyIF4gNDguXG4gICAgICAgIHggPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBhbmQgbm8gJ2V4dHJhIGxhc3QgYnl0ZScuXG4gICAgd2hpbGUgKG4gPCBzaWduaWZpY2FuY2UpIHsgICAgICAgICAgLy8gRmlsbCB1cCBhbGwgc2lnbmlmaWNhbnQgZGlnaXRzIGJ5XG4gICAgICBuID0gKG4gKyB4KSAqIHdpZHRoOyAgICAgICAgICAgICAgLy8gICBzaGlmdGluZyBudW1lcmF0b3IgYW5kXG4gICAgICBkICo9IHdpZHRoOyAgICAgICAgICAgICAgICAgICAgICAgLy8gICBkZW5vbWluYXRvciBhbmQgZ2VuZXJhdGluZyBhXG4gICAgICB4ID0gYXJjNC5nKDEpOyAgICAgICAgICAgICAgICAgICAgLy8gICBuZXcgbGVhc3Qtc2lnbmlmaWNhbnQtYnl0ZS5cbiAgICB9XG4gICAgd2hpbGUgKG4gPj0gb3ZlcmZsb3cpIHsgICAgICAgICAgICAgLy8gVG8gYXZvaWQgcm91bmRpbmcgdXAsIGJlZm9yZSBhZGRpbmdcbiAgICAgIG4gLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGxhc3QgYnl0ZSwgc2hpZnQgZXZlcnl0aGluZ1xuICAgICAgZCAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmlnaHQgdXNpbmcgaW50ZWdlciBtYXRoIHVudGlsXG4gICAgICB4ID4+Pj0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3ZSBoYXZlIGV4YWN0bHkgdGhlIGRlc2lyZWQgYml0cy5cbiAgICB9XG4gICAgcmV0dXJuIChuICsgeCkgLyBkOyAgICAgICAgICAgICAgICAgLy8gRm9ybSB0aGUgbnVtYmVyIHdpdGhpbiBbMCwgMSkuXG4gIH07XG5cbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJjNC5nKDQpIHwgMDsgfVxuICBwcm5nLnF1aWNrID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgLyAweDEwMDAwMDAwMDsgfVxuICBwcm5nLmRvdWJsZSA9IHBybmc7XG5cbiAgLy8gTWl4IHRoZSByYW5kb21uZXNzIGludG8gYWNjdW11bGF0ZWQgZW50cm9weS5cbiAgbWl4a2V5KHRvc3RyaW5nKGFyYzQuUyksIHBvb2wpO1xuXG4gIC8vIENhbGxpbmcgY29udmVudGlvbjogd2hhdCB0byByZXR1cm4gYXMgYSBmdW5jdGlvbiBvZiBwcm5nLCBzZWVkLCBpc19tYXRoLlxuICByZXR1cm4gKG9wdGlvbnMucGFzcyB8fCBjYWxsYmFjayB8fFxuICAgICAgZnVuY3Rpb24ocHJuZywgc2VlZCwgaXNfbWF0aF9jYWxsLCBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAvLyBMb2FkIHRoZSBhcmM0IHN0YXRlIGZyb20gdGhlIGdpdmVuIHN0YXRlIGlmIGl0IGhhcyBhbiBTIGFycmF5LlxuICAgICAgICAgIGlmIChzdGF0ZS5TKSB7IGNvcHkoc3RhdGUsIGFyYzQpOyB9XG4gICAgICAgICAgLy8gT25seSBwcm92aWRlIHRoZSAuc3RhdGUgbWV0aG9kIGlmIHJlcXVlc3RlZCB2aWEgb3B0aW9ucy5zdGF0ZS5cbiAgICAgICAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KGFyYzQsIHt9KTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgY2FsbGVkIGFzIGEgbWV0aG9kIG9mIE1hdGggKE1hdGguc2VlZHJhbmRvbSgpKSwgbXV0YXRlXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIGJlY2F1c2UgdGhhdCBpcyBob3cgc2VlZHJhbmRvbS5qcyBoYXMgd29ya2VkIHNpbmNlIHYxLjAuXG4gICAgICAgIGlmIChpc19tYXRoX2NhbGwpIHsgbWF0aFtybmduYW1lXSA9IHBybmc7IHJldHVybiBzZWVkOyB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBpcyBhIG5ld2VyIGNhbGxpbmcgY29udmVudGlvbiwgc28gcmV0dXJuIHRoZVxuICAgICAgICAvLyBwcm5nIGRpcmVjdGx5LlxuICAgICAgICBlbHNlIHJldHVybiBwcm5nO1xuICAgICAgfSkoXG4gIHBybmcsXG4gIHNob3J0c2VlZCxcbiAgJ2dsb2JhbCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuZ2xvYmFsIDogKHRoaXMgPT0gbWF0aCksXG4gIG9wdGlvbnMuc3RhdGUpO1xufVxubWF0aFsnc2VlZCcgKyBybmduYW1lXSA9IHNlZWRyYW5kb207XG5cbi8vXG4vLyBBUkM0XG4vL1xuLy8gQW4gQVJDNCBpbXBsZW1lbnRhdGlvbi4gIFRoZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGtleSBpbiB0aGUgZm9ybSBvZlxuLy8gYW4gYXJyYXkgb2YgYXQgbW9zdCAod2lkdGgpIGludGVnZXJzIHRoYXQgc2hvdWxkIGJlIDAgPD0geCA8ICh3aWR0aCkuXG4vL1xuLy8gVGhlIGcoY291bnQpIG1ldGhvZCByZXR1cm5zIGEgcHNldWRvcmFuZG9tIGludGVnZXIgdGhhdCBjb25jYXRlbmF0ZXNcbi8vIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBmcm9tIEFSQzQuICBJdHMgcmV0dXJuIHZhbHVlIGlzIGEgbnVtYmVyIHhcbi8vIHRoYXQgaXMgaW4gdGhlIHJhbmdlIDAgPD0geCA8ICh3aWR0aCBeIGNvdW50KS5cbi8vXG5mdW5jdGlvbiBBUkM0KGtleSkge1xuICB2YXIgdCwga2V5bGVuID0ga2V5Lmxlbmd0aCxcbiAgICAgIG1lID0gdGhpcywgaSA9IDAsIGogPSBtZS5pID0gbWUuaiA9IDAsIHMgPSBtZS5TID0gW107XG5cbiAgLy8gVGhlIGVtcHR5IGtleSBbXSBpcyB0cmVhdGVkIGFzIFswXS5cbiAgaWYgKCFrZXlsZW4pIHsga2V5ID0gW2tleWxlbisrXTsgfVxuXG4gIC8vIFNldCB1cCBTIHVzaW5nIHRoZSBzdGFuZGFyZCBrZXkgc2NoZWR1bGluZyBhbGdvcml0aG0uXG4gIHdoaWxlIChpIDwgd2lkdGgpIHtcbiAgICBzW2ldID0gaSsrO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIGtleVtpICUga2V5bGVuXSArICh0ID0gc1tpXSkpXTtcbiAgICBzW2pdID0gdDtcbiAgfVxuXG4gIC8vIFRoZSBcImdcIiBtZXRob2QgcmV0dXJucyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgYXMgb25lIG51bWJlci5cbiAgKG1lLmcgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIC8vIFVzaW5nIGluc3RhbmNlIG1lbWJlcnMgaW5zdGVhZCBvZiBjbG9zdXJlIHN0YXRlIG5lYXJseSBkb3VibGVzIHNwZWVkLlxuICAgIHZhciB0LCByID0gMCxcbiAgICAgICAgaSA9IG1lLmksIGogPSBtZS5qLCBzID0gbWUuUztcbiAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgdCA9IHNbaSA9IG1hc2sgJiAoaSArIDEpXTtcbiAgICAgIHIgPSByICogd2lkdGggKyBzW21hc2sgJiAoKHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyB0KV0pICsgKHNbal0gPSB0KSldO1xuICAgIH1cbiAgICBtZS5pID0gaTsgbWUuaiA9IGo7XG4gICAgcmV0dXJuIHI7XG4gICAgLy8gRm9yIHJvYnVzdCB1bnByZWRpY3RhYmlsaXR5LCB0aGUgZnVuY3Rpb24gY2FsbCBiZWxvdyBhdXRvbWF0aWNhbGx5XG4gICAgLy8gZGlzY2FyZHMgYW4gaW5pdGlhbCBiYXRjaCBvZiB2YWx1ZXMuICBUaGlzIGlzIGNhbGxlZCBSQzQtZHJvcFsyNTZdLlxuICAgIC8vIFNlZSBodHRwOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT1yc2ErZmx1aHJlcityZXNwb25zZSZidG5JXG4gIH0pKHdpZHRoKTtcbn1cblxuLy9cbi8vIGNvcHkoKVxuLy8gQ29waWVzIGludGVybmFsIHN0YXRlIG9mIEFSQzQgdG8gb3IgZnJvbSBhIHBsYWluIG9iamVjdC5cbi8vXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5pID0gZi5pO1xuICB0LmogPSBmLmo7XG4gIHQuUyA9IGYuUy5zbGljZSgpO1xuICByZXR1cm4gdDtcbn07XG5cbi8vXG4vLyBmbGF0dGVuKClcbi8vIENvbnZlcnRzIGFuIG9iamVjdCB0cmVlIHRvIG5lc3RlZCBhcnJheXMgb2Ygc3RyaW5ncy5cbi8vXG5mdW5jdGlvbiBmbGF0dGVuKG9iaiwgZGVwdGgpIHtcbiAgdmFyIHJlc3VsdCA9IFtdLCB0eXAgPSAodHlwZW9mIG9iaiksIHByb3A7XG4gIGlmIChkZXB0aCAmJiB0eXAgPT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICB0cnkgeyByZXN1bHQucHVzaChmbGF0dGVuKG9ialtwcm9wXSwgZGVwdGggLSAxKSk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG4gIHJldHVybiAocmVzdWx0Lmxlbmd0aCA/IHJlc3VsdCA6IHR5cCA9PSAnc3RyaW5nJyA/IG9iaiA6IG9iaiArICdcXDAnKTtcbn1cblxuLy9cbi8vIG1peGtleSgpXG4vLyBNaXhlcyBhIHN0cmluZyBzZWVkIGludG8gYSBrZXkgdGhhdCBpcyBhbiBhcnJheSBvZiBpbnRlZ2VycywgYW5kXG4vLyByZXR1cm5zIGEgc2hvcnRlbmVkIHN0cmluZyBzZWVkIHRoYXQgaXMgZXF1aXZhbGVudCB0byB0aGUgcmVzdWx0IGtleS5cbi8vXG5mdW5jdGlvbiBtaXhrZXkoc2VlZCwga2V5KSB7XG4gIHZhciBzdHJpbmdzZWVkID0gc2VlZCArICcnLCBzbWVhciwgaiA9IDA7XG4gIHdoaWxlIChqIDwgc3RyaW5nc2VlZC5sZW5ndGgpIHtcbiAgICBrZXlbbWFzayAmIGpdID1cbiAgICAgIG1hc2sgJiAoKHNtZWFyIF49IGtleVttYXNrICYgal0gKiAxOSkgKyBzdHJpbmdzZWVkLmNoYXJDb2RlQXQoaisrKSk7XG4gIH1cbiAgcmV0dXJuIHRvc3RyaW5nKGtleSk7XG59XG5cbi8vXG4vLyBhdXRvc2VlZCgpXG4vLyBSZXR1cm5zIGFuIG9iamVjdCBmb3IgYXV0b3NlZWRpbmcsIHVzaW5nIHdpbmRvdy5jcnlwdG8gYW5kIE5vZGUgY3J5cHRvXG4vLyBtb2R1bGUgaWYgYXZhaWxhYmxlLlxuLy9cbmZ1bmN0aW9uIGF1dG9zZWVkKCkge1xuICB0cnkge1xuICAgIHZhciBvdXQ7XG4gICAgaWYgKG5vZGVjcnlwdG8gJiYgKG91dCA9IG5vZGVjcnlwdG8ucmFuZG9tQnl0ZXMpKSB7XG4gICAgICAvLyBUaGUgdXNlIG9mICdvdXQnIHRvIHJlbWVtYmVyIHJhbmRvbUJ5dGVzIG1ha2VzIHRpZ2h0IG1pbmlmaWVkIGNvZGUuXG4gICAgICBvdXQgPSBvdXQod2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgPSBuZXcgVWludDhBcnJheSh3aWR0aCk7XG4gICAgICAoZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG8pLmdldFJhbmRvbVZhbHVlcyhvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdG9zdHJpbmcob3V0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBicm93c2VyID0gZ2xvYmFsLm5hdmlnYXRvcixcbiAgICAgICAgcGx1Z2lucyA9IGJyb3dzZXIgJiYgYnJvd3Nlci5wbHVnaW5zO1xuICAgIHJldHVybiBbK25ldyBEYXRlLCBnbG9iYWwsIHBsdWdpbnMsIGdsb2JhbC5zY3JlZW4sIHRvc3RyaW5nKHBvb2wpXTtcbiAgfVxufVxuXG4vL1xuLy8gdG9zdHJpbmcoKVxuLy8gQ29udmVydHMgYW4gYXJyYXkgb2YgY2hhcmNvZGVzIHRvIGEgc3RyaW5nXG4vL1xuZnVuY3Rpb24gdG9zdHJpbmcoYSkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseSgwLCBhKTtcbn1cblxuLy9cbi8vIFdoZW4gc2VlZHJhbmRvbS5qcyBpcyBsb2FkZWQsIHdlIGltbWVkaWF0ZWx5IG1peCBhIGZldyBiaXRzXG4vLyBmcm9tIHRoZSBidWlsdC1pbiBSTkcgaW50byB0aGUgZW50cm9weSBwb29sLiAgQmVjYXVzZSB3ZSBkb1xuLy8gbm90IHdhbnQgdG8gaW50ZXJmZXJlIHdpdGggZGV0ZXJtaW5pc3RpYyBQUk5HIHN0YXRlIGxhdGVyLFxuLy8gc2VlZHJhbmRvbSB3aWxsIG5vdCBjYWxsIG1hdGgucmFuZG9tIG9uIGl0cyBvd24gYWdhaW4gYWZ0ZXJcbi8vIGluaXRpYWxpemF0aW9uLlxuLy9cbm1peGtleShtYXRoLnJhbmRvbSgpLCBwb29sKTtcblxuLy9cbi8vIE5vZGVqcyBhbmQgQU1EIHN1cHBvcnQ6IGV4cG9ydCB0aGUgaW1wbGVtZW50YXRpb24gYXMgYSBtb2R1bGUgdXNpbmdcbi8vIGVpdGhlciBjb252ZW50aW9uLlxuLy9cbmlmICgodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBzZWVkcmFuZG9tO1xuICAvLyBXaGVuIGluIG5vZGUuanMsIHRyeSB1c2luZyBjcnlwdG8gcGFja2FnZSBmb3IgYXV0b3NlZWRpbmcuXG4gIHRyeSB7XG4gICAgbm9kZWNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICB9IGNhdGNoIChleCkge31cbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBzZWVkcmFuZG9tOyB9KTtcbn1cblxuLy8gRW5kIGFub255bW91cyBzY29wZSwgYW5kIHBhc3MgaW5pdGlhbCB2YWx1ZXMuXG59KShcbiAgW10sICAgICAvLyBwb29sOiBlbnRyb3B5IHBvb2wgc3RhcnRzIGVtcHR5XG4gIE1hdGggICAgLy8gbWF0aDogcGFja2FnZSBjb250YWluaW5nIHJhbmRvbSwgcG93LCBhbmQgc2VlZHJhbmRvbVxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTtcbn07XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiZW51bSBDb2xvciB7XG4gIEJMQUNLLFxuICBCTFVFLFxuICBHUkVFTixcbiAgQ1lBTixcbiAgUkVELFxuICBNQUdFTlRBLFxuICBZRUxMT1csXG4gIFdISVRFLFxufVxuZXhwb3J0IGRlZmF1bHQgQ29sb3I7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb2xvcnMoYTogQ29sb3IsIGI6IENvbG9yKSB7XG4gIHJldHVybiBhIHwgYjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9SR0JTdHJpbmcoY29sb3I6IENvbG9yKSB7XG4gIGNvbnN0IHIgPSA0ID09PSAoNCAmIGNvbG9yKSA/IDI1NSA6IDA7XG4gIGNvbnN0IGcgPSAyID09PSAoMiAmIGNvbG9yKSA/IDI1NSA6IDA7XG4gIGNvbnN0IGIgPSAxID09PSAoMSAmIGNvbG9yKSA/IDI1NSA6IDA7XG4gIHJldHVybiBgcmdiKCR7cn0sJHtnfSwke2J9KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvTmFtZShjb2xvcjogQ29sb3IpIHtcbiAgcmV0dXJuIENvbG9yW2NvbG9yXTtcbn1cbiIsImVudW0gRGlyZWN0aW9uIHtcbiAgTk9SVEgsXG4gIEVBU1QsXG4gIFNPVVRILFxuICBXRVNULFxuICBOT05FLFxuICBTUExJVF9FQVNUX1dFU1QsXG4gIFNQTElUX05PUlRIX1NPVVRILFxufVxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uO1xuXG5jb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IFtEaXJlY3Rpb24uU09VVEgsIERpcmVjdGlvbi5XRVNULCBEaXJlY3Rpb24uTk9SVEgsIERpcmVjdGlvbi5FQVNUXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9wcG9zaXRlRGlyZWN0aW9uKGRpcjogRGlyZWN0aW9uKSB7XG4gIGNvbnN0IG9wcERpciA9IG9wcG9zaXRlRGlyZWN0aW9uW2Rpcl07XG4gIHJldHVybiBvcHBEaXIgPT09IHVuZGVmaW5lZCA/IERpcmVjdGlvbi5OT05FIDogb3BwRGlyO1xufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL0NvbG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBFbmRpbmcge1xuICByZWFkb25seSBlbmQ6IEVuZDtcbiAgcmVhZG9ubHkgY29sb3I6IENvbG9yO1xufVxuXG5leHBvcnQgZW51bSBFbmQge1xuICBCbG9ja2VkID0gLTIsXG4gIExvb3AsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRpbmdzRXF1YWwoYTogRW5kaW5nLCBiOiBFbmRpbmcpIHtcbiAgcmV0dXJuIGEuZW5kID09PSBiLmVuZCAmJiBhLmNvbG9yID09PSBiLmNvbG9yO1xufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL0NvbG9yXCI7XG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuL0RpcmVjdGlvblwiO1xuaW1wb3J0IEVuZGluZywgeyBFbmQgfSBmcm9tIFwiLi9FbmRpbmdcIjtcbmltcG9ydCBMYXNlclNlZ21lbnQgZnJvbSBcIi4vTGFzZXJTZWdtZW50XCI7XG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9QYXRoXCI7XG5pbXBvcnQgUGllY2VJRCwgeyBhcHBseVBpZWNlVG9MYXNlciB9IGZyb20gXCIuL1BpZWNlSURcIjtcbmltcG9ydCBUaWxlLCB7IG5leHRUaWxlLCB0aWxlV2l0aGluQXJlYUV4Y2x1c2l2ZSB9IGZyb20gXCIuL1RpbGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHcmlkUGllY2Uge1xuICByZWFkb25seSBwaWVjZUlEOiBQaWVjZUlEO1xuICB0aWxlOiBUaWxlO1xuICByZWFkb25seSBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgTGFzZXJHcmlkIHtcbiAgcGF0aHM6IFBhdGhbXTtcbiAgcmVhZG9ubHkgZ3JpZDogKEdyaWRQaWVjZSB8IHVuZGVmaW5lZClbXVtdO1xuICByZWFkb25seSBsZW5ndGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEZWZhdWx0R3JpZCgpOiBMYXNlckdyaWQge1xuICBjb25zdCBncmlkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgZ3JpZFtpXSA9IFtdO1xuICB9XG4gIGNvbnN0IG5ld0dyaWQgPSB7XG4gICAgcGF0aHM6IFtdIGFzIFBhdGhbXSxcbiAgICBncmlkOiBncmlkIGFzIEdyaWRQaWVjZVtdW10sXG4gICAgbGVuZ3RoOiA1LCB3aWR0aDogNSxcbiAgfTtcbiAgY2FsY3VsYXRlQWxsRW5kaW5ncyhuZXdHcmlkKTtcbiAgcmV0dXJuIG5ld0dyaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWxlVG9FZGdlTnVtYmVyKHRpbGU6IFRpbGUpIHtcbiAgY29uc3QgeCA9IHRpbGUueDtcbiAgY29uc3QgeSA9IHRpbGUueTtcbiAgaWYgKHkgPT09IC0xICYmIHggPiAtMSAmJiB4IDwgNSkge1xuICAgIHJldHVybiAxICsgeDtcbiAgfSBlbHNlIGlmICh4ID09PSA1ICYmIHkgPiAtMSAmJiB5IDwgNSkge1xuICAgIHJldHVybiA2ICsgeTtcbiAgfSBlbHNlIGlmICh5ID09PSA1ICYmIHggPiAtMSAmJiB4IDwgNSkge1xuICAgIHJldHVybiAxNSAtIHg7XG4gIH0gZWxzZSBpZiAoeCA9PT0gLTEgJiYgeSA+IC0xICYmIHkgPCA1KSB7XG4gICAgcmV0dXJuIDIwIC0geTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkZ2VOdW1iZXJUb0xhc2VyKGVkZ2U6IG51bWJlcik6IExhc2VyU2VnbWVudCB7XG4gIGlmIChlZGdlIDwgNikge1xuICAgIHJldHVybiB7IHRpbGU6IHsgeDogZWRnZSAtIDEsIHk6IC0xIH0sIGRpcjogRGlyZWN0aW9uLlNPVVRILCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcbiAgfSBlbHNlIGlmIChlZGdlIDwgMTEpIHtcbiAgICByZXR1cm4geyB0aWxlOiB7IHg6IDUsIHk6IGVkZ2UgLSA2IH0sIGRpcjogRGlyZWN0aW9uLldFU1QsIGNvbG9yOiBDb2xvci5CTEFDSyB9O1xuICB9IGVsc2UgaWYgKGVkZ2UgPCAxNikge1xuICAgIHJldHVybiB7IHRpbGU6IHsgeDogLWVkZ2UgKyAxNSwgeTogNSB9LCBkaXI6IERpcmVjdGlvbi5OT1JUSCwgY29sb3I6IENvbG9yLkJMQUNLIH07XG4gIH0gZWxzZSBpZiAoZWRnZSA8IDIxKSB7XG4gICAgcmV0dXJuIHsgdGlsZTogeyB4OiAtMSwgeTogLWVkZ2UgKyAyMCB9LCBkaXI6IERpcmVjdGlvbi5FQVNULCBjb2xvcjogQ29sb3IuQkxBQ0sgfTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgRWRnZVwiKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGllY2VGcm9tR3JpZChsYXNlckdyaWQ6IExhc2VyR3JpZCwgdGlsZTogVGlsZSkge1xuICBpZiAobGFzZXJHcmlkLmdyaWRbdGlsZS55XSkge1xuICAgIHJldHVybiBsYXNlckdyaWQuZ3JpZFt0aWxlLnldW3RpbGUueF07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRTcGFjZShsYXNlckdyaWQ6IExhc2VyR3JpZCwgdGlsZTogVGlsZSkge1xuICByZXR1cm4gdGlsZVdpdGhpbkFyZWFFeGNsdXNpdmUodGlsZSwgeyB4OiAtMSwgeTogLTEgfSwgeyB4OiBsYXNlckdyaWQud2lkdGgsIHk6IGxhc2VyR3JpZC5sZW5ndGggfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQaWVjZUZyb21HcmlkKGxhc2VyR3JpZDogTGFzZXJHcmlkLCBwaWVjZTogR3JpZFBpZWNlKTogR3JpZFBpZWNlIHtcbiAgbGFzZXJHcmlkLmdyaWRbcGllY2UudGlsZS55XVtwaWVjZS50aWxlLnhdID0gdW5kZWZpbmVkO1xuICBwaWVjZS50aWxlID0geyB4OiAtMSwgeTogLTEgfTtcbiAgY2FsY3VsYXRlQWxsRW5kaW5ncyhsYXNlckdyaWQpO1xuICByZXR1cm4gcGllY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQaWVjZUluR3JpZChsYXNlckdyaWQ6IExhc2VyR3JpZCwgcGllY2U6IEdyaWRQaWVjZSwgdGlsZTogVGlsZSk6IEdyaWRQaWVjZSB8IHVuZGVmaW5lZCB7XG4gIGlmIChpc1ZhbGlkU3BhY2UobGFzZXJHcmlkLCBwaWVjZS50aWxlKSkge1xuICAgIGxhc2VyR3JpZC5ncmlkW3BpZWNlLnRpbGUueV1bcGllY2UudGlsZS54XSA9IHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBjdXJyZW50UGllY2UgPSBnZXRQaWVjZUZyb21HcmlkKGxhc2VyR3JpZCwgdGlsZSk7XG4gIGxldCByZW1vdmVkUGllY2UgPSB1bmRlZmluZWQ7XG4gIGlmIChjdXJyZW50UGllY2UpIHtcbiAgICByZW1vdmVkUGllY2UgPSByZW1vdmVQaWVjZUZyb21HcmlkKGxhc2VyR3JpZCwgY3VycmVudFBpZWNlKTtcbiAgfVxuICBwaWVjZS50aWxlID0gdGlsZTtcbiAgbGFzZXJHcmlkLmdyaWRbdGlsZS55XVt0aWxlLnhdID0gcGllY2U7XG4gIGNhbGN1bGF0ZUFsbEVuZGluZ3MobGFzZXJHcmlkKTtcbiAgcmV0dXJuIHJlbW92ZWRQaWVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFsbEVuZGluZ3MobGFzZXJHcmlkOiBMYXNlckdyaWQpIHtcbiAgY29uc3QgZW5kaW5nczogUGF0aFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgIGVuZGluZ3NbaV0gPSB7IHN0YXJ0OiBpICsgMSwgZW5kaW5nczogY2FsY3VsYXRlRW5kaW5nTGlzdChsYXNlckdyaWQsIGkgKyAxKSB9O1xuICB9XG4gIGxhc2VyR3JpZC5wYXRocyA9IGVuZGluZ3M7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVuZGluZ0xpc3QobGFzZXJHcmlkOiBMYXNlckdyaWQsIGVkZ2U6IG51bWJlcikge1xuICBjb25zdCBlbmRpbmdMaXN0OiBFbmRpbmdbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIHRyYWNrT25lRW5kaW5nKGdyaWQ6IExhc2VyR3JpZCwgbGFzZXI6IExhc2VyU2VnbWVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGxhc2VyLnRpbGUgPSBuZXh0VGlsZShsYXNlci50aWxlLCBsYXNlci5kaXIpO1xuICAgICAgaWYgKCFpc1ZhbGlkU3BhY2UoZ3JpZCwgbGFzZXIudGlsZSkpIHtcbiAgICAgICAgY29uc3QgZW5kRWRnZSA9IHRpbGVUb0VkZ2VOdW1iZXIobGFzZXIudGlsZSk7XG4gICAgICAgIGVuZGluZ0xpc3QucHVzaCh7IGVuZDogZW5kRWRnZSwgY29sb3I6IGxhc2VyLmNvbG9yIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwaWVjZSA9IGdldFBpZWNlRnJvbUdyaWQoZ3JpZCwgbGFzZXIudGlsZSk7XG4gICAgICBpZiAocGllY2UpIHtcbiAgICAgICAgYXBwbHlQaWVjZVRvTGFzZXIobGFzZXIsIHBpZWNlLnBpZWNlSUQpO1xuICAgICAgICBzd2l0Y2ggKGxhc2VyLmRpcikge1xuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLlNQTElUX05PUlRIX1NPVVRIOlxuICAgICAgICAgICAgbGFzZXIuZGlyID0gRGlyZWN0aW9uLk5PUlRIO1xuICAgICAgICAgICAgdHJhY2tPbmVFbmRpbmcoZ3JpZCwgeyB0aWxlOiBsYXNlci50aWxlLCBkaXI6IERpcmVjdGlvbi5TT1VUSCwgY29sb3I6IGxhc2VyLmNvbG9yIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBEaXJlY3Rpb24uU1BMSVRfRUFTVF9XRVNUOlxuICAgICAgICAgICAgbGFzZXIuZGlyID0gRGlyZWN0aW9uLkVBU1Q7XG4gICAgICAgICAgICB0cmFja09uZUVuZGluZyhncmlkLCB7IHRpbGU6IGxhc2VyLnRpbGUsIGRpcjogRGlyZWN0aW9uLldFU1QsIGNvbG9yOiBsYXNlci5jb2xvciB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLk5PTkU6XG4gICAgICAgICAgICBlbmRpbmdMaXN0LnB1c2goeyBlbmQ6IEVuZC5CbG9ja2VkLCBjb2xvcjogbGFzZXIuY29sb3IgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gaWYgcGllY2UgaXMgbm90IG51bGxcbiAgICB9IC8vIGZvclxuICAgIGVuZGluZ0xpc3QucHVzaCh7IGVuZDogRW5kLkxvb3AsIGNvbG9yOiBsYXNlci5jb2xvciB9KTtcbiAgfSAvLyB0cmFja09uZUVuZGluZygpXG5cbiAgdHJhY2tPbmVFbmRpbmcobGFzZXJHcmlkLCBlZGdlTnVtYmVyVG9MYXNlcihlZGdlKSk7XG4gIGVuZGluZ0xpc3Quc29ydCgoYSwgYikgPT4gYS5lbmQgPCBiLmVuZCA/IC0xIDogMSk7XG4gIHJldHVybiBlbmRpbmdMaXN0O1xufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL0NvbG9yXCI7XG5pbXBvcnQgRGlyZWN0aW9uLCB7IGdldE9wcG9zaXRlRGlyZWN0aW9uIH0gZnJvbSBcIi4vRGlyZWN0aW9uXCI7XG5pbXBvcnQgVGlsZSwgeyBjb3B5VGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIExhc2VyU2VnbWVudCB7XG4gIHRpbGU6IFRpbGU7XG4gIGRpcjogRGlyZWN0aW9uO1xuICBjb2xvcjogQ29sb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcHBvc2l0ZUxhc2VyU2VnbWVudChsYXNlcjogTGFzZXJTZWdtZW50KTogTGFzZXJTZWdtZW50IHtcbiAgcmV0dXJuIHsgdGlsZTogY29weVRpbGUobGFzZXIudGlsZSksIGRpcjogZ2V0T3Bwb3NpdGVEaXJlY3Rpb24obGFzZXIuZGlyKSwgY29sb3I6IGxhc2VyLmNvbG9yIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5TGFzZXJTZWdtZW50KGxhc2VyOiBMYXNlclNlZ21lbnQpOiBMYXNlclNlZ21lbnQge1xuICByZXR1cm4geyB0aWxlOiBjb3B5VGlsZShsYXNlci50aWxlKSwgZGlyOiBsYXNlci5kaXIsIGNvbG9yOiBsYXNlci5jb2xvciB9O1xufVxuIiwiaW1wb3J0IFBhdGgsIHsgZXF1YWxQYXRocyB9IGZyb20gXCIuL1BhdGhcIjtcbmltcG9ydCAqIGFzIHNlZWRyYW5kb20gZnJvbSBcInNlZWRyYW5kb21cIjtcbmltcG9ydCB7IEdyaWRQaWVjZSwgZ2V0UGllY2VGcm9tR3JpZCwgc2V0UGllY2VJbkdyaWQsIG1ha2VEZWZhdWx0R3JpZCB9IGZyb20gXCIuL0xhc2VyR3JpZFwiO1xuaW1wb3J0IFRpbGUgZnJvbSBcIi4vVGlsZVwiO1xuXG5jb25zdCBkZWZhdWx0R3JpZCA9IG1ha2VEZWZhdWx0R3JpZCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVMZXZlbChzZWVkID0gRGF0ZS5ub3coKS50b1N0cmluZygpLCBudW1QYXRocyA9IDUpIHtcbiAgY29uc3Qgcm5nID0gc2VlZHJhbmRvbShzZWVkKTtcblxuICBjb25zdCBpbnRlcmVzdGluZ1BhdGhzOiBQYXRoW10gPSBbXTtcbiAgY29uc3QgYm9yaW5nUGF0aHM6IFBhdGhbXSA9IFtdO1xuXG4gIGNvbnN0IGF2YWlsYWJsZVBpZWNlczogR3JpZFBpZWNlW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGF2YWlsYWJsZVBpZWNlc1tpXSA9IHsgcGllY2VJRDogTWF0aC5mbG9vcihybmcoKSAqIDgpLCB0aWxlOiB7IHg6IC0xLCB5OiAtMSB9LCBpbmRleDogaSB9O1xuICB9XG5cbiAgY29uc3QgcmFuZG9tR3JpZCA9IG1ha2VEZWZhdWx0R3JpZCgpO1xuXG4gIGF2YWlsYWJsZVBpZWNlcy5mb3JFYWNoKChwaWVjZTogR3JpZFBpZWNlKSA9PiB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHJhbmRUaWxlOiBUaWxlID0geyB4OiBNYXRoLmZsb29yKHJuZygpICogNSksIHk6IE1hdGguZmxvb3Iocm5nKCkgKiA1KSB9O1xuICAgICAgaWYgKCFnZXRQaWVjZUZyb21HcmlkKHJhbmRvbUdyaWQsIHJhbmRUaWxlKSkge1xuICAgICAgICBzZXRQaWVjZUluR3JpZChyYW5kb21HcmlkLCBwaWVjZSwgcmFuZFRpbGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGdyaWRQYXRocyA9IHJhbmRvbUdyaWQucGF0aHM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkUGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWVxdWFsUGF0aHMoZ3JpZFBhdGhzW2ldLCBkZWZhdWx0R3JpZC5wYXRoc1tpXSkpIHtcbiAgICAgIGludGVyZXN0aW5nUGF0aHMucHVzaChncmlkUGF0aHNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3JpbmdQYXRocy5wdXNoKGdyaWRQYXRoc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gc2h1ZmZsZSBjbGVhbnNlZEVuZGluZ3NcbiAgc2h1ZmZsZShpbnRlcmVzdGluZ1BhdGhzLCBybmcpO1xuXG4gIGxldCByYW5kb21QYXRoczogUGF0aFtdID0gaW50ZXJlc3RpbmdQYXRocy5zbGljZSgwLCBudW1QYXRocyk7XG5cbiAgaWYgKHJhbmRvbVBhdGhzLmxlbmd0aCA8IG51bVBhdGhzKSB7XG4gICAgc2h1ZmZsZShib3JpbmdQYXRocywgcm5nKTtcbiAgICByYW5kb21QYXRocyA9IHJhbmRvbVBhdGhzLmNvbmNhdChib3JpbmdQYXRocy5zbGljZSgwLCBudW1QYXRocyAtIHJhbmRvbVBhdGhzLmxlbmd0aCkpO1xuICB9XG5cbiAgcmFuZG9tUGF0aHMuc29ydCgoYSwgYikgPT4gYS5zdGFydCA8IGIuc3RhcnQgPyAtMSA6IDEpO1xuXG4gIGZvciAoY29uc3QgcGllY2Ugb2YgYXZhaWxhYmxlUGllY2VzKSB7XG4gICAgcGllY2UudGlsZSA9IHsgeDogLTEsIHk6IC0xIH07XG4gIH1cblxuICByZXR1cm4geyBwYXRoczogcmFuZG9tUGF0aHMsIGF2YWlsYWJsZVBpZWNlcyB9O1xufVxuXG5mdW5jdGlvbiBzaHVmZmxlKHBhdGhzOiBQYXRoW10sIHJuZzogYW55KSB7XG4gIGxldCBtID0gcGF0aHMubGVuZ3RoO1xuICBsZXQgdDogUGF0aDsgbGV0IGk6IG51bWJlcjtcbiAgd2hpbGUgKG0pIHtcbiAgICBpID0gTWF0aC5mbG9vcihybmcoKSAqIG0tLSk7XG5cbiAgICB0ID0gcGF0aHNbbV07XG4gICAgcGF0aHNbbV0gPSBwYXRoc1tpXTtcbiAgICBwYXRoc1tpXSA9IHQ7XG4gIH1cbn0iLCJlbnVtIExldmVsVHlwZSB7XG4gIERhaWx5LFxuICBTZWVkLFxuICBDdXN0b20sXG59XG5cbmV4cG9ydCBkZWZhdWx0IExldmVsVHlwZTtcbiIsImltcG9ydCBFbmRpbmcsIHtlbmRpbmdzRXF1YWx9IGZyb20gXCIuL0VuZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgUGF0aCB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZGluZ3M6IEVuZGluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxQYXRocyhhOiBQYXRoLCBiOiBQYXRoKSB7XG4gIGlmIChhLmVuZGluZ3MubGVuZ3RoICE9PSBiLmVuZGluZ3MubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5lbmRpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFlbmRpbmdzRXF1YWwoYS5lbmRpbmdzW2ldLCBiLmVuZGluZ3NbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IENvbG9yLCAqIGFzIGNvbG9yTWFuYWdlciBmcm9tIFwiLi9Db2xvclwiO1xuaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi9EaXJlY3Rpb25cIjtcbmltcG9ydCBMYXNlclNlZ21lbnQgZnJvbSBcIi4vTGFzZXJTZWdtZW50XCI7XG5cbmVudW0gUGllY2VJRCB7XG4gIEZPUldBUkRfU0xBU0gsXG4gIEJBQ0tfU0xBU0gsXG4gIEJMQUNLX0hPTEUsXG4gIEhPUklfU1BMSVQsXG4gIFZFUlRfU1BMSVQsXG5cbiAgUkVELFxuICBCTFVFLFxuICBHUkVFTixcbn1cbmV4cG9ydCBkZWZhdWx0IFBpZWNlSUQ7XG5cbmludGVyZmFjZSBQaWVjZVJ1bGUge1xuICBkaXJzPzogRGlyZWN0aW9uW107XG4gIGNvbG9yPzogQ29sb3I7XG59XG5cbmNvbnN0IHBpZWNlUnVsZUxpc3Q6IFJlYWRvbmx5QXJyYXk8UGllY2VSdWxlPiA9IFtcbiAgeyBkaXJzOiBbRGlyZWN0aW9uLkVBU1QsIERpcmVjdGlvbi5OT1JUSCwgRGlyZWN0aW9uLldFU1QsIERpcmVjdGlvbi5TT1VUSF0gfSxcbiAgeyBkaXJzOiBbRGlyZWN0aW9uLldFU1QsIERpcmVjdGlvbi5TT1VUSCwgRGlyZWN0aW9uLkVBU1QsIERpcmVjdGlvbi5OT1JUSF0gfSxcbiAgeyBkaXJzOiBbRGlyZWN0aW9uLk5PTkUsIERpcmVjdGlvbi5OT05FLCBEaXJlY3Rpb24uTk9ORSwgRGlyZWN0aW9uLk5PTkVdIH0sXG4gIHsgZGlyczogW0RpcmVjdGlvbi5FQVNULCBEaXJlY3Rpb24uTk9ORSwgRGlyZWN0aW9uLkVBU1QsIERpcmVjdGlvbi5TUExJVF9OT1JUSF9TT1VUSF0gfSxcbiAgeyBkaXJzOiBbRGlyZWN0aW9uLk5PTkUsIERpcmVjdGlvbi5OT1JUSCwgRGlyZWN0aW9uLlNQTElUX0VBU1RfV0VTVCwgRGlyZWN0aW9uLk5PUlRIXSB9LFxuXG4gIHsgY29sb3I6IENvbG9yLlJFRCB9LFxuICB7IGNvbG9yOiBDb2xvci5CTFVFIH0sXG4gIHsgY29sb3I6IENvbG9yLkdSRUVOIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQaWVjZVRvTGFzZXIobGFzZXI6IExhc2VyU2VnbWVudCwgcGllY2VJRDogUGllY2VJRCkge1xuICBjb25zdCBwaWVjZVJ1bGVzID0gcGllY2VSdWxlTGlzdFtwaWVjZUlEXTtcbiAgaWYgKHBpZWNlUnVsZXMuZGlycykge1xuICAgIGxhc2VyLmRpciA9IHBpZWNlUnVsZXMuZGlyc1tsYXNlci5kaXJdO1xuICB9XG4gIGlmIChwaWVjZVJ1bGVzLmNvbG9yKSB7XG4gICAgbGFzZXIuY29sb3IgPSBjb2xvck1hbmFnZXIuYWRkQ29sb3JzKGxhc2VyLmNvbG9yLCBwaWVjZVJ1bGVzLmNvbG9yKTtcbiAgfVxuICByZXR1cm4gbGFzZXI7XG59XG4iLCJpbXBvcnQgRGlyZWN0aW9uIGZyb20gXCIuL0RpcmVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgVGlsZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aW9uVG9UaWxlKGRpcmVjdGlvbjogRGlyZWN0aW9uKTogVGlsZSB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBEaXJlY3Rpb24uTk9SVEg6XG4gICAgICByZXR1cm4geyB4OiAwLCB5OiAtMSB9O1xuICAgIGNhc2UgRGlyZWN0aW9uLkVBU1Q6XG4gICAgICByZXR1cm4geyB4OiAxLCB5OiAwIH07XG4gICAgY2FzZSBEaXJlY3Rpb24uU09VVEg6XG4gICAgICByZXR1cm4geyB4OiAwLCB5OiAxIH07XG4gICAgY2FzZSBEaXJlY3Rpb24uV0VTVDpcbiAgICAgIHJldHVybiB7IHg6IC0xLCB5OiAwIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dFRpbGUodGlsZTogVGlsZSwgZGlyOiBEaXJlY3Rpb24pIHtcbiAgcmV0dXJuIGFkZFRpbGVzKHRpbGUsIGRpcmVjdGlvblRvVGlsZShkaXIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRpbGVzKC4uLnRpbGVzOiBUaWxlW10pOiBUaWxlIHtcbiAgcmV0dXJuIHRpbGVzLnJlZHVjZSgocCwgdiwgXykgPT4ge1xuICAgIHJldHVybiB7eDogcC54ICsgdi54LCB5OiBwLnkgKyB2Lnl9O1xuICB9LCB7eDogMCwgeTogMH0gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YlRpbGVzKGE6IFRpbGUsIGI6IFRpbGUpOiBUaWxlIHtcbiAgcmV0dXJuIHsgeDogYS54IC0gYi54LCB5OiBhLnkgLSBiLnkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUaWxlKHRpbGU6IFRpbGUpOiBUaWxlIHtcbiAgcmV0dXJuIHsgeDogdGlsZS54LCB5OiB0aWxlLnkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVOb3ROZWdhdGl2ZSh0aWxlOiBUaWxlKSB7XG4gIHJldHVybiB0aWxlQ29tcGFyZSh0aWxlLCB7IHg6IC0xLCB5OiAtMSB9LCAoYSwgYikgPT4gYSA+IGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlsZUNvbXBhcmUoYTogVGlsZSwgYjogVGlsZSwgY29tcGFyZTogKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBib29sZWFuKSB7XG4gIHJldHVybiBjb21wYXJlKGEueCwgYi54KSAmJiBjb21wYXJlKGEueSAsIGIueSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWxlV2l0aGluQXJlYUluY2x1c2l2ZSh0aWxlOiBUaWxlLCBtaW46IFRpbGUsIG1heDogVGlsZSkge1xuICByZXR1cm4gdGlsZUNvbXBhcmUodGlsZSwgbWluLCAoYSwgYikgPT4gYSA+PSBiKSAmJiB0aWxlQ29tcGFyZSh0aWxlLCBtYXgsIChhLCBiKSA9PiBhIDw9IGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlsZVdpdGhpbkFyZWFFeGNsdXNpdmUodGlsZTogVGlsZSwgbWluOiBUaWxlLCBtYXg6IFRpbGUpIHtcbiAgcmV0dXJuIHRpbGVDb21wYXJlKHRpbGUsIG1pbiwgKGEsIGIpID0+IGEgPiBiKSAmJiB0aWxlQ29tcGFyZSh0aWxlLCBtYXgsIChhLCBiKSA9PiBhIDwgYik7XG59XG4iLCJpbXBvcnQge2NvbG9yVG9OYW1lfSBmcm9tIFwiLi4vQ29sb3JcIjtcbmltcG9ydCBFbmRpbmcsIHtFbmR9IGZyb20gXCIuLi9FbmRpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZGluZ1RvU3RyaW5nKGVuZGluZzogRW5kaW5nKSB7XG4gIGNvbnN0IGNvbG9yU3RyaW5nID0gY29sb3JUb05hbWUoZW5kaW5nLmNvbG9yKTtcbiAgcmV0dXJuIGVuZGluZy5lbmQgPT09IEVuZC5CbG9ja2VkID8gYGJsb2NrZWQgJHtjb2xvclN0cmluZ31gIDpcbiAgICBlbmRpbmcuZW5kID09PSBFbmQuTG9vcCA/IGBsb29wICR7Y29sb3JTdHJpbmd9YCA6XG4gICAgYCR7ZW5kaW5nLmVuZH0gJHtjb2xvclN0cmluZ31gO1xufVxuIiwiaW1wb3J0IHsgY2FsY3VsYXRlQWxsRW5kaW5ncywgR3JpZFBpZWNlIH0gZnJvbSBcIi4uL0xhc2VyR3JpZFwiO1xuaW1wb3J0IExldmVsVHlwZSBmcm9tIFwiLi4vTGV2ZWxUeXBlXCI7XG5pbXBvcnQgUGF0aCwgeyBlcXVhbFBhdGhzIH0gZnJvbSBcIi4uL1BhdGhcIjtcbmltcG9ydCBQaWVjZUlEIGZyb20gXCIuLi9QaWVjZUlEXCI7XG5pbXBvcnQgTGFzZXJHcmlkQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvTGFzZXJHcmlkQ29tcG9uZW50XCI7XG5pbXBvcnQgUGllY2VDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9QaWVjZUNvbXBvbmVudFwiO1xuaW1wb3J0IFRvb2xiYXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub29sYmFyQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBwYXRoVG9TdHJpbmcgfSBmcm9tIFwiLi9Gcm9udGVuZFBhdGhcIjtcbmltcG9ydCB7IGNhbnZhcywgY3R4LCBwYXRoc1ByZSwgdmljdG9yeVAsIHNlZWRMZXZlbEJ1dHRvbiwgc2VlZElucHV0LCBlZGdlc0lucHV0LCBkYWlseUxldmVsQnV0dG9uIH0gZnJvbSBcIi4vSFRNTEVsZW1lbnRzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUxldmVsIH0gZnJvbSBcIi4uL0xldmVsR2VuZXJhdG9yXCI7XG5pbXBvcnQgc2VlZHJhbmRvbSA9IHJlcXVpcmUoXCJzZWVkcmFuZG9tXCIpO1xuXG5leHBvcnQgY29uc3QgdG9vbGJhciA9IG5ldyBUb29sYmFyQ29tcG9uZW50KFwiLi90b29sYmFyLnBuZ1wiLCB7IHg6IDAsIHk6IDcgfSwgOCwgMSwgZHJhdyk7XG5leHBvcnQgY29uc3QgbGFzZXJncmlkQ29tcG9uZW50ID0gbmV3IExhc2VyR3JpZENvbXBvbmVudChcIi4vbGFzZXJncmlkLnBuZ1wiLCB7IHg6IDAsIHk6IDAgfSwgNywgNywgZHJhdyk7XG5cbmV4cG9ydCBjb25zdCBwaWVjZUNvbXBvbmVudHM6IFBpZWNlQ29tcG9uZW50W10gPSBbXTtcblxubGV0IGN1cnJlbnRMZXZlbDogUGF0aFtdO1xuZXhwb3J0IGxldCBhdmFpbGFibGVQaWVjZXM6IEdyaWRQaWVjZVtdID0gW107XG5leHBvcnQgbGV0IGVkZ2VMZXZlbERhdGE6IEFycmF5PHsgZWRnZTogbnVtYmVyLCBzb2x2ZWQ6IGJvb2xlYW4gfT47XG5sZXQgbGV2ZWxUeXBlOiBMZXZlbFR5cGUgPSBMZXZlbFR5cGUuQ3VzdG9tO1xuLy8gbGV0IGRpZmZpY3VsdHkgPSBcIm1lZGl1bVwiO1xuXG4vKipcbiAqIEluaXRzIHRoZSB0aGluZ3MgdGhhdCBhcmVuJ3QgY29uc3RhbnRzXG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uQ2xpY2soZSk7XG4gIH0pO1xuXG4gIHNlZWRMZXZlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VlZExldmVsKTtcbiAgZGFpbHlMZXZlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGFpbHlMZXZlbCk7XG5cbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuRk9SV0FSRF9TTEFTSF0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9taXJyb3JfZm9yd2FyZHNsYXNoLnBuZ1wiLCBkcmF3KTtcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuQkFDS19TTEFTSF0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9taXJyb3JfYmFja3NsYXNoLnBuZ1wiLCBkcmF3KTtcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuQkxBQ0tfSE9MRV0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9taXJyb3JfYmxhY2tob2xlLnBuZ1wiLCBkcmF3KTtcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuSE9SSV9TUExJVF0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9taXJyb3Jfc2lkZXNwbGl0LnBuZ1wiLCBkcmF3KTtcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuVkVSVF9TUExJVF0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9taXJyb3JfdXBzcGxpdC5wbmdcIiwgZHJhdyk7XG5cbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuQkxVRV0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9zd2F0Y2hfYmx1ZS5wbmdcIiwgZHJhdyk7XG4gIHBpZWNlQ29tcG9uZW50c1tQaWVjZUlELlJFRF0gPSBuZXcgUGllY2VDb21wb25lbnQoXCIuL3BpZWNlcy9zd2F0Y2hfcmVkLnBuZ1wiLCBkcmF3KTtcbiAgcGllY2VDb21wb25lbnRzW1BpZWNlSUQuR1JFRU5dID0gbmV3IFBpZWNlQ29tcG9uZW50KFwiLi9waWVjZXMvc3dhdGNoX2dyZWVuLnBuZ1wiLCBkcmF3KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGNvbnN0IHBpZWNlOiBHcmlkUGllY2UgPSB7IHBpZWNlSUQ6IGksIHRpbGU6IHsgeDogLTEsIHk6IC0xIH0sIGluZGV4OiBpIH07XG4gICAgYXZhaWxhYmxlUGllY2VzW2ldID0gcGllY2U7XG4gIH1cblxuICBjYWxjdWxhdGVBbGxFbmRpbmdzKGxhc2VyZ3JpZENvbXBvbmVudC5sYXNlcmdyaWQpO1xuICBwcmludFBhdGhzKCk7XG4gIGxhc2VyZ3JpZENvbXBvbmVudC5jYWxjdWxhdGVEcmF3UGF0aFdyYXBwZXIoKTtcbn1cblxuZnVuY3Rpb24gZHJhdygpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gXCIjOWM5YTliXCI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGxhc2VyZ3JpZENvbXBvbmVudC5kcmF3KGN0eCk7XG4gIHRvb2xiYXIuZHJhdyhjdHgpO1xufVxuXG5mdW5jdGlvbiBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gIGNvbnN0IGxvYyA9IHdpbmRvd1RvQ2FudmFzKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICBsYXNlcmdyaWRDb21wb25lbnQucHJvY2Vzc01vdXNlQ2xpY2sobG9jLngsIGxvYy55LCBldmVudC5idXR0b24pO1xuICB0b29sYmFyLnByb2Nlc3NNb3VzZUNsaWNrKGxvYy54LCBsb2MueSwgZXZlbnQuYnV0dG9uKTtcbiAgcHJpbnRQYXRocygpO1xuICBpZiAoY3VycmVudExldmVsICYmIGNoZWNrVmljdG9yeSgpKSB7XG4gICAgaWYgKGxldmVsVHlwZSA9PT0gTGV2ZWxUeXBlLlNlZWQpIHtcbiAgICAgIHZpY3RvcnlQLnRleHRDb250ZW50ID0gXCJZb3UgYmVhdCB0aGUgc2VlZCBsZXZlbCFcIjtcbiAgICB9IGVsc2UgaWYgKGxldmVsVHlwZSA9PT0gTGV2ZWxUeXBlLkRhaWx5KSB7XG4gICAgICB2aWN0b3J5UC50ZXh0Q29udGVudCA9IFwiV293ISBZb3UgYmVhdCB0aGUgZGFpbHkgbGV2ZWwhXCI7XG4gICAgfVxuICAgIHZpY3RvcnlQLmhpZGRlbiA9IGZhbHNlO1xuICB9XG4gIGRyYXcoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVFZGdlTGV2ZWxEYXRhKCkge1xuICBpZiAoY3VycmVudExldmVsKSB7XG4gICAgZWRnZUxldmVsRGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiBjdXJyZW50TGV2ZWwpIHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBwYXRoLnN0YXJ0O1xuICAgICAgbGV0IHNvbHZlZCA9IGZhbHNlO1xuICAgICAgaWYgKGVxdWFsUGF0aHMocGF0aCwgbGFzZXJncmlkQ29tcG9uZW50Lmxhc2VyZ3JpZC5wYXRoc1twYXRoLnN0YXJ0IC0gMV0pKSB7XG4gICAgICAgIHNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlZGdlTGV2ZWxEYXRhLnB1c2goeyBlZGdlLCBzb2x2ZWQgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmljdG9yeSgpOiBib29sZWFuIHtcbiAgZm9yIChjb25zdCBkYXRhIG9mIGVkZ2VMZXZlbERhdGEpIHtcbiAgICBpZiAoIWRhdGEuc29sdmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRQYXRocygpIHtcbiAgaWYgKGN1cnJlbnRMZXZlbCkge1xuICAgIHBvcHVsYXRlRWRnZUxldmVsRGF0YSgpO1xuICAgIHByaW50TGV2ZWxQYXRocygpO1xuICB9IGVsc2Uge1xuICAgIHByaW50QWxsUGF0aHMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludEFsbFBhdGhzKCkge1xuICBwYXRoc1ByZS5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBwYXRocyA9IGxhc2VyZ3JpZENvbXBvbmVudC5sYXNlcmdyaWQucGF0aHM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgIGNvbnN0IGN1clBhdGggPSBwYXRoc1tpXTtcbiAgICBsZXQgbGluZSA9IHBhdGhUb1N0cmluZyhjdXJQYXRoKTtcbiAgICBpZiAobGFzZXJncmlkQ29tcG9uZW50LnNlbGVjdGVkRWRnZSA9PT0gaSArIDEpIHtcbiAgICAgIGxpbmUgPSBgPjxiPiR7bGluZX08L2I+YDtcbiAgICB9XG4gICAgcGF0aHNQcmUuaW5uZXJIVE1MICs9IGxpbmU7XG4gICAgaWYgKGkgPCAxOSkge1xuICAgICAgcGF0aHNQcmUuaW5uZXJIVE1MICs9IFwiXFxuXCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50TGV2ZWxQYXRocygpIHtcbiAgcGF0aHNQcmUuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgcGF0aHMgPSBsYXNlcmdyaWRDb21wb25lbnQubGFzZXJncmlkLnBhdGhzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMZXZlbC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxldmVsUGF0aCA9IGN1cnJlbnRMZXZlbFtpXTtcbiAgICBjb25zdCBjdXJQYXRoID0gcGF0aHNbbGV2ZWxQYXRoLnN0YXJ0IC0gMV07XG4gICAgbGV0IGxpbmUgPSBwYXRoVG9TdHJpbmcobGV2ZWxQYXRoKTtcbiAgICBsaW5lID0gZXF1YWxQYXRocyhjdXJQYXRoLCBsZXZlbFBhdGgpID8gYDxzcGFuIHN0eWxlPSdjb2xvcjogZ3JlZW4nPiR7bGluZX08L3NwYW4+YFxuICAgICAgOiBgPHNwYW4gc3R5bGU9J2NvbG9yOiByZWQnPiR7bGluZX08L3NwYW4+YDtcbiAgICBpZiAobGFzZXJncmlkQ29tcG9uZW50LnNlbGVjdGVkRWRnZSA9PT0gbGV2ZWxQYXRoLnN0YXJ0KSB7XG4gICAgICBsaW5lID0gYD48Yj4ke2xpbmV9PC9iPmA7XG4gICAgfVxuICAgIHBhdGhzUHJlLmlubmVySFRNTCArPSBsaW5lO1xuXG4gICAgaWYgKGkgPCBjdXJyZW50TGV2ZWwubGVuZ3RoIC0gMSkge1xuICAgICAgcGF0aHNQcmUuaW5uZXJIVE1MICs9IFwiXFxuXCI7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHgsIHkgcGl4ZWwgY29vcmRpbmF0ZXMgZnJvbSB3aW5kb3cgcG9zaXRpb24gdG8gcmVsYXRpdmUgY2FudmFzIHBvc2l0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0geCBjbGllbnRYXG4gKiBAcGFyYW0ge251bWJlcn0geSBjbGllbnRZXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gYSByZWxhdGl2ZSBsb2NhdGlvbiB0byB0aGUgY2FudmFzXG4gKi9cbmZ1bmN0aW9uIHdpbmRvd1RvQ2FudmFzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gIGNvbnN0IGJib3ggPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB4IC0gYmJveC5sZWZ0ICogKGNhbnZhcy53aWR0aCAvIGJib3gud2lkdGgpLFxuICAgIHk6IHkgLSBiYm94LnRvcCAqIChjYW52YXMuaGVpZ2h0IC8gYmJveC5oZWlnaHQpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXROZXdMZXZlbChzZWVkOiBzdHJpbmcsIGVkZ2VzOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgbGFzZXJncmlkQ29tcG9uZW50LmNsZWFyKCk7XG4gIGNvbnN0IG5ld0xldmVsID0gZ2VuZXJhdGVMZXZlbChzZWVkLCBlZGdlcylcbiAgY3VycmVudExldmVsID0gW107XG4gIG5ld0xldmVsLnBhdGhzLmZvckVhY2gocCA9PiBjdXJyZW50TGV2ZWwucHVzaChwKSk7XG4gIGF2YWlsYWJsZVBpZWNlcyA9IG5ld0xldmVsLmF2YWlsYWJsZVBpZWNlcztcbiAgcHJpbnRQYXRocygpO1xuICBsYXNlcmdyaWRDb21wb25lbnQuY2FsY3VsYXRlRHJhd1BhdGhXcmFwcGVyKCk7XG4gIGRyYXcoKTtcbn1cblxuZnVuY3Rpb24gc2VlZExldmVsKCkge1xuICBsZXQgc2VlZCA9IHNlZWRJbnB1dC52YWx1ZTtcbiAgbGV0IGVkZ2VzOiBudW1iZXIgfCB1bmRlZmluZWQgPSBwYXJzZUludChlZGdlc0lucHV0LnZhbHVlKTtcblxuICBpZiAoc2VlZCA9PT0gXCJcIikge1xuICAgIHNlZWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBpZiAoaXNOYU4oZWRnZXMpIHx8IGVkZ2VzIDwgMSB8fCBlZGdlcyA+IDIwKSB7XG4gICAgZWRnZXMgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBsZXZlbFR5cGUgPSBMZXZlbFR5cGUuU2VlZDtcbiAgdmljdG9yeVAudGV4dENvbnRlbnQgPSBgQ3VycmVudGx5IHBsYXlpbmcgc2VlZDogJHtzZWVkfWBcblxuICBzZXROZXdMZXZlbChzZWVkLCBlZGdlcyk7XG59XG5cbmZ1bmN0aW9uIGRhaWx5TGV2ZWwoKSB7XG4gIGNvbnN0IHNlZWQgPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xuICBjb25zdCBybmcgPSBzZWVkcmFuZG9tKHNlZWQpO1xuICBjb25zdCBlZGdlcyA9IHJuZygpICogMTAgKyA1O1xuXG4gIGxldmVsVHlwZSA9IExldmVsVHlwZS5EYWlseTtcbiAgdmljdG9yeVAudGV4dENvbnRlbnQgPSBgQ3VycmVudGx5IHBsYXlpbmcgZGFpbHkgbGV2ZWw6ICR7c2VlZH1gXG4gIHNldE5ld0xldmVsKHNlZWQsIGVkZ2VzKTtcbn1cblxuaW5pdCgpO1xuIiwiaW1wb3J0IFBhdGggZnJvbSBcIi4uL1BhdGhcIjtcbmltcG9ydCB7ZW5kaW5nVG9TdHJpbmd9IGZyb20gXCIuL0Zyb250ZW5kRW5kaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoVG9TdHJpbmcocGF0aDogUGF0aCkge1xuICByZXR1cm4gc3RhcnRUb1N0cmluZyhwYXRoKSArIGVuZGluZ0xpc3RUb1N0cmluZyhwYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0VG9TdHJpbmcocGF0aDogUGF0aCkge1xuICBsZXQgc3RyID0gYCR7cGF0aC5zdGFydH1gO1xuICBpZiAocGF0aC5zdGFydCA8IDEwKSB7XG4gICAgc3RyICs9IFwiICAtPiBcIjtcbiAgfSBlbHNlIHtcbiAgICBzdHIgKz0gXCIgLT4gXCI7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZGluZ0xpc3RUb1N0cmluZyhwYXRoOiBQYXRoKSB7XG4gIGlmIChwYXRoLmVuZGluZ3MubGVuZ3RoID4gMSkge1xuICAgIGxldCBzdHIgPSBgeyR7ZW5kaW5nVG9TdHJpbmcocGF0aC5lbmRpbmdzWzBdKX0sIGA7XG4gICAgZm9yIChsZXQgY3VyRW5kaW5nID0gMTsgY3VyRW5kaW5nIDwgcGF0aC5lbmRpbmdzLmxlbmd0aCAtIDE7IGN1ckVuZGluZysrKSB7XG4gICAgICBzdHIgKz0gYCR7ZW5kaW5nVG9TdHJpbmcocGF0aC5lbmRpbmdzW2N1ckVuZGluZ10pfSwgYDtcbiAgICB9XG4gICAgc3RyICs9IGAke2VuZGluZ1RvU3RyaW5nKHBhdGguZW5kaW5nc1twYXRoLmVuZGluZ3MubGVuZ3RoIC0gMV0pfX1gO1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgcmV0dXJuIGVuZGluZ1RvU3RyaW5nKHBhdGguZW5kaW5nc1swXSk7XG59XG4iLCJpbXBvcnQgVGlsZSBmcm9tIFwiLi4vVGlsZVwiO1xuXG5leHBvcnQgY29uc3QgVElMRV9GVUxMID0gNTA7XG5leHBvcnQgY29uc3QgVElMRV9IQUxGID0gVElMRV9GVUxMIC8gMjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbGVGcm9tUGl4ZWxzKHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSB7XG4gIHJldHVybiB7eDogTWF0aC5mbG9vcih4IC8gVElMRV9GVUxMKSwgeTogTWF0aC5mbG9vcih5IC8gVElMRV9GVUxMKX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWxlVG9QaXhlbHModGlsZTogVGlsZSkge1xuICByZXR1cm4geyBweDogdGlsZS54ICogVElMRV9GVUxMLCBweTogdGlsZS55ICogVElMRV9GVUxMIH07XG59XG4iLCJleHBvcnQgY29uc3QgaW1wb3J0UHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBvcnRlZC1wcmVcIikgYXMgSFRNTFByZUVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcGF0aHNQcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdGhzLXByZVwiKSBhcyBIVE1MUHJlRWxlbWVudDtcbmV4cG9ydCBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhc2VyLWdhbWUtY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHZpY3RvcnlQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWN0b3J5LXBcIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBzZWVkTGV2ZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZWQtbGV2ZWxcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbmV4cG9ydCBjb25zdCBkYWlseUxldmVsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYWlseS1sZXZlbFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuZXhwb3J0IGNvbnN0IGVkZ2VzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkZ2VzXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5leHBvcnQgY29uc3Qgc2VlZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWVkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiIsImltcG9ydCBUaWxlLCB7c3ViVGlsZXMsIHRpbGVXaXRoaW5BcmVhRXhjbHVzaXZlfSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xuaW1wb3J0IHsgdGlsZUZyb21QaXhlbHMsIHRpbGVUb1BpeGVscyB9IGZyb20gXCIuLi9Gcm9udGVuZFRpbGVcIjtcblxuLyoqXG4gKiBBbiBhYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBzbWFsbGVyIHNlY3Rpb24gb2YgdGhlIGNhbnZhc1xuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDYW52YXNDb21wb25lbnQge1xuICBwdWJsaWMgdGlsZTogVGlsZTtcbiAgcHVibGljIHdpZHRoSW5UaWxlczogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0SW5UaWxlczogbnVtYmVyO1xuICBwdWJsaWMgb2Zmc2V0WDogbnVtYmVyO1xuICBwdWJsaWMgb2Zmc2V0WTogbnVtYmVyO1xuICBwcml2YXRlIGltZzogSFRNTEltYWdlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihzcmM6IHN0cmluZywgdGlsZTogVGlsZSwgd2lkdGhJblRpbGVzOiBudW1iZXIsIGhlaWdodEluVGlsZXM6IG51bWJlciwgZHJhdzogKCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKSB7XG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltZy5vbmxvYWQgPSAoKSA9PiB7IGRyYXcoKTsgfTtcbiAgICB0aGlzLmltZy5zcmMgPSBzcmM7XG4gICAgdGhpcy50aWxlID0gdGlsZTtcbiAgICB0aGlzLndpZHRoSW5UaWxlcyA9IHdpZHRoSW5UaWxlcztcbiAgICB0aGlzLmhlaWdodEluVGlsZXMgPSBoZWlnaHRJblRpbGVzO1xuICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XG4gICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3cyB0aGUgY29tcG9uZW50cyBpbWFnZSBhdCB0aGUgbG9jYXRpb25cbiAgICovXG4gIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgbG9jID0gdGlsZVRvUGl4ZWxzKHRoaXMudGlsZSk7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgbG9jLnB4ICsgdGhpcy5vZmZzZXRYLCBsb2MucHkgKyB0aGlzLm9mZnNldFkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpZ3VyZXMgb3V0IHdoZXRoZXIgYSBidXR0b24gcHJlc3MgaGFwcGVuZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgYW5kIHJldHVybnMgaXQuIElmIGl0IGRpZG4ndCwgcmV0dXJucyBudWxsLlxuICAgKi9cbiAgcHVibGljIHByb2Nlc3NNb3VzZUNsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyLCBfYnV0dG9uOiBudW1iZXIpIHtcbiAgICBjb25zdCByZWxhdGl2ZVRpbGUgPSBzdWJUaWxlcyh0aWxlRnJvbVBpeGVscyh4LCB5KSwgdGhpcy50aWxlKTtcbiAgICBpZiAodGlsZVdpdGhpbkFyZWFFeGNsdXNpdmUocmVsYXRpdmVUaWxlLCB7eDogLTEsIHk6IC0xfSwge3g6IHRoaXMud2lkdGhJblRpbGVzLCB5OiB0aGlzLmhlaWdodEluVGlsZXN9KSkge1xuICAgICAgcmV0dXJuIHJlbGF0aXZlVGlsZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbG9yVG9SR0JTdHJpbmcgfSBmcm9tIFwiLi4vLi4vQ29sb3JcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4uLy4uL0RpcmVjdGlvblwiO1xuaW1wb3J0IExhc2VyR3JpZCwgeyBlZGdlTnVtYmVyVG9MYXNlciwgZ2V0UGllY2VGcm9tR3JpZCwgbWFrZURlZmF1bHRHcmlkLCByZW1vdmVQaWVjZUZyb21HcmlkLCBzZXRQaWVjZUluR3JpZCwgdGlsZVRvRWRnZU51bWJlciB9IGZyb20gXCIuLi8uLi9MYXNlckdyaWRcIjtcbmltcG9ydCBMYXNlclNlZ21lbnQsIHsgY29weUxhc2VyU2VnbWVudCwgZ2V0T3Bwb3NpdGVMYXNlclNlZ21lbnQgfSBmcm9tIFwiLi4vLi4vTGFzZXJTZWdtZW50XCI7XG5pbXBvcnQgeyBhcHBseVBpZWNlVG9MYXNlciB9IGZyb20gXCIuLi8uLi9QaWVjZUlEXCI7XG5pbXBvcnQgVGlsZSwgeyBhZGRUaWxlcywgZGlyZWN0aW9uVG9UaWxlLCBuZXh0VGlsZSwgc3ViVGlsZXMsIHRpbGVXaXRoaW5BcmVhSW5jbHVzaXZlIH0gZnJvbSBcIi4uLy4uL1RpbGVcIjtcbmltcG9ydCB7IGF2YWlsYWJsZVBpZWNlcywgZWRnZUxldmVsRGF0YSwgcGllY2VDb21wb25lbnRzLCBwcmludFBhdGhzLCB0b29sYmFyIH0gZnJvbSBcIi4uL0Zyb250ZW5kTGFzZXJnYW1lXCI7XG5pbXBvcnQgeyB0aWxlVG9QaXhlbHMsIFRJTEVfRlVMTCwgVElMRV9IQUxGIH0gZnJvbSBcIi4uL0Zyb250ZW5kVGlsZVwiO1xuaW1wb3J0IENhbnZhc0NvbXBvbmVudCBmcm9tIFwiLi9DYW52YXNDb21wb25lbnRcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhc2VyR3JpZENvbXBvbmVudCBleHRlbmRzIENhbnZhc0NvbXBvbmVudCB7XG4gIHB1YmxpYyBsYXNlcmdyaWQ6IExhc2VyR3JpZDtcbiAgcHVibGljIHNlbGVjdGVkRWRnZTogbnVtYmVyO1xuICBwdWJsaWMgZHJhd1BhdGg6IExhc2VyU2VnbWVudFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNyYzogc3RyaW5nLCB0aWxlOiBUaWxlLCB3aWR0aEluVGlsZXM6IG51bWJlciwgaGVpZ2h0SW5UaWxlczogbnVtYmVyLCBkcmF3OiAoKSA9PiB2b2lkLFxuICAgIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCkge1xuICAgIHN1cGVyKHNyYywgdGlsZSwgd2lkdGhJblRpbGVzLCBoZWlnaHRJblRpbGVzLCBkcmF3LCBvZmZzZXRYLCBvZmZzZXRZKTtcblxuICAgIHRoaXMubGFzZXJncmlkID0gbWFrZURlZmF1bHRHcmlkKCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkRWRnZSA9IDE7XG4gICAgdGhpcy5kcmF3UGF0aCA9IFtdO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG5cbiAgICAvLyBEcmF3IHBpZWNlcyBvbiBncmlkXG4gICAgZm9yIChjb25zdCBwaWVjZSBvZiBhdmFpbGFibGVQaWVjZXMpIHtcbiAgICAgIGlmICgodGlsZVdpdGhpbkFyZWFJbmNsdXNpdmUocGllY2UudGlsZSwgeyB4OiAwLCB5OiAwIH0sIHsgeDogNCwgeTogNCB9KSkpIHtcbiAgICAgICAgcGllY2VDb21wb25lbnRzW3BpZWNlLnBpZWNlSURdLmRyYXdBdChhZGRUaWxlcyh0aGlzLnRpbGUsIHBpZWNlLnRpbGUsIHsgeDogMSwgeTogMSB9KSwgY3R4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEcmF3IGxhc2VyIHBhdGggb24gZ3JpZFxuICAgIGZvciAoY29uc3QgbGFzZXIgb2YgdGhpcy5kcmF3UGF0aCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JUb1JHQlN0cmluZyhsYXNlci5jb2xvcik7XG4gICAgICBjb25zdCBsb2MgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXMobGFzZXIudGlsZSwgeyB4OiAxLCB5OiAxIH0pKTtcbiAgICAgIGxvYy5weCArPSBUSUxFX0hBTEY7XG4gICAgICBsb2MucHkgKz0gVElMRV9IQUxGO1xuICAgICAgY3R4Lm1vdmVUbyhsb2MucHgsIGxvYy5weSk7XG4gICAgICBjb25zdCB0aWxlbWFwID0gZGlyZWN0aW9uVG9UaWxlKGxhc2VyLmRpcik7XG4gICAgICBjdHgubGluZVRvKGxvYy5weCArIHRpbGVtYXAueCAqIFRJTEVfSEFMRiwgbG9jLnB5ICsgdGlsZW1hcC55ICogVElMRV9IQUxGKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvLyBEcmF3IHNlbGVjdGVkIGVkZ2UgbWFya2VyIG9uIGdyaWRcbiAgICBsZXQgc2VsZWN0ZWRFZGdlUGl4ZWxzID0gdGlsZVRvUGl4ZWxzKGFkZFRpbGVzKGVkZ2VOdW1iZXJUb0xhc2VyKHRoaXMuc2VsZWN0ZWRFZGdlKS50aWxlLCB7IHg6IDEsIHk6IDEgfSkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI0ZGRkZGRlwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEVkZ2UgPCA2KSB7XG4gICAgICBjdHgubW92ZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfSEFMRiAtIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfRlVMTCAtIDUpO1xuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0hBTEYsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfRlVMTCk7XG4gICAgICBjdHgubGluZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfSEFMRiArIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfRlVMTCAtIDUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEVkZ2UgPCAxMSkge1xuICAgICAgY3R4Lm1vdmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYgLSA1KTtcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYpO1xuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyA1LCBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYgKyA1KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFZGdlIDwgMTYpIHtcbiAgICAgIGN0eC5tb3ZlVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGIC0gNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgNSk7XG4gICAgICBjdHgubGluZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfSEFMRiwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5KTtcbiAgICAgIGN0eC5saW5lVG8oc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGICsgNSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5ICsgNSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWRnZSA8IDIxKSB7XG4gICAgICBjdHgubW92ZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfRlVMTCAtIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfSEFMRiAtIDUpO1xuICAgICAgY3R4LmxpbmVUbyhzZWxlY3RlZEVkZ2VQaXhlbHMucHggKyBUSUxFX0ZVTEwsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfSEFMRik7XG4gICAgICBjdHgubGluZVRvKHNlbGVjdGVkRWRnZVBpeGVscy5weCArIFRJTEVfRlVMTCAtIDUsIHNlbGVjdGVkRWRnZVBpeGVscy5weSArIFRJTEVfSEFMRiArIDUpO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBEcmF3IGxldmVsIGVkZ2UgaGludHNcbiAgICBpZiAoZWRnZUxldmVsRGF0YSkge1xuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC4xO1xuICAgICAgZm9yIChjb25zdCBlZGdlRGF0YSBvZiBlZGdlTGV2ZWxEYXRhKSB7XG4gICAgICAgIHNlbGVjdGVkRWRnZVBpeGVscyA9IHRpbGVUb1BpeGVscyhhZGRUaWxlcyhlZGdlTnVtYmVyVG9MYXNlcihlZGdlRGF0YS5lZGdlKS50aWxlLCB7IHg6IDEsIHk6IDEgfSkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZWRnZURhdGEuc29sdmVkID8gXCIjMDBGRjAwXCIgOiBcIiNGRjAwMDBcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHNlbGVjdGVkRWRnZVBpeGVscy5weCwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB5LCBUSUxFX0ZVTEwsIFRJTEVfRlVMTCk7XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG4gICAgfVxuXG4gICAgLy8gRHJhdyBlZGdlIG51bWJlcnNcbiAgICBmb3IgKGxldCBlID0gMTsgZSA8PSAyMDsgZSsrKSB7XG4gICAgICBzZWxlY3RlZEVkZ2VQaXhlbHMgPSB0aWxlVG9QaXhlbHMoYWRkVGlsZXMoZWRnZU51bWJlclRvTGFzZXIoZSkudGlsZSwgeyB4OiAxLCB5OiAxIH0pKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgIGN0eC5mb250ID0gXCIyNHB4IHNhbnMtc2VyaWZcIjtcbiAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgY3R4LmZpbGxUZXh0KGUudG9TdHJpbmcoKSwgc2VsZWN0ZWRFZGdlUGl4ZWxzLnB4ICsgVElMRV9IQUxGIC0gY3R4Lm1lYXN1cmVUZXh0KGUudG9TdHJpbmcoKSkud2lkdGggLyAyLFxuICAgICAgICBzZWxlY3RlZEVkZ2VQaXhlbHMucHkgKyBUSUxFX0hBTEYpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLmxhc2VyZ3JpZCA9IG1ha2VEZWZhdWx0R3JpZCgpO1xuICAgIHRoaXMuc2VsZWN0ZWRFZGdlID0gMTtcbiAgICB0aGlzLmRyYXdQYXRoID0gW107XG4gIH1cblxuICBwdWJsaWMgcHJvY2Vzc01vdXNlQ2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIsIGJ1dHRvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVsYXRpdmVUaWxlID0gc3VwZXIucHJvY2Vzc01vdXNlQ2xpY2soeCwgeSwgYnV0dG9uKTtcbiAgICBjb25zb2xlLmxvZyhidXR0b24pO1xuICAgIGlmIChyZWxhdGl2ZVRpbGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aWxlV2l0aGluQXJlYUluY2x1c2l2ZShyZWxhdGl2ZVRpbGUsIHsgeDogMSwgeTogMSB9LCB7IHg6IDUsIHk6IDUgfSkpIHtcbiAgICAgIC8vIHRpbGUgaW4gZ3JpZFxuICAgICAgY29uc3QgbG9jID0gc3ViVGlsZXMocmVsYXRpdmVUaWxlLCB7IHg6IDEsIHk6IDEgfSk7XG4gICAgICBjb25zdCBwaWVjZSA9IGdldFBpZWNlRnJvbUdyaWQodGhpcy5sYXNlcmdyaWQsIGxvYyk7XG4gICAgICBpZiAocGllY2UpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFBpZWNlID0gcmVtb3ZlUGllY2VGcm9tR3JpZCh0aGlzLmxhc2VyZ3JpZCwgcGllY2UpO1xuICAgICAgICBpZiAoYnV0dG9uID09PSAwKSB7IC8vIGxlZnQgbW91c2UgYnV0dG9uXG4gICAgICAgICAgdG9vbGJhci5zZWxlY3RlZFBpZWNlID0gcmVtb3ZlZFBpZWNlLmluZGV4O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQaWVjZUluR3JpZCh0aGlzLmxhc2VyZ3JpZCwgYXZhaWxhYmxlUGllY2VzW3Rvb2xiYXIuc2VsZWN0ZWRQaWVjZV0sIGxvYyk7XG4gICAgICB9XG4gICAgICBwcmludFBhdGhzKCk7XG5cbiAgICAgIHRoaXMuY2FsY3VsYXRlRHJhd1BhdGhXcmFwcGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3RWRnZSA9IHRpbGVUb0VkZ2VOdW1iZXIoYWRkVGlsZXMocmVsYXRpdmVUaWxlLCB7IHg6IC0xLCB5OiAtMSB9KSk7XG4gICAgaWYgKG5ld0VkZ2UgIT09IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlID0gbmV3RWRnZTtcbiAgICB9XG4gICAgdGhpcy5jYWxjdWxhdGVEcmF3UGF0aFdyYXBwZXIoKTtcblxuICAgIHJldHVybiByZWxhdGl2ZVRpbGU7XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlRHJhd1BhdGhXcmFwcGVyKCkge1xuICAgIHRoaXMuZHJhd1BhdGggPSBbXTtcbiAgICB0aGlzLmNhbGN1bGF0ZURyYXdQYXRoKGVkZ2VOdW1iZXJUb0xhc2VyKHRoaXMuc2VsZWN0ZWRFZGdlKSk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZURyYXdQYXRoKGxhc2VyOiBMYXNlclNlZ21lbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBsYXNlci50aWxlID0gbmV4dFRpbGUobGFzZXIudGlsZSwgbGFzZXIuZGlyKTtcbiAgICAgIGlmICghdGlsZVdpdGhpbkFyZWFJbmNsdXNpdmUobGFzZXIudGlsZSwgeyB4OiAwLCB5OiAwIH0sIHsgeDogNCwgeTogNCB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwaWVjZSA9IGdldFBpZWNlRnJvbUdyaWQodGhpcy5sYXNlcmdyaWQsIGxhc2VyLnRpbGUpO1xuICAgICAgdGhpcy5kcmF3UGF0aC5wdXNoKGdldE9wcG9zaXRlTGFzZXJTZWdtZW50KGxhc2VyKSk7XG4gICAgICBpZiAocGllY2UpIHtcbiAgICAgICAgYXBwbHlQaWVjZVRvTGFzZXIobGFzZXIsIHBpZWNlLnBpZWNlSUQpO1xuICAgICAgICBzd2l0Y2ggKGxhc2VyLmRpcikge1xuICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLlNQTElUX05PUlRIX1NPVVRIOlxuICAgICAgICAgICAgbGFzZXIuZGlyID0gRGlyZWN0aW9uLk5PUlRIO1xuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aC5wdXNoKGdldE9wcG9zaXRlTGFzZXJTZWdtZW50KGxhc2VyKSk7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZURyYXdQYXRoKGdldE9wcG9zaXRlTGFzZXJTZWdtZW50KGxhc2VyKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIERpcmVjdGlvbi5TUExJVF9FQVNUX1dFU1Q6XG4gICAgICAgICAgICBsYXNlci5kaXIgPSBEaXJlY3Rpb24uRUFTVDtcbiAgICAgICAgICAgIHRoaXMuZHJhd1BhdGgucHVzaChnZXRPcHBvc2l0ZUxhc2VyU2VnbWVudChsYXNlcikpO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVEcmF3UGF0aChnZXRPcHBvc2l0ZUxhc2VyU2VnbWVudChsYXNlcikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBEaXJlY3Rpb24uTk9ORTpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBpZiBwaWVjZSBpcyBub3QgbnVsbFxuICAgICAgdGhpcy5kcmF3UGF0aC5wdXNoKGNvcHlMYXNlclNlZ21lbnQobGFzZXIpKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEdyaWRQaWVjZSB9IGZyb20gXCIuLi8uLi9MYXNlckdyaWRcIjtcbmltcG9ydCBQaWVjZUlEIGZyb20gXCIuLi8uLi9QaWVjZUlEXCI7XG5pbXBvcnQgVGlsZSBmcm9tIFwiLi4vLi4vVGlsZVwiO1xuaW1wb3J0IHsgdGlsZVRvUGl4ZWxzIH0gZnJvbSBcIi4uL0Zyb250ZW5kVGlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBpc1BsYWNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc3JjOiBzdHJpbmcsIGRyYXc6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmlzUGxhY2VkID0gZmFsc2U7XG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltZy5vbmxvYWQgPSAoKSA9PiB7IGRyYXcoKTsgfTtcbiAgICB0aGlzLmltZy5zcmMgPSBzcmM7XG4gIH1cblxuICBwdWJsaWMgZHJhd0F0KHRpbGU6IFRpbGUsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgcG9zID0gdGlsZVRvUGl4ZWxzKHRpbGUpO1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHBvcy5weCwgcG9zLnB5KTtcbiAgfVxufVxuIiwiaW1wb3J0IFRpbGUsIHsgYWRkVGlsZXMsIHRpbGVOb3ROZWdhdGl2ZSB9IGZyb20gXCIuLi8uLi9UaWxlXCI7XG5pbXBvcnQgeyBhdmFpbGFibGVQaWVjZXMsIHBpZWNlQ29tcG9uZW50cyB9IGZyb20gXCIuLi9Gcm9udGVuZExhc2VyZ2FtZVwiO1xuaW1wb3J0IHsgVElMRV9GVUxMLCB0aWxlVG9QaXhlbHMgfSBmcm9tIFwiLi4vRnJvbnRlbmRUaWxlXCI7XG5pbXBvcnQgQ2FudmFzQ29tcG9uZW50IGZyb20gXCIuL0NhbnZhc0NvbXBvbmVudFwiO1xuXG4vKipcbiAqIFRoZSB0b29sYmFyIHRvIHNlbGVjdCB0aGUgcGllY2VzIHRvIHB1dCBpbiB0aGUgZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGV4dGVuZHMgQ2FudmFzQ29tcG9uZW50IHtcbiAgcHVibGljIHNlbGVjdGVkUGllY2U6IG51bWJlcjtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyY1xuICAgKiBAcGFyYW0ge1RpbGV9IHRpbGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoSW5UaWxlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0SW5UaWxlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldFggPSAwXSBwaXhlbCBvZmZzZXQgZm9yIHRoZSBpbWFnZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldFkgPSAwXSBwaXhlbCBvZmZzZXQgZm9yIHRoZSBpbWFnZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgc3JjOiBzdHJpbmcsIHRpbGU6IFRpbGUsIHdpZHRoSW5UaWxlczogbnVtYmVyLCBoZWlnaHRJblRpbGVzOiBudW1iZXIsXG4gICAgZHJhdzogKCkgPT4gdm9pZCwgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKSB7XG4gICAgc3VwZXIoc3JjLCB0aWxlLCB3aWR0aEluVGlsZXMsIGhlaWdodEluVGlsZXMsIGRyYXcsIG9mZnNldFgsIG9mZnNldFkpO1xuICAgIHRoaXMuc2VsZWN0ZWRQaWVjZSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogZHJhd3MgdGhlIGltYWdlLCB0aGUgcGllY2VzIGFuZCB0aGUgaGlnaGxpZ2h0XG4gICAqL1xuICBwdWJsaWMgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcblxuICAgIC8vIGRyYXcgcGllY2VzIGluIGVhY2ggYm94XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmFpbGFibGVQaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBpZWNlQ29tcG9uZW50c1thdmFpbGFibGVQaWVjZXNbaV0ucGllY2VJRF0uZHJhd0F0KGFkZFRpbGVzKHRoaXMudGlsZSwge3g6IGksIHk6IDB9KSwgY3R4KTtcbiAgICB9XG5cbiAgICAvLyBkcmF3IHRoZSBncmVlbiBhbmQgcmVkIGhpZ2hsaWdodHNcbiAgICBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuMjtcbiAgICBsZXQgbG9jID0gdGlsZVRvUGl4ZWxzKGFkZFRpbGVzKHRoaXMudGlsZSwge3g6IHRoaXMuc2VsZWN0ZWRQaWVjZSwgeTogMH0pKTtcbiAgICBjdHguZmlsbFJlY3QobG9jLnB4LCBsb2MucHksIFRJTEVfRlVMTCwgVElMRV9GVUxMKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXZhaWxhYmxlUGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwaWVjZSA9IGF2YWlsYWJsZVBpZWNlc1tpXTtcbiAgICAgIGlmIChpICE9PSB0aGlzLnNlbGVjdGVkUGllY2UgJiYgdGlsZU5vdE5lZ2F0aXZlKHBpZWNlLnRpbGUpKSB7XG4gICAgICAgIGxvYyA9IHRpbGVUb1BpeGVscyhhZGRUaWxlcyh0aGlzLnRpbGUsIHt4OiBpLCB5OiAwfSkpO1xuICAgICAgICBjdHguZmlsbFJlY3QobG9jLnB4LCBsb2MucHksIFRJTEVfRlVMTCwgVElMRV9GVUxMKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgYSBwaWVjZSBpZiBjbGlja2VkIG9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0geCBhIHBpeGVsIHggdmFsdWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgYSBwaXhlbCB5IHZhbHVlXG4gICAqL1xuICBwdWJsaWMgcHJvY2Vzc01vdXNlQ2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIsIGJ1dHRvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVsYXRpdmVUaWxlID0gc3VwZXIucHJvY2Vzc01vdXNlQ2xpY2soeCwgeSwgYnV0dG9uKTtcbiAgICBpZiAocmVsYXRpdmVUaWxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUGllY2UgPSByZWxhdGl2ZVRpbGUueDtcbiAgICB9XG4gICAgcmV0dXJuIHJlbGF0aXZlVGlsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBzZWxlY3RlZCBwaWVjZSBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtQaWVjZX1cbiAgICovXG4gIHB1YmxpYyBnZXRTZWxlY3RlZFBpZWNlQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBwaWVjZUNvbXBvbmVudHNbdGhpcy5zZWxlY3RlZFBpZWNlXTtcbiAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==