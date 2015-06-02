// https://www.hackerrank.com/challenges/filling-jars

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function processOperation(start, end, amount) {
    var multiplier = end - start + 1;
    return (amount * multiplier);
}

function processData(input) {
    var lines = input.split('\n');
    var config = lines.shift().split(' ');
    var numJars = parseBase10(config[0]);
    var operations = config[1];
    var totalCandy = 0;

    for (var t=0;t<operations;t++) {
        var op = lines.shift().split(' ');
        var start = parseBase10(op[0]);
        var end = parseBase10(op[1]);
        var amount = parseBase10(op[2]);
        var candyAdded = processOperation(start, end, amount);

        totalCandy = totalCandy + candyAdded;
    }

    var avg = Math.floor(totalCandy / numJars)
    console.log(avg);
}