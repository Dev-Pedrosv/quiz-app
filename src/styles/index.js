import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    display:flex;
    justify-content: center;
    background: #272727;
  }
  
  button{
    cursor:pointer;
    transition: 0.3s ease;
  }
`;

export const Container = styled.div`
  width: 375px;
  padding: 20px;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  gap: ${(props) => props.gap || "12px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin-top: ${(props) => props.margin || "12px"};
`;

export const Typography = styled.p`
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.size || "18px"};
  color: ${(props) => props.color || "#ffffff"};
  text-align: ${(props) => props.textAlign || ""};
`;

export const Span = styled.span`
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.size || "18px"};
  color: ${(props) => props.color || "#ffffff"};
  text-align: ${(props) => props.textAlign || ""};
`;

export const Input = styled.input`
  width: 305px;
  height: 55px;
  border: 3px solid #666666;
  background-color: transparent;
  padding: 12px;
  outline: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  transition: 0.2s;
  border-radius: 10px;

  &:focus {
    border: 3px solid #00ff75;
  }

  &::placeholder {
    color: #ffffff;
  }
`;

export const Button = styled.button`
  width: ${(props) => props.width || "305px"};
  height: 55px;
  border: 3px solid #666666;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;

  color: ${(props) => (props.disabled ? "#666666" : "#ffffff")};
  background: transparent;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.24px;

  &:hover {
    border: ${(props) => (props.disabled ? "" : "3px solid #00ff75")};
    color: ${(props) => (props.disabled ? "" : "#00ff75")};
  }

  &:active {
    opacity: ${(props) => (props.disabled ? "" : "0.6")};
  }
`;
