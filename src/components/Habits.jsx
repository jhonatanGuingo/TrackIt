import styled from "styled-components";
import dump from "../assets/img/dump.svg";
import axios from "axios";
import { useContext } from "react";
import LoginContext from "./Context/ContextLogin";
import { useEffect } from "react";
import Habitos from "./Context/ConextHabitos";
import { useState } from "react";

export default function Habits(props) {
  const { habit } = props;
  const { setGetHabits, getHabits } = useContext(Habitos);
  const { login } = useContext(LoginContext);
  const { id } = habit;
  const { token } = login;
  const {days} = habit;
  const [domingo, setDomingo]= useState(false);
  const [segunda, setSegunda]= useState(false);
  const [terca, setTerca]= useState(false);
  const [quarta, setQuarta]= useState(false);
  const [quinta, setQuinta]= useState(false);
  const [sexta, setSexta]= useState(false);
  const [sabado, setSabado]= useState(false);
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
  console.log(days.includes(0))
  function verificaDias(){
    
    if(days.includes(0))
    {
        setDomingo(true);
    }
    else if(days.includes(1))
    {
        setSegunda(true);
    }
    else if(days.includes(2))
    {
        setTerca(true);
    }
    else if(days.includes(3))
    {
        setQuarta(true);
    }
    else if(days.includes(4))
    {
        setQuinta(true);
    }
    else if(days.includes(5))
    {
        setSexta(true);
    }
    else if(days.includes(6))
    {
        setSabado(true);
    }
  }
  useEffect(verificaDias,[]);
console.log(days, domingo, segunda, terca, quarta, quinta, sexta, sabado)
  return (
    <Habit data-test="habit-container">
      <h1 data-test="habit-name">{habit.name}</h1>
      <img data-test="habit-delete-btn" src={dump} alt="" onClick={deletarHabito} />
      <div>
        <button domingo = {domingo} className="domingo">D</button>
        <button className="segunda" segunda = {segunda} >S</button>
        <button className="terca" terca = {terca} >T</button>
        <button  className="quarta" quarta = {quarta} >Q</button>
        <button quinta = {quinta} className="quinta">Q</button>
        <button sexta = {sexta} className="sexta">S</button>
        <button sabado = {sabado} className="sabado">S</button>
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
  button {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    
    margin-right: 3px;
  }
  .domingo{
    background: ${props => !props.domingo  ? `#CFCFCF` : `#FFFFFF`};
    color:${(props) => !props.domingo  ? `#FFFFFF` : `#dbdbdb`}; 
  }
  .segunda{
    background: ${props => !props.segunda  ? `#CFCFCF` : `#FFFFFF`};
    color:${(props) => !props.segunda  ? `#FFFFFF` : `#dbdbdb`}; 
  }
  .terca{
    background: ${props => !props.terca  ? `#CFCFCF` : `#FFFFFF`};
    color:${(props) => !props.terca  ? `#FFFFFF` : `#dbdbdb`}; 
  }
  .quarta{
    background: ${props => !props.quarta  ? `#CFCFCF` : `#FFFFFF`};
    color:${(props) => !props.quarta  ? `#FFFFFF` : `#dbdbdb`}; 
  }
  .quinta{
    background: ${props => !props.quinta  ? `#CFCFCF` : `#FFFFFF`};
    color:${(props) => !props.quinta  ? `#FFFFFF` : `#dbdbdb`}; 
  }
  .sexta{
    background: ${props => !props.sexta  ? `#CFCFCF` : `#FFFFFF`};
    color:${(props) => !props.sexta  ? `#FFFFFF` : `#dbdbdb`}; 
  }
  .sabado{
    background: ${props => !props.sabado  ? `#CFCFCF` : `#FFFFFF`};
    color:${(props) => !props.sabado  ? `#FFFFFF` : `#dbdbdb`}; 
  }

`;
