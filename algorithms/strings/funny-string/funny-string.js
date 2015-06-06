// https://www.hackerrank.com/challenges/funny-string

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isFunny(input) {

    var endIndex = input.length - 1;
    var funny = true;
    for (var i=0;i<input.length - 1;i++) {
        var f1 = input.charCodeAt(i+1);
        var f0 = input.charCodeAt(i);

        var r0 = input.charCodeAt(endIndex - i);
        var r1 = input.charCodeAt(endIndex - i - 1);

        var f = Math.abs(f1-f0);
        var r = Math.abs(r0-r1);

        if (f != r) {
            funny = false;
            break;
        }
    }

    return funny;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var input = lines.shift();

        var funny = isFunny(input);
        if (funny) {
            console.log("Funny");
        }
        else {
            console.log("Not Funny");
        }
    }
}