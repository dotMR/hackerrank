// https://www.hackerrank.com/challenges/utopian-tree

'use strict';

var reader = require('file-reader');
reader.init(processData);

function calculateHeight(cycles) {
    var height = 1;

    for (var c=1;c<=cycles;c++) {
        if (c % 2 == 1) {
            height = height * 2;
        }
        else {
            height = height + 1;
        }
    }
    return height;
}

function parseBase10(s) {
    return parseInt(s, 10);
}

function processData(input) {
    var lines = input.split('\n');
    var T = parseBase10(lines.shift());

    var data = lines.splice(0, T).map(parseBase10);

    for(var i=0;i<T;i++) {
        var height = calculateHeight(data[i]);
        console.log(height);
    }
}

module.exports = {

    process: function()

    init: function(callback) {
        if (!callback) {
            throw Error("callback is required!");
        }

        var _buffer = "";
        var inputStream = fs.createReadStream('input.txt');

        inputStream.on('data', function(data) {
            _buffer += data;
        });

        inputStream.on('end', function() {
            callback(_buffer);
        });
    }
};