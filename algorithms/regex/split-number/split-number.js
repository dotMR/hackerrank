// https://www.hackerrank.com/challenges/split-number

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function split(n) {
    var reg = /^(\d{1,3})[ -](\d{1,3})[ -](\d{4,10})/;
    return n.replace(reg, 'CountryCode=$1,LocalAreaCode=$2,Number=$3');
}

function processData(input) {
    var raw = input.split('\n');
    var numTests = parseBase10(raw.shift());
    for (var t=0;t<numTests;t++) {
        var number = raw.shift();
        var result = split(number);
        console.log(result);
    }
}