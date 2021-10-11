import { convertTime } from "./utils"
import React from "react"
const DisplayTime = ({ elapsedTime }) => {
  return <div className="time">{convertTime(elapsedTime)}</div>
}

export default DisplayTime
