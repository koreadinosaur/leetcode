/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 50분
 */
var setZeroes = function(matrix) {
    let positionOfZero = [];
    for(let i = 0; i<matrix.length ; i++){
        for(let j=0; j<matrix[i].length ; j++){
            if(matrix[i][j] === 0) positionOfZero.push([i,j]);
        }        
    }
    for(let [i,j] of positionOfZero){
        matrix[i].forEach((item,idx)=> matrix[i][idx] = 0);
        matrix.forEach((item)=>item[j] = 0);
    }
};