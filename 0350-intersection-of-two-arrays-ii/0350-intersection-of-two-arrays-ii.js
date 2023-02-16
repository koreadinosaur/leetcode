/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 15분
 */
var intersect = function(nums1, nums2) {
    let obj1 = {};
    let obj2 = {};
    let result = []
    nums1.forEach((item)=>obj1[item] = (obj1[item]||0)+1);
    nums2.forEach((item)=>obj2[item] = (obj2[item]||0)+1);
    for(let key in obj1){
        if(!obj2[key]) continue;
        let min = Math.min(obj1[key],obj2[key])
        while(min!==0){
            result.push(key);
            obj2[key] -= 1;
            min--;
        }
    }
    return result;
};