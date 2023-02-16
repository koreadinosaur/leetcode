/**
 * @param {number[]} nums
 * @return {number}
 25분
 */
var missingNumber = function(nums) {
    /*nums.sort((a,b)=>a-b);
    for(let i = 0; i<nums.length ; i++){
        if(i !== nums[i]){
            return i;
        }
    }
    return nums.length;*/
    let sum = nums.length*(nums.length +1)/2
    for(let i =0; i<nums.length ; i++){
       sum -= nums[i] 
    }
    return sum;
};