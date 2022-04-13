import React from 'react';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.bodyForm}>
          <div className='row justify-content-center'>
            <form className={'col-6 mt-5 d-flex flex-column ' + styles.form}>
              <label
                className={'d-flex justify-content-end text-center mb-4 ' + styles.head}
              >
                <h3 className='col-8 '>Create an account</h3>
              </label>
              <label className='d-flex justify-content-between'>
                <span>Name:</span>
                <input className='col-8' type='text' />
              </label>
              <label className='d-flex justify-content-between'>
                <span>Email:</span>
                <input className='col-8' type='text' />
              </label>
              <label className='d-flex justify-content-between'>
                <span>Repeat email:</span>
                <input className='col-8' type='text' />
              </label>
              <label className='d-flex justify-content-between'>
                <span> Password:</span>
                <input className='col-8' type='text' />
              </label>
              <label className='d-flex justify-content-between'>
                <span>Repeat password:</span>
                <input className='col-8' type='text' />
              </label>
              <label className='d-flex justify-content-between'>
                <span>Phone:</span>
                <div className='col-8 p-0 d-flex justify-content-between'>
                  <select className=''>
                    <option>+48(PL)</option>
                  </select>
                  <input className='col-8' type='text' />
                </div>
              </label>
              <label className='col-auto d-flex align-items-center mt-4'>
                <input type='checkbox' />
                <span className='ml-1'>
                  I accept the<a href='#'>terms and conditions.</a>
                </span>
              </label>
              <label className='col-auto d-flex align-items-center'>
                <input type='checkbox' />
                <span className='ml-1'>
                  I consent to the processing of my<a href='#'>personal data.</a>
                </span>
              </label>
              <div className='d-flex justify-content-center mt-4'>
                <Button to='/' variant='small'>
                  Return
                </Button>
                <Button to='/' variant='small'>
                  Register
                </Button>
              </div>
              <span className='mt-4 text-center'>
                You have account?
                <Link to={'/login'}>Log in</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
