const calculate = (firstNum, secondNum, operation) => {
  if (operation === '+') {
    return firstNum + secondNum;
  }
  if (operation === '-') {
    return firstNum - secondNum;
  }
  return firstNum * secondNum;
};

export default calculate;
