/**
 * @param {number[]} nums
 * @return {number}
 55분
 */
var singleNumber = function(nums) {
    let map = new Map()
    for(let ele of nums){
        map.set(ele, (map.get(ele)||0) +1)
    }
    let result = 0;
    map.forEach((value,key) => {
        if(value === 1) result = key;
    })
    return result
};