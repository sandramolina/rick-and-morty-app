import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { increment, decrement} from './favesSlice';


const Favoritos = () => {
    //state.counter.count - counter is the name of the reducer defines on the store. count is the name of the state that we want to access (defined on the slice). 
    const faves = useSelector((state)=> state.favesReducer.faveList);
    console.log(faves)
    const dispatch = useDispatch();
    return (
        <section>
            <p>
               {faves}
            </p>
            <div>
                <button onClick={()=> dispatch(increment())}>+</button>
                <button onClick={()=> dispatch(decrement())}>-</button>
            </div>
        </section>
    )
}

export default Favoritos