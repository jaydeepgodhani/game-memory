import React, { useState } from 'react'
import Square from './Square';

const Gamegrid = () => {

  const [hidden, setHidden] = useState(new Array(16).fill(false));
  const [clicked, setClicked] = useState(new Array(16).fill(false));

  function performClick(index) {
    const newClicked = clicked.slice();
    newClicked[index] = !clicked[index];
    setClicked(newClicked);
  }

  return (
    <div>
      <div className="flex">
        <Square hidden={hidden[0]} clicked={clicked[0]} performClick={() => performClick(0)}/>
        <Square hidden={hidden[1]} clicked={clicked[1]} performClick={() => performClick(1)}/>
        <Square hidden={hidden[2]} clicked={clicked[2]} performClick={() => performClick(2)}/>
        <Square hidden={hidden[3]} clicked={clicked[3]} performClick={() => performClick(3)}/>
      </div>
      <div className="flex">
        <Square hidden={hidden[4]} clicked={clicked[4]} performClick={() => performClick(4)}/>
        <Square hidden={hidden[5]} clicked={clicked[5]} performClick={() => performClick(5)}/>
        <Square hidden={hidden[6]} clicked={clicked[6]} performClick={() => performClick(6)}/>
        <Square hidden={hidden[7]} clicked={clicked[7]} performClick={() => performClick(7)}/>
      </div>
      <div className="flex">
        <Square hidden={hidden[8]} clicked={clicked[8]} performClick={() => performClick(8)}/>
        <Square hidden={hidden[9]} clicked={clicked[9]} performClick={() => performClick(9)}/>
        <Square hidden={hidden[10]} clicked={clicked[10]} performClick={() => performClick(10)}/>
        <Square hidden={hidden[11]} clicked={clicked[11]} performClick={() => performClick(11)}/>
      </div>
      <div className="flex">
        <Square hidden={hidden[12]} clicked={clicked[12]} performClick={() => performClick(12)}/>
        <Square hidden={hidden[13]} clicked={clicked[13]} performClick={() => performClick(13)}/>
        <Square hidden={hidden[14]} clicked={clicked[14]} performClick={() => performClick(14)}/>
        <Square hidden={hidden[15]} clicked={clicked[15]} performClick={() => performClick(15)}/>
      </div>
    </div>
  );
}

export default Gamegrid