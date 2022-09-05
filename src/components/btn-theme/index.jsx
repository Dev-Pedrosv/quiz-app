import { Flex } from "../../styles";
import { BtnStyled } from "./style";

function BtnThemes({ questionThemes, onClick, active }) {
  return (
    <Flex direction="row">
      {questionThemes.map((theme, index) => (
        <BtnStyled
          active={active === index}
          key={index}
          onClick={() => onClick(theme, index)}
        >
          <i class={theme.icon}></i>
          <p>{theme.theme}</p>
        </BtnStyled>
      ))}
    </Flex>
  );
}

export default BtnThemes;
