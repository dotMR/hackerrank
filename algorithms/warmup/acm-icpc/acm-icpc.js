// https://www.hackerrank.com/challenges/acm-icpc-team

// Note: this implementation is super slow, but using bitwise comparisons
// wasn't an option for the large input cases

// TODO: maybe it can be optimized by doing bitwise comparison in chunks?

'use strict';

var reader = require('file-reader');
reader.init(processData);

var knowledge = [];
var teams = [];

function parseBase10(s) {
    return parseInt(s, 10);
}

function findMaxTopics(topics) {
    var highestCount = 0;
    var teamTopicsKnown = [];

    // calculate combined knowledge of team
    for (var t=0;t<teams.length;t++) {
        var members = teams[t].split(' ');
        var ma = members[0];
        var mb = members[1];

        var topicsKnown = 0;
        for (var i=0;i<topics;i++) {
            var a = parseBase10(knowledge[ma].charAt(i));
            var b = parseBase10(knowledge[mb].charAt(i));

            if (a || b) {
                topicsKnown++;
            }
        }

        teamTopicsKnown.push(topicsKnown);
        if( topicsKnown > highestCount) {
            highestCount = topicsKnown;
        }
    }

    var mostKnown = teamTopicsKnown.filter(function(team) {
        if (team == highestCount) {
            return team;
        }
    })

    console.log(highestCount);
    console.log(mostKnown.length);
}

function processData(input) {
    var lines = input.split('\n');
    var config = lines.shift().split(' ');
    var people = config[0];
    var topics = config[1];

    // load knowledge for member
    for (var i=0;i<people;i++) {
        knowledge.push(lines.shift());

        // create array of unique team combinations
        for(var j=i;j<people;j++) {
            if (i != j) {
                var team = i + ' ' + j;
                teams.push(team);
            }
        }
    }

    findMaxTopics(topics);
}