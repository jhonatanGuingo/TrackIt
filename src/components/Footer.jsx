import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Footer(){
    const navigate = useNavigate();
    return(
        <>
            <SCFooter>
                <div>
                    <Link data-test="habit-link" to={"/habitos"}>Hábitos</Link>
                    <button onClick = {() => navigate('/hoje')}>Hoje</button>
                    <Link data-test="history-link" to={"/historico"}>Histórico</Link>
                </div>
            </SCFooter>
        </>

    )
}

const SCFooter = styled.div`
    display: flex;
    position: absolute;
    left: 0px;
    bottom: 0px;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 70px;
        position: absolute;
        left: 0px;
        bottom: 0px;
        background: white;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }
    button{
        margin-left: 15px;
        margin-right: 15px;
        width: 90px;
        height: 90px;
        border-radius: 98.5px;
        background: #52B6FF;
        margin-bottom: 40px;
        border: none;
    }

`