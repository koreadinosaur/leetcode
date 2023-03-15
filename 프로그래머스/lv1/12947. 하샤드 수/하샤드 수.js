function solution(x) {
    var answer = true;
    let sum = 0;
    const string = x.toString();
    for(let i = 0; i<string.length;i++){
        sum += Number(string[i]);
    }
    if(x%sum !== 0) answer = false
    return answer;
}