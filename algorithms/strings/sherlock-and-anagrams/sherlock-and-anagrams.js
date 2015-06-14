// https://www.hackerrank.com/challenges/sherlock-and-anagrams

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function countAnagrams(s) {
    var count = 0;
    var misses = 0;

    var start = 0;
    var end = (s.length - 1);
    while (start < end) {
        var a = s.charAt(start);
        var b = s.charAt(end);

        if (a == b) {
            count = count + 1;
        } else {
            misses = misses + 1;
        }

        start = start + 1;
        end = end - 1;
    }

    if (misses == 0) {
        return s.length;
    }

    if (s.length % 2 == 1) {
        count = count + 1;
    }

    return count;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var result = countAnagrams(lines.shift());
        console.log(result);
    }
}