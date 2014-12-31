#!/usr/bin/env node

'use strict';

var argv = require('yargs').argv;
var scrape = require('..');

var url = argv._[0];
var selector = argv._[1];
scrape(url,selector);
