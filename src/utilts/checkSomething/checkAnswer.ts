export const checkAnswer = (userAnswer: string, correctAnswer: string) => {
  let result = true;

  if (userAnswer.trim().toLowerCase() !== correctAnswer.trim().toLowerCase())
    result = false;

  return result;
};


// let correctness = 0;
// const userAnswer = userAnswer.trim().toLowerCase();
// const correctAnswer = correctAnswer.trim().toLowerCase();

// for (let index = 0; index < correctAnswer.length; index++) {
//   if()
  
// }