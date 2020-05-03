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
          className={classNames('time ', {
            'time red-text': timeRed,
            'time blinking': timeBlink
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
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Time
