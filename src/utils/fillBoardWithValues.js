const fillBoardWithValues = (board) => {

  for (var i = board.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = board[i];
    board[i] = board[j];
    board[j] = temp;
  }

  return board;
}

export default fillBoardWithValues;