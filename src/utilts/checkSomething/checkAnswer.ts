export const checkAnswer = (
  userAnswerRaw: string,
  correctAnswerRaw: string
) => {
  const userAnswer = userAnswerRaw.trim().toLowerCase();
  const correctAnswer = correctAnswerRaw.trim().toLowerCase();
  let result = true;
  let correctness = 0;
  const correctProcent = 70;

  for (let index = 0; index < correctAnswer.length; index++) {
    if (correctAnswer[index] === userAnswer[index]) {
      correctness++;
    }
  }

  correctness = (correctness / correctAnswer.length) * 100;
  if (correctness < correctProcent) {
    result = false;
  }

  return result;
};
