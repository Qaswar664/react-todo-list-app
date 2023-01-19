import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Axios from './component/Todo';

function App() {
  return (
    <div className="App">
       <Axios/>
    </div>
  );
}

export default App;