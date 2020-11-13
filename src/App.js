
import './App.css';
import Input from './components/InputField/InputField';
import Counter from './components/Counter/counter.js';


// import { useSelector, useDispatch } from 'react-redux';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <div>
          <Counter/>
        </div>
        <br/>
        <div>
          <Input/>
        </div>
      </header>
    </div>
  );
}

export default App;
