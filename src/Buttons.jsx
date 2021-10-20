const Buttons = ({ isStarted, isRunning, handleResetLap, handleStartStop }) => {
  const resetLapButtonText = () => {
    if (!isStarted) {
      return "Lap"
    } else if (isRunning) {
      return "Lap"
    } else if (!isRunning) {
      return "Reset"
    }
  }
  return (
    <div className="buttons">
      <button className="resetLapButton" disabled={!isStarted} onClick={handleResetLap}>
        {resetLapButtonText()}
      </button>
      <button className={isRunning ? "stopButton" : "startButton"} onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  )
}

export default Buttons
