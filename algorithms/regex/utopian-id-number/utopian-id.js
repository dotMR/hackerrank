// https://www.hackerrank.com/challenges/utopian-identification-number

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isValidId(s) {
    var reg = '^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}';
    return s.match(reg);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var result = isValidId(lines.shift());
        if (result) {
            console.log('VALID');
        } else {
            console.log('INVALID');
        }
    }
}