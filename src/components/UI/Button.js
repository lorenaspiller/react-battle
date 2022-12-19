import React from 'react';
// import styled from 'styled-components';

import classes from './Button.module.css';



const Button = props => {
    return(
        // <StyledButton type="submit">Add User</StyledButton>
        <button 
            className={`${classes.button} ${props.className}`} 
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
};

export default Button;

/* const StyledButton = styled.button`
    background-color: #ccc;
    margin: 20px 0;
    border: unset;
    color: #fff;
    padding: 10px 20px;
`; */