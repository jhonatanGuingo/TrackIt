import styled from "styled-components"
import check from "../assets/img/check.svg"
import { useContext } from "react";
import Habitos from "./Context/ConextHabitos";
export default function HabitsToday(props){
    const {setGetHabits, getHabits} = useContext(Habitos);
    const {date} = props;
    console.log(date.day);
    return(
        <Habits>
            <div>
            <h1>Ler 1 capitulo de livro</h1>
            <h2>Sequência atual: x dias</h2>
            <h2>Seu recorde: x dias</h2>
            </div>
            <img src={check} alt="" />
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