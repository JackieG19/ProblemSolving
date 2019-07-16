'use strict';

const fs = require('fs'); // file system, package

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { // on is an eventlistener
    inputString += inputStdin; // apending the string to the standard input
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {

    let low = scores[0];
    let high = scores[0];

    let hiScoreCount = 0;
    let lowScoreCount = 0;

    let scoreLength = scores.length;
    for(var i = 1; i < scoreLength; i++)
    {
        if(high < scores[i])
        {
            high = scores[i];
            hiScoreCount++;
        }

        if(low > scores[i])
        {
            low = scores[i];
            lowScoreCount++;
        }
    }
   return[hiScoreCount, lowScoreCount];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));
    
    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
