export const isPrimeNumber = (number) => {
  let isPrime = true;

  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};
