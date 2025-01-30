"use strict";

const temperatures = [3, -2, -6, "eror", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log({ min, max });
  return max - min;
};
console.log(calcTempAmplitude(temperatures));
