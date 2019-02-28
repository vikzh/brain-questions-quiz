const getRandomNumber = (minNum, maxNum) => Math.round(Math.random() * (maxNum - minNum) + minNum);

const getGcd = (x, y) => {
  if (x === 0 || y === 0) return x + y;
  if (x > y) return getGcd(x % y, y);
  return getGcd(x, y % x);
};

export { getRandomNumber, getGcd };
