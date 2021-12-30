import { carBrandsDefault } from '../../../../../library/constant/carBrands'
import { carYearsDefault } from '../../../../../library/constant/carYears'

export function getListCarsObjectsByBrand({ objects, brand }) {
  if (!brand) {
    return objects
  }

  const selectedObjectBrandText = brand.find(({ isSelected }) => isSelected === true).text

  if (selectedObjectBrandText === carBrandsDefault[0].name) {
    return objects
  }

  let objectsByBrand = []

  objectsByBrand = [
    ...objectsByBrand,
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...objects?.filter((filterObject) => {
      const selectedFilterObjectBrandText = filterObject.brand.find(({ isSelected }) => isSelected === true).text

      return selectedFilterObjectBrandText === selectedObjectBrandText
    }),
  ]

  return objectsByBrand?.filter((item, position) => objectsByBrand.indexOf(item) === position)
}

export function getListCarsObjectsByModel({ objects, model }) {
  if (!model) {
    return objects
  }

  const selectedObjectModelText = model.find(({ isSelected }) => isSelected === true).text

  if (selectedObjectModelText === carBrandsDefault[0].models[0].name) {
    return objects
  }

  let objectsByModel = []

  objectsByModel = [
    ...objectsByModel,
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...objects?.filter((filterObject) => {
      const selectedFilterObjectModelText = filterObject.model.find(({ isSelected }) => isSelected === true).text

      return selectedFilterObjectModelText === selectedObjectModelText
    }),
  ]

  return objectsByModel?.filter((item, position) => objectsByModel.indexOf(item) === position)
}

export function getListCarsObjectsByYear({ objects, year }) {
  if (!year) {
    return objects
  }

  const selectedObjectYearText = year.find(({ isSelected }) => isSelected === true).text

  if (selectedObjectYearText === carYearsDefault[0].name) {
    return objects
  }

  let objectsByYear = []

  objectsByYear = [
    ...objectsByYear,
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...objects?.filter((filterObject) => {
      const selectedFilterObjectYearText = filterObject.year.find(({ isSelected }) => isSelected === true).text

      return selectedFilterObjectYearText === selectedObjectYearText
    }),
  ]

  return objectsByYear?.filter((item, position) => objectsByYear.indexOf(item) === position)
}

export function getListCarsObjectsByLicense({ objects, license }) {
  if (!license) {
    return objects
  }

  let objectsByLicense = []

  objectsByLicense = [
    ...objectsByLicense,
    ...objects.filter((filterObject) => filterObject.license.toLowerCase().includes(license.toLowerCase())),
  ]

  return objectsByLicense.filter((item, position) => objectsByLicense.indexOf(item) === position)
}

export function getListCarsSearch({ search, newSearchCarsObjects }) {
  let newSearch

  newSearch = {
    brand: search?.brand,
    model: search?.model,
    year: search?.year,
    license: search?.license,
    carsObjects: !search
      ? null
      : getListCarsObjectsByBrand({
          objects: newSearchCarsObjects,
          brand: search?.brand,
        }),
  }

  newSearch = {
    brand: search?.brand,
    model: search?.model,
    year: search?.year,
    license: search?.license,
    carsObjects: !search
      ? newSearch?.carsObjects
      : getListCarsObjectsByModel({
          objects: newSearch?.carsObjects || newSearchCarsObjects,
          model: search?.model,
        }),
  }

  newSearch = {
    brand: search?.brand,
    model: search?.model,
    year: search?.year,
    license: search?.license,
    carsObjects: !search
      ? newSearch?.carsObjects
      : getListCarsObjectsByYear({
          objects: newSearch?.carsObjects || newSearchCarsObjects,
          year: search?.year,
        }),
  }

  newSearch = {
    brand: search?.brand,
    model: search?.model,
    year: search?.year,
    license: search?.license,
    carsObjects: !search
      ? newSearch?.carsObjects
      : getListCarsObjectsByLicense({
          objects: newSearch?.carsObjects || newSearchCarsObjects,
          license: search?.license,
        }),
  }

  return newSearch
}
