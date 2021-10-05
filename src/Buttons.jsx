const Buttons = ({ isStarted, isRunning, handleResetLap, handleStartStop }) => {
  return (
    <div className="buttons">
      <button className="resetLapButton" disabled={!isStarted} onClick={handleResetLap}>
        {isRunning ? "Lap" : "Reset"}
      </button>
      <button className={isRunning ? "stopButton" : "startButton"} onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  )
}

export default Buttons
