import React from 'react'

function Todos(props){
  
    const deleteHandler=()=>{
        props.setTodos(props.todos.filter(el=>el.id!==props.todo.id));
       ;
    }
    const completeHandler=()=>{
        props.setTodos(props.todos.map(item=>{
            if(item.id===props.todo.id){
                return{
                    ...item,completed:!item.completed
                }
                
            }
            return item;
            
        }))
    }
    return(
        <div>
            <li className={`todo-item ${props.todo.completed ? "completed":""}`}>{props.text}</li>
            <button onClick={completeHandler} >Select</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}
export default Todos;