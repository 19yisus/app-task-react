import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext'
import ListItem from '../subcomponents/ListItem'
import { BsTrash2 } from 'react-icons/bs'

const TaskList = () => {
    const {tasks, deleteTasks} = useContext(GlobalContext)

    return (
        <div className="flex flex-col bg-blue-600 p-2 rounded-sm w-3/4 mt-5" >
            <div className="flex flex-row justify-between items-center w-auto mx-1 my-2">
              <h1 className="font-bold text-2xl text-white">Title List</h1>
              <button onClick={() => deleteTasks()} type="button" className="flex items-center p-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md">
                Delete All
                <BsTrash2/>
              </button>
            </div>
            {tasks.map( (task, index) => <ListItem key={task.id} id={(index + 1)} uuid={task.id} title={task.title} descripcion={task.descripcion} /> )}
        </div>
    )
}

export default TaskList;
