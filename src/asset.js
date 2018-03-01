const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const marked = require('marked');
const Prism = require('prismjs');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-markdown');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-sass');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-markup');
module.exports = class MarkdownAsset extends HTMLAsset {
  constructor (name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
    marked.setOptions({
      highlight: function (code, lang) {
        return Prism.highlight(code, Prism.languages[lang || 'markup'])
      }
    });
  }

  parse (code) {
    const transHtml = marked(code);
    // hack javascript code ${} syntax and `` string.
    this.transHtml = transHtml.replace(/\$/g, '&#36;').replace(/`/g, '&#96;');

    return super.parse(this.transHtml);
  }

  generate () {
    return {
      js: `module.exports=\`${this.transHtml}\``
    };
  }
}
