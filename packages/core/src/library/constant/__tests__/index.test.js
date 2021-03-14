import * as constants from '../index'

describe('index', () => {
  beforeEach(() => {
    jest.spyOn(Object, 'freeze').mockImplementation(jest.fn())
  })

  afterEach(() => jest.clearAllMocks())

  test('must return all constants', () => {
    expect(constants).toHaveProperty('pageSize')
    expect(constants).toHaveProperty('pageNumber')
    expect(constants).toHaveProperty('maxRange')
    expect(constants).toHaveProperty('eventKey')
    expect(constants).toHaveProperty('timeout')
    expect(constants).toHaveProperty('messageType')
    expect(constants).toHaveProperty('pageContent')
  })
})
