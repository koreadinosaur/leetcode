/**
 * @param {number[]} nums
 * @return {number}
 30분
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i< nums.length ; i++){
        let nonDuplicate = i;
            while(nums[i]===nums[nonDuplicate]){
                nonDuplicate++;
            }
        if(i !== nonDuplicate){
            nums.splice(i,nonDuplicate-i-1);
        }
    }
    return nums.length;
};