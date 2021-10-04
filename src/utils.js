export const convertTime = (time) => {
  let milliseconds = Math.floor(time) % 1000;
  let seconds = Math.floor(time / 1000) % 60;
  let minutes = Math.floor(time / 60000) % 60;
  return `${padNumbers(minutes)}:${padNumbers(seconds)}.${padNumbers(Math.floor(milliseconds / 10))}`;
};

export const padNumbers = (number) => {
  return number.toString().padStart(2, 0);
};
