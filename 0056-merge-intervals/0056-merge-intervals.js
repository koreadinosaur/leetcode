/**
 * @param {number[][]} intervals
 * @return {number[][]}
 55분
 */
var merge = function(intervals) {
    //오름차순 정렬
    //앞 요소의 end와 뒷 요소의 start 비교해서 뒷요소의 start가 같거나 작으면 구간 통합
    intervals.sort((a,b)=>a[0]-b[0]);
    const recursive = (intervals) =>{
        let result = [];
    for(let i =0; i<intervals.length ; i++){
        if(intervals[i+1]&&intervals[i][1] >= intervals[i+1][0]){
           intervals[i][1] < intervals[i+1][1] ? result.push([intervals[i][0],intervals[i+1][1]]) : result.push(intervals[i])
            i= i+1;
            continue;
        }
        result.push(intervals[i])
    }
    return result;
    }
   let integratedArr = recursive(intervals);
    while(integratedArr.length !== recursive(integratedArr).length){
        integratedArr = recursive(integratedArr)
    }
    return integratedArr
};