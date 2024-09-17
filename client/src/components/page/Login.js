import { Link, useNavigate } from 'react-router-dom';
import { Label, Input, Button } from '../Export/Export';
import '../Style/form-style.css';
import { useState } from 'react';
import axios from 'axios';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        console.log('Login exitoso:', response.data);
        navigate('/principal'); 
      } else {
        setError(response.data.message || 'Error en el inicio de sesión');
        showToast(response.data.message || 'Error en el inicio de sesión');
      }
    } catch (error) {
      setError('Error en el inicio de sesión');
      showToast('Error en el inicio de sesión');
      console.error('Error:', error);
    }
  };

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  return (
    <div className='container-principal'>
      <div className='container-titulo'>
        <h2>Login</h2>
      </div>
      <div className='container-formulario'>
        <form onSubmit={handleSubmit}>
          <div className='container-inputs'>
            <Label>Username</Label>
            <Input
              placeholder='Ingrese su username'
              type='username'
              id='username'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div className='container-inputs'>
            <Label>Password</Label>
            <Input
              placeholder='Ingrese su Contraseña'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          {error && <p className='error'>{error}</p>}
          <Button type='submit'>Iniciar Sesion</Button>
          <hr />
          <div className='container-ruta'>
            <Link to='/register'>Registrarse</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;