// https://www.hackerrank.com/challenges/service-lane

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function nextLine(input) {
    return input.shift().split(' ');
}

function largestVehicle(widths, entry, exit) {
    var minWidth = widths[entry];

    for (var i=entry;i<=exit;i++) {
        var width = widths[i];

        if (width < minWidth) {
            minWidth = width;
        }
    }

    return minWidth;
}

function processData(input) {
    var lines = input.split('\n');
    var config = nextLine(lines);
    var width = nextLine(lines);

    var freewayLength = parseBase10(config[0]);
    var numTests = parseBase10(config[1]);

    for (var t=0;t<numTests;t++) {
        var indices = nextLine(lines);
        var i = parseBase10(indices[0]);
        var j = parseBase10(indices[1]);

        var size = largestVehicle(width, i, j);
        console.log(size);
    }
}