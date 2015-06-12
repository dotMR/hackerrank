// https://www.hackerrank.com/challenges/bigger-is-greater

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function findNextGreaterString(input) {
    var data = input.split('');

    // loop from end to beginning
    //
    // consider ex: '1243'
    for (var i=data.length - 1;i>0;i = i - 1) {

        var currentIndex = i;
        var current = data[currentIndex];

        var prevIndex = (i-1);
        var prev = data[prevIndex];

        // find first occurence where the more significant char
        // has a lower value than the less significant char
        // 
        // '1243' -> ex: current: 4, prev: 2
        if (current > prev) {

            // split the string at the prev value
            // 
            // left: '1', right: '243'
            var left = data.slice(0, prevIndex);
            var right = data.slice(prevIndex);

            // sort remaining chars
            //
            // right: '234'
            right.sort();

            // find the next char to the right which is > prev
            // 
            // we will find '3'
            var nextIndex = (right.lastIndexOf(prev) + 1);
            var nextChar = right[nextIndex];

            // remove the next char from the right
            // 
            // remove '3' -> right: '24'
            right.splice(nextIndex, 1);

            // build the next lexicographically bigger string
            //
            // left: '1', next: '3', right: '24'
            left.push(nextChar);
            var result = left.concat(right);

            return result.join('');
        }
    }

    return null;
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var source = lines.shift();

        var result = findNextGreaterString(source);
        if (result) {
            console.log(result);
        }
        else {
            console.log("no answer");
        }
    }
}