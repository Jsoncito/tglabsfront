import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';
import { FlexContainer } from './style';
import Presenter from './Presenter';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { auth, login } = useAuth();
  const presenter: Presenter = new Presenter();

  const handleSubmit = async () => {
    console.log(email);
    await presenter
      .login(email, pass)
      .then((response) => {
        login(response);
      })
      .catch((e) => console.log(e));
  };
  return (
    <FlexContainer>
      <h1>Iniciar sesión</h1>
      <form>
        <label>Usuario</label>
        <input
          value={email}
          name="email"
          onChange={(value) => setEmail(value.target.value)}
        />
        <label>Contraseña</label>
        <input
          value={pass}
          name="pass"
          onChange={(value) => setPass(value.target.value)}
        />
        <Button onClick={() => handleSubmit()}>Ingresar</Button>
      </form>
    </FlexContainer>
  );
};

export default Login;
