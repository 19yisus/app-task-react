import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {BsCheckAll,BsTrash2} from 'react-icons/bs';
import {BiEditAlt} from 'react-icons/bi';
import { GlobalContext } from '../context/GlobalContext';

export default function ListItem(props){
    const { id, title, descripcion, uuid, done } = props;
    const { deleteTask, updatedTaskDone } = useContext(GlobalContext);

    return(
        <div className="container w-full bg-indigo-700 my-1 p-2 rounded-md font-semibold text-white flex items-center justify-between items-center gap-20">
            <div className="flex flex-col">
                <small>{id} - {title}</small>
                <span>{descripcion}</span>
            </div>
            <span className="text-gray-300 self-end">{ done ? "Terminado" : "Pendiente"}</span>
            <div className="flex">
              <button type="button" onClick={() => deleteTask(uuid)} className="bg-red-700 hover:bg-red-800 font-bold p-1 flex space-x-1 items-center rounded-l-md">
                <span>Delete Tash</span>
                <BsTrash2/>
              </button>
              <button type="button" onClick={() => updatedTaskDone(uuid)} className="bg-green-700 hover:bg-green-800 font-bold p-1 flex space-x-1 items-center">
                <span>Check</span>
                <BsCheckAll/>
              </button>
              <Link to={`/edit/${uuid}`} className="bg-blue-700 hover:bg-blue-800 font-bold p-1 flex space-x-1 items-center rounded-r-md">
                <span>Edit</span>
                <BiEditAlt/>
              </Link>
            </div>
        </div>
    )
}
