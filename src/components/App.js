import { useState } from "react";
import Gamegrid from "./Gamegrid";
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/16/solid";

const iconCss = "size-10 text-blue-200 cursor-pointer mx-4";

let prevSpeakerVal = true;
if(localStorage.getItem('speaker') === 'false') {
  prevSpeakerVal = false;
}

let prevDarkVal = true;
if(localStorage.getItem('dark') === 'false') {
  prevDarkVal = false;
}

function App() {

  const [speakerOn, setSpeakerOn] = useState(prevSpeakerVal);
  const [darkOn, setDarkOn] = useState(prevDarkVal);

  return (
    <div className="bg-blue-950 min-h-screen w-full">
      <div className="flex justify-center p-2">
        {speakerOn ? (
          <SpeakerWaveIcon
            className={iconCss}
            onClick={() => {
              setSpeakerOn(false)
              localStorage.setItem('speaker', false)
            }}
          />
        ) : (
          <SpeakerXMarkIcon
            className={iconCss}
            onClick={() => {
              setSpeakerOn(true)
              localStorage.setItem('speaker', true)
            }}
          />
        )}
        score yo
        {darkOn ? (
          <SunIcon className={iconCss} onClick={() => {
            setDarkOn(false)
            localStorage.setItem('dark', false)
          }} />
        ) : (
          <MoonIcon className={iconCss} onClick={() => {
            setDarkOn(true)
            localStorage.setItem('dark', true)
          }} />
        )}
      </div>
      <div className="min-h-[80vh] flex justify-center items-center bg-blue-950">
        <Gamegrid speakerOn={speakerOn}/>
      </div>
    </div>
  );
}

export default App;
