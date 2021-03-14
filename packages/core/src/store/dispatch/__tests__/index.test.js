import { useBindActionCreators } from '../index'

jest.mock('redux', () => ({ bindActionCreators: jest.fn() }))
jest.mock('react-redux', () => ({ useDispatch: jest.fn() }))
jest.mock('../../action/actionCreators', () => ({ fantasticAction: jest.fn() }))
jest.mock('../../thunk/context/progress/set', () => ({
  fantasticContextSetProgressRegularThunk: jest.fn(),
  fantasticContextSetProgressConsentThunk: jest.fn(),
}))

const reduxMockObject = require('redux')
const reactReduxMockObject = require('react-redux')
const actionCreatorsMockObject = require('../../action/actionCreators')
const contextProgressSetMockObject = require('../../thunk/context/progress/set')

const bindActionCreatorsMockObject = {
  ...actionCreatorsMockObject,
  contextProgressSetMockObject,
}

describe('index', () => {
  beforeEach(() => {
    jest.spyOn(reduxMockObject, 'bindActionCreators').mockImplementation(jest.fn(() => bindActionCreatorsMockObject))
    jest.spyOn(reactReduxMockObject, 'useDispatch').mockImplementation(jest.fn())
  })

  afterEach(() => jest.clearAllMocks())

  describe('useBindActionCreators()', () => {
    test('must return all bound actions and thunks', () => {
      expect(useBindActionCreators()).toEqual(bindActionCreatorsMockObject)
    })
  })
})
