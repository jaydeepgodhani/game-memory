import React, { useState } from 'react'
import Square from './Square';
import fillBoardWithValues from '../utils/fillBoardWithValues';
import { ArrowPathIcon } from '@heroicons/react/16/solid';
import modifyStats from '../utils/modifyStats';
import fillArray from '../utils/fillArray';

const arrayy = [...Array.from(Array(8).keys()), ...Array.from(Array(8).keys())]
let boardValues = fillBoardWithValues(arrayy);
console.log(boardValues);

const Gamegrid = () => {

  const [isHidden, setIsHidden] = useState(Array(16).fill(false));
  const [isClicked, setIsClicked] = useState(Array(16).fill(false));

  function performClick(index) {
    const newClicked = isClicked.slice();
    newClicked[index] = !isClicked[index];
    setIsClicked(newClicked);
  }

  const allClicked = [];
  fillArray(isClicked, allClicked);

  const allHidden = [];
  fillArray(isHidden, allHidden);

  if(allClicked.length === 2){
    if(boardValues[allClicked[0]] === boardValues[allClicked[1]]) {
      modifyStats(isClicked, setIsClicked, false, allClicked);
      modifyStats(isHidden, setIsHidden, true, allClicked);
    } else {
      setTimeout(() => modifyStats(isClicked, setIsClicked, false, allClicked), 1500);
    }
  }

  const restartGame = () => {
    setIsHidden(Array(16).fill(false));
    boardValues = fillBoardWithValues(arrayy);
    console.log(boardValues);
  }

  if(allHidden.length === 16) {
    return (
      <ArrowPathIcon className='size-12 text-blue-200 cursor-pointer' onClick={restartGame} />
    )
  }

  return (
    <div>
      <div className="flex">
        <Square isHidden={isHidden[0]} isClicked={isClicked[0]} performClick={() => performClick(0)} backValue={boardValues[0]}/>
        <Square isHidden={isHidden[1]} isClicked={isClicked[1]} performClick={() => performClick(1)} backValue={boardValues[1]}/>
        <Square isHidden={isHidden[2]} isClicked={isClicked[2]} performClick={() => performClick(2)} backValue={boardValues[2]}/>
        <Square isHidden={isHidden[3]} isClicked={isClicked[3]} performClick={() => performClick(3)} backValue={boardValues[3]}/>
      </div>
      <div className="flex">
        <Square isHidden={isHidden[4]} isClicked={isClicked[4]} performClick={() => performClick(4)} backValue={boardValues[4]}/>
        <Square isHidden={isHidden[5]} isClicked={isClicked[5]} performClick={() => performClick(5)} backValue={boardValues[5]}/>
        <Square isHidden={isHidden[6]} isClicked={isClicked[6]} performClick={() => performClick(6)} backValue={boardValues[6]}/>
        <Square isHidden={isHidden[7]} isClicked={isClicked[7]} performClick={() => performClick(7)} backValue={boardValues[7]}/>
      </div>
      <div className="flex">
        <Square isHidden={isHidden[8]} isClicked={isClicked[8]} performClick={() => performClick(8)} backValue={boardValues[8]}/>
        <Square isHidden={isHidden[9]} isClicked={isClicked[9]} performClick={() => performClick(9)} backValue={boardValues[9]}/>
        <Square isHidden={isHidden[10]} isClicked={isClicked[10]} performClick={() => performClick(10)} backValue={boardValues[10]}/>
        <Square isHidden={isHidden[11]} isClicked={isClicked[11]} performClick={() => performClick(11)} backValue={boardValues[11]}/>
      </div>
      <div className="flex">
        <Square isHidden={isHidden[12]} isClicked={isClicked[12]} performClick={() => performClick(12)} backValue={boardValues[12]}/>
        <Square isHidden={isHidden[13]} isClicked={isClicked[13]} performClick={() => performClick(13)} backValue={boardValues[13]}/>
        <Square isHidden={isHidden[14]} isClicked={isClicked[14]} performClick={() => performClick(14)} backValue={boardValues[14]}/>
        <Square isHidden={isHidden[15]} isClicked={isClicked[15]} performClick={() => performClick(15)} backValue={boardValues[15]}/>
      </div>
    </div>
  );
}

export default Gamegrid