import { useState, useEffect } from "react";
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
  const [activeLap, setActiveLap] = useState(0);
  const [lapTime, setLapTime] = useState([]);
  const [lapNumber, setLapNumber] = useState(0);
  const [fastestLap, setFastestLap] = useState(0);
  const [slowestLap, setSlowestLap] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - elapsedTime;
      const lapStartTime = Date.now() - activeLap;

      const interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
        setActiveLap(Date.now() - lapStartTime);
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isRunning, lapTime]);

  const reset = () => {
    if (!isRunning) {
      setElapsedTime(0);
      setActiveLap(0);
      setLapTime([]);
      setLapNumber(0);
    }
  };

  const saveLap = () => {
    if (isRunning) {
      setLapTime((lapTime) => [activeLap, ...lapTime]);
      setLapNumber((lapNumber) => lapNumber + 1);
      setActiveLap(0);
    }
  };

  const fastestSlowestLap = (time) => {
    if (lapNumber > 2) {
      if (time > slowestLap) {
        setSlowestLap(time);
        return "slowestLap";
      }

      if (time < fastestLap) {
        setFastestLap(time);
        return "fastestLap";
      }
    }
  };

  return (
    <div>
      <div className="time">{convertTime(elapsedTime)}</div>

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

      <div className="lapTable">
        <table>
          <tbody>
            <tr>
              <td>Lap {lapNumber + 1}</td>
              <td>{convertTime(activeLap)}</td>
            </tr>
            {lapTime.map((element, index) => {
              console.log(fastestSlowestLap(element));
              return (
                <tr className={fastestSlowestLap(element)} key={lapNumber - index}>
                  <td>Lap {lapNumber - index}</td>
                  <td>{convertTime(element)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
