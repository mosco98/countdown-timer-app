import React from 'react'

const TimeInput = ({
  timePaused,
  timeStarted,
  startTimeHandler,
  timeResetHandler,
  timeUp,
  startNewHandler,
  minuteInputHandler,
  minuteInput
}) => {
  return (
    <div className="d-flex align-items-center justify-content-center time-input-ctn ml-auto mr-auto w-50">
      {timeUp ? (
        <button
          className="btn btn-sm btn-success"
          onClick={startNewHandler}
          title="Start new countdown"
          data-testid="start-new-btn">
          Start new countdown
        </button>
      ) : (
        <React.Fragment>
          {timeStarted ? null : (
            <>
              <span className="text-black-50 font-weight-bold">Countdown:</span>
              <input
                className="form-control time-input ml-4 mr-4"
                type="number"
                placeholder="(Min)"
                name="minuteInput"
                onChange={minuteInputHandler}
                min="0"
                data-testid="minute-input"
              />
            </>
          )}
          {timePaused && (
            <button
              className="btn btn-sm btn-danger reset-btn"
              onClick={timeResetHandler}
              title="Reset timer"
              data-testid="reset-btn">
              Reset
            </button>
          )}
          {!timeStarted && (
            <button
              className={minuteInput ? 'btn btn-sm btn-success start-btn' : 'btn btn-sm disabled start-btn'}
              onClick={minuteInput ? startTimeHandler : null}
              title={minuteInput && 'Start timer'}
              data-testid="start-btn">
              Start
            </button>
          )}
        </React.Fragment>
      )}
    </div>
  )
}

export default TimeInput
