import React, { useEffect, useState } from "react";
import cn from './style.module.css';

const Move=(props)=>{

    const [currentCount, setCount] = useState(1);
    const timer = () => setCount(currentCount + 1);

    useEffect(
        () => {
            if (currentCount > props.step-1) {
                return;
            }
            let tm;
            switch (props.time) {
                case "Медленно":
                    tm=2000
                    break;
            case "Средне":
                    tm=1000
                    break;
            case "Быстро":
                    tm=500
                    break;        
                default:
                    break;
            }
            const id = setInterval(timer, tm);
            return () => clearInterval(id);
        },
        [currentCount]
    );
    
    

    //let arr=["up","left","left","up","down","down","right","up","left","dowm"];


let arrMove=[];
for (let i = 0; i < currentCount; i++) {
    arrMove.push(i);
   
}


let boxMove = arrMove.map(el=>(
    <div className={cn.boxMoveItem} >
        
        
         {props.move[el]==='up'?<img src='./img/up.png' alt='up'/>
            :props.move[el]==='down'?<img src='./img/down.png' alt='down'/>
            :props.move[el]==='left'?<img src='./img/left.png' alt='left'/>
            :props.move[el]==='right'?<img src='./img/right.png' alt='left'/>:null}
            
    </div>
))

    return(
        <>
            <div className={cn.boxMove}>
                {boxMove}
            </div>
        </>
    )
}
export default Move;