import { getItemsDefaultSelected } from '@papillonads/library/array'
import { getPagination } from '@papillonads/library/pagination'
import { sortObjects } from '@papillonads/library/sort'
import { getListCarsObjectsByBrand, getListCarsObjectsByModel, getListCarsObjectsByYear, getListCarsObjectsByLicense } from '../get'
import { carBrands, carBrandsDefault } from '../../../../../library/constant/carBrands'

export function getListCarsSearch({ state, action }) {
  let newSearch

  const newSearchBrand = action.payload?.brand ?? state.listCars.search?.brand
  const newSearchModel =
    action.payload?.model ??
    getItemsDefaultSelected({
      defaultItems: carBrandsDefault[0].models,
      items: carBrands.find(({ name }) => name === newSearchBrand?.find(({ isSelected }) => isSelected === true)?.text)?.models,
    })

  newSearch = {
    brand: newSearchBrand,
    model: newSearchModel,
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
    brand: newSearchBrand,
    model: newSearchModel,
    year: action.payload?.year ?? state.listCars.search?.year,
    license: action.payload?.license ?? state.listCars.search?.license,
    carsObjects:
      !action.payload.model && !state.listCars.search
        ? newSearch.carsObjects || state.listCars.carsObjects
        : getListCarsObjectsByModel({
            objects: newSearch.carsObjects || state.listCars.carsObjects,
            model: action.payload?.model,
          }),
  }

  newSearch = {
    brand: newSearchBrand,
    model: newSearchModel,
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
    brand: newSearchBrand,
    model: newSearchModel,
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
