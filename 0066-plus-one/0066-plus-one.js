/**
 * @param {number[]} digits
 * @return {number[]}
 40분
 */
var plusOne = function(digits) {
    const number = BigInt(digits.join(''));

       let increment = BigInt(number)+1n;

        return increment.toString().split('');
    

};