// https://www.hackerrank.com/challenges/quicksort2

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function quickSort(source) {
    if (source.length <= 1) {
        return source;
    }

    var pivot = parseBase10(source.shift());
    var bigger = [];
    var smaller = [];

    source.forEach( function(num) {
        var current = parseBase10(num);

        if (current > pivot) {
            bigger.push(current);
        } else {
            smaller.push(current);
        }
    });

    var left = quickSort(smaller);
    var right = quickSort(bigger);
    var merge = left.concat(pivot).concat(right);

    console.log(merge.join(' '));
    return merge;
}

function processData(input) {
    var lines = input.split('\n');
    var numElements = parseBase10(lines.shift());
    var source = lines.shift().split(' ');
    var results = quickSort(source);
}