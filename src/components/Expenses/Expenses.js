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
     return (
      <div>
  <Card className="expenses">
  <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
  {props.items.map(expense => <ExpenseItems title={expense.title} amount={expense.amount} date={expense.date}/>)}
       </Card>
      </div>
    
     )
}

export default Expenses