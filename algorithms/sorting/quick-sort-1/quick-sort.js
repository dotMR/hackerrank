// https://www.hackerrank.com/challenges/quicksort1

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function partition(source) {
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

    return smaller.concat(pivot).concat(bigger);
}

function processData(input) {
    var lines = input.split('\n');
    var numElements = parseBase10(lines.shift());
    var source = lines.shift().split(' ');
    var results = partition(source);
    console.log(results.join(' '));
}