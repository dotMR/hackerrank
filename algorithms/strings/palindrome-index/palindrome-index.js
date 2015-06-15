// https://www.hackerrank.com/challenges/palindrome-index

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

// TODO: this logic can be combined with findIndex()
function isPalindrome(s) {
    var frontIndex = 0;
    var backIndex = (s.length - 1);

    while (frontIndex < backIndex) {
        if (s[frontIndex] != s[backIndex]) {
            return false;
        }

       frontIndex = (frontIndex + 1);
       backIndex = (backIndex - 1);
    }

    return true;
}

function findIndex(s) {
    var frontIndex = 0;
    var backIndex = (s.length - 1);

    while (frontIndex < backIndex) {
        var front = s.charAt(frontIndex);
        var back = s.charAt(backIndex);

        if (front != back) {
            var f = s.split('');
            f.splice(frontIndex, 1);

            if (isPalindrome(f)) {
                return frontIndex;
            } else {
                return backIndex;
            }
        }

       frontIndex = (frontIndex + 1);
       backIndex = (backIndex - 1);
    }

    return -1;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var input = lines.shift();

        var index = findIndex(input);
        console.log(index);
    }
}