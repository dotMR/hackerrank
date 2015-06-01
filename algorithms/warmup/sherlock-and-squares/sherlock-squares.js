// https://www.hackerrank.com/challenges/sherlock-and-squares

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function findSquares(start, end) {
    var root = Math.ceil(Math.sqrt(start));
    var endRoot = Math.floor(Math.sqrt(end));

    return (endRoot - root + 1);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var ints = lines.shift().split(' ');
        var start = parseBase10(ints[0]);
        var end = parseBase10(ints[1]);
        var count = findSquares(start, end);
        console.log(count);
    }
}