import './Assets/css/style.css'

import React, { Component } from 'react'

import audio from './Assets/sound/audio.mp3'
import SpeedControls from './Components/SpeedControls'
import Time from './Components/Time'
import TimeInput from './Components/TimeInput'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      minuteInput: null,
      minutes: 0,
      seconds: 0,
      timePaused: false,
      timeStarted: false,
      timeUp: false,
      halfWay: false,
      timeRed: false,
      timeBlink: false
    }

    this.counter = 0
    this.timeInterval = null
    this.speed = 1000
    this.halfTimeMinutes = 0
    this.halfTimeSeconds = 0
  }

  // Start time function
  startTimeHandler = (resume) => {
    const { minuteInput } = this.state
    if (resume !== 'resume') {
      this.setState({
        minutes: minuteInput
      })
      const halfTime = 30 * minuteInput // convert to seconds and half
      this.halfTimeMinutes = Math.floor(halfTime / 60)
      this.halfTimeSeconds = halfTime % 60
    }
    this.setState({
      timeStarted: true,
      timePaused: false,
      timeUp: false
    })

    // SetInterval function
    this.timeInterval = setInterval(() => {
      // Increment the global counter variable
      this.counter++

      // set state of seconds
      this.setState({
        seconds: 60 - this.counter
      })

      // reduce the minutes by 1 as soon as the timer starts
      if (this.counter === 1) {
        this.setState({
          minutes: this.state.minutes - 1
        })
      }

      // set the counter to 0 as soon as it reaches 60
      if (this.counter === 60) {
        this.counter = 0
      }

      // checking if time remains 20 seconds or less
      if (this.state.minutes === 0 && this.state.seconds <= 20) {
        this.setState({
          timeRed: true
        })
      }

      // checking if time remains 10 seconds or less
      if (this.state.minutes === 0 && this.state.seconds <= 10) {
        this.setState({
          timeBlink: true
        })
      }

      // checking if the time inputed by the user as passed half
      if (this.state.minutes === this.halfTimeMinutes && this.state.seconds === this.halfTimeSeconds) {
        this.setState({
          halfWay: true
        })
      }

      // stopping the timer when time is up
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        // play sound
        const audioPlayer = document.createElement('audio')
        audioPlayer.src = audio
        audioPlayer.play()

        clearInterval(this.timeInterval)
        this.setState({
          timeStarted: false,
          timeUp: true,
          timeRed: false,
          timeBlink: false,
          halfWay: false,
          minuteInput: null
        })
      }
    }, this.speed)
  }

  // Pause time function
  pauseTimeHandler = () => {
    clearInterval(this.timeInterval)
    this.setState({
      timePaused: true
    })
  }

  // Resetting time function
  timeResetHandler = () => {
    this.setState({
      timeStarted: false,
      timePaused: false,
      minutes: 0,
      seconds: 0,
      timeUp: false,
      halfWay: false,
      timeRed: false,
      timeBlink: false,
      minuteInput: null
    })
    this.counter = 0
    this.speed = 1000
  }

  // time speed function
  timeSpeedHandler = (speed) => {
    const { timeStarted } = this.state
    if (timeStarted) {
      this.speed = speed
      clearInterval(this.timeInterval)
      this.startTimeHandler('resume')
    }
  }

  // start new counter function
  startNewHandler = () => {
    this.setState({
      timeUp: false
    })
    this.speed = 1000
  }

  // Input function
  minuteInputHandler = (e) => {
    const value = e.target.value
    if (value === '' || value <= 0 || value % 1 !== 0) {
      return this.setState({
        minuteInput: null
      })
    }

    if (value > 0) {
      return this.setState({
        minuteInput: +value
      })
    }
  }

  render() {
    const { timePaused, timeStarted, minutes, seconds, timeUp, halfWay, timeRed, timeBlink, minuteInput } = this.state

    return (
      <div className="vh-100 w-100 d-flex flex-column align-items-center justify-content-between">
        <div className="w-100 title text-center mt-3">
          <h2>TIMER APP</h2>
        </div>
        <section className="h-75">
          <div className="d-flex flex-column align-items-center justify-content-around timer-ctn p-5">
            <TimeInput
              timePaused={timePaused}
              timeStarted={timeStarted}
              startTimeHandler={this.startTimeHandler}
              timeResetHandler={this.timeResetHandler}
              timeUp={timeUp}
              startNewHandler={this.startNewHandler}
              minuteInputHandler={this.minuteInputHandler}
              minuteInput={minuteInput}
            />
            <br />
            <div className="w-100 mt-3 text-center">
              {timeUp && <span className="font-italic text">Time's up!</span>}
              {halfWay && <span className="font-italic text">More than halfway there!</span>}
            </div>
            <Time
              timePaused={timePaused}
              timeStarted={timeStarted}
              startTimeHandler={this.startTimeHandler}
              minutes={minutes}
              seconds={seconds}
              pauseTimeHandler={this.pauseTimeHandler}
              timeUp={timeUp}
              timeRed={timeRed}
              timeBlink={timeBlink}
            />
            {/* <br /> */}
            <SpeedControls timeSpeedHandler={this.timeSpeedHandler} speed={this.speed} />
          </div>
        </section>
      </div>
    )
  }
}
