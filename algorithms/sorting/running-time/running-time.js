// https://www.hackerrank.com/challenges/runningtime

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function insertionSort(source) {
    var shifts = 0;
    for (var i=0;i<(source.length - 1);i++) {
        var current = parseBase10(source[i]);
        var next = parseBase10(source[i+1]);

        if (next < current) {
            source.splice(i+1, 1); // remove 'next'

            for (var j=0;j<=i;j++) {
                var item = parseBase10(source[j]);
                if (item > next) {
                    source.splice(j, 0, next); // insert 'next'
                    shifts = shifts + Math.abs(j-i) + 1; // subtract 1 to account for item being removed
                    break;
                }
            }
        }
    }

    console.log(shifts);
}

function processData(input) {
    var lines = input.split('\n');
    var numEntries = parseBase10(lines.shift());
    var source = lines.shift().split(' ');

    insertionSort(source);
}