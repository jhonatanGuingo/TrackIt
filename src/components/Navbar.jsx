import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Navbar(){
    const navigate = useNavigate();
    return(
        <>
            <SCNavbar>
                TrackIt
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4VMYq7ofQ6RHfZoC1oQ6MykPw80yKR_53-pvogg&s" alt="" />
            </SCNavbar>
        </>
    )
}
const SCNavbar = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-between;
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