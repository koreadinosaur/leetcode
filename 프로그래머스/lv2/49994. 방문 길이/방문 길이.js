function solution(dirs) {
    const set = new Set();
    var answer = 0;
    //35분
    const currentPosition = [5,5];
    for(let i =0; i<dirs.length; i++){
        let isVisited = [...currentPosition];
        if(dirs[i] === 'U'&&currentPosition[1]<10){
            currentPosition[1] = currentPosition[1] + 1;
        } else if(dirs[i] === 'R'&&currentPosition[0]<10){
            currentPosition[0] = currentPosition[0] + 1;
        }else if(dirs[i] === 'D'&&currentPosition[1]>0){
            currentPosition[1] = currentPosition[1] - 1;
        }else if(dirs[i] === 'L' && currentPosition[0]>0){
            currentPosition[0] = currentPosition[0] - 1;
        } else {
            continue;
        }
        /*console.log(currentPosition);
        console.log(visited)
        if(!isVisited || !visited[currentPosition[0]][currentPosition[1]]) answer++;
        visited[currentPosition[0]][currentPosition[1]] = true;*/
        set.add(isVisited.join('')+currentPosition.join(''))
        set.add(currentPosition.join('')+isVisited.join(''))
    }
    // visited.forEach((item)=>item.forEach((boolean)=> boolean === true&&answer++));
    return set.size/2;
}