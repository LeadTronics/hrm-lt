import './Button.css'
import React from 'react'
const Button = (props)=>{
    return(
        <>
            <button className={props.classNames} onClick={props.fun}>{props.btnName}</button>
        </>
    )
}
export default Button;
