import { useState, useEffect } from "react";
import "./style.css";

// render App
// something happens = event handler triggers
// apply some logic
// oh I need to re-render
// tell react to rerender -> here's the value for when you do that
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
const startTime = Date.now();

const convertTime = (time) => {
  milliseconds = Math.floor(time) % 1000;
  seconds = Math.floor(time / 1000) % 60;
  minutes = Math.floor(time / 60000) % 60;

  return `${padNumbers(minutes)}:${padNumbers(seconds)}.${padNumbers(
    Math.floor(milliseconds / 10)
  )}`;
};

const padNumbers = (number) => {
  return number.toString().padStart(2, 0);
};

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  console.log(elapsedTime);

  useEffect(() => {
    // setInterval(() => {
    //   setElapsedTime(Date.now() - startTime);
    // }, 100);
  }, []);

  // const [isPaused, setIsPaused] = useState(false);

  // const handlePause = () => {};

  // const handleResume = () => {};

  // const handleReset = () => {};

  return (
    <div>
      <div id="setTime">{convertTime(elapsedTime)}</div>

      <div className="buttons">
        <button className="resetLapButton" disabled={!elapsedTime}>
          {isRunning ? "Lap" : "Reset"}
        </button>
        <button
          className="startButton"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>

      <div id="table">
        <table id="lapTable">
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
