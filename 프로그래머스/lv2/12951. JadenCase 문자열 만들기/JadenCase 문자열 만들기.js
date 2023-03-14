function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    for(let i = 0; i<s.length; i++){
        if(i === 0 && Number.isNaN(s[i]*1)){
            answer += s[i].toUpperCase();
            continue;
        } else if(i === 0 && !Number.isNaN(s[i]*1)){
            answer += s[i]
            continue;
        }
        if(s[i-1]=== ' '&& Number.isNaN(s[i]*1)){
            answer += s[i].toUpperCase();
            continue;
        } else if(s[i-1]=== ' '&& !Number.isNaN(s[i]*1)){
            answer += s[i]
            continue;
        }
        answer += s[i]
    }
    return answer
}