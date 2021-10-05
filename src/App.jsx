import "./style.css"
import { useState, useEffect } from "react"
import DisplayTime from "./DisplayTime"
import Buttons from "./Buttons"
import LapTable from "./LapTable"
import useTimer from "./useTimer"

const App = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [lapTimes, setLapTimes] = useState([])
  const [elapsedTime, activeLap, resetActiveLap, resetElapsedTime] = useTimer(isRunning, lapTimes)

  const reset = () => {
    resetElapsedTime()
    resetActiveLap()
    setLapTimes([])
  }

  const saveLap = () => {
    setLapTimes((lapTimes) => [activeLap, ...lapTimes])
    resetActiveLap()
  }

  const handleStartStop = () => {
    setIsRunning(!isRunning)
  }

  const handleResetLap = isRunning ? saveLap : reset

  return (
    <div>
      <DisplayTime elapsedTime={elapsedTime} />

      <Buttons isStarted={elapsedTime > 0} isRunning={isRunning} handleResetLap={handleResetLap} handleStartStop={handleStartStop} />

      <LapTable lapTimes={lapTimes} activeLap={activeLap} />
    </div>
  )
}

export default App
