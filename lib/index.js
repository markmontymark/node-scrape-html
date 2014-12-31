'use strict';

var jsdom = require('jsdom');
var fs = require('fs');
var jquerySrc = fs.readFileSync('./node_modules/jquery/dist/jquery.min.js', 'utf-8');

function defaultCallback(selector){
  return function (err,window){
    window.$(selector).each(function(i,ele){
      console.log(ele.innerHTML.trim());
    });
  };
}

module.exports = function scrape (url,selector,cb){
  if(!cb){
    cb = defaultCallback(selector);
  }
  jsdom.env({
    'url': url,
    'src': [jquerySrc],
    'done': cb
  });
};
