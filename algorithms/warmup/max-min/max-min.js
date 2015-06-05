// https://www.hackerrank.com/challenges/angry-children

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function minimizeUnfairness(range, source) {
    source.sort( function(a,b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }

        return 0;
    });

    var unfairness;

    for (var i=0;i<(source.length - range + 1);i++) {
        var endIndex = (i+range-1);
        var max = source[endIndex];
        var min = source[i];
        var localUnfairness = (max - min);

        if (!unfairness) {
            unfairness = localUnfairness;
        }
        else if (localUnfairness < unfairness) {
            unfairness = localUnfairness;
        }
    }

    return unfairness;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());
    var k = parseBase10(lines.shift());

    var source = [];
    for (var t=0;t<numTests;t++) {
        var num = parseBase10(lines.shift());
        source.push(num);
    }

    var minVal = minimizeUnfairness(k, source);
    console.log(minVal);
}