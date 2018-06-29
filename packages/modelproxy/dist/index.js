(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["modelproxy"] = factory();
	else
		root["modelproxy"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../usr/local/lib/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/.0.0.1@isarray/index.js":
/*!**********************************************!*\
  !*** ./node_modules/.0.0.1@isarray/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/.1.7.0@path-to-regexp/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/.1.7.0@path-to-regexp/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/.0.0.1@isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/.2.0.3@url-search-params-polyfill/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.2.0.3@url-search-params-polyfill/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */

(function(self) {
    'use strict';

    var nativeURLSearchParams = self.URLSearchParams ? self.URLSearchParams : null,
        isSupportObjectConstructor = nativeURLSearchParams && (new nativeURLSearchParams({a: 1})).toString() === 'a=1',
        // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
        decodesPlusesCorrectly = nativeURLSearchParams && (new nativeURLSearchParams('s=%2B').get('s') === '+'),
        __URLSearchParams__ = "__URLSearchParams__",
        prototype = URLSearchParamsPolyfill.prototype,
        iterable = !!(self.Symbol && self.Symbol.iterator);

    if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly) {
        return;
    }


    /**
     * Make a URLSearchParams instance
     *
     * @param {object|string|URLSearchParams} search
     * @constructor
     */
    function URLSearchParamsPolyfill(search) {
        search = search || "";

        // support construct object with another URLSearchParams instance
        if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
            search = search.toString();
        }

        this [__URLSearchParams__] = parseToDict(search);
    }


    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.append = function(name, value) {
        appendTo(this [__URLSearchParams__], name, value);
    };

    /**
     * Deletes the given search parameter, and its associated value,
     * from the list of all search parameters.
     *
     * @param {string} name
     */
    prototype.delete = function(name) {
        delete this [__URLSearchParams__] [name];
    };

    /**
     * Returns the first value associated to the given search parameter.
     *
     * @param {string} name
     * @returns {string|null}
     */
    prototype.get = function(name) {
        var dict = this [__URLSearchParams__];
        return name in dict ? dict[name][0] : null;
    };

    /**
     * Returns all the values association with a given search parameter.
     *
     * @param {string} name
     * @returns {Array}
     */
    prototype.getAll = function(name) {
        var dict = this [__URLSearchParams__];
        return name in dict ? dict [name].slice(0) : [];
    };

    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * @param {string} name
     * @returns {boolean}
     */
    prototype.has = function(name) {
        return name in this [__URLSearchParams__];
    };

    /**
     * Sets the value associated to a given search parameter to
     * the given value. If there were several values, delete the
     * others.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.set = function set(name, value) {
        this [__URLSearchParams__][name] = ['' + value];
    };

    /**
     * Returns a string containg a query string suitable for use in a URL.
     *
     * @returns {string}
     */
    prototype.toString = function() {
        var dict = this[__URLSearchParams__], query = [], i, key, name, value;
        for (key in dict) {
            name = encode(key);
            for (i = 0, value = dict[key]; i < value.length; i++) {
                query.push(name + '=' + encode(value[i]));
            }
        }
        return query.join('&');
    };

    // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.
    var forSureUsePolyfill = !decodesPlusesCorrectly;
    var useProxy = (!forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy)
    /*
     * Apply polifill to global object and append other prototype into it
     */
    self.URLSearchParams = useProxy ?
        // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
        new Proxy(nativeURLSearchParams, {
            construct: function(target, args) {
                return new target((new URLSearchParamsPolyfill(args[0]).toString()));
            }
        }) :
        URLSearchParamsPolyfill;


    var USPProto = self.URLSearchParams.prototype;

    USPProto.polyfill = true;

    /**
     *
     * @param {function} callback
     * @param {object} thisArg
     */
    USPProto.forEach = USPProto.forEach || function(callback, thisArg) {
        var dict = parseToDict(this.toString());
        Object.getOwnPropertyNames(dict).forEach(function(name) {
            dict[name].forEach(function(value) {
                callback.call(thisArg, value, name, this);
            }, this);
        }, this);
    };

    /**
     * Sort all name-value pairs
     */
    USPProto.sort = USPProto.sort || function() {
        var dict = parseToDict(this.toString()), keys = [], k, i, j;
        for (k in dict) {
            keys.push(k);
        }
        keys.sort();

        for (i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
        }
        for (i = 0; i < keys.length; i++) {
            var key = keys[i], values = dict[key];
            for (j = 0; j < values.length; j++) {
                this.append(key, values[j]);
            }
        }
    };

    /**
     * Returns an iterator allowing to go through all keys of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.keys = USPProto.keys || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push([name]);
        });
        return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all values of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.values = USPProto.values || function() {
        var items = [];
        this.forEach(function(item) {
            items.push([item]);
        });
        return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all key/value
     * pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.entries = USPProto.entries || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push([name, item]);
        });
        return makeIterator(items);
    };


    if (iterable) {
        USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
    }


    function encode(str) {
        var replace = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00'
        };
        return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function(match) {
            return replace[match];
        });
    }

    function decode(str) {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    }

    function makeIterator(arr) {
        var iterator = {
            next: function() {
                var value = arr.shift();
                return {done: value === undefined, value: value};
            }
        };

        if (iterable) {
            iterator[self.Symbol.iterator] = function() {
                return iterator;
            };
        }

        return iterator;
    }

    function parseToDict(search) {
        var dict = {};

        if (typeof search === "object") {
            for (var i in search) {
                if (search.hasOwnProperty(i)) {
                    var str = typeof search [i] === 'string' ? search [i] : JSON.stringify(search [i]);
                    appendTo(dict, i, str);
                }
            }

        } else {
            // remove first '?'
            if (search.indexOf("?") === 0) {
                search = search.slice(1);
            }

            var pairs = search.split("&");
            for (var j = 0; j < pairs.length; j++) {
                var value = pairs [j],
                    index = value.indexOf('=');

                if (-1 < index) {
                    appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));

                } else {
                    if (value) {
                        appendTo(dict, decode(value), '');
                    }
                }
            }
        }

        return dict;
    }

    function appendTo(dict, name, value) {
        if (name in dict) {
            dict[name].push('' + value);
        } else {
            dict[name] = ['' + value];
        }
    }

})(typeof global !== 'undefined' ? global : (typeof window !== 'undefined' ? window : this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../usr/local/lib/node_modules/webpack/buildin/global.js */ "../../../../usr/local/lib/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/engines/engine.base.ts":
/*!************************************!*\
  !*** ./src/engines/engine.base.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var pathToRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/.1.7.0@path-to-regexp/index.js");
__webpack_require__(/*! url-search-params-polyfill */ "./node_modules/.2.0.3@url-search-params-polyfill/index.js");
var compose_1 = __webpack_require__(/*! ../libs/compose */ "./src/libs/compose.ts");
var errors_1 = __webpack_require__(/*! ../libs/errors */ "./src/libs/errors.ts");
var BaseEngine = function (_super) {
    tslib_1.__extends(BaseEngine, _super);
    function BaseEngine() {
        return _super.call(this) || this;
    }
    BaseEngine.prototype.validate = function (instance, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, true];
            });
        });
    };
    BaseEngine.prototype.proxy = function (instance, options) {
        var otherOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherOptions[_i - 2] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                instance.getPath(options.instance);
                return [2, {}];
            });
        });
    };
    BaseEngine.prototype.getStatePath = function (instance) {
        if (instance.states && instance.state) {
            return instance.states[instance.state] || "";
        }
        return "";
    };
    BaseEngine.prototype.replacePath = function (instance, _a) {
        var _b = _a.params,
            params = _b === void 0 ? [] : _b,
            _c = _a.data,
            data = _c === void 0 ? {} : _c;
        var tokens = pathToRegexp.parse(instance.path),
            paths = [];
        tokens.forEach(function (token) {
            var name = token.name;
            if (!name) {
                paths.push(token);
            } else {
                if (!params[name] && !data[name]) {
                    throw new errors_1.ModelProxyMissingError("\u7F3A\u5C11[" + name + "]\u5B57\u6BB5\uFF01");
                }
                paths.push("/" + (params[name] || data[name]));
                delete params[name];
            }
        });
        return paths.join("");
    };
    BaseEngine.prototype.getFullPath = function (instance, options) {
        var url = [this.getStatePath(instance), this.replacePath(instance, options)],
            searchParams = new URLSearchParams();
        if (options.params) {
            Object.keys(options.params).forEach(function (key) {
                searchParams.append(key, options.params[key]);
            });
            var qs = searchParams.toString();
            if (qs) {
                url.push("?" + qs);
            }
        }
        return url.join("");
    };
    return BaseEngine;
}(compose_1.Compose);
exports.BaseEngine = BaseEngine;

