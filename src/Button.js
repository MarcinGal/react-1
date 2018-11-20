import React from 'react'

const Button = ({ label, onClickHandler }) => (
    <button
        onClick={onClickHandler}
    >
        {label}</button>
)

export default Button