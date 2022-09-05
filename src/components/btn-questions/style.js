import styled from "styled-components";

export const BtnStyled = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border-radius: 8px;
  text-align: inherit;

  color: #ffffff;
  border: 3px solid ${(props) => (props.active ? "#00ff75" : "#666666")};
  background-color: ${(props) => (props.active ? "#00ff75" : "transparent")};

  &:hover {
    border: 3px solid #00ff75;
    color: ${(props) => (props.active ? "#ffffff" : "#00ff75")};
  }

  &:active {
    border: 3px solid #00ff75;
    color: #00ff75;
  }
`;
