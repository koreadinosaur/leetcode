/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 10시
 */
var removeElement = function(nums, val) {
    let end = nums.length -1;
    for(let i = 0; i<nums.length ;i++){
        while(nums[end]===val){
            nums.pop();
            end--;
        }
        if(nums[i] === val){
            [nums[i],nums[end]] = [nums[end],nums[i]];
            nums.pop()
            end--;
        }
    }
    return nums.length;
};