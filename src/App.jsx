import "./style.css"
import { useState } from "react"
import DisplayTime from "./DisplayTime"
import Buttons from "./Buttons"
import LapTable from "./LapTable"
import useTimer from "./useTimer"

const App = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [lapTimes, setLapTimes] = useState([])

  const [elapsedTime, activeLap, resetActiveLap, resetElapsedTime] = useTimer(isRunning, lapTimes)

  const handleResetLap = () => {
    if (isRunning) {
      setLapTimes((lapTimes) => [activeLap, ...lapTimes])
      resetActiveLap()
    } else {
      resetElapsedTime()
      resetActiveLap()
      setLapTimes([])
    }
  }

  const handleStartStop = () => {
    setIsRunning(!isRunning)
  }

  return (
    <div>
      <DisplayTime elapsedTime={elapsedTime} />

      <Buttons isStarted={elapsedTime > 0} isRunning={isRunning} handleResetLap={handleResetLap} handleStartStop={handleStartStop} />

      <LapTable lapTimes={lapTimes} activeLap={activeLap} />
    </div>
  )
}

export default App
