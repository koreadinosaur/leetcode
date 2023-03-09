function solution(cacheSize, cities) {
    //11시
    var answer = 0;
    let cache = [];
    for(let i = 0; i<cities.length; i++){
        let city = cities[i].toLowerCase();
        let searchIndex = cache.indexOf(city)
        if(searchIndex !== -1){
            cache.splice(searchIndex, 1);
            answer += 1;
        } else {
            answer += 5;
        }
        cache.push(city)
        if(cache.length > cacheSize) cache.shift();


    }
    
    return answer;
}