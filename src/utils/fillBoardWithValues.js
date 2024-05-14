const fillBoardWithValues = () => {

  const board = [...Array.from(Array(8).keys()), ...Array.from(Array(8).keys())]
  // const board = [...Array.from(Array(2).keys()), ...Array.from(Array(2).keys())];

  for (var i = board.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = board[i];
    board[i] = board[j];
    board[j] = temp;
  }

  console.log(board);
  return board;
}

export default fillBoardWithValues;