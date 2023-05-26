import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'
import React, {useState} from 'react';

function ExpenseItems(props) {

    const [title, setTitle] = useState(props.title);
    

    const clickHandler = () =>{
        setTitle('Updated!');
    }
    return (
        <li>
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
        </Card></li>)
}
export default ExpenseItems;