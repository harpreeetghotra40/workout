import React, { useState, useEffect } from 'react'
import './Log.styles.scss'
import Chart from 'chart.js'
import { db, auth } from '../../firebase'

const Log = () => {
  const [log, setLog] = useState({})
  const [dates, setDates] = useState([])
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
      <div className="chart-header">
        <h2>Weight Log</h2>
      </div>
      <div className="log-container">
        {/* <div className="log flex-container">
          <div>Date</div>
          <div>Weight</div>
        </div> */}
        <canvas id="myChart" ref={chartRef} />
        {/* {dates.map((date) => (
          <div className="log flex-container">
            <div>{date}</div>
            <div>{log[date].weight}</div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Log
