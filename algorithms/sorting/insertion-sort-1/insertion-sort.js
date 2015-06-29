// https://www.hackerrank.com/challenges/insertionsort1

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function update(source, index, value) {
    source[index] = value;
    console.log(source.join(' '));
}

function insertionSort(source) {
    var end = (source.length - 1);
    var target = source[end];

    var inserted = false;
    for (var i=end;i>0;i--) {
        var left = source[i-1];
        if (left > target) {
            update(source, i, left);
        } else {
            update(source, i, target);
            return;
        }
    }

    update(source, 0, target);
}

function processData(input) {
    var lines = input.split('\n');
    var numEntries = parseBase10(lines.shift());
    var source = lines.shift().split(' ');

    insertionSort(source);
}