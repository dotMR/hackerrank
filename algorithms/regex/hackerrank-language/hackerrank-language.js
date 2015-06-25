// https://www.hackerrank.com/challenges/hackerrank-language

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function findLanguage(s) {
    var reg = /\b(C|CPP|JAVA|PYTHON|PERL|PHP|RUBY|CSHARP|HASKELL|CLOJURE|BASH|SCALA|ERLANG|CLISP|LUA|BRAINFUCK|JAVASCRIPT|GO|D|OCAML|R|PASCAL|SBCL|DART|GROOVY|OBJECTIVEC)\b$/;
    return s.search(reg);
}

function processData(input) {
    var lines = input.split('\n');
    var numTests = parseBase10(lines.shift());

    for (var t=0;t<numTests;t++) {
        var result = findLanguage(lines.shift());

        if (result != -1) {
            console.log('VALID');
        } else {
            console.log('INVALID');
        }
    }
}