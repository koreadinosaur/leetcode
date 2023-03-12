function solution(k, dungeons) {
    var answer = 0;
    //10분
    const dfs = (fatigue,dungeons, count)=>{
        for(let i =0; i<dungeons.length ; i++){            
            let [need, use] = dungeons[i];
            if(!need||need>fatigue) continue;
            let newDun = [...dungeons].map((v)=>[...v]);
            newDun[i] = [null,null];
            dfs(fatigue-use,newDun,count+1);
        }
        return answer = Math.max(answer, count)
    }
    dfs(k,dungeons,0)
    return answer;
}