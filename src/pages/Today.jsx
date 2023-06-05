import { useContext } from "react";
import LoginContext from "../components/Context/ContextLogin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import HabitsToday from "../components/HabitsToday";
import Habitos from "../components/Context/ConextHabitos";
export default function Today() {
  const { login, setLogin } = useContext(LoginContext);
  const {getHabits, setGetHabits} = useContext(Habitos);
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
          
        <HabitsToday date = {date} />
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


