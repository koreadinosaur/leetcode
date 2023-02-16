/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 50분
 */
var intersection = function(nums1, nums2) {
    let obj1 = {};
    let obj2 = {};
    let result = []
    nums1.forEach((item)=>obj1[item] =1);
    nums2.forEach((item)=>obj2[item]=1);
    for(let key in obj1){
        obj2[key] && result.push(key)
    }
    return result
};