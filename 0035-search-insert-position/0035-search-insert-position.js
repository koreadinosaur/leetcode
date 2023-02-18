/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 10시 10분
 */
var searchInsert = function(nums, target) {
    let i = 0;
    while(nums[i]<target){
        i++
    }
    return i
};