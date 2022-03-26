import React from "react";
import './styles.css';

const Input = ({type, placeholder}) => {
    return (
        <input type={type} placeholder={placeholder} />
    )
}

export default Input;