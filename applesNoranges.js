/* Complete the function countApplesAndOranges, where:

s = Starting point 
t = Ending location

a = Location of the Apple tree 
m = Number of apples that fell from the tree
apples =  Distance at which each apple falls from the tree

b = Location of the Orange tree
n = Number of oranges that fell from the tree 
oranges = Distance at which each orange falls from the tree
 
 input: st = 7, 11
        ab = 5, 15
        mn = 3, 2
        mmm = -2, 2, 1
        nn = 5, -6
 
 output: 1
         1
 
 
The first apple falls at position 5 - 2 = 3. 
Does 3 go into the range of 7 - 11 = no

The second apple falls at position 5 + 2 = 7.
Does 7 go into the range of 7 - 11 = yes

The third apple falls at position 5 + 1 = 6. 
Does 6 go into the range of 7 - 11 = no

The first orange falls at position 15 + 5 = 20.
Does 20 go into the range of 7 - 11 = no

The second orange falls at position 15 - 6 = 9.
Does 9 go into the range of 7 - 11 = yes

Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output. 
Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output. 

*/

// 3 out of 12 test did not pass, still needs work  :(

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let house = [];
    let applesCount = 0;
    let orangesCount = 0;
    for(let i = s; i <= t; i++){
        house.push(i);
    };
    const applesPositions = apples.map(val=> val + a);
    const orangesPositions = oranges.map(val=> val + b);

    for(let j = 0; j < house.length; j++){
        for(let k = 0; k < applesPositions.length; k++){
            if(house[j] === applesPositions[k]) applesCount++;
        };
        for(let m = 0; m < orangesPositions.length; m++){
            if(house[j] === orangesPositions[m]) orangesCount++;
        };
    };
    console.log(`${applesCount}${'\n'}${orangesCount}`);

};

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}


