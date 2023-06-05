import styled from "styled-components"
import check from "../assets/img/check.svg"
import { useContext } from "react";
import Habitos from "./Context/ConextHabitos";
import { useState } from "react";
import axios from "axios";
import LoginContext from "./Context/ContextLogin";
export default function HabitsToday(props){
    const {setGetHabits, getHabits} = useContext(Habitos);
    const {habitToday} = props;
    const {login} = useContext(LoginContext);
    const {token} = login;
    const {name, done, currentSequence, highestSequence, id} = habitToday;
    const [feito, setFeito]=useState(done);
    console.log(habitToday);
    function habitDone(e){
        e.preventDefault()

        if(done === false){
        setFeito(!feito)
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,[],
        {
            headers: {Authorization: `Bearer ${token}`}
        })

        promise.then( resp => {
            console.log('sucesso')
            window.location.reload(true)
            })
    }else{
        setFeito(!feito)
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,[],
        {
            headers: {Authorization: `Bearer ${token}`}
        })

        promise.then(
            resp => {
                console.log('erro')
                window.location.reload(true)
                })

    }
    }

    return(
        <Habits data-test="today-habit-container" feito = {feito} currentSequence = {currentSequence} highestSequence = {highestSequence}>
            <div>
            <h1 data-test="today-habit-name">{name}</h1>
            <h3 >Sequência atual:<h3  data-test="today-habit-sequence" className="atual"> {currentSequence} dias</h3></h3>
            <h3 >Seu recorde:<h3 data-test="today-habit-record" className="recorde"> {highestSequence} dias</h3></h3>
            </div>
            <img data-test="today-habit-check-btn" onClick={habitDone} src={check} alt="" />
        </Habits>
    )
}
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
    background: ${props => props.feito ? ' #8FC549' :'#EBEBEB' };
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
  h3 {
    display: flex;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
  .atual{
    color: ${props => props.currentSequence >= 1 ? '#8FC549' :'#666666'}
  }
  .recorde{
    color: ${props => props.highestSequence === 0 ? '#666666' : props.highestSequence === props.currentSequence ? '#8FC549' :'#666666'}
  }
`;