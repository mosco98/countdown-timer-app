import '../../Assets/css/style.css'

import React from 'react'

const SpeedControls = ({ timeSpeedHandler, speed }) => {
  return (
    <div className="container w-25 speed-control-btn-ctn d-flex align-items-center justify-content-around p-3">
      <button
        className={speed === 1000 ? 'speed-control-btn active' : 'speed-control-btn'}
        onClick={() => {
          timeSpeedHandler(1000)
        }}
        title="Speed 1x"
        data-testid="speedx1">
        1X
      </button>
      <button
        className={speed === 750 ? 'speed-control-btn active' : 'speed-control-btn'}
        onClick={() => {
          timeSpeedHandler(750)
        }}
        title="Speed 1.5x"
        data-testid="speedx1.5">
        1.5X
      </button>
      <button
        className={speed === 300 ? 'speed-control-btn active' : 'speed-control-btn'}
        onClick={() => {
          timeSpeedHandler(300)
        }}
        title="Speed 2x"
        data-testid="speedx2">
        2X
      </button>
    </div>
  )
}

export default SpeedControls
