
function solution(n, s) {
    if(n>s)return[-1];
    let sum = 0;
    let maxSet = [];

        for(let i =0;i<n;i++){
            maxSet.push(Math.floor(s/n))
        }
    let diff = s%n
    if(!Number.isInteger(s/n)){
        for(let i = maxSet.length-1;diff>0;i--){
            maxSet[i]++           
            diff--;
        }
    } 
    return maxSet

}