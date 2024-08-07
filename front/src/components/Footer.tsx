import React from "react";
import "./Footer.scss";

const Footer = ()=>{
    return(
        <div className="footer">
             
            <p>Контакты</p>
           <p>Самый любимый пупсик на свете - Вадюша (ПВА)</p>
            <div className="footer__vk">
            <a href="https://vk.com/pruvad"><img src="/vk_logo.png" alt="vk"/></a>
            </div>
           
        </div>
    )
}
export default Footer;