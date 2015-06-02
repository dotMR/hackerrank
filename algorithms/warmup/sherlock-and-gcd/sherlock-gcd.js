// https://www.hackerrank.com/challenges/sherlock-and-gcd

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function findGcd(a,b) {
    if (a == 0) {
        return b;
    }

    if (b == 0) {
        return a;
    }

    var q = Math.floor(a / b);
    var r = a % b;

    return findGcd(b, r);
}

function findSubset(size, ints) {
    var gcd = ints[0];
    var end = ints.length - 1;

    for (var i=1;i<end;i++) {
        var current = parseBase10(ints[i]);
        gcd = findGcd(gcd, current);
    }

    if (gcd > 1) {
        return 'NO';
    } else {
        return 'YES';
    }
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var size = parseBase10(lines.shift());
        var ints = lines.shift().split(' ');

        var result = findSubset(size, ints);
        console.log(result);
    }
}