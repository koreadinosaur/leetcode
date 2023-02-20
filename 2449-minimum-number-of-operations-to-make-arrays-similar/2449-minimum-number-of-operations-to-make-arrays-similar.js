/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function(nums, target) {
    nums.sort((a,b)=>a-b);
    target.sort((a,b)=>a-b);
    let numsOdd = [];
    let targetOdd = [];
    let numsEven = [];
    let targetEven = [];
    nums.forEach((item)=>{
        if(item%2 === 0){
            numsEven.push(item);
        } else{
            numsOdd.push(item);
        }
    })
    target.forEach((item)=>{
        if(item%2===0){
            targetEven.push(item);
        } else{
            targetOdd.push(item)
        }
    })
    let plus = 0;
    let minus = 0;
    for(let i =0;i<numsEven.length ; i++){
        if(numsEven[i] > targetEven[i]){
            plus += (numsEven[i]-targetEven[i])/2;
        } else {
            minus += (targetEven[i]-numsEven[i])/2;
        }        
    }
    for(let i =0;i<numsOdd.length ; i++){
        if(numsOdd[i] > targetOdd[i]){
            plus += (numsOdd[i]-targetOdd[i])/2;
        } else {
            minus += (targetOdd[i]-numsOdd[i])/2;
        }        
    }
    return Math.max(plus,minus)
    
};