import React from 'react';
import {BsCheckAll} from 'react-icons/bs'

export default function ListItem(props){
    const { id, title, descripcion } = props;
    return(
        <div className="container w-full bg-red-600 my-1 p-1 rounded-sm font-semibold text-white flex justify-between items-center gap-20">
            <div className="flex flex-col">
                <small>{id} - {title}</small>
                <span>{descripcion}</span>
            </div>
            <button type="button" className="bg-green-700 font-bold p-1 rounded-md flex space-x-1 items-center">
                <span>Check</span>
                <BsCheckAll/>
            </button>
        </div>
    )
}