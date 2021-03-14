import {
  CONTEXT_SET_NAVIGATION,
  CONTEXT_SET_PROGRESS,
  UI_CREATE_LIST_CARS,
  UI_UPDATE_LIST_CARS,
  UI_DELETE_LIST_CARS,
  UI_SELECT_LIST_CARS,
  UI_SET_LIST_CARS_EDIT,
  UI_SET_LIST_CARS_SORT,
  UI_SET_LIST_CARS_SEARCH,
  UI_SET_LIST_CARS_PAGINATION,
} from './actionTypes'

export const contextSetNavigationAction = (payload) => ({ type: CONTEXT_SET_NAVIGATION, payload })
export const contextSetProgressAction = (payload) => ({ type: CONTEXT_SET_PROGRESS, payload })
export const uiCreateListCarsAction = (payload) => ({ type: UI_CREATE_LIST_CARS, payload })
export const uiUpdateListCarsAction = (payload) => ({ type: UI_UPDATE_LIST_CARS, payload })
export const uiDeleteListCarsAction = (payload) => ({ type: UI_DELETE_LIST_CARS, payload })
export const uiSelectListCarsAction = (payload) => ({ type: UI_SELECT_LIST_CARS, payload })
export const uiSetListCarsEditAction = (payload) => ({ type: UI_SET_LIST_CARS_EDIT, payload })
export const uiSetListCarsSortAction = (payload) => ({ type: UI_SET_LIST_CARS_SORT, payload })
export const uiSetListCarsSearchAction = (payload) => ({ type: UI_SET_LIST_CARS_SEARCH, payload })
export const uiSetListCarsPaginationAction = (payload) => ({ type: UI_SET_LIST_CARS_PAGINATION, payload })
