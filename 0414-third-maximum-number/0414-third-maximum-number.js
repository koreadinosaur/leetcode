/**
 * @param {number[]} nums
 * @return {number}
 11시 5분
 */
var thirdMax = function(nums) {
    const set = new Set(nums);
    const nonDuplicateArray = Array.from(set);
    nonDuplicateArray.sort((a,b)=>b-a);
    if(nonDuplicateArray[2] === 0) return 0;
    return nonDuplicateArray[2] || nonDuplicateArray[0]
};