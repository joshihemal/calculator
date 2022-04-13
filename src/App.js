import './App.css';
import Calculator from './Components/Calculator';
import { Route, Routes } from 'react-router-dom';
import History from './Components/History';

function App() {
  return (
    <div className='App'>
      <header className='App-container'>
        <div className='App-content'>
          <Routes>
            <Route path='/' element={<Calculator />} />
            <Route exact path='/history' element={<History />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
