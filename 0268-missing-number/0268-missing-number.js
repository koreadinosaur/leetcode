/**
 * @param {number[]} nums
 * @return {number}
 25분
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    for(let i = 0; i<nums.length ; i++){
        if(i !== nums[i]){
            return i;
        }
    }
    return nums.length;
};