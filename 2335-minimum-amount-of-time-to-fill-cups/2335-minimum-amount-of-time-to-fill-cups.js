/**
 * @param {number[]} amount
 * @return {number}
 45분
 */
var fillCups = function(amount) {
   /* let newAmount = [...amount];
    let count = 0;
    newAmount.sort((a,b)=>b-a);
    while(newAmount[0]>0){
      if(newAmount[0]>0) newAmount[0] = newAmount[0]-1;
        if(newAmount[1]>0) newAmount[1] = newAmount[1] -1;
        if(newAmount[1]<newAmount[2]) {
            [newAmount[1],newAmount[2]] = [newAmount[2],newAmount[1]]
        };
        if(newAmount[0]<newAmount[1]) {
            [newAmount[0],newAmount[1]] = [newAmount[1],newAmount[0]]
        };
        count++;
    }
    return count; */
let newAmount = [...amount];
    newAmount.sort((a,b)=>b-a);
    if(newAmount[0] < newAmount[1] + newAmount[2]){
        return newAmount[0] + Math.ceil(((newAmount[1] + newAmount[2])-newAmount[0])/2);
    } else{
        return newAmount[0]
    }
};