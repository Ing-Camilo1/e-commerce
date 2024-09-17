import { Link, useNavigate } from "react-router-dom";
import { Label, Input, Button } from "../Export/Export";
import "../Style/form-style.css";
import { useState } from "react";
import axios from "axios";

export function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/register', {
        username: username,
        email: email,
        password: password,
      });

      if (response.status === 201) {
        console.log('Registro exitoso:', response.data);
        navigate('/principal'); // Redirigir a la ruta principal
      } else {
        setError(response.data.message || 'Error en el registro');
        showToast(response.data.message || 'Error en el registro');
      }
    } catch (error) {
      setError('Error en el registro');
      showToast('Error en el registro');
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
    <div className="container-principal">
      <div className="container-titulo">
        <h2>Register</h2>
      </div>
      <div className="container-formulario">
        <form onSubmit={handleSubmit}>
          <div className="container-inputs">
            <Label>Username</Label>
            <Input
              placeholder="Ingrese su Nombre Completo"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div className="container-inputs">
            <Label>Email</Label>
            <Input
              placeholder="Ingrese su correo electronico"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="container-inputs">
            <Label>Password</Label>
            <Input
              placeholder="Ingrese su Contraseña"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <Button type="submit">Registrarse</Button>
          <hr />
          <div className="container-ruta">
            <Link to='/'>Iniciar Sesion</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;