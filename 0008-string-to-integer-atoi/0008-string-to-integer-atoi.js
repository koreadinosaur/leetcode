/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let numbers = '';
    s.trim();
    let isNegative = false;
    for(let i = 0; i< s.length;i++){
        if(s[i] === ' ') continue;
        if(!Number.isNaN(s[i]*1)){
             numbers += s[i];
           if(Number.isNaN(s[i+1]*1) || s[i+1] === ' '){
               break;
           }
            continue;
        } 
        if(/[a-zA-Z.]/.test(s[i])) {
            break;
        } 
        
        if(s[i]=== '-') isNegative = true;
        if((s[i]==='-'|| s[i]==='+') && (Number.isNaN(s[i+1]*1)||s[i+1] === ' ')){
            return 0;
        }
    }
   numbers = isNegative ? Math.max(-(2 ** 31), numbers *(-1)) : Math.min(2 ** 31 - 1, numbers*1)
    return numbers
    
};