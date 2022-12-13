import {useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';
import {createContext} from 'react';

const initialState = [];
const notFilteredTodos = {};

export const ACTION_TYPES = {
    ADD_TO_DO: 'ADD_TO_DO',
    CHANGE_TO_DO_TOGGLE: 'CHANGE_TO_DO_TOGGLE',
    SHOW_FILTERED_LIST: 'SHOW_FILTERED_LIST',
    DELETE_TO_DO: "DELETE_TO_DO",
}

function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_DO:
            const {newTitle} = action.payload;
            return [...state, {
                id: uuidv4(),
                title: newTitle,
                completed: false
            }]
        case ACTION_TYPES.CHANGE_TO_DO_TOGGLE:
            return state.map( todo => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        case ACTION_TYPES.SHOW_FILTERED_LIST:
            !action.payload.completed && state.forEach(todo => notFilteredTodos[todo.id] = todo);

            console.log("state", state)
            console.log("state", Object.values(notFilteredTodos))
            // console.log(Object.values(notFilteredTodos), "not filtered todos");

            return !action.payload.completed ? state.filter( todo => !todo.completed) : Object.values(notFilteredTodos);
        case ACTION_TYPES.DELETE_TO_DO:
            return state.filter( todo => todo.id !== action.payload.id );
    }
}

const ToDoContext = createContext(initialState);

export default function ToDoContextProvider({children}) {
    const [todos, dispatch] = useReducer(reducer, initialState);
    function addNewToDo(newTitle) {
        dispatch({
            type: ACTION_TYPES.ADD_TO_DO,
            payload: {newTitle}
        })
    }
    function changeToDoToggle(id) {
        dispatch({
            type: ACTION_TYPES.CHANGE_TO_DO_TOGGLE,
            payload: {id}
        })
        console.log(todos);
    }
    function showFilteredList(completed) {
        dispatch({
            type: ACTION_TYPES.SHOW_FILTERED_LIST,
            payload: {completed}
        })
        console.log(todos);
    }
    function deleteToDo(id) {
        dispatch({
            type: ACTION_TYPES.DELETE_TO_DO,
            payload: {id}
        })
    }

    return (
      <ToDoContext.Provider value={{todos, addNewToDo, changeToDoToggle, showFilteredList, deleteToDo}}>
          {children}
      </ToDoContext.Provider>
    )
}

export {ToDoContext};