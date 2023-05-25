import { useState } from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {id: 1, title:'Toilet paper', amount : 296.67, date: new Date()},
  {id: 2,title:'Car insurance', amount : 296.67, date: new Date()},
  {id: 3,title:'New Desk wooden', amount : 296.67, date: new Date()},
  {id: 4,title:'PEn Holder', amount : 296.67, date: new Date()}
]
function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) =>{
   setExpenses((prevExpenses) =>{
    return [expense, ...prevExpenses]
   });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/> 
      
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
