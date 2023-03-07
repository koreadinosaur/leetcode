function solution(k, tangerine) {
    //30분
    var answer = 0;
    let map = {};
    for(let i =0; i<tangerine.length; i++){
        map[tangerine[i]] = (map[tangerine[i]]||0) +1;
    }
    let array = [];
    for(let key in map){
        array.push([key,map[key]])
    };
array.sort((a,b)=>b[1]-a[1]);

    for(let i =0; i<array.length; i++){
        k = k - array[i][1]
        answer++;
        if(k<=0) break;
    }
    return answer;
}