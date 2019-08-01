function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let house = [];
    let applesCount = 0;
    let orangesCount = 0;

    for(let range = s; range <= t; range++){
        house.push(range);
    };

    const positionA = apples.map(val=> val + a);
    const positionO = oranges.map(val=> val + b);

    for(let j = 0; j < house.length; j++){
        for(let k = 0; k < positionA.length; k++){
            if(house[j] === positionA[k]){
                applesCount++;
            } 
        }
        for(let m = 0; m < positionO.length; m++){
            if(house[j] === positionO[m]){
                orangesCount++;
            }
        }
    }
console.log(applesCount);
console.log(orangesCount);
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10); // starting point

    const t = parseInt(st[1], 10); // end point

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10); // apple tree

    const b = parseInt(ab[1], 10); // orange tree

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10); // # of apples fallen

    const n = parseInt(mn[1], 10); // # of oranges fallen
    
    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10)); // where the apples landed
    
    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10)); // where the oranges landed

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
