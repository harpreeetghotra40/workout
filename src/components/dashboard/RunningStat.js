import React from 'react'

const RunningStat = () => {
  return (
    <div className="running-container">
      <h1>Dashboard</h1>
      <div className="running-log-today">
        <h2>Latest Run</h2>
        <div className="flex-container">
          <div className="run-log">
            <p className="value">10.23 Km</p>
            <p className="metric">Distance</p>
          </div>
          <div className="run-log">
            <p className="value">9.04 /min</p>
            <p className="metric">Pace</p>
          </div>
          <div className="run-log">
            <p className="value">1hr 45m</p>
            <p className="metric">Time</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RunningStat
