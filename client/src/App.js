import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from './components/page/Login'
import {Register} from './components/page/Register'
import { Principal } from './components/page/principal';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/principal' element={<Principal/>} /> 
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
