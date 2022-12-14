import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, firstName, lastName, email, password));
      // console.log("!!!!!!!!!!!!!",data)
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const updateLastName = (e) => {
    setLastName(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='auth-form-ctn'>
      <div>
        <h2>
          Create Account
        </h2>
      </div>
      <div>
        Already have an account? <Link to='/login' className='link-to-other-page'>Sign in here</Link>
      </div>
      <div id='auth-icons-ctn'>
        <div>
          <i className="fa-regular fa-credit-card"></i>
          Check out faster
        </div>
        <div>
          <i className="fa-solid fa-truck"></i>
          Track orders easily
        </div>
        <div>
          <i className="fa-solid fa-cloud"></i>
          Use one sign-in across devices
        </div>
      </div>
      <div className='required-ctn'>
        <span className='red-star-span'>*</span>Required
      </div>
      <form onSubmit={onSignUp} className='auth-form'>
        <div className='error-list-ctn'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='form-label-ctn'>
          <label>
            <h5>
              User Name<span className='red-star-span'>*</span>
            </h5>
          </label>
        </div>
        <div>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='form-label-ctn'>
          <label>
            <h5>
              Email<span className='red-star-span'>*</span>
            </h5>
          </label>
        </div>
        <div>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='form-label-ctn'>
          <h5>
            <label>First Name<span className='red-star-span'>*</span></label>
          </h5>
        </div>
        <div>
          <input
            type='text'
            name="firstName"
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div className='form-label-ctn'>
          <h5>
            <label>Last Name<span className='red-star-span'>*</span></label>
          </h5>
        </div>
        <div>
          <input
            type='text'
            name="lastName"
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
        <div className='form-label-ctn'>
          <h5>
            <label>Password<span className='red-star-span'>*</span></label>
          </h5>
        </div>
        <div>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='form-label-ctn'>
          <h5>
            <label>Repeat Password<span className='red-star-span'>*</span></label>
          </h5>
        </div>
        <div>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className='modal-auth-submit-btn-ctn'>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
