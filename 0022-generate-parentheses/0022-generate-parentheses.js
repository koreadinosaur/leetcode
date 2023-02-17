/**
 * @param {number} n
 * @return {string[]}
 50분
 
 */
var generateParenthesis = function(n) {
    let result = [];
    const dfs = (string,left,right) =>{
         if(left > n || right > n||right > left) return;
        if(string.length === n*2) return result.push(string);
        dfs(string+'(',left+1,right);
        dfs(string+')',left,right+1);
    }
    dfs('(',1,0)
    return result
};