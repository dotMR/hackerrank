// https://www.hackerrank.com/challenges/is-fibo

// inspired by awesome algorithm here
// http://stackoverflow.com/questions/2432669/test-if-a-number-is-fibonacci/2822801#2822801

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isFibo(num) {
    var root5 = Math.sqrt(5);
    var phi = (1 + root5) / 2;

    var idx = Math.floor(Math.log(num*root5) / Math.log(phi) + 0.5 );
    var u = Math.floor(Math.pow(phi, idx)/root5 + 0.5);

    return (u == num);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var number = parseBase10(lines.shift());
        var result = isFibo(number);

        if (result) {
            console.log('IsFibo');
        } else {
            console.log('IsNotFibo');
        }
    }
}