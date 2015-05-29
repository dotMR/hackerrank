// https://www.hackerrank.com/challenges/find-digits

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function getNumDividableDigits(num) {
    var digits = num.toString().split('');

    var divisors = digits.filter( function(digit) {
        var d = parseBase10(digit);

        return (num % d == 0);
    });

    return divisors.length;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var num = lines.shift();
        var count = getNumDividableDigits(num);
        console.log(count);
    }
}