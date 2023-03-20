function solution(land) {
    var answer = 0;
    //40분
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

    for(let i=1; i<land.length; i++){
            for(let j =0; j<land[i].length; j++){
                let prevArray = [...land[i-1]];
                prevArray.splice(j,1);
                land[i][j] = land[i][j] + Math.max(...prevArray);
            }
        }

    
    return Math.max(...land[land.length-1]);
}