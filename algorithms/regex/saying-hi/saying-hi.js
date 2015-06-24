// https://www.hackerrank.com/challenges/saying-hi

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isHi(s) {
    var reg = '^[hH][[iI][ ][^dD]';
    return s.match(reg);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var s = lines.shift();
        var result = isHi(s);
        if (isHi(s)) {
            console.log(s);
        }
    }
}