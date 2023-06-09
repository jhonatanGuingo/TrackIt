import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import LoginContext from "./Context/ContextLogin";

export default function Navbar(){
    const navigate = useNavigate();
    const {login, setLogin} = useContext(LoginContext);
    
    return(
        <>
            <SCNavbar data-test = "header">
                TrackIt
                <img data-test="avatar"src= {login.image} alt="" />
            </SCNavbar>
        </>
    )
}
const SCNavbar = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-between;
    z-index: 10;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    left: 0px;
    right: 0px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: white;
    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`