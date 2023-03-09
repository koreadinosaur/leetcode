function solution(n, k) {
    //35분
    const isPrime = (number) => {
        for(let i =2; i<= Math.sqrt(number);i++){
            if(number%i === 0) return false;
        }
        return true;
    }
    let arithmetic = n.toString(k);
    let array = [];
    let string = '';
    for(let i =0; i<arithmetic.length ;i++){
        if(arithmetic[i] !=='0'){
            string +=arithmetic[i];
        } else {
           string !== '1' && string !=='' &&array.push(Number(string))
            string = '';
        }
    }
    if(string !== '' && string !== '1'){
        array.push(Number(string))
    }

    return array.filter(isPrime).length;
}