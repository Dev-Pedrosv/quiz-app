import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../service/api";

import BtnThemes from "../components/btn-theme";
import * as C from "../styles";

function Home() {
  const [userName, setUserName] = useState("");
  const [themes, setThemes] = useState([]);
  const [activeTheme, setActiveTheme] = useState(null);
  const [themeQuiz, setThemeQuiz] = useState("");
  const navigate = useNavigate();

  const nameUser =
    userName.length > 12 ? `${userName.slice(0, 9)}...` : userName;

  useEffect(() => {
    const getThemes = () => {
      const data = Api.getThemes();
      setThemes(data);
    };

    getThemes();
  }, []);

  const handleTheme = (value, index) => {
    setThemeQuiz(value.theme);
    setActiveTheme(index);
  };

  const selectQuiz = () => {
    if (!userName) {
      return toast.error("Digite um nome de usuário", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    navigate("/quiz", { state: { themeQuiz, nameUser } });
  };

  return (
    <C.Container>
      <C.Flex>
        <C.Typography textAlign="center" size="48px">
          Bem vindo ao{" "}
          <C.Span size="48px" color="#00ff75">
            Quiz App
          </C.Span>
        </C.Typography>
        <C.Input
          placeholder="Digite seu nome"
          onChange={(e) => setUserName(e.target.value)}
        />
        <C.Spacer margin="50px" />
        <C.Typography textAlign="center" size="22px">
          Selecione um tema para iniciar{" "}
          <C.Span size="22px" color="#00ff75">
            {nameUser}
          </C.Span>
        </C.Typography>
        <C.Spacer />
        <BtnThemes
          questionThemes={themes}
          active={activeTheme}
          onClick={(value, index) => handleTheme(value, index)}
        />
        <C.Spacer />
        <C.Button disabled={activeTheme === null} onClick={selectQuiz}>
          Iniciar
        </C.Button>
      </C.Flex>
    </C.Container>
  );
}

export default Home;
