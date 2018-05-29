/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* axios v0.18.0 | (c) 2018 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["axios"] = factory();else root["axios"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = __webpack_require__(1);

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);
			var bind = __webpack_require__(3);
			var Axios = __webpack_require__(5);
			var defaults = __webpack_require__(6);

			/**
    * Create an instance of Axios
    *
    * @param {Object} defaultConfig The default config for the instance
    * @return {Axios} A new instance of Axios
    */
			function createInstance(defaultConfig) {
				var context = new Axios(defaultConfig);
				var instance = bind(Axios.prototype.request, context);

				// Copy axios.prototype to instance
				utils.extend(instance, Axios.prototype, context);

				// Copy context to instance
				utils.extend(instance, context);

				return instance;
			}

			// Create the default instance to be exported
			var axios = createInstance(defaults);

			// Expose Axios class to allow class inheritance
			axios.Axios = Axios;

			// Factory for creating new instances
			axios.create = function create(instanceConfig) {
				return createInstance(utils.merge(defaults, instanceConfig));
			};

			// Expose Cancel & CancelToken
			axios.Cancel = __webpack_require__(23);
			axios.CancelToken = __webpack_require__(24);
			axios.isCancel = __webpack_require__(20);

			// Expose all/spread
			axios.all = function all(promises) {
				return Promise.all(promises);
			};
			axios.spread = __webpack_require__(25);

			module.exports = axios;

			// Allow use of default import syntax in TypeScript
			module.exports.default = axios;

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var bind = __webpack_require__(3);
			var isBuffer = __webpack_require__(4);

			/*global toString:true*/

			// utils is a library of generic helper functions non-specific to axios

			var toString = Object.prototype.toString;

			/**
    * Determine if a value is an Array
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an Array, otherwise false
    */
			function isArray(val) {
				return toString.call(val) === '[object Array]';
			}

			/**
    * Determine if a value is an ArrayBuffer
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an ArrayBuffer, otherwise false
    */
			function isArrayBuffer(val) {
				return toString.call(val) === '[object ArrayBuffer]';
			}

			/**
    * Determine if a value is a FormData
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an FormData, otherwise false
    */
			function isFormData(val) {
				return typeof FormData !== 'undefined' && val instanceof FormData;
			}

			/**
    * Determine if a value is a view on an ArrayBuffer
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
    */
			function isArrayBufferView(val) {
				var result;
				if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
					result = ArrayBuffer.isView(val);
				} else {
					result = val && val.buffer && val.buffer instanceof ArrayBuffer;
				}
				return result;
			}

			/**
    * Determine if a value is a String
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a String, otherwise false
    */
			function isString(val) {
				return typeof val === 'string';
			}

			/**
    * Determine if a value is a Number
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Number, otherwise false
    */
			function isNumber(val) {
				return typeof val === 'number';
			}

			/**
    * Determine if a value is undefined
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if the value is undefined, otherwise false
    */
			function isUndefined(val) {
				return typeof val === 'undefined';
			}

			/**
    * Determine if a value is an Object
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an Object, otherwise false
    */
			function isObject(val) {
				return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
			}

			/**
    * Determine if a value is a Date
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Date, otherwise false
    */
			function isDate(val) {
				return toString.call(val) === '[object Date]';
			}

			/**
    * Determine if a value is a File
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a File, otherwise false
    */
			function isFile(val) {
				return toString.call(val) === '[object File]';
			}

			/**
    * Determine if a value is a Blob
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Blob, otherwise false
    */
			function isBlob(val) {
				return toString.call(val) === '[object Blob]';
			}

			/**
    * Determine if a value is a Function
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Function, otherwise false
    */
			function isFunction(val) {
				return toString.call(val) === '[object Function]';
			}

			/**
    * Determine if a value is a Stream
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Stream, otherwise false
    */
			function isStream(val) {
				return isObject(val) && isFunction(val.pipe);
			}

			/**
    * Determine if a value is a URLSearchParams object
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a URLSearchParams object, otherwise false
    */
			function isURLSearchParams(val) {
				return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
			}

			/**
    * Trim excess whitespace off the beginning and end of a string
    *
    * @param {String} str The String to trim
    * @returns {String} The String freed of excess whitespace
    */
			function trim(str) {
				return str.replace(/^\s*/, '').replace(/\s*$/, '');
			}

			/**
    * Determine if we're running in a standard browser environment
    *
    * This allows axios to run in a web worker, and react-native.
    * Both environments support XMLHttpRequest, but not fully standard globals.
    *
    * web workers:
    *  typeof window -> undefined
    *  typeof document -> undefined
    *
    * react-native:
    *  navigator.product -> 'ReactNative'
    */
			function isStandardBrowserEnv() {
				if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
					return false;
				}
				return typeof window !== 'undefined' && typeof document !== 'undefined';
			}

			/**
    * Iterate over an Array or an Object invoking a function for each item.
    *
    * If `obj` is an Array callback will be called passing
    * the value, index, and complete array for each item.
    *
    * If 'obj' is an Object callback will be called passing
    * the value, key, and complete object for each property.
    *
    * @param {Object|Array} obj The object to iterate
    * @param {Function} fn The callback to invoke for each item
    */
			function forEach(obj, fn) {
				// Don't bother if no value provided
				if (obj === null || typeof obj === 'undefined') {
					return;
				}

				// Force an array if not already something iterable
				if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
					/*eslint no-param-reassign:0*/
					obj = [obj];
				}

				if (isArray(obj)) {
					// Iterate over array values
					for (var i = 0, l = obj.length; i < l; i++) {
						fn.call(null, obj[i], i, obj);
					}
				} else {
					// Iterate over object keys
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) {
							fn.call(null, obj[key], key, obj);
						}
					}
				}
			}

			/**
    * Accepts varargs expecting each argument to be an object, then
    * immutably merges the properties of each object and returns result.
    *
    * When multiple objects contain the same key the later object in
    * the arguments list will take precedence.
    *
    * Example:
    *
    * ```js
    * var result = merge({foo: 123}, {foo: 456});
    * console.log(result.foo); // outputs 456
    * ```
    *
    * @param {Object} obj1 Object to merge
    * @returns {Object} Result of all merge properties
    */
			function merge() /* obj1, obj2, obj3, ... */{
				var result = {};
				function assignValue(val, key) {
					if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
						result[key] = merge(result[key], val);
					} else {
						result[key] = val;
					}
				}

				for (var i = 0, l = arguments.length; i < l; i++) {
					forEach(arguments[i], assignValue);
				}
				return result;
			}

			/**
    * Extends object a by mutably adding to it the properties of object b.
    *
    * @param {Object} a The object to be extended
    * @param {Object} b The object to copy properties from
    * @param {Object} thisArg The object to bind function to
    * @return {Object} The resulting value of object a
    */
			function extend(a, b, thisArg) {
				forEach(b, function assignValue(val, key) {
					if (thisArg && typeof val === 'function') {
						a[key] = bind(val, thisArg);
					} else {
						a[key] = val;
					}
				});
				return a;
			}

			module.exports = {
				isArray: isArray,
				isArrayBuffer: isArrayBuffer,
				isBuffer: isBuffer,
				isFormData: isFormData,
				isArrayBufferView: isArrayBufferView,
				isString: isString,
				isNumber: isNumber,
				isObject: isObject,
				isUndefined: isUndefined,
				isDate: isDate,
				isFile: isFile,
				isBlob: isBlob,
				isFunction: isFunction,
				isStream: isStream,
				isURLSearchParams: isURLSearchParams,
				isStandardBrowserEnv: isStandardBrowserEnv,
				forEach: forEach,
				merge: merge,
				extend: extend,
				trim: trim
			};

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			'use strict';

			module.exports = function bind(fn, thisArg) {
				return function wrap() {
					var args = new Array(arguments.length);
					for (var i = 0; i < args.length; i++) {
						args[i] = arguments[i];
					}
					return fn.apply(thisArg, args);
				};
			};

			/***/
		},
		/* 4 */
		/***/function (module, exports) {

			/*!
    * Determine if an object is a Buffer
    *
    * @author   Feross Aboukhadijeh <https://feross.org>
    * @license  MIT
    */

			// The _isBuffer check is for Safari 5-7 support, because it's missing
			// Object.prototype.constructor. Remove this eventually
			module.exports = function (obj) {
				return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
			};

			function isBuffer(obj) {
				return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
			}

			// For Node v0.10 support. Remove this eventually.
			function isSlowBuffer(obj) {
				return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
			}

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var defaults = __webpack_require__(6);
			var utils = __webpack_require__(2);
			var InterceptorManager = __webpack_require__(17);
			var dispatchRequest = __webpack_require__(18);

			/**
    * Create a new instance of Axios
    *
    * @param {Object} instanceConfig The default config for the instance
    */
			function Axios(instanceConfig) {
				this.defaults = instanceConfig;
				this.interceptors = {
					request: new InterceptorManager(),
					response: new InterceptorManager()
				};
			}

			/**
    * Dispatch a request
    *
    * @param {Object} config The config specific for this request (merged with this.defaults)
    */
			Axios.prototype.request = function request(config) {
				/*eslint no-param-reassign:0*/
				// Allow for axios('example/url'[, config]) a la fetch API
				if (typeof config === 'string') {
					config = utils.merge({
						url: arguments[0]
					}, arguments[1]);
				}

				config = utils.merge(defaults, { method: 'get' }, this.defaults, config);
				config.method = config.method.toLowerCase();

				// Hook up interceptors middleware
				var chain = [dispatchRequest, undefined];
				var promise = Promise.resolve(config);

				this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
					chain.unshift(interceptor.fulfilled, interceptor.rejected);
				});

				this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
					chain.push(interceptor.fulfilled, interceptor.rejected);
				});

				while (chain.length) {
					promise = promise.then(chain.shift(), chain.shift());
				}

				return promise;
			};

			// Provide aliases for supported request methods
			utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
				/*eslint func-names:0*/
				Axios.prototype[method] = function (url, config) {
					return this.request(utils.merge(config || {}, {
						method: method,
						url: url
					}));
				};
			});

			utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
				/*eslint func-names:0*/
				Axios.prototype[method] = function (url, data, config) {
					return this.request(utils.merge(config || {}, {
						method: method,
						url: url,
						data: data
					}));
				};
			});

			module.exports = Axios;

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);
			var normalizeHeaderName = __webpack_require__(7);

			var DEFAULT_CONTENT_TYPE = {
				'Content-Type': 'application/x-www-form-urlencoded'
			};

			function setContentTypeIfUnset(headers, value) {
				if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
					headers['Content-Type'] = value;
				}
			}

			function getDefaultAdapter() {
				var adapter;
				if (typeof XMLHttpRequest !== 'undefined') {
					// For browsers use XHR adapter
					adapter = __webpack_require__(8);
				} else if (typeof process !== 'undefined') {
					// For node use HTTP adapter
					adapter = __webpack_require__(8);
				}
				return adapter;
			}

			var defaults = {
				adapter: getDefaultAdapter(),

				transformRequest: [function transformRequest(data, headers) {
					normalizeHeaderName(headers, 'Content-Type');
					if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
						return data;
					}
					if (utils.isArrayBufferView(data)) {
						return data.buffer;
					}
					if (utils.isURLSearchParams(data)) {
						setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
						return data.toString();
					}
					if (utils.isObject(data)) {
						setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
						return JSON.stringify(data);
					}
					return data;
				}],

				transformResponse: [function transformResponse(data) {
					/*eslint no-param-reassign:0*/
					if (typeof data === 'string') {
						try {
							data = JSON.parse(data);
						} catch (e) {/* Ignore */}
					}
					return data;
				}],

				/**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
				timeout: 0,

				xsrfCookieName: 'XSRF-TOKEN',
				xsrfHeaderName: 'X-XSRF-TOKEN',

				maxContentLength: -1,

				validateStatus: function validateStatus(status) {
					return status >= 200 && status < 300;
				}
			};

			defaults.headers = {
				common: {
					'Accept': 'application/json, text/plain, */*'
				}
			};

			utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
				defaults.headers[method] = {};
			});

			utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
				defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
			});

			module.exports = defaults;

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			module.exports = function normalizeHeaderName(headers, normalizedName) {
				utils.forEach(headers, function processHeader(value, name) {
					if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
						headers[normalizedName] = value;
						delete headers[name];
					}
				});
			};

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);
			var settle = __webpack_require__(9);
			var buildURL = __webpack_require__(12);
			var parseHeaders = __webpack_require__(13);
			var isURLSameOrigin = __webpack_require__(14);
			var createError = __webpack_require__(10);
			var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(15);

			module.exports = function xhrAdapter(config) {
				return new Promise(function dispatchXhrRequest(resolve, reject) {
					var requestData = config.data;
					var requestHeaders = config.headers;

					if (utils.isFormData(requestData)) {
						delete requestHeaders['Content-Type']; // Let the browser set it
					}

					var request = new XMLHttpRequest();
					var loadEvent = 'onreadystatechange';
					var xDomain = false;

					// For IE 8/9 CORS support
					// Only supports POST and GET calls and doesn't returns the response headers.
					// DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
					if ("production" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
						request = new window.XDomainRequest();
						loadEvent = 'onload';
						xDomain = true;
						request.onprogress = function handleProgress() {};
						request.ontimeout = function handleTimeout() {};
					}

					// HTTP basic authentication
					if (config.auth) {
						var username = config.auth.username || '';
						var password = config.auth.password || '';
						requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
					}

					request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

					// Set the request timeout in MS
					request.timeout = config.timeout;

					// Listen for ready state
					request[loadEvent] = function handleLoad() {
						if (!request || request.readyState !== 4 && !xDomain) {
							return;
						}

						// The request errored out and we didn't get a response, this will be
						// handled by onerror instead
						// With one exception: request that using file: protocol, most browsers
						// will return status as 0 even though it's a successful request
						if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
							return;
						}

						// Prepare the response
						var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
						var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
						var response = {
							data: responseData,
							// IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
							status: request.status === 1223 ? 204 : request.status,
							statusText: request.status === 1223 ? 'No Content' : request.statusText,
							headers: responseHeaders,
							config: config,
							request: request
						};

						settle(resolve, reject, response);

						// Clean up request
						request = null;
					};

					// Handle low level network errors
					request.onerror = function handleError() {
						// Real errors are hidden from us by the browser
						// onerror should only fire if it's a network error
						reject(createError('Network Error', config, null, request));

						// Clean up request
						request = null;
					};

					// Handle timeout
					request.ontimeout = function handleTimeout() {
						reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

						// Clean up request
						request = null;
					};

					// Add xsrf header
					// This is only done if running in a standard browser environment.
					// Specifically not if we're in a web worker, or react-native.
					if (utils.isStandardBrowserEnv()) {
						var cookies = __webpack_require__(16);

						// Add xsrf header
						var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

						if (xsrfValue) {
							requestHeaders[config.xsrfHeaderName] = xsrfValue;
						}
					}

					// Add headers to the request
					if ('setRequestHeader' in request) {
						utils.forEach(requestHeaders, function setRequestHeader(val, key) {
							if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
								// Remove Content-Type if data is undefined
								delete requestHeaders[key];
							} else {
								// Otherwise add header to the request
								request.setRequestHeader(key, val);
							}
						});
					}

					// Add withCredentials to request if needed
					if (config.withCredentials) {
						request.withCredentials = true;
					}

					// Add responseType to request if needed
					if (config.responseType) {
						try {
							request.responseType = config.responseType;
						} catch (e) {
							// Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
							// But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
							if (config.responseType !== 'json') {
								throw e;
							}
						}
					}

					// Handle progress if needed
					if (typeof config.onDownloadProgress === 'function') {
						request.addEventListener('progress', config.onDownloadProgress);
					}

					// Not all browsers support upload events
					if (typeof config.onUploadProgress === 'function' && request.upload) {
						request.upload.addEventListener('progress', config.onUploadProgress);
					}

					if (config.cancelToken) {
						// Handle cancellation
						config.cancelToken.promise.then(function onCanceled(cancel) {
							if (!request) {
								return;
							}

							request.abort();
							reject(cancel);
							// Clean up request
							request = null;
						});
					}

					if (requestData === undefined) {
						requestData = null;
					}

					// Send the request
					request.send(requestData);
				});
			};

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var createError = __webpack_require__(10);

			/**
    * Resolve or reject a Promise based on response status.
    *
    * @param {Function} resolve A function that resolves the promise.
    * @param {Function} reject A function that rejects the promise.
    * @param {object} response The response.
    */
			module.exports = function settle(resolve, reject, response) {
				var validateStatus = response.config.validateStatus;
				// Note: status is not exposed by XDomainRequest
				if (!response.status || !validateStatus || validateStatus(response.status)) {
					resolve(response);
				} else {
					reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
				}
			};

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var enhanceError = __webpack_require__(11);

			/**
    * Create an Error with the specified message, config, error code, request and response.
    *
    * @param {string} message The error message.
    * @param {Object} config The config.
    * @param {string} [code] The error code (for example, 'ECONNABORTED').
    * @param {Object} [request] The request.
    * @param {Object} [response] The response.
    * @returns {Error} The created error.
    */
			module.exports = function createError(message, config, code, request, response) {
				var error = new Error(message);
				return enhanceError(error, config, code, request, response);
			};

			/***/
		},
		/* 11 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Update an Error with the specified config, error code, and response.
    *
    * @param {Error} error The error to update.
    * @param {Object} config The config.
    * @param {string} [code] The error code (for example, 'ECONNABORTED').
    * @param {Object} [request] The request.
    * @param {Object} [response] The response.
    * @returns {Error} The error.
    */

			module.exports = function enhanceError(error, config, code, request, response) {
				error.config = config;
				if (code) {
					error.code = code;
				}
				error.request = request;
				error.response = response;
				return error;
			};

			/***/
		},
		/* 12 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			function encode(val) {
				return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
			}

			/**
    * Build a URL by appending params to the end
    *
    * @param {string} url The base of the url (e.g., http://www.google.com)
    * @param {object} [params] The params to be appended
    * @returns {string} The formatted url
    */
			module.exports = function buildURL(url, params, paramsSerializer) {
				/*eslint no-param-reassign:0*/
				if (!params) {
					return url;
				}

				var serializedParams;
				if (paramsSerializer) {
					serializedParams = paramsSerializer(params);
				} else if (utils.isURLSearchParams(params)) {
					serializedParams = params.toString();
				} else {
					var parts = [];

					utils.forEach(params, function serialize(val, key) {
						if (val === null || typeof val === 'undefined') {
							return;
						}

						if (utils.isArray(val)) {
							key = key + '[]';
						} else {
							val = [val];
						}

						utils.forEach(val, function parseValue(v) {
							if (utils.isDate(v)) {
								v = v.toISOString();
							} else if (utils.isObject(v)) {
								v = JSON.stringify(v);
							}
							parts.push(encode(key) + '=' + encode(v));
						});
					});

					serializedParams = parts.join('&');
				}

				if (serializedParams) {
					url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
				}

				return url;
			};

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			// Headers whose duplicates are ignored by node
			// c.f. https://nodejs.org/api/http.html#http_message_headers
			var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

			/**
    * Parse headers into an object
    *
    * ```
    * Date: Wed, 27 Aug 2014 08:58:49 GMT
    * Content-Type: application/json
    * Connection: keep-alive
    * Transfer-Encoding: chunked
    * ```
    *
    * @param {String} headers Headers needing to be parsed
    * @returns {Object} Headers parsed into an object
    */
			module.exports = function parseHeaders(headers) {
				var parsed = {};
				var key;
				var val;
				var i;

				if (!headers) {
					return parsed;
				}

				utils.forEach(headers.split('\n'), function parser(line) {
					i = line.indexOf(':');
					key = utils.trim(line.substr(0, i)).toLowerCase();
					val = utils.trim(line.substr(i + 1));

					if (key) {
						if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
							return;
						}
						if (key === 'set-cookie') {
							parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
						} else {
							parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
						}
					}
				});

				return parsed;
			};

			/***/
		},
		/* 14 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			module.exports = utils.isStandardBrowserEnv() ?

			// Standard browser envs have full support of the APIs needed to test
			// whether the request URL is of the same origin as current location.
			function standardBrowserEnv() {
				var msie = /(msie|trident)/i.test(navigator.userAgent);
				var urlParsingNode = document.createElement('a');
				var originURL;

				/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
				function resolveURL(url) {
					var href = url;

					if (msie) {
						// IE needs attribute set twice to normalize properties
						urlParsingNode.setAttribute('href', href);
						href = urlParsingNode.href;
					}

					urlParsingNode.setAttribute('href', href);

					// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
					return {
						href: urlParsingNode.href,
						protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
						host: urlParsingNode.host,
						search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
						hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
						hostname: urlParsingNode.hostname,
						port: urlParsingNode.port,
						pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
					};
				}

				originURL = resolveURL(window.location.href);

				/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
				return function isURLSameOrigin(requestURL) {
					var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
					return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
				};
			}() :

			// Non standard browser envs (web workers, react-native) lack needed support.
			function nonStandardBrowserEnv() {
				return function isURLSameOrigin() {
					return true;
				};
			}();

			/***/
		},
		/* 15 */
		/***/function (module, exports) {

			'use strict';

			// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

			var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

			function E() {
				this.message = 'String contains an invalid character';
			}
			E.prototype = new Error();
			E.prototype.code = 5;
			E.prototype.name = 'InvalidCharacterError';

			function btoa(input) {
				var str = String(input);
				var output = '';
				for (
				// initialize result and counter
				var block, charCode, idx = 0, map = chars;
				// if the next str index does not exist:
				//   change the mapping table to "="
				//   check if d has no fractional digits
				str.charAt(idx | 0) || (map = '=', idx % 1);
				// "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
				output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
					charCode = str.charCodeAt(idx += 3 / 4);
					if (charCode > 0xFF) {
						throw new E();
					}
					block = block << 8 | charCode;
				}
				return output;
			}

			module.exports = btoa;

			/***/
		},
		/* 16 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			module.exports = utils.isStandardBrowserEnv() ?

			// Standard browser envs support document.cookie
			function standardBrowserEnv() {
				return {
					write: function write(name, value, expires, path, domain, secure) {
						var cookie = [];
						cookie.push(name + '=' + encodeURIComponent(value));

						if (utils.isNumber(expires)) {
							cookie.push('expires=' + new Date(expires).toGMTString());
						}

						if (utils.isString(path)) {
							cookie.push('path=' + path);
						}

						if (utils.isString(domain)) {
							cookie.push('domain=' + domain);
						}

						if (secure === true) {
							cookie.push('secure');
						}

						document.cookie = cookie.join('; ');
					},

					read: function read(name) {
						var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
						return match ? decodeURIComponent(match[3]) : null;
					},

					remove: function remove(name) {
						this.write(name, '', Date.now() - 86400000);
					}
				};
			}() :

			// Non standard browser env (web workers, react-native) lack needed support.
			function nonStandardBrowserEnv() {
				return {
					write: function write() {},
					read: function read() {
						return null;
					},
					remove: function remove() {}
				};
			}();

			/***/
		},
		/* 17 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			function InterceptorManager() {
				this.handlers = [];
			}

			/**
    * Add a new interceptor to the stack
    *
    * @param {Function} fulfilled The function to handle `then` for a `Promise`
    * @param {Function} rejected The function to handle `reject` for a `Promise`
    *
    * @return {Number} An ID used to remove interceptor later
    */
			InterceptorManager.prototype.use = function use(fulfilled, rejected) {
				this.handlers.push({
					fulfilled: fulfilled,
					rejected: rejected
				});
				return this.handlers.length - 1;
			};

			/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
			InterceptorManager.prototype.eject = function eject(id) {
				if (this.handlers[id]) {
					this.handlers[id] = null;
				}
			};

			/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
			InterceptorManager.prototype.forEach = function forEach(fn) {
				utils.forEach(this.handlers, function forEachHandler(h) {
					if (h !== null) {
						fn(h);
					}
				});
			};

			module.exports = InterceptorManager;

			/***/
		},
		/* 18 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);
			var transformData = __webpack_require__(19);
			var isCancel = __webpack_require__(20);
			var defaults = __webpack_require__(6);
			var isAbsoluteURL = __webpack_require__(21);
			var combineURLs = __webpack_require__(22);

			/**
    * Throws a `Cancel` if cancellation has been requested.
    */
			function throwIfCancellationRequested(config) {
				if (config.cancelToken) {
					config.cancelToken.throwIfRequested();
				}
			}

			/**
    * Dispatch a request to the server using the configured adapter.
    *
    * @param {object} config The config that is to be used for the request
    * @returns {Promise} The Promise to be fulfilled
    */
			module.exports = function dispatchRequest(config) {
				throwIfCancellationRequested(config);

				// Support baseURL config
				if (config.baseURL && !isAbsoluteURL(config.url)) {
					config.url = combineURLs(config.baseURL, config.url);
				}

				// Ensure headers exist
				config.headers = config.headers || {};

				// Transform request data
				config.data = transformData(config.data, config.headers, config.transformRequest);

				// Flatten headers
				config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

				utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
					delete config.headers[method];
				});

				var adapter = config.adapter || defaults.adapter;

				return adapter(config).then(function onAdapterResolution(response) {
					throwIfCancellationRequested(config);

					// Transform response data
					response.data = transformData(response.data, response.headers, config.transformResponse);

					return response;
				}, function onAdapterRejection(reason) {
					if (!isCancel(reason)) {
						throwIfCancellationRequested(config);

						// Transform response data
						if (reason && reason.response) {
							reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
						}
					}

					return Promise.reject(reason);
				});
			};

			/***/
		},
		/* 19 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var utils = __webpack_require__(2);

			/**
    * Transform the data for a request or a response
    *
    * @param {Object|String} data The data to be transformed
    * @param {Array} headers The headers for the request or response
    * @param {Array|Function} fns A single function or Array of functions
    * @returns {*} The resulting transformed data
    */
			module.exports = function transformData(data, headers, fns) {
				/*eslint no-param-reassign:0*/
				utils.forEach(fns, function transform(fn) {
					data = fn(data, headers);
				});

				return data;
			};

			/***/
		},
		/* 20 */
		/***/function (module, exports) {

			'use strict';

			module.exports = function isCancel(value) {
				return !!(value && value.__CANCEL__);
			};

			/***/
		},
		/* 21 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Determines whether the specified URL is absolute
    *
    * @param {string} url The URL to test
    * @returns {boolean} True if the specified URL is absolute, otherwise false
    */

			module.exports = function isAbsoluteURL(url) {
				// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
				// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
				// by any combination of letters, digits, plus, period, or hyphen.
				return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
				);
			};

			/***/
		},
		/* 22 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Creates a new URL by combining the specified URLs
    *
    * @param {string} baseURL The base URL
    * @param {string} relativeURL The relative URL
    * @returns {string} The combined URL
    */

			module.exports = function combineURLs(baseURL, relativeURL) {
				return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
			};

			/***/
		},
		/* 23 */
		/***/function (module, exports) {

			'use strict';

			/**
    * A `Cancel` is an object that is thrown when an operation is canceled.
    *
    * @class
    * @param {string=} message The message.
    */

			function Cancel(message) {
				this.message = message;
			}

			Cancel.prototype.toString = function toString() {
				return 'Cancel' + (this.message ? ': ' + this.message : '');
			};

			Cancel.prototype.__CANCEL__ = true;

			module.exports = Cancel;

			/***/
		},
		/* 24 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var Cancel = __webpack_require__(23);

			/**
    * A `CancelToken` is an object that can be used to request cancellation of an operation.
    *
    * @class
    * @param {Function} executor The executor function.
    */
			function CancelToken(executor) {
				if (typeof executor !== 'function') {
					throw new TypeError('executor must be a function.');
				}

				var resolvePromise;
				this.promise = new Promise(function promiseExecutor(resolve) {
					resolvePromise = resolve;
				});

				var token = this;
				executor(function cancel(message) {
					if (token.reason) {
						// Cancellation has already been requested
						return;
					}

					token.reason = new Cancel(message);
					resolvePromise(token.reason);
				});
			}

			/**
    * Throws a `Cancel` if cancellation has been requested.
    */
			CancelToken.prototype.throwIfRequested = function throwIfRequested() {
				if (this.reason) {
					throw this.reason;
				}
			};

			/**
    * Returns an object that contains a new `CancelToken` and a function that, when called,
    * cancels the `CancelToken`.
    */
			CancelToken.source = function source() {
				var cancel;
				var token = new CancelToken(function executor(c) {
					cancel = c;
				});
				return {
					token: token,
					cancel: cancel
				};
			};

			module.exports = CancelToken;

			/***/
		},
		/* 25 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Syntactic sugar for invoking a function and expanding an array for arguments.
    *
    * Common use case would be to use `Function.prototype.apply`.
    *
    *  ```js
    *  function f(x, y, z) {}
    *  var args = [1, 2, 3];
    *  f.apply(null, args);
    *  ```
    *
    * With `spread` this example can be re-written.
    *
    *  ```js
    *  spread(function(x, y, z) {})([1, 2, 3]);
    *  ```
    *
    * @param {Function} callback
    * @returns {Function}
    */

			module.exports = function spread(callback) {
				return function wrap(arr) {
					return callback.apply(null, arr);
				};
			};

			/***/
		}]
		/******/)
	);
});
;
//# sourceMappingURL=axios.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(0)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Barba"] = factory();else root["Barba"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "http://localhost:8080/dist";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			//Promise polyfill https://github.com/taylorhakes/promise-polyfill

			if (typeof Promise !== 'function') {
				window.Promise = __webpack_require__(1);
			}

			var Barba = {
				version: '1.0.0',
				BaseTransition: __webpack_require__(4),
				BaseView: __webpack_require__(6),
				BaseCache: __webpack_require__(8),
				Dispatcher: __webpack_require__(7),
				HistoryManager: __webpack_require__(9),
				Pjax: __webpack_require__(10),
				Prefetch: __webpack_require__(13),
				Utils: __webpack_require__(5)
			};

			module.exports = Barba;

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			/* WEBPACK VAR INJECTION */(function (setImmediate) {
				(function (root) {

					// Store setTimeout reference so promise-polyfill will be unaffected by
					// other code modifying setTimeout (like sinon.useFakeTimers())
					var setTimeoutFunc = setTimeout;

					function noop() {}

					// Use polyfill for setImmediate for performance gains
					var asap = typeof setImmediate === 'function' && setImmediate || function (fn) {
						setTimeoutFunc(fn, 0);
					};

					var onUnhandledRejection = function onUnhandledRejection(err) {
						if (typeof console !== 'undefined' && console) {
							console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
						}
					};

					// Polyfill for Function.prototype.bind
					function bind(fn, thisArg) {
						return function () {
							fn.apply(thisArg, arguments);
						};
					}

					function Promise(fn) {
						if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
						if (typeof fn !== 'function') throw new TypeError('not a function');
						this._state = 0;
						this._handled = false;
						this._value = undefined;
						this._deferreds = [];

						doResolve(fn, this);
					}

					function handle(self, deferred) {
						while (self._state === 3) {
							self = self._value;
						}
						if (self._state === 0) {
							self._deferreds.push(deferred);
							return;
						}
						self._handled = true;
						asap(function () {
							var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
							if (cb === null) {
								(self._state === 1 ? resolve : reject)(deferred.promise, self._value);
								return;
							}
							var ret;
							try {
								ret = cb(self._value);
							} catch (e) {
								reject(deferred.promise, e);
								return;
							}
							resolve(deferred.promise, ret);
						});
					}

					function resolve(self, newValue) {
						try {
							// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
							if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
							if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
								var then = newValue.then;
								if (newValue instanceof Promise) {
									self._state = 3;
									self._value = newValue;
									finale(self);
									return;
								} else if (typeof then === 'function') {
									doResolve(bind(then, newValue), self);
									return;
								}
							}
							self._state = 1;
							self._value = newValue;
							finale(self);
						} catch (e) {
							reject(self, e);
						}
					}

					function reject(self, newValue) {
						self._state = 2;
						self._value = newValue;
						finale(self);
					}

					function finale(self) {
						if (self._state === 2 && self._deferreds.length === 0) {
							asap(function () {
								if (!self._handled) {
									onUnhandledRejection(self._value);
								}
							});
						}

						for (var i = 0, len = self._deferreds.length; i < len; i++) {
							handle(self, self._deferreds[i]);
						}
						self._deferreds = null;
					}

					function Handler(onFulfilled, onRejected, promise) {
						this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
						this.onRejected = typeof onRejected === 'function' ? onRejected : null;
						this.promise = promise;
					}

					/**
      * Take a potentially misbehaving resolver function and make sure
      * onFulfilled and onRejected are only called once.
      *
      * Makes no guarantees about asynchrony.
      */
					function doResolve(fn, self) {
						var done = false;
						try {
							fn(function (value) {
								if (done) return;
								done = true;
								resolve(self, value);
							}, function (reason) {
								if (done) return;
								done = true;
								reject(self, reason);
							});
						} catch (ex) {
							if (done) return;
							done = true;
							reject(self, ex);
						}
					}

					Promise.prototype['catch'] = function (onRejected) {
						return this.then(null, onRejected);
					};

					Promise.prototype.then = function (onFulfilled, onRejected) {
						var prom = new this.constructor(noop);

						handle(this, new Handler(onFulfilled, onRejected, prom));
						return prom;
					};

					Promise.all = function (arr) {
						var args = Array.prototype.slice.call(arr);

						return new Promise(function (resolve, reject) {
							if (args.length === 0) return resolve([]);
							var remaining = args.length;

							function res(i, val) {
								try {
									if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
										var then = val.then;
										if (typeof then === 'function') {
											then.call(val, function (val) {
												res(i, val);
											}, reject);
											return;
										}
									}
									args[i] = val;
									if (--remaining === 0) {
										resolve(args);
									}
								} catch (ex) {
									reject(ex);
								}
							}

							for (var i = 0; i < args.length; i++) {
								res(i, args[i]);
							}
						});
					};

					Promise.resolve = function (value) {
						if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
							return value;
						}

						return new Promise(function (resolve) {
							resolve(value);
						});
					};

					Promise.reject = function (value) {
						return new Promise(function (resolve, reject) {
							reject(value);
						});
					};

					Promise.race = function (values) {
						return new Promise(function (resolve, reject) {
							for (var i = 0, len = values.length; i < len; i++) {
								values[i].then(resolve, reject);
							}
						});
					};

					/**
      * Set the immediate function to execute callbacks
      * @param fn {function} Function to execute
      * @private
      */
					Promise._setImmediateFn = function _setImmediateFn(fn) {
						asap = fn;
					};

					Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
						onUnhandledRejection = fn;
					};

					if (typeof module !== 'undefined' && module.exports) {
						module.exports = Promise;
					} else if (!root.Promise) {
						root.Promise = Promise;
					}
				})(this);

				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(2).setImmediate);

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			/* WEBPACK VAR INJECTION */(function (setImmediate, clearImmediate) {
				var nextTick = __webpack_require__(3).nextTick;
				var apply = Function.prototype.apply;
				var slice = Array.prototype.slice;
				var immediateIds = {};
				var nextImmediateId = 0;

				// DOM APIs, for completeness

				exports.setTimeout = function () {
					return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
				};
				exports.setInterval = function () {
					return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
				};
				exports.clearTimeout = exports.clearInterval = function (timeout) {
					timeout.close();
				};

				function Timeout(id, clearFn) {
					this._id = id;
					this._clearFn = clearFn;
				}
				Timeout.prototype.unref = Timeout.prototype.ref = function () {};
				Timeout.prototype.close = function () {
					this._clearFn.call(window, this._id);
				};

				// Does not start the time, just sets up the members needed.
				exports.enroll = function (item, msecs) {
					clearTimeout(item._idleTimeoutId);
					item._idleTimeout = msecs;
				};

				exports.unenroll = function (item) {
					clearTimeout(item._idleTimeoutId);
					item._idleTimeout = -1;
				};

				exports._unrefActive = exports.active = function (item) {
					clearTimeout(item._idleTimeoutId);

					var msecs = item._idleTimeout;
					if (msecs >= 0) {
						item._idleTimeoutId = setTimeout(function onTimeout() {
							if (item._onTimeout) item._onTimeout();
						}, msecs);
					}
				};

				// That's not how node.js implements it but the exposed api is the same.
				exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
					var id = nextImmediateId++;
					var args = arguments.length < 2 ? false : slice.call(arguments, 1);

					immediateIds[id] = true;

					nextTick(function onNextTick() {
						if (immediateIds[id]) {
							// fn.call() is faster so we optimize for the common use-case
							// @see http://jsperf.com/call-apply-segu
							if (args) {
								fn.apply(null, args);
							} else {
								fn.call(null);
							}
							// Prevent ids from leaking
							exports.clearImmediate(id);
						}
					});

					return id;
				};

				exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
					delete immediateIds[id];
				};
				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(2).setImmediate, __webpack_require__(2).clearImmediate);

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			// shim for using process in browser

			var process = module.exports = {};

			// cached from whatever global is present so that test runners that stub it
			// don't break things.  But we need to wrap it in a try catch in case it is
			// wrapped in strict mode code which doesn't define any globals.  It's inside a
			// function because try/catches deoptimize in certain engines.

			var cachedSetTimeout;
			var cachedClearTimeout;

			(function () {
				try {
					cachedSetTimeout = setTimeout;
				} catch (e) {
					cachedSetTimeout = function cachedSetTimeout() {
						throw new Error('setTimeout is not defined');
					};
				}
				try {
					cachedClearTimeout = clearTimeout;
				} catch (e) {
					cachedClearTimeout = function cachedClearTimeout() {
						throw new Error('clearTimeout is not defined');
					};
				}
			})();
			var queue = [];
			var draining = false;
			var currentQueue;
			var queueIndex = -1;

			function cleanUpNextTick() {
				if (!draining || !currentQueue) {
					return;
				}
				draining = false;
				if (currentQueue.length) {
					queue = currentQueue.concat(queue);
				} else {
					queueIndex = -1;
				}
				if (queue.length) {
					drainQueue();
				}
			}

			function drainQueue() {
				if (draining) {
					return;
				}
				var timeout = cachedSetTimeout(cleanUpNextTick);
				draining = true;

				var len = queue.length;
				while (len) {
					currentQueue = queue;
					queue = [];
					while (++queueIndex < len) {
						if (currentQueue) {
							currentQueue[queueIndex].run();
						}
					}
					queueIndex = -1;
					len = queue.length;
				}
				currentQueue = null;
				draining = false;
				cachedClearTimeout(timeout);
			}

			process.nextTick = function (fun) {
				var args = new Array(arguments.length - 1);
				if (arguments.length > 1) {
					for (var i = 1; i < arguments.length; i++) {
						args[i - 1] = arguments[i];
					}
				}
				queue.push(new Item(fun, args));
				if (queue.length === 1 && !draining) {
					cachedSetTimeout(drainQueue, 0);
				}
			};

			// v8 likes predictible objects
			function Item(fun, array) {
				this.fun = fun;
				this.array = array;
			}
			Item.prototype.run = function () {
				this.fun.apply(null, this.array);
			};
			process.title = 'browser';
			process.browser = true;
			process.env = {};
			process.argv = [];
			process.version = ''; // empty string to avoid regexp issues
			process.versions = {};

			function noop() {}

			process.on = noop;
			process.addListener = noop;
			process.once = noop;
			process.off = noop;
			process.removeListener = noop;
			process.removeAllListeners = noop;
			process.emit = noop;

			process.binding = function (name) {
				throw new Error('process.binding is not supported');
			};

			process.cwd = function () {
				return '/';
			};
			process.chdir = function (dir) {
				throw new Error('process.chdir is not supported');
			};
			process.umask = function () {
				return 0;
			};

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			var Utils = __webpack_require__(5);

			/**
    * BaseTransition to extend
    *
    * @namespace Barba.BaseTransition
    * @type {Object}
    */
			var BaseTransition = {
				/**
     * @memberOf Barba.BaseTransition
     * @type {HTMLElement}
     */
				oldContainer: undefined,

				/**
     * @memberOf Barba.BaseTransition
     * @type {HTMLElement}
     */
				newContainer: undefined,

				/**
     * @memberOf Barba.BaseTransition
     * @type {Promise}
     */
				newContainerLoading: undefined,

				/**
     * Helper to extend the object
     *
     * @memberOf Barba.BaseTransition
     * @param  {Object} newObject
     * @return {Object} newInheritObject
     */
				extend: function extend(obj) {
					return Utils.extend(this, obj);
				},

				/**
     * This function is called from Pjax module to initialize
     * the transition.
     *
     * @memberOf Barba.BaseTransition
     * @private
     * @param  {HTMLElement} oldContainer
     * @param  {Promise} newContainer
     * @return {Promise}
     */
				init: function init(oldContainer, newContainer) {
					var _this = this;

					this.oldContainer = oldContainer;
					this._newContainerPromise = newContainer;

					this.deferred = Utils.deferred();
					this.newContainerReady = Utils.deferred();
					this.newContainerLoading = this.newContainerReady.promise;

					this.start();

					this._newContainerPromise.then(function (newContainer) {
						_this.newContainer = newContainer;
						_this.newContainerReady.resolve();
					});

					return this.deferred.promise;
				},

				/**
     * This function needs to be called as soon the Transition is finished
     *
     * @memberOf Barba.BaseTransition
     */
				done: function done() {
					this.oldContainer.parentNode.removeChild(this.oldContainer);
					this.newContainer.style.visibility = 'visible';
					this.deferred.resolve();
				},

				/**
     * Constructor for your Transition
     *
     * @memberOf Barba.BaseTransition
     * @abstract
     */
				start: function start() {}
			};

			module.exports = BaseTransition;

			/***/
		},
		/* 5 */
		/***/function (module, exports) {

			/**
    * Just an object with some helpful functions
    *
    * @type {Object}
    * @namespace Barba.Utils
    */
			var Utils = {
				/**
     * Return the current url
     *
     * @memberOf Barba.Utils
     * @return {String} currentUrl
     */
				getCurrentUrl: function getCurrentUrl() {
					return window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;
				},

				/**
     * Given an url, return it without the hash
     *
     * @memberOf Barba.Utils
     * @private
     * @param  {String} url
     * @return {String} newCleanUrl
     */
				cleanLink: function cleanLink(url) {
					return url.replace(/#.*/, '');
				},

				/**
     * Time in millisecond after the xhr request goes in timeout
     *
     * @memberOf Barba.Utils
     * @type {Number}
     * @default
     */
				xhrTimeout: 5000,

				/**
     * Start an XMLHttpRequest() and return a Promise
     *
     * @memberOf Barba.Utils
     * @param  {String} url
     * @return {Promise}
     */
				xhr: function xhr(url) {
					var deferred = this.deferred();
					var req = new XMLHttpRequest();

					req.onreadystatechange = function () {
						if (req.readyState === 4) {
							if (req.status === 200) {
								return deferred.resolve(req.responseText);
							} else {
								return deferred.reject(new Error('xhr: HTTP code is not 200'));
							}
						}
					};

					req.ontimeout = function () {
						return deferred.reject(new Error('xhr: Timeout exceeded'));
					};

					req.open('GET', url);
					req.timeout = this.xhrTimeout;
					req.setRequestHeader('x-barba', 'yes');
					req.send();

					return deferred.promise;
				},

				/**
     * Get obj and props and return a new object with the property merged
     *
     * @memberOf Barba.Utils
     * @param  {object} obj
     * @param  {object} props
     * @return {object}
     */
				extend: function extend(obj, props) {
					var newObj = Object.create(obj);

					for (var prop in props) {
						if (props.hasOwnProperty(prop)) {
							newObj[prop] = props[prop];
						}
					}

					return newObj;
				},

				/**
     * Return a new "Deferred" object
     * https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
     *
     * @memberOf Barba.Utils
     * @return {Deferred}
     */
				deferred: function deferred() {
					return new function () {
						this.resolve = null;
						this.reject = null;

						this.promise = new Promise(function (resolve, reject) {
							this.resolve = resolve;
							this.reject = reject;
						}.bind(this));
					}();
				},

				/**
     * Return the port number normalized, eventually you can pass a string to be normalized.
     *
     * @memberOf Barba.Utils
     * @private
     * @param  {String} p
     * @return {Int} port
     */
				getPort: function getPort(p) {
					var port = typeof p !== 'undefined' ? p : window.location.port;
					var protocol = window.location.protocol;

					if (port != '') return parseInt(port);

					if (protocol === 'http:') return 80;

					if (protocol === 'https:') return 443;
				}
			};

			module.exports = Utils;

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			var Dispatcher = __webpack_require__(7);
			var Utils = __webpack_require__(5);

			/**
    * BaseView to be extended
    *
    * @namespace Barba.BaseView
    * @type {Object}
    */
			var BaseView = {
				/**
     * Namespace of the view.
     * (need to be associated with the data-namespace of the container)
     *
     * @memberOf Barba.BaseView
     * @type {String}
     */
				namespace: null,

				/**
     * Helper to extend the object
     *
     * @memberOf Barba.BaseView
     * @param  {Object} newObject
     * @return {Object} newInheritObject
     */
				extend: function extend(obj) {
					return Utils.extend(this, obj);
				},

				/**
     * Init the view.
     * P.S. Is suggested to init the view before starting Barba.Pjax.start(),
     * in this way .onEnter() and .onEnterCompleted() will be fired for the current
     * container when the page is loaded.
     *
     * @memberOf Barba.BaseView
     */
				init: function init() {
					var _this = this;

					Dispatcher.on('initStateChange', function (newStatus, oldStatus) {
						if (oldStatus && oldStatus.namespace === _this.namespace) _this.onLeave();
					});

					Dispatcher.on('newPageReady', function (newStatus, oldStatus, container) {
						_this.container = container;

						if (newStatus.namespace === _this.namespace) _this.onEnter();
					});

					Dispatcher.on('transitionCompleted', function (newStatus, oldStatus) {
						if (newStatus.namespace === _this.namespace) _this.onEnterCompleted();

						if (oldStatus && oldStatus.namespace === _this.namespace) _this.onLeaveCompleted();
					});
				},

				/**
     * This function will be fired when the container
     * is ready and attached to the DOM.
     *
     * @memberOf Barba.BaseView
     * @abstract
     */
				onEnter: function onEnter() {},

				/**
     * This function will be fired when the transition
     * to this container has just finished.
     *
     * @memberOf Barba.BaseView
     * @abstract
     */
				onEnterCompleted: function onEnterCompleted() {},

				/**
     * This function will be fired when the transition
     * to a new container has just started.
     *
     * @memberOf Barba.BaseView
     * @abstract
     */
				onLeave: function onLeave() {},

				/**
     * This function will be fired when the container
     * has just been removed from the DOM.
     *
     * @memberOf Barba.BaseView
     * @abstract
     */
				onLeaveCompleted: function onLeaveCompleted() {}
			};

			module.exports = BaseView;

			/***/
		},
		/* 7 */
		/***/function (module, exports) {

			/**
    * Little Dispatcher inspired by MicroEvent.js
    *
    * @namespace Barba.Dispatcher
    * @type {Object}
    */
			var Dispatcher = {
				/**
     * Object that keeps all the events
     *
     * @memberOf Barba.Dispatcher
     * @readOnly
     * @type {Object}
     */
				events: {},

				/**
     * Bind a callback to an event
     *
     * @memberOf Barba.Dispatcher
     * @param  {String} eventName
     * @param  {Function} function
     */
				on: function on(e, f) {
					this.events[e] = this.events[e] || [];
					this.events[e].push(f);
				},

				/**
     * Unbind event
     *
     * @memberOf Barba.Dispatcher
     * @param  {String} eventName
     * @param  {Function} function
     */
				off: function off(e, f) {
					if (e in this.events === false) return;

					this.events[e].splice(this.events[e].indexOf(f), 1);
				},

				/**
     * Fire the event running all the event associated to it
     *
     * @memberOf Barba.Dispatcher
     * @param  {String} eventName
     * @param  {...*} args
     */
				trigger: function trigger(e) {
					//e, ...args
					if (e in this.events === false) return;

					for (var i = 0; i < this.events[e].length; i++) {
						this.events[e][i].apply(this, Array.prototype.slice.call(arguments, 1));
					}
				}
			};

			module.exports = Dispatcher;

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			var Utils = __webpack_require__(5);

			/**
    * BaseCache it's a simple static cache
    *
    * @namespace Barba.BaseCache
    * @type {Object}
    */
			var BaseCache = {
				/**
     * The Object that keeps all the key value information
     *
     * @memberOf Barba.BaseCache
     * @type {Object}
     */
				data: {},

				/**
     * Helper to extend this object
     *
     * @memberOf Barba.BaseCache
     * @private
     * @param  {Object} newObject
     * @return {Object} newInheritObject
     */
				extend: function extend(obj) {
					return Utils.extend(this, obj);
				},

				/**
     * Set a key and value data, mainly Barba is going to save promises
     *
     * @memberOf Barba.BaseCache
     * @param {String} key
     * @param {*} value
     */
				set: function set(key, val) {
					this.data[key] = val;
				},

				/**
     * Retrieve the data using the key
     *
     * @memberOf Barba.BaseCache
     * @param  {String} key
     * @return {*}
     */
				get: function get(key) {
					return this.data[key];
				},

				/**
     * Flush the cache
     *
     * @memberOf Barba.BaseCache
     */
				reset: function reset() {
					this.data = {};
				}
			};

			module.exports = BaseCache;

			/***/
		},
		/* 9 */
		/***/function (module, exports) {

			/**
    * HistoryManager helps to keep track of the navigation
    *
    * @namespace Barba.HistoryManager
    * @type {Object}
    */
			var HistoryManager = {
				/**
     * Keep track of the status in historic order
     *
     * @memberOf Barba.HistoryManager
     * @readOnly
     * @type {Array}
     */
				history: [],

				/**
     * Add a new set of url and namespace
     *
     * @memberOf Barba.HistoryManager
     * @param {String} url
     * @param {String} namespace
     * @private
     */
				add: function add(url, namespace) {
					if (!namespace) namespace = undefined;

					this.history.push({
						url: url,
						namespace: namespace
					});
				},

				/**
     * Return information about the current status
     *
     * @memberOf Barba.HistoryManager
     * @return {Object}
     */
				currentStatus: function currentStatus() {
					return this.history[this.history.length - 1];
				},

				/**
     * Return information about the previous status
     *
     * @memberOf Barba.HistoryManager
     * @return {Object}
     */
				prevStatus: function prevStatus() {
					var history = this.history;

					if (history.length < 2) return null;

					return history[history.length - 2];
				}
			};

			module.exports = HistoryManager;

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			var Utils = __webpack_require__(5);
			var Dispatcher = __webpack_require__(7);
			var HideShowTransition = __webpack_require__(11);
			var BaseCache = __webpack_require__(8);

			var HistoryManager = __webpack_require__(9);
			var Dom = __webpack_require__(12);

			/**
    * Pjax is a static object with main function
    *
    * @namespace Barba.Pjax
    * @borrows Dom as Dom
    * @type {Object}
    */
			var Pjax = {
				Dom: Dom,
				History: HistoryManager,
				Cache: BaseCache,

				/**
     * Indicate wether or not use the cache
     *
     * @memberOf Barba.Pjax
     * @type {Boolean}
     * @default
     */
				cacheEnabled: true,

				/**
     * Indicate if there is an animation in progress
     *
     * @memberOf Barba.Pjax
     * @readOnly
     * @type {Boolean}
     */
				transitionProgress: false,

				/**
     * Class name used to ignore links
     *
     * @memberOf Barba.Pjax
     * @type {String}
     * @default
     */
				ignoreClassLink: 'no-barba',

				/**
     * Function to be called to start Pjax
     *
     * @memberOf Barba.Pjax
     */
				start: function start() {
					this.init();
				},

				/**
     * Init the events
     *
     * @memberOf Barba.Pjax
     * @private
     */
				init: function init() {
					var container = this.Dom.getContainer();
					var wrapper = this.Dom.getWrapper();

					wrapper.setAttribute('aria-live', 'polite');

					this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(container));

					//Fire for the current view.
					Dispatcher.trigger('initStateChange', this.History.currentStatus());
					Dispatcher.trigger('newPageReady', this.History.currentStatus(), {}, container, this.Dom.currentHTML);
					Dispatcher.trigger('transitionCompleted', this.History.currentStatus());

					this.bindEvents();
				},

				/**
     * Attach the eventlisteners
     *
     * @memberOf Barba.Pjax
     * @private
     */
				bindEvents: function bindEvents() {
					document.addEventListener('click', this.onLinkClick.bind(this));

					window.addEventListener('popstate', this.onStateChange.bind(this));
				},

				/**
     * Return the currentURL cleaned
     *
     * @memberOf Barba.Pjax
     * @return {String} currentUrl
     */
				getCurrentUrl: function getCurrentUrl() {
					return Utils.cleanLink(Utils.getCurrentUrl());
				},

				/**
     * Change the URL with pushstate and trigger the state change
     *
     * @memberOf Barba.Pjax
     * @param {String} newUrl
     */
				goTo: function goTo(url) {
					window.history.pushState(null, null, url);
					this.onStateChange();
				},

				/**
     * Force the browser to go to a certain url
     *
     * @memberOf Barba.Pjax
     * @param {String} url
     * @private
     */
				forceGoTo: function forceGoTo(url) {
					window.location = url;
				},

				/**
     * Load an url, will start an xhr request or load from the cache
     *
     * @memberOf Barba.Pjax
     * @private
     * @param  {String} url
     * @return {Promise}
     */
				load: function load(url) {
					var deferred = Utils.deferred();
					var _this = this;
					var xhr;

					xhr = this.Cache.get(url);

					if (!xhr) {
						xhr = Utils.xhr(url);
						this.Cache.set(url, xhr);
					}

					xhr.then(function (data) {
						var container = _this.Dom.parseResponse(data);

						_this.Dom.putContainer(container);

						if (!_this.cacheEnabled) _this.Cache.reset();

						deferred.resolve(container);
					}, function () {
						//Something went wrong (timeout, 404, 505...)
						_this.forceGoTo(url);

						deferred.reject();
					});

					return deferred.promise;
				},

				/**
     * Get the .href parameter out of an element
     * and handle special cases (like xlink:href)
     *
     * @private
     * @memberOf Barba.Pjax
     * @param  {HTMLElement} el
     * @return {String} href
     */
				getHref: function getHref(el) {
					if (!el) {
						return undefined;
					}

					if (el.getAttribute && typeof el.getAttribute('xlink:href') === 'string') {
						return el.getAttribute('xlink:href');
					}

					if (typeof el.href === 'string') {
						return el.href;
					}

					return undefined;
				},

				/**
     * Callback called from click event
     *
     * @memberOf Barba.Pjax
     * @private
     * @param {MouseEvent} evt
     */
				onLinkClick: function onLinkClick(evt) {
					var el = evt.target;

					//Go up in the nodelist until we
					//find something with an href
					while (el && !this.getHref(el)) {
						el = el.parentNode;
					}

					if (this.preventCheck(evt, el)) {
						evt.stopPropagation();
						evt.preventDefault();

						Dispatcher.trigger('linkClicked', el, evt);

						var href = this.getHref(el);
						this.goTo(href);
					}
				},

				/**
     * Determine if the link should be followed
     *
     * @memberOf Barba.Pjax
     * @param  {MouseEvent} evt
     * @param  {HTMLElement} element
     * @return {Boolean}
     */
				preventCheck: function preventCheck(evt, element) {
					if (!window.history.pushState) return false;

					var href = this.getHref(element);

					//User
					if (!element || !href) return false;

					//Middle click, cmd click, and ctrl click
					if (evt.which > 1 || evt.metaKey || evt.ctrlKey || evt.shiftKey || evt.altKey) return false;

					//Ignore target with _blank target
					if (element.target && element.target === '_blank') return false;

					//Check if it's the same domain
					if (window.location.protocol !== element.protocol || window.location.hostname !== element.hostname) return false;

					//Check if the port is the same
					if (Utils.getPort() !== Utils.getPort(element.port)) return false;

					//Ignore case when a hash is being tacked on the current URL
					if (href.indexOf('#') > -1) return false;

					//Ignore case where there is download attribute
					if (element.getAttribute && typeof element.getAttribute('download') === 'string') return false;

					//In case you're trying to load the same page
					if (Utils.cleanLink(href) == Utils.cleanLink(location.href)) return false;

					if (element.classList.contains(this.ignoreClassLink)) return false;

					return true;
				},

				/**
     * Return a transition object
     *
     * @memberOf Barba.Pjax
     * @return {Barba.Transition} Transition object
     */
				getTransition: function getTransition() {
					//User customizable
					return HideShowTransition;
				},

				/**
     * Method called after a 'popstate' or from .goTo()
     *
     * @memberOf Barba.Pjax
     * @private
     */
				onStateChange: function onStateChange() {
					var newUrl = this.getCurrentUrl();

					if (this.transitionProgress) this.forceGoTo(newUrl);

					if (this.History.currentStatus().url === newUrl) return false;

					this.History.add(newUrl);

					var newContainer = this.load(newUrl);
					var transition = Object.create(this.getTransition());

					this.transitionProgress = true;

					Dispatcher.trigger('initStateChange', this.History.currentStatus(), this.History.prevStatus());

					var transitionInstance = transition.init(this.Dom.getContainer(), newContainer);

					newContainer.then(this.onNewContainerLoaded.bind(this));

					transitionInstance.then(this.onTransitionEnd.bind(this));
				},

				/**
     * Function called as soon the new container is ready
     *
     * @memberOf Barba.Pjax
     * @private
     * @param {HTMLElement} container
     */
				onNewContainerLoaded: function onNewContainerLoaded(container) {
					var currentStatus = this.History.currentStatus();
					currentStatus.namespace = this.Dom.getNamespace(container);

					Dispatcher.trigger('newPageReady', this.History.currentStatus(), this.History.prevStatus(), container, this.Dom.currentHTML);
				},

				/**
     * Function called as soon the transition is finished
     *
     * @memberOf Barba.Pjax
     * @private
     */
				onTransitionEnd: function onTransitionEnd() {
					this.transitionProgress = false;

					Dispatcher.trigger('transitionCompleted', this.History.currentStatus(), this.History.prevStatus());
				}
			};

			module.exports = Pjax;

			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			var BaseTransition = __webpack_require__(4);

			/**
    * Basic Transition object, wait for the new Container to be ready,
    * scroll top, and finish the transition (removing the old container and displaying the new one)
    *
    * @private
    * @namespace Barba.HideShowTransition
    * @augments Barba.BaseTransition
    */
			var HideShowTransition = BaseTransition.extend({
				start: function start() {
					this.newContainerLoading.then(this.finish.bind(this));
				},

				finish: function finish() {
					document.body.scrollTop = 0;
					this.done();
				}
			});

			module.exports = HideShowTransition;

			/***/
		},
		/* 12 */
		/***/function (module, exports) {

			/**
    * Object that is going to deal with DOM parsing/manipulation
    *
    * @namespace Barba.Pjax.Dom
    * @type {Object}
    */
			var Dom = {
				/**
     * The name of the data attribute on the container
     *
     * @memberOf Barba.Pjax.Dom
     * @type {String}
     * @default
     */
				dataNamespace: 'namespace',

				/**
     * Id of the main wrapper
     *
     * @memberOf Barba.Pjax.Dom
     * @type {String}
     * @default
     */
				wrapperId: 'barba-wrapper',

				/**
     * Class name used to identify the containers
     *
     * @memberOf Barba.Pjax.Dom
     * @type {String}
     * @default
     */
				containerClass: 'barba-container',

				/**
     * Full HTML String of the current page.
     * By default is the innerHTML of the initial loaded page.
     *
     * Each time a new page is loaded, the value is the response of the xhr call.
     *
     * @memberOf Barba.Pjax.Dom
     * @type {String}
     */
				currentHTML: document.documentElement.innerHTML,

				/**
     * Parse the responseText obtained from the xhr call
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {String} responseText
     * @return {HTMLElement}
     */
				parseResponse: function parseResponse(responseText) {
					this.currentHTML = responseText;

					var wrapper = document.createElement('div');
					wrapper.innerHTML = responseText;

					var titleEl = wrapper.querySelector('title');

					if (titleEl) document.title = titleEl.textContent;

					return this.getContainer(wrapper);
				},

				/**
     * Get the main barba wrapper by the ID `wrapperId`
     *
     * @memberOf Barba.Pjax.Dom
     * @return {HTMLElement} element
     */
				getWrapper: function getWrapper() {
					var wrapper = document.getElementById(this.wrapperId);

					if (!wrapper) throw new Error('Barba.js: wrapper not found!');

					return wrapper;
				},

				/**
     * Get the container on the current DOM,
     * or from an HTMLElement passed via argument
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {HTMLElement} element
     * @return {HTMLElement}
     */
				getContainer: function getContainer(element) {
					if (!element) element = document.body;

					if (!element) throw new Error('Barba.js: DOM not ready!');

					var container = this.parseContainer(element);

					if (container && container.jquery) container = container[0];

					if (!container) throw new Error('Barba.js: no container found');

					return container;
				},

				/**
     * Get the namespace of the container
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {HTMLElement} element
     * @return {String}
     */
				getNamespace: function getNamespace(element) {
					if (element && element.dataset) {
						return element.dataset[this.dataNamespace];
					} else if (element) {
						return element.getAttribute('data-' + this.dataNamespace);
					}

					return null;
				},

				/**
     * Put the container on the page
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {HTMLElement} element
     */
				putContainer: function putContainer(element) {
					element.style.visibility = 'hidden';

					var wrapper = this.getWrapper();
					wrapper.appendChild(element);
				},

				/**
     * Get container selector
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {HTMLElement} element
     * @return {HTMLElement} element
     */
				parseContainer: function parseContainer(element) {
					return element.querySelector('.' + this.containerClass);
				}
			};

			module.exports = Dom;

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			var Utils = __webpack_require__(5);
			var Pjax = __webpack_require__(10);

			/**
    * Prefetch
    *
    * @namespace Barba.Prefetch
    * @type {Object}
    */
			var Prefetch = {
				/**
     * Class name used to ignore prefetch on links
     *
     * @memberOf Barba.Prefetch
     * @type {String}
     * @default
     */
				ignoreClassLink: 'no-barba-prefetch',

				/**
     * Init the event listener on mouseover and touchstart
     * for the prefetch
     *
     * @memberOf Barba.Prefetch
     */
				init: function init() {
					if (!window.history.pushState) {
						return false;
					}

					document.body.addEventListener('mouseover', this.onLinkEnter.bind(this));
					document.body.addEventListener('touchstart', this.onLinkEnter.bind(this));
				},

				/**
     * Callback for the mousehover/touchstart
     *
     * @memberOf Barba.Prefetch
     * @private
     * @param  {Object} evt
     */
				onLinkEnter: function onLinkEnter(evt) {
					var el = evt.target;

					while (el && !Pjax.getHref(el)) {
						el = el.parentNode;
					}

					if (!el || el.classList.contains(this.ignoreClassLink)) {
						return;
					}

					var url = Pjax.getHref(el);

					//Check if the link is elegible for Pjax
					if (Pjax.preventCheck(evt, el) && !Pjax.Cache.get(url)) {
						var xhr = Utils.xhr(url);
						Pjax.Cache.set(url, xhr);
					}
				}
			};

			module.exports = Prefetch;

			/***/
		}
		/******/])
	);
});
;
//# sourceMappingURL=barba.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if (true) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }
})(typeof window != 'undefined' ? window : undefined, function () {

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[eventName] = events[eventName] || [];
    // only add once
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // add event
    this.on(eventName, listener);
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    // set flag
    onceListeners[listener] = true;

    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
});

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function (window, factory) {
  'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter) {
      return factory(window, EvEmitter);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('ev-emitter'));
  } else {
    // browser global
    window.imagesLoaded = factory(window, window.EvEmitter);
  }
})(typeof window !== 'undefined' ? window : undefined,

// --------------------------  factory -------------------------- //

function factory(window, EvEmitter) {

  var $ = window.jQuery;
  var console = window.console;

  // -------------------------- helpers -------------------------- //

  // extend objects
  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }

  var arraySlice = Array.prototype.slice;

  // turn element or nodeList into an array
  function makeArray(obj) {
    if (Array.isArray(obj)) {
      // use object if already an array
      return obj;
    }

    var isArrayLike = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && typeof obj.length == 'number';
    if (isArrayLike) {
      // convert nodeList to array
      return arraySlice.call(obj);
    }

    // array of single index
    return [obj];
  }

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded(elem, options, onAlways) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options, onAlways);
    }
    // use elem as selector string
    var queryElem = elem;
    if (typeof elem == 'string') {
      queryElem = document.querySelectorAll(elem);
    }
    // bail if bad element
    if (!queryElem) {
      console.error('Bad element for imagesLoaded ' + (queryElem || elem));
      return;
    }

    this.elements = makeArray(queryElem);
    this.options = extend({}, this.options);
    // shift arguments if no options set
    if (typeof options == 'function') {
      onAlways = options;
    } else {
      extend(this.options, options);
    }

    if (onAlways) {
      this.on('always', onAlways);
    }

    this.getImages();

    if ($) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    setTimeout(this.check.bind(this));
  }

  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function () {
    this.images = [];

    // filter & find items if we have an item selector
    this.elements.forEach(this.addElementImages, this);
  };

  /**
   * @param {Node} element
   */
  ImagesLoaded.prototype.addElementImages = function (elem) {
    // filter siblings
    if (elem.nodeName == 'IMG') {
      this.addImage(elem);
    }
    // get background image on element
    if (this.options.background === true) {
      this.addElementBackgroundImages(elem);
    }

    // find children
    // no non-element nodes, #143
    var nodeType = elem.nodeType;
    if (!nodeType || !elementNodeTypes[nodeType]) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for (var i = 0; i < childImgs.length; i++) {
      var img = childImgs[i];
      this.addImage(img);
    }

    // get child background images
    if (typeof this.options.background == 'string') {
      var children = elem.querySelectorAll(this.options.background);
      for (i = 0; i < children.length; i++) {
        var child = children[i];
        this.addElementBackgroundImages(child);
      }
    }
  };

  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };

  ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
      return;
    }
    // get url inside url("...")
    var reURL = /url\((['"])?(.*?)\1\)/gi;
    var matches = reURL.exec(style.backgroundImage);
    while (matches !== null) {
      var url = matches && matches[2];
      if (url) {
        this.addBackground(url, elem);
      }
      matches = reURL.exec(style.backgroundImage);
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function (img) {
    var loadingImage = new LoadingImage(img);
    this.images.push(loadingImage);
  };

  ImagesLoaded.prototype.addBackground = function (url, elem) {
    var background = new Background(url, elem);
    this.images.push(background);
  };

  ImagesLoaded.prototype.check = function () {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if (!this.images.length) {
      this.complete();
      return;
    }

    function onProgress(image, elem, message) {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout(function () {
        _this.progress(image, elem, message);
      });
    }

    this.images.forEach(function (loadingImage) {
      loadingImage.once('progress', onProgress);
      loadingImage.check();
    });
  };

  ImagesLoaded.prototype.progress = function (image, elem, message) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emitEvent('progress', [this, image, elem]);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, image);
    }
    // check if completed
    if (this.progressedCount == this.images.length) {
      this.complete();
    }

    if (this.options.debug && console) {
      console.log('progress: ' + message, image, elem);
    }
  };

  ImagesLoaded.prototype.complete = function () {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent(eventName, [this]);
    this.emitEvent('always', [this]);
    if (this.jqDeferred) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[jqMethod](this);
    }
  };

  // --------------------------  -------------------------- //

  function LoadingImage(img) {
    this.img = img;
  }

  LoadingImage.prototype = Object.create(EvEmitter.prototype);

  LoadingImage.prototype.check = function () {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      // report based on naturalWidth
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    this.proxyImage.addEventListener('load', this);
    this.proxyImage.addEventListener('error', this);
    // bind to image as well for Firefox. #191
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.proxyImage.src = this.img.src;
  };

  LoadingImage.prototype.getIsImageComplete = function () {
    // check for non-zero, non-undefined naturalWidth
    // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
    return this.img.complete && this.img.naturalWidth;
  };

  LoadingImage.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.img, message]);
  };

  // ----- events ----- //

  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };

  LoadingImage.prototype.onload = function () {
    this.confirm(true, 'onload');
    this.unbindEvents();
  };

  LoadingImage.prototype.onerror = function () {
    this.confirm(false, 'onerror');
    this.unbindEvents();
  };

  LoadingImage.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener('load', this);
    this.proxyImage.removeEventListener('error', this);
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };

  // -------------------------- Background -------------------------- //

  function Background(url, element) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }

  // inherit LoadingImage prototype
  Background.prototype = Object.create(LoadingImage.prototype);

  Background.prototype.check = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.img.src = this.url;
    // check if image is already complete
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      this.unbindEvents();
    }
  };

  Background.prototype.unbindEvents = function () {
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };

  Background.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.element, message]);
  };

  // -------------------------- jQuery -------------------------- //

  ImagesLoaded.makeJQueryPlugin = function (jQuery) {
    jQuery = jQuery || window.jQuery;
    if (!jQuery) {
      return;
    }
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function (options, callback) {
      var instance = new ImagesLoaded(this, options, callback);
      return instance.jqDeferred.promise($(this));
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();

  // --------------------------  -------------------------- //

  return ImagesLoaded;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Typed"] = factory();else root["Typed"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, '__esModule', {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			}

			var _initializerJs = __webpack_require__(1);

			var _htmlParserJs = __webpack_require__(3);

			/**
    * Welcome to Typed.js!
    * @param {string} elementId HTML element ID _OR_ HTML element
    * @param {object} options options object
    * @returns {object} a new Typed object
    */

			var Typed = function () {
				function Typed(elementId, options) {
					_classCallCheck(this, Typed);

					// Initialize it up
					_initializerJs.initializer.load(this, options, elementId);
					// All systems go!
					this.begin();
				}

				/**
     * Toggle start() and stop() of the Typed instance
     * @public
     */

				_createClass(Typed, [{
					key: 'toggle',
					value: function toggle() {
						this.pause.status ? this.start() : this.stop();
					}

					/**
      * Stop typing / backspacing and enable cursor blinking
      * @public
      */
				}, {
					key: 'stop',
					value: function stop() {
						if (this.typingComplete) return;
						if (this.pause.status) return;
						this.toggleBlinking(true);
						this.pause.status = true;
						this.options.onStop(this.arrayPos, this);
					}

					/**
      * Start typing / backspacing after being stopped
      * @public
      */
				}, {
					key: 'start',
					value: function start() {
						if (this.typingComplete) return;
						if (!this.pause.status) return;
						this.pause.status = false;
						if (this.pause.typewrite) {
							this.typewrite(this.pause.curString, this.pause.curStrPos);
						} else {
							this.backspace(this.pause.curString, this.pause.curStrPos);
						}
						this.options.onStart(this.arrayPos, this);
					}

					/**
      * Destroy this instance of Typed
      * @public
      */
				}, {
					key: 'destroy',
					value: function destroy() {
						this.reset(false);
						this.options.onDestroy(this);
					}

					/**
      * Reset Typed and optionally restarts
      * @param {boolean} restart
      * @public
      */
				}, {
					key: 'reset',
					value: function reset() {
						var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

						clearInterval(this.timeout);
						this.replaceText('');
						if (this.cursor && this.cursor.parentNode) {
							this.cursor.parentNode.removeChild(this.cursor);
							this.cursor = null;
						}
						this.strPos = 0;
						this.arrayPos = 0;
						this.curLoop = 0;
						if (restart) {
							this.insertCursor();
							this.options.onReset(this);
							this.begin();
						}
					}

					/**
      * Begins the typing animation
      * @private
      */
				}, {
					key: 'begin',
					value: function begin() {
						var _this = this;

						this.typingComplete = false;
						this.shuffleStringsIfNeeded(this);
						this.insertCursor();
						if (this.bindInputFocusEvents) this.bindFocusEvents();
						this.timeout = setTimeout(function () {
							// Check if there is some text in the element, if yes start by backspacing the default message
							if (!_this.currentElContent || _this.currentElContent.length === 0) {
								_this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
							} else {
								// Start typing
								_this.backspace(_this.currentElContent, _this.currentElContent.length);
							}
						}, this.startDelay);
					}

					/**
      * Called for each character typed
      * @param {string} curString the current string in the strings array
      * @param {number} curStrPos the current position in the curString
      * @private
      */
				}, {
					key: 'typewrite',
					value: function typewrite(curString, curStrPos) {
						var _this2 = this;

						if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
							this.el.classList.remove(this.fadeOutClass);
							if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
						}

						var humanize = this.humanizer(this.typeSpeed);
						var numChars = 1;

						if (this.pause.status === true) {
							this.setPauseStatus(curString, curStrPos, true);
							return;
						}

						// contain typing function in a timeout humanize'd delay
						this.timeout = setTimeout(function () {
							// skip over any HTML chars
							curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);

							var pauseTime = 0;
							var substr = curString.substr(curStrPos);
							// check for an escape character before a pause value
							// format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
							// single ^ are removed from string
							if (substr.charAt(0) === '^') {
								if (/^\^\d+/.test(substr)) {
									var skip = 1; // skip at least 1
									substr = /\d+/.exec(substr)[0];
									skip += substr.length;
									pauseTime = parseInt(substr);
									_this2.temporaryPause = true;
									_this2.options.onTypingPaused(_this2.arrayPos, _this2);
									// strip out the escape character and pause value so they're not printed
									curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
									_this2.toggleBlinking(true);
								}
							}

							// check for skip characters formatted as
							// "this is a `string to print NOW` ..."
							if (substr.charAt(0) === '`') {
								while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
									numChars++;
									if (curStrPos + numChars > curString.length) break;
								}
								// strip out the escape characters and append all the string in between
								var stringBeforeSkip = curString.substring(0, curStrPos);
								var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
								var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
								curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
								numChars--;
							}

							// timeout for any pause after a character
							_this2.timeout = setTimeout(function () {
								// Accounts for blinking while paused
								_this2.toggleBlinking(false);

								// We're done with this sentence!
								if (curStrPos === curString.length) {
									_this2.doneTyping(curString, curStrPos);
								} else {
									_this2.keepTyping(curString, curStrPos, numChars);
								}
								// end of character pause
								if (_this2.temporaryPause) {
									_this2.temporaryPause = false;
									_this2.options.onTypingResumed(_this2.arrayPos, _this2);
								}
							}, pauseTime);

							// humanized value for typing
						}, humanize);
					}

					/**
      * Continue to the next string & begin typing
      * @param {string} curString the current string in the strings array
      * @param {number} curStrPos the current position in the curString
      * @private
      */
				}, {
					key: 'keepTyping',
					value: function keepTyping(curString, curStrPos, numChars) {
						// call before functions if applicable
						if (curStrPos === 0) {
							this.toggleBlinking(false);
							this.options.preStringTyped(this.arrayPos, this);
						}
						// start typing each new char into existing string
						// curString: arg, this.el.html: original text inside element
						curStrPos += numChars;
						var nextString = curString.substr(0, curStrPos);
						this.replaceText(nextString);
						// loop the function
						this.typewrite(curString, curStrPos);
					}

					/**
      * We're done typing all strings
      * @param {string} curString the current string in the strings array
      * @param {number} curStrPos the current position in the curString
      * @private
      */
				}, {
					key: 'doneTyping',
					value: function doneTyping(curString, curStrPos) {
						var _this3 = this;

						// fires callback function
						this.options.onStringTyped(this.arrayPos, this);
						this.toggleBlinking(true);
						// is this the final string
						if (this.arrayPos === this.strings.length - 1) {
							// callback that occurs on the last typed string
							this.complete();
							// quit if we wont loop back
							if (this.loop === false || this.curLoop === this.loopCount) {
								return;
							}
						}
						this.timeout = setTimeout(function () {
							_this3.backspace(curString, curStrPos);
						}, this.backDelay);
					}

					/**
      * Backspaces 1 character at a time
      * @param {string} curString the current string in the strings array
      * @param {number} curStrPos the current position in the curString
      * @private
      */
				}, {
					key: 'backspace',
					value: function backspace(curString, curStrPos) {
						var _this4 = this;

						if (this.pause.status === true) {
							this.setPauseStatus(curString, curStrPos, true);
							return;
						}
						if (this.fadeOut) return this.initFadeOut();

						this.toggleBlinking(false);
						var humanize = this.humanizer(this.backSpeed);

						this.timeout = setTimeout(function () {
							curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
							// replace text with base text + typed characters
							var curStringAtPosition = curString.substr(0, curStrPos);
							_this4.replaceText(curStringAtPosition);

							// if smartBack is enabled
							if (_this4.smartBackspace) {
								// the remaining part of the current string is equal of the same part of the new string
								var nextString = _this4.strings[_this4.arrayPos + 1];
								if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
									_this4.stopNum = curStrPos;
								} else {
									_this4.stopNum = 0;
								}
							}

							// if the number (id of character in current string) is
							// less than the stop number, keep going
							if (curStrPos > _this4.stopNum) {
								// subtract characters one by one
								curStrPos--;
								// loop the function
								_this4.backspace(curString, curStrPos);
							} else if (curStrPos <= _this4.stopNum) {
								// if the stop number has been reached, increase
								// array position to next string
								_this4.arrayPos++;
								// When looping, begin at the beginning after backspace complete
								if (_this4.arrayPos === _this4.strings.length) {
									_this4.arrayPos = 0;
									_this4.options.onLastStringBackspaced();
									_this4.shuffleStringsIfNeeded();
									_this4.begin();
								} else {
									_this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
								}
							}
							// humanized value for typing
						}, humanize);
					}

					/**
      * Full animation is complete
      * @private
      */
				}, {
					key: 'complete',
					value: function complete() {
						this.options.onComplete(this);
						if (this.loop) {
							this.curLoop++;
						} else {
							this.typingComplete = true;
						}
					}

					/**
      * Has the typing been stopped
      * @param {string} curString the current string in the strings array
      * @param {number} curStrPos the current position in the curString
      * @param {boolean} isTyping
      * @private
      */
				}, {
					key: 'setPauseStatus',
					value: function setPauseStatus(curString, curStrPos, isTyping) {
						this.pause.typewrite = isTyping;
						this.pause.curString = curString;
						this.pause.curStrPos = curStrPos;
					}

					/**
      * Toggle the blinking cursor
      * @param {boolean} isBlinking
      * @private
      */
				}, {
					key: 'toggleBlinking',
					value: function toggleBlinking(isBlinking) {
						if (!this.cursor) return;
						// if in paused state, don't toggle blinking a 2nd time
						if (this.pause.status) return;
						if (this.cursorBlinking === isBlinking) return;
						this.cursorBlinking = isBlinking;
						var status = isBlinking ? 'infinite' : 0;
						this.cursor.style.animationIterationCount = status;
					}

					/**
      * Speed in MS to type
      * @param {number} speed
      * @private
      */
				}, {
					key: 'humanizer',
					value: function humanizer(speed) {
						return Math.round(Math.random() * speed / 2) + speed;
					}

					/**
      * Shuffle the sequence of the strings array
      * @private
      */
				}, {
					key: 'shuffleStringsIfNeeded',
					value: function shuffleStringsIfNeeded() {
						if (!this.shuffle) return;
						this.sequence = this.sequence.sort(function () {
							return Math.random() - 0.5;
						});
					}

					/**
      * Adds a CSS class to fade out current string
      * @private
      */
				}, {
					key: 'initFadeOut',
					value: function initFadeOut() {
						var _this5 = this;

						this.el.className += ' ' + this.fadeOutClass;
						if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
						return setTimeout(function () {
							_this5.arrayPos++;
							_this5.replaceText('');

							// Resets current string if end of loop reached
							if (_this5.strings.length > _this5.arrayPos) {
								_this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
							} else {
								_this5.typewrite(_this5.strings[0], 0);
								_this5.arrayPos = 0;
							}
						}, this.fadeOutDelay);
					}

					/**
      * Replaces current text in the HTML element
      * depending on element type
      * @param {string} str
      * @private
      */
				}, {
					key: 'replaceText',
					value: function replaceText(str) {
						if (this.attr) {
							this.el.setAttribute(this.attr, str);
						} else {
							if (this.isInput) {
								this.el.value = str;
							} else if (this.contentType === 'html') {
								this.el.innerHTML = str;
							} else {
								this.el.textContent = str;
							}
						}
					}

					/**
      * If using input elements, bind focus in order to
      * start and stop the animation
      * @private
      */
				}, {
					key: 'bindFocusEvents',
					value: function bindFocusEvents() {
						var _this6 = this;

						if (!this.isInput) return;
						this.el.addEventListener('focus', function (e) {
							_this6.stop();
						});
						this.el.addEventListener('blur', function (e) {
							if (_this6.el.value && _this6.el.value.length !== 0) {
								return;
							}
							_this6.start();
						});
					}

					/**
      * On init, insert the cursor element
      * @private
      */
				}, {
					key: 'insertCursor',
					value: function insertCursor() {
						if (!this.showCursor) return;
						if (this.cursor) return;
						this.cursor = document.createElement('span');
						this.cursor.className = 'typed-cursor';
						this.cursor.innerHTML = this.cursorChar;
						this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
					}
				}]);

				return Typed;
			}();

			exports['default'] = Typed;
			module.exports = exports['default'];

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, '__esModule', {
				value: true
			});

			var _extends = Object.assign || function (target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}return target;
			};

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { 'default': obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			}

			var _defaultsJs = __webpack_require__(2);

			var _defaultsJs2 = _interopRequireDefault(_defaultsJs);

			/**
    * Initialize the Typed object
    */

			var Initializer = function () {
				function Initializer() {
					_classCallCheck(this, Initializer);
				}

				_createClass(Initializer, [{
					key: 'load',

					/**
      * Load up defaults & options on the Typed instance
      * @param {Typed} self instance of Typed
      * @param {object} options options object
      * @param {string} elementId HTML element ID _OR_ instance of HTML element
      * @private
      */

					value: function load(self, options, elementId) {
						// chosen element to manipulate text
						if (typeof elementId === 'string') {
							self.el = document.querySelector(elementId);
						} else {
							self.el = elementId;
						}

						self.options = _extends({}, _defaultsJs2['default'], options);

						// attribute to type into
						self.isInput = self.el.tagName.toLowerCase() === 'input';
						self.attr = self.options.attr;
						self.bindInputFocusEvents = self.options.bindInputFocusEvents;

						// show cursor
						self.showCursor = self.isInput ? false : self.options.showCursor;

						// custom cursor
						self.cursorChar = self.options.cursorChar;

						// Is the cursor blinking
						self.cursorBlinking = true;

						// text content of element
						self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;

						// html or plain text
						self.contentType = self.options.contentType;

						// typing speed
						self.typeSpeed = self.options.typeSpeed;

						// add a delay before typing starts
						self.startDelay = self.options.startDelay;

						// backspacing speed
						self.backSpeed = self.options.backSpeed;

						// only backspace what doesn't match the previous string
						self.smartBackspace = self.options.smartBackspace;

						// amount of time to wait before backspacing
						self.backDelay = self.options.backDelay;

						// Fade out instead of backspace
						self.fadeOut = self.options.fadeOut;
						self.fadeOutClass = self.options.fadeOutClass;
						self.fadeOutDelay = self.options.fadeOutDelay;

						// variable to check whether typing is currently paused
						self.isPaused = false;

						// input strings of text
						self.strings = self.options.strings.map(function (s) {
							return s.trim();
						});

						// div containing strings
						if (typeof self.options.stringsElement === 'string') {
							self.stringsElement = document.querySelector(self.options.stringsElement);
						} else {
							self.stringsElement = self.options.stringsElement;
						}

						if (self.stringsElement) {
							self.strings = [];
							self.stringsElement.style.display = 'none';
							var strings = Array.prototype.slice.apply(self.stringsElement.children);
							var stringsLength = strings.length;

							if (stringsLength) {
								for (var i = 0; i < stringsLength; i += 1) {
									var stringEl = strings[i];
									self.strings.push(stringEl.innerHTML.trim());
								}
							}
						}

						// character number position of current string
						self.strPos = 0;

						// current array position
						self.arrayPos = 0;

						// index of string to stop backspacing on
						self.stopNum = 0;

						// Looping logic
						self.loop = self.options.loop;
						self.loopCount = self.options.loopCount;
						self.curLoop = 0;

						// shuffle the strings
						self.shuffle = self.options.shuffle;
						// the order of strings
						self.sequence = [];

						self.pause = {
							status: false,
							typewrite: true,
							curString: '',
							curStrPos: 0
						};

						// When the typing is complete (when not looped)
						self.typingComplete = false;

						// Set the order in which the strings are typed
						for (var i in self.strings) {
							self.sequence[i] = i;
						}

						// If there is some text in the element
						self.currentElContent = this.getCurrentElContent(self);

						self.autoInsertCss = self.options.autoInsertCss;

						this.appendAnimationCss(self);
					}
				}, {
					key: 'getCurrentElContent',
					value: function getCurrentElContent(self) {
						var elContent = '';
						if (self.attr) {
							elContent = self.el.getAttribute(self.attr);
						} else if (self.isInput) {
							elContent = self.el.value;
						} else if (self.contentType === 'html') {
							elContent = self.el.innerHTML;
						} else {
							elContent = self.el.textContent;
						}
						return elContent;
					}
				}, {
					key: 'appendAnimationCss',
					value: function appendAnimationCss(self) {
						if (!self.autoInsertCss) {
							return;
						}
						if (!self.showCursor || !self.fadeOut) {
							return;
						}

						var css = document.createElement('style');
						css.type = 'text/css';
						var innerCss = '';
						if (self.showCursor) {
							innerCss += '\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
						}
						if (self.fadeOut) {
							innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      ';
						}
						if (css.length === 0) {
							return;
						}
						css.innerHTML = innerCss;
						document.body.appendChild(css);
					}
				}]);

				return Initializer;
			}();

			exports['default'] = Initializer;
			var initializer = new Initializer();
			exports.initializer = initializer;

			/***/
		},
		/* 2 */
		/***/function (module, exports) {

			/**
    * Defaults & options
    * @returns {object} Typed defaults & options
    * @public
    */

			'use strict';

			Object.defineProperty(exports, '__esModule', {
				value: true
			});
			var defaults = {
				/**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
				strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
				stringsElement: null,

				/**
     * @property {number} typeSpeed type speed in milliseconds
     */
				typeSpeed: 0,

				/**
     * @property {number} startDelay time before typing starts in milliseconds
     */
				startDelay: 0,

				/**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
				backSpeed: 0,

				/**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
				smartBackspace: true,

				/**
     * @property {boolean} shuffle shuffle the strings
     */
				shuffle: false,

				/**
     * @property {number} backDelay time before backspacing in milliseconds
     */
				backDelay: 700,

				/**
     * @property {boolean} fadeOut Fade out instead of backspace
     * @property {string} fadeOutClass css class for fade animation
     * @property {boolean} fadeOutDelay Fade out delay in milliseconds
     */
				fadeOut: false,
				fadeOutClass: 'typed-fade-out',
				fadeOutDelay: 500,

				/**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
				loop: false,
				loopCount: Infinity,

				/**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
				showCursor: true,
				cursorChar: '|',
				autoInsertCss: true,

				/**
     * @property {string} attr attribute for typing
     * Ex: input placeholder, value, or just HTML text
     */
				attr: null,

				/**
     * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
     */
				bindInputFocusEvents: false,

				/**
     * @property {string} contentType 'html' or 'null' for plaintext
     */
				contentType: 'html',

				/**
     * All typing is complete
     * @param {Typed} self
     */
				onComplete: function onComplete(self) {},

				/**
     * Before each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
				preStringTyped: function preStringTyped(arrayPos, self) {},

				/**
     * After each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
				onStringTyped: function onStringTyped(arrayPos, self) {},

				/**
     * During looping, after last string is typed
     * @param {Typed} self
     */
				onLastStringBackspaced: function onLastStringBackspaced(self) {},

				/**
     * Typing has been stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
				onTypingPaused: function onTypingPaused(arrayPos, self) {},

				/**
     * Typing has been started after being stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
				onTypingResumed: function onTypingResumed(arrayPos, self) {},

				/**
     * After reset
     * @param {Typed} self
     */
				onReset: function onReset(self) {},

				/**
     * After stop
     * @param {number} arrayPos
     * @param {Typed} self
     */
				onStop: function onStop(arrayPos, self) {},

				/**
     * After start
     * @param {number} arrayPos
     * @param {Typed} self
     */
				onStart: function onStart(arrayPos, self) {},

				/**
     * After destroy
     * @param {Typed} self
     */
				onDestroy: function onDestroy(self) {}
			};

			exports['default'] = defaults;
			module.exports = exports['default'];

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			/**
    * TODO: These methods can probably be combined somehow
    * Parse HTML tags & HTML Characters
    */

			'use strict';

			Object.defineProperty(exports, '__esModule', {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			}

			var HTMLParser = function () {
				function HTMLParser() {
					_classCallCheck(this, HTMLParser);
				}

				_createClass(HTMLParser, [{
					key: 'typeHtmlChars',

					/**
      * Type HTML tags & HTML Characters
      * @param {string} curString Current string
      * @param {number} curStrPos Position in current string
      * @param {Typed} self instance of Typed
      * @returns {number} a new string position
      * @private
      */

					value: function typeHtmlChars(curString, curStrPos, self) {
						if (self.contentType !== 'html') return curStrPos;
						var curChar = curString.substr(curStrPos).charAt(0);
						if (curChar === '<' || curChar === '&') {
							var endTag = '';
							if (curChar === '<') {
								endTag = '>';
							} else {
								endTag = ';';
							}
							while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
								curStrPos++;
								if (curStrPos + 1 > curString.length) {
									break;
								}
							}
							curStrPos++;
						}
						return curStrPos;
					}

					/**
      * Backspace HTML tags and HTML Characters
      * @param {string} curString Current string
      * @param {number} curStrPos Position in current string
      * @param {Typed} self instance of Typed
      * @returns {number} a new string position
      * @private
      */
				}, {
					key: 'backSpaceHtmlChars',
					value: function backSpaceHtmlChars(curString, curStrPos, self) {
						if (self.contentType !== 'html') return curStrPos;
						var curChar = curString.substr(curStrPos).charAt(0);
						if (curChar === '>' || curChar === ';') {
							var endTag = '';
							if (curChar === '>') {
								endTag = '<';
							} else {
								endTag = '&';
							}
							while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
								curStrPos--;
								if (curStrPos < 0) {
									break;
								}
							}
							curStrPos--;
						}
						return curStrPos;
					}
				}]);

				return HTMLParser;
			}();

			exports['default'] = HTMLParser;
			var htmlParser = new HTMLParser();
			exports.htmlParser = htmlParser;

			/***/
		}]
		/******/)
	);
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

