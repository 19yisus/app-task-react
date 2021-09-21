import React, { useContext, useState, useEffect } from 'react';
import {RiSave3Fill} from 'react-icons/ri';
import {BiEditAlt} from 'react-icons/bi';
import { GlobalContext } from '../context/GlobalContext';
import { useHistory, useParams } from 'react-router-dom';

const TaskForm = () =>{
  const { tasks, addTask, updateTask } = useContext(GlobalContext);
  const history = useHistory();
  const params = useParams();

  const [task, SetTask] = useState({
    id: "",
    title: "",
    descripcion: "",
    done: false,
  });

  const HandlerKeyup = e => SetTask({ ...task, [e.target.name]: e.target.value})
  const HandlerSubmit = event =>{
      event.preventDefault();
      if(document.formulario.op.value === "Save") addTask(task); else updateTask(task);
      history.push('/')
  }

  useEffect( () => {
    const taskFound = tasks.find( taskE => taskE.id === params.id)

    if(taskFound) SetTask(taskFound); else SetTask({
      id: "",
      title: "",
      descripcion: "",
      done: false,
    })
  }, [params.id])

  return(
    <div className="flex flex-col bg-blue-600 p-2 rounded-sm w-2/4 mt-5 text-white">
        <h2 className="text-center font-bold my-2 text-2xl">{ !params.id ? "Creating" : "Editing"} one Task</h2>
        <form className="flex flex-col p-2 space-y-3" autoComplete="off" onSubmit={HandlerSubmit} name="formulario">
            <div className="flex flex-col ">
                <label className="font-semibold" htmlFor="title">Title</label>
                <input type="text" value={task.title} onChange={HandlerKeyup} className="rounded-sm p-1 text-black focus:outline-none focus:ring focus:border-red-300" name="title" id="title" placeholder="Write the task's title" />
            </div>
            <div className="flex flex-col ">
                <label className="font-semibold" htmlFor="descripcion">Descripcion</label>
                <textarea name="descripcion" value={task.descripcion} onChange={HandlerKeyup} className="rounded-sm p-1 text-black focus:outline-none focus:ring focus:border-red-300" id="descripcion" cols="30" rows="3" placeholder="Write some"></textarea>
            </div>
            <div className="flex flex-row">
              <input type="hidden" name="op" value="" />
              { !params.id &&
                <button name="Save" onClick={ () => document.formulario.op.value = "Save"} className="flex items-center justify-center text-xl flex-grow space-x-1 rounded-sm p-2 bg-green-600 hover:bg-green-700 transition-color duration-200 font-bold">
                    <span>Submit</span>
                    <RiSave3Fill/>
                </button>
              }
              { params.id &&
                <button name="Update" onClick={ () => document.formulario.op.value = "Update"} className="flex items-center justify-center text-xl flex-grow space-x-1 rounded-sm p-2 bg-indigo-700 hover:bg-indigo-800 transition-color duration-200 font-bold">
                    <span>Update</span>
                    <BiEditAlt/>
                </button>
              }
            </div>
        </form>
    </div>
  )
};

export default TaskForm;
