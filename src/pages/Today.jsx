import { useContext } from "react";
import LoginContext from "../components/Context/ContextLogin";

export default function Today(){
    const {login, setLogin} = useContext(LoginContext);
    console.log(login)
    return(
        <>
      
        </>
    )
}