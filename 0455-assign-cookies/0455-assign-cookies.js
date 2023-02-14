/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 10시 5분
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>b-a);
    s.sort();
    let count = 0;
    for(let i = 0; i<g.length ; i++){
        for(let j = 0; j<s.length; j++ ){
            if(g[i]<= s[j]){
                s.splice(j,1);
                count++;
                break;
            }
        }
    }
    return count
};