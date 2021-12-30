import { combineReducers } from 'redux'
import {
  CONTEXT_SET_NAVIGATION,
  CONTEXT_SET_PROGRESS,
  UI_SELECT_LIST_CARS,
  UI_SET_LIST_CARS_SORT,
  UI_SET_LIST_CARS_SEARCH,
  UI_SET_LIST_CARS_PAGINATION,
} from '../action/actionTypes'

import { contextSetNavigation } from './context/navigation/set'
import { contextSetProgress } from './context/progress/set'

import { uiSelectListCars } from './ui/listCars/select'
import { uiSetListCarsSort } from './ui/listCars/sort'
import { uiSetListCarsSearch } from './ui/listCars/search'
import { uiSetListCarsPagination } from './ui/listCars/pagination'

export const getAppReducer = () =>
  combineReducers({
    // eslint-disable-next-line default-param-last
    context: (state = {}, action) => {
      switch (action.type) {
        case CONTEXT_SET_NAVIGATION:
          return contextSetNavigation(state, action)
        case CONTEXT_SET_PROGRESS:
          return contextSetProgress(state, action)
        default:
          return state
      }
    },
    // eslint-disable-next-line default-param-last
    ui: (state = {}, action) => {
      switch (action.type) {
        case UI_SELECT_LIST_CARS:
          return uiSelectListCars(state, action)
        case UI_SET_LIST_CARS_SORT:
          return uiSetListCarsSort(state, action)
        case UI_SET_LIST_CARS_SEARCH:
          return uiSetListCarsSearch(state, action)
        case UI_SET_LIST_CARS_PAGINATION:
          return uiSetListCarsPagination(state, action)
        default:
          return state
      }
    },
  })
