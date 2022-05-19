import './App.css';
import AddTask from './CustomComponents/AddTaskContainer/AddTask';
import AddButton from './CustomComponents/AddTaskButton/AddButton';
import { useState } from 'react';
import TaskLister from './CustomComponents/TaskLister/TaskLister';

function App() {

  const[display, setDisplay]= useState('true');

  return (
    <div className="App"> 
        <div className="App-Left">
          <div className='App-Left-Top' display={display}>
          <AddTask />
          </div>
          <div className='App-Left-Bottom' display={display} setDisplay={setDisplay}>
              <AddButton />
          </div>
          
        </div>
        <div className="App-Middle">m</div>

        <div className="App-Right">
          <TaskLister />
          <TaskLister />
          <TaskLister />
          <TaskLister />
          <TaskLister />
          <TaskLister />
          <TaskLister />
          <TaskLister />
          <TaskLister />
        </div>

       </div>
  );
}
export default App;
