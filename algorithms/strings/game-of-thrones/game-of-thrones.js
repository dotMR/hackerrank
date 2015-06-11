// https://www.hackerrank.com/challenges/game-of-thrones

'use strict';

var reader = require('file-reader');
reader.init(processData);

var ASCII_VAL_a = 97;
var COUNT_LETTERS = 26;

function parseBase10(s) {
    return parseInt(s, 10);
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

function canMakePalindrome(s) {
    var chars = generateCharMap(s);

    var unmatchedChars = 0;
    for (var i=0;i<COUNT_LETTERS;i++) {
        if (chars[i]) {
            var count = parseBase10(chars[i]);
            if (count % 2 != 0) {
                unmatchedChars = unmatchedChars + 1;

                if (unmatchedChars > 1) {
                    break;
                }
            }
        }
    }

    return (unmatchedChars <= 1);
}

function processData(input) {
    var lines = input.split('\n');
    var result = canMakePalindrome(lines.shift());

    if (result) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}