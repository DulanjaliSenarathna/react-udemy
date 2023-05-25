import { useState } from "react"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseItems from "./ExpenseItems"
import './Expenses.css'
function Expenses(props){

  const [filteredYear , setFilteredYear] = useState('2020');
  const filterChangeHandler =  (selectedYear) =>{
        
  setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
     return (
      <div>
  <Card className="expenses">
  <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
  {filteredExpenses.length === 0 ? <p>No expenses found</p> : filteredExpenses.map(expense => <ExpenseItems key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
       </Card>
      </div>
    
     )
}

export default Expenses