/***/ }),

/***/ "./src/engines/engine.def.ts":
/*!***********************************!*\
  !*** ./src/engines/engine.def.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var engine_base_1 = __webpack_require__(/*! ./engine.base */ "./src/engines/engine.base.ts");
var DefaultEngine = function (_super) {
    tslib_1.__extends(DefaultEngine, _super);
    function DefaultEngine() {
        var _this = _super.call(this) || this;
        _this.use(function (ctx, next) {
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4, next("")];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        });
        return _this;
    }
    DefaultEngine.prototype.proxy = function (instance, options) {
        var otherOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherOptions[_i - 2] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, this.callback()(tslib_1.__assign({ executeInfo: options, instance: instance }, otherOptions))];
                    case 1:
                        res = _a.sent();
                        if (res.isError) {
                            throw res.err;
                        }
                        return [2, instance];
                }
            });
        });
    };
    return DefaultEngine;
}(engine_base_1.BaseEngine);
exports.DefaultEngine = DefaultEngine;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var proxy_1 = __webpack_require__(/*! ./libs/proxy */ "./src/libs/proxy.ts");
exports.ModelProxy = proxy_1.ModelProxy;
var compose_1 = __webpack_require__(/*! ./libs/compose */ "./src/libs/compose.ts");
exports.Compose = compose_1.Compose;
var engine_factory_1 = __webpack_require__(/*! ./libs/engine.factory */ "./src/libs/engine.factory.ts");
exports.engineFactory = engine_factory_1.engineFactory;
var errors_1 = __webpack_require__(/*! ./libs/errors */ "./src/libs/errors.ts");
exports.BaseError = errors_1.BaseError;
exports.ModelProxyMissingError = errors_1.ModelProxyMissingError;
var engine_base_1 = __webpack_require__(/*! ./engines/engine.base */ "./src/engines/engine.base.ts");
exports.BaseEngine = engine_base_1.BaseEngine;
var engine_def_1 = __webpack_require__(/*! ./engines/engine.def */ "./src/engines/engine.def.ts");
exports.DefaultEngine = engine_def_1.DefaultEngine;
var base_factory_1 = __webpack_require__(/*! ./libs/base.factory */ "./src/libs/base.factory.ts");
exports.BaseFactory = base_factory_1.BaseFactory;

