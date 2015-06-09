// https://www.hackerrank.com/challenges/anagram

'use strict';

var reader = require('file-reader');
reader.init(processData);

var ASCII_VAL_a = 97;
var COUNT_LETTERS = 26;

function parseBase10(s) {
    return parseInt(s, 10);
}

function makeAnagram(input) {
    if (input.length % 2 != 0) {
        return -1;
    }

    var changes = 0;
    var mid = (input.length / 2);
    var a = input.substring(0, mid);
    var b = input.substring(mid);

    var aIndex = generateCharMap(a);
    var bIndex = generateCharMap(b);

    for (var i=0;i<COUNT_LETTERS;i++) {
        var i_a = (aIndex[i]) ? parseBase10(aIndex[i]) : 0;
        var i_b = (bIndex[i]) ? parseBase10(bIndex[i]) : 0;

        changes = changes + Math.abs(i_a - i_b);
    }

    changes = (changes / 2);

    return changes;
}

function generateCharMap(s) {
    var index = [];
    for (var i=0;i<s.length;i++) {
        var c = s.charCodeAt(i) - ASCII_VAL_a;

        var count = 1;
        if (index[c]) {
            count = parseBase10(index[c]) + 1;
        }

        index[c] = count;
    }

    return index;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var input = lines.shift();

        var changes = makeAnagram(input);
        console.log(changes);
    }
}