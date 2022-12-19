import React from 'react';
import styled from 'styled-components';


const Card = props => {
    return(
        <StyledCard>
            {props.children}
        </StyledCard>
    );
};

export default Card;

const StyledCard = styled.div`
    max-width: 768px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.26);
    
    background-color: #fff;
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
  
  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }
  
  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;