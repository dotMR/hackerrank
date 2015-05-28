// https://www.hackerrank.com/challenges/the-love-letter-mystery

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function findPalindrome(s) {
    var forward = 0;
    var backward = s.length - 1;
    var mutations = 0;

    while (forward < backward) {
        var a = s.charCodeAt(forward);
        var b = s.charCodeAt(backward);

        mutations += Math.abs(b-a);

        forward++;
        backward--;
    }

    return mutations;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var s = lines.shift();

        var p = findPalindrome(s);
        console.log(p);
    }
}