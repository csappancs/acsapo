import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='main-content'>
        <h4>content</h4>
      </div>
    </div>
  );
}

export default App;
