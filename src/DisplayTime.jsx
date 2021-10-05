import { convertTime } from "./utils"

const DisplayTime = ({ elapsedTime }) => {
  return <div className="time">{convertTime(elapsedTime)}</div>
}

export default DisplayTime
