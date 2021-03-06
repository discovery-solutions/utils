(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/defineProperty'), require('@babel/runtime/helpers/toConsumableArray'), require('js-sha512'), require('@babel/runtime/helpers/classCallCheck'), require('@babel/runtime/helpers/createClass'), require('@babel/runtime/helpers/inherits'), require('@babel/runtime/helpers/possibleConstructorReturn'), require('@babel/runtime/helpers/getPrototypeOf'), require('@babel/runtime/helpers/wrapNativeSuper'), require('react'), require('@babel/runtime/helpers/slicedToArray')) :
	typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/defineProperty', '@babel/runtime/helpers/toConsumableArray', 'js-sha512', '@babel/runtime/helpers/classCallCheck', '@babel/runtime/helpers/createClass', '@babel/runtime/helpers/inherits', '@babel/runtime/helpers/possibleConstructorReturn', '@babel/runtime/helpers/getPrototypeOf', '@babel/runtime/helpers/wrapNativeSuper', 'react', '@babel/runtime/helpers/slicedToArray'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['@octaldev/react-router'] = factory(global._defineProperty, global._toConsumableArray, global.sha512, global._classCallCheck, global._createClass, global._inherits, global._possibleConstructorReturn, global._getPrototypeOf, global._wrapNativeSuper, global.react, global._slicedToArray));
}(this, (function (_defineProperty, _toConsumableArray, sha512, _classCallCheck, _createClass, _inherits, _possibleConstructorReturn, _getPrototypeOf, _wrapNativeSuper, react, _slicedToArray) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
	var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
	var sha512__default = /*#__PURE__*/_interopDefaultLegacy(sha512);
	var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
	var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
	var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
	var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
	var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
	var _wrapNativeSuper__default = /*#__PURE__*/_interopDefaultLegacy(_wrapNativeSuper);
	var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

	function validateEmail(email) {
	  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(String(email).toLowerCase());
	}
	function validateCPF(cpf) {
	  if (cpf.length < 14) return false;
	  cpf = cpf.replace(/\D/g, "");
	  if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
	  var res = true;
	  [9, 10].forEach(function (j) {
	    var soma = 0,
	        r;
	    cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
	      soma += parseInt(e) * (j + 2 - (i + 1));
	    });
	    r = soma % 11;
	    r = r < 2 ? 0 : 11 - r;
	    if (r != cpf.substring(j, j + 1)) res = false;
	  });
	  return res;
	}
	function validatePhone(phone) {
	  var phoneRegex = new RegExp("^\\([0-9]{2}\\)(([0-9]{4}-[0-9]{4})|([0-9]{5}-[0-9]{4}))$");
	  return phoneRegex.test(phone);
	}
	function isFunction(fn) {
	  return typeof fn === "function";
	}
	function compareObjects(obj1, obj2) {
	  return JSON.stringify(obj1) === JSON.stringify(obj2);
	}

	var logical = /*#__PURE__*/Object.freeze({
		__proto__: null,
		validateEmail: validateEmail,
		validateCPF: validateCPF,
		validatePhone: validatePhone,
		isFunction: isFunction,
		compareObjects: compareObjects
	});

	function SHA512(value) {
	  return sha512__default['default'](value);
	}
	function getOS() {
	  try {
	    if (typeof navigator.product === "string" && navigator.product.toLowerCase().search("react") > -1) {
	      var lib = "react-native"; // eslint-ignore-next-line

	      return require(lib).Platform.OS === "ios" ? "iOS" : "Android";
	    }

	    var userAgent = window.navigator.userAgent;
	    if (userAgent.toLowerCase().search("win") > -1) return "Windows";
	    if (userAgent.toLowerCase().search("x11") > -1) return "Unix";
	    if (userAgent.toLowerCase().search("mac") > -1) return "MacOS";
	    if (userAgent.toLowerCase().search("linux") > -1) return "Linux";
	    return userAgent;
	  } catch (e1) {
	    return "Electron";
	  }
	}
	function searchInto(string1, string2) {
	  try {
	    return string1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().search(string2.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) > -1;
	  } catch (e) {
	    return false;
	  }
	}
	function clearString(text) {
	  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var ignore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  if (typeof text !== "string") text += "";
	  var newText = "";
	  var clearStringFromThese = [".", ",", "/", "\\", "|", "-", "_", "(", ")", " "].concat(_toConsumableArray__default['default'](extra));

	  for (var i = 0; i < text.length; i++) {
	    if (!clearStringFromThese.includes(text[i].toUpperCase()) || ignore.includes(text[i].toUpperCase())) newText += text[i];
	  }

	  return newText;
	}
	function mask(text, mask) {
	  var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  var ignore = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
	  var newText = "";
	  text = clearString(text + "", extra, ignore);
	  var j = 0;

	  for (var i = 0; i < text.length; i++) {
	    if (i <= mask.length - 1) {
	      if (mask[j] !== "#") {
	        newText += mask[j];
	        j++;
	        newText += text[i];
	      } else {
	        newText += text[i];
	      }

	      j++;
	    }
	  }

	  return newText.slice(0, mask.length);
	}

	var general = /*#__PURE__*/Object.freeze({
		__proto__: null,
		SHA512: SHA512,
		getOS: getOS,
		searchInto: searchInto,
		clearString: clearString,
		mask: mask
	});

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default['default'](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default['default'](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default['default'](this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function capitalize(s) {
	  if (typeof s !== "string") return "";
	  return s.charAt(0).toUpperCase() + s.slice(1);
	}
	function elevation(value) {
	  var string = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#000";

	  if (string) {
	    return "\n            elevation: ".concat(value, ";\n            shadow-color: ").concat(color, ";\n            shadow-opacity: ").concat(0.015 * value + 0.18, ";\n            shadow-radius: ").concat(0.54 * value, "px;\n            shadow-offset: {\n                height: ").concat(0.6 * value, "px;\n            };\n        ");
	  }

	  return {
	    elevation: value,
	    shadowColor: color,
	    shadowOpacity: 0.0015 * value + 0.18,
	    shadowRadius: 0.54 * value,
	    shadowOffset: {
	      height: 0.6 * value
	    }
	  };
	} // * * * * * upgradeTheme * * * * *

	var Color = /*#__PURE__*/function (_String) {
	  _inherits__default['default'](Color, _String);

	  var _super = _createSuper(Color);

	  function Color() {
	    _classCallCheck__default['default'](this, Color);

	    return _super.apply(this, arguments);
	  }

	  _createClass__default['default'](Color, [{
	    key: "opacity",
	    value: function opacity() {
	      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.valueOf());
	      var r = parseInt(result[1], 16);
	      var g = parseInt(result[2], 16);
	      var b = parseInt(result[3], 16);
	      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(o, ")");
	    }
	  }]);

	  return Color;
	}( /*#__PURE__*/_wrapNativeSuper__default['default'](String));

	function upgradeTheme(theme) {
	  for (var color in theme) {
	    if (typeof theme[color] === "string") theme[color] = new Color(theme[color]);
	  }

	  return theme;
	} // * * * * * upgradeTheme * * * * *

	var style = /*#__PURE__*/Object.freeze({
		__proto__: null,
		capitalize: capitalize,
		elevation: elevation,
		upgradeTheme: upgradeTheme
	});

	function usePrevious(value) {
	  var ref = react.useRef(value);
	  react.useEffect(function () {
	    ref.current = value;
	  });
	  return ref.current;
	}
	function useClickAway(callback) {
	  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  react.useEffect(function () {
	    try {
	      if ("addEventListener" in window.document) {
	        window.document.addEventListener("mousedown", callback);
	        return function () {
	          return window.document.removeEventListener("mousedown", callback);
	        };
	      }
	    } catch (e) {
	      console.log(e);
	    }
	  }, dependencies);
	}

	var hooks = /*#__PURE__*/Object.freeze({
		__proto__: null,
		usePrevious: usePrevious,
		useClickAway: useClickAway
	});

	function hasParentClass(element, className) {
	  try {
	    do {
	      if (element.classList && element.classList.contains(className)) return true;
	      element = element.parentNode;
	    } while (element);

	    return false;
	  } catch (e) {
	    console.log(e);
	    return false;
	  }
	}
	function useMousePosition() {
	  if ("addEventListener" in window === false) return false;

	  try {
	    var _useState = react.useState([null, null]),
	        _useState2 = _slicedToArray__default['default'](_useState, 2),
	        mousePosition = _useState2[0],
	        setMousePosition = _useState2[1];

	    var updateMousePosition = function updateMousePosition(e) {
	      return setMousePosition([e.clientX, e.clientY]);
	    };

	    react.useEffect(function () {
	      window.addEventListener("mousemove", updateMousePosition);
	      return function () {
	        return window.removeEventListener("mousemove", updateMousePosition);
	      };
	    }, []);
	    return mousePosition;
	  } catch (e) {
	    return [undefined, undefined];
	  }
	}

	var web = /*#__PURE__*/Object.freeze({
		__proto__: null,
		hasParentClass: hasParentClass,
		useMousePosition: useMousePosition
	});

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var utils = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, logical), general), hooks), style), web);

	return utils;

})));
