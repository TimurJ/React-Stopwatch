const EmptyLaps = ({ lapTimes, activeLap }) => {
  let emptyLaps
  if (lapTimes.length < 7) {
    emptyLaps = 7 - lapTimes.length - (activeLap ? 1 : 0)
  }
  return new Array(emptyLaps).fill(0).map((_, i) => {
    return (
      <tr key={i}>
        <td></td>
        <td></td>
      </tr>
    )
  })
}

export default EmptyLaps
