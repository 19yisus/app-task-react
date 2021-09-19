import React from 'react';
import {RiSave3Fill} from 'react-icons/ri';

class TaskForm extends React.Component{
    constructor(){
        super();
        this.HandlerKeyup = this.HandlerKeyup.bind(this)
        this.HandlerClick = this.HandlerClick.bind(this)

        this.state = {
            task:{
                title:"",
                descripcion: "",
            }
        }
    }

    HandlerKeyup(a){
        let task;

        if(a.target.name === "title"){
            task = {
                title: a.target.value,
                descripcion: this.state.task.descripcion
            };
        }else{
            task = {
                title: this.state.task.title,
                descripcion: a.target.value
            };
        }
        
        this.setState({task});
    }
    
    HandlerClick(event){
        event.preventDefault();
        console.log(this.state.task)
    }
        
    render(){
        return (
            <div className="flex flex-col bg-blue-600 p-2 rounded-sm w-2/4 mt-5 text-white">
                <h2 className="text-center font-bold my-2 text-2xl">Add Task</h2>
                <form className="flex flex-col p-2 space-y-3" autoComplete="off">
                    <div className="flex flex-col ">
                        <label className="font-semibold" htmlFor="title">Title</label>
                        <input type="text" onKeyUp={this.HandlerKeyup} className="rounded-sm p-1 text-black focus:outline-none focus:ring focus:border-red-300" name="title" id="title" placeholder="Write the task's title" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="font-semibold" htmlFor="descripcion">Descripcion</label>
                        <textarea name="descripcion" onKeyUp={this.HandlerKeyup} className="rounded-sm p-1 text-black focus:outline-none focus:ring focus:border-red-300" id="descripcion" cols="30" rows="3" placeholder="Write some"></textarea>
                    </div>
                    <div className="flex flex-row">
                        <button className="flex items-center justify-center text-xl flex-grow space-x-1 rounded-sm p-2 bg-green-600 hover:bg-green-700 transition-color duration-200 font-bold" onClick={this.HandlerClick}>
                            <span>Submit</span>
                            <RiSave3Fill/>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
};

export default TaskForm;