import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import UsersList from './UsersList';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value)
       
    }

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value)
    }

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length ===0 || enteredAge.trim().length ===0){
            return;
        }
        if(+enteredAge<1){
            return;
        }
        props.onAddUser(enteredUserName,enteredAge);
        setEnteredAge('');
        setEnteredUserName('');

    }
  return (
    <div>
    <ErrorModal title='An error occured' message='Something went wrong'/>
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input value={enteredUserName} id='username' type='text' onChange={usernameChangeHandler}></input>
        <label htmlFor='age'>Age (Years)</label>
        <input value={enteredAge} id='age' type='number' onChange={ageChangeHandler}></input>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </div>
  )
}

export default AddUser