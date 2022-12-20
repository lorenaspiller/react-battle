import React, {useState} from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from '../UI/Button.module.css';


const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [ageError, setAgeError] = useState(false);

    const addUserHandler = (event) => {
        event.preventDefault();
        setUsernameError(false);
        setAgeError(false);
        
        /* VALIDATION */
        if (enteredUsername.trim().length === 0) {
            console.log('the entered values are not valid');
            setUsernameError(true);
            if (enteredAge.trim().length === 0) {
                console.log('the entered values are not valid');
                setAgeError(true);
            }
            return
        }

        if (enteredAge.trim().length === 0) {
            console.log('the entered values are not valid');
            setAgeError(true);
            return
        }
        
        if (+enteredAge < 1) { //adding a + to make sure to convert the string to a number to be compared
            console.log('the value of the age must be more than 1');
            setAgeError(true);
            return
        }
        /* after I press submit i console log the submitted inputs */
        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        /* resetting the username and the age after I submitted the data */
        setEnteredUsername('');
        setEnteredAge('');
    }
    
    const usernameChangeHandler = (event) => {
        /* listening to the input of the username */
        setEnteredUsername(event.target.value);
        // console.log(event.target.value);
    }

    const ageChangeHandler = (event) => {
        /* listening to the input of the username */
        setEnteredAge(event.target.value);
        // console.log(event.target.value);
    }


    return(
        <Card className="d-flex justify-content-center align-items-center">
            <form onSubmit={addUserHandler} className="d-flex flex-column p-5">
                <label htmlFor="username">Username</label>
                <input 
                    id="username" 
                    type="text" 
                    onChange={usernameChangeHandler} 
                    value={enteredUsername} 
                />
                {usernameError && <StyledAlertMessage className='error'>Type a valid username</StyledAlertMessage>}
                <label htmlFor="age">Age (Years)</label>
                <input 
                    id="age" 
                    type="number" 
                    onChange={ageChangeHandler} 
                    value={enteredAge} 
                />
                {ageError && <StyledAlertMessage className='error'>Type a valid Age</StyledAlertMessage>}
                <Button className={classes.button} type="submit">Add User</Button>
            </form>
        </Card>
    );

};

export default AddUser;

const StyledAlertMessage = styled.span`
    padding: 5px;
    color: red;
    background-color: rgb(255,160,122);
`;