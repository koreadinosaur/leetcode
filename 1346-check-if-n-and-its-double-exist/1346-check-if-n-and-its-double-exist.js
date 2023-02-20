/**
 * @param {number[]} arr
 * @return {boolean}
 2시 10분
 */
var checkIfExist = function(arr) {
    let double = [];
    arr.forEach((item) => double.push(item*2));
    for(let i = 0 ; i<arr.length ; i++){
        for(let j =0; j<arr.length ; j++){
            if(i===j) continue;
            if(arr[j] === arr[i]*2) return true;
        }        
    }
    return false;
};