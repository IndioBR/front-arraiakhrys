import { useState } from 'react';
import { handleSignUp } from '../../../api/signUp';
import { SingUpModal } from './styles';

export const SingUp = () => {
  const [firstNameSingUp, setFirstNameSingUp] = useState('');
  const [lastNameSingUp, setLastNameSingUp] = useState('');
  const [usernameSingUp, setUsernameSingUp] = useState('');
  const [emailSingUp, setEmailSingUp] = useState('');
  const [passwordSingUp, setPasswordSingUp] = useState('');

  const handleSubmitSingUp = (e) => {
    e.preventDefault();
    handleSignUp(
      usernameSingUp,
      emailSingUp,
      passwordSingUp,
      firstNameSingUp,
      lastNameSingUp,
    ).then((r) => console.log(r));
  };

  return (
    <SingUpModal>
      <form onSubmit={handleSubmitSingUp}>
        <div className="asides">
          <div>
            <label htmlFor="FirstNameSingUp">First Name</label>
            <input
              type="text"
              name="sing-up-first-name"
              id="FirstNameSingUp"
              value={firstNameSingUp}
              onChange={(e) => setFirstNameSingUp(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastNameSingUp">Last Name</label>
            <input
              type="text"
              name="sing-up-last-name"
              id="lastNameSingUp"
              value={lastNameSingUp}
              onChange={(e) => setLastNameSingUp(e.target.value)}
            />
          </div>
        </div>
        <div className="column-fields">
          <div>
            <label htmlFor="Uname-singup">Username</label>
            <input
              type="text"
              name="username-singup"
              id="Uname-singup"
              value={usernameSingUp}
              onChange={(e) => setUsernameSingUp(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Email-singup">Email</label>
            <input
              type="email"
              name="E-mail-singup"
              id="Email-singup"
              value={emailSingUp}
              onChange={(e) => setEmailSingUp(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Passwd-singup">Senha</label>
            <input
              type="password"
              name="password-singup"
              id="Passwd-singup"
              value={passwordSingUp}
              onChange={(e) => setPasswordSingUp(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Increva-se</button>
      </form>
    </SingUpModal>
  );
};
