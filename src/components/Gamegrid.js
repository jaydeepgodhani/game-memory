import React, { useState } from 'react'
import Square from './Square';
import makeBoard from '../utils/makeBoard';

const arrayy = [...Array.from(Array(8).keys()), ...Array.from(Array(8).keys())]
const values = makeBoard(arrayy);
console.log(values);

const Gamegrid = () => {

  const [hidden, setHidden] = useState(Array(16).fill(false));
  const [clicked, setClicked] = useState(Array(16).fill(false));

  function performClick(index) {
    const newClicked = clicked.slice();
    newClicked[index] = !clicked[index];
    setClicked(newClicked);
  }

  const found = [];
  for (let i=0; i<16; i++) {
    if(clicked[i] === true) {
      found.push(i);
    }
  }
  console.log(found);
  if(found.length === 2){
    if(values[found[0]] === values[found[1]]) {
      const newClicked = clicked.slice();
      newClicked[found[0]] = false;
      newClicked[found[1]] = false;
      setClicked(newClicked);

      const newHidden = hidden.slice();
      newHidden[found[0]] = true;
      newHidden[found[1]] = true;
      setHidden(newHidden);

    } else {
      console.log("else...");
    }
  }

  return (
    <div>
      <div className="flex">
        <Square hidden={hidden[0]} clicked={clicked[0]} performClick={() => performClick(0)} backValue={values[0]}/>
        <Square hidden={hidden[1]} clicked={clicked[1]} performClick={() => performClick(1)} backValue={values[1]}/>
        <Square hidden={hidden[2]} clicked={clicked[2]} performClick={() => performClick(2)} backValue={values[2]}/>
        <Square hidden={hidden[3]} clicked={clicked[3]} performClick={() => performClick(3)} backValue={values[3]}/>
      </div>
      <div className="flex">
        <Square hidden={hidden[4]} clicked={clicked[4]} performClick={() => performClick(4)} backValue={values[4]}/>
        <Square hidden={hidden[5]} clicked={clicked[5]} performClick={() => performClick(5)} backValue={values[5]}/>
        <Square hidden={hidden[6]} clicked={clicked[6]} performClick={() => performClick(6)} backValue={values[6]}/>
        <Square hidden={hidden[7]} clicked={clicked[7]} performClick={() => performClick(7)} backValue={values[7]}/>
      </div>
      <div className="flex">
        <Square hidden={hidden[8]} clicked={clicked[8]} performClick={() => performClick(8)} backValue={values[8]}/>
        <Square hidden={hidden[9]} clicked={clicked[9]} performClick={() => performClick(9)} backValue={values[9]}/>
        <Square hidden={hidden[10]} clicked={clicked[10]} performClick={() => performClick(10)} backValue={values[10]}/>
        <Square hidden={hidden[11]} clicked={clicked[11]} performClick={() => performClick(11)} backValue={values[11]}/>
      </div>
      <div className="flex">
        <Square hidden={hidden[12]} clicked={clicked[12]} performClick={() => performClick(12)} backValue={values[12]}/>
        <Square hidden={hidden[13]} clicked={clicked[13]} performClick={() => performClick(13)} backValue={values[13]}/>
        <Square hidden={hidden[14]} clicked={clicked[14]} performClick={() => performClick(14)} backValue={values[14]}/>
        <Square hidden={hidden[15]} clicked={clicked[15]} performClick={() => performClick(15)} backValue={values[15]}/>
      </div>
    </div>
  );
}

export default Gamegrid