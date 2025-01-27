// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, 'eror', 9, 13, 17, 15, 14, 9, 5];

//psedu code
const posRange = [];
const negRange = [];

const range = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      posRange.push(arr[i]);
    } else if (arr[i] <= 0) {
      negRange.push(arr[i]);
    } else {
      continue;
    }
  }
};
range(temperatures);
console.log(`Negetive temperatures:${negRange}`);
console.log(`Positive temperatures:${posRange}`);

const findMinMax = function (arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return { min, max };
};

const posMinMax = findMinMax(posRange);
const negMinMax = findMinMax(negRange);
const min = negMinMax.min;
const max = posMinMax.max;
console.log(min, max);
