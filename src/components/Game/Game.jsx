import React from "react";
import cn from './style.module.css';
import Header from "./header";
import Footer from "./footer";


const Game=(props)=>{



const clickUserfinishCell=(idCell)=>{

    props.setResultClick(idCell)

}

let row=[];
let column=[];

let hw=props.sizeAreal.split("*");
//console.log(hw)

for (let i = 0; i < hw[0]; i++) {
    row.push(i*hw[0])
}
for (let i = 0; i < hw[1]; i++) {
    column.push(i+1)
}


const CellStart=(props)=>{


       return(
            <div    id={props.el+props.el2}
                    className={cn.item} 
                    
                   >           
                  
            </div>
        ) 
    }

const CellExpectationClick=(props)=>{


        return(
             <div    id={props.el+props.el2}
                     className={props.start===props.el+props.el2? cn.itemStart + ' '+cn.item: cn.item}
                     
                     onClick={()=>clickUserfinishCell(props.el+props.el2)}>           
                   
             </div>
         ) 
     }

const CellResultClick=(props)=>{
    return(
        <div id={props.el+props.el2} className={props.start===props.el+props.el2? cn.itemStart + ' '+cn.item: cn.item}>           
           
            {props.finish===props.el+props.el2?<img className={cn.itemFinishimg} src='./img/finish.png' alt='start' />:null}
            {(props.userFinish===props.el+props.el2)&(props.userFinish===props.finish)?<img className={cn.imgOk} src='./img/ok.png' alt='start'/>:
                (props.userFinish===props.el+props.el2)&(props.userFinish!==props.finish)?<img className={cn.imgStart} src='./img/notok.png' alt='start'/>:null}   
        </div>
         ) 
    }     
    
 




let areal=row.map(el=>(<div className={cn.line}>
    {
        column.map(el2=>(props.finish===0?
                    <CellStart start={props.lastStart} el={el} el2={el2} finish={props.finish}/>:
                    props.finish>0&props.userFinish===0?
                        <CellExpectationClick start={props.lastStart} el={el} el2={el2} finish={props.finish}/>
                        :<CellResultClick start={props.lastStart} el={el} el2={el2} finish={props.finish} userFinish={props.userFinish}/>))
    }
</div>))

return (<>
<Header razmer={props.sizeAreal} level={props.level} victory={props.victory} game={props.game}/>
{areal}
<Footer setStart={props.setStartCell} 
        nLevel={props.nextLevel} 
        max={hw[0]*hw[1]} 
        time={props.time}
        h={hw[0]}
        w={hw[1]}
        startCell={props.start} 
        lastStart={props.lastStart} 
        sizeAreal={props.sizeAreal} 
        step={props.step}
        row={props.row}
        cell={props.cell}
        move={props.move}
        level={props.level}
        
        />
</>)

   
   
    
};
export default Game;
