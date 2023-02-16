/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 45분
 */
var sortColors = function(nums) { 
    let whiteCount = 0;
    let blueCount = 0;
    for(let i = 0; i<nums.length ; i++){
        if(nums[i]===1) whiteCount++;
        if(nums[i]===2) blueCount++;
    }
      nums.fill(0, 0,nums.length-whiteCount-blueCount);
    nums.fill(1,nums.length-whiteCount-blueCount, nums.length-blueCount);
    nums.fill(2,nums.length-blueCount,nums.length)
    // for(let i = nums.length - whiteCount - blueCount; i < nums.length-blueCount; i++){
    //     nums[i] = 1;
    // }
    // for(let i =nums.length - blueCount ; i <nums.length;i++){
    //     nums[i] = 2;
    // }
};