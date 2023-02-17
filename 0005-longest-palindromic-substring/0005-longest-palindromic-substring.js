/**
 * @param {string} s
 * @return {string}
 40분
 */
var longestPalindrome = function(s) {
    const checkPalindrome = (string) =>{
        let start = 0;
        let end = string.length -1;
        while(start < end) {
            if(string[start] !== string[end]) return;
            start++;
            end--;
        }
        return string;
    }
    let palindromes = {};
    let max = 0;
    for(let i =0;i<s.length ; i++){
        for(let j=s.length-1; j>=i ; j--){
            let checked = checkPalindrome(s.substring(i,j+1))
            if(checked&&checked.length > max){
                palindromes[checked.length] = checked;
                max = checked.length;                
            }
        }
    }
    return palindromes[max]
};