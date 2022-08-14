import React from "react";
import cn from './style.module.css';

const Header=(props)=>{
    return(
        <>
            <div className={cn.header}>
            <div> Игровое поле {props.razmer}</div>
            <div> Текущий уровень {props.level}</div>
            <div> Победы {props.victory}</div>
            <div> Всего игр {props.game}</div>
               
            </div>
        </>
    )
};
export default Header;