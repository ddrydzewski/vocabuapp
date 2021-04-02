export const getRandomIntNotTheSame = (max: number, lastNumber: number) => {
  let rndNumber = 0;
  if (max > 1) {
    do {
      rndNumber = Math.floor(Math.random() * Math.floor(max));
    } while (rndNumber === lastNumber);
  } else {
    rndNumber = 1;
  }
  return rndNumber;
};
