// https://www.hackerrank.com/challenges/flipping-bits

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function flip(num) {
    var complement = ~ num;
    return (complement >>> 0);
}

function processData(input) {
    var raw = input.split('\n');
    var numTests = parseBase10(raw.shift());
    for (var t=0;t<numTests;t++) {
        var num = parseBase10(raw.shift());
        var flipped = flip(num);
        console.log(flipped);
    }
}