import ExpenseItems from "./components/ExpenseItems";

function App() {

  const expenses = [
    {id: 1, title:'Toilet paper', amount : 296.67, date: new Date()},
    {id: 2,title:'Car insurance', amount : 296.67, date: new Date()},
    {id: 3,title:'New Desk wooden', amount : 296.67, date: new Date()},
    {id: 4,title:'PEn Holder', amount : 296.67, date: new Date()}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      
      <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItems>
      <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItems>
      <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItems>
      <ExpenseItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItems>
     
    </div>
  );
}

export default App;
