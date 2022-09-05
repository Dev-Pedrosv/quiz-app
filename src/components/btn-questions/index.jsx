import { Flex } from "../../styles";
import { BtnStyled } from "./style";

function BtnAnswer({ answer, active, onClick, index }) {
  return (
    <Flex>
      <BtnStyled active={active} onClick={() => onClick()}>
        {`${index}: ${answer?.answer}`}
      </BtnStyled>
    </Flex>
  );
}

export default BtnAnswer;
