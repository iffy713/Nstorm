import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import './LoginForm.css'

const LoginForm = ({setShowModal, setShowSignUpModal}) => {

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='auth-form-ctn'>
        <div>
          <h2>
            Sign in
          </h2>
        </div>
        <div>
          New to Nstorm? <Link to='/sign-up' className='link-to-other-page'>Create an account</Link>
        </div>
        <form onSubmit={onLogin} className='auth-form'>
          <div className='error-list-ctn'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='form-label-ctn'>
            <label htmlFor='email'>
              <h5>
                Email
              </h5>
            </label>
          </div>
          <div>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='form-label-ctn'>
            <label htmlFor='password'>
              <h5>
                Password
              </h5>
            </label>
          </div>
          <div>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <div className='modal-auth-submit-btn-ctn'>
            <button type='submit'>Sign In</button>
          </div>
          <div>
            <button type='submit'
              onClick={()=> { setEmail('demo@aa.io'); setPassword('password') }}
            >Demo User Login</button>
          </div>
        </form>
    </div>
  );
};

export default LoginForm;
