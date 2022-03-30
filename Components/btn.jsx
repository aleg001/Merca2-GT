import React from 'react';
import './btn.css';

const STYLES = [
    'btn--light--solid', 
    'btn--dark--solid',
    'btn--white--solid',  
    'btn--light--outline', 
    'btn--dark--outline',
    'btn--white--outline',     
];

const SIZES = [
    'btn--big',
    'btn--medium',
    'btn--small'
];

export const Button = ({ 
    child, 
    type, 
    onClick, 
    btnStyle, 
    btnSize
}) => {

    const checkButtonStyle = STYLES.includes(btnStyle) 
    ? btnStyle 
    : STYLES[0]

    const checkButtonSize = SIZES.includes(btnSize) 
    ? btnSize 
    : SIZES[0]


    return (

        <button className = {'btn ${checkButtonStyle} ${checkButtonSize}'} onClick={onClick} type={type}>
            {child}
        </button>
    )
}