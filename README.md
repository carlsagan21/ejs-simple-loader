# ejs-simple-loader

basic ejs loader for webpack

## Examples

```javascript
// simple usage
require('ejs-simple!./path/to/file.ejs')
// with data as params
require('ejs-simple?key=value!./path/to/file.ejs')
```

`{loader}!file.ext` syntax of webpack is one of the common way to use loader.

Personally, I combined `ejs-simple-loader` with [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to make html and insert javascript on it.

```javascript
// with html-webpack-plugin
new HtmlWebpackPlugin({
  title: template,
  filename: template + '.html',
  template: 'ejs-simple?title=' + template + '&distPath=' + DIST_PATH + '!src/templates/' + template + '.ejs',
  chunks: ['landing'],
  distPath: DIST_PATH
})
```

so it goes as followes:  ejs -> html -> javascript inserted html

```html
<!-- Use include syntax -->
<!-- Use filenames relative to working dir. -->
<div>
  <%- include('./header') %>
</div>
```

If it is used with html-webpack-plugin, the path is relative to the location of mother template. so if templates are stored in same directory, './filename' is enough.

## Installation

```shell
npm install --save ejs-simple-loader
```

## Purpose

I know there are several ejs loader available. [ejs-loader](https://github.com/okonet/ejs-loader), [ejs-compiled-loader](https://github.com/bazilio91/ejs-compiled-loader), [ejs-render-loader](https://www.npmjs.com/package/ejs-render-loader) have already existed and still works.

But, [ejs-loader](https://github.com/okonet/ejs-loader) use `lodash` instead of *de facto* official [ejs](https://github.com/mde/ejs).  
[ejs-compiled-loader](https://github.com/bazilio91/ejs-compiled-loader) have problem with `<%- include('header') %>` syntax. it works in `<%- include header %>` syntax form, which is still supported, but seems to fail on more [recent syntax](https://github.com/mde/ejs#includes). And also too many unnecessary dependencies like `html-minifier`, `merge`, and `uglify-js`.  
[ejs-render-loader](https://www.npmjs.com/package/ejs-render-loader) performs perfectly, but I couldn't find repo of it. Only [npm package](https://www.npmjs.com/package/ejs-render-loader) seems to exist.

And all of them are not actively updated. I'm not promising eternal maintenance of this library, but rather will do my best. ;)

### License

ejs-simple-loader is MIT licensed.
