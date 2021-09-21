export default function appReducer(state, action) {
  switch(action.type){
    case 'ADD-TASK':
      return { tasks: [...state.tasks, action.payload] }
    break;

    case 'UP-TASK':
      const updatedTask = state.tasks.map( task => {
        if(task.id === action.payload.id){
          task.title = action.payload.title
          task.descripcion = action.payload.descripcion
          task.done = action.payload.done
        }
        return task
      })
      return { tasks: updatedTask}
    break;

    case 'DEL-TASKS':
      return { tasks: [] }
    break;

    case 'DEL-TASK':
      return { tasks: state.tasks.filter( task => task.id !== action.payload)};
    break;

    case 'TOGGLE-DONE-TASK':
      console.log("TOGGLE")
      return { tasks: state.tasks.map( task => task.id === action.payload ? {...task,done: !task.done} : task )}
    break;

    default:
      console.error("Nothing for to do");
      return { tasks: state }
    break;
  }
}
