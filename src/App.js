import { Switch, Route } from 'react-router-dom'
import './tailwind.css';
// Components
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// Context


function App() {
  return (
    <div className="bg-gray-600 h-screen">
      <Header/>
      <div className="p-2 flex justify-center">
        <Switch>
          <Route exact path="/" component={TaskList} />
          <Route exact path="/add" component={TaskForm}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
