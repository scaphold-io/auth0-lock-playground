'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('../ui/list');

var _list2 = _interopRequireDefault(_list);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: these actions should be passed as props

exports.default = function (_ref) {
  var icon = _ref.icon;
  var iconUrl = _ref.iconUrl;
  var model = _ref.model;
  var name = _ref.name;
  var items = _ref.items;
  return _react2.default.createElement(_list2.default, {
    icon: icon,
    iconUrl: iconUrl,
    items: items,
    onSelect: function onSelect(x) {
      return (0, _actions.selectOption)(model.get("id"), name, x);
    },
    onCancel: function onCancel() {
      return (0, _actions.cancelOptionSelection)(model.get("id"));
    }
  });
};
