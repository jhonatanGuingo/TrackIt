import { useContext } from "react";
import LoginContext from "../components/Context/ContextLogin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import HabitsToday from "../components/HabitsToday";
import Habitos from "../components/Context/ConextHabitos";
import HabitToday from "../components/Context/ContextHabitToday";
import { useEffect } from "react";
import axios from "axios";
import Progresso from "../components/Context/ContextProgresso";
export default function Today() {
  const { login, setLogin } = useContext(LoginContext);
  const {getHabits, setGetHabits} = useContext(Habitos);
  const {habitsToday, setHabitsToday} = useContext(HabitToday);
  const {setProgresso} = useContext(Progresso)
  const date = dayjs().locale("pt-br");
  const {token} = login;

  useEffect(() => {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
    {
      headers: {Authorization: `Bearer ${token}`}
    })
    promise.then((resposta) => setHabitsToday(resposta.data));
    
  }, [])

  let contador = 0;
  let porcento =0;
  let num =0;

  function qdtCompleta(){
    for (let k = 0; k < habitsToday.length; k++) {
      if(habitsToday[k].done === true){
          contador++;
          porcento = contador/habitsToday.length;
      }
    }
  }

  qdtCompleta();
  num = (porcento*100).toFixed(0);
  setProgresso(num);
  console.log(num);
  console.log(contador, habitsToday.length)

  return (
    <>
      <Navbar />
      <ContainerHoje>
        <HeaderHoje contador = {contador}>
          <h1  data-test="today">
            {date.format("dddd")}, {date.format("DD")}/{date.format("MM")}
          </h1>

          {contador === 0 ? <h2 data-test="today-counter">Nenhum hábito concluído ainda</h2> : <h2 data-test="today-counter">{num}% dos hábitos concluídos</h2>}
          
        
        {habitsToday.map(habitToday => <HabitsToday habitToday = {habitToday} /> )}
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

    color: ${props => props.contador === 0 ? '#bababa' :' #8FC549'};
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


