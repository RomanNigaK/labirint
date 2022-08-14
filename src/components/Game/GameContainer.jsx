
import {connect} from "react-redux";
import { setStart, setResultClick ,nextLevel  } from "../../redux/app-reducer";

import Game from "./Game";

let mapStateToProps=(state)=>{

    return {
        sizeAreal: state.app.pole,
        time:state.app.time,
        start:state.app.start,
        lastStart:state.app.lastStart,
        step:state.app.step,
        row:state.app.row,
        cell:state.app.cell,
        move:state.app.move,
        finish:state.app.finish,
        userFinish:state.app.userFinish,
        level:state.app.level,
        victory:state.app.victory,
        game:state.app.game
    }
};

let mapDispathcToProps=(dispatch)=>{
    return {
        setStartCell:(start,row,cell,move,finish)=>{
            dispatch(setStart(start,row,cell,move,finish))
            
        },
        setResultClick:(id)=>{
            dispatch(setResultClick(id))
        },
        nextLevel:()=>{
            dispatch(nextLevel())
        }
       
    }
}

const GameContainer = connect(mapStateToProps,mapDispathcToProps)(Game);
export default GameContainer;