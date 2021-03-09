import './App.css';
import Counter from './components/Counter';
import Switch from './components/Switch';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Counter />
      <Switch />
      <Votes />
    </div>
  );
}

export default App;

// Make sure the file name matches in import
