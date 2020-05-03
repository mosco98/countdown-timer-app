import '../../Assets/css/style.css'

import React from 'react'

const SpeedControls = ({ timeSpeedHandler, speed }) => {
  return (
    <div className="container w-50 speed-control-btn-ctn d-flex align-items-center justify-content-around p-3">
      <button
        className={speed === 1000 ? 'speed-control-btn active' : 'speed-control-btn'}
        onClick={() => {
          timeSpeedHandler(1000)
        }}
        title="Speed 1x">
        1X
      </button>
      <button
        className={speed === 750 ? 'speed-control-btn active' : 'speed-control-btn'}
        onClick={() => {
          timeSpeedHandler(750)
        }}
        title="Speed 1.5x">
        1.5X
      </button>
      <button
        className={speed === 300 ? 'speed-control-btn active' : 'speed-control-btn'}
        onClick={() => {
          timeSpeedHandler(300)
        }}
        title="Speed 2x">
        2X
      </button>
    </div>
  )
}

export default SpeedControls
