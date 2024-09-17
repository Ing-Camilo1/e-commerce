import { Link } from "react-router-dom";
import { Label, Input, Button } from "../Export/Export";
import "../Style/form-style.css";

export function Register() {
  return (
    <div className="container-principal">
      <div className="container-titulo">
        <h2>Register</h2>
      </div>
      <div className="container-formulario">
        <form>
          <div className="container-inputs">
            <Label>Username</Label>
            <Input
              placeholder="Ingrese su Nombre Completo"
              type="text"
              required
            />
          </div>
          <div className="container-inputs">
            <Label>Email</Label>
            <Input
              placeholder="Ingrese su correo electronico"
              type="email"
              required
            />
          </div>
          <div className="container-inputs">
            <Label>Password</Label>
            <Input
              placeholder="Ingrese su Contraseña"
              type="password"
              required
            />
          </div>
          <Button>Registrarse</Button>
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
