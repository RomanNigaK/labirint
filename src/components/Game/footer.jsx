import React, { useState } from "react";
import cn from './style.module.css';
import Move from "./move";

const Footer=(props)=>{


    const getRandomInRange=(min,max)=>{
        return Math.floor(Math.random()*(max-min+1))+min
    }

    function isInteger(num) {
        return (num ^ 0) === num;
    }

    const nextLevel=()=>{
        props.nLevel();
        generatedStart();
       
    }

    const generatedStart=()=>{
        let startCellInt = getRandomInRange(1,props.max);
        let area = props.sizeAreal.split("*");
        let row = startCellInt/area[0];
        
        if(!isInteger(row)){row=Math.floor(row)+1}

        

        let cell;
        switch (row) {
            case 1:
                cell = Math.floor(startCellInt);
                break;
            case 2:
                cell = Math.floor(startCellInt-area[0]);
                break;
            case 3:
                cell = Math.floor(startCellInt-area[0]*2);
                break;  
            case 4:
                cell = Math.floor(startCellInt-area[0]*3);
                break;
            case 5:
                cell = Math.floor(startCellInt-area[0]*4);
                break;
            case 6:
                cell = Math.floor(startCellInt-area[0]*5);
                break; 
            case 7:
                cell = Math.floor(startCellInt-area[0]*6);
                break;                    
            default:
                break;
        }

        

        let movesVariants=[];
        let moveLine=[];

        for (let i = 1; i <= props.step; i++) {

            if(row-1>0){movesVariants.push("up")};
            if(row+1<=area[0]){movesVariants.push("down")};
            if(cell-1>0){movesVariants.push("left")};
            if(cell+1<=area[1]){movesVariants.push("right")};

           
            let nextMove = movesVariants[getRandomInRange(0,movesVariants.length-1)];
            moveLine.push(nextMove);
            movesVariants=[];
            console.log("row="+row+' ,Cell='+cell+' ,nextMove='+nextMove)

             switch (nextMove) {
                 case "up":
                     row=row-1;
                     break;
                 case "down":
                     row=row+1;
                     break;
                 case "left":
                     cell=cell-1;
                     break;                
                 case "right":
                     cell=cell+1;
                     break;
                 default:
                     break;
             }

         
            
        }
        let finishCell= ((row-1)*area[0])+cell;

        console.log(moveLine)
        


        props.setStart(startCellInt,row,cell,moveLine,finishCell);
    }
    

    return(
       <>
       {!props.startCell?<div className={cn.btnDiv}>
               {props.move!==null?<div className={cn.btn} onClick={nextLevel}>
               Продолжить
            </div>:
            <div>
            <div className={cn.helps}>Все готово можете начать игру!</div>
            <div className={cn.btn} onClick={generatedStart}>
               Начать
            </div></div>
            } 
            
        </div>:<div>
            <Move step={props.step} move={props.move} time={props.time}/>
        </div>}

       </>
        
    )
};
export default Footer;