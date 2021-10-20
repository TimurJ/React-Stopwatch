let fastestLap = 0
let slowestLap = 0

export const fastestSlowestLap = (time, lapNumber) => {
  if (lapNumber === 1) {
    fastestLap = time
    slowestLap = 0
  }

  if (lapNumber === 2) {
    if (fastestLap > time) {
      slowestLap = fastestLap
      fastestLap = time
    }
  }

  if (lapNumber >= 2) {
    if (time <= fastestLap) {
      fastestLap = time
      return "fastestLap"
    } else if (time >= slowestLap) {
      slowestLap = time
      return "slowestLap"
    }
  }
}

// export const fastestSlowestLap = (time, lapNumber) => {
//   const [fastestLap, setFastestLap] = useState(0)
//   const [slowestLap, setSlowestLap] = useState(0)

//   if (lapNumber === 1) {
//     setFastestLap(time)
//   }

//   if (lapNumber === 2) {
//     if (fastestLap > time) {
//       setSlowestLap(fastestLap)
//       setFastestLap(time)
//     }
//   }

//   if (lapNumber >= 2) {
//     if (time < fastestLap) {
//       setFastestLap(time)
//       return "fastestLap"
//     } else if (time > slowestLap) {
//       setSlowestLap(time)
//       return "slowestLap"
//     }
//   }

//   return ""
// }