/***/ }),

/***/ "./src/libs/base.factory.ts":
/*!**********************************!*\
  !*** ./src/libs/base.factory.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(/*! ./errors */ "./src/libs/errors.ts");
var BaseFactory = function () {
    function BaseFactory() {
        this.instances = {};
    }
    BaseFactory.prototype.add = function (name, intance, override) {
        if (override === void 0) {
            override = false;
        }
        if (override && this.instances.hasOwnProperty(name)) {
            return console.error("\u5DF2\u7ECF\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01");
        }
        this.instances[name] = intance;
    };
    BaseFactory.prototype.get = function (name) {
        if (this.instances.hasOwnProperty(name)) {
            return this.instances[name];
        }
        return null;
    };
    BaseFactory.prototype.use = function (name) {
        if (!name || !this.instances.hasOwnProperty(name)) {
            var engines = Object.keys(this.instances);
            throw new errors_1.ModelProxyMissingError("\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01\u5F53\u524Dengines\uFF1A\u3010" + engines.join(",") + "\u3011");
        }
        return this.instances[name];
    };
    BaseFactory.prototype.forEach = function (fn) {
        if (!fn || fn.constructor !== Function) {
            return;
        }
        for (var key in this.instances) {
            if (this.instances.hasOwnProperty(key)) {
                var element = this.instances[key];
                fn(key, element);
            }
        }
    };
    return BaseFactory;
}();
exports.BaseFactory = BaseFactory;

/***/ }),

