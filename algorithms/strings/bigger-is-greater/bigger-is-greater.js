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
    // consider input: 'abdc'
    for (var i=data.length - 1;i>0;i = i - 1) {

        var current = data[i];

        // msc = more significant char
        var indexMsc = (i-1);
        var msc = data[indexMsc];

        // find the first occurence where the more significant char
        // has a lower lexicographic value than the current char
        // 
        // 'abdc' -> ex: current: 'd', msc: 'b'
        if (current > msc) {

            // split the string at the msc
            // 
            // left: 'a', right: 'bdc'
            var left = data.slice(0, indexMsc);
            var right = data.slice(indexMsc);

            // sort all chars within right
            //
            // right: 'bcd'
            right.sort();

            // find the first char in right which is > msc
            // 
            // msc: 'b', right: 'bcd'
            // we will find 'c'
            var nextIndex = (right.lastIndexOf(msc) + 1);
            var next = right[nextIndex];

            // remove next from right
            // 
            // next: 'c', right: 'bd'
            right.splice(nextIndex, 1);

            // build the next lexicographically bigger string
            //
            // left: 'a', next: 'c', right: 'bd'
            // return 'acbd'
            left.push(next);
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