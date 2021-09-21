import {createContext, useReducer } from 'react';
import appReducer from './appReducer';
import { v4 } from 'uuid';

const initialState = {
  tasks: [
      {
          id: v4(),
          title: "Title one",
          descripcion: "Some descripcion",
          done: false,
      },
      {
          id: v4(),
          title: "Title Two",
          descripcion: "Some descripcion",
          done: false,
      }
  ]
}
// const [state, dispatch] = useReducer(appReducer, initialState)
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = task => dispatch({type: "ADD-TASK", payload: {...task, id: v4()} })
  const updateTask = task => dispatch({type: "UP-TASK", payload: task})
  const deleteTasks = task => dispatch({ type: "DEL-TASKS"})
  const deleteTask = id => dispatch({type: "DEL-TASK", payload:id})
  const updatedTaskDone = id => dispatch({type: "TOGGLE-DONE-TASK", payload: id})

  return (
    <GlobalContext.Provider
      value={{...state, addTask, deleteTasks, deleteTask, updateTask, updatedTaskDone}}
    >
      {children}
    </GlobalContext.Provider>
  );
}
