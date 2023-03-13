function solution(n) {
    //11시
    /*의사코드
    1. 1부터 3씩 늘어날 때마다 앞자리 수가 1,2,4로 바뀜 그 다음은? 
    2. 12일 때는 뭐 어떡하지 111되나?
    */
    var answer = '';
    while(n >0){
        if(n%3 === 0){
            answer = 4+answer;
            n = Math.floor(n/3)-1;
        } else {
            answer = n%3 + answer;
            n = Math.floor(n/3)
        }
        
    }
    return answer;
}