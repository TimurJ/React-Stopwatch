import ActiveLap from "./ActiveLap"
import { convertTime } from "./utils"
import { fastestSlowestLap } from "./fastestSlowestLap"

const LapTable = ({ lapTimes, activeLap }) => {
  return (
    <div className="lapTable">
      <table>
        <tbody>
          {activeLap ? <ActiveLap activeLap={activeLap} lapTimes={lapTimes} /> : null}

          {lapTimes.map((element, index) => {
            const lapNumber = lapTimes.length - index
            const lapClass = fastestSlowestLap(element, lapTimes.length)
            return (
              <tr className={lapClass} key={lapNumber}>
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
