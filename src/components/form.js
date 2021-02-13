import React from 'react';
import Todolist from './todolist';

function Form(props){
    const inputTextHandler=(e)=>{
        props.setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        props.setTodos([
            ...props.todos,{text:props.inputText,completed:false,id:Math.random()*1000}
        ])
        props.setInputText("")
        

    }
    const statusHandler=(e)=>{
        props.setStatus(e.target.value)
    }
    
    return(
        <form>
            <input value={props.inputText} onChange={inputTextHandler} type="text"  />
            <button onClick={submitTodoHandler} type="submit">+</button>
            <div>
                <select onChange={statusHandler} name="todos" >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">UnCompleted</option>
                </select>
            </div>
        </form>

    );
}
export default Form;