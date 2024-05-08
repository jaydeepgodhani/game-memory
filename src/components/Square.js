import React from "react";
const Square = ({ hidden=false, clicked=false, performClick, backValue }) => {

  if(hidden) return(
    <div className="w-16 h-16 m-2 justify-center items-center flex"></div>
  );

  return (
    <div
      className="w-16 h-16 m-2 rounded-lg justify-center items-center flex cursor-pointer border-2 border-blue-200 hover:bg-blue-800"
      onClick={performClick}
    >
      {clicked ?
        <div className="bg-blue-200 w-full h-full flex items-center justify-center text-black text-2xl">{backValue}</div> :
        <div className="text-blue-200 text-lg">•</div>
      }
      {/*<section class="w-16 h-16 m-2 justify-center items-center flex cursor-pointer text-white">
        <div class="w-16 h-16 bg-transparent cursor-pointer group perspective">
          <div class="preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000 border-2">

            <div class="absolute backface-hidden w-full h-full">
              yo front
            </div>

            <div class="absolute backface-hidden w-full h-full rotate-y-180">
              yo back
            </div>

          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default Square;
