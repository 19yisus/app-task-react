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
      console.log("DELETE ONE TASK")
      return { tasks: state.tasks.filter( task => task.id !== action.payload)};
    break;

    default:
      console.error("Nothing for to do");
    break;
  }
}
