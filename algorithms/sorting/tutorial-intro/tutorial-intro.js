// https://www.hackerrank.com/challenges/tutorial-intro

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function processData(input) {
    var lines = input.split('\n');
    var target = parseBase10(lines.shift());
    var length = parseBase10(lines.shift());

    var values = lines.shift().split(' ');
    values.forEach( function(x, i) {
        if (target == x) {
            console.log(i);
        }
    });
}