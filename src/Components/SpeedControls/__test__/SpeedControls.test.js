import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import SpeedControls from '..'

describe('SpeedControls component', () => {
  it('Renders correctly', () => {
    const { queryByTestId } = render(<SpeedControls />)
    expect(queryByTestId('speedx1')).toBeTruthy()
    expect(queryByTestId('speedx1.5')).toBeTruthy()
    expect(queryByTestId('speedx2')).toBeTruthy()
  })
})

describe('SpeedControls button', () => {
  it('Triggers function when clicked', () => {
    const timeSpeedHandler = jest.fn()
    const { queryByTestId } = render(<SpeedControls timeSpeedHandler={timeSpeedHandler} />)
    fireEvent.click(queryByTestId('speedx1'))
    fireEvent.click(queryByTestId('speedx1.5'))
    fireEvent.click(queryByTestId('speedx2'))
    expect(timeSpeedHandler).toHaveBeenCalled()
  })

  it('Speedx1 button changes speed value', () => {
    const timeSpeedHandler = jest.fn()
    let speed = 1000
    const { queryByTestId } = render(<SpeedControls timeSpeedHandler={timeSpeedHandler} speed={speed} />)
    fireEvent.click(queryByTestId('speedx1'))
    expect(speed).toBe(1000)
  })
  it('Speedx1.5 button changes speed value', () => {
    const timeSpeedHandler = jest.fn()
    let speed = 750
    const { queryByTestId } = render(<SpeedControls timeSpeedHandler={timeSpeedHandler} speed={speed} />)
    fireEvent.click(queryByTestId('speedx1.5'))
    expect(speed).toBe(750)
  })
  it('Speedx2 button changes speed value', () => {
    const timeSpeedHandler = jest.fn()
    let speed = 300
    const { queryByTestId } = render(<SpeedControls timeSpeedHandler={timeSpeedHandler} speed={speed} />)
    fireEvent.click(queryByTestId('speedx2'))
    expect(speed).toBe(300)
  })
})
