/**
 * @param {number[]} nums
 * @return {boolean}
 55분
 */
var canJump = function(nums) {
    if(nums.length === 1) return true;
    let maxStep = 0;
    for(let i =0; i< nums.length-1 ; i++){
        maxStep = i + nums[i] > maxStep && nums[i] !== 0 ? i+nums[i] : maxStep;
        if(maxStep >= nums.length-1) return true;
        if(maxStep <= i && nums[i] ===0) return false;
    }
    return false;
};