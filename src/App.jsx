
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import MyHabit from './pages/MyHabit'
import History from './pages/History'

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/cadastro" element = {<Register/>} />
        <Route path="/habitos" element = {<MyHabit/>} />
        <Route path="/historico" element = {<History/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
