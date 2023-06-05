import styled from "styled-components";

export default function HabitsDay(props){
   const {day, days, index} = props;
    return(
        <ContainerHabits data-test = "habit-day" className = {day} index = {index} color = {days.includes(index)} >
        {day}
        </ContainerHabits>
    )
}
const ContainerHabits = styled.button`
    display: flex;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    background: ${props => props.color ? `#CFCFCF` : `#FFFFFF`};
    color:${(props) => props.color ? `#FFFFFF` : `#dbdbdb`}; 
    margin-right: 3px;
  
`