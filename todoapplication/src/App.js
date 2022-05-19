import './App.css';
import AddTask from './CustomComponents/AddTaskContainer/AddTask';
import AddButton from './CustomComponents/AddTaskButton/AddButton';
import { useState } from 'react';
import AddedTask from './CustomComponents/AddedTask/AddedTask';

function App() {
  
  const [display, setDisplay]=useState(true);


  return (
    <div className="App"> 
        <div className="App-Left">
          <div className='App-Left-Top'>
          <AddTask display={display} setDisplay={setDisplay} />
          </div>
          <div className='App-Left-Bottom'>
              <AddButton display={display} setDisplay={setDisplay}/>
          </div>
          
        </div>
        <div className="App-Middle"></div>

        <div className="App-Right">
          < AddedTask  />
        </div>

       </div>
  );
}
export default App;
