import {useContext, useState } from "react";
import { Form, Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios";
import logo from "../assets/img/logo.svg";
import LoginContext from "../components/Context/ContextLogin";
import { ThreeDots } from "react-loader-spinner";

export default function Register(){

    const [email, setEmail] = useState('');;
    const [pass, setPass] = useState('');
    const [image, setImage] = useState('');;
    const [name, setName] = useState('');
    const {login, setLogin} = useContext(LoginContext);
    const [load, setLoad] = useState(false);
    function signUp(e){
        e.preventDefault();
        setLoad(true);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email: email,
            name: name,
            image: image,
            password: pass
        })
        
        promise.then (resposta => {
            console.log(alert('Cadastro bem sucedido:', resposta.data))
        })
        promise.catch (error => {
            console.log(alert(error))
            setLoad(false)
        })
    }
   
    return(
    
        <>
        <ContainerRegister>
            <img src={logo} alt="" />
            TrackIt
            <FormContainer>
                <form onSubmit={(signUp)}>
                    <input disabled={load} data-test="email-input" type="text" placeholder="email" required value = {email} onChange = {e => setEmail(e.target.value)}/>
                    <input disabled={load} data-test="password-input" type="text" placeholder="senha" required value = {pass} onChange = {e => setPass(e.target.value)}/>
                    <input  disabled={load}data-test="user-name-input" type="text" placeholder="nome" required value = {name} onChange = {e => setName(e.target.value)}/>
                    <input disabled={load} data-test="user-image-input" type="text" placeholder="foto" required value = {image} onChange = {e => setImage(e.target.value)}/>
                    <button disabled={load} data-test="signup-btn" type="submit"> {load ? (
                <ThreeDots
                  
                  height="40"
                  width="40"
                  radius="9"
                  color="#FFFFFF"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              ) : (
                "Cadastrar"
              )}</button>
                </form>
            </FormContainer>
            <Link data-test="login-link" to= {`/`}>Já tem uma conta? Faça login! </Link>
        </ContainerRegister>
    </>
    )
}


const ContainerRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: 70px;
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