# parcel-plugin-prismjs-md

 📦 Parcel plugin for transform markdown with prismjs hightlight to HTML.

<p align="left">
  <a href="https://www.npmjs.com/package/parcel-plugin-prismjs-md">
    <img src="https://img.shields.io/npm/dt/parcel-plugin-prismjs-md.svg" alt="npm">
  </a>
  <a href="https://www.npmjs.com/package/parcel-plugin-prismjs-md">
    <img src="https://img.shields.io/npm/v/parcel-plugin-prismjs-md.svg" alt="npm">
  </a>
  <a href="https://coveralls.io/r/0326/parcel-plugin-prismjs-md">
    <img src="https://img.shields.io/npm/l/parcel-plugin-prismjs-md.svg" alt="License">
  </a>
</p>

# Features
This plugin is based on [marked](https://github.com/markedjs/marked), support full-featured markdown syntax. Surppot ES6 code syntax, and hightlight parser [prismjs](http://prismjs.com/index.html)

Go to [here](http://prismjs.com/download.html) to download the prismjs themes. 

# Getting started
First of all, install the plugin:

```bash
npm i parcel-plugin-prismjs-md --save-dev # or yarn add parcel-plugin-prismjs-md --dev
```

Then you can import *.md file as html string:

```javascript
import README from 'README.md'

document.body.innerHTML = README
```
# License
<a href="./LICENSE">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/License_icon-mit-88x31-2.svg/128px-License_icon-mit-88x31-2.svg.png">
</a>
