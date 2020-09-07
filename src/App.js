import React, { useState, useEffect } from 'react'
import { auth } from './firebase'
import Signup from './components/signup/signup'
import Dashboard from './components/dashboard/dashboard'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((log) => setUser(log))
  }, [user, setUser])
  return (
    <div className="App">
      {user === null ? <Signup /> : <Dashboard user={user} />}
    </div>
  )
}

export default App
