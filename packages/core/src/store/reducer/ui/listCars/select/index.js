import { getSelectedItem, getItemsDefaultSelected } from '@papillonads/library/array'
import { selectCarsObjects } from './carsObjects'
import { getListCarsSearch } from '../get'
import { carBrands } from '../../../../../library/constant/carBrands'
import { carBodyworks } from '../../../../../library/constant/carBodyworks'
import { carColors } from '../../../../../library/constant/carColors'
import { carFuels } from '../../../../../library/constant/carFuels'
import { carTransmissions } from '../../../../../library/constant/carTransmissions'
import { carYears } from '../../../../../library/constant/carYears'

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

  const objectsSelected = newCarsObjects.filter(({ isSelected }) => isSelected === true)

  return {
    ...state,
    listCars: {
      ...state.listCars,
      carsObjects: newCarsObjects,
      search: {
        ...newSearch,
        carsObjects: newSearch.carsObjects,
      },
      edit:
        objectsSelected.length === 1
          ? {
              ...objectsSelected[0],
              brand: objectsSelected[0].brand?.length === 0 ? null : objectsSelected[0].brand,
              model: objectsSelected[0].model?.length === 0 ? null : objectsSelected[0].model,
              bodywork: objectsSelected[0].bodywork?.length === 0 ? null : objectsSelected[0].bodywork,
              color: objectsSelected[0].color?.length === 0 ? null : objectsSelected[0].color,
              fuel: objectsSelected[0].fuel?.length === 0 ? null : objectsSelected[0].fuel,
              transmission: objectsSelected[0].transmission?.length === 0 ? null : objectsSelected[0].transmission,
              year: objectsSelected[0].year?.length === 0 ? null : objectsSelected[0].year,
            }
          : {
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
