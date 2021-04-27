'use strict';

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var react = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function searchInto(string1, string2) {
  try {
    return string1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().search(string2.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) > -1;
  } catch (e) {
    return false;
  }
}

var general = /*#__PURE__*/Object.freeze({
	__proto__: null,
	searchInto: searchInto
});

function usePrevious(value) {
  var ref = react.useRef(value);
  react.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

var hooks = /*#__PURE__*/Object.freeze({
	__proto__: null,
	usePrevious: usePrevious
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var utils = _objectSpread(_objectSpread({}, general), hooks);

module.exports = utils;
