// https://www.hackerrank.com/challenges/find-hackerrank

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function containsRef(s) {
    var front = s.match(/^hackerrank/);
    var back = s.match(/hackerrank$/);

    if (front && back) {
        return 0;
    }
    if (front) {
        return 1;
    }
    if (back) {
        return 2;
    }

    return -1;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var result = containsRef(lines.shift());
        console.log(result);
    }
}