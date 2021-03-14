import {
  contextSetNavigationAction,
  contextSetProgressAction,
  uiCreateListCarsAction,
  uiUpdateListCarsAction,
  uiDeleteListCarsAction,
  uiSelectListCarsAction,
  uiSetListCarsEditAction,
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
      describe('uiCreateListCarsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiCreateListCarsAction(payload)).toMatchObject({ type: 'UI_CREATE_LIST_CARS', payload })
        })
      })

      describe('uiUpdateListCarsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiUpdateListCarsAction(payload)).toMatchObject({ type: 'UI_UPDATE_LIST_CARS', payload })
        })
      })

      describe('uiDeleteListCarsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiDeleteListCarsAction(payload)).toMatchObject({ type: 'UI_DELETE_LIST_CARS', payload })
        })
      })

      describe('uiSelectListCarsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSelectListCarsAction(payload)).toMatchObject({ type: 'UI_SELECT_LIST_CARS', payload })
        })
      })

      describe('uiSetListCarsEditAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListCarsEditAction(payload)).toMatchObject({ type: 'UI_SET_LIST_CARS_EDIT', payload })
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
