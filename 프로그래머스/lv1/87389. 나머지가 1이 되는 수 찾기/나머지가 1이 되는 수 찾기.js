function solution(n) {
    var answer = 0;
    let min = n;
    for(let i =0 ; i<=n ; i++){
        if(min !== n) break;
        if(n%i===1&&i<min) {
            min = i
        };

    }
    return min;
}