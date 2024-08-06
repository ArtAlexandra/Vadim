import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface Data{
    id:number;
    question:string;
    id_u:number;
    createdAt:number;
    updatedAt:string;
}
const Main = ()=>{
    const navigate = useNavigate()
    const [data, setData] = useState<Data[]|null>(null)
    const userId = localStorage.getItem("user")
    const [error, setError] = useState('')
    useEffect(()=>{
        axios.get(`/questions/question-user/${userId}`)
        .then((response)=>{setData(response.data); console.log(response); setError('')})
        .catch((error)=>{console.log(error); setError('Произошла ошибка')})
    }, [])
    return(
        <div>
            <button onClick={()=>navigate('/login')}>Выйти</button>
            {error && <p style={{color:'red'}}>{error}</p>}
            {data?.map((item)=>{
                return(
                    <div>
                        <p key={item.id}>{item.question}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Main