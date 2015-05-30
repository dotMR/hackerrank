// https://www.hackerrank.com/challenges/cavity-map

'use strict';

var reader = require('file-reader');
reader.init(processData);

var data = [];
var size;

function parseBase10(s) {
    return parseInt(s, 10);
}

function getIndex(r, c) {
    return (r * size) + c;
}

function getDepth(r,c) {
    var index = getIndex(r,c);
    return parseBase10(data[index]);
}

function isCavity(r, c) {
    var endIndex = (size - 1);
    if (r == 0 || c == 0 || r == endIndex || c == endIndex) {
        return false;
    }

    var depth = getDepth(r, c);
    var top = getDepth((r - 1), c);
    var right = getDepth(r, (c + 1));
    var bottom = getDepth((r + 1), c);
    var left = getDepth(r, (c - 1));

    return (depth > top && depth > right && depth > bottom && depth > left);
}

function getRepresentation(r, c) {
    var cavity = isCavity(r,c);
    if (isCavity(r,c)) {
        return 'X';
    } else {
        return getDepth(r,c);
    }
}

function processMap() {
    for (var i=0;i<size;i++) {
        var row = '';
        for (var j=0;j<size;j++) {
            var display = getRepresentation(i,j);
            row = row.concat(display);
        }
        console.log(row);
    }
}

function processData(input) {
    var lines = input.split('\n');
    size = parseBase10(lines.shift());

    for (var t=0;t<size;t++) {
        var row = lines.shift().split('');
        data = data.concat(row);
    }

    processMap();
}