
import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import TodosContextProvider from './store/todos-context';

function App() {

 
  return (
    <TodosContextProvider>
      <NewTodo/>
    <Todos/>
    </TodosContextProvider>
  );
}

export default App;
