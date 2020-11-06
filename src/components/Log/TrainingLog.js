import React from 'react'

const TrainingLog = () => {
  return (
    <div className="training-log-container">
      <h2>Activity</h2>
      <div className="training-log">
        <div className="when">
          <div className="day">Fri</div>
          <div className="date">9</div>
        </div>
        <div className="activity-desc">Body Weight Training</div>
        <div className="time-for-activity">
          <div className="value">40</div>
          <div className="time">mins</div>
        </div>
      </div>
      <div className="training-log">
        <div className="when">
          <div className="day">Sat</div>
          <div className="date">10</div>
        </div>
        <div className="activity-desc">Running</div>
        <div className="time-for-activity">
          <div className="value">30</div>
          <div className="time">mins</div>
        </div>
      </div>
      <div className="training-log">
        <div className="when">
          <div className="day">Sun</div>
          <div className="date">11</div>
        </div>
        <div className="activity-desc">Running</div>
        <div className="time-for-activity">
          <div className="value">30</div>
          <div className="time">mins</div>
        </div>
      </div>
    </div>
  )
}

export default TrainingLog
