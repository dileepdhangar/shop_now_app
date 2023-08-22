import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/Slices/CounterSlice'

const Counter = () => {
    // state koi access krna hai to useSelector 
    const count = useSelector((state) => state.counter.value)
    //function  ka access krna hai to useSelector 
    const dispatch = useDispatch() ;


    return (
        <div>

            <button
            onClick={  () => dispatch (increment () )}
            >
                Increment
            </button>
            <br></br>
            <br></br>

            <div>{count}</div>

            <br></br>
        
            <button
            onClick={ () => dispatch (decrement ())}>
                Decrement
            </button>
        </div> 
    )
}

export default Counter