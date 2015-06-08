// https://www.hackerrank.com/challenges/pangrams

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isPangram(s) {
    if (s.length < 26) {
        return false;
    }

    var chars = [];
    s = s.trim().toUpperCase();
    for (var i=0;i<s.length;i++) {
        var c = s.charCodeAt(i);
        if (c != 32) {
            chars[c] = s.charAt(i);
        }
    }

    var results = chars.filter( function(c) {
        return c;
    });

    return (results.length == 26);
}

function processData(input) {
    var lines = input.split('\n');
    var source = lines.shift();

    var result = isPangram(source);
    if (result) {
        console.log("pangram");
    }
    else {
        console.log("not pangram");
    }
}