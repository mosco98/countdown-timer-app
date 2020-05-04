import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import Time from '..'

describe('Time component initial rendering', () => {
  it('renders correctly', () => {
    render(<Time />)
  })
})

describe('Rendering pause and resume time button', () => {
  it('rendering pause button', () => {
    const props = {
      timeStarted: true,
      timePaused: false
    }
    const { timeStarted, timePaused } = props
    const component = renderer.create(<Time timeStarted={timeStarted} timePaused={timePaused} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('rendering resume button', () => {
    const props = {
      timeStarted: true,
      timePaused: true
    }
    const { timeStarted, timePaused } = props
    const component = renderer.create(<Time timeStarted={timeStarted} timePaused={timePaused} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button functionality', () => {
  it('pause button triggers the pauseTimerHandler function when clicked', () => {
    const pauseTimeHandler = jest.fn()
    const props = {
      timeStarted: true,
      timePaused: false
    }
    const { timeStarted, timePaused } = props
    const { queryByTestId } = render(
      <Time pauseTimeHandler={pauseTimeHandler} timeStarted={timeStarted} timePaused={timePaused} />
    )
    fireEvent.click(queryByTestId('pause-btn'))
    expect(pauseTimeHandler).toHaveBeenCalled()
  })
  it('resume button triggers the startTimerHandler function when clicked', () => {
    const startTimeHandler = jest.fn()
    const props = {
      timeStarted: true,
      timePaused: true
    }
    const { timeStarted, timePaused } = props
    const { queryByTestId } = render(
      <Time startTimeHandler={() => startTimeHandler('resume')} timeStarted={timeStarted} timePaused={timePaused} />
    )
    fireEvent.click(queryByTestId('resume-btn'))
    expect(startTimeHandler).toHaveBeenCalled()
  })
})
