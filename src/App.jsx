import React, { useState, useEffect } from "react";
import "./style.css";

const convertTime = (time) => {
  let milliseconds = Math.floor(time) % 1000;
  let seconds = Math.floor(time / 1000) % 60;
  let minutes = Math.floor(time / 60000) % 60;
  return `${padNumbers(minutes)}:${padNumbers(seconds)}.${padNumbers(Math.floor(milliseconds / 10))}`;
};

const padNumbers = (number) => {
  return number.toString().padStart(2, 0);
};

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [activeLapTime, setActiveLapTime] = useState(0);
  const [lapNumber, setLapNumber] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - elapsedTime;
      const lapStartTime = Date.now() - activeLapTime;

      const interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
        setActiveLapTime(Date.now() - lapStartTime);
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const reset = () => {
    if (!isRunning) {
      setElapsedTime(0);
      setActiveLapTime(0);
    }
  };

  const saveLap = () => {
    if (isRunning) {
      lapStartTime = 0;
    }
  };

  return (
    <div>
      <div class="time">{convertTime(elapsedTime)}</div>

      <div className="buttons">
        <button
          className="resetLapButton"
          disabled={!elapsedTime}
          onClick={() => {
            reset();
            saveLap();
          }}
        >
          {isRunning ? "Lap" : "Reset"}
        </button>
        <button className={isRunning ? "stopButton" : "startButton"} onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>

      <div id="table">
        <table id="lapTable">
          <tbody>
            <tr>
              <td>Lap 1</td>
              <td>{convertTime(activeLapTime)}</td>
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
}

export default App;
