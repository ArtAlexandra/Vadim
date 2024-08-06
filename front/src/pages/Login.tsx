import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css"
const Login = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const Come = ()=>{
        const data = {
            email:email,
            password:password
        }
        axios.post('/users/login', data)
        .then((response)=>{console.log(response); setError(response.data.warningMessage); navigate("/main"); localStorage.setItem("user",response.data?.id )})
        .catch((error)=>{setError(error.data.warningMessage); console.log(error)})
    }
    return(
        <div>
            <div className="login_form">
            <h3>Вход в систему</h3>
            {error && <p style={{color:'red'}}>{error}</p>}
            <p>Почта</p>
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <p>Пароль</p>
            <input type="text" placeholder="pasword"  onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={()=>Come()}>Войти</button>
            <p onClick={()=>navigate("/reg")}>Зарегистрироваться</p>
            </div>
            
        </div>
    )
}
export default Login;