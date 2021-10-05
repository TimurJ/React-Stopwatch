let fastestLap = 0;
let slowestLap = 0;

export const fastestSlowestLap = (time, lapNumber) => {
  if (lapNumber === 1) {
    fastestLap = time;
  }

  if (lapNumber === 2) {
    if (fastestLap > time) {
      slowestLap = fastestLap;
      fastestLap = time;
    }
  }

  if (lapNumber >= 2) {
    if (time <= fastestLap) {
      fastestLap = time;
      return "fastestLap";
    } else if (time >= slowestLap) {
      slowestLap = time;
      return "slowestLap";
    }
  }
};

export const convertTime = (time) => {
  let milliseconds = Math.floor(time) % 1000;
  let seconds = Math.floor(time / 1000) % 60;
  let minutes = Math.floor(time / 60000) % 60;
  return `${padNumbers(minutes)}:${padNumbers(seconds)}.${padNumbers(Math.floor(milliseconds / 10))}`;
};

const padNumbers = (number) => {
  return number.toString().padStart(2, 0);
};
