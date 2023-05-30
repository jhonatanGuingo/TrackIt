import { Form, Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Home(){
    const navigate = useNavigate()
    return (
        <>
            <ContainerHome>
                <img src="" alt="" />
                TrackIt
                <FormContainer>
                    <form >
                        <input type="text" placeholder="email"/>
                        <input type="text" placeholder="senha"/>
                        <button onClick ={() => {navigate('/habitos')}} type="submit">Entrar</button>
                    </form>
                </FormContainer>
                <Link to= {`/cadastro`}>Não tem uma conta? Cadastre-se </Link>
            </ContainerHome>
        </>
    )
}

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
    }
`

const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        color: white;
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        margin-left: 3px;

    }
    input {
        display: flex;
        margin-bottom: 6px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
`