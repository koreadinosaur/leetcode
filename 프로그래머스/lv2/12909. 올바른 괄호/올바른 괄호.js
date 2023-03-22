function solution(s){
    var answer = true;
    let count = 0;
    for(let i =0;i<s.length;i++){
        if(s[i] === '('){
            count++
        } else {
            if(count ===0) return false
            count--;
        }
    }
    if(count >0) answer = false

    return answer;
}