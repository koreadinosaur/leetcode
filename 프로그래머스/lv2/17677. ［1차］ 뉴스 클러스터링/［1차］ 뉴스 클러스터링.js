function solution(str1, str2) {
    //10시
    var answer = 0;
    let string = '';
    let cluster1 = {};
    let cluster2 = {};
    for(let i =0; i<str1.length; i++){
        if(/[a-zA-Z]/.exec(str1[i])) {
            string+=str1[i]
        } else {
            if(string) string= '';
            continue;
        }
        if(string.length === 2){
           cluster1[string.toLowerCase()] = (cluster1[string.toLowerCase()]||0) +1 
            string = str1[i];
        }
    }
    string = '';
    for(let i =0; i<str2.length; i++){
        if(/[a-zA-Z]/.exec(str2[i])) {
            string+=str2[i]
        }else {
            if(string) string= '';
            continue;
        }
        if(string.length === 2){
           cluster2[string.toLowerCase()] = (cluster2[string.toLowerCase()]||0) +1 
            string = str2[i];
        }
    }
    
    let intersection = 0;
    let union = 0;
    
    for(let key in cluster1){
        if(cluster2[key]){
            intersection += Math.min(cluster1[key],cluster2[key]);
        }
        union += cluster1[key]
    }
    for(let key in cluster2){
        union += cluster2[key]
    }

    if(intersection === 0 && union === 0) return 65536
    if(intersection === 0 &&union!==0) return 0;
    return Math.floor((intersection/(union-intersection))*65536);
}