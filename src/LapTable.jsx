import { convertTime } from "./utils";

let fastestLap = 0;
let slowestLap = 0;

const LapTable = ({ lapTimes, activeLap }) => {
  const fastestSlowestLap = (time) => {
    const lapNumber = lapTimes.length;

    if (lapNumber === 1) {
      fastestLap = time;
    }

    if (lapNumber === 2) {
      if (fastestLap > time) {
        slowestLap = fastestLap;
        fastestLap = time;
      }
    }

    if (lapNumber >= 2) {
      if (time <= fastestLap) {
        fastestLap = time;
        return "fastestLap";
      } else if (time >= slowestLap) {
        slowestLap = time;
        return "slowestLap";
      }
    }
  };

  return (
    <div className="lapTable">
      <table>
        <tbody>
          <tr>
            <td>Lap {lapTimes.length + 1}</td>
            <td>{convertTime(activeLap)}</td>
          </tr>
          {lapTimes.map((element, index) => {
            const lapNumber = lapTimes.length - index;
            return (
              <tr className={fastestSlowestLap(element)} key={lapNumber}>
                <td>Lap {lapNumber}</td>
                <td>{convertTime(element)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LapTable;
