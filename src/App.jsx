import "./style.css"
import { useState, useReducer, useEffect } from "react"
import DisplayTime from "./DisplayTime"
import Buttons from "./Buttons"
import LapTable from "./LapTable"
import useTimer from "./useTimer"

const ACTIONS = {
  START_STOP_TIMER: "start-timer",
  CAPTURE_LAP_TIME: "capture-lap",
}

const initialState = {
  isRunning: false,
  lapTimes: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.START_STOP_TIMER:
      return { isRunning: !state.isRunning }
    case ACTIONS.CAPTURE_LAP_TIME:
      return { lapTimes: (lapTimes) => [action.payload, ...lapTimes] }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const [isRunning, setIsRunning] = useState(false)
  const [lapTimes, setLapTimes] = useState([])
  // const [emptyLaps, setEmptyLaps] = useState(["", "", "", "", "", ""])

  const { elapsedTime, activeLap, resetActiveLap, resetElapsedTime } = useTimer(state.isRunning, state.lapTimes)

  const handleResetLap = () => {
    if (state.isRunning) {
      setLapTimes((lapTimes) => [activeLap, ...lapTimes])
      //dispatch({ type: ACTIONS.CAPTURE_LAP_TIME, payload: activeLap })
      resetActiveLap()
    } else {
      resetElapsedTime()
      resetActiveLap()
      // setLapTimes([])
      // setEmptyLaps(["", "", "", "", "", ""])
    }
  }

  const handleStartStop = () => {
    dispatch({ type: ACTIONS.START_STOP_TIMER })
  }

  useEffect(() => {
    console.log(state.lapTimes)
  }, [])

  return (
    <div>
      <DisplayTime elapsedTime={elapsedTime} />

      <Buttons isStarted={elapsedTime > 0} isRunning={state.isRunning} handleResetLap={handleResetLap} handleStartStop={handleStartStop} />

      <LapTable lapTimes={lapTimes} activeLap={activeLap} />
    </div>
  )
}

export default App
