import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import UsersList from './UsersList';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value)
       
    }

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value)
    }

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length ===0 || enteredAge.trim().length ===0){
            setError({
                setError:'Invalid Input',
                message:'Please enter a valid name and age'
            });
            return;
        }
        if(+enteredAge<1){
            setError({
                setError:'Invalid Age',
                message:'Please enter a valid age'
            })
            return;
        }
        props.onAddUser(enteredUserName,enteredAge);
        setEnteredAge('');
        setEnteredUserName('');

    }

    const errorHandler = () =>{
        setError(null);
    }
  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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