'use strict';

exports.__esModule = true;
exports.validateEmail = validateEmail;
exports.setEmail = setEmail;
exports.emailDomain = emailDomain;
exports.emailLocalPart = emailLocalPart;

var _trim = require('trim');

var _trim2 = _interopRequireDefault(_trim);

var _index = require('./index');

var _string_utils = require('../utils/string_utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(str) {
  var result = regExp.exec((0, _trim2.default)(str.toLowerCase()));
  return result && result[0];
}

function setEmail(m, str) {
  return (0, _index.setField)(m, "email", str, validateEmail);
}

function emailDomain(str) {
  var result = regExp.exec((0, _trim2.default)(str.toLowerCase()));
  return result ? result.slice(-2)[0] : "";
}

function emailLocalPart(str) {
  var domain = emailDomain(str);
  return domain ? str.slice(0, -1 - domain.length) : str;
}
