function solution(word) {
    var answer = 0;
    //45분
    let dict = "AEIOU"
    let count = 0;
    const dfs = (words) => {        
        if(words.length ===5) return;
        for(let i =0; i<dict.length;i++){
            let newWords = words;
            newWords += dict[i];
    
            if(newWords === word){
                console.log(newWords)
                return answer = count;
            } 
                  count++;
            dfs(newWords);
        }
    }
    dfs('')
    return answer + 1;
}