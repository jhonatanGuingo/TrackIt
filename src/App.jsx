import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MyHabit from "./pages/MyHabit";
import History from "./pages/History";
import axios from "axios";
import { useState } from "react";
import LoginContext from "./components/Context/ContextLogin";
import Today from "./pages/Today";



function App() {
  axios.defaults.headers.common["Authorization"] = "vlGgSdWYuWevVEZOB1qCiUQE";
  
  const userData = localStorage.getItem("Data");
  let Data = {};
  if (userData !== null) {
    Data = {...JSON.parse(userData)}
  }
  const [login, setLogin] = useState(Data);
  return (
    <>
     <LoginContext.Provider value = {{login, setLogin}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<MyHabit />} />
            <Route path="/historico" element={<History />} />
            <Route path="/hoje" element= {<Today/>} />
          </Routes>
        </BrowserRouter>
        </LoginContext.Provider>
   
    </>
  );
}

export default App;
