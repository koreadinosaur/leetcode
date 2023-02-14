/**
 * @param {string} s
 * @return {number}
 30분
 
 */
var longestPalindrome = function(s) {
    const sArray = s.split('');
    const sObj = {}
    for(let item of sArray){
        sObj[item] = (sObj[item] || 0) + 1;
    };
    let odd = 0;
    let result = 0;
    for(let key in sObj){
    if(sObj[key] % 2 ===0){
        result += sObj[key];
    } else {
        odd = 1;
        result += sObj[key] -1;
    }
    }
    
    return odd + result;
};