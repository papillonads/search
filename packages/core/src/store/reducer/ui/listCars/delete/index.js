import { getSelectedItem, getItemsDefaultSelected } from '@papillonads/library/array'
import { getPagination } from '@papillonads/library/pagination'
import { sortObjects } from '@papillonads/library/sort'
import { getListCarsSearch } from '../get'
import { deleteCarsObjects } from './carsObjects'
import { carBrands } from '../../../../../library/constant/carBrands'
import { carBodyworks } from '../../../../../library/constant/carBodyworks'
import { carColors } from '../../../../../library/constant/carColors'
import { carFuels } from '../../../../../library/constant/carFuels'
import { carTransmissions } from '../../../../../library/constant/carTransmissions'
import { carYears } from '../../../../../library/constant/carYears'

export function uiDeleteListCars(state, action) {
  const newCarsObjects = {
    listCars: deleteCarsObjects({
      carsObjects: state.listCars.carsObjects,
      selectedObjects: action.payload.selectedObjects,
    }),
  }

  const newSearchCarsObjects = {
    listCars: deleteCarsObjects({
      carsObjects: state.listCars.search.carsObjects,
      selectedObjects: action.payload.selectedObjects,
    }),
  }

  const newSearch = {
    listCars: getListCarsSearch({ search: state.listCars.search, newSearchCarsObjects: newSearchCarsObjects.listCars }),
  }

  const newPagination = {
    listCars: getPagination({
      searchObjects: newSearch.listCars.carsObjects,
      regularObjects: newCarsObjects.listCars,
      pagination: state.listCars.pagination,
    }),
  }

  return {
    ...state,
    listCars: {
      ...state.listCars,
      carsObjects: sortObjects({ sort: state.listCars.sort, objects: newCarsObjects.listCars }),
      pagination: newPagination.listCars,
      search: {
        ...newSearch.listCars,
        carsObjects: sortObjects({ sort: state.listCars.sort, objects: newSearch.listCars.carsObjects }),
      },
      edit: {
        brand: getItemsDefaultSelected({ items: carBrands }),
        model: getItemsDefaultSelected({ items: getSelectedItem({ items: getItemsDefaultSelected({ items: carBrands }) }).models }),
        bodywork: getItemsDefaultSelected({ items: carBodyworks }),
        color: getItemsDefaultSelected({ items: carColors }),
        fuel: getItemsDefaultSelected({ items: carFuels }),
        transmission: getItemsDefaultSelected({ items: carTransmissions }),
        year: getItemsDefaultSelected({ items: carYears }),
      },
    },
  }
}
