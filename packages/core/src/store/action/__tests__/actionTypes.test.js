import * as types from '../actionTypes'

describe('actionTypes', () => {
  test('must return all action types', () => {
    expect(types).toHaveProperty('CONTEXT_SET_NAVIGATION')
    expect(types).toHaveProperty('CONTEXT_SET_PROGRESS')
    expect(types).toHaveProperty('UI_SELECT_LIST_CARS')
    expect(types).toHaveProperty('UI_SET_LIST_CARS_SORT')
    expect(types).toHaveProperty('UI_SET_LIST_CARS_SEARCH')
    expect(types).toHaveProperty('UI_SET_LIST_CARS_PAGINATION')
  })
})
