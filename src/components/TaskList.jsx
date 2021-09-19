import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext'
import ListItem from '../subcomponents/ListItem'

const TaskList = () => {
    const {tasks} = useContext(GlobalContext)
    console.log(tasks)

    return (
        <div className="flex flex-col bg-blue-600 p-2 rounded-sm w-3/4 mt-5" >
            <h1 className="font-bold text-2xl text-white">Title List</h1>
            {tasks.map( task => <ListItem key={task.id} id={task.id} title={task.title} descripcion={task.descripcion} /> )}
        </div>
    )
}

export default TaskList;