/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let map = new Map();
    for(i = 0; i<strs.length ; i++){
        let sortedStr = strs[i].split('').sort().toString();
        if(!map.has(sortedStr)) map.set(sortedStr,[]);
        map.get(sortedStr).push(strs[i]);        
    }
    map.forEach((item)=>result.push(item));
    return result;
};