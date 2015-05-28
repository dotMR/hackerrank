// https://www.hackerrank.com/challenges/maximizing-xor

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function maxXor(l, r) {
    var max = 0;
    
    for(var i=l;i<=r;i++) {
        for(var j=i;j<=r;j++) {
            var xor = i^j;
            if (xor > max) {
                max = xor;
            }
        }
    }
    
    return max;
}

function processData(input) {
    var _index = 0;
    var lines = input.split('\n');

    var _l = parseBase10(lines[_index].trim());
    _index++;

    var _r = parseBase10(lines[_index].trim());
    _index++;

    var res = maxXor(_l, _r);
    console.log(res);
}