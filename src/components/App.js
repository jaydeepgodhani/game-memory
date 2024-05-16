import { useState } from "react";
import Gamegrid from "./Gamegrid";
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/16/solid";

const iconCss = "size-10 dark:text-dfground text-fground cursor-pointer mx-4";
document.documentElement.classList.add('dark')

let prevSpeakerVal = true;
if(localStorage.getItem('speaker') === 'false') {
  prevSpeakerVal = false;
}

let prevDarkVal = true;
if(localStorage.getItem('dark') === 'false') {
  prevDarkVal = false;
  document.documentElement.classList.remove('dark')
}


function App() {

  const [speakerOn, setSpeakerOn] = useState(prevSpeakerVal);
  const [darkOn, setDarkOn] = useState(prevDarkVal);

  return (
    <div className="min-h-screen w-full dark:bg-dbground bg-bground">
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

        {darkOn ? (
          <SunIcon className={iconCss} onClick={() => {
            setDarkOn(false)
            localStorage.setItem('dark', false)
            document.documentElement.classList.remove('dark')
          }} />
        ) : (
          <MoonIcon className={iconCss} onClick={() => {
            setDarkOn(true)
            localStorage.setItem('dark', true)
            document.documentElement.classList.add('dark')
          }} />
        )}
      </div>
      <div className="min-h-[80vh] flex justify-center items-center">
        <Gamegrid speakerOn={speakerOn}/>
      </div>
    </div>
  );
}

export default App;
