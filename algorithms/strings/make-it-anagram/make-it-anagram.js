// https://www.hackerrank.com/challenges/make-it-anagram

'use strict';

var reader = require('file-reader');
reader.init(processData);

var ASCII_VAL_a = 97;
var COUNT_LETTERS = 26;

function parseBase10(s) {
    return parseInt(s, 10);
}

function makeAnagram(a, b) {

    var deletions = 0;
    var aIndex = generateCharMap(a);
    var bIndex = generateCharMap(b);

    for (var i=0;i<COUNT_LETTERS;i++) {
        var i_a = (aIndex[i]) ? parseBase10(aIndex[i]) : 0;
        var i_b = (bIndex[i]) ? parseBase10(bIndex[i]) : 0;

        deletions = deletions + Math.abs(i_a - i_b);
    }

    return deletions;
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
    var a = lines.shift();
    var b = lines.shift();

    var deletions = makeAnagram(a,b);
    console.log(deletions);
}