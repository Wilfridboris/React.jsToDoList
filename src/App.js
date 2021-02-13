import React,{useState,useEffect} from 'react'
import './App.css';
import Form from './components/form'
import Todolist from './components/todolist'
function App() {

  // State stuff
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);
    //use effect


    useEffect(()=>{
      getLocalTodos()
    },[]);
    
    useEffect(()=>{
      saveLocalTodos()
      filterHandler()
    },[todos,status]);
 

  //function
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>( todo.completed===true)))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>( todo.completed===false)))
        break;
      default:
        setFilteredTodos(todos)
        break;
      
    }
  }
  const saveLocalTodos=()=>{
  
      localStorage.setItem("todos",JSON.stringify(todos))
    
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
      let todoLocal=localStorage.getItem("todos",JSON.stringify(todos))
      setTodos(JSON.parse(todoLocal));
    }
  }
  return (
    <div className="App">
      <h1>Hello{inputText}</h1>
      <Form todos={todos} setTodos={setTodos}  setInputText={setInputText} setStatus={setStatus} inputText={inputText}  />
      <Todolist todos={todos} filteredTodos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
