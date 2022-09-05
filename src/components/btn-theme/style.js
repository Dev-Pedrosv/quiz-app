import styled from "styled-components";

export const BtnStyled = styled.button`
  width: 125px;
  height: 80px;
  font-size: 16px;
  border-radius: 8px;
  color: #ffffff;

  border: 3px solid ${(props) => (props.active ? "#00ff75" : "#666666")};
  background-color: ${(props) => (props.active ? "#00ff75" : "transparent")};

  &:hover {
    color: ${(props) => (props.active ? "#ffffff" : "#00ff75")};
  }

  &:active {
    background-color: #00ff75;
    color: #ffffff;
  }
`;
