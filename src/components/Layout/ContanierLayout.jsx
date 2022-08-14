
import {connect} from "react-redux";
import { setAreal, setStep, setTime} from "../../redux/app-reducer";
import Layout from "./Laylout";

let mapStateToProps=(state)=>{

    return {
        products: state.app
    }
};

let mapDispathcToProps=(dispatch)=>{
    return {
        setSizeAreal:(size)=>{
            dispatch(setAreal(size))
            
        },
        setCountStep:(count)=>{
            dispatch(setStep(count))
            
        },
        setCountTime:(time)=>{
            dispatch(setTime(time))
            
        }
    }
}

const ContainerLayout = connect(mapStateToProps,mapDispathcToProps)(Layout);
export default ContainerLayout;