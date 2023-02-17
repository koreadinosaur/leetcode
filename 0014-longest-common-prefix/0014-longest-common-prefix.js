/**
 * @param {string[]} strs
 * @return {string}
 25분
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    for(let i = 0; i<strs[0].length;i++){
        let isSame = true;
        for(let j=1;j<strs.length ; j++){
            if(strs[0][i]!==strs[j][i]){
                isSame = false;
                break;
            }
        }
        if(isSame){
            prefix += strs[0][i];
        } else {
            break;
        }
    }
    return prefix;
};