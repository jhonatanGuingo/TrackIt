import styled from "styled-components";
import dump from "../assets/img/dump.svg";
import axios from "axios";
import { useContext } from "react";
import LoginContext from "./Context/ContextLogin";
import { useEffect } from "react";
import Habitos from "./Context/ConextHabitos";
import { useState } from "react";
import HabitsDay from "./HabitsDay";
export default function Habits(props) {
  const { habit } = props;
  const { setGetHabits, getHabits } = useContext(Habitos);
  const { login } = useContext(LoginContext);
  const { id } = habit;
  const { token } = login;
  const {days} = habit;
  const [dia, setDia]= useState(false);

  const weekdays = ['D','S','T','Q','Q','S','S'];
  function deletarHabito() {
    const confirma = confirm("Tem certeza que deseja deletar o hábito?");
    if (confirma) {
      function deleteSucess() {
        setGetHabits((a) => [...a.filter((habit) => habit.id != id)]);
      }
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      promise.then(deleteSucess);
      promise.catch((error) => console.log(error));
    }
  }
  
  
  
  return (
    <Habit data-test="habit-container">
      <h1 data-test="habit-name">{habit.name}</h1>
      <img data-test="habit-delete-btn" src={dump} alt="" onClick={deletarHabito} />
      <div>
        {weekdays.map((day, index) => <HabitsDay index = {index} days = {days} day = {day}/>)}
       
      </div>
    </Habit>
  );
}

const Habit = styled.div`
  display: flex;
  flex-direction: column;
  height: 91px;
  position: relative;
  background-color: white;
  border-radius: 5px;
  margin-top: 15px;
  box-sizing: border-box;
  padding: 10px;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    height: 15px;
    margin-top: 10px;
    margin-right: 10px;
  }
  div {
    display: flex;
  }
 
`;
