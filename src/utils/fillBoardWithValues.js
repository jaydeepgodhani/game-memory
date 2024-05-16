const fillBoardWithValues = () => {

  const boards = [
    [...Array.from(Array(8).keys()), ...Array.from(Array(8).keys())],
    ['🦊','🐻','🐼','🐯','🦁','🐮','🐷','🐸','🦊','🐻','🐼','🐯','🦁','🐮','🐷','🐸'],
    ['🐙','🦈','🐊','🐬','🐠','🦀','🐢','🐋','🐙','🦈','🐊','🐬','🐠','🦀','🐢','🐋'],
    ['🔴','🟠','🟡','🟢','🔵','🟣','⚫️','🟤','🔴','🟠','🟡','🟢','🔵','🟣','⚫️','🟤'],
    ['💩','🤡','👹','👺','👻','👽','👾','🤖','💩','🤡','👹','👺','👻','👽','👾','🤖']
  ];

  const board = boards[Math.floor(Math.random() * (5))];
  // const board = [...Array.from(Array(1).keys()), ...Array.from(Array(1).keys())];

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