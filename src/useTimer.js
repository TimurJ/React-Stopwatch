import { useState, useEffect } from "react"

const useTimer = (isRunning, lapTimes) => {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [activeLap, setActiveLap] = useState(0)

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

  const resetActiveLap = () => {
    setActiveLap(0)
  }

  const resetElapsedTime = () => {
    setElapsedTime(0)
  }
  return { elapsedTime, activeLap, resetActiveLap, resetElapsedTime }
}
export default useTimer
