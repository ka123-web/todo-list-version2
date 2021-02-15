import React,{useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos,setTodos] = useState([]);

   const addTodo = (todo) =>
    {
        //check for empty spaces
        if(!todo.text || /^\s*$/.test(todo.text))
        {return }

        const newTodos = [todo,...todos]
       setTodos(newTodos);
    }
    const updateTodo = (todoId,newVaalue) =>
    {
        setTodos(prev => prev.map(item => (item.id === todoId? newVaalue:item )))
    }
    const completeTodo =(id) =>
    {
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updateTodos);
    }
    const removeTodo =(id)=>
    {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }
    
    return (
        <div>
            <h1>whats the plan for today</h1>
            <TodoForm onSubmit = {addTodo}/>
            <Todo 
                todos ={todos} 
                completeTodo = {completeTodo} 
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
