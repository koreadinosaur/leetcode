function solution(progresses, speeds) {
    //45분 
    /*의사코드
    1. 
    */
    let min = Math.ceil((100 - progresses[0])/speeds[0]);
    let count = 1;
    var answer = [];
    for(let i =1; i< progresses.length ; i++){        
      if(min < Math.ceil((100 - progresses[i])/speeds[i])){
          min = Math.ceil((100 - progresses[i])/speeds[i])
          answer.push(count);
          count = 1;
      } else{
          count++;
      }
    }
    answer.push(count);
    return answer;
}