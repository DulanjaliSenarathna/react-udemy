import './ExpenseItems.css'

function ExpenseItems() {

    const expenseDate = new Date();
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 296.67;

    return (<div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
        </div>
        <div className='expense-item__price'>${expenseAmount}</div>
        </div>)
}
export default ExpenseItems;