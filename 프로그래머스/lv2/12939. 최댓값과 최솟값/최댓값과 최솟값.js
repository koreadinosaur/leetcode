function solution(s) {
    //15분    
    var answer = '';
    const splited = s.split(' ').map(Number);
        
    return Math.min(...splited)+ " " + Math.max(...splited);
}