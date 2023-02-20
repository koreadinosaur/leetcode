/**
 * @param {number[]} nums
 * @return {string}
 3시
 */
var largestNumber = function(nums) {
//     const dfs = (bucket,nums,number) = >{
        
//     }
//     dfs([],nums,number)
    let stringNums = nums.map((item)=>item.toString());
    stringNums.sort((a,b)=>{
        let exam1 = a + b;
        let exam2 = b + a;
        if(exam1 > exam2) return -1;
        return 1;
    });
    if(stringNums[0]==='0') return '0';

    return stringNums.join('')
};