import "./style.css"
import { useState, useEffect } from "react"
import DisplayTime from "./DisplayTime"
import Buttons from "./Buttons"
import LapTable from "./LapTable"

const App = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  const [activeLap, setActiveLap] = useState(0)
  const [lapTimes, setLapTimes] = useState([])

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - elapsedTime
      const lapStartTime = Date.now() - activeLap

      const interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime)
        setActiveLap(Date.now() - lapStartTime)
      }, 10)

      return () => clearInterval(interval)
    }
  }, [isRunning, lapTimes])

  const reset = () => {
    setElapsedTime(0)
    setActiveLap(0)
    setLapTimes([])
  }

  const saveLap = () => {
    setLapTimes((lapTimes) => [activeLap, ...lapTimes])
    setActiveLap(0)
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
