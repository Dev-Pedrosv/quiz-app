import * as C from "../../styles";
import { ModalStyled, CloseModal } from "./style";

function Modal({
  open,
  userName,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  handleOpenModal,
}) {
  return (
    <ModalStyled open={open}>
      <C.Flex direction="column">
        <C.Typography color="#000">Parabéns: {userName}</C.Typography>
        <C.Typography color="#000">
          Respostas Corretas: {correctAnswers?.length}/{totalQuestions}
        </C.Typography>
        <C.Spacer margin="8px" />
        <CloseModal onClick={handleOpenModal}>
          <i className="bx bx-x"></i>
        </CloseModal>

        <C.Flex direction="column" align="start">
          {correctAnswers?.length > 0 && (
            <>
              <C.Typography color="#07bc0c">Respostas Corretas</C.Typography>
              {correctAnswers?.map((correctAnswer, index) => (
                <C.Typography key={index} color="#000" textAlign="start">
                  {correctAnswer.question}: {correctAnswer.answer}
                </C.Typography>
              ))}
            </>
          )}

          {incorrectAnswers?.length > 0 && (
            <>
              <C.Typography color="#ff2d55">Respostas Incorretas</C.Typography>
              {incorrectAnswers?.map((incorrectAnswer, index) => (
                <C.Typography key={index} color="#000" textAlign="start">
                  {incorrectAnswer.question}: {incorrectAnswer.answer}
                </C.Typography>
              ))}
            </>
          )}
        </C.Flex>
      </C.Flex>
    </ModalStyled>
  );
}

export default Modal;
