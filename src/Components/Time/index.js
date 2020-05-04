import '../../Assets/css/style.css'

import classNames from 'classnames'
import React from 'react'
import { Pause, Play } from 'react-feather'

const Time = ({
  timePaused,
  startTimeHandler,
  timeStarted,
  minutes,
  seconds,
  pauseTimeHandler,
  timeRed,
  timeBlink
}) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="container w-100 d-flex align-items-center justify-content-around time-ctn">
        <h1
          className={classNames('time ml-2', {
            'time red-text ml-2': timeRed,
            'time blinking ml-2': timeBlink
          })}>
          {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </h1>
        {timeStarted ? (
          <div className="d-flex align-items-center justify-content-center ml-2 mt-auto mb-auto">
            {timePaused ? (
              <Play
                className={classNames({
                  'red-text': timeRed
                })}
                size={45}
                style={{ cursor: 'pointer' }}
                onClick={() => startTimeHandler('resume')}
                title="Resume"
                data-testid="resume-btn"
              />
            ) : (
              <Pause
                className={classNames({
                  'red-text': timeRed
                })}
                size={45}
                style={{ cursor: 'pointer' }}
                onClick={pauseTimeHandler}
                title="Pause"
                data-testid="pause-btn"
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Time
