import { questions, correctQuestions } from "./questions";

export const Api = {
  getThemes: () => {
    const data = [
      {
        icon: "bx bx-dollar",
        theme: "Finanças",
      },
      {
        icon: "bx bx-mouse-alt",
        theme: "Tecnologia",
      },
      {
        icon: "bx bx-question-mark",
        theme: "Curiosidades",
      },
    ];
    return data;
  },

  getQuestions: (theme) => {
    const questionsFilter = questions.filter(
      (question) => question.theme === theme
    );

    return questionsFilter;
  },

  verifyAnswer: (theme, answers) => {
    const correctAnswer = {
      correct: [],
      incorrect: [],
    };
    const correctQuestionsFilter = correctQuestions.filter(
      (question) => question.theme === theme
    );

    correctQuestionsFilter[0].questions.map((question) => {
      const questionAnswers = question.correctAnswer.answer;

      const checkCorrectAnswer = answers.filter(
        (answer) => answer.answer === questionAnswers
      );
      const checkIncorrectAnswer = answers.filter(
        (answer) =>
          answer.answer !== questionAnswers && answer.question === question.id
      );
      if (checkCorrectAnswer.length > 0) {
        correctAnswer.correct.push(...checkCorrectAnswer);
      }
      if (checkIncorrectAnswer.length > 0) {
        correctAnswer.incorrect.push(...checkIncorrectAnswer);
      }
    });
    return correctAnswer;
  },
};
