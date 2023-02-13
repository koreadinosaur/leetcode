/**
 * @param {number} num
 * @return {number}
 25분
 */
var largestInteger = function(num) {
    let numArray = num.toString().split('');
    let oddArray = [];
    let evenArray = [];
    let maxArray = [];
    numArray.map((item,index)=>{
        if(item%2 ===0) {
            evenArray.push(item*1);
        }else{
            oddArray.push(item*1);
        }
    });
    oddArray.sort((a,b)=>b-a);
    evenArray.sort((a,b)=>b-a);
    let oddCount = 0;
    let evenCount = 0;
   for(let i =0 ; i< numArray.length;i++){
       if(numArray[i]%2 === 0){
           maxArray.push(evenArray[evenCount]);
           evenCount++;
       } else {
            maxArray.push(oddArray[oddCount]);
           oddCount++;
       }
   }
    return maxArray.join('');
};