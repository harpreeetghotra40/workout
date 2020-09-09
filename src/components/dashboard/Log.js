import React from 'react'

const Log = ({ date, distance, pace, time }) => {
  return (
    <div className="log">
      <div>{date}</div>
      <div>{distance}</div>
      <div>{pace}</div>
      <div>{time}</div>
    </div>
  )
}

export default Log
