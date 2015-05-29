// https://www.hackerrank.com/challenges/halloween-party

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function calculatePieces(cuts) {
   var a = Math.floor(cuts / 2);
   var b = cuts - a;
   return a * b;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var numCuts = parseBase10(lines.shift());
        var pieces = calculatePieces(numCuts);
        console.log(pieces);
    }
}