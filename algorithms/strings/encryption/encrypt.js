// https://www.hackerrank.com/challenges/encryption

'use strict';

var reader = require('file-reader');
reader.init(processData);

function encryptString(s) {
    var numChars = s.length;

    var rows = Math.floor(Math.sqrt(numChars));
    var cols = Math.ceil(Math.sqrt(numChars));
    var area = (rows * cols);

    if (area < numChars) {
        if (rows < cols) {
            rows = rows + 1;
        } else {
            cols = cols + 1;
        }
    }

    var result = '';
    var index = 0;
    for (var c=0;c<cols;c++) {
        for (var r=0;r<rows;r++) {
            index = (r*cols) + c;
            result = result + s.charAt(index);
        }
        result = result + ' ';
    }

    console.log(result.trim());
}

function processData(input) {
    var lines = input.split('\n');
    var input = lines.shift();
    encryptString(input);
}