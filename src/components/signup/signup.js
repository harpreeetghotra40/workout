import React, { useState } from 'react'
import './signup.styles.scss'
import '../../mobile.styles.scss'
import { signInWithGoogle } from '../../firebase'

// imported function
import helpers from '../methods'

const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [formState, setFormState] = useState(true)

  const toggleForm = (e) => {
    if (!e.target.classList.contains('active')) {
      setFormState(!formState)
      const nameInput = document.querySelector('#name-input-field')
      const h2s = document.querySelectorAll('.form-header')
      nameInput.classList.toggle('collapse')
      h2s.forEach((h2) => h2.classList.toggle('active'))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formState) {
      helpers.createUser(email, password)
    } else {
      helpers.signIn(email, password)
    }
  }

  return (
    <div className="welcome-container">
      <div>
        <h1>Welcome to WorkOut App</h1>
        <div className="form-container">
          <div className="toggle-form-box">
            <h2
              className="form-header active"
              onClick={toggleForm}
              role="presentation"
            >
              Sign up
            </h2>
            <p>or</p>
            <h2
              className="form-header "
              onClick={toggleForm}
              role="presentation"
            >
              Sign in
            </h2>
          </div>
          <form id="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="Full Name" id="name-input-field">
              Name
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="email address">
              Email
              <input
                type="email"
                value={email}
                placeholder="Enter your e-mail address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                value={password}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" className="sign-in">
              Continue
            </button>
          </form>
          <div className="or-login-container">
            <p>Or</p>
            <form className="googleLogin" htmlFor="googleLogin">
              <button
                type="button"
                onClick={() => signInWithGoogle()}
                target="_blank"
              >
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt="Google Sign in Logo"
                />
                <span>Sign in with Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
