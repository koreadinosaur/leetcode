/**
 * @param {number[]} score
 * @return {string[]}
 30분
 */
var findRelativeRanks = function(score) {
    let rank = {};
    const sortByScore = [...score].sort((a,b)=>b-a);
    for(let i = 0; i<sortByScore.length ; i++){
        if(i === 0){
            rank[sortByScore[i]] = "Gold Medal";
            continue;
        } else if(i === 1){
            rank[sortByScore[i]] = "Silver Medal";
            continue;
        } else if (i === 2){
            rank[sortByScore[i]] = "Bronze Medal";
            continue;
        } else {
            rank[sortByScore[i]] = `${i+1}`
        }
        
    }
    return score.map((item)=>rank[item])
};