import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import Progresso from "./Context/ContextProgresso";

export default function Footer() {
  const navigate = useNavigate();
  const {progresso} = useContext(Progresso);
  return (
    <>
      <SCFooter>
        <div data-test="menu" >
          <Link data-test="habit-link" to={"/habitos"}>
            Hábitos
          </Link>
          <button data-test="today-link" onClick={() => navigate("/hoje")}><CircularProgressbar
          value= {progresso}  
          /><p>Hoje</p></button>
          <Link data-test="history-link" to={"/historico"}>
            Histórico
          </Link>
        </div>
      </SCFooter>
    </>
  );
}

const SCFooter = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  left: 0px;
  bottom: 0px;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background: white;
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
  }
  button {
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 98.5px;
    background: #52b6ff;
    margin-bottom: 40px;
    border: none;
    position: relative;
   p { 
    color: white;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    position: absolute;
 }
  }
`;
