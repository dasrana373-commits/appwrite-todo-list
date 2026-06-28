import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../featurs/todo/todoSlice"
import { updateTodo } from "../featurs/todo/todoSlice";

function Todos() {
    const todos = useSelector( state =>state.todos)
    const dispatch = useDispatch()

    const handleUpdate = (todo) => {  // Pass the current todo as an argument
      // Get the updated text from the input field
      const updatedText = document.getElementById(`todo-text-input-${todo.id}`).value;
    
      // Dispatch the updateTodo action
      dispatch(updateTodo({ id: todo.id, text: updatedText }));
    
      // Reset newText to avoid unintended updates (if using newText)
      // setNewText(todo.text);  // Uncomment if using newText state
    };

  return (
    <div>
      <h3>Todos good </h3>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          
          <input type="text" id={`todo-text-input-${todo.id}`} />  {/* Input for update */}
          <button onClick={() => handleUpdate(todo)}>Update</button>  {/* Call handleUpdate with todo */}
          <button onClick={() => dispatch(removeTodo(todo.id))}>
            X
          </button>
        </li>
      ))}

    </div>
  )
}

export default Todos