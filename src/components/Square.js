import React from "react";

const Square = ({hidden=false, clicked=false, performClick}) => {

  if(hidden) return(
    <div className="w-16 h-16 m-2 justify-center items-center flex"></div>
  );

  return (
    <div
      className="w-16 h-16 m-2 justify-center items-center flex cursor-pointer border-2 text-white"
      onClick={performClick}
    >
      {clicked ? "front" : "back"}
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
