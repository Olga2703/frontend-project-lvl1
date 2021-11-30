const isPrime = (num) => {
  let i = 2;
  let j = 0;
  while (i * i <= num && j !== 1) {
    if (num % i === 0) {
      j = 1;
    } else {
      i += 1;
    }
  }
  return j === 1 ? 'no' : 'yes';
};

export default isPrime;
