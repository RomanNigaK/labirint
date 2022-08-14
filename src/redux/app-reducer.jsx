import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const SET_AREAL = "SET_AREAL";
const SET_STEP="SET_STEP";
const SET_TIME="SET_TIME";
const SET_START_CELL="SET_START_CELL";
const SET_RESULT="SET_RESULT";
const NEXT_LEVEL="NEXT_LEVEL";


let initialStore = {
    level:1,
    game:0,
    victory:0,
    result:null,
    move:null,
    row:null,
    cell:null,
    start:false,
    lastStart:false,
    finish:0,
    userFinish:0,
    pole:"4*4",
    step:10,
    time:"Средне",
    areals:["3*3","4*4","5*5","6*6","7*7"],
    steps:[10,15,20,25],
    times:["Медленно","Средне","Быстро"]
};

const appReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_AREAL:{
            return{
                ...state,
                pole:action.size,
                level:1,
                result:null,
                move:null,
                row:null,
                cell:null,
                start:false,
                finish:0,
                userFinish:0,
                game:0,
                victory:0

            }
        }
        case SET_STEP:{
            return{
                ...state,
                step:action.count,
                level:1,
                result:null,
                move:null,
                row:null,
                cell:null,
                start:false,
                finish:0,
                userFinish:0,
                game:0,
                victory:0

            }
        }
        case SET_TIME:{
            
            return{
                ...state,
                time:action.time,
                level:1,
                result:null,
                move:null,
                row:null,
                cell:null,
                start:false,
                finish:0,
                userFinish:0,
                game:0,
                victory:0

            }
        }
        case SET_START_CELL:{
           console.log(action)
            return{
                ...state,
                start:action.start,
                lastStart:action.start,
                row:action.row,
                cell:action.cell,
                move:action.moveAll,
                finish:action.finish,


            }
        }
        case SET_RESULT:{
            let v;
            if (action.clickCell===state.finish) {
                v=state.victory+1;
            }else{
                v=state.victory
            }
             return{
                 ...state,
                 userFinish:action.clickCell,       
                 start:false,
                 game:state.game+1,
                 victory:v
                
                
 
             }
         }
         case NEXT_LEVEL:{
            
            return{
                ...state,
                level:state.level+1, 
                result:null,
                move:null,
                row:null,
                cell:null,
                start:false,
                finish:0,
                userFinish:0
               
               

            }
        }
        default:
            return state;
    }
};

export const setAreal = (sizeAreal) => {
    return {
        type: SET_AREAL,
        size:sizeAreal
    }
};
export const setStep = (countStep) => {
    return {
        type: SET_STEP,
        count:countStep
    }
};
export const setTime = (time) => {
   
    return {
        type: SET_TIME,
        time:time
    }
};
export const setStart = (start,row,cell,moveAll,finish) => {
   
    return {
        type: SET_START_CELL,
        start:start,
        row:row,
        cell:cell,
        moveAll:moveAll,
        finish:finish
    }
};
export const setResultClick=(id)=>{
    return{
        type:SET_RESULT,
        clickCell:id
    }
}

export const nextLevel=()=>{
    return{
        type:NEXT_LEVEL

    }
}


export default appReducer;