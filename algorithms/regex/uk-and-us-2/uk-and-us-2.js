// https://www.hackerrank.com/challenges/uk-and-us-2

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function countOccurences(ukWord, lines) {
    var usWord = ukWord.replace(/\Bour/, 'or');
    var exp = "\\b(" + usWord + "|" + ukWord + ")\\b";
    var re = new RegExp(exp, "g");

    var count = 0;
    lines.forEach( function(line) {
        var result = line.match(re);
        if (result) {
            count = count + result.length;
        }
    });

    return count;
}

function processData(input) {
    var raw = input.split('\n');

    var lines = [];
    var numLines = parseBase10(raw.shift());
    for (var l=0;l<numLines;l++) {
        lines.push(raw.shift());
    }

    var count = 0;
    var numTests = parseBase10(raw.shift());
    for (var t=0;t<numTests;t++) {
        var word = raw.shift();
        var count = countOccurences(word, lines);
        console.log(count);
    }
}