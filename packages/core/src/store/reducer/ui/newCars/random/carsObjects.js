import { v4 as uuidv4 } from 'uuid'
import { getRange, getItemsRandomSelected, getSelectedItem } from '@papillonads/library/array'
import { getRandomDate } from '@papillonads/library/date'
import { getRandomDecimal, getRandomInteger } from '@papillonads/library/number'
import { getRandomAlphaNumericStringByLength } from '@papillonads/library/string'
import { carBrands } from '../../../../../library/constant/carBrands'
import { carBodyworks } from '../../../../../library/constant/carBodyworks'
import { carColors } from '../../../../../library/constant/carColors'
import { carFuels } from '../../../../../library/constant/carFuels'
import { carTransmissions } from '../../../../../library/constant/carTransmissions'
import { carYears } from '../../../../../library/constant/carYears'

export function getNewCarsObject({ object }) {
  const id = uuidv4()

  return {
    id,
    license: object?.license ?? null,
    brand: object?.brand ?? null,
    model: object?.model ?? null,
    bodywork: object?.bodywork ?? null,
    color: object?.color ?? null,
    fuel: object?.fuel ?? null,
    transmission: object?.transmission ?? null,
    year: object?.year ?? null,
    price: object?.price ?? 0,
    consumption: object?.consumption ?? 0,
    maintenance: object?.maintenance ?? 0,
    modified: null,
    created: new Date(),
    isSelected: false,
  }
}

function getRandomCarsObject() {
  const brand = getItemsRandomSelected({ items: carBrands })
  const model = getItemsRandomSelected({ items: getSelectedItem({ items: brand }).models })

  return {
    id: uuidv4(),
    license: `${getRandomAlphaNumericStringByLength({ length: getRandomInteger({ min: 1, max: 3 }) }).toUpperCase()}-${getRandomInteger({
      min: 1,
      max: 999,
    })}-${getRandomAlphaNumericStringByLength({ length: getRandomInteger({ min: 1, max: 3 }) }).toUpperCase()}`,
    brand: brand.map(({ models, ...rest }) => ({ ...rest })),
    model,
    bodywork: getItemsRandomSelected({ items: carBodyworks }),
    color: getItemsRandomSelected({ items: carColors }),
    fuel: getItemsRandomSelected({ items: carFuels }),
    transmission: getItemsRandomSelected({ items: carTransmissions }),
    year: getItemsRandomSelected({ items: carYears }),
    price: getRandomInteger({ min: 1000, max: 100000 }),
    consumption: getRandomDecimal({ min: 1, max: 25 }),
    maintenance: getRandomInteger({ min: 500, max: 5000 }),
    modified: null,
    created: getRandomDate(),
    isSelected: false,
  }
}

export function getRandomCarsObjects({ maxRange }) {
  return getRange({ range: getRandomInteger({ max: maxRange }) }).map(() => getRandomCarsObject())
}
