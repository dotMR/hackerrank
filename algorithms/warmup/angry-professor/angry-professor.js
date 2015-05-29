// https://www.hackerrank.com/challenges/angry-professor

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isClassCancelled(config, times) {
    var numStudents = config[0];
    var needs = config[1];

    var present = times.filter( function(t) {
       var arrived = parseBase10(t);
       return (arrived <= 0);
    });

    if (present.length >= needs) {
        return 'NO';
    }

    return 'YES';
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var config = lines.shift().split(' ');
        var times = lines.shift().split(' ');

        var cancelled = isClassCancelled(config, times);
        console.log(cancelled);
    }
}