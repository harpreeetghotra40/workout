import React, { useState } from 'react'
import './signup.styles.scss'
import { signInWithGoogle } from '../../firebase'

const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="welcome-container">
      <div className="left-container">
        <div>
          <h1>
            Welcome,
            <br /> Let's get you started.
          </h1>
        </div>
      </div>
      <div className="right-container">
        <div className="form-toggle-container">
          <div className="active">Sign In</div>
          <div className="">Sign up</div>
        </div>
        <form id="signup-form">
          <label htmlFor="Full Name" id="name-input-field">
            Full Name
            <input
              type="text"
              value={name}
              placeholder="Enter your Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email address">
            E-mail
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
              placeholder="XXXXXXXX"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="sign-in">
            Sign In
          </button>
        </form>
        <form htmlFor="googleLogin">
          <button
            type="button"
            onClick={() => signInWithGoogle()}
            target="_blank"
          >
            Sign Ip with Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
