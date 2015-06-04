// https://www.hackerrank.com/challenges/identify-smith-numbers

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function isSmith(num) {
    var digits = ''.concat(num).split('');
    var digitSum = 0;

    digits.forEach( function(d) {
        digitSum += parseBase10(d);
    });

    var targetSum = digitSum;
    var target = num;
    var previousTarget = num;
    var findFactors = true;
    var factors = [];

    if (num == 1) {
        return false;
    }

    while (findFactors) {
        previousTarget = target;

        for (var i=2;i<target;i++) {
            if (target % i == 0) {
                factors.push(i);
                targetSum = targetSum - i;
                target = target / i;
                break;
            }
        }
        if (target == targetSum) {
            factors.push(target);
            targetSum = targetSum - target;
            findFactors = false;
        }
        else if (previousTarget == target) {
            factors.push(target);
            findFactors = false;
        }
    }

    var sum = 0;
    factors.forEach( function(factor) {
        var factors = ''.concat(factor).split('');

        factors.forEach( function(f) {
            sum = sum + parseBase10(f);
        })
    });

    return (sum == digitSum);
}

function processData(input) {
    var lines = input.split('\n');
    var number = parseBase10(lines.shift());
    var result = isSmith(number);

    if (result) {
        console.log('1');
    } else {
        console.log('0');
    }
}