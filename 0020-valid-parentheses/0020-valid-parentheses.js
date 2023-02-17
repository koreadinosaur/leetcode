/**
 * @param {string} s
 * @return {boolean}
 10분
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i< s.length ; i++){
        if(s[i] === '(' || s[i]==='[' || s[i]==='{'){
            stack.push(s[i]);
        } else {
           const poped = stack.pop();
            if(s[i] === ')' && poped !== '(') return false;
               if(s[i] ===']' && poped !== '[') return false;
            if(s[i]==='}'&&poped !== '{') return false;
       }        
    }
    if(stack.length > 0) return false;
    return true;
};