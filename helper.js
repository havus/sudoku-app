export default (str) => {
  const strucBoard = [];
  for (let i = 0; i < 9; i++) {
    strucBoard.push(str.substring(i * 9, i * 9 + 9));
  }

  const board = [];
  let temp3 = [];
  for (let i = 0; i < strucBoard.length; i++) {
    for (let j = 0; j < strucBoard[i].length; j++) {
      temp3.push(strucBoard[i][j])
      if (temp3.length % 3 === 0) {
        board.push(temp3);
        temp3 = [];
      }
    }
  }

  const boardMaster = [];
  for (let i = 0; i < 3; i++) {
    let box1 = [
      board[i*9], 
      board[i*9+3], 
      board[i*9+6]
    ];
    let box2 = [
      board[i*9+1], 
      board[i*9+3+1], 
      board[i*9+6+1]
    ];
    let box3 = [
      board[i*9+2], 
      board[i*9+3+2], 
      board[i*9+6+2]
    ];
    boardMaster.push(...box1, ...box2, ...box3);
  }

  return boardMaster;
}