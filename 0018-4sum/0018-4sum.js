/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 45분
 */
var fourSum = function(nums, target) {
    // target과 합이 같은 네 개의 요소를 찾고
    //중복제거
    //중복제거를 어떻게하지?
    let result = [];
    nums.sort((a,b)=>a-b);
    for(let i = 0; i<nums.length-3 ; i++){
        for(let j = i+1 ; j<nums.length-2;j++){
            let left = j+1;
            let right = nums.length-1;
            while(left < right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum > target) right--;
                if(sum<target)left++;
                if(sum === target) {
                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                    while(nums[left] === nums[left+1]) left++;
                    while(nums[right] === nums[right-1]) right--;
                    left++;
                    right--;
                }
            }
            while(nums[j]===nums[j+1])j++
        }
        while(nums[i]===nums[i+1])i++
    };
    
    return result;
};