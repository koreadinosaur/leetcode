function solution(record) {
    var answer = [];
    //20분
    let map = {};
    for(let i =0; i<record.length; i++){
        const [act, id, name] = record[i].split(' ');
        if(act === 'Change'||act === 'Enter'){
            map[id] = name;  
        }

    }
    for(let i =0; i<record.length; i++){
        const [act, id, name] = record[i].split(' ');
        if(act === 'Change'){
            continue;
        }
        answer.push(`${map[id]}님이 ${act==='Enter' ? '들어왔습니다.' : '나갔습니다.'}`)
    }
    return answer;
}