import { useSelector } from 'react-redux'
import { getSelectedItemText } from '@papillonads/library/array'
import { paginate } from '@papillonads/library/pagination'
import { useBindActionCreators } from '../../../store/dispatch'
import { eventKey, messageType, pageContent } from '../../../library/constant'
import { alertTextListCars } from '../../../library/constant/alertText/listCars'

export function useListCarState() {
  const {
    uiCreateListCarsAction,
    uiSelectListCarsAction,
    uiSetListCarsSortAction,
    uiSetListCarsSearchAction,
    uiSetListCarsPaginationAction,
    contextSetProgressRegularThunk,
    contextSetProgressConsentThunk,
  } = useBindActionCreators()

  const progress = useSelector(({ context }) => context.progress)

  const {
    carsObjects,
    pagination: { pageSize, pageNumber, currentPage },
    edit,
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
    if (!edit.license) {
      contextSetProgressRegularThunk({
        message: { text: alertTextListCars.action.create.validation.emptyLicense, type: messageType.warning },
      })
      return
    }

    if (carsObjects.some(({ license }) => license === edit.license)) {
      contextSetProgressRegularThunk({
        message: { text: alertTextListCars.action.create.validation.sameLicense(edit.license), type: messageType.warning },
      })
      return
    }

    contextSetProgressConsentThunk({
      message: { text: alertTextListCars.action.create.consent.question(edit.license), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiCreateListCarsAction()
            contextSetProgressRegularThunk({ message: { text: alertTextListCars.action.create.success, type: messageType.success } })
          },
          cancel: () => {
            contextSetProgressRegularThunk({
              message: { text: alertTextListCars.action.create.consent.cancel, type: messageType.warning },
            })
          },
        },
      },
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
