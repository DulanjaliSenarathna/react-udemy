import { useState } from "react"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseItems from "./ExpenseItems"
import './Expenses.css'
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

function Expenses(props){

  const [filteredYear , setFilteredYear] = useState('2020');
  const filterChangeHandler =  (selectedYear) =>{
        
  setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
     return (
      <div>
  <Card className="expenses">
  <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
  <ExpensesChart expenses={filteredExpenses}/>
 <ExpensesList items={filteredExpenses}/>
       </Card>
      </div>
    
     )
}

export default Expenses