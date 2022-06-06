import 'jsdom-global/register'

import { render } from '@testing-library/react'

import 'expect-puppeteer'

global.renderToJSON = (component) => render(component).container

require('whatwg-fetch')

require('expect-puppeteer')

jest.setTimeout(120e3)
