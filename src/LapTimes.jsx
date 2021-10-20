import React from "react"
import { convertTime } from "./utils"
import { fastestSlowestLap } from "./fastestSlowestLap"

const LapTimes = ({ lapTimes }) => {
  return lapTimes.map((element, index) => {
    const lapNumber = lapTimes.length - index
    const lapClass = fastestSlowestLap(element, lapTimes.length)
    return (
      <tr className={lapClass} key={lapNumber}>
        <td>Lap {lapNumber}</td>
        <td>{convertTime(element)}</td>
      </tr>
    )
  })
}

export default LapTimes
