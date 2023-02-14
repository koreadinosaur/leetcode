/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 10시 5분
 이거 왜 g.sort를 오름차순으로 하면 안되지?
 탐욕이 높은 아이부터 정렬하고 그 친구들 먼저 충족시켜줘야하는
 이유가 따로 있나?
 g 60 70 80 90 100
 s 45 55 75 90 90
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>b-a);
    s.sort((a,b)=>b-a);
    let count = 0;
    let j = 0;
    for(let i = 0; i<g.length ; i++){
        if(!s[j]) break;
        if(g[i] <= s[j]){
            count++;
            j++;
        }
    }
    return count
};