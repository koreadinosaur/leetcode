function solution(fees, records) {
    const calculateTime = (inTime,outTime) => {
        const [inHour,inMin] = inTime.split(':');
        const [outHour, outMin] = outTime.split(':');
        let hour = outHour-inHour;
        let min = outMin - inMin;
        return min <0 ? (60+min) + (hour-1)*60 : hour*60 +min;
    }
    //50분
    var answer = [];
    const [baseTime,baseFee, unitTime,unitFee] = fees;
    const map = new Map()
    for(let i = 0; i<records.length; i++){
        let [time,number, history] = records[i].split(' ');
        if(map.get(number)){
            const [storedTime,storedHistory,acc] = map.get(number);
            if(history === 'OUT'&& storedHistory === 'IN'){
                let accTime = calculateTime(storedTime,time);
                map.set(number, [time,history,acc + accTime]);
            } else if (history ==='IN' && storedHistory === 'OUT'){
                const [storedTime,storedHistory,acc] = map.get(number);
                map.set(number, [time,history,acc])
            }
        }else {
            map.set(number,[time,history,0])
        }

    }
    map.forEach((value,key)=>{
        const [time,history,acc] = value;
        if(history ==='IN'){
            const accTime = calculateTime(time,'23:59');
            answer.push([key,acc+accTime])
        } else {
            answer.push([key,acc]);
        }
    })
    answer.sort((a,b)=>a[0]-b[0]);

    const result = answer.map((item)=> {
        let time = item[1];
        if(time <= baseTime){
            return baseFee;
        } else{
            return baseFee + Math.ceil((time-baseTime)/unitTime)*unitFee
        }
    })
 
    return result;
}