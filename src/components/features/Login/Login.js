import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { useHistory } from 'react-router-dom';

import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);

  let history = useHistory();

  const goToHome = () => {
    history.push('/');
  };

  const handleSubmit = () => {
    setWrongEmail(false);
    setWrongPass(false);

    if (email === 'admin' && password === 'pass') {
      goToHome();
    } else if (email !== 'admin' && password === 'pass') {
      setWrongEmail(true);
    } else if (email === 'admin' && password !== 'pass') {
      setWrongPass(true);
    } else if (email !== 'admin' && password !== 'pass') {
      setWrongPass(true);
      setWrongEmail(true);
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.formWrapper}>
          <div className='row justify-content-center'>
            <form
              className={
                styles.form +
                ' col-8 col-sm-6 col-md-4 mt-5 d-flex flex-column justify-content-center'
              }
            >
              <label
                className={
                  'd-flex justify-content-center text-center mb-4 ' + styles.head
                }
              >
                <h3 className='col-12 '>Login</h3>
              </label>
              <label className='d-flex flex-column mb-3 justify-content-center'>
                {wrongEmail && <span className={styles.danger}>Wrong E-mail</span>}
                <span>E-mail</span>
                <input
                  className='col-12'
                  type='text'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <label className='d-flex flex-column justify-content-center'>
                {wrongPass && <span className={styles.danger}>Wrong Password</span>}
                <span>Password</span>
                <input
                  className='col-12'
                  type='text'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </label>
              <div className='d-flex justify-content-center mt-4'>
                <Button
                  className={styles.button}
                  variant='small'
                  noHover={true}
                  onClick={() => handleSubmit()}
                >
                  Login
                </Button>
              </div>
            </form>
            <div className='col-12 d-flex flex-column justify-content-center'>
              <span className='mt-5 text-center'>
                <a href='#'>Forgot password?</a>
              </span>
              <span className='mt-3 text-center'>
                <Link to={'/register'}>Register</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
