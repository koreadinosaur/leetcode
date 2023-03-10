function solution(n, t, m, p) {
    var answer = '';
    //45분
    let idx =1;
    for(let i = 0; answer.length < t; i++){
        let arithmetic = i.toString(n);
        for(let j =0; j<arithmetic.length && answer.length < t ; j++){
            if(m===p&&idx%m===0 || idx%m===p){
                answer+=arithmetic[j]
            }
            idx++
        }
    }
    
    return answer.toUpperCase();
}