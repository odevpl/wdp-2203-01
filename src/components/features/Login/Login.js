import React from 'react';
import Button from '../../common/Button/Button';

import styles from './Login.module.scss';

const Login = () => {
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
                <span>E-mail</span>
                <input className='col-12' type='text' />
              </label>
              <label className='d-flex flex-column justify-content-center'>
                <span>Password</span>
                <input className='col-12' type='text' />
              </label>
              <div className='d-flex justify-content-center mt-4'>
                <Button href='/' variant='small'>
                  Login
                </Button>
              </div>
            </form>
            <div className='col-12 d-flex flex-column justify-content-center'>
              <span className='mt-5 text-center'>
                <a href='#'>Forgot password?</a>
              </span>
              <span className='mt-3 text-center'>
                <a href='/register'>Register</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
