import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {BsCheckAll} from 'react-icons/bs';
import {BiEditAlt} from 'react-icons/bi';
import { GlobalContext } from '../context/GlobalContext';

export default function ListItem(props){
    const { id, title, descripcion, uuid } = props;
    const { deleteTask } = useContext(GlobalContext);

    return(
        <div className="container w-full bg-red-600 my-1 p-1 rounded-sm font-semibold text-white flex justify-between items-center gap-20">
            <div className="flex flex-col">
                <small>{id} - {title}</small>
                <span>{descripcion}</span>
            </div>
            <div className="flex">
              <button type="button" onClick={() => deleteTask(uuid)} className="bg-green-700 hover:bg-green-800 font-bold p-1 flex space-x-1 items-center rounded-l-md">
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
