/**
 * @param {string} digits
 * @return {string[]}
 
 */
var letterCombinations = function(digits) {
    const letterObj = {
        '2' : ['a','b','c'],
        '3' : ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']        
    }
    let result = [];
    
    const recursive = (stack,digits,digitsLength) => {
        if(digitsLength === 0) return;
        if(stack.length === digitsLength) result.push(stack.join(''));
        
       digits[0]&& letterObj[digits[0]].forEach((item) =>{
            stack.push(item);
            recursive(stack, digits.slice(1), digitsLength);
            stack.pop();
        });
        
    };
    recursive([],digits,digits.length);
    return result;
};