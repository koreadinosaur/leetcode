/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 40분
 */
var findTheDifference = function(s, t) {
    let str1 = s.split('');
    let str2 = t.split('');
    let obj1 = {};
    let obj2 = {};
    let result = '';
    str1.forEach((item)=>obj1[item] = (obj1[item]||0)+1);
    str2.forEach((item)=>obj2[item] = (obj2[item]||0)+1);
    for(let key in obj2){
        let count = obj2[key] - (obj1[key]||0)
        if(count>0) result = key;
        
    }
    return result;
};