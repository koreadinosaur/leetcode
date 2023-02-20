/**
 * @param {number[]} nums
 * @return {number[]}
 10분
 */
var majorityElement = function(nums) {
    let frequency = {}
    for(let ele of nums){
        frequency[ele] = (frequency[ele]||0) +1;
    }
    let result = []
    for (let key in frequency){
        if(frequency[key] > nums.length/3){
            result.push(key);
        }
    }
    return result
};