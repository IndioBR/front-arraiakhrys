import { useState } from 'react';
import { handleLogin } from '../../../api/login';
import { LoginModal } from './styles';

const Login = () => {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    handleLogin(emailLogin, passwordLogin)
      .then((r) => console.log(r.data))
      .catch((error) => console.log('Erro: ' + error.message));
  };

  return (
    <LoginModal>
      <form onSubmit={handleSubmitLogin}>
        <div className="email-login">
          <label htmlFor="emailLog">Email</label>
          <input
            type="text"
            name="emailLg"
            value={emailLogin}
            id="emailLog"
            onChange={(e) => setEmailLogin(e.target.value)}
          />
        </div>
        <div className="password-login">
          <label htmlFor="passwordLog">Senha</label>
          <input
            type="password"
            name="passwordLg"
            value={passwordLogin}
            id="passwordLog"
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </LoginModal>
  );
};

export default Login;
