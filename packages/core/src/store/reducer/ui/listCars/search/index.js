import { sortObjects } from '@papillonads/library/sort'
import { getPagination } from '@papillonads/library/pagination'
import { getListCarsObjectsByBrand, getListCarsObjectsByYear, getListCarsObjectsByLicense } from '../get'

export function getListCarsSearch({ state, action }) {
  let newSearch

  newSearch = {
    brand: action.payload?.brand ?? state.listCars.search?.brand,
    year: action.payload?.year ?? state.listCars.search?.year,
    license: action.payload?.license ?? state.listCars.search?.license,
    carsObjects:
      !action.payload.brand && !state.listCars.search
        ? null
        : getListCarsObjectsByBrand({
            objects: state.listCars.carsObjects,
            brand: action.payload?.brand,
          }),
  }

  newSearch = {
    brand: action.payload?.brand ?? state.listCars.search?.brand,
    year: action.payload?.year ?? state.listCars.search?.year,
    license: action.payload?.license ?? state.listCars.search?.license,
    carsObjects:
      !action.payload.year && !state.listCars.search
        ? newSearch.carsObjects || state.listCars.carsObjects
        : getListCarsObjectsByYear({
            objects: newSearch.carsObjects || state.listCars.carsObjects,
            year: action.payload?.year,
          }),
  }

  newSearch = {
    brand: action.payload?.brand ?? state.listCars.search?.brand,
    year: action.payload?.year ?? state.listCars.search?.year,
    license: action.payload?.license ?? state.listCars.search?.license,
    carsObjects:
      !action.payload.license && !state.listCars.search
        ? newSearch.carsObjects || state.listCars.carsObjects
        : getListCarsObjectsByLicense({
            objects: newSearch.carsObjects || state.listCars.carsObjects,
            license: action.payload?.license,
          }),
  }

  return newSearch
}

export function uiSetListCarsSearch(state, action) {
  const newSearch = getListCarsSearch({ state, action })

  const newPagination = getPagination({
    searchObjects: newSearch.carsObjects,
    regularObjects: state.listCars.carsObjects,
    pagination: state.listCars.pagination,
  })

  return {
    ...state,
    listCars: {
      ...state.listCars,
      carsObjects: sortObjects({ sort: state.listCars.sort, objects: state.listCars.carsObjects }),
      pagination: newPagination,
      search: {
        ...newSearch,
        carsObjects: sortObjects({ sort: state.listCars.sort, objects: newSearch.carsObjects }),
      },
    },
  }
}