/***/ "./src/libs/compose.ts":
/*!*****************************!*\
  !*** ./src/libs/compose.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Compose = function () {
    function Compose() {
        this.middlewares = [];
    }
    Compose.prototype.use = function (func) {
        if (typeof func !== "function") {
            throw new TypeError("middleware must be a function！");
        }
        this.middlewares.push(func);
    };
    Compose.prototype.clear = function () {
        this.middlewares.length = 0;
    };
    Compose.prototype.compose = function () {
        var _this = this;
        if (!Array.isArray(this.middlewares)) {
            throw new TypeError("Middleware stack must be an array!");
        }
        for (var _i = 0, _a = this.middlewares; _i < _a.length; _i++) {
            var fn = _a[_i];
            if (typeof fn !== "function") {
                throw new TypeError("Middleware must be composed of functions!");
            }
        }
        return function (context, next) {
            return new Promise(function (resolve, reject) {
                var index = -1;
                var dispatch = function (i) {
                    return new Promise(function (resolve1) {
                        return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var fn, err_1;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fn = this.middlewares[i];
                                        if (i <= index) {
                                            return [2, reject(new Error("next() called multiple times" + i + "-" + index))];
                                        }
                                        index = i;
                                        if (i === this.middlewares.length) {
                                            fn = next;
                                        }
                                        if (!fn) {
                                            return [2, resolve1(context)];
                                        }
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3,, 4]);
                                        return [4, fn(context, function (key) {
                                            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                                return tslib_1.__generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (key === "abort") {
                                                                return [2, resolve(context)];
                                                            }
                                                            return [4, dispatch(i + 1)];
                                                        case 1:
                                                            _a.sent();
                                                            resolve1();
                                                            return [2];
                                                    }
                                                });
                                            });
                                        })];
                                    case 2:
                                        _a.sent();
                                        return [3, 4];
                                    case 3:
                                        err_1 = _a.sent();
                                        reject(err_1);
                                        return [3, 4];
                                    case 4:
                                        return [2];
                                }
                            });
                        });
                    });
                };
                return dispatch(0).then(resolve.bind(context));
            });
        };
    };
    Compose.prototype.errorHandle = function (ctx, err) {
        ctx.isError = true;
        ctx.err = err;
    };
    Compose.prototype.callback = function (complete) {
        var _this = this;
        var fn = this.compose();
        return function (options) {
            var ctx = Object.assign(options || {}, {});
            var promise = fn(ctx, function (content, next) {
                return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return [4, next()];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                });
            }).then(function () {
                return ctx;
            }).catch(function (err) {
                _this.errorHandle(ctx, err);
                return ctx;
            });
            return promise;
        };
    };
    return Compose;
}();
exports.Compose = Compose;

/***/ }),

/***/ "./src/libs/engine.factory.ts":
/*!************************************!*\
  !*** ./src/libs/engine.factory.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var base_factory_1 = __webpack_require__(/*! ./base.factory */ "./src/libs/base.factory.ts");
var engine_def_1 = __webpack_require__(/*! ../engines/engine.def */ "./src/engines/engine.def.ts");
exports.engineFactory = new base_factory_1.BaseFactory();
exports.engineFactory.add("default", new engine_def_1.DefaultEngine());

/***/ }),

/***/ "./src/libs/errors.ts":
/*!****************************!*\
  !*** ./src/libs/errors.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseError = function () {
    function BaseError(message) {
        this.name = "";
        this.message = message ? message : "";
        this.stack = new Error().stack;
    }
    return BaseError;
}();
exports.BaseError = BaseError;
var ModelProxyMissingError = function (_super) {
    tslib_1.__extends(ModelProxyMissingError, _super);
    function ModelProxyMissingError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ModelProxy.MissingError";
        return _this;
    }
    return ModelProxyMissingError;
}(BaseError);
exports.ModelProxyMissingError = ModelProxyMissingError;

/***/ }),

/***/ "./src/libs/interface.factory.ts":
/*!***************************************!*\
  !*** ./src/libs/interface.factory.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var base_factory_1 = __webpack_require__(/*! ./base.factory */ "./src/libs/base.factory.ts");
