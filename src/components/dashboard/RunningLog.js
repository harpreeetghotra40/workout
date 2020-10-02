import React from 'react'
// import Log from './Log'

const RunningLog = () => {
  return (
    <div className="running-log-container">
      <h2>Running Log</h2>
      <div className="log-container">
        <div className="log-header">
          <div>Date</div>
          <div>Distance</div>
          <div>Pace</div>
          <div>Time</div>
        </div>
        {/* <Log date={'9/9'} distance={'1.61'} time={'09:50'} pace={'09:04'} /> */}
      </div>
    </div>
  )
}

export default RunningLog
