import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function MyHabit(){
    return(
        <>
        <Navbar/>
        <ContainerHabit>
            <HeaderHabit>
                <h1>Meus Hábitos</h1>
                <button>+</button>
            </HeaderHabit>
            <span>Você não tem nenhum hábito cadastrado ainda.
                Adicione um hábito para começar a trackear!</span>
        </ContainerHabit>
        <Footer/>
        </>

    )
}

const ContainerHabit = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
    background-color: #F2F2F2;
    height:900px ;
    span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

`
const HeaderHabit = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:70px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    button{
        width: 40px;
        height: 40px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        color: white;
    }
`