var _barba = __webpack_require__(2);

var _barba2 = _interopRequireDefault(_barba);

var _typed = __webpack_require__(4);

var _typed2 = _interopRequireDefault(_typed);

var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _imagesloaded = __webpack_require__(3);

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _rellax = __webpack_require__(14);

var _rellax2 = _interopRequireDefault(_rellax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typedOptions = {
    typeSpeed: 40,
    strings: ['One Stop Shop For All Your Business Needs', 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', 'One Stop Shop For All Your Business Needs'],
    loop: true
};

var resizeGridItem = function resizeGridItem(item) {
    var grid = document.querySelector('.blog_grid');
    var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    var rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
};

function resizeAllGridItems() {
    var allItems = document.querySelectorAll('.blog_grid--item');
    if (allItems) allItems.forEach(function (item) {
        return resizeGridItem(item);
    });
}

function resizeItemAfterImageLoad(instance) {
    var item = instance.elements[0];
    resizeGridItem(item);
}

function resizeAllAfterImageLoad() {
    var allItems = document.querySelectorAll('.blog_grid--item');
    if (allItems) allItems.forEach(function (item) {
        return (0, _imagesloaded2.default)(item, resizeItemAfterImageLoad);
    });
}

var FadeTransition = _barba2.default.BaseTransition.extend({
    start: function start() {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
    },

    fadeOut: function fadeOut() {
        return $(this.oldContainer).animate({ opacity: 0 }, 350).promise();
    },

    fadeIn: function fadeIn() {
        var _this = this;
        var el = $(this.newContainer);

        $(this.oldContainer).hide();

        el.css({
            visibility: 'visible',
            opacity: 0
        });

        el.animate({ opacity: 1 }, 350, function () {
            _this.done();
        });
    }
});

_barba2.default.Pjax.getTransition = function () {
    return FadeTransition;
};

window.onload = function () {
    _barba2.default.Pjax.start();
};

_barba2.default.Dispatcher.on('transitionCompleted', function () {
    if ($('.typed-element').length) {
        var typed = new _typed2.default('.typed-element', typedOptions);
    }

    if ($('.blog_grid').length) {
        resizeAllAfterImageLoad();
        window.addEventListener("resize", resizeAllGridItems);
    }

    if ($('.skillset').length) {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.click(function (e) {
                e.preventDefault();
                $(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                console.log($(this.getAttribute('href')));
            });
        });
    }

    var get_in_touch_form = document.get_in_touch_form;
    if (get_in_touch_form) {
        get_in_touch_form.addEventListener('submit', async function (e) {
            e.preventDefault();
            var data = {
                name: this.name.value,
                number: this.number.value,
                organisation: this.organisation.value,
                email: this.email.value,
                subject: this.subject.value,
                message: this.message.value
            };
            try {
                var response = await _axios2.default.post('/get_in_touch', data);
                console.log(response.data.message);
            } catch (error) {
                console.log(error);
            }
        });
    }

    if ($('.skillset').length) {
        var rellax = new _rellax2.default('.rellax');
        console.log('Rellax');
    }
});

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Rellax = factory();
  }
})(undefined, function () {
  var Rellax = function Rellax(el, options) {
    "use strict";

    var self = Object.create(Rellax.prototype);

    var posY = 0;
    var screenY = 0;
    var posX = 0;
    var screenX = 0;
    var blocks = [];
    var pause = true;

    // check what requestAnimationFrame to use, and if
    // it's not supported, use the onscroll event
    var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
      setTimeout(callback, 1000 / 60);
    };

    // check which transform property to use
    var transformProp = window.transformProp || function () {
      var testEl = document.createElement('div');
      if (testEl.style.transform === null) {
        var vendors = ['Webkit', 'Moz', 'ms'];
        for (var vendor in vendors) {
          if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {
            return vendors[vendor] + 'Transform';
          }
        }
      }
      return 'transform';
    }();

    // Default Settings
    self.options = {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
      callback: function callback() {}
    };

    // User defined options (might have more in the future)
    if (options) {
      Object.keys(options).forEach(function (key) {
        self.options[key] = options[key];
      });
    }

    // By default, rellax class
    if (!el) {
      el = '.rellax';
    }

    // check if el is a className or a node
    var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];

    // Now query selector
    if (elements.length > 0) {
      self.elems = elements;
    }

    // The elements don't exist
    else {
        throw new Error("The elements you're trying to select don't exist.");
      }

    // Has a wrapper and it exists
    if (self.options.wrapper) {
      if (!self.options.wrapper.nodeType) {
        var wrapper = document.querySelector(self.options.wrapper);

        if (wrapper) {
          self.options.wrapper = wrapper;
        } else {
          throw new Error("The wrapper you're trying to use don't exist.");
        }
      }
    }

    // Get and cache initial position of all elements
    var cacheBlocks = function cacheBlocks() {
      for (var i = 0; i < self.elems.length; i++) {
        var block = createBlock(self.elems[i]);
        blocks.push(block);
      }
    };

    // Let's kick this script off
    // Build array for cached element values
    var init = function init() {
      for (var i = 0; i < blocks.length; i++) {
        self.elems[i].style.cssText = blocks[i].style;
      }

      blocks = [];

      screenY = window.innerHeight;
      screenX = window.innerWidth;
      setPosition();

      cacheBlocks();

      // If paused, unpause and set listener for window resizing events
      if (pause) {
        window.addEventListener('resize', init);
        pause = false;
      }
      animate();
    };

    // We want to cache the parallax blocks'
    // values: base, top, height, speed
    // el: is dom object, return: el cache values
    var createBlock = function createBlock(el) {
      var dataPercentage = el.getAttribute('data-rellax-percentage');
      var dataSpeed = el.getAttribute('data-rellax-speed');
      var dataZindex = el.getAttribute('data-rellax-zindex') || 0;

      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
      // ensures elements are positioned based on HTML layout.
      //
      // If the element has the percentage attribute, the posY and posX needs to be
      // the current scroll position's value, so that the elements are still positioned based on HTML layout
      var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;
      var posX = self.options.horizontal ? dataPercentage || self.options.center ? window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;

      var blockTop = posY + el.getBoundingClientRect().top;
      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

      var blockLeft = posX + el.getBoundingClientRect().left;
      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

      // apparently parallax equation everyone uses
      var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
      var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
      if (self.options.center) {
        percentageX = 0.5;percentageY = 0.5;
      }

      // Optional individual block speed as data attr, otherwise global speed
      var speed = dataSpeed ? dataSpeed : self.options.speed;

      var bases = updatePosition(percentageX, percentageY, speed);

      // ~~Store non-translate3d transforms~~
      // Store inline styles and extract transforms
      var style = el.style.cssText;
      var transform = '';

      // Check if there's an inline styled transform
      if (style.indexOf('transform') >= 0) {
        // Get the index of the transform
        var index = style.indexOf('transform');

        // Trim the style to the transform point and get the following semi-colon index
        var trimmedStyle = style.slice(index);
        var delimiter = trimmedStyle.indexOf(';');

        // Remove "transform" string and save the attribute
        if (delimiter) {
          transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, '');
        } else {
          transform = " " + trimmedStyle.slice(11).replace(/\s/g, '');
        }
      }

      return {
        baseX: bases.x,
        baseY: bases.y,
        top: blockTop,
        left: blockLeft,
        height: blockHeight,
        width: blockWidth,
        speed: speed,
        style: style,
        transform: transform,
        zindex: dataZindex
      };
    };

    // set scroll position (posY, posX)
    // side effect method is not ideal, but okay for now
    // returns true if the scroll changed, false if nothing happened
    var setPosition = function setPosition() {
      var oldY = posY;
      var oldX = posX;

      posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
      posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;

      if (oldY != posY && self.options.vertical) {
        // scroll changed, return true
        return true;
      }

      if (oldX != posX && self.options.horizontal) {
        // scroll changed, return true
        return true;
      }

      // scroll did not change
      return false;
    };

    // Ahh a pure function, gets new transform value
    // based on scrollPosition and speed
    // Allow for decimal pixel values
    var updatePosition = function updatePosition(percentageX, percentageY, speed) {
      var result = {};
      var valueX = speed * (100 * (1 - percentageX));
      var valueY = speed * (100 * (1 - percentageY));

      result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
      result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;

      return result;
    };

    // Loop
    var update = function update() {
      if (setPosition() && pause === false) {
        animate();
      }

      // loop again
      loop(update);
    };

    // Transform3d on parallax element
    var animate = function animate() {
      var positions;
      for (var i = 0; i < self.elems.length; i++) {
        var percentageY = (posY - blocks[i].top + screenY) / (blocks[i].height + screenY);
        var percentageX = (posX - blocks[i].left + screenX) / (blocks[i].width + screenX);

        // Subtracting initialize value, so element stays in same spot as HTML
        positions = updatePosition(percentageX, percentageY, blocks[i].speed); // - blocks[i].baseX;
        var positionY = positions.y - blocks[i].baseY;
        var positionX = positions.x - blocks[i].baseX;

        var zindex = blocks[i].zindex;

        // Move that element
        // (Set the new translation and append initial inline transforms.)
        var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
        self.elems[i].style[transformProp] = translate;
      }
      self.options.callback(positions);
    };

    self.destroy = function () {
      for (var i = 0; i < self.elems.length; i++) {
        self.elems[i].style.cssText = blocks[i].style;
      }

      // Remove resize event listener if not pause, and pause
      if (!pause) {
        window.removeEventListener('resize', init);
        pause = true;
      }
    };

    // Init
    init();

    // Start the loop
    update();

    // Allow to recalculate the initial values whenever we want
    self.refresh = init;

    return self;
  };
  return Rellax;
});

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map