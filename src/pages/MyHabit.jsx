import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Days from "../components/Days";
import { useContext } from "react";
import LoginContext from "../components/Context/ContextLogin";
import axios from "axios";
import { useEffect } from "react";

export default function MyHabit() {
    const [daySelect, setDaySelect] = useState([]);
    const [name, setName] = useState('');
    const [click, setClick] = useState(false);
    const {login, setLogin} = useContext(LoginContext);
    const [display, setDisplay] = useState('none');
    const {token} = login;
    const days = [
        { id: 0, day: "Domingo", letter: "D"  },
        { id: 1, day: "Segunda", letter: "S" },
        { id: 2, day: "Terça", letter: "T"},
        { id: 3, day: "Quarta", letter: "Q"},
        { id: 4, day: "Quinta", letter: "Q"},
        { id: 5, day: "Sexta", letter: "S"},
        { id: 6, day: "Sábado", letter: "S" }
    ]
    function addHabit(){
        setDisplay('flex');
    }
    function createHabit(){
        
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            name: name,
            days: daySelect
        },{
            headers: {authorization: `Bearer ${token}`}
        })

        promise.then((resposta) => {
            console.log(resposta.data,'respondeu')
           
        })

        promise.catch((error) => console.log(error) ) 
    }
    useEffect(createHabit, []);

    function handleReset(){
        setName('');
        setDaySelect([]);
    }
  return (
    <>
      <Navbar />
      <ContainerHabit>
        <HeaderHabit>
          <h1>Meus Hábitos</h1>
          <button onClick ={addHabit} >+</button>
        </HeaderHabit>
        <CreateHabit display = {display}>
            <form onSubmit={createHabit}>
          <input type="text" placeholder="nome do habito" value = {name} onChange = {e => setName (e.target.value)} />
          <ButtonsDay>
            {days.map(day => <Days key = {day.id}  click = {click} setClick = {setClick} daySelect = {daySelect} setDaySelect = {setDaySelect} id = {day.id} day = {day.day} letter ={day.letter} />)}
          </ButtonsDay>
          <ButtonSubmit>
            <button onClick={handleReset} value="Reset" className="cancel">Cancelar</button>
            <button type="submit" className="save">Salvar</button>
          </ButtonSubmit>
          </form>
        </CreateHabit>
        <span>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </span>
      </ContainerHabit>
      <Footer />
    </>
  );
}

const ContainerHabit = styled.div`
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
const HeaderHabit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
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

const CreateHabit = styled.div`
  display: ${(props) => props.display === 'none' ? `none` : `flex`};
  flex-direction: column;
  height: 180px;
  position: relative;
  background: #ffffff;
  margin-top: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
  input {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    width: 80%;
    margin-bottom: 10px;
  }
`;
const ButtonSubmit = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 10px;
  margin-right: 10px;
  button {
    width: 84px;
    height: 35px;
    margin-left: 5px;
  }
  .cancel{
    color: #52B6FF;
    border: none;
    background-color: white;
  }
  .save{
    background-color: #52B6FF;
    color: white;
    border: none;
    border-radius: 4.63636px;
  }
`;
const ButtonsDay = styled.div`
  display: flex;

`;
