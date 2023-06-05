import { useState } from "react";
import styled from "styled-components"

export default function Days(props){
   const {day, letter, id, key} = props;
   const {daySelect, setDaySelect, click, setClick} = props;
   const [isClick, setIsClick] = useState(false);
    return(
        <Day onClick={() => {
            const num = id;
                setIsClick(!isClick);
            if (daySelect.includes(num) === false){
                let novoDay = [...daySelect, id];
                setDaySelect(novoDay);
                console.log(daySelect);
            }else if(daySelect.includes(id)){
                let novoDay = daySelect.filter (item => item !== id);
                setDaySelect(novoDay);
                console.log(daySelect);
            }
        }
         }  isclick = {isClick} >
            {letter}
        </Day>
    )
}

const Day = styled.div`
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: ${(props) =>  props.isclick ? `#CFCFCF` : `#FFFFFF`};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color:${(props) => props.isclick  ? `#FFFFFF` : `#dbdbdb`}; 
    margin-right: 3px;
  `