// https://www.hackerrank.com/challenges/cut-the-sticks

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function findCutLength(sticks) {
    var cutSize = parseBase10(sticks[0]);

    sticks.forEach( function(l) {
        var len = parseBase10(l);
        if (len < cutSize) {
            cutSize = len;
        }
    });

    return parseBase10(cutSize);
}

function cut(sticks) {
    var cutLength = findCutLength(sticks);

    sticks = sticks.map( function(l) {
        var newLength = parseBase10(l) - cutLength;
        return newLength;
    });

    sticks = sticks.filter( function(l) {
        var len = parseBase10(l);
        return len > 0;
    });

    return sticks;
}

function processSticks(sticks) {
    var remaining = sticks.length;

    while (remaining > 0) {
        sticks = cut(sticks);
        console.log(remaining);
        remaining = sticks.length;
    }
}

function processData(input) {
    var lines = input.split('\n');
    var count = parseBase10(lines.shift());
    var sticks = lines.shift().split(' ');
    processSticks(sticks);
}