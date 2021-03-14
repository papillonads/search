import { useSelector } from 'react-redux'
import { getSelectedItemText } from '@papillonads/library/array'
import { paginate } from '@papillonads/library/pagination'
import { useBindActionCreators } from '../../../store/dispatch'
import { eventKey, messageType, pageContent } from '../../../library/constant'
import { alertTextListCars } from '../../../library/constant/alertText/listCars'
import { carBrandsDefault } from '../../../library/constant/carBrands'

export function useListCarState() {
  const {
    uiSelectListCarsAction,
    uiSetListCarsSortAction,
    uiSetListCarsSearchAction,
    uiSetListCarsPaginationAction,
    contextSetProgressRegularThunk,
  } = useBindActionCreators()

  const progress = useSelector(({ context }) => context.progress)

  const {
    carsObjects,
    pagination: { pageSize, pageNumber, currentPage },
    sort,
    search,
  } = useSelector(({ ui }) => ui.listCars)

  const paginatedRandomCarsObjects = paginate({
    array: search.carsObjects || carsObjects,
    pageSize,
    pageNumber,
  })

  const paginatedRandomCarsObjectsNamesValues = paginatedRandomCarsObjects.map((carsObject) =>
    (({ id, isSelected, license, brand, model, year, bodywork, color, fuel, transmission, ...rest }) => ({
      names: Object.keys({
        id,
        isSelected,
        license,
        brand,
        model,
        year,
        bodywork,
        color,
        fuel,
        transmission,
        ...rest,
      }),
      values: Object.values({
        id,
        isSelected,
        license,
        brand: getSelectedItemText({ items: brand }),
        model: getSelectedItemText({ items: model }),
        year: getSelectedItemText({ items: year }),
        bodywork: getSelectedItemText({ items: bodywork }),
        color: getSelectedItemText({ items: color }),
        fuel: getSelectedItemText({ items: fuel }),
        transmission: getSelectedItemText({ items: transmission }),
        ...rest,
      }),
    }))(carsObject),
  )

  const searchBrand = search?.brand?.find(({ isSelected }) => isSelected === true)
  const searchModel = search?.model?.find(({ isSelected }) => isSelected === true)

  const isSearchEnabled =
    !progress.isLoading &&
    searchBrand?.text !== carBrandsDefault[0].name &&
    searchModel?.text !== undefined &&
    searchModel?.text !== carBrandsDefault[0].models[0].name &&
    search?.license?.length > 0

  /* istanbul ignore next */
  function searchBrandOnChange(newBrand) {
    uiSetListCarsSearchAction({ brand: newBrand.items, model: null, year: search.year, license: search.license })
  }

  /* istanbul ignore next */
  function searchModelOnChange(newModel) {
    uiSetListCarsSearchAction({ brand: search.brand, model: newModel.items, year: search.year, license: search.license })
  }

  /* istanbul ignore next */
  function searchYearOnChange(newYear) {
    uiSetListCarsSearchAction({ brand: search.brand, model: search.model, year: newYear.items, license: search.license })
  }

  /* istanbul ignore next */
  function searchLicenseOnChange(event) {
    uiSetListCarsSearchAction({
      brand: search.brand,
      model: search.model,
      year: search.year,
      license: event.target.value,
    })
  }

  /* istanbul ignore next */
  function searchLicenseOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetListCarsSearchAction({
        brand: search.brand,
        model: search.model,
        year: search.year,
        license: event.target.value,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListCarsSearchAction({
        brand: search.brand,
        model: search.model,
        year: search.year,
        license: null,
      })
      return
    }

    uiSetListCarsSearchAction({
      brand: search.brand,
      model: search.model,
      year: search.year,
      license: search.license,
    })
  }

  /* istanbul ignore next */
  function searchLicenseOnFocus() {
    uiSetListCarsSearchAction({
      brand: search.brand,
      model: search.model,
      year: search.year,
      license: search.license,
    })
  }

  /* istanbul ignore next */
  function searchLicenseOnBlur() {}

  /* istanbul ignore next */
  function paginationOnClick(paginationAction) {
    uiSetListCarsPaginationAction({ paginationAction })
    contextSetProgressRegularThunk({ message: { text: alertTextListCars.pagination.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function carsObjectsFlexGridOnChange(changedObjects) {
    uiSelectListCarsAction({ changedObjects })
  }

  /* !!! istanbul ignore next  !!! */
  function carsObjectsFlexGridOnClick(newSort) {
    uiSetListCarsSortAction({ newSort })
  }

  /* istanbul ignore next */
  function searchCarsButtonOnClick() {
    contextSetProgressRegularThunk({ message: { text: alertTextListCars.action.search.progress, type: messageType.info }, isLoading: true })
    uiSetListCarsSearchAction({
      brand: search.brand,
      model: search.model,
      year: search.year,
      license: search.license,
    })
  }

  return {
    alertTextListCars,
    pageContent,
    progress,
    currentPage,
    sort,
    search,
    paginatedRandomCarsObjectsNamesValues,
    isSearchEnabled,
    searchBrandOnChange,
    searchModelOnChange,
    searchYearOnChange,
    searchLicenseOnChange,
    searchLicenseOnKeyUp,
    searchLicenseOnFocus,
    searchLicenseOnBlur,
    paginationOnClick,
    carsObjectsFlexGridOnChange,
    carsObjectsFlexGridOnClick,
    searchCarsButtonOnClick,
  }
}
