function solution(priorities, location) {
    //10시 20분
    /* 우선순위 큐?
    1. 중요도 max값보다 작으면 맨 뒤로 보내기.
    2. max값과 같으면 queue에서 제거하고 max값 다시 구하기
    */
    var answer = [];
    let maxPriority = Math.max(...priorities);
    let newArr = priorities.map((item,index)=>[index,item]);
    while(newArr.length>0){
        let [index,priority] = newArr.shift();
        if(maxPriority > priority){
            newArr.push([index,priority]);
        } else {
            answer.push(index);
            let priorityArr = newArr.map((item)=>item[1]);
            maxPriority = Math.max(...priorityArr)
        }
    }

    
    return answer.indexOf(location)+1;
}