import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MyHabit from "./pages/MyHabit";
import History from "./pages/History";
import axios from "axios";
import { useState } from "react";
import LoginContext from "./components/Context/ContextLogin";
import Today from "./pages/Today";
import Habitos from "./components/Context/ConextHabitos";
import HabitToday from "./components/Context/ContextHabitToday";
import Progresso from "./components/Context/ContextProgresso";

function App() {
  axios.defaults.headers.common["Authorization"] = "vlGgSdWYuWevVEZOB1qCiUQE";

  const userData = localStorage.getItem("Data");
  let Data = {};
  if (userData !== null) {
    Data = { ...JSON.parse(userData) };
  }
  const [getHabits, setGetHabits] = useState([]);
  const [habitsToday, setHabitsToday] = useState([]);
  const [login, setLogin] = useState(Data);
  const [progresso, setProgresso] = useState(0);
  return (
    <>
      <LoginContext.Provider value={{ login, setLogin }}>
        <Habitos.Provider value={{ getHabits, setGetHabits }}>
          <HabitToday.Provider value={{ habitsToday, setHabitsToday }}>
            <Progresso.Provider value={{ progresso, setProgresso }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cadastro" element={<Register />} />
                  <Route path="/habitos" element={<MyHabit />} />
                  <Route path="/historico" element={<History />} />
                  <Route path="/hoje" element={<Today />} />
                </Routes>
              </BrowserRouter>
            </Progresso.Provider>
          </HabitToday.Provider>
        </Habitos.Provider>
      </LoginContext.Provider>
    </>
  );
}

export default App;
