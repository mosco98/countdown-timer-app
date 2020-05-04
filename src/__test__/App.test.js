import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import App from '../App'

configure({ adapter: new Adapter() })

describe('App test', () => {
  it('Render App', () => {
    render(<App />)
  })

  it('Check App state', () => {
    const component = shallow(<App />)
    expect(component.state('minuteInput')).toEqual(null)
    expect(component.state('minutes')).toEqual(0)
    expect(component.state('seconds')).toEqual(0)
    expect(component.state('timePaused')).toEqual(false)
    expect(component.state('timeUp')).toEqual(false)
    expect(component.state('halfWay')).toEqual(false)
    expect(component.state('timeRed')).toEqual(false)
    expect(component.state('timeBlink')).toEqual(false)
  })
})
