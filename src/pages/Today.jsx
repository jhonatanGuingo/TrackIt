import { useContext } from "react";
import LoginContext from "../components/Context/ContextLogin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import dayjs from "dayjs";
import check from "../assets/img/check.svg"
import "dayjs/locale/pt-br";
export default function Today() {
  const { login, setLogin } = useContext(LoginContext);
  const date = dayjs().locale("pt-br");
  console.log(login);
  return (
    <>
      <Navbar />
      <ContainerHoje>
        <HeaderHoje>
          <h1>
            {date.format("dddd")}, {date.format("DD")}/{date.format("MM")}
          </h1>
          <h2>Nenhum hábito concluído ainda</h2>
          <Habits>
            <div>
            <h1>Ler 1 capitulo de livro</h1>
            <h2>Sequência atual: x dias</h2>
            <h2>Seu recorde: x dias</h2>
            </div>
            <img src={check} alt="" />
          </Habits>
        </HeaderHoje>
      </ContainerHoje>
      <Footer />
    </>
  );
}

const ContainerHoje = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  background-color: #f2f2f2;
  height: 900px;
  span {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
const HeaderHoje = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
  button {
    width: 40px;
    height: 40px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: none;
    color: white;
  }
`;

const Habits = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
  background-color: white;
  border-radius: 5px;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    background: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    width: 69px;
    height: 69px;
  }
  h1 {
    margin-bottom: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    color: #666666;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
  }
`;
