import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Reg = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()
    const Come = ()=>{
        const data = {
            email:email,
            password:password,
            username:name,
            phone:phone,
            balance:0
        }
        axios.post('/users/signin', data)
        .then((response)=>{console.log(response); setError(response.data.warningMessage);navigate('/login')})
        .catch((error)=>{setError(error.data.warningMessage); console.log(error)})
    }
    return(
        <div>
            <div className="login_form">
            <h3>Регистрация</h3>
            {error && <p style={{color:'red'}}>{error}</p>}
            <p>Имя</p>
            <input type="text" placeholder="Имя" onChange={(e)=>setName(e.target.value)}/>
            <p>Телефон</p>
            <input type="phone" placeholder="Телефон" onChange={(e)=>setPhone(e.target.value)}/>
            <p>Почта</p>
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <p>Пароль</p>
            <input type="text" placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={()=>Come()}>Зарегистрироваться</button>
            <p onClick={()=>navigate('/login')}>Я есть в системе. Войти</p>
            </div>
        </div>
    )
}
export default Reg;