const Buttons = ({ elapsedTime, isRunning, handleResetLap, handleStartStop }) => {
  return (
    <div className="buttons">
      <button className="resetLapButton" disabled={!elapsedTime} onClick={handleResetLap}>
        {isRunning ? "Lap" : "Reset"}
      </button>
      <button className={isRunning ? "stopButton" : "startButton"} onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Buttons;
