// https://www.hackerrank.com/challenges/valid-pan-format

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isValidPan(s) {

    if (s.length != 10) {
        return false;
    }

    var reg = '[A-Z]{5}[0-9]{4}[A-Z]'
    return s.match(reg);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var result = isValidPan(lines.shift());

        if (result) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}