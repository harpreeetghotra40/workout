import React, { useState, useEffect } from 'react'
import './Log.styles.scss'
import Chart from 'chart.js'
import { db, auth } from '../../firebase'

const Log = () => {
  const [log, setLog] = useState({})
  const [dates, setDates] = useState([])
  const [currentDate, setCurrentDate] = useState(new Date())
  const openWeightModal = () => {
    document.querySelector('#weightModal').style.display = 'block'
  }

  //  getting the current week
  function daysOfTheWeek(current) {
    let week = []
    // Starting Sunday
    current.setDate(current.getDate() - current.getDay())
    for (let i = 0; i < 7; i++) {
      week.push(new Date(current))
      current.setDate(current.getDate() + 1)
    }
    week = week.map((day) => day.toJSON().slice(0, 10))
    setDates(week)
    // return week
  }

  const chartRef = React.createRef()
  //  Hiding Chart Legend
  Chart.defaults.global.legend.display = false
  const getWeightLog = () => {
    db.collection('weightLog')
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setLog(doc.data())
          setDates(Object.keys(doc.data()))
        }
      })
  }
  useEffect(() => {
    getWeightLog()
    daysOfTheWeek(currentDate)
    const myChartRef = chartRef.current.getContext('2d')
    const gradientFill = myChartRef.createLinearGradient(500, 0, 100, 0)
    gradientFill.addColorStop(0, 'rgba(70, 179, 230, 0.5)')
    gradientFill.addColorStop(1, 'rgba(70, 179, 230, 0.1)')
    let myChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            borderColor: '#46b3e6',
            data: [74.3, 74.5, 74.7, 73.6, 73.4, 74.5, 73.9],
            fill: true,
            pointRadius: 4,
            pointBorderWidth: 4,
            pointHoverRadius: 10,
            backgroundColor: gradientFill,
          },
        ],
      },
      options: {
        //  Customize chart options
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: 'rgba(0,0,0,0.5)',
                fontStyle: 'bold',
                maxTicksLimit: 5,
                padding: 10,
              },
              gridLines: {
                // drawTicks: false,
                // display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                zeroLineColor: 'transparent',
              },
              ticks: {
                padding: 20,
                fontColor: 'rgba(0,0,0,0.5)',
                fontStyle: 'bold',
              },
            },
          ],
        },
      },
    })
  }, [])
  return (
    <div className="log-wrapper">
      <div className="flex-container">
        <div className="chart-header">
          <h6>Avg Body Weight</h6>
          <h2>
            74.6 <span>kg</span>
          </h2>
        </div>
        <div className="add-btn-container">
          <button
            className="add-weight-data-btn"
            type="button"
            onClick={() => openWeightModal()}
          >
            Add +
          </button>
        </div>
      </div>
      <div className="log-container">
        <canvas id="myChart" ref={chartRef} />
      </div>
    </div>
  )
}

export default Log
