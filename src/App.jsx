import "./style.css"
import { useState, useReducer } from "react"
import DisplayTime from "./DisplayTime"
import Buttons from "./Buttons"
import LapTable from "./LapTable"
import useTimer from "./useTimer"

const ACTIONS = {
  IS_RUNNING: "isRunning",
}
const reducer = (state, action) => {
  switch (action.type) {
    case "1":
      return {}
    case "2":
      return {}
    default:
      return state
  }
}

const App = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [lapTimes, setLapTimes] = useState([])

  const [state, dispatch] = useReducer(reducer, { count: 0 })
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
