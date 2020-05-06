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
    <div className="d-flex align-items-center justify-content-center w-50 time-ctn">
      <div className="container w-100 time-ctn d-flex align-items-center">
        <h1
          className={classNames('time w-75 h-100 container', {
            'time w-75 h-100 container text-center': !timeStarted,
            'time w-75 h-100 container text-right': timeStarted,
            'time w-75 h-100 container text-right red-text': timeRed,
            'time w-75 h-100 container text-right blinking': timeBlink
          })}>
          {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </h1>
        {timeStarted && (
          <div className="w-25">
            {timeStarted && (
              <div className="">
                {timePaused ? (
                  <Play
                    className={classNames({
                      'red-text': timeRed
                    })}
                    size={35}
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
                    size={35}
                    style={{ cursor: 'pointer' }}
                    onClick={pauseTimeHandler}
                    title="Pause"
                    data-testid="pause-btn"
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Time
