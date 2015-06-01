// https://www.hackerrank.com/challenges/taum-and-bday

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function calcStraightCost(b, w, x, y) {
    return (b * x) + (w * y);
}

function optimizeCost(b, w, x, y, z) {

    if (x == y) {
        return calcStraightCost(b, w, x, y);
    }

    if ((y + z) < x) {

        return (b * (y + z)) + (w * y)
    }

    if ((x + z) < y) {
        return (b * x) + (w * (x + z));
    }

    return calcStraightCost(b, w, x, y);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = lines.shift();

    for (var t=0;t<numTests;t++) {
        var config = lines.shift().split(' ');
        var costs = lines.shift().split(' ');

        var b = parseBase10(config[0]);
        var w = parseBase10(config[1]);

        var x = parseBase10(costs[0]);
        var y = parseBase10(costs[1]);
        var z = parseBase10(costs[2]);

        var cost = optimizeCost(b, w, x, y, z);
        console.log(cost);
    }
}