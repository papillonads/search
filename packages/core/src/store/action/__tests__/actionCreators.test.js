import {
  contextSetNavigationAction,
  contextSetProgressAction,
  uiSelectListCarsAction,
  uiSetListCarsSortAction,
  uiSetListCarsSearchAction,
  uiSetListCarsPaginationAction,
} from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'fantastic-payload' }

  describe('context', () => {
    describe('navigation', () => {
      describe('contextSetNavigationAction()', () => {
        test('must return action with given payload', () => {
          expect(contextSetNavigationAction(payload)).toMatchObject({ type: 'CONTEXT_SET_NAVIGATION', payload })
        })
      })
    })

    describe('progress', () => {
      describe('contextSetProgressAction()', () => {
        test('must return action with given payload', () => {
          expect(contextSetProgressAction(payload)).toMatchObject({ type: 'CONTEXT_SET_PROGRESS', payload })
        })
      })
    })
  })

  describe('ui', () => {
    describe('listCars', () => {
      describe('uiSelectListCarsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSelectListCarsAction(payload)).toMatchObject({ type: 'UI_SELECT_LIST_CARS', payload })
        })
      })

      describe('uiSetListCarsSortAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListCarsSortAction(payload)).toMatchObject({ type: 'UI_SET_LIST_CARS_SORT', payload })
        })
      })

      describe('uiSetListCarsSearchAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListCarsSearchAction(payload)).toMatchObject({ type: 'UI_SET_LIST_CARS_SEARCH', payload })
        })
      })

      describe('uiSetListCarsPaginationAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListCarsPaginationAction(payload)).toMatchObject({ type: 'UI_SET_LIST_CARS_PAGINATION', payload })
        })
      })
    })
  })
})
