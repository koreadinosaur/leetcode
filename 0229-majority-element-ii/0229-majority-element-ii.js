/**
 * @param {number[]} nums
 * @return {number[]}
 10분
 */
var majorityElement = function(nums) {
    // let frequency = {}
    //     let result = []
    // for(let ele of nums){
    //     frequency[ele] = (frequency[ele]||0) +1;
    //     if(frequency[ele]>nums.length/3&&result.indexOf(ele)=== -1){
    //         result.push(ele)
    //     }
    // }
    // return result
    let map ={}
    for(let i of nums){
        map[i] = map[i] ? map[i] + 1 : 1
    }
    let res =[]
    for(let i in map){
        if(map[i]>nums.length/3) res.push(i)
    }
    return res
};