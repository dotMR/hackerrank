// https://www.hackerrank.com/challenges/song-of-pi

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isPiSong(song) {
    var PI = '31415926535897932384626433833';

    var lengths = '';
    song.forEach( function(s) {
        lengths = lengths.concat(s.length);
    });

    return (PI.indexOf(lengths) == 0);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var song = lines.shift().split(' ');
        var result = isPiSong(song);

        if (result) {
            console.log("It's a pi song.");
        } else {
            console.log("It's not a pi song.");
        }
    }
}