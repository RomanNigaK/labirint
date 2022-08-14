import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import GameContainer from "../Game/GameContainer";
import cn from './style.module.css';
const Layout =(props)=>{
    

    const setSizeAreal=(el)=>{
        props.setSizeAreal(el);
    }
    const setCountStep=(el)=>{
        props.setCountStep(el);
    }
    const setTime=(el)=>{
        props.setCountTime(el);
    }

    let areals=props.products.areals.map(el=>el==props.products.pole?
    <div className={cn.item+' '+cn.itemActive}>{el}</div>:
    <div onClick={()=>{setSizeAreal(el)}} className={cn.item}>{el}</div>);

    let steps=props.products.steps.map(el=>el==props.products.step?
    <div className={cn.item+' '+cn.itemActive}>{el}</div>:
    <div  onClick={()=>{setCountStep(el)}} className={cn.item}>{el}</div>);

    let times=props.products.times.map(el=>el==props.products.time?
        <div className={cn.item+' '+cn.itemActive}>{el}</div>:
        <div onClick={()=>{setTime(el)}} className={cn.item}>{el}</div>);
  
    return(
        <>
            <div className={cn.content}>
                <div className={cn.menu}>
                    <h2>Меню</h2>
                    <div className={cn.divItems}>
                        <div className={cn.nameItem}>
                            Размер поля:
                        </div>  
                        
                        <div className={cn.groupItem}>
                        {areals}
                        </div>  
                    </div>
                    <hr/>
                    <div className={cn.divItems}>
                        <div className={cn.nameItem}>
                            Количество ходов:
                        </div>  
                        <div className={cn.groupItem}>
                        {steps}
                            
                        </div>  
                    </div>
                    <hr/>
                    <div className={cn.divItems}>
                        <div className={cn.nameItem}>
                            Время хода:
                        </div>  
                        <div className={cn.groupItem}>
                           {times}
                            
                        </div>  
                    </div>

                </div> 
                
                <div className={cn.game}>

                    <GameContainer/>
                </div>   
            </div>
        </>
    )
};
export default Layout;