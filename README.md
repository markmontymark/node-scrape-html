# node-scrape-html

CLI utility to take a URL and CSS selector, and return line-oriented content found

# Setup

```sh
git clone git://github.com/markmontymark/node-scrape-html
cd node-scrape-html
npm install
```

# Usage

- Command line

```sh
$ scrape http://github.com/markmontymark\?tab\=repositories '.repo-list-name a'
node-scrape-html
dotfiles
type_dispatch
...
```

- Included in app

```javascript
// by default, element's innerHTML.trim() is sent to console.log()
var scrape = require('scrape');
scrape('http://github.com/markmontymark\?tab\=repositories','.repo-list-name a');
// node-scrape-html
// dotfiles
// type_dispatch
// ...

// Or pass in your own callback
var scrape = require('scrape');
var selector = '.repo-list-name a';
var repos = [];
scrape(
  'http://github.com/markmontymark\?tab\=repositories',
  selector,
  function(err,window){
    window.$(selector).each(function(i,ele){
      repos.push( ele.innerHTML.trim());
    });
    console.log( repos );
  }
);
// eventually, repos will have same items:
// [ 'node-scrape-html',
//   'dotfiles',
//   'type_dispatch',
//   ... ]
```
