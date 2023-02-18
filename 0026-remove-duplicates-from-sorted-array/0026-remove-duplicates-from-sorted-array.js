/**
 * @param {number[]} nums
 * @return {number}
 30분
 */
var removeDuplicates = function(nums) {
    nums.sort((a,b)=>a-b);
    for(let i = 0; i< nums.length ; i++){
        if(nums[i]===nums[i+1]){
            nums.splice(i,1)
            i--;
        }
    }
    return nums.length;
};