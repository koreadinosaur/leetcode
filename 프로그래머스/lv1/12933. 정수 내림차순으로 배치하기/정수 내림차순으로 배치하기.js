function solution(n) {
    var answer = 0;
    
    return Number(n.toString().split('').map(Number).sort((a,b)=>b-a).join(''));
}