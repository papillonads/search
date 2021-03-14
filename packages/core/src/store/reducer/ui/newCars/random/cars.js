import { getCurrentIndex, getIndexItems, getRange, getSelectedItem, getItemsDefaultSelected } from '@papillonads/library/array'
import { sortDefault, sortObjects } from '@papillonads/library/sort'
import { getRandomCarsObjects } from './carsObjects'
import { pageSize, pageNumber, maxRange } from '../../../../../library/constant'
import { carBrands, carBrandsDefault } from '../../../../../library/constant/carBrands'
import { carBodyworks } from '../../../../../library/constant/carBodyworks'
import { carColors } from '../../../../../library/constant/carColors'
import { carFuels } from '../../../../../library/constant/carFuels'
import { carTransmissions } from '../../../../../library/constant/carTransmissions'
import { carYears, carYearsDefault } from '../../../../../library/constant/carYears'

export function getNewCars() {
  const carsObjects = sortObjects({
    sort: sortDefault,
    objects: getRandomCarsObjects({ maxRange }),
  })

  const items = getRange({
    range: Math.ceil(carsObjects.length / pageSize.cars),
  }).map((_, index) => ({
    isCurrent: index === pageNumber - 1,
  }))

  const currentPage = {
    indexItems: getIndexItems(items),
    currentIndex: getCurrentIndex(getIndexItems(items)),
    canMoveBackwards: getCurrentIndex(getIndexItems(items)) > 0,
    canMoveForward: getCurrentIndex(getIndexItems(items)) < getIndexItems(items).length - 1,
  }

  const brand = getItemsDefaultSelected({ defaultItems: carBrandsDefault, items: carBrands })
  const year = getItemsDefaultSelected({ defaultItems: carYearsDefault, items: carYears })

  return {
    pagination: {
      pageSize: pageSize.cars,
      pageNumber,
      currentPage,
    },
    carsObjects,
    search: {
      brand: brand.map(({ models, ...rest }) => ({ ...rest })),
      year,
      carsObjects: null,
    },
    sort: sortDefault,
    edit: {
      brand: getItemsDefaultSelected({ items: carBrands }),
      model: getItemsDefaultSelected({ items: getSelectedItem({ items: getItemsDefaultSelected({ items: carBrands }) }).models }),
      bodywork: getItemsDefaultSelected({ items: carBodyworks }),
      color: getItemsDefaultSelected({ items: carColors }),
      fuel: getItemsDefaultSelected({ items: carFuels }),
      transmission: getItemsDefaultSelected({ items: carTransmissions }),
      year: getItemsDefaultSelected({ items: carYears }),
    },
  }
}
