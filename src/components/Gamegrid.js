import React, { useRef, useState } from 'react'
import Square from './Square';
import fillBoardWithValues from '../utils/fillBoardWithValues';
import { ArrowPathIcon } from '@heroicons/react/16/solid';
import modifyStats from '../utils/modifyStats';
import fillArray from '../utils/fillArray';

let boardValues = fillBoardWithValues();

const Gamegrid = () => {

  const [hidden, setHidden] = useState(Array(16).fill(false));
  const [clicked, setClicked] = useState(Array(16).fill(false));
  const [freeze, setFreeze] = useState(false);
  const hiddenSquares = useRef(0);

  function performClick(index) {
    if(!freeze) {
      const newClicked = clicked.slice();
      newClicked[index] = true;
      setClicked(newClicked);
    }
  }

  const clickedSquares = [];
  fillArray(clicked, clickedSquares);

  if(clickedSquares.length === 2){
    if(boardValues[clickedSquares[0]] === boardValues[clickedSquares[1]]) {
      modifyStats(clicked, setClicked, false, clickedSquares);
      modifyStats(hidden, setHidden, true, clickedSquares);
      hiddenSquares.current += 2;
    } else {
      if(!freeze) setFreeze(true);
      setTimeout(() => modifyStats(clicked, setClicked, false, clickedSquares), 1000);
      setTimeout(() => setFreeze(false), 1000);
    }
  }

  const restartGame = () => {
    setHidden(Array(16).fill(false));
    hiddenSquares.current = 0;
    boardValues = fillBoardWithValues();
  }

  if(hiddenSquares.current === 16) {
    return (
      <ArrowPathIcon className='size-12 text-blue-200 cursor-pointer' onClick={restartGame} />
    )
  }

  return (
    <div>
      <div className="flex">
        <Square hidden={hidden[0]} clicked={clicked[0]} performClick={() => performClick(0)} backValue={boardValues[0]}/>
        <Square hidden={hidden[1]} clicked={clicked[1]} performClick={() => performClick(1)} backValue={boardValues[1]}/>
        <Square hidden={hidden[2]} clicked={clicked[2]} performClick={() => performClick(2)} backValue={boardValues[2]}/>
        <Square hidden={hidden[3]} clicked={clicked[3]} performClick={() => performClick(3)} backValue={boardValues[3]}/>
      </div>
      <div className="flex">
        <Square hidden={hidden[4]} clicked={clicked[4]} performClick={() => performClick(4)} backValue={boardValues[4]}/>
        <Square hidden={hidden[5]} clicked={clicked[5]} performClick={() => performClick(5)} backValue={boardValues[5]}/>
        <Square hidden={hidden[6]} clicked={clicked[6]} performClick={() => performClick(6)} backValue={boardValues[6]}/>
        <Square hidden={hidden[7]} clicked={clicked[7]} performClick={() => performClick(7)} backValue={boardValues[7]}/>
      </div>
      <div className="flex">
        <Square hidden={hidden[8]} clicked={clicked[8]} performClick={() => performClick(8)} backValue={boardValues[8]}/>
        <Square hidden={hidden[9]} clicked={clicked[9]} performClick={() => performClick(9)} backValue={boardValues[9]}/>
        <Square hidden={hidden[10]} clicked={clicked[10]} performClick={() => performClick(10)} backValue={boardValues[10]}/>
        <Square hidden={hidden[11]} clicked={clicked[11]} performClick={() => performClick(11)} backValue={boardValues[11]}/>
      </div>
      <div className="flex">
        <Square hidden={hidden[12]} clicked={clicked[12]} performClick={() => performClick(12)} backValue={boardValues[12]}/>
        <Square hidden={hidden[13]} clicked={clicked[13]} performClick={() => performClick(13)} backValue={boardValues[13]}/>
        <Square hidden={hidden[14]} clicked={clicked[14]} performClick={() => performClick(14)} backValue={boardValues[14]}/>
        <Square hidden={hidden[15]} clicked={clicked[15]} performClick={() => performClick(15)} backValue={boardValues[15]}/>
      </div>
    </div>
  );
}

export default Gamegrid