var engine_factory_1 = __webpack_require__(/*! ./engine.factory */ "./src/libs/engine.factory.ts");
var InterfaceFactory = function (_super) {
    tslib_1.__extends(InterfaceFactory, _super);
    function InterfaceFactory() {
        return _super.call(this) || this;
    }
    InterfaceFactory.prototype.add = function (name, instance, override) {
        if (override === void 0) {
            override = false;
        }
        _super.prototype.add.call(this, name, instance, override);
        Object.assign(instance, {
            delete: this.custom.bind(this, instance, "DELETE"),
            execute: this.execute.bind(this, instance),
            get: this.custom.bind(this, instance, "GET"),
            getFullPath: this.getFullPath.bind(this, instance),
            getPath: this.getPath.bind(this, instance),
            post: this.custom.bind(this, instance, "POST", null),
            put: this.custom.bind(this, instance, "PUT"),
            replacePath: this.replacePath.bind(this, instance)
        });
    };
    InterfaceFactory.prototype.execute = function (instance, options) {
        var otherOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherOptions[_i - 2] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var engine, iinstance, _a, extraInstance, e_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = options.instance, extraInstance = _a === void 0 ? {} : _a;
                        iinstance = this.megreInstance(instance, extraInstance);
                        engine = engine_factory_1.engineFactory.use(iinstance.engine);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3,, 4]);
                        return [4, engine.validate(iinstance, options)];
                    case 2:
                        _b.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _b.sent();
                        throw e_1;
                    case 4:
                        return [2, engine.proxy.apply(engine, [iinstance, options].concat(otherOptions))];
                }
            });
        });
    };
    InterfaceFactory.prototype.custom = function (instance, type, id, options) {
        if (options === void 0) {
            options = {};
        }
        var otherOptions = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            otherOptions[_i - 4] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, extraInstance, _b, params, iiinstance;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = options.instance, extraInstance = _a === void 0 ? {} : _a, _b = options.params, params = _b === void 0 ? {} : _b;
                        extraInstance.method = type;
                        if (id) {
                            extraInstance.path = (extraInstance.path || instance.path) + "/:__id__";
                            params.__id__ = id;
                        }
                        options.instance = extraInstance;
                        options.params = params;
                        return [4, this.execute.apply(this, [instance, options].concat(otherOptions))];
                    case 1:
                        return [2, _c.sent()];
                }
            });
        });
    };
    InterfaceFactory.prototype.megreInstance = function (instance, extendInstance) {
        if (extendInstance === void 0) {
            extendInstance = {};
        }
        return Object.assign({}, instance, extendInstance);
    };
    InterfaceFactory.prototype.executeEngineMethod = function (instance, extendInstance, method) {
        if (extendInstance === void 0) {
            extendInstance = {};
        }
        var engine, methodFunc, iinstance;
        iinstance = this.megreInstance(instance, extendInstance);
        engine = engine_factory_1.engineFactory.use("default");
        methodFunc = engine[method];
        if (methodFunc) {
            return methodFunc(iinstance, extendInstance);
        }
        return "";
    };
    InterfaceFactory.prototype.getPath = function (instance, extendInstance) {
        if (extendInstance === void 0) {
            extendInstance = {};
        }
        var engine, iinstance;
        iinstance = this.megreInstance(instance, extendInstance);
        return this.executeEngineMethod(instance, extendInstance, "getStatePath") + iinstance.path;
    };
    InterfaceFactory.prototype.getFullPath = function (instance, options) {
        if (options === void 0) {
            options = {};
        }
        return this.executeEngineMethod(instance, options.instance, "getFullPath");
    };
    InterfaceFactory.prototype.replacePath = function (instance, options) {
        if (options === void 0) {
            options = {};
        }
        var engine, iinstance;
        iinstance = this.megreInstance(instance, options.instance);
        engine = engine_factory_1.engineFactory.use("default");
        return engine.replacePath(iinstance, options);
    };
    return InterfaceFactory;
}(base_factory_1.BaseFactory);
exports.InterfaceFactory = InterfaceFactory;

/***/ }),

/***/ "./src/libs/proxy.ts":
/*!***************************!*\
  !*** ./src/libs/proxy.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var interface_factory_1 = __webpack_require__(/*! ./interface.factory */ "./src/libs/interface.factory.ts");
