// https://www.hackerrank.com/challenges/alternating-characters

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function findDeletions(input) {
    var deletions = 0;
    var previous = input.charAt(0);

    for (var i=1;i<input.length;i++) {
        var c = input.charAt(i);
        if (c == previous) {
            deletions ++;
        } else {
           previous = c;
        }
    }

    return deletions;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var input = lines.shift();

        var deletions = findDeletions(input);
        console.log(deletions);
    }
}