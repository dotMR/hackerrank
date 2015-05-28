// https://www.hackerrank.com/challenges/lonely-integer

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function findLonelyInt(count, elements) {
    for (var i=0; i<count; i++) {
        var l = elements[i];
        var first = elements.indexOf(l);
        var last = elements.lastIndexOf(l);

        if (first == last) {
            return parseBase10(l);
        }
    }
}

function processData(input) {
    var lines = input.split('\n');
    var count = parseBase10(lines.shift());
    var elements = lines.shift().split(' ');
    var l = findLonelyInt(count, elements);
    console.log(l);
}