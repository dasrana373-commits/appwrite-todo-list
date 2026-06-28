import { useState } from "react"
import  {useDispatch} from "react-redux"  
import { addTodo } from "../featurs/todo/todoSlice";

function AddTodo() {
 const [finalInput, setFinalInput] = useState('')
 const dispatch = useDispatch()

 const addTodoHandelar =(e) => {
    e.preventDefault()
    dispatch(addTodo(finalInput))  
    setFinalInput('')
 }

  return (
    <div>
        
        <form onSubmit={addTodoHandelar}> 
          <input 
            type="text"  
            value={finalInput}
            onChange={(e) => setFinalInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddTodo