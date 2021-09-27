import { useState } from "react";
import "./style.css";

function App() {
  const [startTime, setStartTime] = useState(0);

  const timer = () => {
    if (!startTime) {
    }
  };
  return (
    <div>
      <div id="setTime">00:00.00</div>

      <div className="buttons">
        <button className="initialLapButton" id="resetLapButton">
          Lap
        </button>
        <button className="startButton" id="startStopButton">
          Start
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
}

export default App;
