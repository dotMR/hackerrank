// https://www.hackerrank.com/challenges/gem-stones

'use strict';

var reader = require('file-reader');
reader.init(processData);

var ASCII_VAL_a = 97;
var COUNT_LETTERS = 26;

function parseBase10(s) {
    return parseInt(s, 10);
}

function findGemstones(elementMaps) {
    var gemstones = 0;

    for (var i=0;i<COUNT_LETTERS;i++) {
        var gem = elementMaps.every( function(elementMap) {
            return elementMap[i]
        });

        if (gem) {
            gemstones = gemstones + 1;
        }
    }

    return gemstones;
}

function generateCharMap(s) {
    var index = [];
    for (var i=0;i<s.length;i++) {
        var c = s.charCodeAt(i) - ASCII_VAL_a;

        var count = 1;
        if (index[c]) {
            count = parseBase10(index[c]) + 1;
        }

        index[c] = count;
    }

    return index;
}

function processData(input) {
    var lines = input.split('\n');
    var numRocks = parseBase10(lines.shift());

    var elementMaps = [];
    for (var r=0;r<numRocks;r++) {
        var elementMap = generateCharMap(lines.shift());
        elementMaps.push(elementMap);
    }

    var gemstones = findGemstones(elementMaps);
    console.log(gemstones);
}