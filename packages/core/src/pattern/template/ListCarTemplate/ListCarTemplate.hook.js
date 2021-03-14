import { useSelector } from 'react-redux'
import { getSelectedItemText } from '@papillonads/library/array'
import { paginate } from '@papillonads/library/pagination'
import { useBindActionCreators } from '../../../store/dispatch'
import { eventKey, messageType, pageContent } from '../../../library/constant'
import { alertTextApp } from '../../../library/constant/alertText/app'
import { alertTextListCars } from '../../../library/constant/alertText/listCars'

export function useListCarState() {
  const {
    uiCreateListCarsAction,
    uiUpdateListCarsAction,
    uiDeleteListCarsAction,
    uiSelectListCarsAction,
    uiSetListCarsEditAction,
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

  const selectedObjects = paginatedRandomCarsObjects.filter(({ isSelected }) => isSelected === true)

  const selectedObjectsLicenseList = selectedObjects.map(({ license }) => `${license}`).join('\n')

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

  function isValidCostCalculationValue({ value }) {
    if (value.length === 0) {
      contextSetProgressRegularThunk({ message: { text: alertTextApp.validation.mustNotBeEmpty, type: messageType.warning } })
      return false
    }

    // eslint-disable-next-line
    if (isNaN(value)) {
      contextSetProgressRegularThunk({ message: { text: alertTextApp.validation.mustBeNumber, type: messageType.warning } })
      return false
    }

    return true
  }

  /* istanbul ignore next */
  function searchBrandOnClick(newBrand) {
    uiSetListCarsSearchAction({ brand: newBrand.items, year: search.year, license: search.license })
  }

  /* istanbul ignore next */
  function searchYearOnClick(newYear) {
    uiSetListCarsSearchAction({ brand: search.brand, year: newYear.items, license: search.license })
  }

  /* istanbul ignore next */
  function searchLicenseOnChange(event) {
    uiSetListCarsSearchAction({
      brand: search.brand,
      year: search.year,
      license: event.target.value,
    })
  }

  /* istanbul ignore next */
  function searchLicenseOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetListCarsSearchAction({
        brand: search.brand,
        year: search.year,
        license: event.target.value,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListCarsSearchAction({
        brand: search.brand,
        year: search.year,
        license: null,
      })
      return
    }

    uiSetListCarsSearchAction({
      brand: search.brand,
      year: search.year,
      license: search.license,
    })
  }

  /* istanbul ignore next */
  function searchLicenseOnFocus() {
    uiSetListCarsSearchAction({
      brand: search.brand,
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
  function editObjectLicenseOnChange(event) {
    uiSetListCarsEditAction({ ...edit, license: event.target.value })
  }

  /* istanbul ignore next */
  function editObjectBodyworkOnClick(newBodywork) {
    uiSetListCarsEditAction({ ...edit, bodywork: newBodywork.items })
  }

  /* istanbul ignore next */
  function editObjectBrandOnClick(newBrand) {
    uiSetListCarsEditAction({ ...edit, brand: newBrand.items })
  }

  /* istanbul ignore next */
  function editObjectModelOnClick(newModel) {
    uiSetListCarsEditAction({ ...edit, model: newModel.items })
  }

  /* istanbul ignore next */
  function editObjectColorOnClick(newColor) {
    uiSetListCarsEditAction({ ...edit, color: newColor.items })
  }

  /* istanbul ignore next */
  function editObjectFuelOnClick(newFuel) {
    uiSetListCarsEditAction({ ...edit, fuel: newFuel.items })
  }

  /* istanbul ignore next */
  function editObjectTransmissionOnClick(newTransmission) {
    uiSetListCarsEditAction({ ...edit, transmission: newTransmission.items })
  }

  /* istanbul ignore next */
  function editObjectYearOnClick(newYear) {
    uiSetListCarsEditAction({ ...edit, year: newYear.items })
  }

  /* istanbul ignore next */
  function editObjectPriceOnChange(event) {
    if (!isValidCostCalculationValue({ value: event.target.value })) {
      return
    }

    uiSetListCarsEditAction({ ...edit, price: parseInt(event.target.value, 10) })
  }

  /* istanbul ignore next */
  function editObjectConsumptionOnChange(event) {
    if (!isValidCostCalculationValue({ value: event.target.value })) {
      return
    }

    uiSetListCarsEditAction({ ...edit, consumption: parseInt(event.target.value, 10) })
  }

  /* istanbul ignore next */
  function editObjectMaintenanceOnChange(event) {
    if (!isValidCostCalculationValue({ value: event.target.value })) {
      return
    }

    uiSetListCarsEditAction({ ...edit, maintenance: parseInt(event.target.value, 10) })
  }

  /* istanbul ignore next */
  function createObjectButtonOnClick() {
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

  /* istanbul ignore next */
  function updateObjectButtonOnClick() {
    if (selectedObjects.length > 1) {
      contextSetProgressRegularThunk({
        message: { text: alertTextListCars.action.update.validation.singleCar, type: messageType.warning },
      })
      return
    }

    if (selectedObjects.length === 0) {
      contextSetProgressRegularThunk({
        message: { text: alertTextListCars.action.update.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (!edit?.license) {
      contextSetProgressRegularThunk({
        message: { text: alertTextListCars.action.update.validation.emptyLicense, type: messageType.warning },
      })
      return
    }

    if (carsObjects.some(({ id, license }) => id !== edit.id && license === edit.license)) {
      contextSetProgressRegularThunk({
        message: { text: alertTextListCars.action.update.validation.sameLicense(edit.license), type: messageType.warning },
      })
      return
    }

    contextSetProgressConsentThunk({
      message: { text: alertTextListCars.action.update.consent.question(edit.license), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiUpdateListCarsAction()
            contextSetProgressRegularThunk({ message: { text: alertTextListCars.action.update.success, type: messageType.success } })
          },
          cancel: () => {
            contextSetProgressRegularThunk({
              message: { text: alertTextListCars.action.update.consent.cancel, type: messageType.warning },
            })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function deleteObjectButtonOnClick() {
    if (selectedObjects.length === 0) {
      contextSetProgressRegularThunk({
        message: { text: alertTextListCars.action.delete.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsLicenseList) {
      contextSetProgressConsentThunk({
        message: { text: alertTextListCars.action.delete.consent.question(selectedObjectsLicenseList), type: messageType.consent },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              uiDeleteListCarsAction({ selectedObjects })
              contextSetProgressRegularThunk({ message: { text: alertTextListCars.action.delete.success, type: messageType.success } })
            },
            cancel: () => {
              contextSetProgressRegularThunk({
                message: { text: alertTextListCars.action.delete.consent.cancel, type: messageType.warning },
              })
            },
          },
        },
      })
    }
  }

  return {
    alertTextListCars,
    pageContent,
    progress,
    currentPage,
    edit,
    sort,
    search,
    paginatedRandomCarsObjectsNamesValues,
    searchBrandOnClick,
    searchYearOnClick,
    searchLicenseOnChange,
    searchLicenseOnKeyUp,
    searchLicenseOnFocus,
    searchLicenseOnBlur,
    paginationOnClick,
    carsObjectsFlexGridOnChange,
    carsObjectsFlexGridOnClick,
    editObjectLicenseOnChange,
    editObjectBodyworkOnClick,
    editObjectBrandOnClick,
    editObjectModelOnClick,
    editObjectColorOnClick,
    editObjectFuelOnClick,
    editObjectTransmissionOnClick,
    editObjectYearOnClick,
    editObjectPriceOnChange,
    editObjectConsumptionOnChange,
    editObjectMaintenanceOnChange,
    createObjectButtonOnClick,
    updateObjectButtonOnClick,
    deleteObjectButtonOnClick,
  }
}
