import './App.css';
import AddTask from './CustomComponents/AddTaskContainer/AddTask';

function App() {
  return (
    <div className="App"> 
        <div className="App-Left">
          <div className='App-Left-Top'>
          <AddTask />
          </div>
          <div className='App-Left-Bottom'>
            btn
          </div>
          


 
        </div>
        <div className="App-Middle">m</div>

        <div className="App-Right">r</div>
    </div>
  );
}

export default App;
