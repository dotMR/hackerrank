// https://www.hackerrank.com/challenges/correctness-invariant

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function insertionSort (ar) {
    for(var i = 1; i < ar.length; i++){
        var value = parseBase10(ar[i]);
        var j = i - 1;
        while(j >= 0 && ar[j] > value) {
            ar[j + 1] = ar[j];
            j = j - 1;
        }
        ar[j + 1] = value;
    }
    console.log(ar.join(' '));
}

function processData(input) {
    var lines = input.split('\n');
    var numEntries = parseBase10(lines.shift());
    var source = lines.shift().split(' ');

    insertionSort(source);
}