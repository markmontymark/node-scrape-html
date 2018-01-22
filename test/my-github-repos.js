/*global describe,it*/

'use strict';

var assert = require('assert');
var scrape = require('../lib/');

describe('my github repos',function (){
  it('can list my repos',function(done){
    var selector = '#user-repositories-list a';
    var repos = [];
    scrape('http://github.com/markmontymark?tab=repositories',selector,function(err,window){
      var elements = window.document.querySelectorAll(selector);
			if(elements){
				for(var i=0;i<elements.length;i++){
					var ele = elements[i];
					repos.push(ele.innerHTML.trim());
				}
      }
      console.log(repos);
      assert(repos.length > 0,'Has non-zero length');

      var foundThisRepo = false;
      repos.some(function(item){
        if(item === 'node-scrape-html'){
          foundThisRepo = true;
          return true;
        }
      });
      assert(foundThisRepo,'found this repo');
      done();
    });
  });
});

