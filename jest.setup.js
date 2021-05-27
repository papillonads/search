import 'jsdom-global/register'
import 'jest-enzyme'

import renderer from 'react-test-renderer'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import 'expect-puppeteer'

Enzyme.configure({ adapter: new Adapter() })

global.renderToJSON = (component) => renderer.create(component).toJSON()

global.renderMount = (component) => mount(component)

global.renderShallow = (component) => shallow(component)

require('whatwg-fetch')

require('expect-puppeteer')

jest.setTimeout(120e3)
