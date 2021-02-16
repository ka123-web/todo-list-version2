import React,{useState} from 'react';
import TodoList from './TodoList';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = ({todos,completeTodo,removeTodo,updateTodo}) =>{
    const[editItem,setEditItem] = useState({
        id:null,
        value:''
    })

    const submitUpdate =(value) =>{
        updateTodo (editItem.id,value)
        setEditItem({
            id:null,
            value:""
        })
    }

    if(editItem.id){
        return <TodoForm edit={editItem} onSubmit ={submitUpdate}/>
    }
    return (
    
       <div>
            {todos.map((todo,index) =>(
                    <div className={todo.isComplete? 'todo-row complete': 'todo-row' } 
                        key ={index}>

                    <div
                        key={todo.id} onClick = {()=> completeTodo(todo.id)}>
                        {todo.text}
                    </div>
                    <div className="icons">
                        <RiCloseCircleLine onClick={()=>removeTodo(todo.id)}
                        className="delete-icon"/>

                        <TiEdit onClick={()=>setEditItem({id:todo.id, value:todo.text})}
                        className="edit-icon"/>
                    </div>
                </div>
            ))}
      </div> 
    )
}

export default Todo
