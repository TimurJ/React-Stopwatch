import "./style.css"
import { useReducer } from "react"
import DisplayTime from "./DisplayTime"
import Buttons from "./Buttons"
import LapTable from "./LapTable"
import useTimer from "./useTimer"

const ACTIONS = {
  START_STOP_TIMER: "start-timer",
  CAPTURE_LAP_TIME: "capture-lap",
  RESET: "reset",
}

const initialState = {
  isRunning: false,
  lapTimes: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.START_STOP_TIMER:
      return { ...state, isRunning: !state.isRunning }
    case ACTIONS.CAPTURE_LAP_TIME:
      return { ...state, lapTimes: [action.payload, ...state.lapTimes] }
    case ACTIONS.RESET:
      return { isRunning: false, lapTimes: [] }
    default:
      return console.error("Action type not recognized")
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { elapsedTime, activeLap, resetActiveLap, resetElapsedTime } = useTimer(state.isRunning, state.lapTimes)

  const handleResetLap = () => {
    if (state.isRunning) {
      dispatch({ type: ACTIONS.CAPTURE_LAP_TIME, payload: activeLap })
      resetActiveLap()
    } else {
      resetElapsedTime()
      resetActiveLap()
      dispatch({ type: ACTIONS.RESET })
    }
  }

  const handleStartStop = () => {
    dispatch({ type: ACTIONS.START_STOP_TIMER })
  }

  return (
    <div>
      <DisplayTime elapsedTime={elapsedTime} />

      <Buttons isStarted={elapsedTime > 0} isRunning={state.isRunning} handleResetLap={handleResetLap} handleStartStop={handleStartStop} />

      <LapTable lapTimes={state.lapTimes} activeLap={activeLap} />
    </div>
  )
}
export default App
