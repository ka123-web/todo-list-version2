import React,{useState,useEffect,useRef} from 'react'

const TodoForm =(props) =>{
   const [input, setInput]=useState(props.edit?props.edit.value:'');

   const inputRef = useRef(null);

   useEffect(()=>
   {
       inputRef.current.focus();
   })
   const submitHandler =(e) =>
   {
       e.preventDefault();
       props.onSubmit(
        {
            id: Math.floor(Math.random()*10000),
            text :input,
            isComplete:false
        });
        setInput('');
   }
   const inputChangeHandler = (e) =>
   {
    setInput(e.target.value);
   }
   
  
    return (
           <form onSubmit={submitHandler} className="todo-form">
               {props.edit?(
            <>
               <input
               className="todo-input edit" 
               type="text"
               value={input}
               placeholder="Update your item"
               onChange={inputChangeHandler}
               ref ={inputRef}
               >
               </input>
               <button className="todo-button edit" > Update</button> </>
            ):(
                <> 
              <input
               className="todo-input" 
               type="text"
               value={input}
               placeholder="add a to do"
               onChange={inputChangeHandler}
               ref ={inputRef}
               >
               </input>
               <button className="todo-button" > Add todo</button> </>
               )
              
               }
               
            </form> 
        
    );
}

export default TodoForm
