import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import "./todo.css";

function Todo() {
    
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    
    return (
        <div className="main-div">
           <h2>Add Your List Here</h2>

           <div className="addItems">
               <input type="text" placeholder="Add items..." value={inputData}
               onChange={(event)=>setInputData(event.target.value)} />
               <i className="fa fa-plus add btn" onClick={()=> dispatch(addTodo(inputData), setInputData('')) }></i>
           </div>

           <div className="showItem">
{
    list.map((elem) => {
        return(
        <div className="eachItem" key={elem.id}>
                     <h3>{elem.data}</h3>
                     <div className="removetodo">
             <button onClick={()=>dispatch(removeTodo())}><span>Remove All</span></button>
           </div>
        
                     <i className="fa fa-trash add btn" onClick={()=> dispatch(deleteTodo(elem.id))} />
               </div>

    )})
    
}
</div>
           </div>

           
    )
}

export default Todo
