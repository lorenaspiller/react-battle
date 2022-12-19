import React, {useState} from 'react';
// import styled from 'styled-components';
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from '../UI/Button.module.css';


const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        /* VALIDATION */
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            console.log('the entered values are not valid');
            return
        }
        
        if (+enteredAge < 1) { //adding a + to make sure to convert the string to a number to be compared
            console.log('the value of the age must be more than 1');
            return
        }
        /* after I press submit i console log the submitted inputs */
        console.log(enteredUsername, enteredAge);
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
                <label htmlFor="age">Age (Years)</label>
                <input 
                    id="age" 
                    type="number" 
                    onChange={ageChangeHandler} 
                    value={enteredAge} 
                />
                <Button className={classes.button} type="submit">Add User</Button>
            </form>
        </Card>
    );

};

export default AddUser;