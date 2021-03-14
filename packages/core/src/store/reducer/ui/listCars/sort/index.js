import { getSort, sortObjects } from '@papillonads/library/sort'

export function uiSetListCarsSort(state, action) {
  const newSort = getSort({ currentSort: state.listCars.sort, newSort: action.payload.newSort })

  return {
    ...state,
    listCars: {
      ...state.listCars,
      carsObjects: sortObjects({ sort: newSort, objects: state.listCars.carsObjects }),
      search: {
        ...state.listCars.search,
        carsObjects: sortObjects({ sort: newSort, objects: state.listCars.search.carsObjects }),
      },
      sort: newSort,
    },
  }
}
