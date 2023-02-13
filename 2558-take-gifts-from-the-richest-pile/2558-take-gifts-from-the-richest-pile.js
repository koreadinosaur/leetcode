/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 35분
 */
var pickGifts = function(gifts, k) {
    /* 1. 1초마다 요소들 중 최대값의 제곱근의 버림 숫자가 더미에 추가 된다.
    2. 만약 gifts에 최대값이 겹치면 그 중 하나를 선택한다.
    3. 남은 배열의 숫자의 합을 구한다. 그럼 이게 선물의 개수가 됨.
    */
    let newGifts = [...gifts];
    while(k>0) {
        let idx = 0;
        let max = newGifts[0];
        for(let i = 0; i<newGifts.length ; i++){
            if(newGifts[i]>max){
                idx = i;
                max = newGifts[i];
            }
        }
        newGifts.splice(idx,1);
        newGifts.push(Math.floor(Math.sqrt(max)));
        k--
    };
    let sumOfGifts = newGifts.reduce((acc,cur)=> acc+cur);
    return sumOfGifts
};