'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getCurve = require('./getCurve');

var _getCurve2 = _interopRequireDefault(_getCurve);

var _getDuration = require('./getDuration');

var _getDuration2 = _interopRequireDefault(_getDuration);

var _getMotion = require('./getMotion');

var _getMotion2 = _interopRequireDefault(_getMotion);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('@ibm/motion/index.js!');

exports.default = {
	getCurve: _getCurve2.default,
	getDuration: _getDuration2.default,
	getMotion: _getMotion2.default,
	constants: _constants2.default
};