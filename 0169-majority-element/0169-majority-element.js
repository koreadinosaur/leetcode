/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    /*const numsObj = {}
    const numsArray = [];
    nums.map((item)=>{
        numsObj[item] ? numsObj[item]++ : numsObj[item] = 1;
    });
    for(let property in numsObj){
        numsArray.push([property,numsObj[property]])
    };
    numsArray.sort((a,b)=>b[1]-a[1]);
    return numsArray[0][0] */
    let majorityNum;
    let count = 0;
    for(let i = 0; i<nums.length;i++){
        if(count === 0){
            majorityNum = nums[i]
            count++;
        } else {
            majorityNum === nums[i] ? count++ : count--;
        }
    };
    return majorityNum;
};