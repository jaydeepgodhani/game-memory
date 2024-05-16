import React from "react";
const Square = ({ hidden, clicked, performClick, backValue }) => {

  if(hidden) return(
    <div className="w-16 h-16 m-2"></div>
  );

  return (
    <div
      className="*:rounded-lg rounded-xl w-16 h-16 m-2 justify-center items-center flex cursor-pointer border-2 border-solid dark:border-dfground border-fground dark:shadow-lg dark:shadow-dhover shadow-lg shadow-hover"
      onClick={performClick}
    >
      {clicked ?
        <div className="dark:bg-dfground bg-fground w-full h-full flex items-center rounded-lg justify-center dark:text-dbground text-bground text-3xl animate-hflip">{backValue}</div> :
        <div className="w-full h-full hover:rounded-[10px] hover:dark:bg-dhover hover:bg-hover transition-all duration-500"></div>
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
