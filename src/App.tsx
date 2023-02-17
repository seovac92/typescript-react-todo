import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { TodosReducer } from './components/model';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const {state, dispatch} = TodosReducer()
  

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo){
      dispatch({type:'add',payload:todo})
      setTodo('')
    }
  }
  
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={state} setTodos={dispatch} />
    </div>
  );
}

export default App;
