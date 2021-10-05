import { convertTime } from "./utils"
import { fastestSlowestLap } from "./utils"

const LapTable = ({ lapTimes, activeLap }) => {
  return (
    <div className="lapTable">
      <table>
        <tbody>
          <tr>
            <td>Lap {lapTimes.length + 1}</td>
            <td>{convertTime(activeLap)}</td>
          </tr>
          {lapTimes.map((element, index) => {
            const lapNumber = lapTimes.length - index
            return (
              <tr className={fastestSlowestLap(element, lapTimes.length)} key={lapNumber}>
                <td>Lap {lapNumber}</td>
                <td>{convertTime(element)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default LapTable
