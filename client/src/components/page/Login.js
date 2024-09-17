import { Link } from 'react-router-dom';
import { Label, Input, Button } from '../Export/Export';
import '../Style/form-style.css';
import { useState } from 'react';

export function Login() {

    const[inputValue, setInputValue] = useState('');


    const validate = (event => {
        setInputValue(event.target.value)

        console.log(inputValue)
    }) 


  return (
    <div className='container-principal'>
        <div className='container-titulo'>
            <h2>Login</h2>
        </div>
        <div className='container-formulario'>
            <form>
                <div className='container-inputs'>
                    <Label>Email</Label>
                    <Input placeholder='Ingrese su correo electronico' type='email' id="email" onChange={validate} value={inputValue} required/>
                </div>
                <div className='container-inputs'>
                    <Label>Password</Label>
                    <Input placeholder='Ingrese su Contraseña' type='password' required/>
                </div>
                <Button>Iniciar Sesion</Button>
                <hr/>
                <div className='container-ruta'>
                   <Link to='/register' onClick={validate}>Registrarse</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login