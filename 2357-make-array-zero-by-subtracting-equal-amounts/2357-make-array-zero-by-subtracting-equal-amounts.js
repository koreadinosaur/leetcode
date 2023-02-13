/**
 * @param {number[]} nums
 * @return {number}
 20분
 
 */
var minimumOperations = function(nums) {
    const arraySet = new Set(nums);
    if(arraySet.has(0)) return arraySet.size-1;
    return arraySet.size;
};