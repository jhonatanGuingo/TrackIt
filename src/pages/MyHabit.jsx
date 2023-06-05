import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Days from "../components/Days";
import { useContext } from "react";

import LoginContext from "../components/Context/ContextLogin";
import axios from "axios";
import { useEffect } from "react";
import Habits from "../components/Habits";
import Habitos from "../components/Context/ConextHabitos";

export default function MyHabit() {
  const [daySelect, setDaySelect] = useState([]);
  const [name, setName] = useState("");
  const [click, setClick] = useState(false);
  const { login, setLogin } = useContext(LoginContext);
  const [display, setDisplay] = useState("none");
  const [load, setLoad] = useState(false);
  const {getHabits, setGetHabits}= useContext(Habitos);
  const { token } = login;
  const days = [
    { id: 0, day: "Domingo", letter: "D" },
    { id: 1, day: "Segunda", letter: "S" },
    { id: 2, day: "Terça", letter: "T" },
    { id: 3, day: "Quarta", letter: "Q" },
    { id: 4, day: "Quinta", letter: "Q" },
    { id: 5, day: "Sexta", letter: "S" },
    { id: 6, day: "Sábado", letter: "S" },
  ];
  function addHabit() {
    setDisplay("flex");
  }
  const request = { name: name, days: daySelect };
  console.log(request);
  console.log(token);
  function createHabit(e) {
    e.preventDefault();
    setLoad(true);
    if (daySelect.length !== 0) {
      const promise = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        request,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      promise.then((resposta) => {
        console.log(resposta.data, "respondeu");
        handleReset();
        setLoad(false);
        setDisplay("none");
        listarHabito();
      });

      promise.catch((error) => {
        setLoad(false);
        alert(error);
      });
    } else {
      alert("Selecione pelo menos um dia");
      setLoad(false);
    }
  }
  useEffect(listarHabito,[]);
  function handleReset() {
    setDisplay("none");
  }
  function listarHabito(){
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
    { 
        headers: {Authorization: `Bearer ${token}`}
    });

    promise.then(resposta => setGetHabits(resposta.data));
  }
  return (
    <>
      <Navbar />
      <ContainerHabit>
        <HeaderHabit>
          <h1>Meus Hábitos</h1>
          <button data-test="habit-create-btn" onClick={addHabit}>+</button>
        </HeaderHabit>
        <CreateHabit data-test="habit-create-container"  display={display}>
          <form onSubmit={createHabit}>
            <input data-test="habit-name-input"
              disabled={load}
              type="text"
              placeholder="nome do habito"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ButtonsDay>
              {days.map((day) => (
                <Days
                  load={load}
                  key={day.id}
                  click={click}
                  setClick={setClick}
                  daySelect={daySelect}
                  setDaySelect={setDaySelect}
                  id={day.id}
                  day={day.day}
                  letter={day.letter}
                />
              ))}
            </ButtonsDay>
            <ButtonSubmit>
              <button data-test="habit-create-cancel-btn"
                disabled={load}
                type="reset"
                onClick={handleReset}
                value="Reset"
                className="cancel"
              >
                Cancelar
              </button>
              <button data-test="habit-create-save-btn" disabled={load} type="submit" className="save">
                Salvar
              </button>
            </ButtonSubmit>
          </form>
        </CreateHabit>
        {getHabits.length === 0 ? <span>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </span> :
       getHabits.map(habit =>  <Habits key ={habit.id} habit ={habit} />)}
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
  height: 2000px;
  span {
    display: flex;
    margin-top: 15px;
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
  display: ${(props) => (props.display === "none" ? `none` : `flex`)};
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
  .cancel {
    color: #52b6ff;
    border: none;
    background-color: white;
  }
  .save {
    background-color: #52b6ff;
    color: white;
    border: none;
    border-radius: 4.63636px;
  }
`;
const ButtonsDay = styled.div`
  display: flex;
`;
