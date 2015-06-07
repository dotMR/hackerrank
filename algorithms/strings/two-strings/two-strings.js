// https://www.hackerrank.com/challenges/two-strings

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function containsSubstring(a, b) {
    if (a == b) {
        return true;
    }

    var test = a;
    var compare = b;
    if (a.length > b.length) {
        test = b;
        compare = a;
    }

    for (var i=0;i<test.length;i++) {
        var c = test.charAt(i);

        if (compare.indexOf(c) != -1) {
            return true;
        }
    }

    return false;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var a = lines.shift();
        var b = lines.shift();

        var result = containsSubstring(a, b);
        if (result) {
            console.log("YES");
        }
        else {
            console.log("NO");
        }
    }
}