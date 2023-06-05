import { Form, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.svg";
import axios from "axios";
import { useContext, useState } from "react";
import LoginContext from "../components/Context/ContextLogin";

export default function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login, setLogin } = useContext(LoginContext);
  function signIn(e) {
    e.preventDefault();
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: pass,
      }
    );
    promise.then((resposta) => {
      
      const {id, name, image, token} = resposta.data;
      setLogin((a) => ({
        ...a, id, name, image, token
      }));
      const stayOn = JSON.stringify({id, name, image, token });
      localStorage.setItem('Data', stayOn);
      navigate("/hoje");
    });
    promise.catch((error) => {
      console.log(alert("Erro no login:", error));
    });
  }
  return (
    <>
      <ContainerHome>
        <img src={logo} alt="" />

        <FormContainer>
          <form onSubmit={signIn}>
            <input
              data-test="email-input"
              type="text"
              placeholder="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              data-test="password-input"
              type="text"
              placeholder="senha"
              value={pass}
              required
              onChange={(e) => setPass(e.target.value)}
            />
            <button data-test="login-btn" type="submit">
              Entrar
            </button>
          </form>
        </FormContainer>
        <Link data-test="signup-link" to={`/cadastro`}>
          Não tem uma conta? Cadastre-se{" "}
        </Link>
      </ContainerHome>
    </>
  );
}

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 70px;
    width: 180px;
    height: auto;
  }
`;

const FormContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
    color: white;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    margin-left: 3px;
  }
  input {
    display: flex;
    margin-bottom: 6px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    width: 303px;
    height: 45px;
    color: #DBDBDB;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
`;
