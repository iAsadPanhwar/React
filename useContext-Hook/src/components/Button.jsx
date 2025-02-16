import React from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'
import { useContext } from 'react'


const Button = () => {
    const value = useContext(counterContext)
    return (
        <div>
            <button onClick={() => value.setCount((count) => count + 1)}>
                count is {value.count}<span><Component1 /></span>I am Button</button>
        </div>
    )
}

export default Button