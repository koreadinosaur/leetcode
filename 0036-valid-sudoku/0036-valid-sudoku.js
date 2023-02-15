/**
 * @param {character[][]} board
 * @return {boolean}
 55분
 */
var isValidSudoku = function(board) {
    //row 체크
    for(let i =0; i<board.length ; i++){
        const set = new Set();
        for(let j =0; j<board[i].length ; j++){
            if(board[i][j] !== '.'){
                if(set.has(board[i][j])) return false;
                set.add(board[i][j]);
            }
        }
    }
    
    //column 체크
      for(let i =0; i<board.length ; i++){
        const set = new Set();
        for(let j =0; j<board[i].length ; j++){
            if(board[j][i] !== '.'){
                if(set.has(board[j][i])) return false;
                set.add(board[j][i]);
            }
        }
    }
    //box check
      for(let i =0; i<board.length ; i = i+3){
        for(let j =0; j<board[i].length ; j = j+3){
            const set = new Set();
            for(let x = i; x<i+3 ; x++ ){
                for(let y = j; y<j+3 ; y++){
                if(board[x][y] !== '.'){
                if(set.has(board[x][y])) return false;
                set.add(board[x][y]);
            }
                }
            }
            
        }
    }
    return true;
};