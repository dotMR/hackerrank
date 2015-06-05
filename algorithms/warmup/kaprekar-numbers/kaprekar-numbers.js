// https://www.hackerrank.com/challenges/kaprekar-numbers

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isKaprekar(num) {
    var square = Math.pow(num, 2);
    var d = ''.concat(num).length;
    var digits = ''.concat(square);

    var rIndex = (-1 * d);
    var r = parseBase10(digits.substr(rIndex));

    var lIndex = digits.length + rIndex;
    var l = parseBase10(digits.substring(0, lIndex));

    var sum = r;
    if (l) {
        sum = sum + l;
    }

    if (sum == num && r != 0) {
        return true;
    }

    return false;
}

function findKaprekars(start, end) {
    
    var nums = [];
    for (var n=start;n<=end;n++) {
        if (isKaprekar(n)) {
            nums.push(n);
        }
    }

    return nums;
}

function processData(input) {
    var lines = input.split('\n');
    var start = parseBase10(lines.shift());
    var end = parseBase10(lines.shift());

    var numbers = findKaprekars(start,end);

    var result = '';
    numbers.forEach( function(n) {
        result = result.concat(n).concat(' ');
    })

    result = result.trim();
    if (result) {
        console.log(result);
    } else {
        console.log('INVALID RANGE');
    }
}