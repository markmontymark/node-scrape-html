'use strict';

var jsdom = require('jsdom');

function defaultCallback(selector){
  return function (err,window){
    document.querySelectorAll(selector).each(function(i,ele){
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
    'done': cb
  });
};
