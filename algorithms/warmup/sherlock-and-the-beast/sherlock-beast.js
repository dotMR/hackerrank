// https://www.hackerrank.com/challenges/sherlock-and-the-beast

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function generateNum(numFives, numThrees) {
    var result = '';
    var loops = numFives + numThrees;
    for (var l=0;l<loops;l++) {
        if (l < numFives) {
            result = result.concat(5);
        } else {
            result = result.concat(3);
        }
    }
    return result;
}

function findDecentNumber(digits) {
    if (digits < 3) {
        return -1;
    }

    if (digits % 3 == 0) {
        return generateNum(digits, 0);
    }

    // set ceiling for highest possible == num occurences of a '5'
    var possibleFives = 3 * Math.floor(digits / 3);

    for (var f=possibleFives;f>=0;f = f - 3) {
        var numThrees = (digits - f)
        if (numThrees % 5 == 0) {
            return generateNum(f, numThrees);
        }
    }

    return -1;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var digits = parseBase10(lines.shift());
        var num = findDecentNumber(digits);
        console.log(num);
    }
}