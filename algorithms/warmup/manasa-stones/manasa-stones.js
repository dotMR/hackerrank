// https://www.hackerrank.com/challenges/manasa-and-stones

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function compare(a, b) {
    var a = parseBase10(a);
    var b = parseBase10(b);

    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }

    return 0;
}

function findLastStone(numStones, a, b) {
    var lastStones = [0];

    for (var s=0;s<numStones-1;s++) {
        var stones = [];
        lastStones.forEach( function(n) {
            var val = parseBase10(n);
            var x = val + a;
            var y = val + b;

            if (stones.indexOf(x) == -1) {
                stones.push(x);
            }

            if (stones.indexOf(y) == -1) {
                stones.push(y);
            }
        });
        lastStones = stones;
    }

    return lastStones.sort(compare);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var stones = parseBase10(lines.shift());
        var a = parseBase10(lines.shift());
        var b = parseBase10(lines.shift());

        var values = findLastStone(stones, a, b);
        var print = values.toString().replace(/,/g,' ');
        console.log(print);
    }
}