import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorURL = ()=>{

    const navigate = useNavigate()
    return(
        <div>
            <p>Ой, такая страница не найдена!</p>
            <button onClick={()=>navigate("/main")}>Вернуться на главную</button>
            <p>P.S. Люблю тебя, Вадюша!</p>

        </div>
    )
}
export default ErrorURL