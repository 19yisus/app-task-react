import { Switch, Route } from 'react-router-dom'
import './tailwind.css';
// Components
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// Context
// import { GlobalContext, initialState, AddTask } from './context/GlobalContext'
import { GlobalProvider } from './context/GlobalContext.js'

function App() {
  return (
    <div className="bg-gray-600 h-screen">
      <Header/>
      <div className="p-2 w-full flex justify-center mx-auto">
        <GlobalProvider>
          <Switch>
            <Route exact path="/" component={TaskList} />
            <Route exact path="/add" component={TaskForm}/>
            <Route exact path="/edit/:id" component={TaskForm}/>
          </Switch>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
