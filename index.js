"use strict";

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author sookiwi
*/
var loaderUtils = require("loader-utils");
var ejs = require("ejs");
var path = require('path');

module.exports = function (content) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.getOptions(this) || {};
  var configKey = query.config || "ejsSimpleLoader";
  var options = this.options[configKey] || {};

  // Use filenames relative to working dir, which should be project root
  options.filename = path.relative(process.cwd(), this.resourcePath);

  var template = ejs.compile(content, options)(query);

  return 'module.exports = ' + JSON.stringify(template);
};
