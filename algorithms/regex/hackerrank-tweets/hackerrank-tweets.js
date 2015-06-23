// https://www.hackerrank.com/challenges/hackerrank-tweets

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function containsRef(s) {
    var reg = /hackerrank/gi;
    return s.match(reg);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());
    var count = 0;

    for (var t=0;t<numTests;t++) {
        var result = containsRef(lines.shift());

        if (result) {
            count = count + 1;
        }
    }

    console.log(count);
}