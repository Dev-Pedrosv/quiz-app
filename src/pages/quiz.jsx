import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Api } from "../service/api";

import BtnAnswer from "../components/btn-questions";
import Modal from "../components/modal";
import * as C from "../styles";

function Quiz() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [saveAnswers, setSaveAnswers] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getQuestions = () => {
      const data = Api.getQuestions(state?.themeQuiz);
      setQuestions(data[0]);
    };
    getQuestions();
  }, []);

  useEffect(() => {
    if (!state?.themeQuiz) {
      navigate("/");
    }
  }, []);

  const handleOpenModal = () => setOpen(!open);

  const handleQuestion = (question) => {
    setQuestion(question);
    setIndexQuestion(question.id);
  };

  const handleQuestionIndex = (index) => {
    setIndexQuestion(index);
    setQuestion(questions?.questions[index - 1]);
  };

  const markAnswer = (value) => {
    const newAnswer = {
      question: indexQuestion,
      answer: value.answer,
    };
    const index = saveAnswers.findIndex(
      (answer) => answer.question === indexQuestion
    );
    if (index < 0) return setSaveAnswers([...saveAnswers, newAnswer]);
    if (index >= 0) {
      const answers = saveAnswers;
      answers[index] = newAnswer;
      setSaveAnswers([...answers]);
    }
  };

  const checkAnswer = (value) => {
    const check = saveAnswers.filter(
      (answer) => answer.answer === value.answer
    );
    return !!check.length;
  };

  const sendAnswers = () => {
    const disabledSendAnswers =
      saveAnswers?.length !== questions?.questions?.length;
    if (disabledSendAnswers) {
      return toast.error("Responda todas as questões", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    const data = Api.verifyAnswer(state?.themeQuiz, saveAnswers);
    setCorrectAnswers(data?.correct);
    setIncorrectAnswers(data?.incorrect);
    handleOpenModal(true);
  };

  return (
    <C.Container>
      <C.Flex>
        <C.Typography textAlign="center" size="48px">
          {state?.themeQuiz}
        </C.Typography>

        {!question ? (
          <>
            {questions?.questions?.map((question, index) => (
              <C.Button key={index} onClick={() => handleQuestion(question)}>
                Exercício: {index + 1}
              </C.Button>
            ))}
            <C.Spacer />

            <C.Button width="100px" onClick={() => navigate("/")}>
              <C.Typography size="18px">
                <i className="bx bx-chevron-left"></i>Voltar
              </C.Typography>
            </C.Button>
          </>
        ) : (
          <C.Flex align="start">
            <C.Typography>
              <C.Span size="22px">{question?.id}: </C.Span> {question?.question}
            </C.Typography>
            <C.Spacer />
            {question?.answers?.map((answer) => (
              <BtnAnswer
                key={answer.id}
                index={answer.id}
                answer={answer}
                active={checkAnswer(answer)}
                onClick={() => markAnswer(answer)}
              />
            ))}

            <C.Spacer />

            <C.Flex direction="row" gap="20px" align="end">
              <C.Button
                disabled={indexQuestion === 1 || open}
                width="95px"
                onClick={() => handleQuestionIndex(indexQuestion - 1)}
              >
                <i className="bx bx-left-arrow"></i>
              </C.Button>
              <C.Flex gap="8px">
                <C.Typography textAlign="center" size="14px">
                  {indexQuestion}/{questions?.questions?.length}
                </C.Typography>
                <C.Button
                  width="80px"
                  onClick={() => handleQuestion(null)}
                  disabled={open}
                >
                  <C.Typography size="16px">Voltar</C.Typography>
                </C.Button>
              </C.Flex>

              <C.Button
                disabled={
                  indexQuestion === questions?.questions?.length || open
                }
                width="95px"
                onClick={() => handleQuestionIndex(indexQuestion + 1)}
              >
                <i className="bx bx-right-arrow"></i>
              </C.Button>
            </C.Flex>
            <C.Spacer />

            <C.Button width="100%" onClick={sendAnswers} disabled={open}>
              Verificar respostas
            </C.Button>
          </C.Flex>
        )}

        <Modal
          open={open}
          handleOpenModal={handleOpenModal}
          userName={state.nameUser}
          totalQuestions={questions?.questions?.length}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
        />
      </C.Flex>
    </C.Container>
  );
}

export default Quiz;
