import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'

function ExpenseItems(props) {

    const clickHandler = () =>{
        console.log('Click!');
    }
    return (<Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
        </div>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
        </Card>)
}
export default ExpenseItems;