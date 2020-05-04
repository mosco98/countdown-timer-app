import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import TimeInput from '..'

test('Initial Rendering', () => {
  render(<TimeInput />)
})

describe('Input value', () => {
  it('updates on change', () => {
    const { queryByTestId } = render(<TimeInput />)
    const timeInput = queryByTestId('minute-input')
    fireEvent.change(timeInput, { target: { value: '0' } })
    expect(timeInput.value).toBe('0')
  })
})

describe('Buttons', () => {
  it('start button renders correctly', () => {
    const props = {
      timeStarted: false,
      timePaused: false,
      timeUp: false
    }
    const { timeStarted, timePaused, timeUp } = props
    const component = renderer.create(<TimeInput timePaused={timePaused} timeStarted={timeStarted} timeUp={timeUp} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('reset button renders correctly', () => {
    const props = {
      timeStarted: true,
      timePaused: true,
      timeUp: false
    }
    const { timeStarted, timePaused, timeUp } = props
    const component = renderer.create(<TimeInput timePaused={timePaused} timeStarted={timeStarted} timeUp={timeUp} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('start-new-counter button renders correctly', () => {
    const props = {
      timeStarted: false,
      timePaused: false,
      timeUp: true
    }
    const { timeStarted, timePaused, timeUp } = props
    const component = renderer.create(<TimeInput timePaused={timePaused} timeStarted={timeStarted} timeUp={timeUp} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Buttons functionality', () => {
  it('start button does not triggers startTimeHandler function when clicked', () => {
    const startTimeHandler = jest.fn()
    const { queryByTestId } = render(<TimeInput startTimeHandler={startTimeHandler} minuteInput={0} />)
    fireEvent.click(queryByTestId('start-btn'))
    expect(startTimeHandler).not.toHaveBeenCalled()
  })
  it('start button triggers startTimeHandler function when clicked', () => {
    const startTimeHandler = jest.fn()
    const num = (value) => {
      if (value !== '' || value > 0 || value % 1 !== 0) {
        return value
      }
    }
    const { queryByTestId } = render(<TimeInput startTimeHandler={startTimeHandler} minuteInput={() => num()} />)
    fireEvent.click(queryByTestId('start-btn'))
    expect(startTimeHandler).toHaveBeenCalled()
  })
  it('reset button triggers timeResetHandler function when clicked', () => {
    const timeResetHandler = jest.fn()
    const { queryByTestId } = render(<TimeInput timeResetHandler={timeResetHandler} timePaused={true} />)
    fireEvent.click(queryByTestId('reset-btn'))
    expect(timeResetHandler).toHaveBeenCalled()
  })
  it('start-new-timer button triggers startNewHandler function when clicked', () => {
    const startNewHandler = jest.fn()
    const { queryByTestId } = render(<TimeInput startNewHandler={startNewHandler} timeUp={true} />)
    fireEvent.click(queryByTestId('start-new-btn'))
    expect(startNewHandler).toHaveBeenCalled()
  })
})
