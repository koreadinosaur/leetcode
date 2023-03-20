function solution(n) {
    var answer = 0;
    //11시 20분
    let memo = [1,2];
    /*const fibonacci = (k) => {
        if(k < 2) return 1;
        if(memo[k] !== undefined) return memo[k];
        return memo[k] = fibonacci(k-1)%1000000007 + fibonacci(k-2)%1000000007;
    }*/
    for(let i =2; i<n; i++){
        memo[i] = (memo[i-1] + memo[i-2])%1000000007
    }
    return memo[n-1];
}