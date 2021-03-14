import { selectCarsObjects } from './carsObjects'
import { getListCarsSearch } from '../get'

export function uiSelectListCars(state, action) {
  const newCarsObjects = selectCarsObjects({
    carsObjects: state.listCars.carsObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newSearchCarsObjects = selectCarsObjects({
    carsObjects: state.listCars.search.carsObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newSearch = getListCarsSearch({ search: state.listCars.search, newSearchCarsObjects })

  return {
    ...state,
    listCars: {
      ...state.listCars,
      carsObjects: newCarsObjects,
      search: {
        ...newSearch,
        carsObjects: newSearch.carsObjects,
      },
    },
  }
}