var engine_factory_1 = __webpack_require__(/*! ./engine.factory */ "./src/libs/engine.factory.ts");
var compose_1 = __webpack_require__(/*! ./compose */ "./src/libs/compose.ts");
var errors_1 = __webpack_require__(/*! ./errors */ "./src/libs/errors.ts");
var base_factory_1 = __webpack_require__(/*! ./base.factory */ "./src/libs/base.factory.ts");
var ModelProxy = function (_super) {
    tslib_1.__extends(ModelProxy, _super);
    function ModelProxy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nsFactory = new base_factory_1.BaseFactory();
        _this.forEach = _this.nsFactory.forEach.bind(_this.nsFactory);
        return _this;
    }
    ModelProxy.prototype.addEngines = function (engines) {
        for (var key in engines) {
            if (engines.hasOwnProperty(key)) {
                engine_factory_1.engineFactory.add(key, engines[key], true);
            }
        }
        return this;
    };
    ModelProxy.prototype.loadConfig = function (config, overrideInterfaceConfig) {
        var nsFactory = this.nsFactory.get(config.key);
        if (!nsFactory) {
            this.nsFactory.add(config.key, this.initInterfaces(new interface_factory_1.InterfaceFactory(), config, overrideInterfaceConfig));
            return this;
        }
        this.nsFactory.add(config.key, this.initInterfaces(nsFactory, config, overrideInterfaceConfig));
        return this;
    };
    ModelProxy.prototype.execute = function (ns, key, options) {
        if (options === void 0) {
            options = {};
        }
        var otherOptions = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            otherOptions[_i - 3] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var interfaces, instance;
            return tslib_1.__generator(this, function (_a) {
                interfaces = this.getNs(ns), instance = interfaces.get(key);
                if (!instance) {
                    throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u53D1\u73B0/" + ns + "/" + key + "\u7684\u63A5\u53E3\u65B9\u6CD5\uFF01");
                }
                return [2, instance.execute.apply(instance, [options].concat(otherOptions))];
            });
        });
    };
    ModelProxy.prototype.executeAll = function (inters) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var maps;
            return tslib_1.__generator(this, function (_a) {
                maps = [];
                if (!inters || !Object.keys(inters).length) {
                    return [2, new Promise(function (resolve) {
                        resolve(null);
                    })];
                }
                Object.keys(inters).forEach(function (key) {
                    maps.push(inters[key]().then(function (data) {
                        return _a = {}, _a[key] = data, _a;
                        var _a;
                    }));
                });
                return [2, Promise.all(maps).then(function (data) {
                    return data.reduce(function (prev, next) {
                        return Object.assign({}, prev, next);
                    });
                })];
            });
        });
    };
    ModelProxy.prototype.race = function (inters) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var maps;
            return tslib_1.__generator(this, function (_a) {
                maps = inters.map(function (inter) {
                    if (inter.then) {
                        return inter;
                    }
                    var _a = inter,
                        _b = _a.ns,
                        ns = _b === void 0 ? "" : _b,
                        _c = _a.key,
                        key = _c === void 0 ? "" : _c,
                        _d = _a.options,
                        options = _d === void 0 ? {} : _d,
                        _e = _a.otherOptions,
                        otherOptions = _e === void 0 ? [] : _e;
                    return _this.execute.apply(_this, [ns, key, options].concat(otherOptions));
                });
                return [2, Promise.race(maps)];
            });
        });
    };
    ModelProxy.prototype.getNs = function (ns) {
        if (!this.nsFactory.get(ns)) {
            throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4;");
        }
        return this.nsFactory.use(ns);
    };
    ModelProxy.prototype.minix = function (ns) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        return this.mixin.apply(this, [ns].concat(keys));
    };
    ModelProxy.prototype.mixin = function (ns) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        if (!keys.length) {
            throw new errors_1.ModelProxyMissingError("\u5FC5\u987B\u5236\u5B9A\u81F3\u5C11\u4E00\u4E2AKey\uFF01");
        }
        var interfaces = this.getNs(ns),
            idKeys = [],
            lastKey = keys.pop(),
            lastInterface = interfaces.get(lastKey);
        if (!lastInterface) {
            return null;
        }
        keys.forEach(function (k) {
            var instance = interfaces.get(k);
            if (!instance) {
                throw new errors_1.ModelProxyMissingError(k + "\u4E0D\u5B58\u5728\u4E8E\u7A7A\u95F4" + ns + "\uFF01");
            }
            idKeys.push(instance);
        });
        return function () {
            var ids = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                ids[_i] = arguments[_i];
            }
            if (ids.length !== idKeys.length) {
                throw new Error("\u4F20\u5165\u7684\u53C2\u6570\u4E2A\u6570\u4E0D\u6B63\u786E\uFF01");
            }
            var paths = [];
            idKeys.forEach(function (k, idx) {
                paths.push(k.replacePath({
                    instance: {
                        path: k.path + "/:" + k.key
                    },
                    params: (_a = {}, _a[k.key] = ids[idx], _a)
                }));
                var _a;
            });
            lastInterface.path = paths.concat([lastInterface.path]).join("");
            return lastInterface;
        };
    };
    ModelProxy.prototype.initInterfaces = function (ifFactory, config, overrideInterfaceConfig) {
        if (overrideInterfaceConfig === void 0) {
            overrideInterfaceConfig = {};
        }
        config.interfaces.forEach(function (i) {
            ifFactory.add(i.key, Object.assign({}, {
                engine: config.engine,
                mockDir: config.mockDir,
                ns: config.key,
                state: config.state,
                states: config.states
            }, i, overrideInterfaceConfig || {}), true);
        });
        return ifFactory;
    };
    return ModelProxy;
}(compose_1.Compose);
exports.ModelProxy = ModelProxy;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map