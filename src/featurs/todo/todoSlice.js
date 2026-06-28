import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{
        id:1, text: 'hello World'
    }]
} 


export const todoSlice = createSlice({
    name:'work',
    initialState,
    reducers: {
        addTodo:(state, action) => {
            const todo = { 
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoIndex = state.todos.findIndex((todo) => todo.id === id);

            // Handle cases where the todo to update is not found
            if (todoIndex !== -1) {
                state.todos[todoIndex].text = text;
            }
        }
    },
}) 


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer