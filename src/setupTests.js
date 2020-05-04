// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

import { configure, mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import renderer from 'react-test-renderer'

// React 16 Enzyme adapter
configure({ adapter: new Adapter() })
// Make Enzyme functions available in all test files without importing
global.React = React
global.shallow = shallow
global.render = render
global.mount = mount
global.renderer = renderer
