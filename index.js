'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author sookiwi
*/

var loaderUtils = require('loader-utils');
var ejs = require('ejs');
var path = require('path');

var ejsSimpleLoader = function ejsSimpleLoader(content) {
  this.cacheable && this.cacheable();

  // Handle options
  var loaderOptions = loaderUtils.getOptions(this) || {};
  var query = loaderOptions;

  var configKey = loaderOptions.config || 'ejsSimpleLoader';
  var globalOptions = this.options[configKey] || {};

  var userOptions = _extends({}, globalOptions, loaderOptions);
  var defaultOptions = {};

  var options = _extends({}, defaultOptions, userOptions);

  // Use filenames relative to working dir, which should be project root
  options.filename = path.relative(process.cwd(), this.resourcePath);

  var template = ejs.compile(content, options)(query);

  return 'module.exports = ' + JSON.stringify(template);
};

module.exports = ejsSimpleLoader;