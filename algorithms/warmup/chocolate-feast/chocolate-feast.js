// https://www.hackerrank.com/challenges/chocolate-feast

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function countChocolate(config) {
    var money = parseBase10(config[0]);
    var price = parseBase10(config[1]);
    var exchangeCost = parseBase10(config[2]);

    var chocolateEaten = Math.floor(money / price);
    var wrappers = chocolateEaten;

    while (wrappers >= exchangeCost) {
        var newChocolates = Math.floor(wrappers / exchangeCost);
        var leftovers = (wrappers % exchangeCost);
        wrappers = newChocolates + leftovers;
        chocolateEaten = chocolateEaten + newChocolates;
    }

    return chocolateEaten;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var config = lines.shift().split(' ');
        var count = countChocolate(config);
        console.log(count);
    }
}