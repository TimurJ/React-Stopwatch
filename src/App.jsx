import { useState, useEffect } from "react";
import "./style.css";
import { convertTime } from "./utils";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const [activeLap, setActiveLap] = useState(0);
  const [fastestLap, setFastestLap] = useState(0);
  const [slowestLap, setSlowestLap] = useState(0);
  const [lapTime, setLapTime] = useState([]);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - elapsedTime;
      const lapStartTime = Date.now() - activeLap;

      const interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
        setActiveLap(Date.now() - lapStartTime);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isRunning, lapTime]);

  // const reset = () => {
  //   setElapsedTime(0);
  //   setActiveLap(0);
  //   setSlowestLap(0);
  //   setFastestLap(0);
  //   setLapTime([]);
  // };

  const saveLap = () => {
    setLapTime((lapTime) => [activeLap, ...lapTime]);
    setActiveLap(0);
  };

  const fastestSlowestLap = (time) => {
    const lapNumber = lapTime.length;

    if (lapNumber === 1) {
      setFastestLap(10);
    }

    if (lapNumber === 2) {
      if (fastestLap > time) {
        setSlowestLap(fastestLap);
        setFastestLap(time);
      } else {
        setSlowestLap(time);
      }
    }

    if (lapNumber >= 2) {
      if (time <= fastestLap) {
        setFastestLap(time);
        return "fastestLap";
      } else if (time >= slowestLap) {
        setSlowestLap(time);
        return "slowestLap";
      }
    }
  };

  const resetLapHandler = isRunning ? saveLap : reset;

  return (
    <div>
      <div className="time">{convertTime(elapsedTime)}</div>

      <div className="buttons">
        <button className="resetLapButton" disabled={!elapsedTime} onClick={resetLapHandler}>
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
              <td>Lap {lapTime.length + 1}</td>
              <td>{convertTime(activeLap)}</td>
            </tr>
            {lapTime.map((element, index) => {
              const lapNumber = lapTime.length - index;
              return (
                <tr key={lapNumber}>
                  <td>Lap {lapNumber}</td>
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
