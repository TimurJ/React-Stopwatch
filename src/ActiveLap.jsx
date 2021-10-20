import { convertTime } from "./utils"

const ActiveLap = ({ activeLap, lapTimes }) => {
  return (
    <tr>
      <td>Lap {lapTimes.length + 1}</td>
      <td>{convertTime(activeLap)}</td>
    </tr>
  )
}

export default ActiveLap
