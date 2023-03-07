function solution(brown, yellow) {
    var answer = [];
    //2시 15분
    let sum = brown + yellow;
    for(let i =0; i<= brown/2; i++){
        let y = i;
        let x = brown/2-i;
        if((x+1)*(y+1)===sum && (x-1)*(y-1)===yellow) {
            answer.push(x+1,y+1)
            break;
        }
        
    }
    return answer;
}