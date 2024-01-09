import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import { logIn } from '../util/session';

const SignIn = (props) => {
    const navigate = useNavigate()
  
    const [form, setForm] = useState({
      username: '',
      password: '',
      isError: false,
      errorMsg: '',
    })
  
    const handleChange = (event) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      })
    }
  
    const onSignIn = async (event) => {
      event.preventDefault()
      const { setUser } = props
      try {
        const response = await logIn(form);
        const user = await response.json()
        setUser(user)
        navigate('/')
      } catch (error) {
        console.error(error)
        setForm({
          isError: true,
          errorMsg: 'Invalid Credentials',
          email: '',
          password: '',
        })
      }
    }
  
    const renderError = () => {
      const toggleForm = form.isError ? 'danger' : ''
      if (form.isError) {
        return (
          <button type='submit' className={toggleForm}>
            {form.errorMsg}
          </button>
        )
      } else {
        return <button type='submit'>Sign In</button>
      }
    }
  
    const { username, password } = form
  
    return (
      <div className='form-container'>
        <h3>Sign In</h3>
        <form onSubmit={onSignIn}>
          <label>Username</label>
          <input
            required
            type='text'
            name='username'
            value={username}
            placeholder='Enter Username'
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            name='password'
            value={password}
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />
          {renderError()}
        </form>
        </div>
    )
  }

export default SignIn;