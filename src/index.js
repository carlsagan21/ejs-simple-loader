/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author sookiwi
*/

const loaderUtils = require('loader-utils');
const ejs = require('ejs');
const path = require('path');

const ejsSimpleLoader = function(content) {
  this.cacheable && this.cacheable();

  // Handle options
  const loaderOptions = loaderUtils.getOptions(this)
  const query = loaderOptions

  const configKey = loaderOptions.config || 'ejsSimpleLoader';
  const globalOptions = this.options[configKey] || {};

  const userOptions = {
    ...globalOptions,
    ...loaderOptions
  };
  const defaultOptions = {};

  const options = {
    ...defaultOptions,
    ...userOptions
  };

  // Use filenames relative to working dir, which should be project root
  options.filename = path.relative(process.cwd(), this.resourcePath);

  const template = ejs.compile(content, options)(query);

  return 'module.exports = ' + JSON.stringify(template);
};

module.exports = ejsSimpleLoader;
