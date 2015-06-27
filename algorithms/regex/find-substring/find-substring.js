// https://www.hackerrank.com/challenges/find-substring

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function findSubstring(word, sentences) {
    var exp = "\\B" + word + "\\B";
    var re = new RegExp(exp, "g");

    var count = 0;
    sentences.forEach( function(sentence) {
        var result = sentence.match(re);
        if (result) {
            count = count + result.length;
        }
    });

    return count;
}

function processData(input) {
    var raw = input.split('\n');

    var sentences = [];
    var numLines = parseBase10(raw.shift());
    for (var l=0;l<numLines;l++) {
        sentences.push(raw.shift());
    }

    var tests = [];
    var numTests = parseBase10(raw.shift());
    for (var t=0;t<numTests;t++) {
        var word = raw.shift();
        var result = findSubstring(word, sentences);
        console.log(result);
    }
}