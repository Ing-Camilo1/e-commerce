import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from './components/page/Login'
import {Register} from './components/page/Register'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
