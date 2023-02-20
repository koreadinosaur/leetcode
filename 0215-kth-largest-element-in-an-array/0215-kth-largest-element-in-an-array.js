/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 25분
 */
var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>b-a);
    let count = 1;
    return nums[k-1]
    for(let i =0; i <nums.length ; i++){
        if(nums[i] > nums[i+1]){
            count++;
            if(count === k) return nums[i+1];
        }
    }
};