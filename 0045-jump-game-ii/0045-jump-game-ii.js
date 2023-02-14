/**
 * @param {number[]} nums
 * @return {number}
 20분
 */
var jump = function(nums) {
    /* if(nums.length === 1) return 0;
    let caseArray = [];
    const recursive = (array,idx, jumpCount) => {
        if(idx === array.length -1) return jumpCount;
        for(let i = 1; i<= array[idx]; i++){
            let count = recursive(array,i+idx,jumpCount+1);
           count && caseArray.push(count);
        }        
    }
    recursive(nums,0,0);
    return Math.min(...caseArray)
    */
     let steps = 0;
    let start = 0;
    let end = 0;
    while (end < nums.length - 1) {
        let maxEnd = end;
        for (let i = start; i <= end; i++) {
            if (i + nums[i] >= nums.length - 1) {
                return steps + 1;
            }
            maxEnd = Math.max(maxEnd, i + nums[i]);
        }
        start = end + 1;
        end = maxEnd;
        steps++;
    }
    return steps;
};