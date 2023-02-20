/**
 * @param {number[]} nums
 * @return {number[]}
 10분
 */
var majorityElement = function(nums) {
    let frequency = {}
        let result = []
    for(let ele of nums){
        frequency[ele] = (frequency[ele]||0) +1;
        if(frequency[ele]>nums.length/3&&result.indexOf(ele)=== -1){
            result.push(ele)
        }
    }
    return result
};