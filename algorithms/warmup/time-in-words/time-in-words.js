// https://www.hackerrank.com/challenges/the-time-in-words

'use strict';

var reader = require('file-reader');
reader.init(processData);

var singles = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

function parseBase10(s) {
    return parseInt(s, 10);
}

function getHours(num) {
    if (num < 10) {
        return singles[num];
    }

    if (num > 12) {
        return singles[num-12];
    }

    return teens[num % 10];
}

function getMinutes(num) {
    var unit = "minute";
    var text = '';

    if (num == 30) {
        return 'half';
    }

    if (num == 15) {
        return 'quarter';
    }

    if (num < 10) {
        text = singles[num];
    }

    else if (num < 20) {
        text = teens[num % 10];
    }

    else {
        text = 'twenty ' + singles[num % 20];
    }

    text = text.concat(' ').concat(unit);

    if (num > 1) {
        text = text.concat('s');
    }

    return text;
}

function timeInWords(hours, minutes) {
    var glue = 'past';
    var h = hours;
    var m = minutes;

    if (minutes == 0) {
        return getHours(h) + " o' clock"
    }

    if (minutes > 30) {
        glue = 'to'
        h = hours + 1;
        m = (60 - minutes);
    }

    return getMinutes(m) + ' ' + glue + ' ' + getHours(h);
}

function processData(input) {
    var lines = input.split('\n');
    var hours = parseBase10(lines.shift());
    var minutes = parseBase10(lines.shift());
    var words = timeInWords(hours, minutes);
    console.log(words);
}