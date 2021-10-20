import ActiveLap from "./ActiveLap"
import LapTimes from "./LapTimes"
import EmptyLaps from "./EmptyLaps"
import React from "react"

const LapTable = ({ lapTimes, activeLap }) => {
  return (
    <div className="lapTable">
      <table>
        <tbody>
          {activeLap ? <ActiveLap activeLap={activeLap} lapTimes={lapTimes} /> : null}
          <LapTimes lapTimes={lapTimes} />
          <EmptyLaps lapTimes={lapTimes} activeLap={activeLap} />
        </tbody>
      </table>
    </div>
  )
}

export default LapTable
