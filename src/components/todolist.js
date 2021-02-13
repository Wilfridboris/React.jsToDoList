import React from 'react';
import Todos from './todos';
const Todolist=(props)=>{
    
    return(
      
        <div>
            <ul>
                {props.filteredTodos.map(todo=>{
                    return(
                    <Todos todo={todo}  key={todo.id} todos={props.todos} setTodos={props.setTodos}   text={todo.text}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default Todolist;